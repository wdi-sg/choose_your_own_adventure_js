// prompt for playerName - gameQuestion "What is your name?"
// clear field after input entered
// player enter name . Taka userInput and store into playerName.
// prompt "Nice to meet you " + userInput. + " What year would you like to go to?"
// player enter year . fun checkYear


console.log("hello script js");

var nextStage = 1;
var msg = "Hello, which year would you like to time travel to? 2015, 1985 or 1955";

var yearChoice = ['2015', '1985', '1955', '1988'];
var yearMsg = ["I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**", "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?", "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do?**(Y/N/S)**"];

var charChoice = ['B', 'G'];
var charMsg = ["Hmm, interesting. Biff is angry and has a cane. Do you Stand and fight, or Run away like a coward? **(S/R)**", "Griff is asking you if you are in, or out. What do you say?**(I/O)**"];

var fightFlightChoice = ['S', 'R'];
var fightFlightMsg = ["Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.", "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."];

var inOutChoice = ['I', 'O'];
var inOutMsg = ["Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.", "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure."];

var underTheSeaChoice = ['Y', 'N', 'S'];
var underTheSeaMsg = ["Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955", "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.", "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time."];


displayStory(msg);

var inputHappened = function(currentInput){
    console.log("Input happened!", currentInput);
    var tempInput = currentInput.toUpperCase();


    // CHECK STAGE PLAYER IS IN
    // RUN TIMETRAVEL STAGE ONLY IF CURRENT STAGE IS 0
    switch(nextStage){
        // case 0:
        //     console.log("case 0!");
        //     displayStory(msg);
        //     nextStage = nextStage + 1;
        //     console.log(nextStage);
        //     break;
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
        default:
            displayStory("please enter choice");
    }
};


var year = function (currentInput) {
    console.log("stage: year");
    for (var i = 0; i < yearChoice.length; i++ ) {
        if ((currentInput === yearChoice[i]) && (nextStage === 1)) {
            msg = yearMsg[i];
            // nextStage = 1;
            // CLEAR INPUT BOX IF MATCH FOUND
            console.log("nextstage value in year function: ", nextStage);
            // nextStage = nextStage + 1;
            nextStage = 2;
            // console.log("nextstage value in year function after update: ", nextStage);
            document.querySelector('#input').value="";
            return msg;
        } else {
            // FUNCTION ONLY RUN TIS PART IF NO MATCH FOUND
            document.querySelector('#input').value="";
            // console.log("nextstage value in year function after else: ", nextStage); // CONSOLE LOG RUNS yearChoice.length TIMES IF NO MATCH FOUND
        }
    }
    // CLEAR INPUT BOX
    // FUNCTION ONLY RUN TIS PART IF NO MATCH FOUND
    // console.log("nextstage value in year function after for loop: ", nextStage);
    document.querySelector('#input').value="";
};

var biffOrGriff = function (currentInput) {
    console.log("stage: biff or giff");
    for (var i = 0; i < charChoice.length; i++ ) {
        if (currentInput === charChoice[i]) {
            msg = charMsg[i];
            // CHECK NEXT STAGE VALUE
            // console.log("nextstage value in biffOrGriff function: ", nextStage); // THIS RAN 2ND
            // UPDATE NEXT STAGE VALUE
            // nextStage = nextStage + 1;

            // ADDED CONDITIONS CHECKING WHICH STAGE TO MOVE ON TO BASED ON INPUT
            // HMM... THIS CONDITIONS BELOW DOES NOT ALLOW USER TO PROGRESS TO STAY OR RUN IF THEY CHOOSE 'B'
            if (currentInput === 'G') {
                nextStage = 4;
            } else {
                nextstage = 3;
            }
            // console.log("nextstage value in year function after update: ", nextStage); // THIS RAN LAST
            // CLEAR INPUT BOX
            document.querySelector('#input').value="";
            return msg;
        } else {
            document.querySelector('#input').value="";
            // console.log("nextstage value in biffOrGriff function after else: ", nextStage); // WEIRD.... THIS RAN 1ST
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
            console.log("nextstage value in stayRun function: ", nextStage);
            // CHECK NEXT STAGE VALUE
            // nextStage = nextStage + 1;
            nextStage = 4;
            // console.log("nextstage value in stayRun function after update: ", nextStage);
            document.querySelector('#input').value="";
            return msg;
        } else {
            document.querySelector('#input').value="";
            // console.log("nextstage value in stayRun function after else: ", nextStage);
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
            // console.log("nextstage value in inOrOut function: ", nextStage);
            //nextStage = nextStage + 1;
            // console.log("nextstage value in inOrOut function after update: ", nextStage);
            document.querySelector('#input').value="";
            return msg;
        } else {
            document.querySelector('#input').value="";
            // console.log("nextstage value in inOrOut function after else: ", nextStage);
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};

// UNDER THE SEA DOES NOT WORK WITH SWTICH CASE AS WE CAME TO THIS STAGE FROM YEAR STAGE WHICH MEAN nextStage is updated to 2. BUT underTheSea is only called when case 5. THIS METHOD OF CASSCADING CHOICES DOES NOT WORK IF THE STORY IS IN A DIFFERENT BRAND OF PATH.
var underTheSea = function (currentInput) {
    console.log("stage: under the sea");
    for (var i = 0; i < underTheSeaChoice.length; i++ ) {
        if (currentInput == underTheSeaChoice[i]) {
            msg = underTheSeaMsg[i];
            // console.log("nextstage value in underTheSea function: ", nextStage);

            nextStage = nextStage + 1;
            // console.log("nextstage value in underTheSea function after update: ", nextStage);
            document.querySelector('#input').value="";
            return msg;
        } else {
            document.querySelector('#input').value="";
            // console.log("nextstage value in underTheSea function after else: ", nextStage);
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};