console.log("hello script js");
//storing user name in a variable
var userName =[];

//keep track of number of times user answer 2015 question
var year2015Answered = [];
var year1985to2014Answered =[];
var year1955to1984Answered =[];

//storing data as object
var response = {
    year2015: {
        reply1: "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff?\n(B/G)",
        biff: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? \n (S/R)" ,
        stand:"Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.\n The End",
        run:"You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice. \n The End",
        griff:"Griff is asking you if you are in, or out. What do you say? (I/O)"
    },
    year1985to2014: {
        reply1: "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?"
    }
}

// ask for username and display hello message. if user name has been entered then run check for year
var inputHappened = function(currentInput){
    if(username.length === 0 ) {
    userName.push(currentInput);
     console.log( currentInput );
    display( `Nice to meet you ${userName}, which year do you want to go?` );
    //run check for year if user name length is 1
    } else  {
        //consider using switch case
        if (year2015Answered.length === 0) {
            console.log(currentInput);
            checkForYear (currentInput);
        }else if (year2015Answered.length ===1) {
            biffOrGriff (currentInput);
        }else if (year2015Answered.length === 2 && (currentInput = "S" || "R")) {
            standRun (currentInput);
        }// how to run 1985 qns without clashing with  2015?
    }
};
// check for year and add 1 counter to year answered
var checkForYear = function (currentInput) {
    var year = parseInt(currentInput);
    //if year is 2015
    if (year === 2015) {
        display(response.year2015.reply1);
        year2015Answered.push("1");
        console.log(year2015Answered.length);
    //if year is between 1985 to 2014
    } else if (year<=2014 && year >=1985) {
        display(response.year1985to2014.reply1);
        year1955to1984Answered.push("1");
    }
}
//  to check B or G under year 2015 qns 1
var biffOrGriff = function (currentInput) {
    if (currentInput == "B") {
        display (response.year2015.biff);
        year2015Answered.push("2");
        console.log(year2015Answered.length);
    }else if (currentInput == "G") {
        display (response.year2015.griff);
         year2015Answered.push("2");
         console.log(year2015Answered.length);
    }
}
//to check if S or R under 2015 qns 2
var standRun = function (currentInput) {
    if (currentInput == "S") {
        display (response.year2015.stand);
    }else if (currentInput == "R") {
        display(reponse.year2015.run);
    }
}

//create function for griff
var name1985To2014 = function (currentInput) {
    var name = currentInput;
    display ("Welcome to the future" + name);
}