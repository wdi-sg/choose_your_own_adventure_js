// put code here!

function roll() {
    return Math.floor(Math.random() * 10) + 1;
}

//Getting player name
var playerName = prompt("Hello there! What is your name?");
alert("Hello " + playerName + "! \nWelcome to WASTE WORLD!")

//Restart Game function
// var restart = function() {
//     var playAgain = prompt("Would you like to play again? (Y)Yes or (N)No?")
//     if (playAgain.toLowerCase == "y") {
//         Program.restart();
//     } else {
//         alert("Thank you for playing.")
//     }
// }

//Choose an experience.
var experience = prompt(" So... " + playerName + "! What would you like to do in Waste World?\n Would you like \na (L)Leisurely Tour or \nan (A)Action Adventure?")
// var promptText = "Would you like a (L)Leisurely Tour or an (A)Action Adventure?";
// var experience = prompt(promptText);
// while(experience.toLowerCase() !== "l" || experience.toLowerCase() !== "a") {
//   experience = prompt("Sorry we didn't get that.\n"+promptText);
//   break;
// } 

 
    //Leisurely Tour and Action Adventure Options
    if (experience.toLowerCase() == "l") {
        var tour = prompt("Would you like to visit \nthe (E)Eastern Outbacks, \nthe (S)Southern Wastelands or \nthe (N)Northern Barrens?");
            //Leisurely Tour
        //Tour of the East
            //Admire landscape of the East. Head back to start.
            if (tour.toLowerCase() == "e") {
                alert("You treked an hour to the Eastern Outbacks where you found... \na poisonous snake... \nby stepping on it... \nIt took you another 6 hours to limp, hobble and crawl back to town for medical attention. \nThere goes your day in Waste World.")
                alert("GAME OVER");
            }
        //Tour of the South
            //Admire landscape of the South. Head back to Start.
            else if (tour.toLowerCase() == "s") {
                alert("You treked an hour to the Southern Wastelands to find... \na landfill. \nYou also managed to fall into a pit of liquified garbage and spend the rest of the day cleaning yourself off.");
                alert("GAME OVER");
            }
        //Tour of the North
            //Admire landscape of the North. Head back to Start.
            else if (tour.toLowerCase() == "n") {
                alert("You treked over four hours to the Nothern Barrens. \nThe land here is... \nwell... \nbarren. \nWhat did you expect? \nYou spend the rest of the day treking back to town.");
                alert("GAME OVER");
            }

    //Action Adventure
    } else if (experience.toLowerCase() == "a") {
        var actionAdventure = prompt("Action eh? Do you fancy yourself as \na (T)Tourist, \na (S)Sheriff or... \nan (O)Outlaw?");
    }       //As an Outlaw
            if (actionAdventure.toLowerCase() == "o") {
            var outlawActivity = prompt("OUTLAW! Time to indulge your darker side! What dastardly deed takes your fancy? \n(R)Robbing a Bank or \nStarting a (T)Tavern Brawl?");
            }   //Rob a Bank -> Steal Gold or Cash.
                if (outlawActivity.toLowerCase() == "r") {
                 var robBank = prompt("You bust into the bank, guns a blazin and you head straight for the\n (G)old Bars \nStacks of (C)Cash");   
                } if (robBank.toLowerCase() == "g") {
                    var loot = "gold";
                } else if (robBank.toLowerCase() == "c") {
                    loot = "cash";
                }

                var escapeMethod = prompt("You grab the " + loot + " and fire a shot in the air. \n\nRunning outside, you see the Town Sheriff running towards the bank. \n\nDo you: \n(R)Run for it, or do you \n(S)Steal a horse?")
                        //Make a run for it
                            //Stole Cash -> Get away.
                            if (escapeMethod.toLowerCase() == "r" && loot == "cash") {
                                alert("You decide to high tail it out of here on foot. Thank goodness you grabbed something lightweight.\nCongratulations! You are now rich! \nDisclaimer: \nWasteWorld Cash has no value as real currency and is only legal tender in the WasteWorld gift store. \nWasteWorld does not condone crime or violence outside this experience.");
                            } 
                            //Stole Gold 
                              else if (escapeMethod.toLowerCase() == "r" && loot == "gold") {
                                //Overburdened - Gunfight with Sheriff. (Roll Random Number)
                                } alert("Oh no! The gold you stole is slowing you down. \n\nThe Sheriff gets within shooting distance and draws his gun... \n\nCLICK TO SEE IF YOU SURVIVE...");
                                  var roll = roll();  
                                    //Win (>5) -> Get Away.
                                    //Lose (<=5) -> Game Over
                                    if (roll > 5) {
                                      alert("You hear a gunshot and feel the bullet whizz past your ear. \n\nYou keep running as fast as you can with the gold and manage to outrun the Sheriff who stopped to reload. \n\nCongratulations! You are now rich! \n\nDisclaimer: \nWasteWorld Gold can be exchanged for WasteWorld Cash in the WasteWorld Gift Shop. \nWasteWorld Cash has no value as real currency and is only legal tender in the WasteWorld gift store. \nWasteWorld does not condone crime or violence outside this experience.");
                                      alert("GAME OVER");
                                    } else { 
                                        alert("You hear a gunshot and feel a sharp pain in your right leg as you stumble and crash into the dirt. The last thing you see is the Sheriff looming above you as he cocks his gun and points it in your face.");
                                        alert("GAME OVER"); 
                                    }
 
                        //Steal a horse
                            //Roll Random Number
                                //(>5) Success! -> Get Away.
                                //(<=5) Sheriff shoots the horse -> Game Over.

                //Tavern Brawl
                // else if (outlawActivity.toLowerCase() == "t") {
                //     alert ("You make your way to the Tavern and push open the swinging doors menacingly. \nImmediately, several men playing cards at a table stand up and you recognize their leader... \nThe Notorius... BLACK BART!");
                // }
                    //Shootout with Black Bart (Roll random number)
                        //Win (>5) -> The town belongs to you now.
                        //Lose (<=5) -> Game Over   

            //As Sheriff
            if (actionAdventure.toLowerCase() == "s") {
            var outlawActivity = prompt("Howdy Sheriff! Time to indulge your hero fantasy and protect the townsfolks. Where should we start fighting crime? \nCheck on the (B)Bank or \nVisit the (T)Tavern");
            }
                //Check on the Bank -> Robbery in progress!
                        //Reach for a weapon (Roll random number)
                          //(10) Ironman suit > Robbers Give up.
                            //(4-9) 6-Shooter > Gunfight with Robbers (Roll again)
                                // (>5) Shoots robber. Town Hero.
                                // (<=5) Gets shot. -> Game Over.
                            //(1-3) Pulls out worthless item. -> Gets shot -> Game Over.

                    //Check on the Tavern -> Tavern Brawl in progress!
                          //Intervene
                            //Get Shot -> Game Over

                          //Back away quietly
                            //Close shave. Try something else. -> Head back to Start.

            //As a Tourist
             if (actionAdventure.toLowerCase() == "t") {
            var outlawActivity = prompt("Howdy Visitor! Come to experience the Wild West? Be careful where you poke your head. \nWhere would you like to visit? \nThe (B)Bank or \nThe (T)Tavern");
            }
                //Go to the Bank
                    //Robbery in progress!
                        //Try to escape (Roll random number)
                            //(>5) Close shave. Try something else. -> Head back to Start.
                            //(<=5) Get shot in gunfight between Sheriff and Robbers. -> Game Over

                //Visit the Tavern
                    //Order a Drink
                        //Sasperilla
                            //Enjoy the drink and have a great time listening to the lively piano.

                        //Whiskey
                            //Drink is so strong it knocks you out. -> Game Over.

                        //Tequila
                            //Get tipsy and start a Tavern Brawl (Roll random number)
                                //(>5) Come out the winner of the fight. Earns respect of town.
                                //(<=5) Gets knocked unconscious. -> Game Over.

                    //Join a Dice Game (Roll random number)
                        //(10) Win some money!
                        //(4-9) Get into a Tavern Brawl with sore loser. 
                            //(>5) Win the fight! Get bounty reward.
                            //(<=5) Lose the fight. -> Game Over
                        //(1-3) Lose all your money. -> Game Over

                //Visit the Church
                    //Nothing happens. -> Revisit Citizen options.