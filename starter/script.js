var player = {
  name: 'unknown',
  score: 0,
  hp: 100,
  attack: 10,
  hit: 0.95
};

var enemies = [
  {
    name: 'Ice Bomb',
    hp: 20,
    attack: 15,
    hit: 0.5
  },
  {
    name: 'Imp',
    hp: 15,
    attack: 10,
    hit: 0.5
  },
  {
    name: 'Flan',
    hp: 10,
    attack: 5,
    hit: 0.5
  },
  {
    name: 'Tonberry',
    hp: 25,
    attack: 999,
    hit: 0.2
  },
];

var choice;

var start = function () {
  alert(
    'You are to find the Magical Crystal. With it, you will ' +
    'fight the evil dragon and save the world from darkness.'
  );

  player.name = getPlayerName();

  alert('Hi, ' + player.name);
  alert('You step into a dark forest.');

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
      'There are 3 roads in front of you. ' +
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
    battleStart();

    if (player.hp > 0) {
      chooseContinueOrGoBack(chooseLodgeOrContinue);
    }
  } else if (choice === 'middle') {
    alert('You choose the middle path and keep going forward.');
    battleStart();

    if (player.hp > 0) {
      chooseContinueOrGoBack(chooseCaveOrContinue);
    }
  } else if (choice === 'right') {
    alert('You choose the right path and keep going forward.');
    battleStart();

    if (player.hp > 0) {
      chooseContinueOrGoBack(chooseDungeonOrContinue);
    }
  }
};

var chooseContinueOrGoBack = function (road) {
  while (true) {
    choice = prompt(
      'Would you like to continue or go back?\n\n' +
      '[1] Continue\n' +
      '[2] Go back'
    );

    if (!choice || choice === '1' || choice === '2') {
      break;
    }
  }

  if (choice === '1') {
    alert('You continue walking.');
    road();
  } else if (choice === '2') {
    alert('You go back to the entrance.');
    chooseOneRoad();
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
    player.score += 2;
    alert('You go insside the lodge.');
    chooseTakeOrLeaveBottle();
  } else if (choice === '2') {
    player.score += 1;
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
    player.score += 1;
    alert('You take the bottle and leave the lodge.');
    chooseDrinkOrLeaveAntidote();
  } else if (choice === '2') {
    player.score += 1;
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
    player.score += 2;
    alert('You drink the liquid.');
    goToEnding(3);
  } else if (choice === '2') {
    player.score += 1;
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
    player.score += 5;
    alert('You go inside the cave.');
    chooseSecretPathOrContinue();
  } else if (choice === '2') {
    player.score += 1;
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
    player.score += 5;
    alert('You go where the path may lead.');
    goToEnding(5);
  } else if (choice === '2') {
    player.score += 2;
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
    player.score += 5;
    chooseStoneOrLeave();
  } else if (choice === '2') {
    player.score += 1;
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
    player.score += 5;
    goToEnding(6);
  } else if (choice === 'n') {
    player.score += 1;
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
    player.score += 2;
    goToEnding(1);
  } else if (choice === '2') {
    player.score += 1;
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
    'Your power comes back. You became the final boss in this game!',

    // 7
    'Game Over'
  ];

  alert(endings[index]);
  alert('Your score: ' + player.score + '/10');
}

// Battle
var battleStart = function () {
  var enemiesAppeared = getEnemies();
  var enemyNames = [];
  enemiesAppeared.forEach(function (enemy) {
    enemyNames.push(enemy.name);
  });

  alert(
    '#### BATTLE ####\n' +
    'You encountered: ' + enemyNames.join(', ')
  );
  battleLoop(player, enemiesAppeared);

  if (player.hp <= 0) {
    goToEnding(7);
  }
};

var getEnemies = function () {
  var enemiesAppeared = [];
  var randomAmount = Math.floor(Math.random() * enemies.length / 2) + 1;
  var randomIndex;
  var enemy;
  var i;

  for (i = 0; i < randomAmount; i++) {
    randomIndex = Math.floor(Math.random() * enemies.length);
    enemy = Object.assign({}, enemies[randomIndex]);
    enemiesAppeared.push(enemy);
  }

  return enemiesAppeared;
};

var battleLoop = function (player, enemies) {
  var battleInfo = [];
  var turn = 0;

  enemies.forEach(function (enemy) {
    while (enemy.hp > 0 && player.hp > 0) {
      var enemyAttack = getDamage(enemy.attack);
      var playerAttack = getDamage(player.attack);

      if (turn % 2 === 0) {
        if (Math.random() <= enemy.hit) {
          battleInfo.push(enemy.name + ' dealt ' + enemyAttack + ' damage to you');
          player.hp -= enemyAttack;
          player.hp = player.hp < 0 ? 0 : player.hp;
        } else {
          battleInfo.push(enemy.name + ' missed the attack');
        }
      } else {
        if (Math.random() <= player.hit) {
          battleInfo.push(player.name + ' dealt ' + playerAttack + ' damage to ' + enemy.name);
          enemy.hp -= playerAttack;
          enemy.hp = enemy.hp < 0 ? 0 : enemy.hp;
        } else {
          battleInfo.push(player.name + ' missed the attack');
        }
      }

      battleInfo.push(
        'Your health: ' + player.hp + ', ' +
        enemy.name + '\'s health: ' + enemy.hp
      );

      turn++;
    }
  });

  if (player.hp > 0) {
    battleInfo.push('\nYou won!');
  } else {
    battleInfo.push('\nYou lost!');
  }

  alert(battleInfo.join("\n"));
};

var getDamage = function (attack) {
  var deviation = 2 * Math.floor(attack / 3) + 1;
  var randomDeviation = Math.floor(Math.random() * deviation);
  var randomAttack = attack + deviation - randomDeviation;
  return randomAttack;
};

start();
