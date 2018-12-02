// // put code here!
// alert(`
//   /^ ^\\
//  / 0 0 \\
//  V\\ Y /V
//   / - \\
//  /    |
// V__) ||`)

// ## MAIN START PAGE
// create var startOrExit = prompt: show ascii art
//         "Technically A Dog's Life"

// Type: 's' to start game,
//       'e' to exit game.

// ## Day1

// alert: Hi, you are about to experience a dog's life, technically speaking.
// var name = prompt: What is your name?
// alert: Hi name, things are about to get personal..
// Alert: Day1
// alert: Date: 3 December 2018, Monday

// Alert:  You woke up late.
//         You have insomnia last night due to overthinking about the stress of Monday Blues.
//         You rush through your preparations and are about to leave your house for work.
//         You feel that you are missing something, but can't think of what at that point in time.

//         Do you proceed out your house now? (You will reach work just on time)
//         Or do you proceed to the living room and look around somemore? (You will reach work late, boss will scold you)

var mainPage;
var confirmExit;
var userName;

var day1Deci1;
var day1Deci2;
var day1Deci2Item;
var day1Deci3;
var day1

var userHP = 50
var userAtk = 1
var userDef = 1

var enemyHP = 5
var enemyAtk = 1
var enemyDef = 1

var mainPageRun = function() {
    do {
        mainPage = prompt("Technically A Dog's Life\n\nType:\n\'s\' to start game,\n\'e\' to exit game.\n\nTo exit at any point during the game, just close the browser.", "\'s\' or \'e\'")
    }
    while(mainPage !== "s" && mainPage !== "e");

    if (mainPage == 's') {
        day1WakeUp();
    } else if (mainPage == 'e') {
        confirmExitRun();
    };
};

var confirmExitRun = function() {
    confirmExit = confirm("Are you sure you want to exit the game?")

    if (confirmExit == true) {
        thankYouMessage();
    } else if (confirmExit == false) {
        mainPageRun();
    };
};

var thankYouMessage = function() {
    alert("Thank you for trying out my game! If you want to play again, please refresh the web page. Good bye!");
};

var day1WakeUp = function() {
    alert("You are about to experience a dog's life, technically speaking.");
    userName = prompt("What is your name?");

    if (userName == null || userName == "") {
        userName = "Stranger"
    };

    alert("Hi " + userName + ', things are about to get personal..');
    alert("Day 1");
    alert("Date: 3 December 2018, Monday");
    alert("You woke up late. You have insomnia last night due to over-thinking about the stress of Monday Blues. You rush through your preparations and are about to leave your house for work. You feel that you are missing something, but just can't seem to recall it.");
    do {
    day1Deci1 = prompt("Do you proceed out your house now? (\"Reach work just on time\")\nOr do you proceed to the living room and look around somemore? (\"Reach work late, boss will scold you\")", "\'outside\' or \'living\'");
    }
    while (day1Deci1.charAt(0) !== 'o' && day1Deci1.charAt(0) !== 'l');

    if (day1Deci1.charAt(0) == 'o') {
        alert("You ran to the bus stop and managed to squeeze up one of the bus heading to work.\n")
        day1Office();
    } else if (day1Deci1.charAt(0) == 'l') {
        day1Living();
    };
};

var day1Living = function() {
    do {
    day1Deci2 = prompt("You decide to proceed to the living room. To your pleasant suprise, you found the following:\n\n- AirPods earphones\n- Eye glasses\n- A pack of candy (3 pieces left)\n\nFor some reason, you can only take one of it. What do you take?", "\'airpods\' or \'glasses\' or \'candy\'");
    }
    while (day1Deci2.charAt(0) !== 'a' && day1Deci2.charAt(0) !== 'g' && day1Deci2.charAt(0) !== 'c');
    day1LivingCheck(day1Deci2);
}

var day1LivingCheck = function(input) {
        if (input.charAt(0) == 'a') {
            var getItem = confirm("Are you sure you want to take the AirPods?");
            if (getItem == true) {
                alert("Great!\n\nYou ran to the bus stop and managed to squeeze up one of the bus heading to work.\nLuckily with your AirPods, the bus ride to work was more enjoyable than usual.\n\"Maybe life's not so bad afterall?\"\n (You felt a big boost in morale to push through the day!)");
                userHP += 50;
                day1Office();
            } else if (getItem == false) {
                day1Living();
            };
        } else if (input.charAt(0) == 'g') {
            var getItem = confirm("Are you sure you want to take your glasses?")
            if (getItem == true) {
                alert("Great!\n\n You ran to the bus stop and managed to squeeze up one of the bus heading to work.\n")
                day1Office();
            } else if (getItem == false) {
                day1Living();
            };
        } else if (input.charAt(0) == 'c') {
            var getItem = confirm("Are you sure you want to take this pack of candy?")
            if (getItem == true) {
                alert("Great!\n\nYou ran to the bus stop and managed to squeeze up one of the bus heading to work.\n")
                day1Office();
            } else if (getItem == false) {
                day1Living();
            };
        };
};

var day1Office = function() {
    alert("Finally you have reached your office compound.");
    if (day1Deci1 == 'o') {
        alert("Your boss noticed your arrival, looked at his watch, then ignored you.\nYou thought to yourself:\n\"That was a close call~\"");
        day1OfficeEntrance();
    } else if (day1Deci1 == 'l') {
        alert("You heard stomping coming from behind.\nYou already know who it is.\nYour boss f**ked you upside down for being late.\n\nYou put up your best game face and bowed apologetically.\nHowever, deep down, you thought to yourself:\n\"Whatever~ I'm not gonna let you affect my mood today.\"\n(Your morale decreased a little)");
        userHP -= 10;
        day1OfficeEntrance();
    };
};

var day1OfficeEntrance = function() {
    do {
        day1Deci3 = prompt("You are now standing at the entrance of your office compound.\n\nWhere do you want to go?\n\n- Go left to your desk\n- Go right to the pantry", "\'pantry\' or \'desk\'");
    }
    while (day1Deci3.charAt(0) !== 'p' && day1Deci3 !== 'd');
    if (day1Deci3.charAt(0) == 'p') {
        day1OfficePantry();
    } else if (day1Deci3.charAt(0) == 'd') {
        day1OfficeDesk();
    };
};

var day1OfficePantry = function() {
    alert("You are now in the pantry.")
    do {
        day1Deci3 = prompt("You saw that the pantry is restocked fully with your favorite instant coffee!\nWhat do you want to do?\n\n- Make a cup of coffee\n- Go left to the entrance", "\'coffee\' or \'entrance\'")
    }
}

mainPageRun();
