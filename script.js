    /* 1. Minesweeper Concept

    This part can also be automated by system first.
    // Prompt player 1 to input name
    // Choose where to place bomb/items
        // Row 1, 2, 3
        // Column 1, 2, 3
    // Assign random number from 1-9 to each of the box
    // Show to player 1 in which number the bomb/item he has placed is
    // Switch to player 2
    */


    // Prompt to select a number from 1 - 9 to see if hit bomb
        // If not, return "You are safe. Please select another."
        // If hit bomb, game over
    // Game ends when player safely opened 8 other boxes without hitting bomb or when hit bomb
    // Every safe opening of a box has a score of 1.
    // Save all scores and compare the highest.


    /* 2. Super Mario Concept*/

    // Prompt player for name
    // Prompt player to choose character: Mario or Lugi
    // Alert player to click start
    // When player click start, randomize a number to how many steps the character moves forward
    // At the 10th step, there is a gap
    // If player reaches the gap, game over
    // At the 15th step, there are coins for grab
        // Player can choose to continue or take the coins
    // At the 18th step, there is enemy
        // E.g. if just nice at the step of the enemy, game over
    // Flag at the 100th step.
        // If player reaches the 100th step safely, can choose to continue to next level or end the game.
            // Whichever option chosen, bring to end game and cal score

console.log("Welcome to Minesweeper v2! Please enter 'Start Game' to proceed.");

// Create an empty array of mystery boxes
var mysteryBox = [];

var boxItem = 0;

// Create an array to store player's selected choices
var playerSelectedChoices = [];

var inputHappened = function(currentInput){

    // Type in "Start Game" (Imagine user clicks on "Start Game" button)
    if(currentInput === "Start Game") {

        // Prompt user for name
        var playerName = prompt("Please enter your name.");
        console.log("Hello " + playerName);

        // System assign random number to the array of mystery boxes
        numberGenerator(mysteryBox);
        console.log("Array in mysteryBox: " + mysteryBox);

        // Set item to be the third item in the mystery box
        boxItem = mysteryBox[2];
        console.log("Item is " + boxItem);

        // Player will be prompted to be input choice number as long as he/she does not hit the bomb
        while(parseInt(playerChoiceInput) !== boxItem){

            var playerChoiceInput = prompt("Please select a number from 1 - 9.");

            playerChoice(parseInt(playerChoiceInput));
            playerSelectedChoices.push(playerChoiceInput);

            console.log("Your choices are: " + playerSelectedChoices);
        }

    } else {

        // Prompt user to input exact text to start the game
        return "Please enter 'Start Game' to proceed.";
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

// This function will check if player's input choice matches the specified boxItem value.
var playerChoice = function(mysteryBoxNumber) {

        if(parseInt(mysteryBoxNumber) !== boxItem) {
            console.log("You have entered: " + mysteryBoxNumber);
            console.log("You are safe!");

        } else {
            console.log("You hit the bomb! Game Over!");
        }

};