var party = [
  {
    name: 'unknown',
    score: 0,
    hp: 100,
    weapon: null
  }
];

var weapons = [
  {
    name: 'Bow',
    attack: 5,
    hit: 0.95
  },
  {
    name: 'Spear',
    attack: 10,
    hit: 0.9
  },
  {
    name: 'Blade',
    attack: 15,
    hit: 0.85
  }
];

var enemies = [
  {
    name: 'Ice Bomb',
    hp: 20,
    weapon: {
      attack: 15,
      hit: 0.5
    }
  },
  {
    name: 'Imp',
    hp: 15,
    weapon: {
      attack: 10,
      hit: 0.5
    }
  },
  {
    name: 'Flan',
    hp: 10,
    weapon: {
      attack: 5,
      hit: 0.5
    }
  },
  {
    name: 'Tonberry',
    hp: 25,
    weapon: {
      attack: 999,
      hit: 0.2
    }
  }
];

var player = party[0];
var choice;

var start = function () {
  alert(
    'You are to find the Magical Crystal. With it, you will ' +
    'fight the evil dragon and save the world from darkness.'
  );

  player.name = getPlayerName();
  alert('Hi, ' + player.name);
  chooseWeapon();

  if (choice) {
    alert('You step into a dark forest.');
    chooseOneRoad();
  }
};

var getWeapons = function (weapons) {
  var message = [];

  weapons.forEach(function (weapon, index) {
    message.push(
      '[' + (index + 1) + '] ' + weapon.name +
      ', attack: ' + weapon.attack +
      ', hit: ' + weapon.hit);
  });

  return message.join('\n');
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

var chooseWeapon = function () {
  var weaponIndex;
  var validInputs = [];
  var i;
  var weaponNumber;

  for (i = 0; i < weapons.length; i++) {
    weaponNumber = i + 1;
    validInputs.push(weaponNumber.toString());
  }

  while (true) {
    choice = prompt('Please choose a weapon:\n' + getWeapons(weapons));

    if (!choice || validInputs.indexOf(choice) !== -1) {
      break;
    }
  }

  if (choice) {
    weaponIndex = parseInt(choice) - 1;
    player.weapon = weapons[weaponIndex];
    alert('You choose ' + weapons[weaponIndex].name + '.');
  }

}

var chooseOneRoad = function () {
  while (true) {
    choice = prompt(
      'There are 3 roads in front of you. ' +
      'Which one would you like to choose, LEFT, MIDDLE or RIGHT?\n\n' +
      '(left/middle/right)'
    );

    if (!choice || choice === 'left' || choice === 'middle' || choice === 'right') {
      break;
    }
  }

  if (choice) {
    choice = choice.toLowerCase();
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

    if (!choice || choice === 'y' || choice === 'n') {
      break;
    }
  }

  if (choice) {
    choice = choice.toLowerCase();
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
  battleLoop(party, enemiesAppeared);

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

var battleLoop = function (party, enemies) {
  var battleInfo = [];
  var turn = 0;

  while (isAlive(enemies) && isAlive(party)) {
    if (turn % 2 === 0) {
      battleInfo.push(dealDamage(enemies, party));
    } else {
      battleInfo.push(dealDamage(party, enemies));
    }

    battleInfo.push(
      'Your health: ' + player.hp + ', ' +
      displayHealth(enemies)
    );

    turn++;
  }

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

var dealDamage = function (attackers, defenders) {
  var battleInfo = [];

  attackers.forEach(function (attacker) {
    var damage = getDamage(attacker.weapon.attack);

    if (Math.random() <= attacker.weapon.hit) {
      defenders.forEach(function (defender) {
        defender.hp -= damage;
        defender.hp = defender.hp < 0 ? 0 : defender.hp;
        battleInfo.push(attacker.name + ' dealt ' + damage + ' damage to ' + defender.name);
      });
    } else {
      battleInfo.push(attacker.name + ' missed the attack');
    }
  });

  return battleInfo.join('\n');
};

var isAlive = function (members) {
  var i;

  /**
   * In this case, a forEach() loop with return gives wrong result.
   * There's no way to stop or break a forEach() loop other than throwing an exception.
   */
  for (i = 0; i < members.length; i++) {
    if (members[i].hp > 0) {
      return true;
    }
  }

  return false;
};

var displayHealth = function (members) {
  var message = [];

  members.forEach(function (member) {
    message.push(member.name + '\'s health: ' + member.hp);
  });

  return message.join(', ');
};

start();
