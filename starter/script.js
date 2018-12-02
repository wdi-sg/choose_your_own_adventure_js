let player = {};
let weaponList = {
    melee: [],
    range: [],
};
let enemyList = [];

const weaponNameList = {
    material: ['wood', 'bronze', 'iron'],
    melee: ['dagger', 'spear', 'sword'],
    range: ['bow', 'sling', 'BFG']
};

const enemyNameList = ['Algebra', 'Hunger', 'Tulips', 'Fear', 'Doubt', 'Loathing', 'Dog', 'Hubris', 'Q', 'M']
const fightContainer = document.getElementById("fight-container");
const playerToolbarWeapons = document.getElementById("player-weapons");

class _character {
    constructor(name, health, experience, gold, display) {
        this.name = name; //string
        this.health = health; //num
        this.experience = experience; //num
        this.gold = gold; //num
        this.display = display; //obj
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}
class _player extends _character {
    constructor(name, health, experience, level, gold, melee, range, display, x, y) {
        super(name, health, experience, gold, display);
        this.weapons = {
            melee: [melee],
            range: [range]
        };
        this.level = level;
        this.x = x;
        this.y = y;
    }
    displayPlayer() {
        this.display.id = "player";
        let displayPlayerNode = document.createTextNode(`Player`);
        this.display.appendChild(displayPlayerNode);
        let grid = document.getElementById(`x${this.x}y${this.y}`);
        grid.appendChild(this.display);
        let playerToolbarStatus = document.getElementById("player-status");
        playerToolbarStatus.innerHTML = `${this.name}'s level: ${this.level} Health: ${this.health} Exp: ${this.experience} Gold: ${this.gold}`;
    }
    updatePlayer() {
        if (this.experience >= 100) {
            this.experience = 0;
            this.level++
        };
        let playerToolbarStatus = document.getElementById("player-status");
        playerToolbarStatus.innerHTML = `${this.name}'s level: ${this.level} Health: ${this.health} Exp: ${this.experience} Gold: ${this.gold}`;
        console.log('moving char');
        this.updatePlayerVision();
    }
    updatePlayerVision() {
        let grid = document.getElementById(`x${this.x}y${this.y}`);
        grid.appendChild(this.display);
    }
}
class _enemy extends _character {
    constructor(name, health, experience, gold, damage, display) {
        super(name, health, experience, gold, display);
        this.damage = damage;
    }
    displayEnemy() {
        this.display.className = "enemy";
        let displayEnemyNode = document.createTextNode(`${this.name} Health:${this.health}`);
        this.display.appendChild(displayEnemyNode);
        fightContainer.appendChild(this.display);
    }
    updateEnemy() {
        if (this.health <= 0) {
            this.display.innerHTML = `${this.name} has died.`;
        } else {
            this.display.innerHTML = `${this.name} Health:${this.health}`;
        }
    }
    removeEnemy(){
        this.display.innerHTML = '';
    }
}

class _weapon {
    constructor(name, damage, gold, isRanged, display) {
        this.name = name; //string
        this.damage = damage; //num
        this.gold = gold; //num
        this.isRanged = isRanged; //boolean
        this.display = display;
    }
    displayWeapon() {
        this.display.className = "inventory-weapons";
        let displayWeaponNode = document.createTextNode(`${this.name}`);
        this.display.appendChild(displayWeaponNode);
        playerToolbarWeapons.appendChild(this.display);

    }
    displayWeaponBattle() {
        this.display.type = "button";
        this.display.value = `${this.name}`;
        fightContainer.appendChild(this.display);
        this.display.addEventListener("click", () => {
            this.dealDamage();
            battleLoop()
        });

    }
    dealDamage() {
        if (enemyList) {
            if (this.isRanged === false) {
                for (enemy in enemyList) {
                    if (enemyList[enemy].health > 0) {
                        enemyList[enemy].takeDamage(this.damage);
                        enemyList[enemy].updateEnemy();
                        console.log(`${this.name} did ${this.damage} damage.`);
                        break;
                    };
                }
            } else {
                for (enemy in enemyList) {
                    if (enemyList[enemyList.length - 1 - enemy].health > 0) {
                        enemyList[enemyList.length - 1 - enemy].takeDamage(this.damage);
                        enemyList[enemyList.length - 1 - enemy].updateEnemy();
                        console.log(`${this.name} did ${this.damage} damage.`);
                        break;
                    }
                }
            }
        }
    }
}

const populateWeaponList = () => {
    for (let i = 1; i - 1 < weaponNameList.material.length; i++) {
        for (let j = 2; j - 2 < weaponNameList.melee.length; j++) {
            weaponList.melee.push(new _weapon(`${weaponNameList.material[i-1]} ${weaponNameList.melee[j-2]}`, 80 * i * j, 100 * i * j, false, document.createElement('div')));
        }
        for (let j = 2; j - 2 < weaponNameList.range.length; j++) {
            weaponList.range.push(new _weapon(`${weaponNameList.material[i-1]} ${weaponNameList.range[j-2]}`, 120 * i * j, 200 * i * j, true, document.createElement('div')));
        };
    };
}

const displayPlayer = (playerWeapons, player) => {

    for (weapon in playerWeapons.melee) {
        if (playerWeapons.melee[weapon]) {
            playerWeapons.melee[weapon].displayWeapon();

        }
    }
    for (weapon in playerWeapons.range) {
        if (playerWeapons.range[weapon]) {
            playerWeapons.range[weapon].displayWeapon();

        }
    }
    for (weapon in playerWeapons.melee) {
        playerWeapons.melee[weapon].displayWeaponBattle();
    }
    for (weapon in playerWeapons.range) {
        playerWeapons.range[weapon].displayWeaponBattle();
    }

    player.displayPlayer();
}

const gameMenu = document.getElementById('game-menu');
const playerToolbar = document.getElementById('player-toolbar');

const startGame = () => {
    populateWeaponList();
    let playerName = document.getElementById('playerName').value;
    player = new _player(`${playerName}`, 100, 0, 3, 0, weaponList.melee[0], weaponList.range[8], document.createElement("div"), ranN(10), ranN(10));
    player.weapons.melee.push(weaponList.melee[6]);
    player.weapons.range.push(weaponList.range[4]);
    generateMap(10, 10);
    displayPlayer(player.weapons, player);

    gameMenu.style.display = "none";
    playerToolbar.style.display = "block";
}

const ranN = (num) => Math.floor(Math.random() * num) + 1;

const enterCell = (x, y) => {
    eventContainer.style.display = "block";
    gridArray[x - 1][y - 1].environment();
    gridArray[x - 1][y - 1].askEvent();
    console.log(gridArray[x - 1][y - 1].seed);
}

const eventContainer = document.getElementById("event-container");

//grid map for play area
const gridContainer = document.getElementById("grid-container");

class _grid {
    constructor(x, y, seed, eventCounter = 100) {
        this.x = x;
        this.y = y;
        this.seed = seed;
        this.eventCounter = 100;
    }
    showGrid() {
        let grid = document.createElement("div");
        grid.id = `x${this.x}y${this.y}`;
        grid.style.gridColumnStart = this.x + 1;
        grid.style.gridColumnEnd = this.x + 2;
        grid.style.gridRowStart = this.y + 1;
        grid.style.gridRowEnd = this.y + 2;
        this.seed <= 25 ? grid.style.backgroundColor = "forestgreen" :
            this.seed <= 55 ? grid.style.backgroundColor = "lawngreen" :
            this.seed <= 72 ? grid.style.backgroundColor = "dodgerblue" :
            this.seed <= 82 ? grid.style.backgroundColor = "saddlebrown" :
            this.seed <= 92 ? grid.style.backgroundColor = "dimgray" :
            this.seed <= 97 ? grid.style.backgroundColor = "orange" :
            grid.style.backgroundColor = "black";

        grid.style.border = '1px solid red';
        gridContainer.appendChild(grid);
    }
    environment() {
        this.seed <= 25 ? trees(this.seed) :
            this.seed <= 55 ? grass(this.seed) :
            this.seed <= 72 ? lake(this.seed) :
            this.seed <= 82 ? hill(this.seed) :
            this.seed <= 92 ? mountain(this.seed) :
            this.seed <= 97 ? abandonedBuilding(this.seed) :
            town(this.seed);
    }
    askEvent() {
        (() => {
            if (this.eventCounter > 0) {
                eventContainer.innerHTML += ' Would you like to ';
                eventContainer.innerHTML += '<input type="submit" value="explore" id="askEventButton">?';
                let askEventButton = document.getElementById('askEventButton');
                askEventButton.addEventListener("click", function () {
                    runEvent();
                });
                let runEvent = () => {
                    this.seed <= 25 ? treesEvent() :
                        this.seed <= 55 ? grassEvent() :
                        this.seed <= 72 ? lakeEvent() :
                        this.seed <= 82 ? hillEvent() :
                        this.seed <= 92 ? mountainEvent() :
                        this.seed <= 97 ? abandonedBuildingEvent() :
                        townEvent();
                    this.eventCounter -= 50;
                };
            } else if (this.eventCounter <= 0 && this.seed > 97) {
                eventContainer.innerHTML += ' Would you like to ';
                eventContainer.innerHTML += '<input type="submit" value="enter" id="askEventButton"> the town?';
                let askEventButton = document.getElementById('askEventButton');
                askEventButton.addEventListener("click", function () {
                    townEvent();
                });

            } else if (this.eventCounter <= 0) {
                eventContainer.innerHTML += ' There is nothing worth exploring here.';
            }



        })();
    }
}

let gridArray = [];

const generateMap = (x, y) => {
    for (i = 1; i <= x; i++) {
        gridArray[i - 1] = [];
        for (j = 1; j <= y; j++) {
            gridArray[i - 1].push(new _grid(i, j, ranN(100)));
            gridArray[i - 1][j - 1].showGrid();
        }
    }
}

document.addEventListener('keydown', event => {
    const keyName = event;
    switch (event.key) {
        case 'ArrowUp':
            if (player.y > 1) {
                player.y--;
                enterCell(player.x, player.y);
            };
            break;
        case 'ArrowLeft':
            if (player.x > 1) {
                player.x--;
                enterCell(player.x, player.y);
            };
            break;
        case 'ArrowRight':
            if (player.x < 10) {
                player.x++;
                enterCell(player.x, player.y);
            };
            break;
        case 'ArrowDown':
            if (player.y < 10) {
                player.y++;
                enterCell(player.x, player.y);
            };
            break;
    };
    player.updatePlayer();
    //   console.log(`keydown event key: ${keyName.key} and keycode ${keyName.which}`)
})