// put code here!

//Getting player name
var playerName = prompt("Hello there! What is your name?");
alert("Hello "+playerName+"! Welcome to Waste World!")

//Choose an experienc.

    //Leisurely Tour
        //Tour of the East
            //Admire landscape of the East. Head back to start.

        //Tour of the South
            //Admire landscape of the South. Head back to Start.

        //Tour of the North
            //Admire landscape of the North. Head back to Start.

    //Action and Adventure
        //As an Outlaw
            //Rob a Bank
                //Steal Gold
                //Steal Cash
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

                //Join a Poker Game (Roll random number)
                    //(10) Win some money!
                    //(4-9) Get into a Tavern Brawl with sore loser. 
                        //(>5) Win the fight! Get bounty reward.
                        //(<=5) Lose the fight. -> Game Over
                    //(1-3) Lose all your money. -> Game Over

            //Visit the Church
                //Nothing happens. -> Revisit Citizen options.