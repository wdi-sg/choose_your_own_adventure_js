var step1 = {
    option1: "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)",
    option2: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)",
    option3: "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?",
    option4: "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine?"
}




// * I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**
//         * `B`iff
//             * Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)**
//                 * `S`tand and fight
//                     * Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.
//                 * `R`un like a coward
//                     * You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.
//         * `G`riff
//             * Griff is asking you if you are in, or out. What do you say? **(I/O)**
//                 * `I`n
//                     * Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.
//                 * `O`ut
//                     * Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.


var game = {
   //move years here
    stage1 : {

        message  : [
        "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
        ],

        choice : [
        {
            option1: "B",
            option2: "G"

        }]
    }

    biff : {

        message  : [
        "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)"
        ],

        choice : [
        {
            option1: "S",
            option2: "R"

        }]
    }

    griff : {

        message  : [
        "Griff is asking you if you are in, or out. What do you say? **(I/O)"
        ],

        choice : [
        {
            option1: "I",
            option2: "O"

        }]
    }

    standAndFight: {

        message  : [
        "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
        ],

        choice : [
        {
            option1: "B",
            option2: "G"

        }]
    }

     runLikeACoward: {

        message  : [
        "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
        ],

        choice : [
        {
            option1: "B",
            option2: "G"

        }]
    }

     : {

        message  : [
        "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
        ],

        choice : [
        {
            option1: "B",
            option2: "G"

        }]
    }

     standAndFight: {

        message  : [
        "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
        ],

        choice : [
        {
            option1: "B",
            option2: "G"

        }]
    }

}





var step2option1 = {
    option1: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)",
    option2: "Griff is asking you if you are in, or out. What do you say? (I/O) "
}

var step2option2 = {
    option1: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)",
    option2: "Griff is asking you if you are in, or out. What do you say? (I/O) "
}

var step2option3 = {
    option1: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)",
    option2: "Griff is asking you if you are in, or out. What do you say? (I/O) "
}

var inputHappened = function(currentInput){
    console.log( currentInput );

   var stage1 = currentInput;

  if (stage1 >= 2015) {
            message =  step1.option1;
             var stage2 = currentInput;
             console.log(stage2);


             // if (stage2 === "b") {
             //    console.log("i am b")
             //     message = "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)"
             //    } else if (stage2 === "g") {
             //        message = "Griff is asking you if you are in, or out. What do you say? **(I/O)"
             //    };
  } else if ( stage1 <= 2014 && stage1 >= 1985) {
             message = step1.option2;

  } else if (stage1 <= 1984 && stage1 >= 1955) {
            message = step1.option3;
            // answer1 = option3;
  } else if ( stage1 < 1955) {
            message = step1.option4;
            // answer1 = option4;
  }






 return message;


}