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
console.log("--------------------------")
console.log("Character name chosen is:  " + name);
console.log("Character class chosen is: " + characterChosen);
console.log("No. of steps so far is:    " + step.length);
console.log("Steps so far are:          " + step);
console.log("Paths taken so far are:    "+ pathTaken);


//step 1 is just to get the name
if (step.length >= 0 && name === ""){
    name = currentInput;
    step[0] = name;
    result = "Good day " + name + "! Your adventure awaits you! \nPerilous paths will be taken, and only the strong, or the lucky, will survive. Will you be the one? \nGood luck " + name + ", may fortune and the force be with you \n\nPlease type in your Adventurer Class (Warrior / Mage / Ranger)";
}


//if there are more than 1 elements in the array, check if the SECOND element is the Character classes or not. If yes, proceed, if not, delete their entry and ask them to input correctly. Change second element to LOWERCASE
if (step.length > 1){
    //changing all inputs into lower case
    input = step[1].toLowerCase();
    if (input === "warrior"){
        characterChosen = "Warrior"
        var status = JSON.stringify(character.warrior.stats);
        result = "You have chosen to be a Warrior, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path)"
    } else if (input === "mage"){
        characterChosen = "Mage"
        var status = JSON.stringify(character.mage.stats);
        result = "You have chosen to be a Mage, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path)"
    } else if (input === "ranger"){
        characterChosen = "Ranger"
        var status = JSON.stringify(character.ranger.stats);
        result = "You have chosen to be a Ranger, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path)"
    } else{
        step.pop();
        result = "Please choose the correct input! \n\n(Warrior / Mage / Ranger)";
    }
}


//if there are more than 2 elements in the array, check if the THIRD element is the paths to be taken, if is then proceed, if it's something else then delete their input and prompt them to input correctly. Change third element to LOWERCASE.
if (step.length > 2){
    //changing all inputs into lower case
    input = step[2].toLowerCase();
    if(input === "fire path"){
        pathTaken = "Fire Path"
        console.log(pathTaken);
        result = "The Fire Path is one of searing heat and melting flesh, many demons exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward!"
    } else if (input === "water path"){
        pathTaken = "Water Path"
        console.log(pathTaken);
        result = "The Water Path is one of crashing waves and crushing depths, many sea monsters exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward!"
    } else if (input === "earth path"){
        pathTaken = "Earth Path"
        console.log(pathTaken);
        result = "The Earth Path is one of meteoric avalanches and ambushing cliffs, many rock trolls exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward!"
    } else if (input === "wind path"){
        pathTaken = "Wind Paths"
        console.log(pathTaken);
        result = "The Wind Path is one of tearing tornadoes and dizzying heights, many sky beasts exist here to test your strength " + name + ". \n\nAs a " + characterChosen + ", this will be a tremendous test indeed, however that will not deter you now will it, " + name + "? \n\n Let us march on forward!"
    } else {
        step.pop();
        result = "Please choose the correct input! \n\n(Fire Path / Water Path/ Earth Path/ Wind Path)"
    };
};



return result;

}