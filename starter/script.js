//complete rewrite to simpler mechanic

//game stats
var rareItems = [];
var userHp = 7;
var userHpCheck = [];
var rareItemsScore = 0;
var totalScore = rareItemsScore + rareItems.length;

var monsterHp = Math.floor(Math.random() * 5);

//store username in global var, only asks for your name once
var getUsername = prompt("What is your name?");

var currentFloor = 1;

//th stands for treasure hunt
function th() {
  if (currentFloor >= 7) {
    console.log('you win')
  } else {
    pickDoor();
  }
}


function pickDoor() {
  console.log("you are on floor " + currentFloor)
  var doorVal = prompt(getUsername + " is currently on floor " + currentFloor + "\n" + "Pick a door: 1 2 3");
  doorTest = doorVal;
  doorVal = Math.floor(Math.random() * doorVal);
  if ((doorVal == 1 || doorVal == 2) && doorTest < 4) {
    goToNextFloor();
  } else if (doorTest > 3) {
    alert("INVALID DOOR, YOU DROWN.")
    eject();
  } else {
    eject();
  }
}

function goToNextFloor() {
  console.log("Proceed to the next floor");
  currentFloor = currentFloor + 1;
  th();
  //made a mistake here, instead of checking for currentFloor, used pickDoor so it just keeps going to 7 floors and beyond
}

function eject() {
  var answer = prompt("Lady luck does not shine on " + getUsername + ", your highest floor was " + currentFloor + "\n" + "Your total score is: " + totalScore);
  if (answer == "yes") {
    currentFloor = 1;
    th();
  } else {
    alert("Thanks for playing! " + getUsername );
  }
}

th();
