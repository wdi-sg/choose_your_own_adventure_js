// var userName = prompt("Welcome to Ire-con-man-land! What's your name, mate!");
// var userInput = "";

var gameIntroElement = document.getElementById("game-intro");
var gameStartElement = document.getElementById("start-game");
var gameResultsElement = document.getElementById("game-results");
var userInputBJElement = document.getElementById("user-input-black-jack");
var userInputKLElement = document.getElementById("user-input-know-leper");
var userInputRElement = document.getElementById("user-input-riddle");
var blackJackElement = document.getElementById("black-jack");
var knowLeperElement = document.getElementById("know-leper");
var riddleElement = document.getElementById("riddle");
var moveOnElement = document.getElementById("move-on");
var gameResetElement = document.getElementById("reset-game");
var previousState = 0;
var currentState = 0;


function startGame() {
  gameStartElement.style.display = "none";
  gameResultsElement.innerHTML = "";
  if (previousState == 0) {
    blackJack();
    previousState++;
  } else if (previousState == 1) {
    knowLeper();
    previousState++;
  } else {
    riddle();
    previousState++;
  }
}

function checkGameState() {
  if (currentState == previousState && currentState == 3) {
    gameResultsElement.innerHTML = "<p>Congratulations!! You've reached the other side of the rainbow!! But no gold is in sight. Dayum.</p>";
    gameResetElement.style.display = "block";
  } else {
    gameResultsElement.innerHTML = "<p>You took wrong turns and find yourself at the entrance of an Irish bar. Nope, no gold, but hey, you've come a long way, have some beer ;)</p>";
    gameResetElement.style.display = "block";
  }
}

function resetGame() {
  gameResetElement.style.display = "none";
  //general
  previousState = 0;
  currentState = 0;
  //blackJack
  houseCards = [];
  playerCards = [];
  playerPoints = 0;
  housePoints = 0;
  //knowLeper
  score = 0;
  questionNumber = 0;
  gameRunning = true;
  startGame();
  //riddle
  pathsTaken = [];
  forkRoadN = 1;
}

function moveOn() {
  moveOnElement.style.display = "none";
  blackJackElement.style.display = "none";
  knowLeperElement.style.display = "none";
  startGame();
}









