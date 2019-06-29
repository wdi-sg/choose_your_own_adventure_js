// prompt for playerName - gameQuestion "What is your name?"
// clear field after input entered
// player enter name . Taka userInput and store into playerName.
// prompt "Nice to meet you " + userInput. + " What year would you like to go to?"
// player enter year . fun checkYear


console.log("hello script js");

var choice;
var msg;

var inputHappened = function(currentInput){
    choice = currentInput;
    console.log( currentInput );
    //return msg;

    switch (choice) {
      case '2015':
          msg = "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B or G)";
          break;
        case 'B': // Biff or Giff
          msg = "Hmm, interesting. Biff is angry and has a cane. Do you STAND and fight, or RUN away like a coward? (S/R)";
          break;
        case 'S': //Stand and fight
          msg = "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.";
          break;
        case 'R': // Run Away
          msg = "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.";
          break;
        case 'G':
            msg = "Griff is asking you if you are in, or out. What do you say? (I/O)"
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

    display( msg );
};