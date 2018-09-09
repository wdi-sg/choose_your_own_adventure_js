var playerName;
var score;
var playAgain;
var hasKey;

// resets variables and restarts the game
var startGame = function () {

  playerName = "";
  score = 0;
  hasKey = false;
  playAgain = false;

  do {
    var playerName = prompt("What is your name?")
  } while (!playerName);

  alert("Ok. Hi " + playerName + "!");

  firstStep();
}

var firstStep = function () {
  var a = prompt ("first step!");

  loseGame();
}

var loseGame = function () {
  alert("#"); // loseText
  alert("Score: " + score);

  var playAgain = confirm("Play again?");

  if (playAgain) {
    startGame();
  } else {
    alert("Alright. Thanks for playing!");
  }

}

startGame();
