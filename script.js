/* 
Step 0: Choose your main catto
Scottish Fold / American Shorthair / Forest Cat 
Step 1: User chooses 1 option
Step 2: User confirms option chose
Step 3: With Catto chosen, list attack variables
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
//Key in stated options to choose catto
if(step === 1) {
  if(input === "SF") {
    step++;
    reset();
    return "Do you want to choose Scottish Fold? \n Enter (Y) or (N).";
  } else if(input === "AS") {
      step++;
      reset();
      return "Do you want to choose American Shorthair? \n Enter (Y) or (N).";
  } else if(input === "FC") {
      step++;
      reset();
      return "Do you want to chooseForest Cat? \n Enter (Y) or (N).";
  } else if(input != "SF" || input != "AS" || input != "FC") {
      reset();
      return "Please use SF / FC / FC.";
  } 
  //console.log(1);

  //confirm w user of catto option selected
} else if(step === 2) {
    if(input === "Y") {
      activityStatus = "You're all set!";
      reset();
      return "Meow! You've chosen Scottish Fold, please take good care of it!";
    } else if(input === "N") {
        activityStatus = "You're not set yet...";
        reset();
        return "Purr... Do you not want a catto?";
    } else if(input != "Y" || input != "N") {
        activityStatus = "You're not set yet...";
        reset();
        return "Please key Y / N";
    }
}
//console.log(2);

