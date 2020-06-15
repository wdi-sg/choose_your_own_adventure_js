console.log("hello script js");

var level = 0;

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = loadLevel(level, currentInput);
  return output;

};



var level0 = function(currentInput) {
  var output = "Hi detective " + currentInput + "! You\'re just in time! I\'m sure you\'ve already heard about what happened, but just to jog your memory, a crime has been commited, and someone was murdered. \n\n The body belongs to Melissa Baywood, a student at NUS. She lives in this apartment with three other girls, and we have yet to take their statements. Your job is to check out the body and ask the coroner any questions that might aid the investigation, and get the statements from her flatmates and possibly find the murderer! Good luck, detective " + currentInput + "! \n\n To get started on your adventure, key in \'step into the apartment\'!";
  level ++;
  console.log(level);
  document.querySelector("#input").value = "";
  document.querySelector("h3").textContent = "Type in an option!";
  return output;
};

var level1 = function ( currentInput ) {
  if ( currentInput.toLowerCase() == "step into the apartment" ) {
    var output = "You find yourself in the living room. Melissa Baywood is on the floor, her body partially covered by a body bag with the stab wound on her chest peeking through. You see the coroner kneeling on the floor beside her body, collecting samples. You decide to ask him some questions. \n\n Option 1 = Hi, what do you have for me? \n Option 2 = Another day, another murder, huh? \n Key in either \'Option 1\' or \'Option 2\'"
    level ++;
    console.log(level);
  }

  else if ( currentInput.toLowerCase() != "step into the apartment" ){
    output = "Please key in \'step into the apartment\'!"
  }
  document.querySelector("#input").value = "";
 // document.querySelector("h3").textContent = "Type in an option!";
  return output;
};

var level2 = function ( currentInput ) {
  if ( currentInput.toLowerCase() == "option 1" ) {
    var output = "The victim was 23 years old. Her cause of death is a stab right through her heart. We placed the time of death to be between 11pm and 1am, and we have deduced that the murder weapon used has circular grooving, so most probably not a normal knife or scissors.\n\n Key in \'Thank you for the information\' to continue on to get statements from the flatmates."
    level ++;
  }
  else if ( currentInput.toLowerCase() == "option 2" ) {

    if ( currentInput.toLowerCase() != "I apologise" ) {
      var output = "Please.. Somebody died. Can you please have some respect? and come back after you've pulled your head out of your ass? \n\n Key in \'I apologise\'."
      }

    else if ( currentInput.toLowerCase() == "i aplogise" ) {
      var output = "The victim was 23 years old. Her cause of death is a stab right through her heart. We placed the time of death to be between 11pm and 1am, and we have deduced that the murder weapon used has circular grooving, so most probably not a normal knife or scissors.\n\n Key in \'Thank you for the information\' to continue on to get statements from the flatmates."
    level ++;
    }
  }

  else {
    output = "Please key in either \'Option 1\' or \'Option 2\'!";
  }
  document.querySelector("#input").value = "";
 // document.querySelector("h3").textContent = "Type in an option!";
  return output;
}

var level3 = function ( currentInput ) {
  if ( currentInput.toLowerCase == "option 1" ) {
    var output = ""
  }
}




var loadLevel = function (level, currentInput) {
  if ( level == 0 ) {
    return level0(currentInput);
  }

  else if ( level == 1 ) {
    return level1(currentInput);
  }

  else if ( level == 2 ) {
    return level2(currentInput);
  }
}