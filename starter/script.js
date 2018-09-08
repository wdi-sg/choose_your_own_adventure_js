/*Pseudo-code
1)Prompt => the user for his name
1)Print => Welcome to Gloomhaven! (name), you must be really courageous and adventurous
1)to have come and explore the land of unknowns on your own.
1)Prompt => the user to which area does he want to go?
  2)Selection(TOWNS)
  2)Prompt => the user to find out which destination he would wanna check out first!
    3)Selection(THE SINKING MARKET)
    3)Prompt => the user to select a quest to complete
      4)Quest()
      4)Quest()
    3)Selection(GLOOMHAVEN SQUARE)
    3)Prompt => the user to select a quest to complete
      4)Quest()
      4)Quest()
  2)Selection(WILDERNESS)
    3)Selection(LINGERING SWAMPS)
    3)Prompt => the user to select a quest to complete
      4)Quest()
      4)Quest()
    3)Selection(SERPENT'S KISS RIVER)
    3)Prompt => the user to select a quest to complete
      4)Quest()
      4)Quest()
    3)Selection(DAGGER FOREST)
    3)Prompt => the user to select a quest to complete
      4)Quest()
      4)Quest()

//Convert all the console.log msgs to alert msgs.
*/

//Stage Zero, prompt user for name
var playerNameInput = prompt("Enter your name: ");
playerName = playerNameInput[0].toUpperCase() + playerNameInput.substring(1).toLowerCase();
console.log("Welcome to Gloomhaven, " + playerName + "! Whatever your reason for coming to Gloomhaven, out here on the edge of the world, that simple fact is never going to change. Remember to take food, a mercenary can't fight on an empty stomach.");

//========================================================================================

//Stage One, prompt user for TOWNS / WILDERNESS
var whereGloomhaven = prompt("Where would you like to wander off first?",
"towns or wilderness")

// if user gives invalid input: this will be shown
while(whereGloomhaven.toLowerCase() !== "towns" && whereGloomhaven.toLowerCase() !== "wilderness"){
    console.log("Are you lost? " + playerName + " the place you entered doesn't exists, "
    + "please re-enter.");
    var whereGloomhaven = prompt("Where would you like to wander off first?",
    "towns or wilderness")
}

//========================================================================================

//Stage Two, welcome user to TOWNS
if(whereGloomhaven.toLowerCase() === "towns"){
    console.log("Hallo " + playerName + ", Welcome to the town!");

    // and prompt user to select which areas at the TOWNS to explore
    var whereTown = prompt("Walk to the Sinking Market or Gloomhaven Square",
    "Sinking Market or Gloomhaven Square");

    //if user gives invalid input: this will be shown
    while(whereTown.toLowerCase() !== "sinking market" && whereTown.toLowerCase() !== "gloomhaven square"){
        console.log("Good Day " + playerName + ", You look lost! Do you need directions? "
        + "Re enter the name of place."); //**Can consider giving recommendations here
        var whereTown = prompt("Walk to the Sinking Market or Gloomhaven Square",
        "Sinking Market or Gloomhaven Square");
    }
}

//---------------------------------------------------------------------------------------

//Stage Two, welcome user to WILDERNESS
else if (whereGloomhaven.toLowerCase() === "wilderness") {
    console.log(playerName +"! "+ "Look out for dungeons and definitely go explore forgotten ruins!");

    // and prompt user to select which areas at the WILDERNESS to explore
    var whereWilderness = prompt("Departing to?",
    "Lingering Swamps, Serpent's Kiss River or Dagger Forest");

    // if user gives invalid input: this will be shown
    while(whereWilderness.toLowerCase() !== "lingering swamps"
    && whereWilderness.toLowerCase() !== "serpent's kiss river"
    && whereWilderness.toLowerCase() !== "dagger forest"){
        console.log("Good Day " + playerName + ", You look lost! Do you need directions? "
        + "Re enter the name of place.");
        var whereWilderness = prompt("Departing to?",
        "Lingering Swamps, Serpent's Kiss River or Dagger Forest");
    }
}
