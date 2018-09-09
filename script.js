var playerName;
var score;
var playerHP;
var playAgain;
var eatenMushrooms;
var hasHidden;
var password;
var enterPassword;

var startGame = function () {
  playerName = "";
  playerHP = 100;
  score = 0;
  eatenMushrooms = false;
  hasHidden = false;
  playAgain = false;
  password = Math.floor(Math.random()*10000);
  enterPassword = "";

  do {
    var playerName = prompt("What is your name?")
  } while (!playerName);

  alert(`'Greetings brave ${playerName}! An evil dragon has kidnapped our princess and taken her to an abandoned tower nearby.'`);
  alert("'Here's a sword, a shield and some armour for you to wear.'");
  alert ("'Now go! Save our princess! Good luck!'");
  alert("You leave and set off. Your quest begins...");
  alert("After a long hike you finally reach the dragon's tower. You approach it, taking care to remain hidden.")
  outsideTower();
}

var statusLine = function () {
  return `You have ${playerHP} hp.`;
}

var outsideTower = function () {
  var choice;

  do {
    choice = parseInt(prompt("You're outside the dragon's tower. What do you want to do?\n"
    + "1. Explore the surroundings\n"
    + "2. Hide and wait\n"
    + "3. Approach the gate\n\n"
    + statusLine()));
  } while (choice !== 1 && choice !== 2 && choice !== 3);

  if (choice === 1) {
    exploreOutside();
  } else if (choice === 2) {
    hideAndWait();
  } else if (choice === 3) {
    approachGate();
  }
}

var exploreOutside = function () {
  if (eatenMushrooms) {
    alert("It's just grass and trees out here.");
  } else if (!eatenMushrooms) {
    var choice = confirm("You spot a clump of red mushrooms. Mmm, they look good.\n\n"
    + "Eat the mushrooms?");

    if (choice) {
      alert("Mm, tasty! You've gained 10 hit points.");
      eatenMushrooms = true;
      score++;
      playerHP += 10;
    } else if (!choice) {
      alert("Better safe than sorry.")
    }

  }
  alert("You head back to the entrance of the tower.");
  outsideTower();
}

var hideAndWait = function () {
  if (hasHidden) {
    alert("You wait for a while, but nothing happens.");
  } else if (!hasHidden) {
    alert(`A goblin approach the gate and shouts out a number: ${password}`);
    alert(`You hear the gate of the tower open.`);
    alert(`'${password}'. That'll be useful to know.`);
    hasHidden = true;
  }
  outsideTower();
}

var approachGate = function () {
  alert("You approach the gate of the tower.");
  alert("A goblin guard squints at you from behind the gate.");

  do {
    var input = parseInt(prompt("'I've never seen you before... Do you know the password?"));
  } while (!input);

  if (input === password) {
    alert("'Okay, come on in.'");
    score++;
    insideTower();
  } else {
    alert("'What? You're here to rescue the princess aren't you?'");
    alert("'The dragon will kill us. I won't let you in!'");
    alert("The goblin guard refuses to let you in no matter how much you beg and plead.");
    alert("Defeated, you turn and leave the tower in shame...");
    loseGame();
  }
}

var insideTower = function () {

}


var winGame = function () {

  alert("Congratulations! You successfully rescued the princess!"); // winText
  endGame();
}

var loseGame = function () {

  alert("You failed to rescue the princess. Better luck next time!"); // loseText
  endGame();
}

var endGame = function() {

  alert(`You achieved a score of ${score}.`);
  var playAgain = confirm("Play again?");

  if (playAgain) {
    startGame();
  } else {
    alert("Ok. Thanks for playing!");
  }
}

startGame();
