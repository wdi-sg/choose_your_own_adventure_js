// player, enemies , weapons, events
// events = [encounter[enemies], shops, goodevent, badevent]
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
    constructor(name, health, experience, gold, melee, range, display, x, y) {
        super(name, health, experience, gold, display);
        this.weapons = {
            melee: [melee],
            range: [range]
        };
        this.x = x;
        this.y = y;
    }
    displayPlayer() {
        this.display.id = "player";
        let displayPlayerNode = document.createTextNode(`Player`);
        this.display.appendChild(displayPlayerNode);
        let grid = document.getElementById(`x${this.x}y${this.y}`);
        grid.appendChild(this.display);
        grid.style.backgroundColor = "blue";
        let playerStatus = document.createTextNode(`Health: ${this.health} Exp: ${this.experience} Gold: ${this.gold}`);
        let playerToolbarStatus = document.getElementById("player-status");
        playerToolbarStatus.appendChild(playerStatus);

    }
    movePlayer() {
        let grid = document.getElementById(`x${this.x}y${this.y}`);
        grid.appendChild(this.display);
        grid.style.backgroundColor = "aqua";
        console.log('moving char');
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
        this.display.type = "button";
        this.display.value = `${this.name}`;
        let playerToolbarWeapons = document.getElementById("player-weapons");
        playerToolbarWeapons.appendChild(this.display);
        this.display.addEventListener("click", () => this.dealDamage());

        //      console.log(this.display);
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
            weaponList.melee.push(new _weapon(`${weaponNameList.material[i-1]} ${weaponNameList.melee[j-2]}`, 80 * i * j, 100 * i * j, false, document.createElement('input')));
        }
        for (let j = 2; j - 2 < weaponNameList.range.length; j++) {
            weaponList.range.push(new _weapon(`${weaponNameList.material[i-1]} ${weaponNameList.range[j-2]}`, 120 * i * j, 200 * i * j, true, document.createElement('input')));
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
    player.displayPlayer();
}

const gameMenu = document.getElementById('game-menu');
const playerToolbar = document.getElementById('player-toolbar');

const startGame = () => {
    populateWeaponList();
    let playerName = document.getElementById('playerName').value;
    player = new _player(`${playerName}`, 100, 0, 0, weaponList.melee[0], weaponList.range[8], document.createElement("div"), ranN(10), ranN(10));
    player.weapons.melee.push(weaponList.melee[6]);
    player.weapons.melee.push(weaponList.melee[6]);
    player.weapons.melee.push(weaponList.melee[6]);
    player.weapons.range.push(weaponList.range[4]);
    generateMap(10, 10);
    displayPlayer(player.weapons, player);
    gameMenu.style.display = "none";
    playerToolbar.style.display = "block";
}

//battle and enemy encounter
const ranN = (num) => Math.floor(Math.random() * num) + 1;




const eventSpawnEnemies = () => {
    for (x = 0; x < 5; x++) {
        enemyList.push(new _enemy(enemyNameList[ranN(9) - 1], 1000, 100, 100, 100, document.createElement("div")));

    };
    console.log('spawned enemy');
}

const eventShop = () => {
    console.log('shop event');
}

const eventGood = () => {
    console.log('good event');
}

const eventBad = () => {
    console.log('bad event');
}

const eventNeut = () => {
    console.log('neut event');
}

const triggerEvent = (x,y) =>{
    eventContainer.style.display = "block";
    gridArray[x-1][y-1].event();
    console.log(gridArray[x-1][y-1].eventId);
}

const eventContainer = document.getElementById("event-container");


//grid map for play area
const gridContainer = document.getElementById("grid-container");

class _grid {
    constructor(x, y, eventId) {
        this.x = x;
        this.y = y;
        this.eventId =eventId;
    }
    showGrid() {
        let grid = document.createElement("div");
        grid.id = `x${this.x}y${this.y}`;
        grid.style.gridColumnStart = this.x + 1;
        grid.style.gridColumnEnd = this.x + 2;
        grid.style.gridRowStart = this.y + 1;
        grid.style.gridRowEnd = this.y + 2;
        grid.style.border = '1px solid red';
        grid.innerHTML = `x=${this.x}, y=${this.y}`;
        gridContainer.appendChild(grid);
    }
    event()  {
        this.eventId <= 20 ? eventGood() :
        this.eventId  <= 40 ? eventBad() :
        this.eventId  <= 60 ? eventNeut() :
        this.eventId  <= 80 ? eventSpawnEnemies() :
            eventShop();
    }
}

let gridArray = [];

const generateMap = (x, y) => {
    for (i = 1; i <= x; i++) {
        gridArray[i - 1] = [];
        for (j = 1; j <= y; j++) {
            //           gridArray[i][j]=[];
            gridArray[i - 1].push(new _grid(i, j, ranN(100)));
            gridArray[i - 1][j - 1].showGrid();
        }
    }
}

document.addEventListener('keydown', event => {
    const keyName = event;
 //   console.log(`${keyName.key} `);
  //  if (event.key === 'ArrowUp'||'ArrowRight'||'ArrowDown'||'ArrowLeft'){
    switch (event.key) {
        case 'ArrowUp':
 //           console.log('up');
            if (player.y > 1) {
                player.y--;
                triggerEvent(player.x,player.y);
            };
            break;
        case 'ArrowLeft':
  //          console.log('left');
            if (player.x > 1) {
                player.x--;
                triggerEvent(player.x,player.y);
            };
            break;
        case 'ArrowRight':
   //         console.log('right');
            if (player.x < 10) {
                player.x++;
                triggerEvent(player.x,player.y);
            };
            break;
        case 'ArrowDown':
  //          console.log('down');
            if (player.y < 10) {
                player.y++;
                triggerEvent(player.x,player.y);
            };
            break;
    };
    player.movePlayer();
 //   console.log(`keydown event key: ${keyName.key} and keycode ${keyName.which}`)


})