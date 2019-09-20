console.log("hello script js");

alert("Welcome Adventurer! \n\nPlease type in your name for your in game character in the input box given (e.g. White Wolf) \n\nYou cannot change your name later so please choose wisely");

//to store name, character class and path taken, to call upon later in the function
var step = []
var name = "";
var characterChosen = "";
var pathTaken = [];

var inputHappened = function(currentInput){

//track the current steps the User have taken
step.push(currentInput);
console.log(step.length);


//step 1 is just to get the name
if (step.length === 1){
    name = currentInput;
    result = "Good day " + name + "! Your adventure awaits you! \nPerilous paths will be taken, and only the strong, or the lucky, will survive. Will you be the one? \nGood luck " + name + ", may fortune and the force be with you \n\nPlease type in your Adventurer Class (Warrior / Mage / Ranger)";
}


//this IF function makes sure that the user have selected the right class before moving on to select the paths
if (step.length >= 2 && pathTaken.length === 0){
    characterChosen = currentInput.toLowerCase();
    if (characterChosen === "warrior"){
        var status = JSON.stringify(character.warrior.stats);
        result = "You have chosen to be a Warrior, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path)"
    } else if (characterChosen === "mage"){
        var status = JSON.stringify(character.mage.stats);
        result = "You have chosen to be a Mage, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path)"
    } else if (characterChosen === "ranger"){
        var status = JSON.stringify(character.ranger.stats);
        result = "You have chosen to be a Ranger, your stats are as follows: \n\n" + status + "\n\nYou may now choose the path you would like to take \n(Fire Path / Water Path / Earth Path / Wind Path)"
    } else {
        characterChosen = "";
        result = "Please choose the correct input!"
    }
}


//beginning to code the path function
if (step.length >= 2 && characterChosen !== ""){
    pathTaken = currentInput.toLowerCase();
    console.log(pathTaken);
}



return result;

}