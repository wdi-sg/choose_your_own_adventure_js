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

//Function - Tame Horse
function tameHorse() {

} 
   
//Tavern Brawl Function
function tavernBrawl() {
    alert ("You make your way to the Tavern and push open the swinging doors menacingly. \nImmediately, several men playing cards at a table stand up.");
    var inciteBrawl = prompt("Do you: \n(I)Insult them? or \n(S)Shoot them?");
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
            }   //Rob a Bank -> Steal Gold or Cash.
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
                        }
                        else if (escapeParameters.toLowerCase() == "s") {
                            alert("You decide to steal a horse hitched right outside the bank. \nAs you try to mount the horse, it suddenly rears up on its hind legs. \nClick to find out what happens to you.");
                            alert("Roll a 6 or more to successifully tame the horse.")
                            var tameHorseChance = roll();
                            alert("You rolled a " + tameHorseChance + "!");
                            if (tameHorseChance >5) {
                            alert("Good thing you had one foot in the stirrups. You hang on to the saddle and manage to hoist yourself on it and within seconds, you are riding into the sunset with your hard earned gold.")
                            rich();
                            disclaimer();
                            gameOver();
                            end();
                            } else if (tameHorseChance <= 5) {
                            alert("You get thrown off the horse and as you struggle to stand up, it aims a well aimed kick at your face. \nThe last thing you see is the Sheriff looming over you as he cocks his gun and points it at your head.");
                            gameOver();
                            end();

                }//Tavern Brawl
                else if (outlawActivity.toLowerCase() == "t") {
                    tavernBrawl();
                }
            }
        }
        
        
            
            
        
            