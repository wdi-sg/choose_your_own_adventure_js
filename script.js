console.log("Week 1 Assignment");

var score = 0;
var updateScore = function() {
    score++;
    alert("Your score just went up by 1!")
}

var reportScore = function() {
    return score;
}

var useHealthPack = function(player) {
    player["health"] = player["health"] + 3;
}

//player object
var player = {
        health: 10,
        damage: 3,
        precision: 70
    };

//aliens object
var aliens = [
{
    name: "FaceHugger",
    health: 5,
    damage: 1,
    hit_precision: 40
},
{
    name: "Alien Runner",
    health: 10,
    damage: 3,
    hit_precision: 50
},
{
    name: "Alien Xenomorph",
    health: 15,
    damage: 4,
    hit_precision: 60
},
{
    name: "Alien Queen",
    health: 20,
    damage: 7,
    hit_precision: 70
}
    ];

var fightAliens = function(player, aliens) {

var playGame = prompt("Do you want to play the game? Y or N");

if(playGame.toLowerCase() === "y") {
    alert("Entering the building complex...");
    //random number generated to determine which alien the player will face off
        var alienIndex = Math.floor((Math.floor(Math.random()*10)) / 3);
        console.log(alienIndex);
        var selectedAlien = aliens[alienIndex];
        alert("Watch out! a " + selectedAlien["name"] + " has appeared!");

//game will continue as long as both player and alien are still alive, i.e health > 0
        while (player["health"] > 0 && selectedAlien["health"] > 0) {

        var playerAction = prompt("Player's Health: " + player["health"] +
                                    "\nAlien's Health: " + selectedAlien["health"] +
                                    "\nWhat do you want to do? (E)ngage the enemy or (H)eal yourself?");

            //Player's turn

        if(playerAction.toLowerCase() === "e") {

    // check if random number meets precision of player's attack, if yes then hit is successful on alien
            if((Math.floor(Math.random() * 100)) <= player["precision"]) {
            //deduct health of alien based on damage point of player
                selectedAlien["health"] = selectedAlien["health"] - player["damage"];
                alert("You have hit the alien!");
             //if random number do not meet precision of player's attack, then hit is a miss
            } else {
                alert("You missed the alien! It's going to strike you!")
                }

        }
        //if player selects 'h' for heal, the useHealthPack() function will be called to increase health points
        else if(playerAction.toLowerCase() === "h") {
            useHealthPack(player);
            alert("You have used the healthpack, your health increased by 3!")
        }
        //if player do not enter a valid answer, they would have skipped their turn
        else {
            alert("You have just skipped a turn");
        }

        //Alien's turn

        // check if random number meets precision of alien's attack, if yes then hit is successful on player
        if((Math.floor(Math.random() * 100)) <= selectedAlien["hit_precision"]) {
            //deduct health of alien based on damage point of alien
            player["health"] = player["health"] - selectedAlien["damage"];
            alert("The alien has hit you! Be careful!");
        //if random number do not meet precision of alien's attack, then hit is a miss
        } else {
            alert("The alien has missed its attack! Now if your turn to strike back!")
            }


        }

        //check to see if either the player or alien has been killed to determine the result
        if(player["health"] > 0 && selectedAlien["health"] <= 0) {
            alert("You won!");
        } else if (selectedAlien["health"] > 0 && player["health"] <= 0) {
            alert("You lost!");
        }



        //if user select no in the initial option, the game will stop
    } else if(playGame.toLowerCase() === "n") {
        alert("Thank you, we hope to see you again!");
    }


}


fightAliens(player, aliens);



//==================================================================================================================================//
var playFlag = true;
while(playFlag) {

var playerName = prompt("What is your name?");

 var yearEntered = prompt(`Nice to meet you, ${playerName}. What year would you like to go to? (YYYY)`);
 if(Number(yearEntered) === 0 || Number(yearEntered) === NaN) {
    alert("Well done, your invalid response has crashed the game, you happy now?!");
 } else if(Number(yearEntered) >= 2015) {
    var response_B_G = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)");
        if(response_B_G.toLowerCase() === "b") {
           var response_S_R =  prompt("Hmm, interesting. Bff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)");
           if(response_S_R.toLowerCase() === "s") {
            alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
            updateScore();
           } else if (response_S_R.toLowerCase() == "r") {
            alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
           }
        } else if(response_B_G.toLowerCase() === "g") {
            var response_I_O = prompt("Griff is asking you if you are in, or out. What do you say? (I/O)");
            if(response_I_O.toLowerCase() === "i") {
                alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
            } else if(response_I_O.toLowerCase() === "o") {
                alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
                updateScore();
            }
        }

    } else if(Number(yearEntered) >= 1985 && Number(yearEntered) <= 2014) {
        var name = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");
        if(name === "Calvin Klein") {
            alert("Welcome to the future, Calvin Klein.");
        }
    } else if(Number(yearEntered) >=  1955 && Number(yearEntered) <= 1984) {
        var response_Y_N_S = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)");

        if(response_Y_N_S.toLowerCase() === "y") {
            alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
        } else if(response_Y_N_S.toLowerCase() === "n") {
            alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
        } else if(response_Y_N_S.toLowerCase() === "s") {
            alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
            updateScore();
        }
    } else if(NUmber(yearEntered) < 1955) {
        var response_H_M_T = prompt("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)");
        if(response_H_M_T.toLowerCase() === "h") {
            alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
        } else if(response_H_M_T.toLowerCase() === "m") {
            alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.");
        } else if(response_H_M_T.toLowerCase() === "t") {
            var response_T_L = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)");
            if(response_T_L.toLowerCase() === "t") {
                alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.");
            } else if(response_T_L.toLowerCase() === "l") {
                alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
            }
        }
    }

    var playFlag  = prompt("Do you still want to play the game? (Y)es or (N)o");
        if(playFlag.toLowerCase() === "y") {
            playFlag = true;
            alert("Your final score for that round was: " + score);
        } else if(playFlag.toLowerCase() === "n") {
            playFlag = false;
            alert("Your final score for that round was: " + score);
        }

}