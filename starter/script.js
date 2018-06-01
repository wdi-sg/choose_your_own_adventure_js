//complete rewrite to simpler mechanic

//game stats
var lootScore = 0;
var userHp = 7;
var userHpCheck = [];
var monsterHp = Math.floor(Math.random() * 5);

//store username in global var, only asks for your name once
var getUsername = prompt("What is your name?");

var currentFloor = 1;
//total score
//th stands for treasure hunt
function th() {
  if (currentFloor >= 7) {
    win();
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
  loot();
  console.log("lootscore: " + lootScore);
  th();
  //made a mistake here, instead of checking for currentFloor, used pickDoor so it just keeps going to 7 floors and beyond
}

function eject() {
  var countTotal = lootScore + currentFloor;
  var answer = prompt("Lady luck does not shine on " + getUsername + ", your highest floor was: " + currentFloor + "\n" + "Your total score is: " + countTotal + "\n" + "Try again?");
  if (answer == "yes") {
    resetGame();
    th();
  } else {
    alert("Thanks for playing! " + getUsername );
  }
}

function win() {
  var countTotal = lootScore + currentFloor;
  var answer = prompt("Congratulations " + getUsername + " you've reached floor " + currentFloor + "\n" + "Your total points is: " + countTotal + "\n" + "Feeling Lucky?");
  if (answer == "yes") {
    resetGame();
    th();
  } else {
    alert("Thanks for playing! " + getUsername );
  }
}

function loot(){
  lootVal = Math.floor(Math.random() * 20);
  if (lootVal >= 15){
    lootScore = lootScore + 10;
  }else if(lootVal >= 10 && lootVal <= 14){
    lootScore = lootScore + 5;
  }else {
    lootScore = lootScore + 1;
  }
}

function resetGame(){
  lootScore = 0;
  currentFloor = 1;
  userHp = 7;
}
th();
