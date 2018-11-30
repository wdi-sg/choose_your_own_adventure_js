//********************************************************************
//WELCOME & SORTING
var welcome = prompt("Welcome to Hogwarts, School of Magic! Please enter your name to start.");
var userName = welcome.charAt(0).toUpperCase() + welcome.slice(1);

var sortMsg1 = alert(`Pleasure to meet you, ${userName}! \n
Now it's time to sort you into your house! \n
Click "OK" to let The Sorting Hat do his job!`);

//The Sorting Hat: for user to get randomly assigned house.
var house = ["Gryffindor", "Slytherin", "HufflePuff", "Ravenclaw"];
   var randomHouse = Math.floor(Math.random()*house.length);
   var userHouse = house[randomHouse];
   console.log(userHouse);
//********************************************************************

//MESSAGES ARENA
//MAIN: For user to choose where to go.
var message = `Congratulations, you belong to ${userHouse}!

Now, where would you like to go? (D/H/L/M/W)
D - Diagon Alley. Haven’t seen much of it. I wanna explore!
L - Lessons please. I take my studies very seriously.`;
//M - Ministry of Magic. I'm with Dumbledore's Army, man!
//W - Just wander around Hogwarts.
//H - Hagrid’s Hut. Miss the dude man!`;


var message2 = `*Zzzaaap!* Not bad, your apparition skill has improved! You are now in Diagon Alley.\n
    Choose a shop to go into (G/L/O/R)
    G - Gringotts Wizarding Bank
    L - Leaky Cauldron Pub
    O - Ollivander’s Wands
    R - Return to Hogwarts`;

var message3 = `Hermione runs up to you. "Hey, ${userName}! Which class shall we head to first?"\n
    Choose a class to go to (P/D/R)
    P - Potions
    D - Defense against the Dark Arts
    R - Return to Hogwarts`;


var mGringotts = `As you push through the bronze doors of Gringotts, a goblin hustles over to you.\n
    “What is the password?” he asks you with a smirk.\n

    You say: (A/B)
    A: The password is “buckbeak82790”.
    B: I don’t know!`;

var mPassA = `The goblin’s smile fades. He bows down hastily,
“Forgive me sir, your vault has been prepared for your visit. Please follow me.”\n
You are a VIP at Gringotts, it seems!`;

var mPassB = `“THIEEEFF!”\n\nLittle did you know, you were carried out of the bank by a hoard of goblins. Better luck next time! `;



var mLeaky = `Tom the innkeeper (who looks like an old gummy walnut) greets you:\n

“Welcome, ${userName}! It’s been a while. Would you like some Butterbeer or a Room?”
(B/R)`;


var mLeakA = `A butterbeer appears in your hand. You drink it and feel your adrenaline rush!\n\nTime to go, many other places to explore!`;

var mLeakB = `An elf appears out of nowhere and ushers you to an old, dingy room. There’s the smell of warm vanilla in the air. Time to sleep!`;



var mOllie = `Ollivander is huddled over a chest of worn out wands when you arrive. \n
“These wands may be cursed. Sorting them out will take time!” he mutters under his breath.\n
Do you: Come back later or Pick up a wand? (C/P) `;

 var mComeBack = `Ollivander seems busy. You'll come back later.`;

var mPickUp = `Fearless as you are, you picked up one of the wands.\nYou feel a pull on your belly button and.....\n\n “PPOOOFFFF!”\n\nYou find yourself in a vault full of gold! Nice!`;



var mReturnHog = `Nothing for me to do here. I want to return to Hogwarts.`;

var mPotions = `The class has already started when Ron and you arrived. Professor Snape narrows his eyes at the both you.
            "Ahhh, my test subjects have arrived,"he sneers. He points to two bottles on the table, "Pick one each and drink!"

            Bottle A: Liquid is golden in colour and water-like.
            Bottle B: Liquid is clear and viscous.

            You choose: (A/B)`;

var mDefense = `In DADA, you are assigned Draco Malfoy as a partner fot a duel assignment.
        As you stand facing each other, Draco immediately raises his wand and shouts, "Stupefy!"

        You shout:

        C - Crucio!
        E - Experlliarmus!
        P - Protego!`;


//********************************************************************

var secondBranch = {
        daObj: {gringArr: [], leakyArr: [], ollieArr: []},
        lessonsObj: {potionsArr: [], defenseArr: []},
        thirdObj: {passwordArr:[], leakChoiceArr:[], potionsArr2:[], daddArr:[], ollieChoiceArr:[]}
};


var combArr = secondBranch.daObj;
var combArr2 = secondBranch.lessonsObj;
var combArr3 = secondBranch.thirdObj;

//********************************************************************


//FIRST BRANCH: DIAGON ALLEY, LESSONS TIME OR MINISTRY OF MAGIC
var userGoArr =[];
var userGo = userGoArr.toString();

var mainMenu = prompt(message);
var userGo = mainMenu.toLowerCase();
// userGoArr.push(userGoIn);


var hogwardsArr = {
    diagon: {
        diagonPlaces: {
                    gringotts: {
                        gringOBj:mGringotts,
                        passA: mPassA,
                        passB: mPassB
                    },
                    leaky: {leakObj: mLeaky,
                            leakA: mLeakA,
                            leakB: mLeakB

                    },
                    ollie: {ollieObj: mOllie,
                            ollieC: ollieCome,
                            ollieP: olliePick
                    },

                    returnHog: mReturnHog
                    }
            },

    lesson: {
        lessonPlaces:{
                    potions: mPotions,
                    defense:mDefense
                    }
            }
};


while (true){

// // Choosing places to go from Hogwarts: Switch statements.
var userDaArr =[];
var userLessonsArr = [];

switch (userGo){
    case "d":
    var userDaIn = prompt(message2);
    userDaArr.push(userDaIn);
    break;

    case "l":
    var userLessonsIn = prompt(message3);
    userLessonsArr.push(userLessonsIn);
    break;
};



var userDa = userDaArr.toString();
var userLessons = userLessonsArr.toString();


if(userDa === false){
    break;
}
// //********************************************************************
// //SECOND BRANCH:
// //CHOOSING PLACES AT DIAGON ALLEY: GRINGOTTS, LEAKY CAULDRON, OLLIVANDER'S OR GO BACK

switch (userDa.toLowerCase()){
    case "g":
        var gringotts1 = prompt(mGringotts);
        combArr.gringArr.push(gringotts1);
      break;

    case "l":
        var leaky1 = prompt(mLeaky);
        combArr.leakyArr.push(leaky1)
        break;

    case "o":
        var ollie1 = prompt(mOllie);
       combArr.ollieArr.push(ollie1);
        break;

    case "r":
        var gobackHogwarts = alert(mReturnHog);
        console.log(gobackHogwarts);
        break;

    }


var password = combArr.gringArr.toString();
var leakyCal = combArr.leakyArr.toString();
var wandAns = combArr.ollieArr.toString();

//----------------------------


switch(userLessons.toLowerCase()){

    case "p":
        var potions1 = prompt(mPotions);
        combArr2.potionsArr.push(potions1);
        break;

    case "d":
        var defense1 = prompt(mDefense);
        combArr2.defenseArr.push(defense1);
        break;

    case "r":
        var gobackHogwarts = alert(mReturnHog);
        console.log(gobackHogwarts);
        break;

};

var potionsChoice = combArr2.potionsArr.toString();
var defenseChoice = combArr2.defenseArr.toString();

// //********************************************************************
// //FINAL BRANCH OPTIONS(1)

//From Gringgots Wizarding Bank option
    switch (password.toLowerCase()) {
        case "a":
            var passA1 = alert(mGringotts);
            combArr3.passwordArr.push(passA1);
            console.log("passA:",passA1);
            if(passA1 === undefined){
                break;
            }
        break;

        case "b":
            var passB1 = confirm(mPassB);
            combArr3.passwordArr.push(passB1);
             console.log("passB:",passB1);
             if (passB1 !== true){
                break;
            }
            break;

    };

//From Leaky Cauldron option
    switch (leakyCal.toLowerCase()){
        case "b":
            var leakA1 = confirm(mLeakA);
            combArr3.leakChoiceArr.push(leakA1);

                break;

        case "r":
            var leakB1 = alert(mLeakB);
            combArr3.leakChoiceArr.push(leakB1);
                break;
    };

//From Ollivander option
    switch (wandAns.toLowerCase()){
        case "c":
            var ollieCome = alert(mComeBack);
            combArr3.ollieChoiceArr.push(ollieCome);
            break;

        case "p":
            var olliePick = confirm(mPickUp);
           combArr3.ollieChoiceArr.push(olliePick);
            break;
    };

var passwordChoice = combArr3.passwordArr.toString();
var leakFinalChoice = combArr3.leakChoiceArr.toString();
var ollieFinalChoice = combArr3.ollieChoiceArr.toString();

// //********************************************************************


    switch(potionsChoice.toLowerCase()){
        case "a":
            var potionA = alert(`Potion A`);
            i++;
            break;

        case "b":
            var potionB = alert(`Potion B`);
            break;
    };


    switch (defenseChoice.toLowerCase()){

        case "c":
            var choiceFail = alert(`Fail`);
            break;

        case "e":
            var choiceFail = alert(`Fail`);
            break;

        case "p":
            var choicePass = alert(`Pass`);
            i++;
            break;
    }

};























