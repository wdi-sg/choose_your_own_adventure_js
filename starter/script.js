/**
 * This program creates a text-based game that allows the user to arrive at
 * different destinations based on the inputs they type.
 * @author Liang Xin, Chloe
 */

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

var randomBranches;
var player = party[0];
var choice;

/**
 * Generates random branches every time the game starts.
 * Gets player name, weapon and goes to three branches.
 */
var start = function () {
  randomBranches = getRandomBranches([
    chooseLodgeOrContinue,
    chooseCaveOrContinue,
    chooseDungeonOrContinue
  ]);

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

/**
 * Returns a string that lists all the weapons.
 * @param {Object[]} weapons An array of all the weapons.
 * @return {string} A string that lists the status of each weapon.
 */
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

/**
 * Returns the player's name.
 * @return {string} The player's name.
 */
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

// Gets a weapon number from user and sets player's weapon.
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

/**
 * Choose one of the three branches.
 * Left, middle and right goes to a random branch every time the game starts.
 */
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
      chooseContinueOrGoBack(randomBranches[0]);
    }
  } else if (choice === 'middle') {
    alert('You choose the middle path and keep going forward.');
    battleStart();

    if (player.hp > 0) {
      chooseContinueOrGoBack(randomBranches[1]);
    }
  } else if (choice === 'right') {
    alert('You choose the right path and keep going forward.');
    battleStart();

    if (player.hp > 0) {
      chooseContinueOrGoBack(randomBranches[2]);
    }
  }
};

/**
 * Returns an array that contains three random starting point functions.
 * @param {function[]} branches Three functions that are the starting point of each branch.
 * @return {function[]} An array that contains three starting points in random order.
 */
var getRandomBranches = function (branches) {
  var branches = branches.slice();
  var randomBranches = [];

  while (branches.length) {
    var random = Math.floor(Math.random() * branches.length);
    randomBranches.push(branches[random]);
    branches.splice(random, 1);
  }

  return randomBranches;
};

/**
 * Continues the road or goes back to where you need to choose among three roads.
 * @param {function} road The starting point of one of the three branches.
 */
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

/**
 * Branch 1: Lodge
 * This branch goes to ending 0, 1, 2, 3, and 4.
 */

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

/**
 * Branch 2: Cave
 * This branch goes to ending 1, 2, and 5.
 */

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

/**
 * Branch 3: Dungeon
 * This branch goes to ending 1, 2, and 6.
 */

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

/**
 * Some choices lead to this sub-branch.
 * This goes to ending 1 and 2.
 */
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

/**
 * Displays the ending and player's score.
 * @param {number} index The index number of an ending.
 */
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

/**
 * Starts a turn-based battle.
 * Displays battle information and battle result.
 * If the player's hp is 0, displays Game Over.
 */
var battleStart = function () {
  var enemiesAppeared = getEnemies();
  var enemyNames = [];

  enemiesAppeared.forEach(function (enemy) {
    enemyNames.push(enemy.name);
  });

  alert(
    '#### BATTLE ####\n\n' +
    'You encountered: ' + enemyNames.join(', ')
  );
  battleLoop(party, enemiesAppeared);
  showBattleResult();

  if (player.hp <= 0) {
    goToEnding(7);
  }
};

/**
 * Returns an array of a maximum number of 2 enemies.
 * @return {Object[]} An array of enemies that appears in a battle.
 */
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

/**
 * Displays a turn-based battle loop.
 * @param {Object[]} party An array of players.
 * @param {Object[]} enemies An array of enemies.
 */
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

  alert(battleInfo.join("\n"));
};

// Shows battle result based on player's hp.
var showBattleResult = function () {
  if (player.hp > 0) {
    alert(
      '#### BATTLE RESULT ####\n\n' +
      'You won!'
    );
  } else {
    alert(
      '#### BATTLE RESULT ####\n\n' +
      'You lost!'
    );
  }
}

/**
 * Returns a random damage based on the attacker's attack property.
 * @param {number} attack The attack property of the attacker.
 * @return {number} A random generated damage value.
 */
var getDamage = function (attack) {
  var deviation = 2 * Math.floor(attack / 3) + 1;
  var randomDeviation = Math.floor(Math.random() * deviation);
  var randomAttack = attack + deviation - randomDeviation;
  return randomAttack;
};

/**
 * Returns a string that shows each attacker's action.
 * @param {Object[]} attackers An array of attackers.
 * @param {Object[]} defenders An array of defenders.
 * @return {string} If attack succeeded, returns 'xx dealt xx damage to xx'.
 *                  Otherwise, returns 'xx missed the attack'.
 */
var dealDamage = function (attackers, defenders) {
  var battleInfo = [];

  attackers.forEach(function (attacker) {
    if (Math.random() <= attacker.weapon.hit) {
      defenders.forEach(function (defender) {
        var damage = getDamage(attacker.weapon.attack);

        if (defender.hp > 0) {
          battleInfo.push(attacker.name + ' dealt ' + damage + ' damage to ' + defender.name);
        }

        defender.hp -= damage;
        defender.hp = defender.hp < 0 ? 0 : defender.hp;
      });
    } else {
      battleInfo.push(attacker.name + ' missed the attack');
    }
  });

  return battleInfo.join('\n');
};

/**
 * Returns whether at least one member (enemy or player) is alive.
 * @param {Object[]} members An array of enemies or party members
 * @return {boolean} If true, the battle will continue until no one survives on either side.
 *                   If false, the battle will end.
 */
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

/**
 * Returns the name and health of each member.
 * @param {Object[]} members An array of enemies or players.
 * @return {string} A string indicates the name and health separated by comma.
 */
var displayHealth = function (members) {
  var message = [];

  members.forEach(function (member) {
    message.push(member.name + '\'s health: ' + member.hp);
  });

  return message.join(', ');
};

start();
