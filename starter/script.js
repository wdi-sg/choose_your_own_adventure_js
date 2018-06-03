// put code here!

// ===========================================================================================================================
// ===========================================================================================================================
// external game functions
// ===========================================================================================================================
// ===========================================================================================================================

function shuffleArray(inputArray) {
  var newArray = [];
  // empty holder array

  var placeHolderArray = inputArray.slice(0);
  // placeholder array to hold input array values to prevent altering original array

  var firstElementIndex = Math.floor(Math.random() * placeHolderArray.length);
  newArray.push(placeHolderArray[firstElementIndex]);
  // get a random index for first element
  // and push it into holder array

  placeHolderArray.splice(firstElementIndex, 1);
  // remove pushed element to prevent duplicates

  var secondElementIndex = Math.floor(Math.random() * placeHolderArray.length);
  newArray.push(placeHolderArray[secondElementIndex]);
  // get a 2nd random index for second element
  // and push it into holder array

  return newArray;
};

function randomNumberGenerator() {
  // generates a random number between 1 to 10
  var num = Math.ceil(Math.random() * 10);
  return num;
};

function getUserName() {
  alert("Hello! What is your name?");
  var userName = prompt("Enter your name");
  return userName;
};

function randomDamageMulitplier(userDamageAmount) {
  // get a random number between 1.0 to 5.0
  var multiplier = ((Math.random() * 4) + 1).toFixed(1);

  // return amount of damage user dealt
  return userDamageAmount * multiplier;
};

function enemyHitOrMiss() {
  // get either 0 or 1
  var zeroOrOne = Math.round(Math.random());

  if (zeroOrOne == 1) {
    return true;
  }
  else {
    return false;
  }
}

function combat(userHealth, enemyHealth, userAttack, enemyAttack, enemyName) {
  var whoseTurn = 1;
  // to track whose turn is it
  // user always gets to go first

  // while loop will keep running as long as both
  // user health and enemy health is above 0
  while(userHealth > 0 && enemyHealth > 0) {
    alert("Your health: " + userHealth + ". " + enemyName + " Health: " + enemyHealth);

    // user goes first
    if (whoseTurn%2 === 1) {
      var userHit = randomDamageMulitplier(userAttack);
      alert("You hit the " + enemyName + " for: " + userHit);

      enemyHealth -= userHit;
      alert("The " + enemyName + " has " + enemyHealth + " HP left.");

    } else {
      var hitOrMiss = enemyHitOrMiss();
      // check if the enemy hits the user or not
      // hit or miss evaluates to true or false

      if (hitOrMiss) {
        alert("The " + enemyName + " hit you for: " + enemyAttack);

        userHealth -= enemyAttack;
        alert("You have " + userHealth + " HP left.");

      } else {
        alert("You successfully dodged the " + enemyName + "'s attack");
      };

    };

    whoseTurn += 1;
  };

  if (userHealth > 0) {
    alert("You successfully defeated the " + enemyName + ", and found the princess at the top of the castle, successfully saving her!");
  } else {
    alert("You have been defeated by the " + enemyName + "... Goodbye");
  };
};

function fightOgre() {
  var userHealth = 100;
  var ogreHealth = 100;
  var userAttack = 10;
  var ogreAttack = 50;
  var enemy = "Ogre"

  combat(userHealth, ogreHealth, userAttack, ogreAttack, enemy);
};

function fightBear() {
  var userHealth = 100;
  var bearHealth = 50;
  var userAttack = 10;
  var bearAttack = 100;
  var enemy = "Bear"

  combat(userHealth, bearHealth, userAttack, bearAttack, enemy);
};

function fightMagician() {
  var userHealth = 100;
  var magicianHealth = 200;
  var userAttack = 10;
  var magicianAttack = 20;
  var enemy = "Magician"

  combat(userHealth, magicianHealth, userAttack, magicianAttack, enemy);
};

// ===========================================================================================================================
// ===========================================================================================================================
// room logic
// ===========================================================================================================================
// ===========================================================================================================================

function roomOne(userInputName) {
  alert("Hi " + userInputName + ". Welcome to Angkiki's Castle. Goodluck Trying to Save the Princess.");
  alert("You enter the castle... and are presented with the following choices.");

  var userChoices = [
    "Take the stairs",
    "Go down the hallway",
    "Enter the room on your left"
  ];

  var givenChoices = shuffleArray(userChoices);
  var selectedChoice = prompt("Do you choose to: " + givenChoices[0] + ". Or: " + givenChoices[1] + ". (0/1)");

  switch(selectedChoice) {
    case "0":
      var roomToGo = (userChoices.indexOf(givenChoices[0]) + 2);
      return roomToGo;
    case "1":
      var roomToGo = (userChoices.indexOf(givenChoices[1]) + 2);
      return roomToGo;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomTwo() {
  alert("You encounter a giant guarding the end of the stairs... do you...");

  var userChoices = [
    "Punch his face",
    "Kick his knee",
    "Try to run past him"
  ];

  var givenChoices = shuffleArray(userChoices);
  var selectedChoice = prompt("Do you choose to: " + givenChoices[0] + ". Or: " + givenChoices[1] + ". (0/1 - Enter 'B' to go back to the entrance)");

  switch(selectedChoice) {
    case "0":
      var roomToGo = userChoices.indexOf(givenChoices[0]) + 5;
      return roomToGo;
    case "1":
      var roomToGo = userChoices.indexOf(givenChoices[1]) + 5;
      return roomToGo;
    case "B":
      alert("You head back to the entrance");
      return 1;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomThree() {
  alert("You reach a huge gap in the floor... do you...");

  var userChoices = [
    "Jump across the gap",
    "Jump into the hole",
    "Enter the room on your left"
  ];

  var givenChoices = shuffleArray(userChoices);
  var selectedChoice = prompt("Do you choose to: " + givenChoices[0] + ". Or: " + givenChoices[1] + ". (0/1 - Enter 'B' to go back to the entrance)");

  switch(selectedChoice) {
    case "0":
      var roomToGo = userChoices.indexOf(givenChoices[0]) + 8;
      return roomToGo;
    case "1":
      var roomToGo = userChoices.indexOf(givenChoices[1]) + 8;
      return roomToGo;
    case "B":
      alert("You head back to the entrance");
      return 1;
    default:
      alert("You have entered an invalid value");
      return false;
  };
}

function roomFour() {
  alert("You see an old man sitting at the corner of the room... and he asks why are you here... do you...");

  var userChoices = [
    "Lie to him",
    "Tell him you're saving the princess",
    "Change the subject"
  ];

  var givenChoices = shuffleArray(userChoices);
  var selectedChoice = prompt("Do you choose to: " + givenChoices[0] + ". Or: " + givenChoices[1] + ". (0/1 - Enter 'B' to go back to the entrance)");

  switch(selectedChoice) {
    case "0":
      var roomToGo = userChoices.indexOf(givenChoices[0]) + 11;
      return roomToGo;
    case "1":
      var roomToGo = userChoices.indexOf(givenChoices[1]) + 11;
      return roomToGo;
    case "B":
      alert("You head back to the entrance");
      return 1;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomFive() {
  alert("The giant stops your punch, and crushes your arm... do you...")

  var userChoices = prompt("Do you choose to: Plead him to spare your life. Or: Attempt to strike him while he threatens you. (0/1)");

  switch(userChoices) {
    case "0":
      alert("He decides to let you go, you scramble out of the castle... as quickly as you can... never hearing of the princess again.");
      break;
    case "1":
      alert("He anticipates your move, and absolutely destroys you.... Goodbye...");
      break;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomSix() {
  alert("The giant is taken aback by the kick to the knee... do you...")

  var userChoices = prompt("Do you choose to: Slip past him. Or: Attempt to finish him off. (0/1)");

  switch(userChoices) {
    case "0":
      alert("You rush down the hallway, entering the only door you see, where you found the princess awaiting you!");
      break;
    case "1":
      alert("He anticipates your move, and absolutely destroys you.... Goodbye...");
      break;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomSeven() {
  alert("The giant is too quick and grabs you... do you...");

  var userChoices = prompt("Do you choose to: Slip past him. Or: Attempt to finish him off. (0/1)");

  switch(userChoices) {
    case "0":
      alert("You rush down the hallway, entering the only door you see, where you found the princess awaiting you!");
      break;
    case "1":
      alert("He anticipates your move, and absolutely destroys you.... Goodbye...");
      break;
    default:
      alert("You have entered an invalid value");
      return false;
  };
}

function roomEight() {
  alert("You reach the other side safely, only to find an ogre waiting for you... do you...");

  var userChoices = prompt("Do you choose to: Fight him. Or: Run away. (0/1)");

  switch(userChoices) {
    case "0":
      fightOgre();
      break;
    case "1":
      alert("You're too slow for the ogre... as he completely obliterates you... Goodbye");
      break;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomNine() {
  alert("You land in a pit with a bear... do you...");

  var userChoices = prompt("Do you choose to: Fight the bear. Or: Attempt to get out of the pit. (0/1)");

  switch(userChoices) {
    case "0":
      fightBear();
      break;
    case "1":
      alert("The upper floor is too far for you... and as you attempt the jump, the bear mauls you to death... Goodbye");
      break;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomTen() {
  alert("You meet the master magician in the room... do you...");

  var userChoices = prompt("Do you choose to: Fight the magician. Or: Attempt to talk your way out of it (0/1)");

  switch(userChoices) {
    case "0":
      fightMagician();
      break;
    case "1":
      alert("The magician hates a build up to a fight, and instead hurls a flaming fireball at you immediately... Goodbye");
      break;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomEleven() {
  alert("The old man chuckles at your lies... and says that he knows you're here to save the princess... do you...");

  var userChoices = prompt("Do you choose to: Acknowledge. Or: Lie again. (0/1)");

  switch(userChoices) {
    case "0":
      alert("He appreciates your honesty and directs you to the princess, where you successfully saved her!");
      break;
    case "1":
      alert("He calls the guards on you. And your fate was sealed from that moment. Goodbye.");
      break;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

function roomTwelve() {
  alert("The old man asks you for a number between 1 to 10... and if you guess the number correctly, he will help you save the princess.");
  var userChoices = prompt("What number do you give?");
  userChoices = parseInt(userChoices);

  if (userChoices >= 1 && userChoices <= 10) {
    var oldManNumber = randomNumberGenerator();

    if (userChoices == oldManNumber) {
      alert("You successfully guessed his number! Honouring his promise, he directs you to the princess, where you successfully saved her!");
    } else {
      alert("He calls the guards on you. And your fate was sealed from that moment. Goodbye.");
    }
  } else {
    alert("You have entered an invalid value");
    return false;
  };
};

function roomThirteen() {
  alert("He gets annoyed, and decides to ask you again, do you...");

  var userChoices = prompt("Do you choose to: Be Honest. Or: Try to leave. (0/1)");

  switch(userChoices) {
    case "0":
      alert("He appreciates your honesty and directs you to the princess, where you successfully saved her!");
      break;
    case "1":
      alert("He calls the guards on you. And your fate was sealed from that moment. Goodbye.");
      break;
    default:
      alert("You have entered an invalid value");
      return false;
  };
};

// ===========================================================================================================================
// ===========================================================================================================================
// game logic
// ===========================================================================================================================
// ===========================================================================================================================

function beginGame(userInputName) {

  var userRoomOne = roomOne(userInputName);

  if (userRoomOne) {
    switch(userRoomOne) {

      case 2:
        // user is in room 2
        var userRoomTwo = roomTwo();

        switch(userRoomTwo) {
          case 5:
            roomFive();
            break;
          case 6:
            roomSix();
            break;
          case 7:
            roomSeven();
            break;
          case 1:
            // user wants to go back to room one
            beginGame(userInputName);
            return;
        };

        break;

      case 3:
        // user is in room 3
        var userRoomThree = roomThree();

        switch(userRoomThree) {
          case 8:
            roomEight();
            break;
          case 9:
            roomNine();
            break;
          case 10:
            roomTen();
            break;
          case 1:
            // user wants to go back to room one
            beginGame(userInputName);
            return;
        };

        break;

      case 4:
        // user is in room 4
        var userRoomFour = roomFour();

        switch(userRoomFour) {
          case 11:
            roomEleven();
            break;
          case 12:
            roomTwelve();
            break;
          case 13:
            roomThirteen();
            break;
          case 1:
            // user wants to go back to room one
            beginGame(userInputName);
            return;
        };

        break;

      default:
        // user entered an invalid value
        beginGame(userInputName);
        return;
    };

  } else {
      beginGame(userInputName);
      return;
  };

  var playAgain = prompt("Play again? (Y/N)");
  if (playAgain == "Y") {
      beginGame(userInputName);
  };
};

$(document).ready(function() {
  beginGame(getUserName());
});
