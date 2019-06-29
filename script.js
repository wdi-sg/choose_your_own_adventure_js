// constants
let ACTIONS = {
    NAME: /[a-zA-z ]+/g,
    //NUMBERS: /^[0-9]+$/g,
    ACTION: /^[0-9]$/g
};


// global variables
let name = "";
let position = "start";

let enemiesDefeated = 0;
let enemy;
let enemyHP;
let enemyEscapable;

let hp;
let weapon;

var dejavu;

// utility functions
let resetGame = function() {
    position = "entrance";

    enemiesDefeated = 0;
    enemy = "";
    enemyHP = 0;
    enemyEscapable = true;

    hp = 100;
    weapon = 0;

    dejavu = 1;
};
let displaySentence = function(id) {
    let sentence = story[id];

    let output = sentence.sentence + "\n\n";

    for (let i = 0; i < sentence.options.length; i++) {
        if (i === 0)
            output += "OPTIONS:\n";
        output += "> " + (i+1) + ": " + sentence.options[i][0] + "\n"
    }

    output += "\n\nHealth: " + hp + "HP | Weapon: " + weapons[weapon] + " | Enemies defeated: " + enemiesDefeated;

    output = output.replace("${NAME}", name).replace("${DEJAVU}", dejavu);

    display(output);
};
let displayFight = function(pDamage, eDamage) {
    let output;

    if (hp <= 0) {
        display("You died, press enter to try again.");
        return;
    }
    if (enemyHP <= 0) {
        display("You won! Press enter to continue.");
        return;
    }

    output = enemy + " | HP: " + enemyHP + "\n\n";

    if (pDamage === null)
        output += "ENEMY ENCOUNTERED: " + enemy;
    else if (pDamage > 0)
        output += attacks[Math.floor(Math.random()*attacks.length)];
    else if (pDamage < 0)
        output += (enemyEscapable ? "You attempted to escape but failed!" : "You can't escape this enemy!");
    else
        output += misses[Math.floor(Math.random()*misses.length)];
    output = output.replace("${ATTACKER}", name).replace("${DAMAGE}", pDamage).replace("${TARGET}", enemy);

    output += "\n\n";
    if (eDamage !== null) {
        if (eDamage > 0) {
            output += attacks[Math.floor(Math.random()*attacks.length)];
        } else {
            output += misses[Math.floor(Math.random()*misses.length)];
        }
    }
    output = output.replace("${ATTACKER}", enemy).replace("${DAMAGE}", eDamage).replace("${TARGET}", name);

    output += "\n\nOPTIONS:\n" +
        "> 1: Attack\n" +
        "> 2: Escape";

    output += "\n\nHealth: " + hp + "HP | Weapon: " + weapons[weapon] + " | Enemies defeated: " + enemiesDefeated;

    display(output);
};

// story
let story = {
    start: {
        sentence: "What is your name?",
        action: ACTIONS.NAME,
        options: []
    },
    entrance: {
        sentence: "SAMWELL: \"Alright ${NAME}! The nest of DROGON, are you ready to enter?\"",
        action: ACTIONS.ACTION,
        options: [
            ["Yes", "enter"],
            ["No", "not_ready"]
        ]
    },
    not_ready: {
        sentence: "SAMWELL: \"What?! Alright then, tell me when you're ready.\"",
        action: ACTIONS.ACTION,
        options: [
            ["I'm sorry let's try that again.", "entrance"],
            ["Nope definitely still not ready.", "still_not_ready"]
        ]
    },
    still_not_ready: {
        sentence: "You lie on the floor, rolling about in denial while SAMWELL looks at you in disgust. While you look back at him like this:\n" +
            "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
            "░░░░░░░░░░░░░▄▄▄▄▄▄▄░░░░░░░░░\n" +
            "░░░░░░░░░▄▀▀▀░░░░░░░▀▄░░░░░░░\n" +
            "░░░░░░░▄▀░░░░░░░░░░░░▀▄░░░░░░\n" +
            "░░░░░░▄▀░░░░░░░░░░▄▀▀▄▀▄░░░░░\n" +
            "░░░░▄▀░░░░░░░░░░▄▀░░██▄▀▄░░░░\n" +
            "░░░▄▀░░▄▀▀▀▄░░░░█░░░▀▀░█▀▄░░░\n" +
            "░░░█░░█▄▄░░░█░░░▀▄░░░░░▐░█░░░\n" +
            "░░▐▌░░█▀▀░░▄▀░░░░░▀▄▄▄▄▀░░█░░\n" +
            "░░▐▌░░█░░░▄▀░░░░░░░░░░░░░░█░░\n" +
            "░░▐▌░░░▀▀▀░░░░░░░░░░░░░░░░▐▌░\n" +
            "░░▐▌░░░░░░░░░░▄▀▀▀▀▄░░░░░░▐▌░\n" +
            "░░▐▌░░░░░░░░░░█░░░░█░░░░░░▐▌░\n" +
            "░░░█░░░░░░░░░░▀░░░░▀░░░░░░▐▌░\n" +
            "░░░▐▌░░░░░░░░░░░░░░░░░░░░░▐▌░\n" +
            "░░░░█░░░░░░░░░░░░░░░░░░░░░█░░\n" +
            "░░░░▐▌▀▄░░░░░░░░░░░░░░░░░▐▌░░\n" +
            "░░░░░█░░▀░░░░░░░░░░░░░░░░▀░░░\n" +
            "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
        action: ACTIONS.ACTION,
        options: [
            ["Okay, I'm sorry SAMWELL, I'm done, let's get back on track.", "enter"],
            ["ARGHHHHHHH", "run_away"]
        ]
    },
    run_away: {
        sentence: "You scream at the top of your lungs and run away, finally dropping into a pit and died.\n" +
            "\n" +
            "─▄▀▀▀▀▄─█──█────▄▀▀█─▄▀▀▀▀▄─█▀▀▄\n" +
            "─█────█─█──█────█────█────█─█──█\n" +
            "─█────█─█▀▀█────█─▄▄─█────█─█──█\n" +
            "─▀▄▄▄▄▀─█──█────▀▄▄█─▀▄▄▄▄▀─█▄▄▀\n" +
            "\n" +
            "─────────▄██████▀▀▀▀▀▀▄\n" +
            "─────▄█████████▄───────▀▀▄▄\n" +
            "──▄█████████████───────────▀▀▄\n" +
            "▄██████████████─▄▀───▀▄─▀▄▄▄──▀▄\n" +
            "███████████████──▄▀─▀▄▄▄▄▄▄────█\n" +
            "█████████████████▀█──▄█▄▄▄──────█\n" +
            "███████████──█▀█──▀▄─█─█─█───────█\n" +
            "████████████████───▀█─▀██▄▄──────█\n" +
            "█████████████████──▄─▀█▄─────▄───█\n" +
            "█████████████████▀███▀▀─▀▄────█──█\n" +
            "████████████████──────────█──▄▀──█\n" +
            "████████████████▄▀▀▀▀▀▀▄──█──────█\n" +
            "████████████████▀▀▀▀▀▀▀▄──█──────█\n" +
            "▀████████████████▀▀▀▀▀▀──────────█\n" +
            "──███████████████▀▀─────█──────▄▀\n" +
            "──▀█████████████────────█────▄▀\n" +
            "────▀████████████▄───▄▄█▀─▄█▀\n" +
            "──────▀████████████▀▀▀──▄███\n" +
            "──────████████████████████─█\n" +
            "─────████████████████████──█\n" +
            "────████████████████████───█\n" +
            "────██████████████████─────█\n" +
            "────██████████████████─────█\n" +
            "────██████████████████─────█\n" +
            "────██████████████████─────█\n" +
            "────██████████████████▄▄▄▄▄█\n" +
            "\n" +
            "─────────────█─────█─█──█─█───█\n" +
            "─────────────█─────█─█──█─▀█─█▀\n" +
            "─────────────█─▄█▄─█─█▀▀█──▀█▀\n" +
            "─────────────██▀─▀██─█──█───█\n",
        action: ACTIONS.ACTION,
        options: [
            ["TRY AGAIN? (BAD END 1)", "entrance", resetGame]
        ]
    },
    enter: {
        sentence: "You and SAMWELL took a step into the cave as a menacing hollow sound reaches both of your ears, but both of you push onwards.\n\n" +
            "Both of you come across a split path, which do you want to take?",
        action: ACTIONS.ACTION,
        options: [
            ["Left path", "left"],
            ["Right path", "right"]
        ]
    },
    left: {
        sentence: "As the temperatures start to cool around you, every breath turns more moisture in the air to vapourise.\n\n" +
            "SAMWELL: \"Wow ${NAME}, I did not expect it to be this cold, we might be going the wrong way.\"\n\n" +
            "This path seems to go further downwards into a cold abyss, do you wish to turn back?",
        action: ACTIONS.ACTION,
        options: [
            ["Forge ahead", "dejavu"],
            ["Retrace your steps and head right instead", "right"]
        ]
    },
    dejavu: {
        sentence: "As you walk forward you find this place familiar, but can't seem fathom why.\n\n" +
            "The coldness feels colder though\n\n" +
            "It feels like it has been ${DEJAVU} times that you have seen this place.",
        action: ACTIONS.ACTION,
        options: [
            ["Go left", "dejavu", function(){dejavu++}],
            ["Go right", "dejavu", function(){dejavu++}],
            ["Retrace your steps and head right instead", "right"]
        ]
    },
    right: {
        sentence: "Somehow the air gets hotter and hotter every step you take, sweat starts to flow down your temples.\n\n" +
            "You gave SAMWELL a reassuring nod as you both proceed onwards.\n\n" +
            "You spot something shiny inside a hole on the wall beside you, do you wish to extract it?",
        action: ACTIONS.ACTION,
        options: [
            ["Attempt to extract the unknown shiny object", "trap"],
            ["It's probably a trap, ignore it.", "end", function() {
                enemy = "DROGON";
                enemyHP = 250;
                enemyEscapable = false;
            }]
        ]
    },
    trap: {
        sentence: "Upon picking the shiny object up, you hear a switch trigger and lava flows from a new crevice that opened above you and SAMWELL.\n\n" +
            "Both of you burnt into ashes and flew away with the wind.\n\n" +
            "You should've totally trusted option 2 and knew it was totally a trap.",
        action: ACTIONS.ACTION,
        options: [
            ["TRY AGAIN? (BAD END 2)", "entrance", resetGame]
        ]
    },
    end: {
        sentence: "Congratulations, you have defeated the final boss! GGEZ!",
        action: ACTIONS.ACTION,
        options: [
            ["TRY AGAIN? (GOOD END)", "entrance", resetGame]
        ]
    }
};
// weapons in increasing power
let weapons = [
    "Needle",
    "Dagger",
    "Short Sword",
    "Nightsbane",
    "Light Saber",
    "Talk-no-Jutsu (MAX)"
];
// enemies
let enemies = [
    "Skeleton",
    "Slime",
    "Cave Spider",
    "Feral Rat",
    "Creeper",
    "Vampire"
];
// attack sentences
let attacks = [
    "${ATTACKER} swung at ${TARGET} dealing a whopping ${DAMAGE} damage!",
    "${ATTACKER} poked ${TARGET} with the pointy end dealing ${DAMAGE} damage!",
    "${TARGET} tried to dodge but failed miserably, getting damaged for ${DAMAGE} damage by ${ATTACKER}!",
    "${TARGET} accidentally charges into ${ATTACKER}'s weapon and got damaged for ${DAMAGE} damage!"
];
// miss sentences
let misses = [
    "${ATTACKER} positioned in the traditional horse stance while getting ready to strike but loses balance and misses!",
    "${ATTACKER} swings, but for some reason totally misses!",
    "${ATTACKER} just misses!",
    "${ATTACKER} almost perfectly did a 360 no scope on ${TARGET}, but lands it on the ground beside!",
    "${TARGET} manages to fake ${ATTACKER} with a shadow clone jutsu and burst into smoke!"
];

// initialize game
resetGame();
position = "start";
displaySentence(position);
// game codes
let inputHappened = function(input){
    // battle loop
    if (enemy !== "") {
        if (enemy !== "ESCAPED" && enemyHP > 0 && hp > 0) {
            if (input.search(ACTIONS.ACTION) === -1) {
                alert("Invalid input, try again.");
                return;
            }
            if (input > 2) {
                alert("Invalid option, try again.");
                return;
            }

            let eDamage = Math.floor(Math.random() * enemiesDefeated + 1);
            hp -= eDamage;

            if (input === "1") {
                let pDamage = Math.floor(Math.random() * 3) * (weapon + 1);

                enemyHP -= pDamage;

                displayFight(pDamage, eDamage);
            } else {
                let success = enemyEscapable && Math.floor(Math.random() * 2) > 0;
                if (!success) {
                    displayFight(-1, eDamage);
                } else {
                    enemy = "ESCAPED";
                    display("Successfully escaped, press enter to continue.");
                }
            }
            return;
        }

        if (hp > 0) {
            if (enemy !== "ESCAPED") {
                enemiesDefeated++;
                if (Math.floor(Math.random() * weapons.length) - weapon > 0) {
                    weapon++;
                    display("You found a weapon upgrade! Your new weapon is " + weapons[weapon] + "! Press enter to continue.");
                    enemy = "ESCAPED";
                    return;
                }
            }
            enemy = "";
        } else {
            resetGame();
        }

        hp = Math.min(100, hp + enemiesDefeated);
        displaySentence(position);
        return;
    }

    // story loop
    let sentence = story[position];

    // verify input according to regex
    console.log(sentence.action);
    if (input.search(sentence.action) === -1) {
        alert("Invalid input, try again.");
        return;
    }

    if (sentence.action === ACTIONS.NAME) {
        name = input.toUpperCase();
        position = "entrance";
    } else {
        if (input > sentence.options.length) {
            alert("Invalid option, try again.");
            return;
        }

        // execute option extra function
        position = sentence.options[input - 1][1];
        if (sentence.options[input - 1].length === 3) {
            sentence.options[input - 1][2]();
        }

        // chance to get enemy
        if (enemy === "" && Math.floor(Math.random()*2) === 1) {
            enemy = enemies[Math.floor(Math.random()*enemies.length)];
            enemyHP = Math.floor((Math.random() * 2 + 1) * (enemiesDefeated + 1))
            enemyEscapable = true;
        }
    }

    // enemy encounter / next story
    if (enemy !== "") {
        displayFight(null, null);
    } else
        displaySentence(position);
};