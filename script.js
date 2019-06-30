// prompt for playerName - gameQuestion "What is your name?"
// clear field after input entered
// player enter name . Taka userInput and store into playerName.
// prompt "Nice to meet you " + userInput. + " What year would you like to go to?"
// player enter year . fun checkYear


console.log("hello script js");

var nextStage = 0;
var msg = 0;

var yearChoice = ['2015', '1985', '1955'];
var yearMsg = ["I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**", "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?", "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do?**(Y/N/S)**"];

var charChoice = ['B', 'G'];
var charMsg = ["Hmm, interesting. Biff is angry and has a cane. Do you Stand and fight, or Run away like a coward? **(S/R)**", "Griff is asking you if you are in, or out. What do you say?**(I/O)**"];

var fightFlightChoice = ['S', 'R'];
var fightFlightMsg = ["Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.", "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."];

var inOutChoice = ['I', 'O'];
var inOutMsg = ["Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.", "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure."];


var inputHappened = function(currentInput){
    var tempInput = currentInput.toUpperCase();
    // CHECK STAGE PLAYER IS IN
    // RUN TIMETRAVEL STAGE ONLY IF CURRENT STAGE IS 0
    switch(nextStage){
        case 0:
            display("Please choose year: 2015, 1985, or 1955");
            break;
        case 1:
            year(tempInput);
            display(msg);
            break;
        case 2:
            biffOrGriff(tempInput);
            display(msg);
            break;
        case 3:
            stayRun(tempInput);
            display(msg);
            break;
        case 4:
            inOrOut(tempInput);
            display(msg);
            break;
        default:
            display("please enter choice");
    }
};


var year = function (currentInput) {
    for (var i = 0; i < yearChoice.length; i++ ) {
        if (currentInput == yearChoice[i]) {
            msg = yearMsg[i];
            nextStage = 1;
            return msg;
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};

var biffOrGriff = function (currentInput) {
    for (var i = 0; i < charChoice.length; i++ ) {
        if (currentInput == charChoice[i]) {
            var msg = charMsg[i];
            nextStage = 2;
            return msg;
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};


var stayRun = function (currentInput) {
    for (var i = 0; i < fightFlightChoice.length; i++ ) {
        if (currentInput == fightFlightChoice[i]) {
            var msg = fightFlightMsg[i];
            return msg;
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};

var inOrOut = function (currentInput) {
    for (var i = 0; i < inOutChoice.length; i++ ) {
        if (currentInput == inOutChoice[i]) {
            var msg = inOutMsg[i];
            return msg;
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};