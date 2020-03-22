// Global variables
var pName = "";
var pScore = 0;

// Global state variables
var currRoomId = "room0";
var roomTrail = [];
var roomSeen = {
  room0: true
};

// helper functions
var buildPrompt = function (newRoom) {
  var choiceArr = getChoices(newRoom);

  outStr =
    `You're in the ${newRoom.dispName}.\n\n` +
    getBlurb(newRoom) + "\n\n" +
    whatNext() + "\n\n" +
    `${choiceArr.join("\n")}`;

  return outStr;
}

var clearInput = function () {
  document.querySelector("#input").value = "";
}

var whatNext = function () {
  var whatNow = [
    "What will you do?",
    "What next, brave adventurer?",
    "What choice will you make?",
    "What now?",
    "The choice lays before you now."
  ];
  var i = Math.floor(Math.random() * whatNow.length);

  return whatNow[i];
}

var getBlurb = function (roomObj) {
  return roomObj.blurb;
}

var getChoices = function (roomObj) {
  var choiceObj = roomObj.choices;
  var choices = [];

  for (var num in choiceObj) {
    var choiceStr = `${num}: ${choiceObj[num].str}`;
    if (roomSeen[choiceObj[num].dest] === true) {
      choiceStr += ` (to the ${dungeon[choiceObj[num].dest].dispName})`;
    }
    choices.push(choiceStr);
  }

  if (roomTrail.length !== 0) {
    var prev = roomTrail[roomTrail.length - 1];
    choices.push(`B: Go back to the ${dungeon[prev].dispName}`)
  }

  return choices;
}

// Level 0: so it begins
document.querySelector("#output").innerText =
  "Welcome to the dungeon.\n\n" +
  "Around here, we like to know the names of those who choose to " +
  "stake their lives on the tiny chance of success. What's your name?";

var inputHappened = function(choice) {
  var choicePrompt;

  if (pName === "") {
    clearInput();
    pName = choice;
    choicePrompt = `Welcome to the dungeon, ${pName}.\n\n`+
      buildPrompt(dungeon.room0);
    return choicePrompt;
  }

  clearInput();
  if (choice.toLowerCase() === "b") {
    currRoomId = roomTrail.pop();
  } else {
    roomTrail.push(currRoomId);
    currRoomId = dungeon[currRoomId].choices[choice].dest;
    roomSeen[currRoomId] = true;
  }

  choicePrompt = buildPrompt(dungeon[currRoomId]);

  console.log('visited: ', roomSeen);
  console.log('trail: ' + roomTrail);
  return choicePrompt;
}
