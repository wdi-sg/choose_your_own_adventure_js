console.log("Welcome to The Wall!");
var outputMessage;
var inputValue;
var inputHistory = [];
var scoreTracker = 0;

let characterStats = {
    name: "",
    weapon: "",
    location: "",
    opponent: "",
};

let battleStats = {
    heroHP: 8,
    villainHP: 5,
    heroDie: false,
    heroWin: false,
    turnToAttack: false,
    heroEscape: false,
    criticalHit: false,
}




initialize();
tagEdit("h3", "Night's Watch Simulator")
tagEdit("h2", "Story Window:")

function tagEdit(tag, text) {
    var domSelected = document.getElementsByTagName(tag);
    domSelected[0].innerHTML = text;
};

function inputHappened(currentInput) {
    console.log(currentInput);
    console.log(inputHistory);
    inputValue = currentInput;
    clearInput();
    inputHistory.push(currentInput);
    storyProgression(inputHistory.length);

    return outputMessage;
};

function display(data) {
    var displayElement = document.querySelector('#output');

    // get rid of the entire contents
    displayElement.innerHTML = "";

    // put the data into the div
    output.innerText = data;
};

function placeHolderEdit(data) {
    var displayElement = document.querySelector('#input');

    displayElement.placeholder = "";
    displayElement.value = "";
    // put the data into the div
    displayElement.placeholder = data;
};

function clearInput() {
    var displayElement = document.querySelector('#input');

    displayElement.value = "";

};

function initialize() {
    display("Oi mate! What's your name?");
    placeHolderEdit("Input name...");
}

function enterName(inputName) {
    characterStats.name = inputName;
}

function enterWeapon(inputWeapon) {
    if (inputWeapon == "1" || inputWeapon.toLowerCase().includes("axe") || inputWeapon.substring(0, 1).toLowerCase() == "a") {
        characterStats.weapon = "Axe";
    } else if (inputWeapon == "2" || inputWeapon.toLowerCase().includes("sword") || inputWeapon.substring(0, 1).toLowerCase() == "s") {
        characterStats.weapon = "Sword";
    } else if (inputWeapon == "3" || inputWeapon.toLowerCase().includes("hammer") || inputWeapon.substring(0, 1).toLowerCase() == "h") {
        characterStats.weapon = "Hammer";
    } else {
        characterStats.weapon = "";
        inputHistory.pop();
    }
}

function enterLocation(inputLocation) {
    if (inputLocation == "1" || inputLocation.toLowerCase().includes("frost cavern") || inputLocation.substring(0, 1).toLowerCase() == "f") {
        characterStats.location = "Frost Cavern";
    } else if (inputLocation == "2" || inputLocation.toLowerCase().includes("jagged pass") || inputLocation.substring(0, 1).toLowerCase() == "j") {
        characterStats.location = "Jagged Pass";
    } else if (inputLocation == "3" || inputLocation.toLowerCase().includes("desolate forest") || inputLocation.substring(0, 1).toLowerCase() == "d") {
        characterStats.location = "Desolate Forest";
    } else {
        characterStats.location = "";
        inputHistory.pop();
    }
}

function customEncounter() {
    var location = characterStats.location;
    var output = "\n";
    switch (location) {
        case "Frost Cavern":
            characterStats.opponent = "wights";
            output += "You encountered a horde of Wights!";
            break;
        case "Jagged Pass":
            characterStats.opponent = "wildlings";
            output += "You were ambushed by a tribe of Wildlings!";
            break;
        case "Desolate Forest":
            characterStats.opponent = "wolves";
            output += "You were attacked by a pack of Dire Wolves!";
            break;
        default:
            output += "The Night King appears and immediately kills you. Game Over!";
            break;
    }
    return output;
}

function attackOptions(input) {
    var weapon = characterStats.weapon;
    var output = "\n";
    input = input.parseInt();
    switch (input) {
        case 1:
            characterStats.opponent = "wights";
            output += "You encountered a horde of Wights!";
            break;
        case 2:
            characterStats.opponent = "wildlings";
            output += "You were ambushed by a tribe of Wildlings!";
            break;
        case 3:
            characterStats.opponent = "wolves";
            output += "You were attacked by a pack of Dire Wolves!";
            break;
        default:

            break;
    }
    return output;
}

function startBattle() {
    var weapon = characterStats.weapon;
    var opponent = characterStats.opponent;
    if (battleStats.heroHP <= 0) battleStats.heroDie = true;
    if (battleStats.villainHP <= 0) battleStats.heroWin = true;
    while (battleStats.heroDie == false || battleStats.heroWin == true || battleStats.heroEscape == true) {

    }
}

function battling() {


}

function useWeapon() {
    var damage = 0;
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= 8) {
        damage += 2;
        damage += weaponEffective();
        damage += critical(5)
        battleStats.villainHP -= damage;
        console.log(`Dealt ${damage} damage`)
    } else {
        battleStats.heroEscape = false;
    }
}

function weaponEffective() {
    var bonusDamage = 0
    if (characterStats.weapon == "Axe" && characterStats.opponent == "wildlings") {
        bonusDamage = 1;
        return bonusDamage
    } else if (characterStats.weapon == "Axe" && characterStats.opponent == "wights") {
        bonusDamage = -1;
        return bonusDamage
    } else if (characterStats.weapon == "Sword" && characterStats.opponent == "wolves") {
        bonusDamage = 1;
        return bonusDamage

    } else if (characterStats.weapon == "Sword" && characterStats.opponent == "wildlings") {
        bonusDamage = -1;
        return bonusDamage

    } else if (characterStats.weapon == "Hammer" && characterStats.opponent == "wights") {
        bonusDamage = 1;
        return bonusDamage

    } else if (characterStats.weapon == "Hammer" && characterStats.opponent == "wolves") {
        bonusDamage = -1;
        return bonusDamage

    } else{
        bonusDamage = 0;
        return bonusDamage;
    }
}

function shootArrow() {
    var damage = 0;
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= 6) {
        damage += 1;
        damage += critical(3)
        battleStats.villainHP -= damage;
        console.log(`Dealt ${damage} damage`)
    } else {
        battleStats.heroEscape = false;
    }
}

function enemyAttack() {
    battleStats.heroHP -= 1;
}

function run() {
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= 6) {
        battleStats.heroEscape = true;
        console.log("Managed to escape!")
    } else {
        battleStats.heroEscape = false;
        console.log("Couldn't escape!")
    }
}

function critical(critRatio) {
    var getCrit = 0;
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= critRatio) {
        getCrit = 2;
        criticalHit = true;
        console.log("Critical Hit!")
    } else {
        criticalHit = false;
    }
    return getCrit;
}

function storyProgression(number) {
    switch (number) {
        case 1:
            enterName(inputValue);
            var name = characterStats.name;
            outputMessage = (`Ah! ${name} is it? You're in Castle Black now!\nGet ready, we're going beyond the wall! Choose a weapon brother!\n`);
            outputMessage += ("1. Axe\n2. Sword\n3. Hammer")
            placeHolderEdit("Choose a weapon (#)...");
            break;
        case 2:
            enterWeapon(inputValue);
            var weapon = characterStats.weapon;
            weapon = weapon.toLowerCase();
            if (weapon != "") {
                outputMessage = (`You seem pretty good with that ${weapon}!\n Let's head out now, where should we patrol?\n`);
                outputMessage += ("1. Frost Cavern\n2. Jagged Pass\n3. Desolate Forest")
                placeHolderEdit("Choose a location (#)...");
            } else {
                outputMessage = ("That's not a weapon, c'mon now choose!");
                outputMessage += ("\n1. Axe\n2. Sword\n3. Hammer");
            }
            break;
        case 3:
            enterLocation(inputValue);
            var location = characterStats.location;
            if (location != "") {
                outputMessage = (`Alright, we are heading out to the ${location}!\n`);
                buildAscii(asciiZombie);
                outputMessage += "\n1 hour later...\n";
                outputMessage += customEncounter();
                outputMessage += "  What do you do?";
                outputMessage += ("\n1. Charge & attack head on!\n2. Use bow with flaming arrows!\n3. RUN AWAAAAAYYY!!!!");
                placeHolderEdit("Choose an action (#)...");

            } else {
                outputMessage = ("Be serious! Where are we going?");
                outputMessage += ("\n1. Frost Cavern\n2. Jagged Pass\n3. Desolate Forest")
            }
            break;
        case 4:
            enterLocation(inputValue);
            var location = characterStats.location;
            if (location != "") {
                outputMessage = (`Alright, we are heading out to the ${location}!\n`);
                outputMessage += buildAscii(asciiZombie);

                placeHolderEdit("Choose a location...");
            } else {
                outputMessage = ("Be serious! Where are we going?");
                outputMessage += ("\n1. Frost Cavern\n2. Jagged Pass\n3. Desolate Forest")
            }
            break;
        default:
            alert("Path not written yet")
            break;
    }
}

function buildAscii(asciiArt) {
    var output = "";
    asciiArt.forEach(function(element) {
        output += element;
        output += "\n";

    })
    //output = encodeWhiteSpaces(output);
    console.log(output);
    return output;
}
// function encodeWhiteSpaces(str) {
//    return str.split('').map(function(c) {
//     if (c === ' ')
//         return " "
//     else
//         return c;
//    }).join('');
// }

var asciiHorse = [
    "            .''",
    "  ._.-.___.' (`\\",
    " //(        ( `'",
    "'/ )\\ ).__. )",
    "' <' `\\ ._/'\\",
    "   `   \\     \\"
];

var asciiWolf = [
    "                     .",
    "                    / V\\",
    "                  / `  /",
    "                 <<   |",
    "                 /    |",
    "               /      |",
    "             /        |",
    "           /    \\  \\ /",
    "          (      ) | |",
    "  ________|   _/_  | |",
    "<__________\\______)\\__)"
];
var asciiZombie = [
    "      .-.",
    "     (o.o)",
    "      |=|",
    "     __|__",
    "   //.=|=.\\\\",
    "  // .=|=. \\\\",
    "  \\\\ .=|=. //",
    "   \\\\(_=_)//",
    "    (:| |:)",
    "     || ||",
    "     () ()",
    "     || ||",
    "     || ||",
    "    ==' '=="
];
var asciiBarbarian = [
    "   \\\\\\|||///",
    " .  ======= ",
    "/ \\| O   O |",
    "\\ / \\`___'/ ",
    " #   _| |_",
    "(#) (     )  ",
    " #\\//|* *|\\\\ ",
    " #\\/(  *  )/   ",
    " #   =====  ",
    " #   ( U ) ",
    " #   || ||",
    ".#---'| |`----.",
    "`#----' `-----'"
];