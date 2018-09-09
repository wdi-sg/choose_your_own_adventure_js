/*Pseudo-code
1)Prompt => the user for his name
1)Print => Welcome to Gloomhaven! (name), you must be really courageous and adventurous
1)to have come and explore the land of unknowns on your own.
1)Prompt => the user to which area does he want to go?
  2)Selection(TOWNS)
  2)Prompt => the user to find out which destination he would wanna check out first!
    3)Selection(THE SINKING MARKET)
    3)Prompt => the user to select a quest to complete
      4)Action()
      4)Action()
      4)Action()
    3)Selection(GLOOMHAVEN SQUARE)
    3)Prompt => the user to select a quest to complete
      4)Quest()
      4)Quest()
  2)Selection(WILDERNESS)
    3)Selection(SERPENT'S KISS RIVER)
    3)Prompt => the user to select a quest to complete
      4)Quest()
      4)Quest()
    3)Selection(DAGGER FOREST)
    3)Prompt => the user to select a quest to complete
      4)Quest()
      4)Quest()

      Complete an action or quest will reward gold, a score or items

//Must contain one loop
//User inputs to be string and number
//May need `parseInt()` and `toString()
//putting certain parts inside functions.
//use random number

//**assign a score for each task and report the score at the end of the game
//**Make Your Game Repeat as many times as the player wants
//**Part 5 & 6

//Convert all the console.log msgs to alert msgs.
*/

//Player details or items
var playerItems = [
  {bow: 1},
  {arrow: 20},
  {dagger: 4}
];
var playerGold = 20;
var playerScore = 0;


//Stage Zero, prompt user for name
var playerNameInput = prompt("Enter your name: ");
playerName = playerNameInput[0].toUpperCase() + playerNameInput.substring(1).toLowerCase();
console.log("Welcome to Gloomhaven, " + playerName + "! Whatever your reason for coming to Gloomhaven, out here on the edge of the world, that simple fact is never going to change. Remember to take food, a mercenary can't fight on an empty stomach.");
alert(playerName+ ", you have " +playerGold+ " gold. And your Score: " + playerScore); // add "Your items: " +playerItems+ "

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

    //Stage Three, welcome user to the SINKING MARKET
    if(whereTown.toLowerCase() === "sinking market"){
        //Display descriptive about the place
        console.log("As you shop for supplies at the Sinking Market, your hand instinctively goes for the wallet at your waist. It’s gone! You quickly scan the crowd and see a small Vermling darting away from you, heading towards a sewer grating.");

        playerGold = 0;
        alert("All your money has been stolen!" + " Gold: " + playerGold);
        console.log("Option 1: Give chase! No one steals from you and gets away with it.");
        console.log("Option 2: Take a clear shot at him with a bow before he disappears into the grating.");
        console.log("Option 3: Ignore what had happen; and get more information on Vermlings before deciding what you want to do.");
        // prompt user to pick a QUEST for Sinking Market
        var whatMarketQuest = prompt("What do you do " +playerName+ " ?", "1, 2 or 3");

        //The player must select a quest no.; the quest cannot be null
        while(whatMarketQuest !== "1" && whatMarketQuest !== "2" && whatMarketQuest !== "3"){
            alert("Invalid. Please select an option: 1, 2 or 3");
            var whatMarketQuest = prompt("What do you do " +playerName+ " ?", "1, 2 or 3");
        }

        var marketQuest = parseInt(whatMarketQuest);

//========================================================================================

        //Stage Four, describe the options for SINKING MARKET and the rewards...
        if(marketQuest === 1){
            console.log("The Vermling disappears into the sewers, and you try to give chase. But after a few minutes you are hopelessly lost and are forced to give up.");
            playerGold -= 5;
            console.log("Gold: " + playerGold + " Score: " + playerScore);
        }
        else if(marketQuest === 2){
            console.log("You raise your bow and take aim at the thief. A woman screams, but you try not to let it faze you. As the Vermling pauses to open the grate, you fire the arrow and see the furry figure drop. You smile and go to retrieve your gold from the corpse. You get a lot of dirty looks, though. Apparently firing a bow on a crowded street is frowned upon.");
            playerScore -= 10;
            //playerItems.arrow -1;
            console.log("Gold: " + playerGold + " Score: " + playerScore);
        }
        else if(marketQuest === 3){
            console.log("You left the market feeling a disappointment. Walking down the streets, dragging your feet and unaware of your surroundings. You kicked onto a big object on the ground and almost tripped over.");
            console.log("You looked down and picked up a book with a small print 'Learn enough Vermlings to be dangerous'. You opened the book and started reading. 'Vermlings are a scavenging, animalistic race...hunt with crude knives and bows...They are small and weak-willed, so can be controlled by...the right combination of food and fear.'");
            playerScore += 10;
            playerItems.push("Book about Vermlings");
            console.log("Gold: " + playerGold + " Score: " + playerScore); // add "Your items: " +playerItems+ "
        }
    }

//---------------------------------------------------------------------------------------

    //Stage Three, welcome user to the GLOOMHAVEN SQUARE
    else if (whereTown.toLowerCase() === "gloomhaven square") {
        //Display descriptive about the place
        console.log("You are at the town of Gloomhaven. There is a big commotion and you find yourself in a dilemma.");

        alert("You know about Jekserah’s plan.");
        console.log("Option Help: Apart of you like Jekserah’s plan and it makes sense in some dark twisted way. You’ve seen the town guards slacking off their duties. They can barely fight back the Vermlings, and their taxation is strangling the town and your pocket.");
        console.log("You know that with the help of Jekserah’s undead army, you will be able to kill off the Captain guard and all his men.");
        console.log("Option Kill: You are also thinking that if this city was governed by an army of undead it would be madness. You can never give all the power to someone like Jekserah.");
        console.log("You want to turn around and run as quickly as you can and report all that you know to the Captain guard.");

        // prompt user to pick a QUEST for Gloomhaven Square
        var whatSquareQuest = prompt("Are you ready to take on the fate of the cities into your own hands " + playerName + " ?", "Help or Kill");

        //The player must select a quest; the quest cannot be null
        while(whatSquareQuest.toLowerCase() !== "help" && whatSquareQuest.toLowerCase() !== "kill"){
            alert("Invalid. Please select an option: Help or Kill");
            var whatSquareQuest = prompt("Are you ready to take on the fate of the cities into your own hands " + playerName + " ?", "Help or Kill");
        }
    }

//========================================================================================

        //Stage Four, describe the options for GLOOMHAVEN SQUARE and the rewards...
        if(whatSquareQuest.toLowerCase() === "help"){
            alert("You led the monsters to Ghost Fortress and massacred everyone who was alive and breathing. The task was accomplished and everything went well as planned.");
            alert("Jekserah took over the city and thank you with a bag of gifts. She said that she will bring in more merchants to govern the city into the age of prosperity and keep it safe from the forces outside the walls.");
            playerGold += 150;
            playerScore -= 15;
            playerItems.push("Skullbane axe")
            console.log("Gold: " + playerGold + " Score: " + playerScore); // add "Your items: " +playerItems+ "
        }
        else if(whatSquareQuest.toLowerCase() === "kill"){
            alert("You race through Gloomhaven Square to the Ghost Fortress. Guards stop you at the gate and you hurriedly explain the threat looming behind you. Frantically, you push past them, looking for the Captain of the Guard. You quickly explain Jekserah’s plan to him but before he could say a word; the doors burst open and the decaying shapes of the living dead stream into the room.");
            alert("All City Guards and City Archers are your allies. “To arms! Fight them back!”, you shouted. As the city guards and archers took out the monsters, you went straight for the head of Jekserah. Both Jekserah and you battled for a long time and you have weakened her. You reach for your daggers and threw them at the critical areas. Jekserah collapses, and she whispers to you…"+ playerName + " they will come after you.");
            playerGold += 30;
            playerScore += 30;
            console.log("Gold: " + playerGold + " Score: " + playerScore);
        }
}

//---------------------------------------------------------------------------------------

//Stage Two, welcome user to WILDERNESS
else if (whereGloomhaven.toLowerCase() === "wilderness") {
    console.log(playerName +"! "+ "Look out for dungeons and definitely go explore forgotten ruins!");

    // and prompt user to select which areas at the WILDERNESS to explore
    var whereWilderness = prompt("Departing to?", "Serpent's Kiss River or Dagger Forest");

    // if user gives invalid input: this will be shown
    while(whereWilderness.toLowerCase() !== "serpent's kiss river"
          && whereWilderness.toLowerCase() !== "dagger forest"){
        console.log("Good Day " + playerName + ", You look lost! Do you need directions? "
        + "Re enter the name of place.");
        var whereWilderness = prompt("Departing to?", "Serpent's Kiss River or Dagger Forest");
    }

//========================================================================================

    //Stage Three, welcome user to the SERPENT'S KISS RIVER
    if(whereWilderness.toLowerCase() === "serpent's kiss river") {
        //Display descriptive about the place
        console.log("It looks like any other river you have seen and the surroundings is peaceful. Not too far away in the distant, an old temple catches your attention.");
        alert("Then you hear a voice speaking to you in your head. 'You should serve me " +playerName+ ". There is an artefact of great power located in a forgotten temple along this river. You can retrieve it for me, or you can die here and now.'");

        // prompt user to pick a QUEST for SERPENT'S KISS RIVER
        var whatRiverQuest = prompt("Do you serve him?", "Yes or No");

        //The player must select a quest; the quest cannot be null
        while(whatRiverQuest.toLowerCase() !== "yes" && whatRiverQuest.toLowerCase() !== "no"){
            alert("Invalid. Please select an option: Yes or No");
            var whatRiverQuest = prompt("Do you serve him?", "Yes or No");
        }
    }

//========================================================================================

        //Stage Four, describe the options for SERPENT'S KISS RIVER and the rewards...
        if(whatRiverQuest.toLowerCase() === "yes"){
            alert("You have decided to listen to the voice in your head and it led you to the temple of the elements in search of an ancient artefact.");
            console.log("You enter the decaying stone structure to see for yourself what all the fuss is about. As you step inside, you eye catches signs of recent visitors — a broken twig, footprints in the dust. You approach the main chamber and ready your weapons as a group of of hooded figures emerge from the shadows.");

            alert("'You are too late, " +playerName+ "'. 'We control this temple now, and all its power serves us. The artefact is ours and it has made our minions more powerful than ever. The cultist raise their hands and a barrier surrounds the artefact.'");

            //Include a task here to see if the player manage to destroy all four altars.

            alert("Success! With the altars smashed, the demons vanish and the protective barrier around the artefact finally dissipates.")
            console.log("You approach the center of the temple and reach out for the vessel but stop short. You feel a powerful darkness emanating from the thing and behind that a deep sadness.");
            console.log("This artefact has been corrupted and you know that it could be used for great evil but would you fight for that evil or against it? After some pondering, you use a thick cloth to get the vessel into your bag. Perhaps it would be better to bring it to an enchanter than mess with it yourself.");

            playerScore += 60;
            playerItems.push("Mystery artefact")
            console.log("Gold: " + playerGold + " Score: " + playerScore); // add "Your items: " +playerItems+ "
        }
        else if(whatRiverQuest.toLowerCase() === "no"){
            alert("Black smoke surrounds you and you find yourself in a dark misty room.");
            console.log("You try to reach for your weapons but the demon sense your intent.");
            console.log("' "+playerName+ ", you are a fool!' His voice tears at your skull and you reel in pain.");
            console.log("'You dare go against me in my own seat of power? You have make a grave mistake this day!' In a burst of flame, his massive form vanishes into the darkness. 'To me, my servants! Grind this mortal into the stone and use it to decorate my palace.'");

            //Include a task here, the player has to defeat the prime demon (the boss) or all his servants

            alert("You send one final blow to the demon boss.");
            console.log("As the wave hits the prime demon, his aura dissipates and a scream pierces your mind. HIs legs buckle underneath him and he collapses on the floor, crashing into shards of stone. As this happens the screaming stops and the palace grows oddly quiet.");
            alert("Next, the only sensible thing left to does loot the place and make your way back.");

            playerGold += 50;
            playerScore += 60;
            console.log("Gold: " + playerGold + " Score: " + playerScore);
        }

//---------------------------------------------------------------------------------------

    //Stage Three, welcome user to the DAGGER FOREST
    else if(whereWilderness.toLowerCase() === "dagger forest") {
        //Display descriptive about the place
        console.log("The Dagger Forest sits in the broad angle between the East Road and the Stone Road. It is known as a hideout for bandits seeking to prey upon traffic coming to and from the Capital along the East Road.");
    }

    // prompt user to pick a QUEST for DAGGER FOREST
    //var whatForestQuest = prompt("", "");

    //The player must select a quest; the quest cannot be null



}
