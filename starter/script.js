var player = {
  name: 'unknown'
};
var choice;

var start = function () {
  alert(
    'You are to find the Magical Crystal. With it, you will ' +
    'fight the evil dragon and save the world from darkness.'
  );
  player.name = getPlayerName();
  alert('Hi, ' + player.name);
  chooseOneRoad();
};

var getPlayerName = function () {
  var name;

  while (true) {
    name = prompt('You lost your memory. Give yourself a name:');

    if (name) {
      break;
    }
  }

  return name;
};

var chooseOneRoad = function () {
  while (true) {
    choice = prompt(
      'You step into a dark forest. There are 3 roads in front of you. ' +
      'Which one would you like to choose, LEFT, MIDDLE or RIGHT?\n\n' +
      '(left/middle/right)'
    );
    choice = choice.toLowerCase();

    if (!choice || choice === 'left' || choice === 'middle' || choice === 'right') {
      break;
    }
  }

  if (choice === 'left') {
    alert('You choose the left path and keep going forward.');
    chooseLodgeOrContinue();
  } else if (choice === 'middle') {
    alert('You choose the middle path and keep going forward.');
    chooseCaveOrContinue();
  } else if (choice === 'right') {
    alert('You choose the right path and keep going forward.');
    chooseDungeonOrContinue();
  }
};

// Branch 1: lodge
var chooseLodgeOrContinue = function () {
  while (true) {
    choice = prompt(
      'After a while, you find a lodge.\n\n' +
      '[1] Go inside the lodge\n' +
      '[2] Continue on the road'
    );

    if (!choice || choice === '1' || choice === '2') {
      break;
    }
  }

  if (choice === '1') {
    alert('You go insside the lodge.');
    chooseTakeOrLeaveBottle();
  } else if (choice === '2') {
    alert('You continue on the road.');
    chooseLeaveOrStay();
  }
};

var chooseTakeOrLeaveBottle = function () {
  while (true) {
    choice = prompt(
      'You find a bottle of liquid labeled "Antidote".\n\n' +
      '[1] Take it\n' +
      '[2] Leave it'
    );

    if (!choice || choice === '1' || choice === '2') {
      break;
    }
  }

  if (choice === '1') {
    alert('You take the bottle and leave the lodge.');
    chooseDrinkOrLeaveAntidote();
  } else if (choice === '2') {
    alert('You leave the bottle on the table and continue searching the lodge.');
    goToEnding(0);
  }
};

var chooseDrinkOrLeaveAntidote = function () {
  while (true) {
    choice = prompt(
      'You continue on the road. ' +
      'Suddenly, a snake bites you and escapes. You \n\n' +
      '[1] Drink the liquid you took from the lodge\n' +
      '[2] Do nothing'
    );

    if (!choice || choice === '1' || choice === '2') {
      break;
    }
  }

  if (choice === '1') {
    alert('You drink the liquid.');
    goToEnding(3);
  } else if (choice === '2') {
    alert('You do not care and continue your journey.');
    goToEnding(4);
  }
};

// Branch 2: cave
var chooseCaveOrContinue = function () {
  while (true) {
    choice = prompt(
      'After a while, you spot an entrace to a cave.\n\n' +
      '[1] Go into the cave\n' +
      '[2] Coninue on the road'
    );

    if (!choice || choice === '1' || choice === '2') {
      break;
    }
  }

  if (choice === '1') {
    alert('You go inside the cave.');
    chooseSecretPathOrContinue();
  } else if (choice === '2') {
    alert('You continue on the road.');
    chooseLeaveOrStay();
  }
};

var chooseSecretPathOrContinue = function () {
  while (true) {
    choice = prompt(
      'After a long walk, you find a secret path.\n\n' +
      '[1] Go where the path may lead\n' +
      '[2] Ignore'
    );

    if (!choice || choice === '1' || choice === '2') {
      break;
    }
  }

  if (choice === '1') {
    alert('You go where the path may lead.');
    goToEnding(5);
  } else if (choice === '2') {
    alert('You ignore the secret path.');
    alert('You get out of the cave.');
    chooseLeaveOrStay();
  }
};

// Branch 3: dungeon
var chooseDungeonOrContinue = function () {
  while (true) {
    choice = prompt(
      'After a while, you find a dungeon.\n\n' +
      '[1] Go into the dungeon\n' +
      '[2] Continue on the road'
    );

    if (!choice || choice === '1' || choice === '2') {
      break;
    }
  }

  if (choice === '1') {
    chooseStoneOrLeave();
  } else if (choice === '2') {
    chooseLeaveOrStay();
  }
};

var chooseStoneOrLeave = function () {
  while (true) {
    choice = prompt(
      'You go into the dungeon. After a long walk, you find a mystery stone.\n\n' +
      'Do you want to touch it? (y/n)'
    );
    choice = choice.toLowerCase();

    if (!choice || choice === 'y' || choice === 'n') {
      break;
    }
  }

  if (choice === 'y') {
    goToEnding(6);
  } else if (choice === 'n') {
    alert('You ignore the stone and continue your way.');
    alert('You get out of the dungeon.');
    chooseLeaveOrStay();
  }
};

// Reusable branch
var chooseLeaveOrStay = function () {
  while (true) {
    choice = prompt(
      'You continue walking. After a long time, you find a way out of the forest.\n\n' +
      '[1] Go that way\n' +
      '[2] Turn back'
    );

    if (!choice || choice === '1' || choice === '2') {
      break;
    }
  }

  if (choice === '1') {
    goToEnding(1);
  } else if (choice === '2') {
    goToEnding(2);
  }
};

var goToEnding = function (index) {
  var endings = [
    // 0
    'Suddenly, you feel so much pain in your chest and bleeding occurs from the wound. ' +
    'You look back. Someone is pointing a gun at you. You died.',

    // 1
    'You leave the forest. You did not find the magical crystal. ' +
    'The world is under the control of the evil one.',

    // 2
    'You turn back and continue your journey. But you realise the landscape has changed. ' +
    'You lost in the forest.',

    // 3
    'You feel a great pain in your body. You realise the liquid is not antidote but a magical ' +
    'drug that turns human into monster. You became a monster and lived in the forest forever.',

    // 4
    'Later on, you died due to poison.',

    // 5
    'You walk along the secret path and find the magical crystal. ' +
    'You beat the evil dragon and saved the world.',

    // 6
    'You touch the stone. Your lost memories come back. ' +
    'You are the evil king and the dragon is your pet. ' +
    'Your power comes back. You became the final boss in this game!'
  ];

  alert(endings[index]);
}
start();
