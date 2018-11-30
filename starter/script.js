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

class character {
    constructor(name, health, experience, gold) {
        this.name = name; //string
        this.health = health; //num
        this.experience = experience; //num
        this.gold = gold; //num
        this.weapons = {
            melee: [],
            range: []
        }
    }
}

class enemies extends character {
    constructor(name,health,experience,gold,damage){
        super(name,health,experience,gold);
        this.damage=damage;
    }
    
}

function weapon(name, damage, gold, isRanged) {
    this.name = name; //string
    this.damage = damage; //num
    this.gold = gold; //num
    this.isRanged = isRanged; //boolean
}

const populateWeaponList = () => {
    for (let i = 1; i - 1 < weaponNameList.material.length; i++) {
        for (let j = 2; j - 2 < weaponNameList.melee.length; j++) {
            weaponList.melee.push(new weapon(`${weaponNameList.material[i-1]} ${weaponNameList.melee[j-2]}`, 80 * i * j, 100 * i * j, false));
        }
        for (let j = 2; j - 2 < weaponNameList.range.length; j++) {
            weaponList.range.push(new weapon(`${weaponNameList.material[i-1]} ${weaponNameList.range[j-2]}`, 120 * i * j, 200 * i * j, true));
        };
    };
}

const startGame = () => {
    populateWeaponList();
    let playerName = document.getElementById('playerName').value;
    player = new character(`${playerName}`, 100, 0, 0);
    player.weapons.melee.push(weaponList.melee[0]);
    player.weapons.range.push(weaponList.range[8]);
    player.weapons.melee.push(weaponList.melee[2]) ;//starter weapon
    displayWeapons(player.weapons.melee)
}

//battle and enemy encounter
const fightContainer = document.getElementById("fight-container");

const displayWeapons = (melee,range) => {
    for (weapon in melee) {
      let displayMelee = document.createElement("div");
      displayMelee.className = "result";
      let displayMeleeNode = document.createTextNode(player.weapons.melee[weapon].name );
      displayMelee.appendChild(displayMeleeNode);
      fightContainer.appendChild(displayMelee);
      console.log(weapon);
    }
    for (weapon in range) {
        let displayRange = document.createElement("div");
        displayRange.className = "dsad";
        let displayRangeNode = document.createTextNode(player.weapons.range[weapon].name );
        displayRange.appendChild(displayRangeNode);
        fightContainer.appendChild(displayRange);
        console.log(weapon);
      }
  }
