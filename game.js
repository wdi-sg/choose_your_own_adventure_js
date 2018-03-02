const START_HP = 20;
const START_MAXHP = 30;
const START_MINDMG = 1;
const START_MAXDMG = 2;

const ENEMY_PANEL = document.getElementById('enemies');
const INVENTORY_PANEL = document.getElementById('inventory-list');

let currentRoom = 0;
let canMove = true;
let acceptInput = true;
let canMoveMsg = "";
let playerName = "TicTac";

var lootData = {
    shortsword: {
        name: "Short Sword",
        class: "weapon",
        mindmg: 2,
        maxdmg: 3,
        cooldown: 1000
    },
    dagger: {
        name: "Dagger",
        class: "weapon",
        mindmg: 3,
        maxdmg: 3,
        cooldown: 500
    },
    clothshirt: {
        name: "Cotton Shirt",
        class: "armour",
        hpbonus: 3
    }
};

var enemyData = {
    kobold: {
        name: "Kobold",
        hp: 15,
        maxhp: 15,
        mindmg: 2,
        maxdmg: 3,
        cooldown: 1000,
        canFlee: false,
        loot: lootData.dagger
    },
    rat: {
        name: "Rat",
        hp: 5,
        maxhp: 5,
        mindmg: 1,
        maxdmg: 2,
        cooldown: 500,
        canFlee: true
    }
};

var characterData = {
    hp: 0,
    maxhp: 0,
    mindmg: 0,
    maxdmg: 0,
    inventory: {}
};

var roomContext = {
    // Remember to clear this after each room!
};

var roomData = [
    // Room 0
    {
        roomInfo: "How did you get here? There's fire in the air, the fumes smell like Mondays and the place looks like it's been wrecked by \
                   banshees. You can't recall, but the sick taste in your mouth and dull ache in your head \
                   suggest some regrets. You try to ignore it, and presently a dirt path to the north comes into focus. \
                   It's not the most inviting of options, but the lava to the east and west looks worse. Or you know, \
                   you could stay here and wait for the police. Or the grim reaper, whose home you suspect this to be. You do you.",
        navChoices: {"n": 2, "e": 1, "w": 1},
        fixedEnemies: [],
        possibleEnemies: [],
        loot: ['shortsword'],
        actionResponses: {"look": "You see a short sword."}
    },
    // Room 1 - Death by lava
    {
        roomInfo: "Feeling particularly game, you hurl yourself into the air with the grace of an Olympic diver, sail majestically through the sulfurous \
                   plumes eyes shut, and disappear inconsequentially into the churning lava. It swallows you with nary a grumble. Content with the lava's \
                   warm embrace, you do not resurface.",
        navChoices: {},
        fixedEnemies: [],
        possibleEnemies: [],
        loot: [],
        actionResponses: {},
        onEnter: () => {gameMessage("You died", "red"); updateHP(-getCurrentHP(), 0); document.getElementById('input').style.display = 'none'; document.removeEventListener('keypress', go);}
    },
    // Room 3
    {
        roomInfo: "Still feeling groggy, you decide to leave before the possibly hellish denizens of your imagination start noticing you back. \
                   The road ahead was long and uneventful, except for the hellish denizens of your imagination clawing at your sanity. Did you \
                   imagine their hellishness? Or did they make you you? You start wondering if this is how a philosopher might feel, if they do, \
                   but decide that you'd rather stone instead. Speaking of that, the mountain right in front of you is starting to look particularly \
                   rock-like. To go or not to go, that is the question. But this isn't the time for ponderous pontification. An old bold kobold emerges \
                   from behind a boulder.",
        navChoices: {"n": 3,"s": 0},
        fixedEnemies: ['kobold'],
        possibleEnemies: ['rat'],
        loot: [],
        actionResponses: {"look": "You see a grim future ahead wrestling with Chrome. Wait..."},
        onEnter: () => {gameMessage("A kobold fights you!", "white"); addEnemy('kobold'); canMove = false;}
    },
    // Room 4
    {
        roomInfo: "You are at the end of your journey. Sacrifice yourself?<br>",
        navChoices: {},
        fixedEnemies: ['rat'],
        possibleEnemies: ['kobold'],
        loot: [],
        actionResponses: {"sacrifice": "And so ends you. Well done, the collection of organic material formerly known as you will now serve a greater, non-specific purpose."}
    },
];

function print(message) {
    // Utility function to show the status of the game on the page
    document.getElementById('game-text').innerHTML = message;
};

function getNavString(index) {
    let result = "<br><br> Go ... ";
    let tmp = true;
    for (let key in roomData[index].navChoices) {
        tmp = false;
        switch (key) {
            case "n":
                result += "<br>(<span class='hotkey'>N</span>)orth";
                break;
            case "s":
                result += "<br>(<span class='hotkey'>S</span>)outh";
                break;
            case "e":
                result += "<br>(<span class='hotkey'>E</span>)ast";
                break;
            case "w":
                result += "<br>(<span class='hotkey'>W</span>)est";
                break;
            default:
                console.error("Undefined nav option");
                break;
        };
    };
    if (tmp) {
        return "";
    } else {
        return result;
    };
};

function updateDamage(addMin, addMax) {
    characterData.mindmg += addMin;
    characterData.maxdmg += addMax;
    document.getElementById('mindmg').innerHTML = characterData.mindmg;
    document.getElementById('maxdmg').innerHTML = characterData.maxdmg;
};

function updateHP(addCurrent, addMax) {
    characterData.hp += addCurrent;
    characterData.maxhp += addMax;
    document.getElementById('hp').innerHTML = characterData.hp;
    document.getElementById('maxhp').innerHTML = characterData.maxhp;
};

function getCurrentHP() {
    return parseInt(characterData.hp);
};

function getMaxHP() {
    return parseInt(characterData.maxhp);
}

function addToInventory(item) {
    characterData.inventory;
};

function gotoRoom(index) {
    currentRoom = index;
    print(roomData[index].roomInfo + getNavString(index));
    gameMessage("");
    if (roomData[index].hasOwnProperty('onEnter')) {
        roomData[index].onEnter();
    };
    document.getElementById('playermove').focus();
};

function throwError(index, error) {
    print(roomData[index].roomInfo + getNavString(index) + "<br><br><p class='navError'>" + error + "</p>");
};

function actionResponse(index, response) {
    print(roomData[index].roomInfo + getNavString(index) + "<br><br><p class='actionResponse'>"+ response + "</p>");
};

function gameMessage(msg, color = "white") {
    document.getElementById('game-message').innerHTML = msg;
    document.getElementById('game-message').style.color = color;
}

function go(e) {
    if (e.keyCode == 13 && acceptInput) {
        let input = document.getElementById('playermove').value.toLowerCase();
        let response = "";
        if (roomData[currentRoom].navChoices.hasOwnProperty(input)) {
            if (!canMove) {
                throwError(currentRoom, "Something's stopping you from moving on.");
                return;
            } else {
                document.getElementById('playermove').value = "";
                gotoRoom(roomData[currentRoom].navChoices[input]);
            }
        } else {
            for (let key in roomData[currentRoom].actionResponses) {
                if (input == key) {
                    response = roomData[currentRoom].actionResponses[key];
                    actionResponse(currentRoom, response);
                    return;
                };
            };
            throwError(currentRoom, "You're walking into walls mate.");
        };
    };
};

function addEnemy(enemy) {
    let result = document.createElement('p');
    result.setAttribute('id', 'enemy');
    result.innerHTML = enemyData[enemy]['name'] + ": <span id='enemy-hp'>" + enemyData[enemy]['hp'] + "</span> / <span id='enemy-maxhp'>" + enemyData[enemy]['maxhp'] + "</span>";
    ENEMY_PANEL.appendChild(result);
}

function hit(enemy) {

}

function removeEnemy(enemy) {

}

function addItemToInventory(item) {
    let result = document.createElement('li');
    result.setAttribute('class', 'inventory-item');
    result.innerHTML = lootData[item]['name'];
    INVENTORY_PANEL.appendChild(result);
    switch (lootData[item]['class']) {
        case 'armour':
            updateHP(0, lootData[item]['hpbonus']);
            break;
        case 'weapon':
            updateDamage(lootData[item]['mindmg'], lootData[item]['maxdmg']);
            break;
        default:
            break;
    }
}

function removeItemFromInventory(item) {
    switch (lootData[item]['class']) {
        case 'armour':
            updateHP(0, -lootData[item]['hpbonus']);
            break;
        case 'weapon':
            updateDamage(-lootData[item]['mindmg'], -lootData[item]['maxdmg']);
            break;
        default:
            break;
    }
}

function startFight() {
    // Disable movement
    // Add enemies from room to interface
    // Update input options
    // Enemies should drop loot
    // To implement: Weapon cooldown?
    canMove = false;
}

function focusOnInput() {
    document.getElementById('playermove').focus();
};

document.addEventListener('keypress', go);
document.addEventListener('DOMContentLoaded', focusOnInput);
updateHP(START_HP, START_MAXHP);
updateDamage(START_MINDMG, START_MAXDMG);
gotoRoom(0);