//ask user for name
var name = prompt("Hi there, what's your name?");

if (name === "null" || name === "") {
    confirm("Are you sure your name is \" \" ?")
} else {
    alert("Nice to meet you, " + name + ".");
}

//if user key in anything other than required
var notRecognized = function() {
    alert("Hmm " + name + "... That choice is not recognized. You slip and fall into the abyss. :\(")
}

//ask user for year to go to
var year = Number(prompt("What year would you like to go to?"));

//year that user input is between year1 and year2
var yearRange = function(year1, year2) {
  return (year >= year1 && year <= year2)
};

//to uppercase user input
var uppercaseIt = function(word) {
  return word.toUpperCase()
};


//user wins game
var winsGame = function() {
  alert( name + ", you won!\nPat yourself on the back.")
}

//user loses game
var losesGame = function() {
  alert("Sorry " + name + ", you kinda lose!\nDon't be so hard on yourself.")
}

//the end
  var theEnd = function() {
    alert("The End.")
}


//year chosen
if (year >= 2015) {
  confirm("I see you're a fan of Back to the Future 2.");
  var biffOrGriff = uppercaseIt(prompt("Would you rather deal with Biff, or Griff?\n(Key 'B' for Biff, 'G' for Griff)"));

//user chooses Biff
  if (biffOrGriff === "B") {
    confirm("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward?");
    var standOrRun = uppercaseIt(prompt("Stand and fight (S) or Run like a coward (R)"));

  //user chooses stand and fight
      if (standOrRun === "S") {
        confirm("Good choice. Biff is old and feeble at this point.\nYou push him over and he falls in a pile of manure.")
        winsGame();
  //user chooses run
      } else if (standOrRun === "R") {
        confirm("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.")
        losesGame();
      } else {
        notRecognized();
      }

//user chooses Griff
  } else if (biffOrGriff === "G") {
    confirm("Griff is asking you if you are in, or out. What do you say?");
    var inOrOut = uppercaseIt(prompt("In (I) or Out (O)?"));

  //user chooses In
      if (inOrOut === "I") {
        confirm("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.")
        losesGame();
  //user chooses Out
      } else if (standOrRun === "O") {
        confirm("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.")
        winsGame();
      } else {
        notRecognized();
      }

  } else {
    notRecognized()
}

//year chosen
} else if (yearRange(1985,2014)) {
    var newName = prompt("Doc has already destroyed the Time Machine at this point.\nI guess you'll have to wait around until 2015.\nWhat name would you like to go by until then?")
    alert("Welcome to the future, " + newName + ".");

//year chosen
} else if (yearRange(1955,1984)) {
    alert("I see you're a fan of Back to the Future 1.\nYour future Mom has just asked you to the Enchantment Under the Sea dance.\nWhat do you do?");
    var sayToDance = uppercaseIt(prompt("Say Yes (Y), No (N) or Set her up with George (S)."))

  //user chooses yes
      if (sayToDance === "Y") {
        alert("Creepy. I hope you have some backup plan in place to get out of this.\nUntil then, you're stuck in 1955.")
        theEnd();
  //user chooses no
      } else if (sayToDance === "N") {
        alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.")
        theEnd();
  //user sets her up
      } else if (sayToDance === "S") {
        alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up.\nDespite going horribly awry, the plan ultimately works.\nYou may go back to your own time.")
        theEnd();
      } else {
        notRecognized();
      }

//year chosen
} else if (year < 1955) {
    alert("I see you're a fan of Back to the Future 3.\nYou've run out of gas and can't get back to your own time!\nHow do you power the Time Machine?")
    prompt("Horses (H),\nMoonshine (M),\nor Train (T)?")

//year chosen
} else {
    notRecognized();
}