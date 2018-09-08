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
