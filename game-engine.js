//game engine

/*
Requirements:
Using what you know about data types, variables, operators, conditional blocks, and accepting user input, create a text-based game that allows the user to arrive at different "destinations" based on the inputs they type.

The game can be as simple or as complicated as you would like to make it.

Any path the user goes down must ask them at least three questions.
There must be a minimum of seven total destinations the user could arrive at based on their responses.
For at least one of the questions asked, there must be more than two possible user responses.
Your code must make use of both string and number user inputs.
The game should work without the dev tools console open- no console.log!
You can only use prompt, alert, and confirm
Hint: You may need parseInt() and toString()
Hint: Need a random number? var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
*/

// variables needed



//functions needed

// var mainPageRun = function() {
//     do {
//         mainPage = prompt("A Long Night In The Woods\n\nType:\n\'s\' to start game,\n\'e\' to exit game.\n\nTo exit at any point during the game, just close the browser.", "\'s\' or \'e\'")
//     }
//     while(mainPage !== "s" && mainPage !== "e");

//     if (mainPage == 's') {
//         var toRun = confirm("run");
//     } else if (mainPage == 'e') {
//         confirmExitRun();
//     };
// };

var textBox = document.getElementById("textBox");
var textLog = document.createElement("P");
var text = 0;

var insertLog = function(text){
    textLog.appendChild(text);
    textBox.appendChild(textLog);
};

var startWarning = function() {
    var confirmRun = confirm("This game may contain horror elements.\nClick OK to run game or Cancel to go back.");
    if (confirmRun == true) {
        text= document.createTextNode("This game may contain horror elements. Click OK to run game or Cancel to go back. Player chose to run game. ")
    }
    else {
        text = document.createTextNode("This game may contain horror elements. Click OK to run game or Cancel to go back. Player chose Cancel to go back. ")
    }
    insertLog(text);
};