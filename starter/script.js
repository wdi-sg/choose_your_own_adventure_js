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
var totalScore = [];
var userHpCheck = [];

//store username in global var, only asks for your name once
var getUsername = prompt("What is your name?");

function startGame(){
  var gameQuest = "Left, Right or Middle?";
  userResponse = prompt("" + "\n" + gameQuest).toLowerCase();
  return firstLevel(userResponse);
}

//1st level
function firstLevel(x){
  if(x == "left"){
    firstLevelLeft = prompt("You went left and only found a treasure! Open it?");
    totalScore.push(1);
    return firstLevelLeft;
  }else if(x == "right"){
    firstLevelRight = prompt("You went right and found another door way...Proceed?");
    totalScore.push(1);
    return firstLevelRight;
  }else if(x == "middle"){
    answer = prompt("You are died. Retry?");
    if(answer == "yes"){
      startGame();
      //reset here
    }
  }
}

startGame();

//2nd level
// if(firstLevelLeft == "yes"){
//   var treasureOne = prompt("You found a weapon Misteltein! Upon Opening the chest a door opens...proceed?")
//   wpnArray.push("Misteltein");
// }else if(firstLevelLeft == "no"){
//   prompt("You discard the treasure, a trap door opens and you DIE");
// }else if(firstLevelRight == "yes"){
//   var trapOne = prompt("You stepped on a trap! Do you jump or roll to avoid?");
// }
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
