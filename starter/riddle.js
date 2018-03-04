var pathsTaken = [];
var forkRoadN = 1;

function riddle() {
  gameIntroElement.innerHTML = "<p>Mr. Leper says: \"There are five fork roads ahead. Get all of them right and you will reach the other of the rainbow.\".</p>";
  gameResultsElement.innerHTML = "<p>Which way would you like to go? (left/right) </p>" ;
  riddleElement.style.display = "block"
}

function submitAnswerRiddle() {
  pathsTaken.push(userInputRElement.value);
  gameResultsElement.innerHTML += "<p>" + userInputRElement.value + "</p>";
  if (forkRoadN < 5) {
    gameResultsElement.innerHTML += "<p>Which way would you like to go? (left/right) </p>";
    forkRoadN++;
  } else {
    var winGame = checkPathsTaken();
    if (winGame) {
      currentState++;
    }
    riddleElement.style.display = "none";
    checkGameState();
  }
}

function checkPathsTaken() {
  for (var i = 0; i < pathsTaken.length; i++) {
    if (pathsTaken[i] == 'left') {
      return false;
    }
  }
  return true;
}