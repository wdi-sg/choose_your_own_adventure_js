console.log("hello script js");
//storing user name in a variable
var userName =[];

//keep track of questions answered
var questionAnswered = [];

//keep track of which year did user choose
var yearAnswered = [];

//keep track of which character did user choose

var character= [];

//store the various form of answers as objects to keep things simple
var response = {
    year2015: {
        reply1: "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff?\n(B/G)",
        biff: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? \n (S/R)" ,
        stand:"Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.\n The End",
        run:"You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice. \n The End",
        griff:"Griff is asking you if you are in, or out. What do you say? \n (I/O)",
        in: "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you. \n The End",
        out: "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure. \n The End"
    },
    year1985to2014: {
        reply1: "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?"
    },
    year1995to1984: {
        reply1: "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)",
        yes: "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.",
        no: "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.",
        setHer: "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time."
    }
}

// ask for username and display hello message. if user name has been entered then run check for year. note: add 1 counter to var question
var inputHappened = function(currentInput){
    if(questionAnswered.length === 0 ) {
    userName.push(currentInput);
     console.log( currentInput );
    display( `Nice to meet you ${userName}, which year do you want to go?` );
    questionAnswered.push("1");
    //run check for year if user name length is 1
    } else  {
        if (questionAnswered.length === 1) {
            console.log(currentInput);
            checkForYear (currentInput);
            questionAnswered.push("2");
        }else if (questionAnswered.length === 2 ) {
            biffOrGriff (currentInput);
            questionAnswered.push("3");
            //edit this check counter and character name
        }else if (questionAnswered.length === 3 && (character == "B")) {
            standRun (currentInput);
        }else if (questionAnswered.length === 3 && (character == "G")) {
            InOut (currentInput);
        }
    }
}

// check for year and give a response for different year
var checkForYear = function (currentInput) {
    var year = parseInt(currentInput);
    //if year is 2015
    if (year === 2015) {
        display(response.year2015.reply1);
        yearAnswered.push(currentInput);
        console.log(yearAnswered);
    //if year is between 1985 to 2014
    } else if (year<=2014 && year >=1985) {
        display(response.year1985to2014.reply1);
        yearAnswered.push(currentInput);
        console.log(yearAnswered);
    }
}

//  to check B or G under year 2015 qns 1
var biffOrGriff = function (currentInput) {
    if (currentInput == "B") {
        display (response.year2015.biff);
        character.push(currentInput);
        console.log(character);
    }else if (currentInput == "G") {
        display (response.year2015.griff);
        character.push(currentInput);
        console.log(character);
    }
}
//to check if S or R under 2015 bliff qns 2
var standRun = function (currentInput) {
    if (currentInput == "S") {
        console.log(currentInput);
        display (response.year2015.stand);
    }else if (currentInput == "R") {
        console.log(currentInput);
        display(reponse.year2015.run);
    }
}
// to check if I or O under 2015 giff qns 2
var InOut = function (currentInput) {
    if (currentInput == "I") {
        console.log(currentInput);
        display (response.year2015.in);
    }else if (currentInput == "O") {
        console.log(currentInput);
        display (response.year2015.out);
    }
}
/*
//create function for griff
var name1985To2014 = function (currentInput) {
    var name = currentInput;
    display ("Welcome to the future" + name);
}
*/