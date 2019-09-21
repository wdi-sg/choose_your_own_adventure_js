console.log("hello script js");

/*
Choose Your Own Adventure

Ask player which House to be sorted into, after which player needs to find the House common room within Hogswarts Castle.
*/

//for easy update of display message
var input = document.getElementById("input");

//to track progress of game
var gameCounter = 0;

var gameProgress = ["getName", "getHouse"];

//to store player name
var player;

//start game by requesting player's name
alert("Welcome to Hogswarts. What's your name?");
input.placeholder = "Enter name";

var inputHappened = function(currentInput){
  console.log( currentInput );

  //check if is new game
  if (gameProgress[gameCounter] === "getName") {

    //store player name in Upper Case for easy reading

    player = currentInput.toUpperCase();
    console.log( "Player: " + player );

    //increment game progress
    gameCounter ++;
    console.log( "Game counter: " + gameCounter);

    input.value = "Enter House";
    return `Hi, ${player}. What House are you in?\n1) Gryffindor\n2) Hufflepuff\n3) Ravenclaw\n4) Slytherin`;
  }
/*
  //get House of player
  } else if (gameProgress[gameCounter] === "getHouse") {

    //store player house



  }
*/



  // var output = "WOW SOMETHING HAPPENED";
  // input.value = "clear";
  // return output;

};