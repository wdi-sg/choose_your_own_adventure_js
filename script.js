// prompt for playerName - gameQuestion "What is your name?"
// clear field after input entered
// player enter name . Taka userInput and store into playerName.
// prompt "Nice to meet you " + userInput. + " What year would you like to go to?"
// player enter year . fun checkYear


console.log("hello script js");

var currentStage = 0;

var yearChoice = ['2015', '1985', '1955'];
var yearMsg = ["I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**", "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?", "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do?**(Y/N/S)**"];

var charChoice = ['B', 'G'];
var charMsg = ["Hmm, interesting. Biff is angry and has a cane. Do you Stand and fight, or Run away like a coward? **(S/R)**", "Griff is asking you if you are in, or out. What do you say?**(I/O)**"];

var fightFlightChoice = ['S', 'R'];
var fightFlightMsg = ["Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.", "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."];


var inputHappened = function(currentInput){
    var tempInput = currentInput.toUpperCase();
    // CHECK STAGE PLAYER IS IN
    // RUN TIMETRAVEL STAGE ONLY IF CURRENT STAGE IS 0
    switch(currentStage){
        case 0:
            timeTravel(tempInput);
            console.log(currentStage);
            break;
        case 1:
            chooseChar(tempInput);
            console.log(currentStage);
            break;
        case 2:
            stayRun(tempInput);
            console.log(currentStage);
            break;
    }
};


var timeTravel = function (currentInput) {
    currentStage = 1;

    for (var i = 0; i < yearChoice.length; i++ ) {
        // PLAYER CHOOSE YEAR
        if (currentInput == yearChoice[i]) {
            // DISPLAY CHOSEN YEAR MSG
            display(yearMsg[i]);
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};

var chooseChar = function (currentInput) {
    currentStage = 2;

    for (var i = 0; i < charChoice.length; i++ ) {
        // PLAYER CHOOSE CHARACTER
        if (currentInput == charChoice[i]) {
            // DISPLAY CHOSEN YEAR MSG
            display(charMsg[i]);
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};


var stayRun = function (currentInput) {
    currentStage = 3;

    for (var i = 0; i < fightFlightChoice.length; i++ ) {
        // PLAYER CHOOSE CHARACTER
        if (currentInput == fightFlightChoice[i]) {
            // DISPLAY CHOSEN YEAR MSG
            display(fightFlightMsg[i]);
        }
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
    currentStage = currentStage + 1;
};



/*
            switch (yearChoice) {
                case '2015':
                    msg = "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B or G)";
                    break;
                case '1985':
                    msg = "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?"
                    break;
                default:
                    msg = "Please enter choice";
            } // END OF YEAR CHOICE  //////////////////
            display( msg );
            ////////////////////////////////////
            // PLAYER CHOOSE LEVEL ONE ACTION
            if (levelOneChoice == tempInput) {

                switch (levelOneChoice) {
                    case 'B': // Biff or Giff
                        msg = "Hmm, interesting. Biff is angry and has a cane. Do you STAND and fight, or RUN away like a coward? (S/R)";
                        break;
                    case 'G':
                        msg = "Griff is asking you if you are in, or out. What do you say? (I/O)"
                        break;
                    default:
                        msg = "Please enter choice";
                } // END OF LEVEL ONE CHOICE  //////////////////
                display( msg );
            }

        }
    // DISPLAY MSG TO OUTPUT
    display( msg );
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
}; // END OF inputHappened function //////////////////





    switch (levelTwoChoice) {
        case 'S': //Stand and fight
        msg = "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.";
        break;
        case 'R': // Run Away
        msg = "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.";
        break;

        case 'I':
        msg = "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you."
        break;
        case 'O':
        msg = "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure"
        break;
        msg = "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure."
        default:
        msg = "Please enter choice";
    }
*/