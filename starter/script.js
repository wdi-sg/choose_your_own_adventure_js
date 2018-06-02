//complete rewrite to simpler mechanic

//game stats
var lootScore = 0;
// tested both hp on 5 and 0, the flow is working
var userHp = 5;
//store username in global var, only asks for your name once
var getUsername = prompt("What is your name?");

//assigns default username if no username is present
if(!getUsername){
  getUsername = "Player 1"
};

var currentFloor = 1;
//always start at first floor and ++ if you pick the correct door

//th stands for treasure hunt
//th checks if the floor is 7 if not it will keep running the game
function th() {
  if (currentFloor >= 7) {
    win();
  } else {
    pickDoor();
  }
}

// select door, start of loop, if you didn't pick the correct door it will eject() (see eject())
// moved attackRoll() here, the order is Pick a door > Check Hp first > Check if a monster appears > Battle Monster > if win go to nextfloor / if lose minus hp and gotonextfloor
// at every floor there is a chance for loot (see loot() function)
function pickDoor() {
  console.log("you are on floor " + currentFloor)
  var doorVal = prompt(getUsername + " is currently on floor " + currentFloor + "\n" + getUsername + " has " + userHp + "HP" + "\n" + "Pick a door: 1 2 3");
  doorTest = doorVal;
  doorRoll = Math.floor(Math.random() * 20);
  //previous conditional was rigged that option 1 will always result in fail, changed conditional to check for door first then roll to see if door passes
  if (doorVal > 1 && doorTest < 4) {
    if (doorRoll >= 8 ) {
      attackRoll();
    }else{
      eject();
    }
  } else if(!doorVal || doorTest > 3) {
    alert("Pick a door!")
    invalidDoor();
  }
}
//added function if invalid value or door is picked which results in game reset, player will be alerted to pick a door
function invalidDoor() {
  console.log("you are on floor " + currentFloor)
  var doorVal = prompt(getUsername + " is currently on floor " + currentFloor + "\n" + getUsername + " has " + userHp + "HP" + "\n" + "Pick a door: 1 2 3");
  doorTest = doorVal;
  doorRoll = Math.floor(Math.random() * 20);
  //previous conditional was rigged that option 1 will always result in fail, changed conditional to check for door first then roll to see if door passes
  if (doorVal > 1 && doorTest < 4) {
    if (doorRoll >= 8 ) {
      attackRoll();
    }else{
      eject();
    }
  } else if(!doorVal || doorTest > 3) {
    alert("You failed to pick a door again. Die.")
    eject();
  }
}

function goToNextFloor() {
  currentFloor = currentFloor + 1;
  loot();
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
// win function
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
// loot scoring
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

//battle sequence
// check for userHp first
// moved goToNextFloor() here
// everytime you kill a monster you get 2 points
function attackRoll() {
  var encChance = Math.floor(Math.random() * 20);
  if (userHp >= 1) {
    if (encChance >= 10) {
      console.log("mob appear");
      var playerChoice = prompt("A monster appears!" + "\n" + getUsername + " has " + userHp + "HP" + "\n" + "Attack? Yes/No").toLowerCase();
      if (playerChoice == "yes") {
        var dmg = Math.floor(Math.random() * 20);
        if (dmg >= 10) {
          lootScore = lootScore + 2;
          alert("You killed the monster!" + "\n" + getUsername + " has " + userHp + "HP")
          goToNextFloor();
        } else {
          userHp = userHp - 1;
          alert("The monster is too strong for you and it attacks you!" + "\n" + getUsername + " has " + userHp + "HP");
          goToNextFloor();
        }
      } else if(playerChoice == "no") {
        userHp = userHp - 1;
        alert("You escape but you lose 1HP while running away." + "\n" + getUsername + " has " + userHp + "HP");
        goToNextFloor();
      }
    } else {
      alert("No monsters appear, proceed!")
      goToNextFloor();
    }
  } else {
    var reply = prompt("You are dead reset game? Yes/No").toLowerCase();
    if(reply == "yes"){
      resetGame();
      th();
    }else{
      alert("Thanks for playing! " + getUsername );
    }
  }
}

//restart game here
function resetGame(){
  lootScore = 0;
  currentFloor = 1;
  userHp = 5;
}

//run the function to start the game
th();

//what i learned: the order of functions is important, where you put the functions will behave differently, deciding the order of the functions from the start is important and drawing out the flow helps even more
