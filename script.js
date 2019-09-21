console.log("hello script js");

/*
Choose Your Own Adventure

Ask player which House to be sorted into, after which player needs to find the House common room within Hogswarts Castle.




*/

//for easy update of display message
var input = document.getElementById("input");


//to store player name
var player;


//start game
alert("Welcome to Hogswarts. What's your name?");
input.placeholder = "Enter name";

var inputHappened = function(currentInput){
  console.log( currentInput );

//store player name
  player = currentInput.charAt(0).toUpperCase() +  currentInput.slice(1);
  console.log( "Player: " + player );
  input.value = "Enter House";
  return `Hi, ${player}. What House are you in?`;


  // var output = "WOW SOMETHING HAPPENED";
  // input.value = "clear";
  // return output;
};