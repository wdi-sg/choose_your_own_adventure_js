// Global state variables
//var previousRoom = ""
var currentRoom = "entrance";
var roomTrail = [];

var dungeon = {
  entrance: {
    name: "entrance",
    blurb: "It's a small and slightly depressing room, full" +
      "" +
      "" +
      "",
    choices: {
      1: {
        str: "Take the left door",
        dest: "armoury",
        score: 1
      },
      2: {
        str: "Take the right door",
        dest: "tavern",
        score: 1
      }
    }
  },
  armoury: {
    name: "armoury",
    blurb: "" +
      "" +
      "" +
      "",
    choices: {
      1: {
        str: "",
        dest: "cell",
        score: 1
      }
    }
  },
  tavern: {
    name: "tavern",
    blurb: "" +
      "" +
      "" +
      "",
    choices: {
    }
  },
  cell: {
    name: "cell",
    blurb: "" +
      "" +
      "" +
      "",
    choices: {
    }
  },

};

// helper functions
var buildPrompt = function (newRoom) {

  var choiceArr = getChoices(newRoom);

  outStr =
    `You're in the ${newRoom.name}.\n` +
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
    choices.push(`${num}: ${choiceObj[num].str}`);
  }

  if (roomTrail.length !== 0) {
    console.log("backlink");
    // push backlink opt
    var prev = roomTrail[roomTrail.length - 1];
    choices.push(`B: Go back to the ${dungeon[prev].name}`)
  }

  return choices;
}

// Level 0: so it begins
var choicePrompt = buildPrompt(dungeon[currentRoom]);
document.querySelector("#output").innerText =
  "Welcome to the dungeon.\n\n" + choicePrompt;

var inputHappened = function(choice) {
  clearInput();

  if (choice.toLowerCase() === "b") {
    currentRoom = roomTrail.pop();
  } else {
    roomTrail.push(currentRoom);
    currentRoom = dungeon[currentRoom].choices[choice].dest;
  }

  choicePrompt = buildPrompt(dungeon[currentRoom]);

  return choicePrompt;
}
