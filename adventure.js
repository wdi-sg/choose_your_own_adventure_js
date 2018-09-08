var welcome = prompt("Welcome to Hogwarts, School of Magic! Please enter your name to start.");
var userName = welcome.charAt(0).toUpperCase() + welcome.slice(1);

// var sortMsg1 = alert(`Pleasure to meet you, ${userName}! \n
// Now it's time to sort you into your house! \n
// Click "OK" to let The Sorting Hat do his job!`);



// // //The Sorting Hat: for user to get randomly assigned house.
// // var house = ["Gryffindor", "Slytherin", "HufflePuff", "Ravenclaw"];
// //    var randomHouse = Math.floor(Math.random()*house.length);
// //    var userHouse = house[randomHouse];
// //    console.log(userHouse);



// //For user to choose where to go.
// var mainMenu = prompt(`Now, where would you like to go? (D/H/L/M/W)
// D - Diagon Alley. Haven’t seen much of it. I wanna explore!
// H - Hagrid’s Hut. Miss the dude man!
// L - Lessons please. I take my studies very seriously.
// M - Ministry of Magic. I'm with Dumbledore's Army, man!
// W - Just wander around Hogwarts.
// `)

// var userGo = mainMenu.toLowerCase();



//When user choses Diagon Alley.
//if (userGo === "d"){
    // var userDa = prompt(`*Zzzaaap!* Not bad, your apparition skill has improved! You are now in Diagon Alley.\n
    // Choose a shop to go into (G/L/O/R)
    // G - Gringotts Wizarding Bank
    // L - Leaky Cauldron Pub
    // O - Ollivander’s Wands
    // R - Return to Hogwarts
    // `);


var counter = function(){
    count ++;
    if (count === 1){
        break;
    }
};

//------------------------------
//Arrays area: All the arrays for all the variables of the switch cases go here.
var passwordArr =[];
var leakyCalArr = [];
var wandArr = [];
//------------------------------

//This function consists of everything to do at Diagon Alley.
var returnDiagon= function(){
 var count = 0;
//For user to choose where to go:
var userDa = prompt(`*Zzzaaap!* Not bad, your apparition skill has improved! You are now in Diagon Alley.\n
    Choose a shop to go into (G/L/O/R)
    G - Gringotts Wizarding Bank
    L - Leaky Cauldron Pub
    O - Ollivander’s Wands
    R - Return to Hogwarts
    `);

//Switch statements for the choices made above.
switch (userDa.toLowerCase()){
    case "g":
        var gringotts = prompt(`As you push through the bronze doors of Gringotts, a goblin hustles over to you.\n
    “What is the password?” he asks you with a smirk.\n
    You say: (A/B)
        A: The password is “buckbeak82790”.
        B: I don’t know!
        `);
        passwordArr.push(gringotts);

      break;

    case "l":
        var leaky = prompt(`Tom the innkeeper (who looks like an old gummy walnut) greets you:\n\n“Welcome, ${userName}! It’s been a while."\nWould you like some Butterbeer or a Room?” (B/R)`);
        leakyCalArr.push(leaky);
        break;

    case "o":
        var ollie = prompt(`Ollivander is huddled over a chest of worn out wands when you arrive. \n\n“These wands may be cursed. Sorting them out will take time!” he mutters under his breath. \n\nDo you: Come back later or Pick up a wand? (C/P) `);
        wandArr.push(ollie);
        break;
    }
}

returnDiagon();

var password = passwordArr.toString();
var leakyCal = leakyCalArr.toString();
var wandAns = wandArr.toString();

//From Gringgots Wizarding Bank: Password switch case
    var password;
    switch (password.toLowerCase()) {
        case "a":
            alert(`The goblin’s smile fades. He bows down hastily, “Forgive me sir, your vault has been prepared for your visit. Please follow me.”\n
    You are a VIP at Gringotts, it seems!`);
        break;

        case "b":
            alert(`“THIEEEFF!”\n\nLittle did you know, you were carried out of the bank by a hoard of goblins. Better luck next time! `);
            while (true){
            returnDiagon();
            }
            break;
    };


    var leakyCal;
    switch (leakyCal.toLowerCase()){
        case "b":
        // var count = 0;
            alert(`A butterbeer appears in your hand. You drink it and feel your adrenaline rush! Time to
            go, many other places to explore!`);
            while(true){
            returnDiagon();
            }
                break;

        case "r":
            alert(`An elf appears out of nowhere and ushers you to an old, dingy room. There’s the smell of warm vanilla in the air. Time to sleep!`);
                break;
    };


    var wandAns;
    switch (wandAns.toLowerCase()){
        case "c":
            alert(`Ollivander seems busy. You'll come back later.`);
            break;

        case "p":
            alert(`Fearless as you are, you picked up one of the wands.\nYou feel a pull on your belly button and “ppooofff!” you find yourself back at home! Weird!`);
            break;
    };




//----------------------------------------------
//Diagon Alley Nav
//----------------------------------------------

// var leakyCauldron = prompt(`Tom the landlord, who looks like an old gummy walnut greets you, “Welcome, userName! It’s been a while.
// Would you like some Butterbeer or a Room?” (B/R)`);

// var ollivander = prompt(`Ollivander is huddled over a chest of worn out wands when you arrive.
// “These wands may be cursed. Sorting them out will take time!” he mutters under his breath.

//  Do you: (C/S)
//  C: Come back later
//  S: Stay?
// `);



    // if(userDa === "g"){
    //     var gringotts = prompt(`As you push through the bronze doors of Gringotts, a goblin hustles over to you.\n
    // “What is the password?” he asks you with a smirk.\n
    // You say: (A/B)
    //     A: The password is “buckbeak82790”,
    //     B: I don’t know,
    // `);
    //     var password = gringotts.toLowerCase();

    //             if (password === "a"){
    //                 alert(`The goblin’s smile fades. He bows down hastily, “Forgive me sir,
    //                     your vault has been prepared for your visit. Please follow me.”\n
    //                     You are a VIP at Gringotts, it seems!`);

    //             } else if (password === "b"){
    //                 alert( `                       “THIEEEFF!”\n
    //                     Little did you know, you were carried out of the bank by a hoard of goblins. Better luck next time! `);
    //                             returnDiagon();


    //                             }
    //                         }















