
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.GameEngine = factory());
}(this, (function () { 'use strict';

    class UI {
        uiElement;

        destination;

        charactersOnScreen = [];

        constructor(uiElement, destination) {
            this.uiElement = typeof uiElement === 'string' ? document.querySelector(uiElement) : uiElement;
            this.destination = destination;
            this.initailize();
        }

        initailize() {
            this.loadDestination(this.destination);
        }

        loadDestination(destination) {
            this.clear();
            destination.render(this.uiElement);
        }

        clear() {
            this.uiElement.innerHTML = '';
        }

        transtitionTo() {}

        render() {}
    }

    class Resource {
        /**
         * This sets a property of a resource

         * @param {string} property 
         * @param {mixed} value 
         */
        set(property, value) {
            this[property] = value;
        }

        /**
         * Returns property of resource

         * @param {string} property 
         */
        get(property) {
            return this[property];
        }
    }

    class Tile extends Resource {
        x;
        y;
        dimensions;
        color = 'green';
        element;
        constructor(x, y, isEdge = false, dimensions = {
            width: 30,
            height: 30
        }, ) {
            super();
            this.x = x;
            this.y = y;
            this.isEdge = isEdge;
            this.dimensions = dimensions;
            this.element = this.createElement();
        }

        createElement(type = 'div') {
            const element = document.createElement(type);
            element.classList.add('game-tile');
            if (this.isEdge) {
                element.classList.add('is-edge');
            }
            element.style.backgroundColor = this.color;
            element.style.width = this.dimensions.width;
            element.style.height = this.dimensions.height;
            return element;
        }

        render(ui) {
            ui.appendChild(this.element);
        }

        destroy() {
            this.element.remove();
        }
    }

    const range = length => [...Array(length).keys()];

    class Destination extends Resource {
        name;

        columns;

        rows;

        background;

        tiles;

        characters = [];

        dialog;

        constructor(options) {
            super();
            if (!options.name) {
                throw new Error('Destination requires a name!');
            }
            this.name = options.name;
            this.rows = range(options.rows || 11);
            this.columns = range(options.columns || 11);
            this.characters = options.characters || [];
            this.background = options.background || null;
            this.dialog = options.dialog || null;
        }

        buildMap() {
            const map = [];
            this.rows.forEach(row => {
                this.columns.forEach(col => {
                    const isEdge = (col + 1) % this.rows.length == 0;
                    map.push(new Tile(row, col, isEdge));
                });
            });
            this.tiles = map;
            return map;
        }

        startDialog() {
            if (this.dialog && this.dialog instanceof Dialog) {
                this.dialog.prompt();
            }
        }

        render(ui) {
            const map = this.buildMap();
            map.forEach(tile => tile.render(ui));
            this.startDialog();
            if (this.background) {
                document.body.style.backgroundImage = `url('${this.background}')`;
                document.body.style.backgroundSize = 'cover';
            }
            // load characters
            if (this.characters.length) {
                this.characters.forEach(character => {
                    character.render(ui);
                });
            }
        }

        destroy() {
            // remove all tiles
            this.tiles.forEach(tile => tile.destroy());
            // remove all characters
            this.characters.forEach(character => character.destroy());
        }
    }

    window.Destination = Destination;

    class DialogContent extends Resource {
        text;
        options;
        takesInput;
        then;
        completed = false;

        get hasOptions() {
            return this.options.length;
        }

        constructor(options) {
            super();
            if (!options.text) {
                throw new Error('DialogContent requires text option!');
            }
            this.text = options.text;
            this.options = options.options || [];
            this.takesInput = options.takesInput || false;
            this.then = options.then || null;
        }
    }

    window.DialogContent = DialogContent;

    class Dialog$1 extends Resource {
        transcript = [];
        dialogElement;

        constructor(scripts = [], dialogElement = '#dialog') {
            super();
            // allow a string for quick dialog
            if (typeof scripts === 'string') {
                scripts = [new DialogContent({
                    text: scripts
                })];
            }
            this.transcript = scripts;
            this.dialogElement = typeof dialogElement === 'string' ? document.querySelector(dialogElement) : dialogElement;
        }

        get currentDialogContent() {
            return this.transcript.find(dialogContent => !dialogContent.get('completed'));
        }

        // added target to show context of dialog
        async prompt(target = null) {
            this.set('isActive', true);
            return new Promise(async (resolve, reject) => {
                const dialogContent = this.currentDialogContent;
                if (!dialogContent) return;
                await this.displayText(dialogContent.get('text'));
                if (dialogContent.get('hasOptions') && typeof dialogContent.get('then') === 'function') {
                    await this.showOptions(dialogContent, target);
                } else if (dialogContent.get('takesInput') && typeof dialogContent.get('then') === 'function') {
                    this.getPlayerInput(dialogContent);
                }
                // set this dialog content as completed
                dialogContent.set('completed', true);
                this.set('isActive', false);
                resolve(true);
                return this.prompt();
            });
        }

        displayText(text) {
            this.clear();
            return new Promise((resolve, reject) => {
                const textArray = typeof text === 'function' ? Array.from(text()) : Array.from(text);
                let textCount = 0;
                textArray.forEach((char, index) => {
                    setTimeout(() => {
                        this.dialogElement.innerHTML += char;
                        textCount++;
                        if (textCount === textArray.length) {
                            resolve(true);
                        }
                    }, index === 0 ? 20 : 50 * index);
                });
            });
        }

        showOptions(dialogContent, target) {
            const options = dialogContent.get('options');
            return new Promise((resolve, reject) => {
                options.forEach(option => {
                    const optionButton = document.createElement('button');
                    optionButton.classList.add('dialog-option');
                    optionButton.innerHTML = typeof option === 'object' ? option.name : option;
                    optionButton.onclick = event => {
                        dialogContent.then(option, {
                            gameTarget: target,
                            ...event
                        });
                        return resolve(true);
                    };
                    this.dialogElement.appendChild(optionButton);
                });
            });
        }

        getPlayerInput(dialogContent) {
            const input = prompt(dialogContent.get('text'));
            if (dialogContent.get('takesInput') && !input) {
                return this.getPlayerInput(dialogContent);
            }
            return dialogContent.then(input);
        }

        clear() {
            this.dialogElement.innerHTML = '';
        }
    }

    window.Dialog = Dialog$1;

    class Sprite extends Resource {
        asset;
        width;
        height;

        constructor(options = {}) {
            super();
            if (!options.asset) {
                throw new Error('Sprite requires asset!');
            }
            this.asset = options.asset;
            this.width = options.width || 36;
            this.height = options.height || 36;
            this.spriteElement = this.createSpriteElement();
        }

        createSpriteElement() {
            const spriteElement = document.createElement('div');
            spriteElement.classList.add('game-sprite');
            spriteElement.style.width = this.width;
            spriteElement.style.height = this.height;
            spriteElement.style.backgroundPosition = `0 0`;
            spriteElement.style.backgroundImage = `url('${this.asset}')`;
            return spriteElement;
        }
    }

    class Character extends Resource {
        /**
         * The character's name
         * 
         * @var string
         */
        name;

        /**
         * The character's health
         * 
         * @var integer
         */
        health;

        /**
         * The character's attack
         * 
         * @var integer
         */
        attack;

        /**
         * The character's defence
         * 
         * @var integer
         */
        defence;

        /**
         * The character's magic
         * 
         * @var integer
         */
        magic;

        /**
         * The character's magic
         * 
         * @var Engine\Resource\Sprite
         */
        sprite;

        /**
         * The character playable or not
         * 
         * @var boolean
         */
        isPlayable;

        /**
         * The character's x-axis position
         * 
         * @var integer
         */
        get x() {
            return this.spriteElement.style.left;
        };

        /**
         * The character's y-axis position
         * 
         * @var integer
         */
        get y() {
            return this.spriteElement.style.top;
        };

        dialog;
        isDefending;
        isDefeated;

        /**
         * Creates a new Character
         *
         * @param {string} name 
         * @param {integer} health 
         * @param {integer} attack 
         * @param {integer} defence 
         * @param {integer} magic 
         */
        constructor(options) {
            super();
            if (!options.name) {
                throw new Error('Character requires a name!');
            }
            this.name = options.name;
            this.health = options.health || 100;
            this.attack = options.attack || 10;
            this.defence = options.defence || 10;
            this.magic = options.magic || 10;
            this.dialog = options.dialog || null;
            this.sprite = new Sprite(options.spriteOptions || {});
            this.move(options.x || 0, options.y || 0);
        }

        /**
         * Actions the character can perform
         */
        actions = {
            attack: function (target) {
                this.set('isDefending', false);
                if (target.get('isDefending')) {
                    target.health = target.health - (this.attack - target.defence);
                } else {
                    target.health = target.health - this.attack;
                }
                // use shake animation
                target.shake();
                if (target.health <= 0) {
                    target.defeated();
                }
            },

            defend: function (target) {
                this.set('isDefending', true);
            },

            use: function (item) {

            }
        }

        doAction(actionName, ...args) {
            if (this.actions[actionName] && typeof this.actions[actionName] === 'function') {
                return this.actions[actionName].bind(this)(...args);
            }
            return false;
        }

        startDialog() {
            if (this.dialog && this.dialog instanceof Dialog$1) {
                this.dialog.prompt(this);
            }
        }

        get isTalking() {
            return this.dialog && this.dialog.get('isActive');
        }

        checkSurroundings(destination) {
            // check if plaer is in range of any characters or 
            // items in the current game destination
            if (destination.characters.length) {
                for (let i = 0; i < destination.characters.length; i++) {
                    let npc = destination.characters[i];
                    if (this.inRangeOf(npc)) {
                        return npc;
                    }
                }
            }
            return false;
        }

        inRangeOf(target) {
            const range = 60;
            const isBetween = (number, min, max) => {
                return number >= min && number <= max;
            };
            // see if in range of another character
            if (target instanceof Character) {
                const targetX = parseInt(target.x);
                const targetY = parseInt(target.y);
                const y = parseInt(this.y);
                const x = parseInt(this.x);
                // check if next to on x-axis or y axis
                if (isBetween(x, targetX - range, targetX + range) && isBetween(y, targetY - range, targetY + range)) {
                    return target;
                }
            }
            return false;
        }

        defeated() {
            this.set('isDefeated', true);
        }

        autoMove() {
            // automatically move npc around map
        }

        render(uiElement) {
            this.move(this.x, this.y);
            uiElement.appendChild(this.spriteElement);
        }

        move(x, y) {
            this.spriteElement.style.left = x;
            this.spriteElement.style.top = y;
        }

        moveUp(y = -20) {
            this.move(this.x, parseInt(this.y) + y);
        }

        moveDown(y = 20) {
            this.move(this.x, parseInt(this.y) + y);
        }

        moveLeft(x = -20) {
            this.move(parseInt(this.x) + x, this.y);
        }

        moveRight(x = 20) {
            this.move(parseInt(this.x) + x, this.y);
        }

        shake() {
            range(4).forEach(i => {
                if (i % 2 === 0) {
                    this.moveLeft();
                } else {
                    this.moveRight();
                }
            });
        }

        get spriteElement() {
            return this.sprite.get('spriteElement');
        }

        destroy() {
            this.spriteElement.remove();
        }
    }

    window.Character = Character;

    class Game {
        name;
        player;
        destination;
        ui;

        constructor(options) {
            this.name = options.name;
            this.player = options.player;
            this.destination = options.destination;
            this.ui = new UI(options.dom || '#game', this.destination);
            this.initialize();
        }

        get uiElement() {
            return this.ui.uiElement;
        }

        initialize() {
            // append player to game ui
            this.uiElement.appendChild(this.player.spriteElement);
            // render player stats
            this.renderStats();
            // initialize control
            document.addEventListener('keydown', event => {
                const {
                    keyCode
                } = event;
                switch (keyCode) {
                    // move player up
                    case 38:
                        this.player.moveUp();
                        break;
                        // move player down
                    case 40:
                        this.player.moveDown();
                        break;
                        // move player left
                    case 37:
                        this.player.moveLeft();
                        break;
                        // move player right
                    case 39:
                        this.player.moveRight();
                        break;
                        // user has pressed enter key
                    case 13:
                        const target = this.player.checkSurroundings(this.destination);
                        if (target && !target.isTalking) {
                            target.startDialog();
                        }
                        break;
                }
            });
        }

        transitionTo(destination) {
            this.destination.destroy();
            this.destination = destination;
            destination.render(this.uiElement);
        }

        movePlayer(x, y) {
            this.player.move(x, y);
        }

        async playDialog(dialog) {
            if (typeof dialog === 'string') {
                return new Dialog$1(dialog).prompt();
            }
            return dialog.prompt();
        }

        async startBattle(enemy) {
            return new Promise(async (resolve, reject) => {
                while (!enemy.get('isDefeated') && !this.player.get('isDefeated')) {
                    const battleDialog = new Dialog$1([
                        new DialogContent({
                            text: 'Select your move',
                            options: ['Attack', 'Defend'],
                            then: (selected, event) => {
                                if (selected === 'Attack') {
                                    this.player.doAction('attack', enemy);
                                    // this.playDialog(`${this.player.name} attacks ${enemy.name}`);
                                } else {
                                    this.player.doAction('defend');
                                    // this.playDialog(`${this.player.name} defends against ${enemy.name}`);
                                }
                            }
                        })
                    ]);
                    await game.playDialog(battleDialog);
                    // enemys move
                    const entropy = Math.round(Math.random() * 10);
                    if (entropy % 2 == 0) {
                        enemy.doAction('attack', this.player);
                        // this.playDialog(`${enemy.name} attacks ${this.player.name}`);
                    } else {
                        enemy.doAction('defend');
                        // this.playDialog(`${enemy.name} defends against ${this.player.name}`);
                    }
                    // update stats
                    this.renderStats();
                }
                resolve(enemy.get('isDefeated'));
            })
        }

        renderStats() {
            const playerStatsElement = document.querySelector('#playerStats');
            playerStatsElement.innerHTML = `<span class="player-name">Name: ${this.player.get('name')}</span><span class="player-health">Health: ${this.player.get('health')}</span>`;
            playerStatsElement.style.display = 'flex';
        }

        run() {

        }
    }

    window.Game = Game;

    return Game;

})));
