console.log("Welcome to The Wall!");
var outputMessage;
var inputValue;
var inputHistory = [];
var scoreTracker = 0;
let characterStats = {
    name: "",
    weapon: "",
    location: "",
    opponent: "";
};



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
            output += "You encountered a swarm of wights!";
            break;
        case "Jagged Pass":
            characterStats.opponent = "wildlings";
            output += "You were attacked by a tribe of Wildlings!";
            break;
        case "Desolate Forest":
            characterStats.opponent = "children of the forest";
            output += "You were ambushed by the Children of The Forest!";
            break;
        default:
            output += "Theres nothing here";
            break;
    }
    return output;
}

function attackOptions(){

}
function storyProgression(number) {
    switch (number) {
        case 1:
            enterName(inputValue);
            var name = characterStats.name;
            outputMessage = (`Ah! ${name} is it? You're in Castle Black now!\nGet ready, we're going beyond the wall! Choose a weapon brother!\n`);
            outputMessage += ("1. Axe\n2. Sword\n3. Hammer")
            placeHolderEdit("Choose a weapon...");
            break;
        case 2:
            enterWeapon(inputValue);
            var weapon = characterStats.weapon;
            weapon = weapon.toLowerCase();
            if (weapon != "") {
                outputMessage = (`You seem pretty good with that ${weapon}!\n Let's head out now, where should we patrol?\n`);
                outputMessage += ("1. Frost Cavern\n2. Jagged Pass\n3. Desolate Forest")
                placeHolderEdit("Choose a location...");
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
                outputMessage += "\n1 hour later...\n";
                outputMessage += customEncounter();
                outputMessage += "What do we do?";
                outputMessage += ("\n1. Charge & attack head on!\n2. Draw our bows with flaming arrows!\n3. RUN AWAAAAAYYY!!!!");
                placeHolderEdit("Input action...");

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
                outputMessage += buildAscii(asciiHorse);

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

var asciiHorse = ["            .''",
    "  ._.-.___.' (`\\",
    " //(        ( `'",
    "'/ )\\ ).__. )",
    "' <' `\\ ._/'\\",
    "   `   \\     \\"
];