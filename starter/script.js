// put code here!

//Getting player name
var playerName = prompt("Hello there! What is your name?");
alert("Hello " + playerName + "! \nWelcome to WASTE WORLD!")

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
            var outlawActivity = prompt("OUTLAW! Time to indulge your darker side! What dastardly deed takes your fancy? \n(R)Robbing a Bank or \nStarting a (T)Tavern Brawl?")
            }
                //Rob a Bank -> Steal Gold or Cash.
                if (outlawActivity.toLowerCase() == "r") {
                 var robBank = prompt("You bust into the bank, guns a blazin and you head straight for the\n (G)old Bars \nStacks of (C)Cash")   
                }
                        //Make a run for it
                            //Stole Gold 
                                //Overburdened - Gunfight with Sheriff. (Roll Random Number)
                                    //Win (>5) -> Get Away.
                                    //Lose (<=5) -> Game Over
                            //Stole Cash -> Get away.

                        //Steal a horse
                            //Roll Random Number
                                //(>5) Success! -> Get Away.
                                //(<=5) Sheriff shoots the horse -> Game Over.
            
                //Tavern Brawl
                    //Shootout with Black Bart (Roll random number)
                        //Win (>5) -> The town belongs to you now.
                        //Lose (<=5) -> Game Over   

            //As Law Enforcement
                //Patrol the Streets
                    //Check on the Bank
                        //Robbery in progress!
                            //Reach for a weapon (Roll random number)
                                //(10) Ironman suit > Robbers Give up.
                                //(4-9) 6-Shooter > Gunfight with Robbers (Roll again)
                                    // (>5) Shoots robber. Town Hero.
                                    // (<=5) Gets shot. -> Game Over.
                                //(1-3) Pulls out worthless item. -> Gets shot -> Game Over.

                    //Check on the Tavern
                        //Brawl in progress!
                            //Intervene
                                //Get Shot -> Game Over

                            //Back away quietly
                                //Close shave. Try something else. -> Head back to Start.

            //As a Citizen
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