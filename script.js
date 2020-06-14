/* 
Step 0: Choose your main catto
Scottish Fold / American Shorthair / Forest Cat 
Step 1: User chooses 1 option
Step 2: User confirms option chose
*/

var activityStatus = "online";
var step = 0;

// Intro for user to choose catto
var reset = function() {
  return document.querySelector('#input').value = "";
}
var inputHappened = function(input) {
  console.log(input);
  if(activityStatus === "online") {
    if(step === 0) {
      step++;
      reset();
      return "Nice to meet you meow! Choose a catto to start the game meow. \nThere are 3 options: \n(SF)Scottish Fold, (AS)American Shorthair, and (FC)Forest Cat. \n Please key in (SF / AS / FC) to select your catto meow."
    }
  }
} 
// console.log(0);


