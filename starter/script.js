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
var day1Deci3Item;
var day1Deci4;
var day1Deci5;
var day1
var candyBar = 3;

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
        do {
        day1Deci1 = prompt("Do you proceed out your house now? (\"Reach work just on time\")\nOr do you proceed to the living room and look around somemore? (\"Reach work late, boss will scold you\")", "\'outside\' or \'living\'");
        }
        while (day1Deci1 == null || day1Deci1 == "");
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
        do {
        day1Deci2 = prompt("You decide to proceed to the living room. To your pleasant suprise, you found the following:\n\n- AirPods earphones\n- Eye glasses\n- A pack of candy (3 pieces left)\n\nFor some reason, you can only take one of it. What do you take?", "\'airpods\' or \'glasses\' or \'candy\'");
        }
        while (day1Deci2 == null || day1Deci2 == "");
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
    if (day1Deci1.charAt(0) == 'o') {
        alert("Your boss noticed your arrival, looked at his watch, then ignored you.\nYou thought to yourself:\n\"That was a close call~\"");
        day1OfficeEntrance();
    } else if (day1Deci1.charAt(0) == 'l') {
        alert(userName + "!!!!!!\nYou heard stomping coming from behind.\nYou already know who it is.\nYour boss f**ked you upside down for being late.\n\nYou put up your best game face and bowed apologetically.\nHowever, deep down, you thought to yourself:\n\"Whatever~ I'm not gonna let you affect my mood today.\"\n(Your morale decreased a little)");
        userHP -= 10;
        day1OfficeEntrance();
    };
};

var day1OfficeEntrance = function() {
    do {
        do {
            day1Deci3 = prompt("You are now standing at the entrance of your office compound.\n\nWhere do you want to go?\n\n- Go left to your desk\n- Go right to the pantry", "\'pantry\' or \'desk\'");
        }
        while (day1Deci3 == null || day1Deci3 == "");
    }
    while (day1Deci3.charAt(0) !== 'p' && day1Deci3 !== 'd');
    if (day1Deci3.charAt(0) == 'p') {
        day1OfficePantry();
    } else if (day1Deci3.charAt(0) == 'd') {
        day1OfficeDesk();
    };
};

var day1OfficePantry = function() {
    var randomPantry = Math.floor(Math.random() * 20);
    if (randomPantry <= 10) {
        randomPantryCoffee();
        } else if (randomPantry > 10) {
        randomPantryBlank();
    };
};

var randomPantryCoffee = function() {
    do {
        do {
            day1Deci3Item = prompt("Oh my!\n\nYou saw that the pantry is restocked fully with your favorite instant coffee!\n\nWhat do you want to do?\n\n- Make a cup of coffee\n- Go left to the entrance", "\'coffee\' or \'entrance\'")
        }
        while (day1Deci3Item == null || day1Deci3Item == "");
    }
    while (day1Deci3Item.charAt(0) !== 'c' && day1Deci3Item.charAt(0) !== 'e');
randomPantryCoffeeCheck(day1Deci3Item);
};

var randomPantryCoffeeCheck = function(input) {

    if (input.charAt(0) == 'c') {
        var getItem = confirm("Are you sure you want to make a cup of Coffee?");
        if (getItem == true) {
            alert("Ahhh~\n\nThe smell of your favorite coffee.\nYou gulp down the piping hot coffee.\nDon\'t worry, your throat won\'t get burnt, it\'s your special talent.\n(Slight boost in morale)\n\nYou walk back to the entrance happily.")
            userHP += 10;
            day1OfficeEntrance();
        } else if (getItem == false) {
            randomPantryCoffee();
        };
    } else if (input.charAt(0) == 'e') {
        day1OfficeEntrance();
    };
};

var randomPantryBlank = function() {
    do {
        do {
            day1Deci3Item = prompt("You saw that the pantry is empty.\nThe office admin must be on Medical Leave again.\nThere\'s nothing to do here.\n\n- Head back to the entrance",'entrance');
        }
        while (day1Deci3Item == null || day1Deci3Item == "");
    }
    while (day1Deci3Item.charAt(0) !== 'e');
        if (day1Deci3Item.charAt(0) == 'e') {
            day1OfficeEntrance();
        };
};

var day1OfficeDesk = function() {
    do {
        do {
            day1Deci4 = prompt("You at now at your desk.\nThere is already a mountain of paperwork waiting for you.\nWhat are you gonna do now?\n\n- Start my work\n- Go right to the entrance\n- Go left to your boss's office", "\'work\' or \'entrance\' or \'boss\'s office\'");
        }
        while (day1Deci4 == null || day1Deci4 == "");
    }
    while (day1Deci4.charAt(0) !== 'w' && day1Deci4.charAt(0) !== 'e' && day1Deci4.charAt(0) !== 'b');
day1OfficeDeskCheck(day1Deci4);
};

var day1OfficeDeskCheck = function(input) {
    if (day1Deci4.charAt(0) == 'w') {
        var tempConfirm = confirm("Are you sure you want to start your work?");
        if (tempConfirm == true) {
            alert("Alright! It's you and me now! Let's go \"Mountain of Paperwork!\"")
        if (day1Deci2 == 'g') {
           alert("As you brought your glasses to work, your \"Writing\" accuracy have increased significantly!!");
        };
            paperworkFight();
        } else if (tempConfirm == false) {
            day1OfficeDesk();
        };
    } else if (day1Deci4.charAt(0) == 'e') {
        day1OfficeEntrance();
    } else if (day1Deci4.charAt(0) == 'b') {
        day1BossRoom();
    };
};

var day1BossRoom = function() {
    var randomBoss = Math.floor(Math.random() * 20);
    if (randomBoss <= 10) {
        alert("Your boss seems to be in a serious phone call with a client.\nI think I'll come back later.")
        day1OfficeDesk();
    } else if (randomBoss > 10) {
        randomBossRoom();
    };
};

var randomBossRoom = function() {
    do {
        do {
             day1Deci5 = prompt("Your boss seems to be free.\nYou enter the room.\nYour boss looks at you with his piercing eyes.\nWhat are you gonna do\n\n-Strike up a conversation in an attempt to boot lick\n- Smile and quickly leave the room", "\'bootlick\' or \'leave\'");
        }
        while(day1Deci5 == null || day1Deci5 == "");
    }
    while (day1Deci5.charAt(0) !== 'b' && day1Deci5.charAt(0) !== 'l');
    randomBossRoomCheck(day1Deci5);
}

var randomBossRoomCheck = function(input) {
    if (input.charAt(0) == 'b') {
        var tempConfirm = confirm("Are you sure you want to boot lick him?");
        if (tempConfirm == true) {
            randomBootLick();
        } else if (tempConfirm == false) {
            randomBossRoom();
        };
    } else if (input.charAt(0) == 'l') {
        day1OfficeDesk();
    };
};

var randomBootLick = function() {
    var tempRandom = Math.floor(Math.random() * 20);
    if (tempRandom <= 10) {
        alert("You had an engaging conversation with your boss.\nYou felt you are a little closer with your boss now\nYou left the room with a smile.")
        userHP += 10;
        day1OfficeDesk();
    } else if (tempRandom > 10) {
        alert("\"F**k off, " + userName + ".\"\n\"Go do your work now, or you\'re fired!!!\"\n\nYou left the room so fast it almost seems like you\'re doing a cartwheel.\n\n(Your morale decreased by a little)");
        userHP -=10;
        day1OfficeDesk();
    };
};

var userAccuWithGlass = function() {
    var randomAccu = Math.floor(Math.random() * 20);
    if (randomAccu <= 15) {
        alert("It\'s a hit!\nOne chunk of paperwork down!\nEnemy \"Mountain of Paperwork\"\'s HP decreased by " + userAtk + "!");
        enemyHP = enemyHP - userAtk;
        enemyAccu();
    } else if (randomAccu > 16) {
        alert("It\'s a miss..\nThere\'s a mistake in the paperwork and you have to redo it again.")
        enemyAccu();
    };
};

var userAccuNormal = function() {
    var randomAccu = Math.floor(Math.random() * 20);
    if (randomAccu <= 10) {
        alert("It\'s a hit!\nOne chunk of paperwork down!\nEnemy \"Mountain of Paperwork\"\'s HP decreased by " + userAtk + "!");
        enemyHP = enemyHP - userAtk;
        enemyAccu();
    } else if (randomAccu > 10) {
        alert("It\'s a miss..\nThere\'s a mistake in the paperwork and you have to redo it again.")
        enemyAccu();
    };
}

var enemyAccu = function() {
    if (enemyHP < 1) {
        alert("You have defeated \"Mountain of Paperwork\"!\n\nThank you for playing \"Technically A Dog's Life\" demo version.\nIf you like the game, please stay tuned for the official full version in my developer\'s profile below!\n\nhttps://github.com/kingcashthefifth/choose_your_own_adventure_js\n\nOnce again, thank you for playing!");
        oneMoreTime();
        return;
    };
    alert("Enemy \"Mountain of Paperwork\" used \"Demoralizing\"!\n");
        var randomAccu = Math.floor(Math.random() * 20);
    if (randomAccu <= 10) {
        alert("It\'s a hit!\n" + userName + "\'s HP decreased by " + enemyAtk + "!");
        userHP = userHP - enemyAtk;
        paperworkFight();
    } else if (randomAccu > 10) {
        alert("It\'s a miss!")
        paperworkFight();
    };
};

var consumeCandy = function () {
    alert(userName + " consumed a candy!\n\n" + userName + "\'s HP increased by 5!")
    userHP += 5;
    enemyAccu();
}

var paperworkFight = function() {
    var fightAction;
    if (userHP < 1) {
        alert("You have no more morale, you decided to quit the job and more into the forest for a living...\n\nGame Over.")
        oneMoreTime();
        return;
    };
        do {
            do {
                fightAction = prompt("Name: " + userName + "\nMorale: " + userHP + "\n\nEnemy Name: Mountain of Paperwork" + "\nEnemy HP: " + enemyHP + "\n\nA wild \"Mountain of Paperwork\" appeared!\n\nActions:\n- Write\n- Consume Candy: " + candyBar + " left", "\'write\' or \'consume\'")
            }
            while (fightAction == null || fightAction == "");
        }
        while (fightAction.charAt(0) !== 'w' && fightAction.charAt(0) !== 'e');

        if (fightAction.charAt(0) == 'w' && day1Deci2 == 'g') {
            alert(userName + " used \"Write\"!")
            userAccuWithGlass();
        } else if (fightAction.charAt(0) == 'w') {
            alert(userName + " used \"Write\"!");
            userAccuNormal();
        } else if (fightAction.charAt(0) == 'c') {
            consumeCandy();
        }
};

var oneMoreTime = function() {
    var tempInput;
    do {
        do {
            tempInput = prompt("Do you want to play again?", "\'yes\' or \'no\'");
        }
        while (tempInput == null || tempInput == "");
    }
    while (tempInput.charAt(0) !== 'y' && tempInput.charAt(0) !== 'n');

    if (tempInput == 'y') {
        mainPageRun();
    } else if (tempInput.charAt(0) == 'n') {
        confirmExitRun();
    };
}

mainPageRun();

