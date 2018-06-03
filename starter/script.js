// put code here!

//GLOBAL GAME FUNCTION DECLARATIONS

//Greeting function
function greet() {
   alert("Hello " + playerName + "! \nWelcome to WasteWorld!");
}

//Roll Dice Function
function roll() {
    return Math.floor(Math.random() * 10) + 1;
}

//Function to stop the script from running.
function end() {
    end
}

//Function to flash a GAME OVER message.
function gameOver() {
    alert("GAME OVER");
}

//Hint Function
function hint() {
    alert("Hint: You don't come to WasteWorld to enjoy the scenery.");
    gameOver();
    end();
}

//Function to inform player of winnings
function rich() {
    alert("Congratulations " + playerName + "! You are now rich!");
}

//Function to flash an end game disclaimer.
function disclaimer() {
    alert("Disclaimer: \nWasteWorld gold has no value as real currency and is only legal tender in the WasteWorld gift store. \n\nWasteWorld does not condone crime or violence outside this experience.");
}


//>>>>>>>>>GAME STARTS HERE

//Getting player name
var playerName = prompt("Hello there! What is your name?");
greet();

//Choose an experience.
var experience = prompt(" So... " + playerName + "! What would you like to do in WasteWorld?\n Would you like to: \nBe a (T)Tourist, (S)Sheriff or (O)Outlaw?");

    //Leisurely Tour and Action Adventure Options
    if (experience.toLowerCase() == "t") {
        var tour = prompt("Prefer the scenic route eh? \n\nWould you like to visit \nthe (E)Eastern Outbacks, \nthe (S)Southern Wastelands or \nthe (N)Northern Barrens?");
        //Tour of the East
            //Admire landscape of the East. Head back to start.
            if (tour.toLowerCase() == "e") {
                alert("You treked an hour to the Eastern Outbacks where you found... \na poisonous snake... \nby stepping on it... \nIt took you another 6 hours to limp, hobble and crawl back to town for medical attention. \nThere goes your day in Waste World.")
                hint();
            }
        //Tour of the South
            //Admire landscape of the South. Head back to Start.
            else if (tour.toLowerCase() == "s") {
                alert("You treked an hour to the Southern Wastelands to find... \na landfill. \nYou also managed to fall into a pit of liquified garbage and spend the rest of the day cleaning yourself off.");
                hint();
            }
        //Tour of the North
            //Admire landscape of the North. Head back to Start.
            else if (tour.toLowerCase() == "n") {
                alert("You treked over four hours to the Nothern Barrens. \nThe land here is... \nwell... \nbarren. \nWhat did you expect? \nYou spend the rest of the day treking back to town.");
                hint();
            }

    //Action Adventure
    }   else if (experience.toLowerCase() == "o") {
        var outlawActivity = prompt("OOH! AN OUTLAW! Want to indulge your darker side Eh? \n\nWhat dastardly deed takes your fancy? \n(R)Robbing a Bank or \nStarting a (T)Tavern Brawl?");
            }   //Rob a Bank
                if (outlawActivity.toLowerCase() == "r") {
                    alert("You bust into the bank, guns a blazin and you head straight for the Gold Bars.");   
                    var escapeParameters = prompt("You fill a sack with gold and make a dash for the door. \n\nOutside, you see the Town Sheriff running towards the bank. \n\nDo you: \n(R)Run for it, or do you \n(S)Steal a horse?")
                        if (escapeParameters.toLowerCase() == "r") {
                        alert("Oh no! The gold you stole is slowing you down. \n\nThe Sheriff gets within shooting distance and draws his gun...");
                            alert("You've entered a gunfight. \n\nRoll a 6 or more to win.");
                            var gunfightRoll = roll();
                            alert("You've rolled a " + gunfightRoll + "!");
                            if (gunfightRoll > 5) {
                            alert("You hear a gunshot and feel the bullet whizz past your ear. \n\nYou keep running as fast as you can with the gold and manage to outrun the Sheriff who stopped to reload.");
                            rich()
                            disclaimer();
                            gameOver();
                            end();
                            } else if (gunfightRoll <=5) { 
                            alert("You hear a gunshot and feel a sharp pain in your right leg as you stumble and crash into the dirt. The last thing you see is the Sheriff looming above you as he cocks his gun and points it in your face.");
                            gameOver();
                            end(); 
                            }  
                        } else if (escapeParameters.toLowerCase() == "s") {
                            alert("You decide to steal a horse hitched right outside the bank. \nAs you try to mount the horse, it suddenly rears up on its hind legs...");
                            alert("You've encounted a Bucking Buckaroo. Roll a 6 or more to successifully mount the horse.")
                            var mountHorseChance = roll();
                            alert("You rolled a " + mountHorseChance + "!");
                            if (mountHorseChance >5) {
                                alert("Good thing you had one foot in the stirrups. You hang on to the saddle and manage to hoist yourself on it and within seconds, you are riding like the wind into the sunset with your hard earned gold.")
                                rich();
                                disclaimer();
                                gameOver();
                                end();
                            } else if (mountHorseChance <= 5) {
                                alert("You get thrown off the horse and as you struggle to stand up, it aims a well aimed kick at your face. \nThe last thing you see is the Sheriff looming over you as he cocks his gun and points it at your head.");
                                gameOver();
                                end();
                            }
                        }

                //Tavern Brawl
                } else if (outlawActivity.toLowerCase() == "t") {
                    alert ("You make your way to the Tavern and push open the swinging doors menacingly. \nImmediately, several men playing cards at a table stand up.");
                    var inciteBrawl = prompt("Do you: \n(I)Insult them? or \n(S)Start shooting?");
                        if (inciteBrawl.toLowerCase() == "i") {
                        alert("You shout: "+"Yer yellow pickin slimeballs! I have saddle sores tougher than you!");
                        var reaction = prompt("The men all pull out their guns and point them at you. \n\nDo you: \n(L)Laugh it off? Or do you: \n(H)Hold your ground?");
                            if (reaction.toLowerCase() == "l") {
                                alert("You laugh nervously and tell the men: "+"Whoa. I'm just kidding guys. How about I buy everyone here a round of drinks?");
                                alert("They don't buy it and pump you full of bullets.");
                                alert("Don't insult and laugh at people holding guns pointed at you.");
                                gameOver();
                                end();
                            } else if (reaction.toLowerCase() == "h") {
                                alert("You stand your ground and give them your most fearsome look.");
                                alert("You have entered a standoff. \n\nRoll a 6 or more if you want to live");
                                var standoffRoll = roll();
                                alert("You've rolled a " + standoffRoll + "!");
                                if (standoffRoll > 5 ) {
                                    alert("After a tense minute, the men suddenly burst out laughing! \nYour expression has been the funniest they have ever seen. \nYou have diffused the tensed atmosphere in the tavern.");
                                    alert("The men liked you so much that they decided to buy you a round of drinks. \nYou spend a pleasant afternoon drinking whiskey and playing poker with the notorious Black Bart and his gang who have been holding the tavern hostage.");
                                    alert("Black Bart gave you a nickname but on the plus side, you win a small fortune from the owner of the tavern.")
                                    playerName = "Shiteface"
                                    rich();
                                    disclaimer();
                                    gameOver();
                                    end();
                                } else if (standoffRoll <= 5 ) {
                                    alert("The men open fire and pump you full of bullets.");
                                    alert("You can't stop bullets with your face.");
                                    gameOver();
                                    end();
                                }
                            }
                        } else if (inciteBrawl.toLowerCase() == "s") {
                        alert("You pull out your trusty six-shooter and fire a shot into the air. \n\nThe men pull out their guns in response and aims them at you...");
                            alert("You've entered a gunfight. \n\nRoll a 6 or more to win.");
                            var tavernGunfightRoll = roll();
                            alert("You've rolled a " + tavernGunfightRoll + "!");
                            if (tavernGunfightRoll > 5) {
                                alert("You flip over a table and duck behind it for cover as it gets riddled with bullets. \n\nYou wait till the hail of bullets stop and you pump a bullet into each shooters with surprising accuracy while they are reloading.");
                                alert("The entire tavern erupts in cheers and whistles! \n\nYou have just rescued them from the baddest gang in the county who had been holding the tavern ransome!");
                                alert("The Mayor arrives and hands you your bounty for taking down the baddies: A big sack of gold!");
                                rich()
                                disclaimer();
                                gameOver();
                                end();
                            } else if (tavernGunfightRoll <=5) { 
                                alert("You fumble with your gun and drops it, discharging a round right into your leg as it hits the floor.");
                                alert("As you grab your wounded leg in pain, the gunmen laugh hysterically as they pump bullet after bullet into you.")
                                gameOver();
                                end(); 
                            }
                        }                         
                    
                }

                
            
        
        
            
            
        
            