var name = "";
var level = 0;
var currentChoice = 0;

// Level 0: no biggie
document.querySelector("#output").innerText = "Welcome to the dungeon.\n\n" +
  "You are in a small and slightly depressing room. What would you like to do? \n\n" +
  "(1) \n" +
  "(2) \n" +
  "(3) ";

var inputHappened = function(choice){
  var prompt;
  console.log(`choice at level ${level}: ${choice}`);
  clearInput();
  currentChoice = Number(choice);

  switch (level) {
  case 0:
    prompt = enterDungeon(choice);
    console.log(output);
    break;
  case 1:
    return levelOne(choice);
    break;
  case 2:
    return levelTwo(choice);
    break;
  case 3:
    return levelThree(choice);
    break;
  default:
    return `You should go no further.`;
  }
  return prompt;
}

var clearInput = function () {
  document.querySelector("#input").value = "";
}

function enterDungeon (choice) {
  level++;
  var nextPrompt = "level1";

  return `You've left the relative safety of the entrance and entered level ${level}.\n` +
    `${nextPrompt}`;
}

function levelOne (choice) {
  level++;
  var nextPrompt = "level2";

  return `You're one level deeper. \n` +
    `${nextPrompt}`;
}

function levelTwo (choice) {
  level++;
  return level;
}

function levelThree (choice) {
  level++;
  return level;
}
