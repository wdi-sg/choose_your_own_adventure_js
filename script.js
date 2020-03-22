// Global state variables
//var previousRoom = ""
var currRoomId = "room0";
var roomTrail = [];
var roomSeen = {
  room0: true
};

var dungeon = {
  room0: {
    dispName: "entrance",
    blurb: "It's a small and slightly depressing room, full " +
      "of the hopes of adventurers past. And not much else.",
    choices: {
      1: {
        str: "Take the left door",
        dest: "room_1_1",
        score: 1
      },
      2: {
        str: "Take the right door",
        dest: "room_1_2",
        score: 1
      }
    }
  },
  room_1_1: {
    dispName: "armoury",
    blurb: "" +
      "",
    choices: {
      1: {
        str: "The cell",
        dest: "room_2_1",
        score: 1
      }
    }
  },
  room_1_2: {
    dispName: "tavern",
    blurb: "" +
      "",
    choices: {
    }
  },
  room_2_1: {
    dispName: "cell",
    blurb: "" +
      "",
    choices: {
    }
  },

};

// helper functions
var buildPrompt = function (newRoom) {
  var choiceArr = getChoices(newRoom);

  outStr =
    `You're in the ${newRoom.dispName}.\n` +
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
      choiceStr += ` (the ${dungeon[choiceObj[num].dest].dispName})`;
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
var choicePrompt = buildPrompt(dungeon[currRoomId]);
document.querySelector("#output").innerText =
  "Welcome to the dungeon.\n\n" + choicePrompt;

var inputHappened = function(choice) {
  clearInput();

  if (choice.toLowerCase() === "b") {
    currRoomId = roomTrail.pop();
  } else {
    roomTrail.push(currRoomId);
    currRoomId = dungeon[currRoomId].choices[choice].dest;
    roomSeen[currRoomId] = true;
  }

  choicePrompt = buildPrompt(dungeon[currRoomId]);

  console.log('visited: ' + roomSeen);
  console.log('trail: ' + roomTrail);
  return choicePrompt;
}
