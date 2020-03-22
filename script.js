// Global variables
var pName = "";

// Global state variables
var currRoomId = "room0";
var roomTrail = [];
var roomSeen = {
  room0: true
};

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
  if (choice.toLowerCase() === "b" && !dungeon[currRoomId].isEnd) {
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

// helper functions
var buildPrompt = function (roomObj) {
  var choiceArr = getChoices(roomObj);
  var outStr;

  if (roomObj.isEnd) {
    outStr = `You're in ${roomObj.dispName}.\n\n` +
      `${getBlurb(roomObj)}\n\n` +
      `Your score is: ${countScore(roomTrail, roomObj)}\n\n` +
      `Refresh to start over.`;
  } else {
    outStr =
      `You're in ${roomObj.dispName}.\n\n` +
      getBlurb(roomObj) + "\n\n" +
      whatNext() + "\n\n" +
      `${choiceArr.join("\n")}`;
  }

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
      choiceStr += ` (to ${dungeon[choiceObj[num].dest].dispName})`;
    }
    choices.push(choiceStr);
  }

  if (roomTrail.length !== 0 && !roomObj.isEnd) {
    var prev = roomTrail[roomTrail.length - 1];
    choices.push(`B: Go back to the ${dungeon[prev].dispName}`)
  }

  return choices;
}

var countScore = function (trail, roomObj) {
  var score = 0;
  console.log(trail);
  console.log(roomObj);

  for (var i = 1; i < trail.length; i++) {
    score += dungeon[trail[i]].score;
  }
  score += roomObj.score;

  return score;
}
