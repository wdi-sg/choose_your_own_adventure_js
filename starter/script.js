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

//========================================================================================

    //Stage Three, welcome user to the SINKING MARKET / GLOOMHAVEN SQUARE
    if(whereTown.toLowerCase() === "sinking market"){
        //Display descriptive about the place
        console.log("As you shop for supplies at the Sinking Market, your hand instinctively goes for the wallet at your waist. It’s gone! You quickly scan the crowd and see a small Vermling darting away from you, heading towards a sewer grating.");

        alert("All your money has been stolen!")
        console.log("Option A: Give chase! No one steals from you and gets away with it.");
        console.log("Option B: Take a clear shot at him with a bow before he disappears into the grating.");

        // prompt user to pick a QUEST for Sinking Market
        var whatMarketQuest = prompt("What do you do " +playerName+ " ?", "A or B");
    }
    else if (whereTown.toLowerCase() === "gloomhaven square") {
        //Display descriptive about the place
        console.log("You are at the town of Gloomhaven. There is a big commotion and you find yourself in a dilemma.");

        alert("You know about Jekserah’s plan.");
        console.log("Option Help: Apart of you like the plan and it makes sense in some dark twisted way. You’ve seen the town guards slacking off their duties. They can barely fight back the Vermlings, and their taxation is strangling the town and your pocket.");
        console.log("Option Help: You know that with the help of Jekserah’s undead army, you will be able to kill off the Captain guard and all his men.");
        console.log("Option Kill: You are also thinking that if this city was governed by an army of undead it would be madness. You can never give all the power to someone like Jekserah.");
        console.log("Option Kill: You want to turn around and run as quickly as you can and report all that you know to the Captain guard.");

        // prompt user to pick a QUEST for Gloomhaven Square
        var whatSquareQuest = prompt("Are you ready to take on the fate of the cities into your own hands " + playerName + " ?", "Kill or Help Jekserah");
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
//========================================================================================

    //Stage Three, welcome user to the SINKING MARKET / GLOOMHAVEN SQUARE
    if(whereWilderness.toLowerCase() === "lingering swamps"){
        //Display descriptive about the place
        console.log("The swamp is a horrid place, full of bugs, muck and a general uneasiness. It would take lot of magical interventions to make the swamp hospitable.");
    }
    else if (whereWilderness.toLowerCase() === "serpent's kiss river") {
        //Display descriptive about the place
        console.log("It looks like any other river you have seen and the surroundings is peaceful. Not too far away in the distant, an old temple catches your attention.");
    }
    else if (whereWilderness.toLowerCase() === "dagger forest") {
        //Display descriptive about the place
        console.log("The Dagger Forest sits in the broad angle between the East Road and the Stone Road. It is known as a hideout for bandits seeking to prey upon traffic coming to and from the Capital along the East Road.");
    }
}
