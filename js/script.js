console.log ("script.js running");

var playerName = prompt("Greetings, adventurer. What is your name?").toUpperCase();

var inventory = {
    gold: 0,
    bag:[]
};


while (true) {

    var choice0 = parseInt(prompt(playerName + ", you awaken in a forest clearing with no memory of past events. You notice that you are carrying a backpack, and have a coin pouch strapped to your waist. Looking around, you can make out two dirt paths leading away from the clearing: one to the left, and another to the right. What would you like to do?\n\n[1] Take the path on the left.\n[2] Take the path on the right.\n[3] Look inside your backpack.\n[4] Look inside your coin pouch.\n\n(Please enter corresponding number for choice)"));

    if (choice0 === 1 || choice0 === 2) {
        break;
    } else if (choice0 === 3) {
        checkBackpack (inventory);
    } else if (choice0 === 4) {
        checkGold (inventory);
    }
};

    while (choice0 === 1) { // Went left
        var choice1 = parseInt(prompt("As you amble down the path, you spy something shiny on the ground ahead of you. Upon closer inspection, the shiny object appears in fact to be a pile of gold pieces, sitting conspicuously in front of a small tree. Looking further ahead, you can see that your current path forks again, into a left and right junction.\n\nWhat will you do?\n\n[1] Pick up the gold pieces.\n[2] Ignore the gold and take the left fork.\n[3] Ignore the gold and take the right fork.\n[4] Look inside your backpack.\n[5]Look inside your coin pouch"));

        if (choice1 === 1) { // Reach for gold
            var choice1_1 = confirm(`As you reach for the gold, a small Leprechaun hops out from behind the tree and accosts you:\n\n"Halt, ${playerName}! Yes, I know your name, and I know you want my gold! I will only give it to you if you can answer my riddle correctly. Fail, and I claim your head! Will you attempt the riddle?"`);
            if (choice1_1 === true) { // Chose to hear riddle
                var choice1_lep = prompt(`The leprechaun hops from side to side with glee, and reads out his riddle:\n
"To all things and men I appertain,
and yet by some am shunned and distained.
Fondle me and ogle me til you're insane,
but no blow can harm me, cause me pain.
Children delight in me, elders take fright.
Fair maids rejoice and spin.
Cry and I weep, yawn and I sleep.
Smile, and I too shall grin.
What am I?"`).toString().toLowerCase()

                if (choice1_lep.includes("reflection") || choice1_lep.includes("mirror")) {
                    inventory.gold += 100;
                    alert ("'Damn you!' The leprechaun scowls and kicks the gold pieces in your direction.");
                    checkGold (inventory);
                    var choice1_cont = parseInt(prompt("Which way will you go next?\n\n[1] Head down the left junction.\n[2] Head down the right junction."));
                } else {
                    alert ("With a maniacal cackle, the leprechaun brandishes a blade and leaps for your throat.")
                    alert ("You have died.");
                } break;
            } else alert("The leprechaun laughs racously as you shake your head and slowly back away.");
        } else if (choice1 === 2) {
            // Went left
            break;
        } else if (choice1 === 3) {
            // Went right
            break;
        } else if (choice1 === 4) {
            checkBackpack (inventory);
        } else if (choice1 === 5) {
            checkGold (inventory);
        }
    };



    if (choice0 === 2) {
        alert("yyy");
    }

// Awaken with no memory, choose path 1 or 2, or check coin pouch, or check backpack
//
// while choice = checks, loop prompt
//
//     if check coins
//
//         run coincheck function, repeat prompt
//
//     if check backpack
//
//         run checkbackpack function, repeat prompt
//
//     if path 1
//
//         found some coins
//
//             pick up coins?
//
//             path 1A, 1B, check coins, check backpack
//
//
//     if path 2
//
//         found a rusty dagger
//
//             pick up dagger?
//
//             path 2A, 2B, check coins, check backpack