import UI from './UI';
import Destination from './resources/Destination';
import Dialog from './resources/Dialog';
import Character from './resources/Character';
import DialogContent from './resources/DialogContent';

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
            return new Dialog(dialog).prompt();
        }
        return dialog.prompt();
    }

    async startBattle(enemy) {
        return new Promise(async (resolve, reject) => {
            while (!enemy.get('isDefeated') && !this.player.get('isDefeated')) {
                const battleDialog = new Dialog([
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

export default Game;