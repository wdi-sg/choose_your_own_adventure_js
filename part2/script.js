console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   return "SOMETHING HAPPENED";
// };

// var display = function( data ){
//   var displayElement = document.querySelector('#output');

//   // get rid of the entire contents
//   displayElement.innerHTML = "";

//   // put the data into the div
//   output.innerText = data;
// };

console.log("hello script js");


var starterCode = "Go!";
var result = " ";
// 1 get instructions ready in p or h1 under html, instruct them to key in 1 / 2 /3 only. and instruct user to key in 'go' to get game started
// 2 after user key in go, output a question. show what is 1 / 2 / 3


// clear the input box
//user keys in 1
// output another qns that needs user to return 1 / 2 / 3
//clear the input box
// user key in 2
// output 3rd qns that returns the last set of (1/2/3)
// clear the input box
// display game over
// restart the game


var inputHappened = function(currentInput) {
        console.log( currentInput );
        // for 1st part, get user to key in Go, else prompt them to key in the right word or else game wont start
 if (currentInput === starterCode) {
    var output = "Game has begun. You come across a strange house in the woods. Do you want to 1. Go in? 2. Take a step back 3. Walk towards the opposite direction of the strange house";
    console.log(output);
    return output; };

};