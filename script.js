// Global state variables
var name = "";
var currentRoom = "entryWay";

// Dungeon object

/* room prototype
  room_x_y: {
    blurb: "",
    choices: {
      1: "",
      2: ""
    },
    goTo: {
      1: "",
      2: ""
    }
  },
*/

var dungeon = {
  entryWay: {
    blurb: "You are in a small and slightly depressing room.",
    choices: {
      1: "Take the left door.",
      2: "Take the right door."
    },
    goTo: {
      1: "room_1_1",
      2: "room_1_2"
    }
  },
  room_1_1: {
    blurb: "This is no less bad.",
    choices: {
      1: "Pick the sword.",
      2: "Pick the wand."
    },
    goTo: {
      1: "room_2_1",
      2: "room_2_2"
    }
  },
    room_1_2: {
    blurb: "Say, this is pretty nice!",
    choices: {
      1: "Arm wrestle.",
      2: "Order a drink."
    },
    goTo: {
      1: "",
      2: ""
    }
  }
};

// Level 0: so it begins
var choicePrompt = buildPrompt(dungeon[currentRoom]);
document.querySelector("#output").innerText =
  "Welcome to the dungeon.\n\n" + choicePrompt;


var inputHappened = function(choice) {
  clearInput();
  console.log("moving from: " + currentRoom);
  currentRoom = dungeon[currentRoom].goTo[choice];
  console.log("moving to: " + currentRoom);
  choicePrompt = buildPrompt(dungeon[currentRoom]);
  return choicePrompt;
}

var clearInput = function () {
  document.querySelector("#input").value = "";
}

function whatNext () {
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

function getBlurb (roomObj) {
  return roomObj.blurb;
}

function getChoices (roomObj) {
  var choiceObj = roomObj.choices;
  var choices = [];

  for (var num in choiceObj) {
    choices.push(`${num}: ${choiceObj[num]}`);
  }
  return choices;
}

function buildPrompt (room) {
  outStr = getBlurb(room) + "\n\n" +
    whatNext() + "\n\n" +
    getChoices(room).join("\n");
  return outStr;
}
