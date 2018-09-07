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
    var restart = prompt("GAME OVER \n\nWould you like to play again? (Y/N)");
    if (restart.toLowerCase() == "y") {
        window.location.reload()
    } else end();
}

//Function to give a Hint.
function hint() {
    alert("Hint: You don't come to WasteWorld to enjoy the scenery, "+playerName+".");
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

    //Tourist Sequence -> All Dead Ends (Gag)
    if (experience.toLowerCase() == "t") {
        var tour = prompt("Prefer the scenic route eh "+playerName+"? \n\nWould you like to visit \nthe (E)Eastern Outbacks, \nthe (S)Southern Wastelands or \nthe (N)Northern Barrens?");
        //Tour of the East
            //Admire landscape of the East -> Dead End.
            if (tour.toLowerCase() == "e") {
                alert("You treked an hour to the Eastern Outbacks where you found... \na poisonous snake... \nby stepping on it... \nIt took you another 6 hours to limp, hobble and crawl back to town for medical attention. \nThere goes your day in Waste World.")
                hint();
                gameOver();
            }
        //Tour of the South
            //Admire landscape of the South -> Dead End.
            else if (tour.toLowerCase() == "s") {
                alert("You treked an hour to the Southern Wastelands to find... \na landfill. \nYou also managed to fall into a pit of liquified garbage and spend the rest of the day cleaning yourself off.");
                hint();
                gameOver();
            }
        //Tour of the North
            //Admire landscape of the North -> Dead End.
            else if (tour.toLowerCase() == "n") {
                alert("You treked over four hours to the Nothern Barrens. \nThe land here is... \nwell... \nbarren. \nWhat did you expect? \nYou spend the rest of the day treking back to town.");
                hint();
                gameOver();
            }

    //Outlaw Sequence
    }   else if (experience.toLowerCase() == "o") {
        var outlawActivity = prompt("A Outlaw eh " +playerName+"? Want to indulge your darker side Eh? \n\nWhat dastardly deed takes your fancy? \n(R)Robbing a Bank or \nStarting a (T)Tavern Brawl?");
                //Rob a Bank
                if (outlawActivity.toLowerCase() == "r") {
                    alert("The bank was poorly guarded. Just an old timer who has seen better years. You overpower him easily, bust into the bank, guns a blazin and you head straight for the Gold Bars.");   
                    var escapeParameters = prompt("You fill a sack with gold and make a dash for the door. \n\nOutside, you see the Town Sheriff running towards the bank. \n\nDo you: \n(R)Run for it, or do you \n(S)Steal a horse?")
                        //Escape on foot -> Gunfight
                        if (escapeParameters.toLowerCase() == "r") {
                        alert("Oh no! The gold you stole is slowing you down. \n\nThe Sheriff gets within shooting distance and draws his gun...");
                            //Gunfight Roll
                            alert("You've entered a gunfight. \n\nRoll a 6 or more to win.");
                            var gunfightRoll = roll();
                            alert("You've rolled a " + gunfightRoll + "!");
                            //Gunfight Win
                            if (gunfightRoll > 5) {
                            alert("You hear a gunshot and feel the bullet whizz past your ear. \n\nYou keep running as fast as you can with the gold and manage to outrun the Sheriff who stopped to reload.");
                            rich()
                            disclaimer();
                            gameOver();               
                            //Gunfight Lose
                            } else if (gunfightRoll <=5) { 
                            alert("You hear a gunshot and feel a sharp pain in your right leg as you stumble and crash into the dirt. The last thing you see is the Sheriff looming above you as he cocks his gun and points it in your face.");
                            gameOver();
                            }  
                        //Escape by stealing a horse -> Horse mounting challenge.
                        } else if (escapeParameters.toLowerCase() == "s") {
                            alert("You decide to steal a horse hitched right outside the bank. \nAs you try to mount the horse, it suddenly rears up on its hind legs...");
                            //Horse Mounting Roll
                            alert("You've encounted a Bucking Buckaroo. Roll a 6 or more to successifully mount the horse.")
                            var mountHorseChance = roll();
                            alert("You rolled a " + mountHorseChance + "!");
                            //Horse Mounting Win
                            if (mountHorseChance >5) {
                                alert("Good thing you had one foot in the stirrups. You hang on to the saddle and manage to hoist yourself on it and within seconds, you are riding like the wind into the sunset with your hard earned gold.")
                                rich();
                                disclaimer();
                                gameOver();
                            //Horse Mounting Lose
                            } else if (mountHorseChance <= 5) {
                                alert("You get thrown off the horse and as you struggle to stand up, it aims a well aimed kick at your face. \nThe last thing you see is the Sheriff looming over you as he cocks his gun and points it at your head.");
                                gameOver();
                            }
                        }

                //Tavern Brawl
                } else if (outlawActivity.toLowerCase() == "t") {
                    alert ("You make your way to the Tavern and push open the swinging doors menacingly. \nImmediately, several men playing cards at a table stand up.");
                    //Incite by Insulting or Shooting
                    var inciteBrawl = prompt("Do you: \n(I)Insult them? or \n(S)Start shooting?");
                        //Insult Sequence
                        if (inciteBrawl.toLowerCase() == "i") {
                        alert("You shout: "+"Yer yellow pickin slimeballs! I have saddle sores tougher than you!");
                        var reaction = prompt("The men all pull out their guns and point them at you. \n\nDo you: \n(L)Laugh it off? Or do you: \n(H)Hold your ground?");
                            //Laugh it off -> Game over.
                            if (reaction.toLowerCase() == "l") {
                                alert("You laugh nervously and tell the men: "+"Whoa. I'm just kidding guys. How about I buy everyone here a round of drinks?");
                                alert("They don't buy it and pump you full of bullets.");
                                alert("Don't insult and laugh at people holding guns pointed at you.");
                                gameOver();
                            //Stand your ground -> Standoff
                            } else if (reaction.toLowerCase() == "h") {
                                alert("You stand your ground and give them your most fearsome look.");
                                //Standoff Roll
                                alert("You have entered a standoff. \n\nRoll a 6 or more if you want to live");
                                var standoffRoll = roll();
                                alert("You've rolled a " + standoffRoll + "!");
                                //Standoff Win
                                if (standoffRoll > 5 ) {
                                    alert("After a tense minute, the men suddenly burst out laughing! \nYour expression has been the funniest they have ever seen. \nYou have diffused the tensed atmosphere in the tavern.");
                                    alert("The men liked you so much that they decided to buy you a round of drinks. \nYou spend a pleasant afternoon drinking whiskey and playing poker with the notorious Black Bart and his gang who have been holding the tavern hostage.");
                                    alert("Black Bart gave you an unpleasant nickname but on the plus side, you win a small fortune from one of his men.")
                                    //Easter Egg - Horrible Nickname
                                    playerName = "Shiteface"
                                    rich();
                                    disclaimer();
                                    gameOver();
                                //Standoff Lose
                                } else if (standoffRoll <= 5 ) {
                                    alert("The men open fire and pump you full of bullets.");
                                    alert("You can't stop bullets with your face.");
                                    gameOver();
                                }
                            }
                        //Incite Brawl by Shooting
                        } else if (inciteBrawl.toLowerCase() == "s") {
                        alert("You pull out your trusty six-shooter and fire a shot into the air. \n\nThe men pull out their guns in response and aims them at you...");
                            //Tavern Gunfight
                            alert("You've entered a gunfight. \n\nRoll a 6 or more to win.");
                            var tavernGunfightRoll = roll();
                            alert("You've rolled a " + tavernGunfightRoll + "!");
                            //Tavern Gunfight Win
                            if (tavernGunfightRoll > 5) {
                                alert("You flip over a table and duck behind it for cover as it gets riddled with bullets. \n\nYou wait till the hail of bullets stop and you pump a bullet into each shooters with surprising accuracy while they are reloading.");
                                alert("The entire tavern erupts in cheers and whistles! \n\nYou have just rescued them from the baddest gang in the county who had been holding the tavern ransome!");
                                alert("The Mayor arrives and hands you your bounty for taking down the baddies: A big sack of gold!");
                                rich()
                                disclaimer();
                                gameOver();
                            //Tavern Gunfight Lose
                            } else if (tavernGunfightRoll <=5) { 
                                alert("You fumble with your gun and drops it, discharging a round right into your leg as it hits the floor.");
                                alert("As you grab your wounded leg in pain, the gunmen laugh hysterically as they pump bullet after bullet into you.")
                                gameOver();
                            }
                        }
                    }

   //Sheriff Sequence
    }   else if (experience.toLowerCase() == "s") {
        alert("Howdy Sheriff " +playerName+"! Good thing you rode into town! \n\nSome varmint is robbing the bank and the notorious Black Bart has taken the tavern hostage!");
        var sheriffActivity = prompt("What will it be Sheriff? \n\nDeal with the (B)Bank Robbery, or \nConfront Black Bart in the (T)Tavern?");
        
        //Deal with Bank Robbery
        if (sheriffActivity.toLowerCase() == "b") {
            alert("You head over to the bank and see that the old guard has been overpowered and tied up outside.");
            //Free the guard or be the hero?
            var robberTrap = prompt("Do you (F)ree the guard, or do you (A)mbush the robber yourself?");
            //Free the guard.
            if (robberTrap.toLowerCase() == "f") {
                alert("You untie the guard. He is old, and has seen better days. He doesn't seem to be much help to you.");
                alert("Suddenly, you hear a gunshot and the robber comes running out of the bank. You pull out your gun and run towards him but he sees you and tries to steal a horse hitched outside the bank.");
                //Shoot the robber or shoot the horse?
                var shootingDecision = prompt("Do you shoot the (R)Robber, or do you shoot the (H)Horse?");
                //Shoot the Robber
                if (shootingDecision.toLowerCase() == "r"){
                    alert("You stopped and aimed carefully at the robber, allowing him to use the time to mount the horse.  You pull the trigger... and missed... \n\nThe gunshot spooked the horse, making it run faster, and in return, making the robber's escape a lot faster.");
                    alert("You should have shot the horse.");
                    gameOver();
                //Shoot the Horse
                } else if (shootingDecision.toLowerCase() == "h") {
                    alert("Without breaking pace, you point your gun in the general direction of the horse and pull the trigger. You missed... but the gunshot spooked the horse and it reared up, throwing the robber onto the ground.");
                    alert("The robber quickly gets up and draws his weapon...");
                    //Bank Robbery Gunfight Roll
                    alert("You have entered a gunfight. \n\nRoll a 6 or more to win.");
                    var robberyGunfightRoll = roll();
                    alert("You've rolled a " + robberyGunfightRoll + "!");
                    //Gunfight Win
                    if (robberyGunfightRoll > 5) {
                    alert("You both draw at the same moment. However, due to his recent fall from the horse, the robber is still seeing stars and misses the broad side of the barn behind you.");
                    alert("Your shot however, gets him squarely between the eyes. \n\nIT WAS EPIC! \n\nThe townsfolk erupts into cheers and whistles!");
                    alert("Besides gaining an awesome nickname, the Mayor arrives shortly and hands you your reward: A huge sack of gold!");
                    //Easter Egg - Awesome nickname.
                    playerName = "Super Duper Best Shot in the World";
                    rich()
                    disclaimer();
                    gameOver();               
                    //Gunfight Lose
                    } else if (robberyGunfightRoll <=5) { 
                    alert("You both draw at the same moment. However, due to his recent fall from the horse, the robber is still seeing stars and misses the broad side of the barn behind you.");
                    alert("Your shot misses too but that was your last bullet. As you struggle to reload your gun, the robber clears his head aims his weapon at you...");
                    alert("You shut your eyes as you hear a gunshot, bracing yourself for the red hot pellet of lead to rip through your body... \n\nbut it doesn't happen...");
                    alert("You open your eyes to see the robber falling to the ground with a bullethole between his eyes. \nYou hear a noise behind you and turn to see the old bank guard holding a smoking pistol. \nThat old man still got it in him.");
                    alert("The townsfolk erupt into cheers as they rush forward to lift the old guard upon their shoulders in celebration of their town hero! \nThe Mayor arrives shortly to present him with his reward: A huge sack of gold!");
                    alert("That's his retirement settled. \n\nYou, on the other hand, gets forgotten, probably only remembered as a useless Sheriff.");
                    gameOver();
                    }
                }
            //Ambush the robber by yourself.
            } else if (robberTrap.toLowerCase() == "a") {
                alert("You decide that the old timer has seen enough hardship for the day and you run to ambush the robber as he exits the bank. \nHowever, the robber sees you running towards him and tries to escape on a horse.");
                //Shoot the Robber or Shoot the Horse?
                var shootingDecisionTwo = prompt("Do you shoot the (R)Robber, or do you shoot the (H)Horse?");
                //Shoot the Robber
                if (shootingDecisionTwo.toLowerCase() == "r"){
                    alert("You stopped and aimed carefully at the robber, allowing him to use the time to mount the horse.  You pull the trigger... and missed... \n\nThe gunshot spooked the horse, making it run faster, and in return, making the robber's escape a lot faster.");
                    alert("You should have shot the horse.");
                    gameOver();
                //Shoot the Horse
                } else if (shootingDecisionTwo.toLowerCase() == "h") {
                    alert("Without breaking pace, you point your gun in the general direction of the horse and pull the trigger. You missed... but the gunshot spooked the horse and it reared up, throwing the robber onto the ground.");
                    alert("The robber quickly gets up and draws his weapon...");
                    //Bank Robbery Gunfight Roll
                    alert("You have entered a gunfight. \n\nRoll a 6 or more to win.");
                    var robberyGunfightRollTwo = roll();
                    alert("You've rolled a " + robberyGunfightRollTwo + "!");
                    //Gunfight Win
                    if (robberyGunfightRollTwo > 5) {
                    alert("You both draw at the same moment. However, due to his recent fall from the horse, the robber is still seeing stars and misses the broad side of the barn behind you.");
                    alert("Your shot however, gets him squarely between the eyes. \n\nIT WAS EPIC! \n\nThe townsfolk erupts into cheers and whistles!");
                    alert("The Mayor arrives shortly and hands you your reward: A huge sack of gold!");
                    rich()
                    disclaimer();
                    gameOver();               
                    //Gunfight Lose
                    } else if (robberyGunfightRollTwo <=5) { 
                    alert("You both draw at the same moment. However, due to his recent fall from the horse, the robber is still seeing stars and misses the broad side of the barn behind you.");
                    alert("Your shot misses too but that was your last bullet. As you struggle to reload your gun, the robber clears his head aims his weapon at you...");
                    alert("You see a flash of white... and then nothing as the robber's bullet enters your skull from between your eyes and out the back.");
                    gameOver();
                    }
                }
            }
        
        //Deal with Tavern Takeover
        } else if (sheriffActivity.toLowerCase() == "t") {
            alert("You arrive at the Tavern where a brawl is going on. From the looks of it, some outlaw wannabe had gone and started a standoff with Black Bart's gang.");
            var tavernAttack = prompt("Do you (T)Take advantage of the chaos to pick them off? Or do you (W)Wait and see how the situation turns out?");
            if (tavernAttack.toLowerCase() == "t") {
                alert("You decide the best time to attack is while they are distracted. You creep towards a window and peek in...");
                alert("You see a flash of white... and then nothing as a stray bullet enters your skull from between your eyes and out the back.");
                alert("Perhaps sneaking around during a gunfight wasn't the best idea.")
                gameOver();
            } else if (tavernAttack.toLowerCase() == "w") {
                alert("You decide that it might be better to let the bad guys kill each other and then deal with whoever emerges. It isn't long before the gunshots die down and Black Bart, the lone survivor stumbles out of the tavern, slightly injured.");
                alert("You nonchalently make your presence known with a little cough and Black Bart whips round to face you and reaches for his pistol...");
                //Black Bart Showdown Roll
                alert("You have entered a gunfight. \n\nRoll a 6 or more to win.");
                var bbShowdown = roll();
                alert("You've rolled a " + bbShowdown + "!");
                //Gunfight Win
                if (bbShowdown > 5) {
                alert("You both draw at the same moment. However, due to his recent gunfight in the tavern, Black Bart is still seeing stars and misses the broad side of the barn behind you.");
                alert("Your shot however, gets him squarely between the eyes. \n\nIT WAS EPIC! \n\nThe townsfolk erupts into cheers and whistles!");
                alert("The Mayor arrives shortly and hands you the Bounty on Black Bart: A huge sack of gold!");
                rich()
                disclaimer();
                gameOver();               
                //Gunfight Lose
                } else if (bbShowdown <=5) { 
                alert("You both draw at the same moment but Black Bart is one of the best gunslingers in the west and he was high on the adrenalin from his gunfight in the tavern.");
                alert("You see a flash of white... and then nothing as a bullet enters your skull from between your eyes and out the back.");
                gameOver();
                }
            }
        }
    }




                
            
        
        
            
            
        
            