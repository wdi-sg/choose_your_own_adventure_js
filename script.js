console.log("hello script js");

var nextStage = 0;

var playerName = "";
var initMsg = "What is your name?";

var score = 0;
var msg;

var yearChoice = ['2015', '1985', '1955'];
var yearMsg = ["I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**", "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?", "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do?**(Y/N/S)**"];

var charChoice = ['B', 'G'];
var charMsg = ["Hmm, interesting. Biff is angry and has a cane. Do you Stand and fight, or Run away like a coward? **(S/R)**", "Griff is asking you if you are in, or out. What do you say?**(I/O)**"];

var fightFlightChoice = ['S', 'R'];
var fightFlightMsg = ["Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.", "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."];

var inOutChoice = ['I', 'O'];
var inOutMsg = ["Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.", "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure."];

var underTheSeaChoice = ['Y', 'N', 'S'];
var underTheSeaMsg = ["Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955", "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.", "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time."];


displayStory(initMsg);
displayScore(score);

var inputHappened = function(currentInput){
    console.log("Input happened!", currentInput);
    var tempInput = currentInput.toUpperCase();

    // CHECK STAGE PLAYER IS IN AND DIRECT THEM TO PATH ACCORDINGLY
    switch(nextStage){
        case 0:
            console.log("case 0!");
            promptName(tempInput);
            displayStory("Welcome " + tempInput);
            displayStory("Hello " + tempInput + ", which year would you like to time travel to? 2015, 1985 or 1955");
            console.log("going to case: ", nextStage);
            console.log("hello: ", playerName);
            break;
        case 1:
            console.log("case 1!");
            year(tempInput);
            displayStory(msg);
            break;
        case 2:
            console.log("case 2!");
            biffOrGriff(tempInput);
            displayStory(msg);
            break;
        case 3:
            console.log("case 3!");
            stayRun(tempInput);
            displayStory(msg);
            break;
        case 4:
            console.log("case 4!");
            inOrOut(tempInput);
            displayStory(msg);
            break;
        case 5:
            console.log("case 5!");
            underTheSea(tempInput);
            displayStory(msg);
            break;
        case 6:
            console.log("case 6!");
            timeMachineDestroyed(tempInput);
            displayStory(msg);
            break;
        default:
            displayStory("please enter choice");
    }
};

// PROMPT FOR PLAYER NAME
var promptName = function(currentInput) {
    playerName = currentInput;
    document.querySelector('#input').value="";
    nextStage = 1;
    return playerName;
}

var updateScore = function(score) {
    displayScore(score);
}

// STAGES OF THE GAME
var year = function (currentInput) {
    console.log("stage: year");
    for (var i = 0; i < yearChoice.length; i++ ) {
        if ((currentInput === yearChoice[i]) && (nextStage === 1)) {
            msg = yearMsg[i];
            // CLEAR INPUT BOX IF MATCH FOUND
            console.log("nextStage value in year function: ", nextStage);

            // DIRECT USER TO CORRECT PATH BASED ON INPUT
            if (yearChoice[i] === '2015') {
                nextStage = 2;
            } else if (yearChoice[i] === '1985') {
                nextStage = 6;
            } else if (yearChoice[i] === '1955') {
                nextStage = 5;
            } else {
                document.querySelector('#input').value="";
            }
            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
            return msg;
        } else {
            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
        }
    }
    // CLEAR INPUT BOX
    // FUNCTION ONLY RUN TIS PART IF NO MATCH FOUND
    document.querySelector('#input').value="";
};

var biffOrGriff = function (currentInput) {
    console.log("stage: biff or giff");
    for (var i = 0; i < charChoice.length; i++ ) {
        if (currentInput === charChoice[i]) {
            msg = charMsg[i];

            // DIRECT USER TO CORRECT PATH BASED ON INPUT
            if (charChoice[i] === 'G') {
                console.log('G selected!!!');
                nextStage = 4;
                console.log('Going to stage:', nextStage);
            } else if (charChoice[i] === 'B') {
                console.log('B selected!!!');
                nextStage = 3;
                console.log('Going to stage:', nextStage);
            } else {
                // STAY IN BIFF & GRIIF STAGE
                console.log('STAY IN B&G**');
                nextStage = 2;
            }

            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
            return msg;
        } else {
            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};


var stayRun = function (currentInput) {
    console.log("stage: stay or run");
    for (var i = 0; i < fightFlightChoice.length; i++ ) {
        if (currentInput == fightFlightChoice[i]) {
            msg = fightFlightMsg[i];

            // DIRECT USER TO CORRECT PATH BASED ON INPUT
            if (fightFlightChoice[i] === 'S') {
                console.log('STAY selected!!! Good choice!');
                score = score + 1;
                console.log("score: " + score);
                console.log('END OF GAME');
            } else if (fightFlightChoice[i] === 'R') {
                console.log('R selected!!!');
                console.log('END OF GAME');
            } else {
                // STAY IN STAY OR RUN STAGE
                console.log('STAY IN S&R**');
                nextStage = 3;
            }// END OF DIRECT USER TO CORRECT PATH BASED ON INPUT

            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
            updateScore(score);
            return msg;
        } else {
            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};

var inOrOut = function (currentInput) {
    console.log("stage in or out");
    for (var i = 0; i < inOutChoice.length; i++ ) {
        if (currentInput == inOutChoice[i]) {
            msg = inOutMsg[i];
            console.log('answer:' + inOutChoice[i]);
            // DIRECT USER TO CORRECT PATH BASED ON INPUT
            if (inOutChoice[i] === 'I') {
                console.log('IN selected!!! Bad Call!');
                console.log('END OF GAME');
                nextStage = 4;
            } else if (inOutChoice[i] === 'O') {
                console.log('OUT selected!!! Good Call!');
                console.log('END OF GAME');
                score = score + 1;
                nextStage = 4;
            } else {
                // STAY IN STAY OR RUN STAGE
                console.log('STAY IN INorOUT STAGE**');
                nextStage = 4;
            }// END OF DIRECT USER TO CORRECT PATH BASED ON INPUT

            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
            updateScore(score);
            return msg;
        } else {
            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};

var underTheSea = function (currentInput) {
    console.log("stage: under the sea");
    for (var i = 0; i < underTheSeaChoice.length; i++ ) {
        if (currentInput == underTheSeaChoice[i]) {
            msg = underTheSeaMsg[i];

            nextStage = nextStage + 1;
            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
            return msg;
        } else {
            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};