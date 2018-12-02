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
        currentMap = regionObj.null.map1;
        battle();
    } else {
        createChar();
    }
}

var explore = function() {

}

var battle = function() {
    var battleMonster = currentMap.monsters()[Math.floor(Math.random()*99)];
    var playerBP = userChar["BattlePoints"] * userChar["Weapon"].classmultiplier() * elementAdvantageCalc(userChar["Weapon"], battleMonster);
    debugger
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



var userChar = {};
var currentMap = {};
createChar();
