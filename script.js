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
    if (isNaN(playerData.travelYear)) {
      playerData.state = "travelYear";
      return "Please enter a date (YYYY)";
    // playerData.state = "travelYear";
    }
    else {
    return askFilmDetails(playerData.travelYear);
    break;}
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
      playerData.state = "askAboutDance";
     }
  return output;
}
