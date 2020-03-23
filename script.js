console.log("Welcome to The Wall!");
var outputMessage; // Text shown in output window
var inputValue; // Text inputted by user
var inputHistory = []; // Tracking all major decisions and progresses the story
var scoreTracker = 0; // Tracks user score

// Stats for story
let characterStats = {
    name: "",
    weapon: "",
    location: "",
    opponent: "",
};

// Stats for battle loop
let battleStats = {
    heroHP: 8,
    villainHP: 5,
    heroDie: false,
    heroWin: false,
    turnToAttack: false,
    heroEscape: false,
    criticalHit: false,
}
// Game over flag, determines when to end game
var gameOver = false;
// Injured flag, determines final story choice
var injured = false;




initialize(); // Sets all values to default starting
tagEdit("h3", "Night's Watch Simulator")
tagEdit("h2", "Story Window:")

// Edits selected tag
function tagEdit(tag, text) {
    var domSelected = document.getElementsByTagName(tag);
    domSelected[0].innerHTML = text;
};

// Function that happens on user input
function inputHappened(currentInput) {
    console.log(currentInput);
    console.log(inputHistory);
    inputValue = currentInput;
    clearInput();
    inputHistory.push(currentInput);
    storyProgression(inputHistory.length);

    return outputMessage;
};

// Edits what is shown in output frame
function display(data) {
    var displayElement = document.querySelector('#output');

    // get rid of the entire contents
    displayElement.innerHTML = "";

    // put the data into the div
    output.innerText = data;
};

// Edits input text box placeholder
function placeHolderEdit(data) {
    var displayElement = document.querySelector('#input');

    displayElement.placeholder = "";
    displayElement.value = "";
    // put the data into the div
    displayElement.placeholder = data;
};

// Clears input text box
function clearInput() {
    var displayElement = document.querySelector('#input');

    displayElement.value = "";

};

// Sets all values to default starting
function initialize() {
    inputHistory = [];
    display("Oi mate! What's your name?");
    placeHolderEdit("Input name...");
    characterStats = {
        name: "",
        weapon: "",
        location: "",
        opponent: "",
    };

    battleStats = {
        heroHP: 8,
        villainHP: 5,
        heroDie: false,
        heroWin: false,
        turnToAttack: false,
        heroEscape: false,
        criticalHit: false,
    }
    gameOver = false;
    scoreTracker = 0;


}

// Name entry
function enterName(inputName) {
    characterStats.name = inputName;
}

// Weapon selection
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

// Location selection
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

// Opponent generation
function customEncounter() {
    var location = characterStats.location;
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= 2) {
        location = "The Night's King Cometh";
        gameOver = true;}

    var output = "\n";
    switch (location) {
        case "Frost Cavern":
            characterStats.opponent = "wights";
            buildAscii(asciiZombie);
            output += "You encountered a horde of Wights!";
            break;
        case "Jagged Pass":
            characterStats.opponent = "wildlings";
            buildAscii(asciiBarbarian);
            output += "You were ambushed by a tribe of Wildlings!";
            break;
        case "Desolate Forest":
            characterStats.opponent = "wolves";
            buildAscii(asciiWolf);
            output += "You were attacked by a pack of Dire Wolves!";
            break;
        default:
            output += "The Night King appears and immediately kills you.\n\nGame Over! Your Score is 0.";
            break;
    }
    return output;
}

// Initiate battle sequence
function startBattle() {
    outputMessage = `Your HP: ${battleStats.heroHP} | Enemy HP: ${battleStats.villainHP}\n\n`;
    var inputAction = inputValue;
    if (battleStats.heroDie == false || battleStats.heroWin == false || battleStats.heroEscape == false) {
        battling(inputAction);

    }
    if (battleStats.heroDie == true || battleStats.heroWin == true || battleStats.heroEscape == true) {
        outputMessage = outcome();
        inputHistory.push(outputMessage);

        if (gameOver == true) {
            outputMessage += "\n\n<< Enter a Name in input to restart >>"
            placeHolderEdit("Restart...");
            initialize();
        } else {
            outputMessage += "\n\n<< Enter anything in input to continue >>"
            placeHolderEdit("Continue...");
        }
    }

}

// Individual turn of battle
function battling(inputAction) {
    inputHistory.pop();

    if (battleStats.heroHP <= 0) battleStats.heroDie = true;
    if (battleStats.villainHP <= 0) battleStats.heroWin = true;
    battleStats.turnToAttack = !battleStats.turnToAttack;
    if (battleStats.turnToAttack == true) {
        switch (inputAction) {
            case "1":
                useWeapon();
                break;
            case "2":
                shootArrow();
                break;
            case "3":
                run();
                break;
            default:
                outputMessage = "You stood still, frozen in fear..."
                console.log("Invalid action");
                break;
        }
        outputMessage += "\n\n<< Enter anything in input to continue >>"
        placeHolderEdit("Continue...");
    } else if (battleStats.turnToAttack == false) {
        enemyAttack();
        outputMessage += "\n\nWhat do you do next?"
        outputMessage += ("\n1. Charge & attack head on!\n2. Use bow with flaming arrows!\n3. RUN AWAAAAAYYY!!!!");
        placeHolderEdit("Choose an action (#)...");
    }
}

// Generates outcome of battle
function outcome() {
    var outcome = "";
    if (battleStats.heroWin == true) {
        scoreTracker += 100
        switch (characterStats.opponent) {
            case "wights":
                outcome = "You decimated the horde of wights and return to Castle Black.";
                break;
            case "wildlings":
                outcome = "You defeated the tribe of wildlings and return to Castle Black.";
                break;
            case "wolves":
                outcome = "You slayed the pack of wolves, keeping one as a pet, and return to Castle Black."
                break;;
        }
    } else if (battleStats.heroDie == true) {
        switch (characterStats.opponent) {
            case "wights":
                outcome = "You couldn't hold the horde back. Overwhelmed by their sheer numbers, you die and join the army of the undead.\n\nGame Over! Your Score is 0."
                gameOver = true;
                break;
            case "wildlings":
                outcome = "The wildlings caught you off guard. You were knocked out and tied up. The wildlings bring you back to their camp as their prisoner.\n\nGame Over! Your Score is 0."
                gameOver = true;
                break;
            case "wolves":
                outcome = "The wolves were too huge to overcome. You and your troop were ripped limb from limb.\n\nGame Over! Your Score is 0."
                gameOver = true;
                break;
        }
    } else if (battleStats.heroEscape == true) {
        scoreTracker += 50;
        switch (characterStats.opponent) {
            case "wights":
                outcome = "You escaped the horde of wights and returned to Castle Black."
                break;
            case "wildlings":
                outcome = "You escaped the tribe of wildlings and returned to Castle Black."
                break;
            case "wolves":
                outcome = "You escaped the wolves and returned to Castle Black."
                break;
        }
    }
    return outcome;
}

// Determines damage dealt by selected weapon
function useWeapon() {
    var damage = 0;
    var weapon = characterStats.weapon.toLowerCase();
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= 8) {
        damage += 2;
        damage += weaponEffective();
        damage += critical(5)
        battleStats.villainHP -= damage;
        outputMessage += (`You swing your ${weapon} dealing ${damage} damage!`);
    } else {
        outputMessage += (`You swing your ${weapon} and miss!`);
    }
}
// Applies strength / weakness
function weaponEffective() {
    var bonusDamage = 0
    if (characterStats.weapon == "Axe" && characterStats.opponent == "wildlings") {
        bonusDamage = 1;
        outputMessage += "Bonus damage from effective weapon!\n";
        return bonusDamage
    } else if (characterStats.weapon == "Axe" && characterStats.opponent == "wights") {
        bonusDamage = -1;
        outputMessage += "Reduced damage from ineffective weapon.\n";
        return bonusDamage
    } else if (characterStats.weapon == "Sword" && characterStats.opponent == "wolves") {
        bonusDamage = 1;
        outputMessage += "Bonus damage from effective weapon!\n";
        return bonusDamage

    } else if (characterStats.weapon == "Sword" && characterStats.opponent == "wildlings") {
        bonusDamage = -1;
        outputMessage += "Reduced damage from ineffective weapon.\n";
        return bonusDamage

    } else if (characterStats.weapon == "Hammer" && characterStats.opponent == "wights") {
        bonusDamage = 1;
        outputMessage += "Bonus damage from effective weapon!\n";
        return bonusDamage

    } else if (characterStats.weapon == "Hammer" && characterStats.opponent == "wolves") {
        bonusDamage = -1;
        outputMessage += "Reduced damage from ineffective weapon.\n";
        return bonusDamage

    } else {
        bonusDamage = 0;
        return bonusDamage;
    }
}

// Determines damage done by arrows
function shootArrow() {
    var damage = 0;
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= 6) {
        damage += 1;
        damage += critical(3);
        battleStats.villainHP -= damage;
        outputMessage += (`You shoot flaming arrows dealing ${damage} damage!`)
    } else {
        outputMessage += (`Your arrows missed!`)
    }
}

// Determines damage done in enemy turn
function enemyAttack() {
    var damage = 1;
    damage += critical(2);
    battleStats.heroHP -= damage;
    outputMessage += (`The ${characterStats.opponent} attack you dealing ${damage} damage.`);

}

// Determines chance of escape
function run() {
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= 1) {
        battleStats.heroEscape = true;
        outputMessage = ("Managed to escape!")
    } else {
        battleStats.heroEscape = false;
        outputMessage = ("Couldn't escape!")
    }
}

// Determines critical hit
function critical(critRatio) {
    var getCrit = 0;
    var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and10 <= critRatio) {
        getCrit = 2;
        criticalHit = true;
        outputMessage += ("Critical Hit!\n")
        console.log("Critical Hit!\n")
    } else {
        criticalHit = false;
    }
    return getCrit;
}

// Prints options based on input history
function storyProgression(number) {
    switch (number) {
        case 0:
            initialize();
            inputHistory = [];
            break;
        case 1:
            enterName(inputValue);
            var name = characterStats.name;
            outputMessage = (`Ah! ${name} is it? You're in Castle Black now!\nGet ready, we're going beyond the wall! \n\nChoose a weapon brother!\n`);
            outputMessage += ("1. Axe\n2. Sword\n3. Hammer")
            placeHolderEdit("Choose a weapon (#)...");
            break;
        case 2:
            enterWeapon(inputValue);
            var weapon = characterStats.weapon;
            weapon = weapon.toLowerCase();
            if (weapon != "") {
                outputMessage = (`You seem pretty good with that ${weapon}!\n\nLet's head out now, where should we patrol?\n`);
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
                buildAscii(asciiHorse);
                console.log("\n\n1 hour later....");
                outputMessage += "\n1 hour later...\n";
                outputMessage += customEncounter();
                if(gameOver==false){
                   outputMessage += "\n\nWhat do you do?";
                   outputMessage += ("\n1. Charge & attack head on!\n2. Use bow with flaming arrows!\n3. RUN AWAAAAAYYY!!!!");
                placeHolderEdit("Choose an action (#)...");
                } else {
                     outputMessage += "\n\n<< Enter a Name in input to restart >>"
                placeHolderEdit("Restart...");
                initialize();
                }


            } else {
                outputMessage = ("Be serious! Where are we going?");
                outputMessage += ("\n1. Frost Cavern\n2. Jagged Pass\n3. Desolate Forest")
            }
            break;

        case 4:
            startBattle();
            var randomNumberBetween0and10 = Math.floor(Math.random() * 10);
            if (randomNumberBetween0and10 <= 5) {
                injured = true;
            } else {
                injured = false;
            }

            break;
        case 5:
            var outcome;
            inputHistory.pop();
            if (injured == false) {
                outputMessage = "You return to Castle Black, victorious.";
                outcome = outputMessage;
                outputMessage += "\n\nWhat happens next?\n1. Party Hard!\n2. Go to Sleep.";

            } else {
                outputMessage = "You return to Castle Black, wounded and moments before death.";
                outcome = outputMessage;
                outputMessage += "\n\nWhat happens next?\n1. Dump your body in a pit.\n2. Burn your body on a pyre.";
            }
            inputHistory.push(outcome);
            break;
        case 6:
            if (injured == false) {
                if (inputValue == "1") {
                    outputMessage = "You partied too hard, got so drunk... and later that night fell off the roof. You Died.\n\nGame Over!";
                    outputMessage += ` Your Score is ${scoreTracker}.`;
                } else if (inputValue == "2") {
                    scoreTracker += 1000;
                    outputMessage = "You rest after a tough day. \nYears passed and you eventually become the Lord Commander of the Night's Watch and die of old age.\n\nGame Over!";
                    outputMessage += ` Your Score is ${scoreTracker}.`;
                }
            } else if (injured == true) {
                if (inputValue == "1") {
                    outputMessage = "The Night King raises you from the dead beyond the walls! You start attacking your fellow brothers and one by one they fall.\n\nGame Over!";
                    outputMessage += ` Your Score is ${scoreTracker}.`;
                } else if (inputValue == "2") {
                    scoreTracker += 1000;
                    outputMessage = "The fire restores your strength. Surprise! You're now immortal and have magic powers. Nice.\n\nGame Over!";
                    outputMessage += ` Your Score is ${scoreTracker}.`
                }
            }
            gameOver = true;
            outputMessage += "\n\n<< Enter a Name in input to restart >>"
            placeHolderEdit("Restart...");
            initialize();
            break;
        default:
            inputHistory.pop();
            alert("Path not written yet")
            break;
    }
}

// Builds ascii art from array of lines
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