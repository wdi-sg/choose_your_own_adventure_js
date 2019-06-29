var playerName;
var score;
var playerHP;
var playAgain;
var eatenMushrooms;
var takenShield;
var hasHidden;
var password;
var dragonHP;

var startGame = function () {
  playerName = "";
  playerHP = 100;
  score = 0;
  eatenMushrooms = false;
  takenShield = false;
  hasHidden = false;
  playAgain = false;
  password = Math.floor(Math.random()*10000);
  dragonHP = 200;

  do {
    playerName = prompt("What is your name?")
  } while (!playerName);

  alert(`'Greetings brave ${playerName}! An evil dragon has kidnapped our princess and taken her to an abandoned tower nearby.'`);
  alert("'Here's a sword, a shield and some armour.'");
  alert ("'Now go! Save our princess! Good luck!'");
  alert("You leave and set off. Your quest begins...");
  alert("After a long hike you finally reach the dragon's tower. You approach it, taking care to remain hidden.")
  outsideTower();
}

var statusLine = function () {
  return `You have ${playerHP} hp.`;
}

var combatLine = function () {
  return `You have ${playerHP} hp. The dragon has ${dragonHP} hp.`;
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
    var choice = confirm("You spot a clump of red mushrooms. Mmm, they look tasty.\n\n"
    + "Eat the mushrooms?");

    if (choice) {
      alert("The mushrooms are delicious! Mmm, adventuring's sure easier with a full stomach.");
      alert("You've gained 20 hit points.");
      eatenMushrooms = true;
      score++;
      playerHP += 20;
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
    alert("'The dragon will eat us if that happens. I won't let you in!'");
    alert("The goblin guard refuses to let you in no matter how much you beg and plead.");
    alert("Defeated, you turn and leave the tower in shame...");
    loseGame();
  }
}

var insideTower = function () {
  var choice;

  do {
    choice = parseInt(prompt("You're in the first floor of the tower. Several goblins mill around, looking at you curiously.\n\n"
    + "What do you want to do?\n"
    + "1. Talk to the goblins\n"
    + "2. Climb the stairs to the second floor\n"
    + "3. Look around\n\n"
    + statusLine()));
  } while (choice !== 1 && choice !== 2 && choice !== 3);

  if (choice === 1) {
    talkToGoblins();
  } else if (choice === 2) {
    faceDragon();
  } else if (choice === 3) {
    exploreInside();
  }
}

var talkToGoblins = function () {
  alert("You engage the goblins in conversation, hoping to find out more about the princess and the dragon.");
  var choice = confirm("One of them asks, 'are you here to rescue the princess?'");

  if (choice) {
    alert("'The dragon will eat us if we let anyone rescue the princess!'")
    alert("The goblins get angry! They gang up on you and kick you out of the tower.");
    alert("Battered and bruised, you crawl away from the tower in shame...");
    loseGame();
  } else if (!choice) {
    alert("You say no, and pretend to be a mercenary the dragon hired to guard the princess.");
    alert("Their suspicious alleviated, they quickly lose interest in you.");
    insideTower();
  }
}

var exploreInside = function () {
  if (takenShield) {
    alert("You search the ground floor again, but find nothing this time.");
  } else if (!takenShield) {
    alert("You search the ground floor for anything useful.");
    alert("You find an old shield hidden in a corner. Engraved on it is a picture of a knight fighting a dragon.");
    var choice = confirm("Take the shield?");

    if (choice) {
      alert("You replace your wooden shield with it.");
      alert("You feel suddenly invigorated and a bit more fireproof!");
      takenShield = true;
      score += 2;
    } else if (!choice) {
      alert("You leave the old shield alone.")
    }

  }
  insideTower();
}

var faceDragon = function () {
  var choice;
  var sneakDamage = Math.floor(Math.random()*11 + 10);

  alert("You climb the stairs and reach the top of the tower.");
  alert("You find a red dragon sleeping on a hoard of gold!");
  alert("You spot the princess sits next to the sleeping dragon in a cage. She notices you, and looks at you with fear in her eyes.");
  var choice;

  do {
    choice = parseInt(prompt("What do you do?\n\n"
    + "1. Sneak up and attack the dragon\n"
    + "2. Greet the dragon loudly\n"
    + statusLine()));
  } while (choice !== 1 && choice !== 2);

  if (choice === 1) {
    alert(`You sneak up on the dragon and attack! You deal ${sneakDamage} damage to the dragon.`);
    dragonHP -= sneakDamage;
    startCombat();
  } else if (choice === 2) {
    talkDragon();
  }
}

var talkDragon = function () {
  var choice;

  alert("You greet the dragon loudly. Startled, it wakes up.");
  alert(`'Greetings, ${playerName}. You're the first adventurer to try and talk to me.`);
  alert("'Yes, I can read your mind,' he notes.");
  alert("'You can have the princess if you want. I don't know what to do with her anyway.'");
  alert("'Of course, it looks like I'll have to punish my goblin guards for letting you in so easily. I'll just eat them all...'");

  do {
    choice = parseInt(prompt("What will you do?\n\n"
    + "1. Leave with the princess\n"
    + "2. Attack the dragon to save the goblins\n"
    + statusLine()));
  } while (choice !== 1 && choice !== 2);

  if (choice === 1) {
    alert("You thank the dragon and leave with the princess.");
    alert("As you leave the tower, you try your best to ignore the screams of the dying goblins as they echo from behind you.");
    score += 5;
    winGame();
  } else if (choice === 2) {
    startCombat();
  }
}

var startCombat = function () {
  alert("The dragon roars and attacks!");
  combatLoop();
}

var combatLoop = function () {
  var dragonChoice = Math.round(Math.random());
  var dragonAction;
  var choice;

  if (dragonChoice) {
    dragonAction = "The dragon lunges at you with his claws!";
  } else if (!dragonChoice) {
    dragonAction = "The dragon rears back, gathering fire in its maw.";
  }

  do {
    choice = parseInt(prompt(dragonAction + " What do you do?\n"
    +"1. Slash at the dragon\n"
    +"2. Block with your shield\n"
    + combatLine()));
  } while (choice != 1 && choice != 2);


  resolveTurn(choice, dragonChoice);
}

resolveTurn = function (a, b) {
  var playerDamage;
  var dragonDamage;

  if (a == 1 && b == 1) {
    playerDamage = Math.floor(Math.random()*5 + 4);
    dragonDamage = Math.floor(Math.random()*10 + 8);
    alert("Your sword crashes into the dragon's claws!");
    alert(`You deal ${dragonDamage} damage to the dragon. You take ${playerDamage} damage.`);
    playerHP -= playerDamage;
    dragonHP -= dragonDamage;
  } else if (a == 2 && b == 1) {
    playerDamage = Math.floor(Math.random()*5 + 2);
    alert("You raise your shield to block, but the dragon's claws easily reach around your shield!");
    alert(`You take ${playerDamage} damage.`);
    playerHP -= playerDamage;
  } else if (a == 1 && b == 0) {
    playerDamage = Math.floor(Math.random()*10 + 20);
    dragonDamage = Math.floor(Math.random()*5 + 5);
    alert("You slash at the dragon as he breathes fire at you!");
    alert(`You deal ${dragonDamage} damage to the dragon. You take ${playerDamage} damage.`);
    playerHP -= playerDamage;
    dragonHP -= dragonDamage;
  } else if (a == 2 && b == 0) {
    playerDamage = Math.floor(Math.random()*5 + 10);
    alert("You hide behind your shield as the dragon breathes fire at you!");
    if (takenShield) {
      alert("Your shield glows!");
      playerDamage = Math.floor(Math.random() + 1);
    }
    alert(`You take ${playerDamage} damage.`);
    playerHP -= playerDamage;
  }

  if (playerHP <= 0 && dragonHP > 0) {
    alert("You die...");
    score += Math.floor((200 - dragonHP)/2);
    loseGame();
  } else if (playerHP <= 0 && dragonHP <= 0) {
    alert("Your sword sinks into the dragon's chest as he deals you a finishing blow.");
    alert("You've killed the dragon... but died in the process.");
    alert("You can hear the princess crying in her cage as you lose consciousness.");
    score += Math.floor((200 - dragonHP)/2);
    loseGame();
  } else if (playerHP >= 0 && dragonHP <= 0) {
    alert("Your sword sinks into the dragon's chest as it gasps for air!");
    alert("The princess cheers as the dragon slumps to the floor.");
    alert("You've killed the dragon!");
    score += 200;
    winGame();
  } else {
    combatLoop();
  }
}

var winGame = function () {
  alert(`Congratulations ${playerName}! You successfully rescued the princess!`); // winText
  endGame();
}

var loseGame = function () {
  alert(`You failed to rescue the princess ${playerName}. Better luck next time!`); // loseText
  endGame();
}

var endGame = function() {
  alert(`You scored ${score} points.`);

  var choice = confirm("Play again?");

  if (choice) {
    alert("Ok. Restarting game...");
    startGame();
  } else if (!choice) {
    alert("Ok. Thanks for playing!");
  }
}

startGame();
