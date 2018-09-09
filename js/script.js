console.log ("script.js running");

var playerName = prompt("Greetings, adventurer. What is your name?").toUpperCase();

var inventory = {
    gold: 0,
    bag:[]
};


while (true) {

    var choice1 = parseInt(prompt(playerName + ", you awaken in a forest clearing with no memory of past events. You notice that you are carrying a backpack, and have a coin pouch strapped to your waist. Looking around, you can make out two dirt paths leading away from the clearing: one to the left, and another to the right. What would you like to do?\n\n[1] Take the path on the left.\n[2] Take the path on the right.\n[3] Look inside your backpack.\n[4] Look inside your coin pouch.\n\n(Please enter corresponding number for choice)"));

    if (choice1 === 1 || choice1 === 2) {
        break;
    } if (choice1 === 3) {
        checkBackpack (inventory);
    } if (choice1 === 4) {
        checkGold (inventory);
    }
};

if (choice1 === 1) {
    alert("xxx");
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