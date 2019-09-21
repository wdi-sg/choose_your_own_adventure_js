// choose your own adventure game - 3 options for each choice
// keep track of the current 'state'
// keep track of the users name and use it in the program


console.log("hello script js");


//create an object that can be have more data added as needed
// so i don't have to keep defining variables
var playerData = {
  state: "start",
  name: "",
  travelYear: ""
}

var inputHappened = function(currentInput){
  console.log( currentInput );
  console.log(playerData.state);
switch (playerData.state) {
// user has just started the game
  case "start":
    playerData.name = currentInput;
    playerData.state = "travelYear";
    return askTravelYear(playerData.name);
    break;

  case "travelYear":
    playerData.travelYear = parseInt(currentInput);
    // convert to an integer, and check if the input is valid
    if (isNaN(playerData.travelYear)) {
      return "Please enter a date (YYYY)";
    }
    else {
    return askFilmDetails(playerData.travelYear);
    break;}

  case "checkBifforGiff":
    playerData.checkBifforGiff = currentInput;
    return checkBifforGiff(playerData.checkBifforGiff);
    break;

  case "pickedBiff":
    playerData.chicken = currentInput;
    return pickedBiff(playerData.chicken);
    break;

  case "pickedGiff":
    playerData.chicken = currentInput;
    return pickedGiff(playerData.chicken);
    break;

 case "changePastName":
    playerData.changePastName = currentInput;
    return changePastName(playerData.changePastName);
    break;

 case "askAboutDance":
    return askAboutDance(currentInput);
    break;
}


  }

var askTravelYear = function (playerName) {
  var output = "Hi " + playerName + ", what year would you like to go to? (YYYY)";
  return output;
}

var askFilmDetails = function (travelYear) {
  // add the travel year to the object
  playerData.travelYear = travelYear;
// do some date checks
  if (playerData.travelYear >= 2015){
    var output = playerData.name + ", I see you're a fan of Back to the Future 2. \n Would you rather deal with Biff or Griff? (B/G)";
    playerData.state = "checkBifforGiff";
   }
   else  if (playerData.travelYear >= 1985 && playerData.travelYear <=2014){
    var output = playerData.name + ", Doc has already destroyed the Time Machine at this point. \nI guess you'll have to wait around until 2015. \nWhat name would you like to go by until then?";
    playerData.state = "changePastName";
   }
   else  if (playerData.travelYear >= 1955 && playerData.travelYear <=1984){
    var output = playerData.name + ", I see you're a fan of Back to the Future 1. \nYour future Mom has just asked you to the Enchantment Under the Sea dance. \nWhat do you do? (Y/N/S)";
    playerData.state = "askAboutDance";
   }

// add the new state for the question asked
    else {
      var output = playerData.name + ", I see you're a fan of Back to the Future 3. \nYou've run out of gas and can't get back to your own time! \nHow do you power the Time Machine? (H/M/T)";
      playerData.state = "askAboutPower";
     }
  return output;
}

/// biff or giff storyline
var checkBifforGiff = function (check) {
  if (check === "B"){
    var output = playerData.name + ", Hmm, interesting. \nBiff is angry and has a cane. \nDo you stand and fight, or run away like a coward? (S/R)";
    playerData.state = "pickedBiff";
   }
   else  if (check==="G"){
    var output = playerData.name + ", Griff is asking you if you are in, or out. \nWhat do you say? (I/O)";
    playerData.state = "pickedGiff";
   }
   else {
         return "Please enter B/G.";
       }
     return output;
   }


var pickedBiff = function (check) {
  if (check === "S"){
    var output = playerData.name + ", Good choice. Biff is old and feeble at this point. \nYou push him over and he falls in a pile of manure.";
    playerData.state = "finished";
   }
   else  if (check==="R"){
    var output = playerData.name + ", You get away, but your future son Marty Jr. \nis heckled for the rest of his days for his dad's cowardice.";
    playerData.state = "finished";
   }
   else {
         return "Please enter S/R.";
       }
     return output;
   }


var pickedGiff = function (check) {
  if (check === "I"){
    var output = playerData.name + ", DUDE! Bad call. \nGriff and his cronies rob the Hill Valley bank and frame you for it. \nNo more time travel for you.";
    playerData.state = "finished";
   }
   else  if (check==="O"){
    var output = playerData.name + ", niiiice. \nYou deck Griff in the jaw and run away. \nHe gives chase on his hoverboard and ends up in a pile of manure.";
    playerData.state = "finished";
   }
   else {
         return "Please enter I/O.";
       }
     return output;
   }
// end biff or giff storyline

// time machine destroyed
var changePastName = function (changePastName) {
    var output = "Welcome to the future, " + changePastName;
    playerData.state = "finished";
    return output;
   }


// enchantment storyline
var askAboutDance = function (check) {
  if (check === "Y"){
    var output = playerData.name + ",  Creepy. I hope you have some backup plan in place to get out of this. \nUntil then, you're stuck in 1955.";
    playerData.state = "finished";
   }
   else  if (check==="N"){
    var output = playerData.name + ", Honorable. But this also means that your \nfuture Dad will never meet your Mom, and therefore you cannot exist.";
    playerData.state = "finished";
   }
    else  if (check==="S"){
    var output = playerData.name + ", Interesting. \nYou set up an elaborate plan for your future Dad \nto surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. \nYou may go back to your own time.";
    playerData.state = "finished";
   }
   else {
         return "Please enter Y/N/S.";
       }
     return output;
   }
