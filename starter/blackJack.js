var houseCards = [];
var playerCards = [];
var playerPoints = 0;
var housePoints = 0;

function generateCards(numberOfCards) {
  var cardsArr = [];
  for (var i = 0; i < numberOfCards; i++) {
    var card = Math.floor(Math.random() * 9) + 1;
    cardsArr.push(card);
  }
  return cardsArr;
}

function sumCards (cardsArr) {
  var points = cardsArr.reduce(function(total, current) {
    return total + current;
  })
  return points;
}

function checkHand(userInput) {
  if (playerPoints <= 21 && userInput == 'y') {
    console.log("from checkhand" + playerPoints);
    gameResultsElement.innerHTML += "<p>Would you like to draw another card? (y/n)</p>"
  } else {
    while (housePoints < 17) {
      houseCards = houseCards.concat(generateCards(1));
      housePoints = sumCards(houseCards);
    } 
    revealHand();
  }
}

function drawCardBlackJack() {
  if (userInputBJElement.value == 'y') {
    playerCards = playerCards.concat(generateCards(1));
    playerPoints = sumCards(playerCards);
    console.log("from drawing" + playerCards);
    gameResultsElement.innerHTML += "<p>You drew " + playerCards[playerCards.length - 1] + ". You have  " + playerPoints + " points.</p>";
  }
  checkHand(userInputBJElement.value);
}

function revealHand() {
  userInputBJElement.value = "";
  blackJackElement.style.display = "none";
  if (playerPoints > 21 && housePoints > 21) {
    gameResultsElement.innerHTML += "<p>Both of Mr. Leper and you have gone bust! Better luck next time!</p>";
    gameResetElement.style.display = "block";
  } else if (playerPoints > 21) {
    gameResultsElement.innerHTML += "<p>Mr. Leper has " + housePoints + " points while you have gone bust! What a shame, no gold for you :(</p>";
    gameResetElement.style.display = "block";
  } else if (housePoints > 21) {
    gameResultsElement.innerHTML += "<p>Mr. Leper has gone bust! Good luck on your next quest!</p>";
    currentState++;
    moveOnElement.style.display = "block";
  } else if (playerPoints > housePoints) {
    gameResultsElement.innerHTML += "<p>Woohoo! You've beat Mr. Leper, who only has " + housePoints + " points. One step closer to those golden nuggets ;) </p>";
    currentState++;
    moveOnElement.style.display = "block";
  } else if (playerPoints == housePoints) {
    gameResultsElement.innerHTML += "<p>What a coincidence, both Mr. Leper and you got the same hand. Lucky you, you may proceed!</p>";
    currentState++;
    moveOnElement.style.display = "block";
  } else {
    gameResultsElement.innerHTML += "<p>Mr. Leper beat you with " + housePoints + " points. Too bad, no gold for you :(</p>";
    gameResetElement.style.display = "block";
  }
}

function blackJack() {
  houseCards = generateCards(2);
  housePoints = sumCards(houseCards);
  playerCards = generateCards(2);
  playerPoints = sumCards(playerCards);

  gameIntroElement.innerHTML = "<p>Mr. Leper invites you to a game of Black Jack. You may only proceed if you don't go bust or get higher points than Mr.Leper!</p>";
  gameResultsElement.innerHTML = "<p>You drew " + playerCards[0] + " and " + playerCards[1] + ". You have  " + playerPoints + " points.</p>";
  blackJackElement.style.display = "block"
  checkHand('y');
}