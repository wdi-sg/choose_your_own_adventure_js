var playerScore = 0;
var continuePlaying = true;

var playerStats = {
    hp: 5,
    attack: 1,
    accuracy: 95,
    critical: 50
};

var enemyStats = [
{
    name : "Monster Dog",
    hp: 4,
    attack: 1,
    accuracy: 90,
    critical: 10
},
{
    name : "Monster Fish",
    hp: 3,
    attack: 2,
    accuracy: 90,
    critical: 10
},
{
    name : "Monster Bird",
    hp: 2,
    attack: 1,
    accuracy: 90,
    critical: 10
},
{
    name : "Monster Godzilla",
    hp: 20,
    attack: 2,
    accuracy: 80,
    critical: 20
}];

var addPlayerScore = function () {
    playerScore++;
    alert ("Ding! 1 point added to your game score!")
}

var displayPlayerScore = function (playerName) {
    alert ("Hey " + playerName + ", your score is: " + playerScore)
}

var healPlayer = function (player) {
    player["hp"] = player["hp"] + 2;

    return 2;
}

var fightEnemy = function (player, enemy) {
    var win = true;

    var randomEnemyIndex = Math.floor(Math.random() * enemy.length);
    var selectedEnemy = enemy[randomEnemyIndex];

    alert (selectedEnemy["name"] + " is charging towards you! Prepare to fight!");

    // keep the battle on as long as someone still has hp
    while (player["hp"] > 0 && selectedEnemy["hp"] > 0) {
        var playerFightAction = prompt(
            "Your HP: " + player["hp"] + "  --- Your Attack: " + player["attack"] +
            "\nEnemy HP: " + selectedEnemy["hp"] + "  --- Enemy Attack: " + selectedEnemy["attack"] +
            "\nWhat would you like to do?", "(A)ttack or (H)eal");

        // player turn
        if (playerFightAction.toLowerCase() === "a") {
            // player accuracy check
            if ( ((Math.floor(Math.random() * 100) + 1)  <= player["accuracy"]) ) {
                // player critical hit check
                if ( ((Math.floor(Math.random() * 100) + 1)  <= player["critical"]) ) {
                    selectedEnemy["hp"] = selectedEnemy["hp"] - player["attack"] * 2;
                    alert("[Player Action] You score a critical hit! The monster takes " + player["attack"] * 2 + " damage!");
                } else {
                    selectedEnemy["hp"] = selectedEnemy["hp"] - player["attack"];
                    alert("[Player Action] Swish! The enemy shout in pain! The monster takes " + player["attack"] + " damage!");
                }
            } else {
                alert("[Player Action] You missed your attack!");
            }
        } else if (playerFightAction.toLowerCase() === "h") {
            alert("[Player Action] Woot! You feel much better now! Your HP increase by " + healPlayer(player));

        } else {
            alert("[Player Action] You skip a turn for taking a wrong action.");
        }

        // enemy turn if it still has hp left
        if (selectedEnemy["hp"] > 0) {
            // enemy accuracy check
            if ( ((Math.floor(Math.random() * 100) + 1)  <= selectedEnemy["accuracy"]) ) {
                // enemy critical hit check
                if ( ((Math.floor(Math.random() * 100) + 1)  <= selectedEnemy["critical"]) ) {
                    player["hp"] = player["hp"] - selectedEnemy["attack"] * 2;
                    alert("[Enemy Action] The enemy scores a critical hit! You take " + selectedEnemy["attack"] * 2 + " damage!");
                } else {
                    player["hp"] = player["hp"] - selectedEnemy["attack"];
                    alert("[Enemy Action] The enemy charge at you and attack you! You take " + selectedEnemy["attack"] + " damage!");
                }
            } else {
                alert("[Enemy Action] The enemy missed its attack!");
            }
        }
    }

    // check the outcome of the battle
    if (player["hp"] > 0 && selectedEnemy["hp"] <= 0) {
        alert("[Battle Outcome] You won the battle!");
        win = true;

    } else if (selectedEnemy["hp"] > 0 && player["hp"] <= 0) {
        alert("[Battle Outcome] You got killed in the battle!");
        win = false;

    }

    return win;
}

//....................................................//

var playerName = prompt("What is your name?");

if (playerName.trim() === "") {
    alert("Your name sound weird. You shall not proceed! Game over!");
    continuePlaying = false;
}

while (continuePlaying === true) {
    var yearToGo = prompt("Nice to meet you, " + playerName + ". What year would you like to go to? (YYYY)");

    if (Number(yearToGo) === 0 || isNaN(yearToGo)) {
        alert("You try to be a fool and key in a invalid year. Now, the computer have gone haywire and you went into a limbo. Game over!");

    } else if (Number(yearToGo) >= 2015) {
        var whoToDealWith = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with (B)iff, or (G)riff? (B/G)", "Key in either B or G");

        if (whoToDealWith.toLowerCase() === "b") {
            var standOrRun = prompt("Hmmmmm, interesting. Biff is angry and has a cane. Do you (S)tand and fight, or (R)un away like a coward? (S/R)", "Key in either (S)tand and fight or (R)un away");

            if (standOrRun.toLowerCase() === "s") {
                if (fightEnemy(playerStats, enemyStats) === true) {
                    alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");

                    addPlayerScore();
                }
            } else if (standOrRun.toLowerCase() === "r") {
                alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");

            }
        } else if (whoToDealWith.toLowerCase() === "g") {
            var inOrOut = prompt("Griff is asking you if you are in, or out. What do you say? (I/O)","Key in either (I)n or (O)ut");

            if (inOrOut.toLowerCase() === "i") {
                alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");

            } else if (inOrOut.toLowerCase() === "o") {
                alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");

                    addPlayerScore();
            }
        }
    } else if (Number(yearToGo) >= 1985 && Number(yearToGo) <= 2014) {
        playerName = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");

        alert("Welcome to the future, " + playerName);
    } else if (Number(yearToGo) >= 1955 && Number(yearToGo) <= 1984) {
        var yesOrNoOrSet = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)","Key in either (Y)es, (N)o or (S)et her up with Geroge");

        if (yesOrNoOrSet.toLowerCase() === "y") {
                alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");

            } else if (yesOrNoOrSet.toLowerCase() === "n") {
                alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");

            } else if (yesOrNoOrSet.toLowerCase() === "s") {
                alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time");

                    addPlayerScore();

            }
    } else if (Number(yearToGo) < 1955) {
        var horsesOrMoonshineOrTrain = prompt("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)","Key in either (H)orses, (M)oonshine or (T)rain");

        if (horsesOrMoonshineOrTrain.toLowerCase() === "h") {
                alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");

            } else if (horsesOrMoonshineOrTrain.toLowerCase() === "m") {
                alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.");

            } else if (horsesOrMoonshineOrTrain.toLowerCase() === "t") {
                var takeOrLeave = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)", "(T)ake her or (L)eave her");

                    addPlayerScore();

                if (takeOrLeave.toLowerCase() === "t") {
                    alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.");

                        addPlayerScore();

                } else if (takeOrLeave.toLowerCase() === "l") {
                    alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");

                        addPlayerScore();

                }
            }
    }

    displayPlayerScore(playerName);

    playerContinue = prompt("Do you want to continue playing?", "(Y)es or (N)o");

    if (playerContinue.toLowerCase() === "y") {
        if (playerStats["hp"] <= 0) {
            playerStats["hp"] = 1;
        }
        continuePlaying = true;
    } else {
        continuePlaying = false;
    }

}