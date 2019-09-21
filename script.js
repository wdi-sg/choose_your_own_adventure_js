console.log("hello script js");

alert("Welcome Adventurer! \n\nPlease type in your name for your in game character in the input box given (e.g. White Wolf) \n\nYou cannot change your name later so please choose wisely");

// The step variable is to check the number of inputs so far. Name is to store the name the user have chosen. CharacterChoses is to store the character class chosen. PathTaken is to store the number of paths taken so far.
var step = []
var name = "";
var characterChosen = "";
var pathTaken = [];

var inputHappened = function(currentInput){

//track the current steps the User have taken
step.push(currentInput);
console.log(step.length);
console.log(name);
console.log(characterChosen);
console.log(step);
console.log(pathTaken);

//changing all inputs into lower case
input = currentInput.toLowerCase();


//step 1 is just to get the name
if (step.length >= 0 && name === ""){
    name = currentInput;
    step[0] = name;
    result = "Good day " + name + "! Your adventure awaits you! \nPerilous paths will be taken, and only the strong, or the lucky, will survive. Will you be the one? \nGood luck " + name + ", may fortune and the force be with you \n\nPlease type in your Adventurer Class (Warrior / Mage / Ranger)";
}


//this IF function makes sure that the user have selected the right class before moving on to select the paths. If step length is more than 2 and characterChosen variable is empty, check if the input is warrior, mage or ranger. If it is not, ask them to type in properly.
if (step.length >= 2 && characterChosen === ""){

    if (input === "warrior"){
        characterChosen = input
        step[1] = characterChosen;
        var status = JSON.stringify(character.warrior.stats);
        result = "You have chosen to be a Warrior, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path) \n\nPlease make sure you type in the paths correctly to proceed."
    } else if (input === "mage"){
        characterChosen = input
        step[1] = characterChosen;
        var status = JSON.stringify(character.mage.stats);
        result = "You have chosen to be a Mage, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path) \n\nPlease make sure you type in the paths correctly to proceed."
    } else if (input === "ranger"){
        characterChosen = input
        step[1] = characterChosen;
        var status = JSON.stringify(character.ranger.stats);
        result = "You have chosen to be a Ranger, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path) \n\nPlease make sure you type in the paths correctly to proceed."
    } else{
        step.pop();
        result = "Please choose the correct input! \n\n(Warrior / Mage / Ranger)";
    }
}


//beginning to code the path function
if (step.length > 2){
    if(step[2] === "fire path"){
        pathTaken = JSON.stringify(path[0])
        console.log(pathTaken);
        result = "The Fire Path is one of searing heat and melting flesh, many demons exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward!"
    } else if (step[2] === "water path"){
        pathTaken = JSON.stringify(path[1])
        console.log(pathTaken);
        result = "The Water Path is one of crashing waves and crushing depths, many sea monsters exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward!"
    } else if (step[2] === "earth path"){
        pathTaken = JSON.stringify(path[2])
        console.log(pathTaken);
        result = "The Earth Path is one of meteoric avalanches and ambushing cliffs, many rock trolls exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward!"
    } else if (step[2] === "wind path"){
        pathTaken = JSON.stringify(path[3])
        console.log(pathTaken);
        result = "The Wind Path is one of tearing tornadoes and dizzying heights, many sky beasts exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward!"
    } else {
        step.pop();
        result = "Please choose the correct input! \n\n(Fire water)"
    };
};



return result;

}