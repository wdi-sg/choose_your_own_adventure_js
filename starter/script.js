// Controlling where you go
// }
// use array as a way to track hp?
//create array for function to use as options, give them a value so that when it hits a certain number, it runs
//store it all in functions and run it, have a reset function to go to the start again?

// test conditions: left,yes,

//testing control objects ===
var controlObj = {
  left: 1,
  right: 2,
  middle: 3
}
//game stats
var wpnArray = [];
var userHp = [1,2,3,4,5];
var totalScore = 0;
var userHpCheck = [];

//store username in global var, only asks for your name once
var getUsername = prompt("What is your name?");
//unable to put in one function, need to resuse
var gameQuest = "Go Left, Right or Middle?";

//reset and start game functions
function startGame(){
  var userResponse = prompt(gameQuest).toLowerCase();
  return firstLevel(userResponse);
}

//1st level
function firstLevel(x){
  //add randomizer here to generate a number for monster to appear
  if(x == "left"){
    firstLevelLeft = prompt("You went left and found a treasure containing the weapon Misteltein" + "\n" + gameQuest);
    wpnArray.push("Misteltein");
    totalScore ++
    return secondLevel(firstLevelLeft);
  }else if(x == "right"){
    firstLevelRight = prompt("You found a bottle of potion on the floor." + "\n" + gameQuest);
    wpnArray.push("Potion")
    totalScore ++
    return secondLevel(firstLevelRight);
  }else if(x == "middle"){
    answer = prompt("You are died. Your score is " + totalScore + " Retry?");
    if(answer == "yes"){
      startGame();
      totalScore = 0;
      //reset score and run startGame() again
      //first ending here
    }
  }
}

//2nd level
function secondLevel(x){
  if(x == "left"){
    var treasureOne = prompt("")
    totalScore ++
  }else if(x == "right"){
    prompt("");
  }else if(x == "middle"){
    var trapOne = prompt("");
  }
}

startGame();

//
// //last level
// if(treasureOne == "yes" || trapOne == "roll"){
//   var finalBoss = prompt("You've reached the last room, the final boss appears! Do you attack or evade?");
//   if (finalBoss == "attack"){
//     var victory = prompt("You stab the legendary Sword " + wpnArray[0] + " into the heard of the boss, he dies. You win! Your name " + getUsername + " will be rememebered!");
//   }else if (finalBoss == "evade") {
//     prompt("You try to evade but you weren't fast enough, the final boss steps on you like a cockroach and you DIE");
//   }
// }else if (trapOne == "jump") {
//   prompt("You tried to jump but you weren't fast enough, the final boss steps on you like a cockroach and you DIE");
// }


// function hpCheck(action){
//
// }
