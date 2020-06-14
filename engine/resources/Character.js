import Resource from '../Resource';
import Sprite from './Sprite';
import Dialog from './Dialog';
import {
    range
} from '../utils/index';

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
        if (this.dialog && this.dialog instanceof Dialog) {
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
        }
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

export default Character;