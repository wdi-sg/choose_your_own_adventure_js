// Create an empty array of mystery boxes
var mysteryBox = []; // This mysteryBox will be shown to user to pick from numbers 1 - 9

// To define the item is in which box number of the mystery box
var boxItem = null;

// Create an array to store player's selected choices
var playerSelectedChoices = [];

// Create div element
var displayGameStepPrompt  = document.createElement("div");
// Append div to document body
document.body.appendChild(displayGameStepPrompt);

// Create an array of questions
var gameStepPrompt = [
"Please enter your name.",
"Please input any number from 1 - 9."
];

var player = {
    name: "",
    attemptNo: null,
    playerSelectedChoices: [],
    gameScore: null
};

var inputHappened = function(currentInput){

    // Type in "Start Game" (Imagine user clicks on "Start Game" button)
    if(currentInput === "Start Game") {

        displayGameStepPrompt.innerHTML = gameStepPrompt[0];
        return "";

    } else if(currentInput !== "Start Game"){

        // Run setup mystery box
        setupMysteryBox();

        displayGameStepPrompt.innerHTML = gameStepPrompt[1];
        player.name = currentInput;
        return "Hello " + player.name + "\n" + "The item is in one of the mystery boxes below: " + mysteryBox;

    } else if(displayGameStepPrompt.innerHTML = gameStepPrompt[1]) {

        playerChoice(parseInt(currentInput));
        playerSelectedChoices.push(currentInput);

    }


};

var numberGenerator = function(arr) {

    // Function will stop when array length reaches 9
    if (arr.length >= 9) {
        return;
    }

    // To create 9 random numbers starting from 0:
        // Math.floor(Math.random() * 9)
    // To create 9 random numbers starting from 1:
        // Math.floor(Math.random() * 9 + 1)
    var newNumber = Math.floor(Math.random() * 9 + 1);

    // If that random number isn't in the array yet, push it into the array
    if (arr.indexOf(newNumber) < 0) {
        arr.push(newNumber);
    }

    // Run function again
    numberGenerator(arr);
};

var setupMysteryBox = function() {

    // Assign item into box number
    numberGenerator(mysteryBox);
    console.log("Array in mysteryBox: " + mysteryBox);

    // Get the box item location
    boxItem = mysteryBox[2];
    console.log("The item is at number " + boxItem);
};

// This function will check if player's input choice matches the specified boxItem value.
var playerChoice = function(mysteryBoxNumber) {

        if(parseInt(mysteryBoxNumber) !== boxItem) {
            displayGameStepPrompt.innerHTML = gameStepPrompt[1];
            return "You have entered: " + mysteryBoxNumber + "\n" + "You are safe!";

        } else {
            displayGameStepPrompt.innerHTML = gameStepPrompt[0]
            return "You hit the bomb! Game Over!";
        }

};

var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;

};