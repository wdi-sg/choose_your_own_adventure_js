// choose your own adventure game - 3 options for each choice
// keep track of the current 'state'
// keep track of the users name and use it in the program


console.log("hello script js");

// start by initializing the state and playername
var currentState = "start";
var playerName = null;


var inputHappened = function(currentInput){
  console.log( currentInput );
  console.log(currentState);
switch (currentState) {
// user has just started the game
  case "start":
    playerName = currentInput;
    currentState = "travelYear";
    return askTravelYear(playerName);
    break;

  // case "travelYear":
  //   playerName = currentInput;
  //   askTravelYear(playerName);
  //   currentState = "travelYear";
  //   break;

}
}

var askTravelYear = function (playerName) {
  var output = "Hi " + playerName + ", what year would you like to travel to?";
  return output;
}
