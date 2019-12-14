console.log("Hello World! Choose your own adventure!");

var steps = 0; // Stores the steps
var input = document.getElementById("input");
input.placeholder = "What is your name?"; // First question to user
var userInputs = []; // Stores inputs from user
var userName = ""; // Stores user's name
var outputPlaceHolder = document.getElementById("output");
var selectedElements = ["A", "B", "C"];


var statement;

var inputHappened = function(currentInput){
    if (steps === 0) {
        userName = input.value;
        steps++;
        statement = "Hello " + userName + "!\n" + "\n Welcome to Create Your Own Adventure!" + "\n Where would you like to go today? \n" + "\nA :  Singapore " + "\nB :  United Arab Emirates " + "\nC :  United States\n" + "\rTo select, type:  A, B or C ";
    };
    console.log(currentInput);
    return statement;
}


// Choices










//TO DOs
// (1) Clear placeholder that contains "what is your name"
// (2)



// STEP 1: Ask user: "What is your name?"
// STEP 2: User keys in input
// STEP 3: Save user's name into a variable
// STEP 4: Message: " Hello USER's NAME. Welcome to the Travel Game. Where would you like to go?"
// Give three choices -  (A)SINGAPORE  (B)UAE  (C)USA
// STEP 5: User selects A, B or C. and move to the country they select.
// Use if else statements
// if(choice === A) { go to A } else{ go to B} else if{go to C}
