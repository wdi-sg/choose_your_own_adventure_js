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
var playerLife = 100; //-5 for every tries to defeat a monster


//Stage Zero, prompt player for name
var playerNameInput = prompt("Enter your name: ");
playerName = playerNameInput[0].toUpperCase() + playerNameInput.substring(1).toLowerCase();
alert("Welcome to Gloomhaven, " + playerName + "! Whatever your reason for coming to Gloomhaven, out here on the edge of the world, that simple fact is never going to change. Remember to take food, a mercenary can't fight on an empty stomach.");
alert(playerName+ ", you have " +playerGold+ " gold. And your Score: " + playerScore); // add "Your items: " +playerItems+ "

//========================================================================================

//Stage One, prompt player for TOWNS / WILDERNESS
var whereGloomhaven = prompt("Where would you like to wander off first?",
"towns or wilderness")

// if player gives invalid input: this will be shown
while(whereGloomhaven.toLowerCase() !== "towns" && whereGloomhaven.toLowerCase() !== "wilderness"){
    alert("Are you lost? " + playerName + " the place you entered doesn't exists, "
    + "please re-enter.");
    var whereGloomhaven = prompt("Where would you like to wander off first?",
    "towns or wilderness")
}

//========================================================================================

//Stage Two, welcome player to TOWNS
if(whereGloomhaven.toLowerCase() === "towns"){
    alert("Hallo " + playerName + ", Welcome to the town!");

    // and prompt player to select which areas at the TOWNS to explore
    var whereTown = prompt("Walk to the Sinking Market or Gloomhaven Square",
    "Sinking Market or Gloomhaven Square");

    //if player gives invalid input: this will be shown
    while(whereTown.toLowerCase() !== "sinking market" && whereTown.toLowerCase() !== "gloomhaven square"){
        alert("Good Day " + playerName + ", You look lost! Do you need directions? "
        + "Re enter the name of place."); //**Can consider giving recommendations here
        var whereTown = prompt("Walk to the Sinking Market or Gloomhaven Square",
        "Sinking Market or Gloomhaven Square");
    }

//========================================================================================

    //Stage Three, welcome player to the SINKING MARKET
    if(whereTown.toLowerCase() === "sinking market"){
        //Display descriptive about the place
        alert("As you shop for supplies at the Sinking Market, your hand instinctively goes for the wallet at your waist. It’s gone! You quickly scan the crowd and see a small Vermling darting away from you, heading towards a sewer grating.");

        playerGold = 0;
        alert("All your money has been stolen!" + " Gold: " + playerGold);
        alert("Option 1: Give chase! No one steals from you and gets away with it.");
        alert("Option 2: Take a clear shot at him with a bow before he disappears into the grating.");
        alert("Option 3: Ignore what had happen; and get more information on Vermlings before deciding what you want to do.");
        // prompt player to pick a QUEST for Sinking Market
        var whatMarketQuest = prompt("What do you do " +playerName+ " ?", "1, 2 or 3");

        //if player gives invalid input: this will be shown
        while(whatMarketQuest !== "1" && whatMarketQuest !== "2" && whatMarketQuest !== "3"){
            alert("Invalid. Please select an option: 1, 2 or 3");
            var whatMarketQuest = prompt("What do you do " +playerName+ " ?", "1, 2 or 3");
        }

        var marketQuest = parseInt(whatMarketQuest);

//========================================================================================

        //Stage Four, describe the options for SINKING MARKET and the rewards...
        if(marketQuest === 1){
            alert("The Vermling disappears into the sewers, and you try to give chase. But after a few minutes you are hopelessly lost and are forced to give up.");
            playerGold -= 5;
            alert("Gold: " + playerGold + " Score: " + playerScore);
        }
        else if(marketQuest === 2){
            alert("You raise your bow and take aim at the thief. A woman screams, but you try not to let it faze you. As the Vermling pauses to open the grate, you fire the arrow and see the furry figure drop. You smile and go to retrieve your gold from the corpse. You get a lot of dirty looks, though. Apparently firing a bow on a crowded street is frowned upon.");
            playerScore -= 10;
            //playerItems.arrow -1;
            alert("Gold: " + playerGold + " Score: " + playerScore);
        }
        else if(marketQuest === 3){
            alert("You left the market feeling a disappointment. Walking down the streets, dragging your feet and unaware of your surroundings. You kicked onto a big object on the ground and almost tripped over.");
            alert("You looked down and picked up a book with a small print 'Learn enough Vermlings to be dangerous'. You opened the book and started reading. 'Vermlings are a scavenging, animalistic race...hunt with crude knives and bows...They are small and weak-willed, so can be controlled by...the right combination of food and fear.'");
            playerScore += 10;
            playerItems.push("Book about Vermlings");
            alert("Gold: " + playerGold + " Score: " + playerScore); // add "Your items: " +playerItems+ "
        }
    }

//---------------------------------------------------------------------------------------

    //Stage Three, welcome player to the GLOOMHAVEN SQUARE
    else if (whereTown.toLowerCase() === "gloomhaven square") {
        //Display descriptive about the place
        alert("You are at the town of Gloomhaven. There is a big commotion and you find yourself in a dilemma.");

        alert("You know about Jekserah’s plan.");
        alert("Option Help: Apart of you like Jekserah’s plan and it makes sense in some dark twisted way. You’ve seen the town guards slacking off their duties. They can barely fight back the Vermlings, and their taxation is strangling the town and your pocket.");
        alert("You know that with the help of Jekserah’s undead army, you will be able to kill off the Captain guard and all his men.");
        alert("Option Kill: You are also thinking that if this city was governed by an army of undead it would be madness. You can never give all the power to someone like Jekserah.");
        alert("You want to turn around and run as quickly as you can and report all that you know to the Captain guard.");

        // prompt player to pick a QUEST for Gloomhaven Square
        var whatSquareQuest = prompt("Are you ready to take on the fate of the cities into your own hands " + playerName + " ?", "Help or Kill");

        //if player gives invalid input: this will be shown
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
            alert("Gold: " + playerGold + " Score: " + playerScore); // add "Your items: " +playerItems+ "
        }
        else if(whatSquareQuest.toLowerCase() === "kill"){
            alert("You race through Gloomhaven Square to the Ghost Fortress. Guards stop you at the gate and you hurriedly explain the threat looming behind you. Frantically, you push past them, looking for the Captain of the Guard. You quickly explain Jekserah’s plan to him but before he could say a word; the doors burst open and the decaying shapes of the living dead stream into the room.");
            alert("All City Guards and City Archers are your allies. “To arms! Fight them back!”, you shouted. As the city guards and archers took out the monsters, you went straight for the head of Jekserah. Both Jekserah and you battled for a long time and you have weakened her. You reach for your daggers and threw them at the critical areas. Jekserah collapses, and she whispers to you…"+ playerName + " they will come after you.");
            playerGold += 30;
            playerScore += 30;
            alert("Gold: " + playerGold + " Score: " + playerScore);
        }
}

//---------------------------------------------------------------------------------------

//Stage Two, welcome player to WILDERNESS
else if (whereGloomhaven.toLowerCase() === "wilderness") {
    alert(playerName +"! "+ "Look out for dungeons and definitely go explore forgotten ruins!");

    // and prompt player to select which areas at the WILDERNESS to explore
    var whereWilderness = prompt("Departing to?", "Serpent's Kiss River or Dagger Forest");

    // if player gives invalid input: this will be shown
    while(whereWilderness.toLowerCase() !== "serpent's kiss river"
          && whereWilderness.toLowerCase() !== "dagger forest"){
        alert("Good Day " + playerName + ", You look lost! Do you need directions? "
        + "Re enter the name of place.");
        var whereWilderness = prompt("Departing to?", "Serpent's Kiss River or Dagger Forest");
    }

//========================================================================================

    //Stage Three, welcome player to the SERPENT'S KISS RIVER
    if(whereWilderness.toLowerCase() === "serpent's kiss river") {
        //Display descriptive about the place
        alert("It looks like any other river you have seen and the surroundings is peaceful. Not too far away in the distant, an old temple catches your attention.");
        alert("Then you hear a voice speaking to you in your head. 'You should serve me " +playerName+ ". There is an artefact of great power located in a forgotten temple along this river. You can retrieve it for me, or you can die here and now.'");

        // prompt player to pick a QUEST for SERPENT'S KISS RIVER
        var whatRiverQuest = prompt("Do you serve him?", "Yes or No");

        //if player gives invalid input: this will be shown
        while(whatRiverQuest.toLowerCase() !== "yes" && whatRiverQuest.toLowerCase() !== "no"){
            alert("Invalid. Please select an option: Yes or No");
            var whatRiverQuest = prompt("Do you serve him?", "Yes or No");
        }

//========================================================================================

        //Stage Four, describe the options for SERPENT'S KISS RIVER and the rewards...
        if(whatRiverQuest.toLowerCase() === "yes"){
            alert("You have decided to listen to the voice in your head and it led you to the temple of the elements in search of an ancient artefact.");
            alert("You enter the decaying stone structure to see for yourself what all the fuss is about. As you step inside, you eye catches signs of recent visitors — a broken twig, footprints in the dust. You approach the main chamber and ready your weapons as a group of of hooded figures emerge from the shadows.");

            alert("'You are too late, " +playerName+ "'. 'We control this temple now, and all its power serves us. The artefact is ours and it has made our minions more powerful than ever. The cultist raise their hands and a barrier surrounds the artefact.'");

            //Include a task here to see if the player manage to destroy all four altars.

            alert("Success! With the altars smashed, the demons vanish and the protective barrier around the artefact finally dissipates.")
            alert("You approach the center of the temple and reach out for the vessel but stop short. You feel a powerful darkness emanating from the thing and behind that a deep sadness.");
            alert("This artefact has been corrupted and you know that it could be used for great evil but would you fight for that evil or against it? After some pondering, you use a thick cloth to get the vessel into your bag. Perhaps it would be better to bring it to an enchanter than mess with it yourself.");

            playerScore += 60;
            playerItems.push("Mystery artefact")
            alert("Gold: " + playerGold + " Score: " + playerScore); // add "Your items: " +playerItems+ "
        }
        else if(whatRiverQuest.toLowerCase() === "no"){
            alert("Black smoke surrounds you and you find yourself in a dark misty room.");
            alert("You try to reach for your weapons but the demon sense your intent.");
            alert("' "+playerName+ ", you are a fool!' His voice tears at your skull and you reel in pain.");
            alert("'You dare go against me in my own seat of power? You have make a grave mistake this day!' In a burst of flame, his massive form vanishes into the darkness. 'To me, my servants! Grind this mortal into the stone and use it to decorate my palace.'");

            //Include a task here, the player has to defeat the prime demon (the boss) or all his servants

            alert("You send one final blow to the demon boss.");
            alert("As the wave hits the prime demon, his aura dissipates and a scream pierces your mind. HIs legs buckle underneath him and he collapses on the floor, crashing into shards of stone. As this happens the screaming stops and the palace grows oddly quiet.");
            alert("Next, the only sensible thing left to does loot the place and make your way back.");

            playerGold += 50;
            playerScore += 60;
            alert("Gold: " + playerGold + " Score: " + playerScore);
        }
}
//---------------------------------------------------------------------------------------

    //Stage Three, welcome player to the DAGGER FOREST
    else if(whereWilderness.toLowerCase() === "dagger forest") {
        //Display descriptive about the place
        alert("The Dagger Forest sits in the broad angle between the East Road and the Stone Road. It is known as a hideout for bandits seeking to prey upon traffic coming to and from the Capital along the East Road.");

        // prompt player to pick a number from 0-9 which would randomly give him a QUEST from DAGGER FOREST
        var randomNum = prompt("Pick a number from 0 - 9");

        //if player gives invalid input: this will be shown
        while(randomNum > 9){
            alert("Invalid. Please pick a number from 0 - 9");
            var randomNum = prompt("Pick a number from 0 - 9");
        }

            var whatForestQuest = Math.floor(Math.random() * randomNum);
            if(whatForestQuest%2 === 0){
                alert("You are walking through the forest and you spotted a shade of purple piece of fabric torn by a tree branch. It wasn’t much, but it was everything to you.");
                alert("You pick that trail and followed it until you were enveloped in a thick, lingering fog. You lost the trail, but you are determined to find it and take revenge on the bandits who destroyed your village.");
                alert("The fog seems to be sapping your strength as you stumble through it, one painful step at a time.");
                playerLife -= 10;
                alert("Just when you think you can’t make it any farther, however, you find a hidden cache of supplies marked with the purple emblem of your quarry. You quickly open the cache and find a detailed map of the area with precise instructions on navigating your way to the camp. You snatch it up and flee off into the trees, away from the fog. With this map, you feel your quest is finally nearing its end.");
                playerItems.push("Map of Bandit Camp");
            }
            else{
                alert("It has been an uneventful set of days in Gloomhaven, but you are always looking for ways to help those in need. You hear from a source that a very valuable shipment of Orchid goods heading for the Capital is looking for guards, so you go to the Boiler District to offer your services.");
                alert("'We’ve been getting numerous reports from merchants coming in that the East Road is swimming with bandits,' the caravan leader says when you inquire about the job.");
                alert("'We will happily accept your help, no matter the cost you require.'");
            }

                var requireCost = prompt("How much do you want to be paid?", "Enter an value");
                if(parseInt(requireCost) > 500 ){
                    alert("'Sorry I dont have that much money on me, I will give you all I have.'");
                    playerGold += 500;
                }
                else if(requireCost === null){
                    alert("You humbly decline to be paid, and the man’s eyes go wide. All you want to do is prove your prowess and destroy the evil-doers of the world.");
                }
                else{
                  playerGold += parseInt(requireCost);
                }

                alert("You accepted your payment and prepare for the journey. Working together with 9 others, you helped to get the caravan clear of the Dagger Forest and then head out of the West Gate.");
                alert("The first day is uneventful.");
                alert("On the morning of the following day, you awake to yelling. 'Bandits are attacking! Defensive positions!'");

                //insert task to see if the player defeats the bandits
                //7 bandits, use

                alert("You reach for your bow and arrows. With confidence that your group clearly outnumbers the bandits; you started to take out every bandit");
                alert("The caravan was intact and nothing was stolen. The remaining merchants were happy that you kill all 7 bandits and the goods are safe.");
                alert("Following that, you loot and steal from the bandits");

                playerGold += 210;

                if(parseInt(requireCost) > 500){
                    playerScore += 20;
                }
                else if(requireCost === null){
                    playerScore += 80;
                }
                else{
                    playerScore += 40;
                }
                alert("Gold: " + playerGold + " Score: " + playerScore);

    }
}
