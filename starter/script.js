// put code here!

// Create encompassing counter. 5mins to train the strongest character, highest battle points. Or defeat Elite 4.
// Create Character. Character have Name, Class, Level, weapons
// weapon have range effectiveness factor, element, class multiplier
// Class have weapon multiplier.
// Map have Regions, more range/melee monsters. with loots for certain class.
// Regions have monsters. Monsters have rng to drop loots
// Monsters have Name, range, element, battle points.
//// Winning gives battle points
// Losing reduce reduce battle points


var createChar = function() {
    var userName = prompt("Welcome to the World of Worlds! In this game, you have 3mins to adventure the Worlds and try to become the strongest character ever!\n\nFirstly, please tell me your name: ");

    var userClassChoice = prompt("Secondly, choose your favorite class: \n\n(Available classes are: Swordman, Archer, Magician, Assassin.)");

    while (!classesObj.hasOwnProperty(userClassChoice.toLowerCase())) {
        userClassChoice = prompt("Second, choose your favorite class: \n\n(Available classes are: Swordman, Archer, Magician, Assassin.)");
    }

    var userWeaponChoice = prompt("Lastly, pick your trusty weapon: \n\n(Available weapons are: Sword, Spear, Bow, Staff, Dagger, Shuriken.")

    while (!weaponObj.tier1.hasOwnProperty(userWeaponChoice.toLowerCase())) {
        userWeaponChoice = prompt("Lastly, pick your trusty weapon: \n(Available weapons are: Sword, Spear, Bow, Staff, Dagger, Shuriken.");
    }

    userChar["Name"] = userName;
    userChar["Class"] = classesObj[userClassChoice.toLowerCase()];
    userChar["Weapon"] = weaponObj.tier1[userWeaponChoice.toLowerCase()];
    userChar["BattlePoints"] = 100;

    if (confirm(`Name: ${userChar.Name}\nClass: ${userChar.Class.name}\nWeapon: ${userChar.Weapon.name}\n\nAre you sure of your Character?`)){
        alert("Congrats on creating your character! Get ready for the adventures ahead!");
        alert(`Welcome ${userChar.Name}! Your adventure will start of in the World of Null.\n\nIn every map, you will be fighting a monster, winning will give you battle points and potential loots, while losing will reduce your battle points.\n\nAfter every battle, you can choose to stay and fight monsters in the same map or explore the rest of the world.`);
        alert("You are now in the World of Null. Go win your first battle!");
        currentRegion = regionObj.null;
        currentMap = regionObj.null[0];
        setTimeout(endGame, 180000);
        battle();
    } else {
        createChar();
    }
}

var battle = function() {
    var battleMonster = currentMap.monsters()[Math.floor(Math.random()*99)];
    var playerBP = userChar["BattlePoints"] * userChar["Weapon"].classmultiplier(userChar["Class"].name) * elementAdvantageCalc(userChar["Weapon"], battleMonster);

    if (confirm(`You encountered ${battleMonster.name}!\nDo you want to fight ${battleMonster.name}? Or run away?`)) {
        if (playerBP > battleMonster.BattlePoints) {
            var battleLoot = Object.values(battleMonster.loot()[Math.floor(Math.random()*99)])[Math.floor(Math.random()*5)];
            alert("Congrats, you won the battle!");
            userChar["BattlePoints"] += (battleMonster.BattlePoints / 3);
            if (confirm(`${battleMonster.name} dropped ${battleLoot.name}!\nDo you want to equip this?`)) {
                userChar["Weapon"] = battleLoot;
            }
            explore();
        } else {
            userChar["BattlePoints"] -= (battleMonster.BattlePoints / 2);
            alert(`You lost the battle... and loses ${battleMonster.BattlePoints / 2} Battle Points :(`)
            explore();
        }
    } else {
        explore();
    }
}

var explore = function() {
    var userExplore = prompt(`You are currently at ${currentMap.name}.\nYou can choose to continue exploring the current map, move deeper into the current World, or go to another World.\n\n Enter: Another World (A) / Stay (S) / Deeper (D)`)

    switch (userExplore) {
        case "A":
            var userWorldChoice = prompt("Which world do you want to go to?\n\nNothing (N) / Seas (S) / Flames (F) / Woods (W)");
            switch (userWorldChoice) {
                case "N":
                    currentRegion = regionObj.null;
                    currentMap = currentRegion[0];
                    battle();
                    break;

                case "S":
                    currentRegion = regionObj.water;
                    currentMap = currentRegion[0];
                    battle();
                    break;

                case "F":
                    currentRegion = regionObj.fire;
                    currentMap = currentRegion[0];
                    battle();
                    break;

                case "W":
                    currentRegion = regionObj.nature;
                    currentMap = currentRegion[0];
                    battle();
                    break;
                default:
                    explore();
                    break;
            }
            break;

        case "S":
            battle();
            break;

        case "D":
            currentMap = currentRegion[1];
            battle();
            break;
        default:
            explore();
            break;
    }
}

var elementAdvantageCalc = function(currentWeapon, battleMonster) {
    switch (currentWeapon.element) {
        case "null":
            if (battleMonster.element == "null") {
                return 1.1;
            }  else {
                return 0.8;
            }

        case "fire":
            if (battleMonster.element == "nature") {
                return 2;
            } else if (battleMonster.element == "fire" || battleMonster.element == "null") {
                return 0.8;
            } else {
                return 0.6;
            }

        case "nature":
            if (battleMonster.element == "water") {
                return 2;
            } else if (battleMonster.element == "nature" || battleMonster.element == "null") {
                return 0.8;
            } else {
                return 0.6;
            }

        case "water":
            if (battleMonster.element == "fire") {
                return 2;
            } else if (battleMonster.element == "water" || battleMonster.element == "null") {
                return 0.8;
            } else {
                return 0.6;
            }
    }
}

var endGame = function() {
    highScore.push(userChar);
    if (confirm(`Your game has ended! Your ${userChar["Weapon"].name} wielding ${userChar["Class"].name} character, ${userChar["Name"]}, achieved ${userChar["BattlePoints"]} Battle Points! He is one of the strongest hero that WoW have seen.\n\nWould you like to start a new game?`)) {
        createChar();
    } else {
        throw alert("See you again in WoW");
    }
}




var userChar = {};
var currentMap = {};
var highScore = [];
createChar();
