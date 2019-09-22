console.log("hello script js");

//Guitar Hero

//global variables
var stage = 0;
var playerName = prompt ("Welcome to Guitar Hero." + " Enter your name in the box.");
var date = prompt ("We're going to travel back in time to learn the ways of Guitar gods." + " Enter in one of three years, 1969, 1979, or 1989, and press enter again");

var Jimi = {
Age: 27,
Wisdom: "Sometimes you want to give up the guitar, you'll hate the guitar. But if you stick with it, you're gonna be rewarded."
}

var Robbie = {
Age: 76,
Wisdom: "I play guitar quite a bit, because I'm always in search of something. I don't play to jam, but because I'm fishing. I'm looking for something, that I hope you can never find. If I do find it, I'm afraid I won't have a need to do this any more."
}

function nextStage () {
    stage ++;
}

function previousStage() {
    stage --;
}


function startJourney () {
    if (stage === 0) {
        var output = name + "," + " You've travelled back to " + date + " to meet either of two guitar gods."
        nextStage ();
        display(output);
        console.log (stage);
    }
}

startJourney();

alert ("enter your chosen date again to start quest");

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (stage === 1 && currentInput.includes("1969")) {
    nextStage();
    output = "Choose between Jimi (J) or Robbie (R)";
    return output;
} else if (stage === 2 && currentInput.includes("J")) {
            output = "Hendrix passed away at" + " " + Jimi.Age + "." + " He said" + " " + Jimi.Wisdom + " To learn from Robbie, press R. Or enter another year (1979 or 1989)";
            return output;
} else if (stage === 2 && currentInput.includes("R")) {
            output = "Robbie is currently" + " " + Robbie.Age + "." + " He said" + " " + Robbie.Wisdom + " To learn from Jimi press J. Or enter another year (1979 or 1989)";
            return output;
} else if (stage === 1 && currentInput.includes("1979")) {
    output = "john says hi";
    nextStage();
    return output
}
};