console.log("hello script js");


//Guitar Hero

//global variables
var stage = 0;
var name = prompt ("Welcome to Guitar Hero." + " Enter your name in the box.");
var date = prompt ("We're going to travel back in time to learn the ways of Guitar gods." + " Enter in one of two years, 1969 or 1979, and press enter again");

//guitar players you'll meet
var Jimi = {
Age: 27,
Info: "Hendrix's performance at Woodstock '69 is still considered to be one of the most coveted in rock history"
}

var Robbie = {
Age: 76,
Info: "In 1969, Robbie Robertson formed The Band, one of the celebrated Canadian-American Roots Rock group."
}

var Dylan = {
Age: 78,
Info: "In 1979, Bob Dylan released Slow Train Coming, his first record since converting to Christianity"
}

var Page = {
Age: 75,
Info: "In 1979, Jimmy Page, along with Led Zeppelin, performed made a successful concert return to Knebworth, England."
}

//counter values

function nextStage () {
    stage ++;
}

function previousStage() {
    stage --;
}

function start() {
    stage = 1;
}

var display = function( data ){
    console.log("we've arrived");
  var displayElement = document.querySelector('#output');
  // get rid of the entire contents
  displayElement.innerHTML = "Choose between 1969 and 1979 to get started.";

  // put the data into the div
  output.innerText = "Null";
};

// function startJourney () {
//     console.log("startJourney");
//     if (stage === 0) {
//         var output = name + "," + " You've travelled back to " + date + " to meet either of two guitar gods."
//         nextStage ();
//         return display;
//         console.log (stage);
//     }
// }

// startJourney();



//beginning of game

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (stage === 1 && currentInput.includes(parseInt("1969"))) {
    nextStage();
    output = "Choose between Jimi (J) or Robbie (R)";
    return output;
} else if (stage === 2 && currentInput.includes("J")) {
            output = "Hendrix passed away at" + " " + Jimi.Age + "." + " " + " To learn about Robbie, press R. Or type in Go to return to the start.";
            return output;
} else if (stage === 2 && currentInput.includes("R")) {
            output = "Robbie is currently" + " " + Robbie.Age + "." + " " + Robbie.Info + " To learn about Jimi press J. Or type in Go to return to the start.";
            return output;
} else if (stage === 2 && currentInput.includes("Go")) {
            output = "You are back at the start. Enter in 1969 or 1979";
            start ();
            return output;
} else if (stage === 1 && currentInput.includes(parseInt("1979"))) {
    nextStage();
    output = "Choose between Jimmy Page (P) and Bob Dylan (D).";
    return output;
} else if (stage === 2 && currentInput.includes("P")) {
    output = "At" + Page.Age + " Seminal guitarist Jimmy Page is still going strong." + " " + "One of his more memorable performance came" + Page.Info + " To learn about Bob Dylan, type in D. Or type in Go to return to the start."
    return output;
} else if (stage === 2 && currentInput.includes("D")) {
    output = "Bob Dylan is currently" + " " + Dylan.Age + " " + Dylan.Info + "." + " To learn about Jimmy Page, type in P. Or type in Go to return to the start."
    return output;
}
};