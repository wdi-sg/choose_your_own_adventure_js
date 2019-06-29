console.log("may the best survivor win");

//variables to capture player determined information
var name = prompt("Please enter your name");
console.log ("Players name is " + name);

var outplayPts = prompt("On a scale of 1-5, how strong is your social game?")
console.log ("Social game score is " + outplayPts);

var outwitPts = prompt("On a scale of 1-5, how strategic are you?")
console.log ("Strategic game score is " + outwitPts);

//var to hold running score
var survivorTally = +outplayPts + +outwitPts;
console.log ("Tally is " + survivorTally);

//welcome message to start game rolling
display("Hi " + name + "! You have just arrived on the beach with your new tribe. What would you do first?" + "\n" + "1. Make shelter" + "\n" + "2. Make alliances" + "\n" + "3. Search for an idol" + "\n" + "4. Chill" + "\n" + "(type: shelter/alliances/idol/chill)");

//objects to hold information for each option
var shelter = {
    actionTitle: "make shelter",
    displayMsg1: "You have chosen to build the shelter first. There is some wood lying around camp which looks sufficient for a basic structure. What would you like to do next:" + "\n" + "1. Start building with what you have" + "\n" + "2. Gather more wood",
    options: [
    {
        secondAction: "gather wood",
        message: "Wood Hoo!"
    },
    {
        secondAction: "start build",
        message: "bob the builder"
    }
    ]
};

var alliances = {
    actionTitle: "make alliances",
    displayMsg1: "You have chosen to start building alliances. Who would you like to speak with:" + "\n" + "1. The quiet girl whom you haven't spoken to since the game started" + "\n" + "2. The outgoing chap who said hi earlier" + "\n" + "3. The older male who's sharing his ideas on how to get fire going",
    options: ['alliance1', 'alliance2']
};

var idol = {
    actionTitle: "search for idol",
    displayMsg1: "You have decided to launch a search for the hidden immunity idol. Would you like to search:" + "\n" + "1. Near the watering hole" + "\n" + "2. Amongst the trees and brush",
    options: ['idol1', 'idol2']
};

var chill = {
    actionTitle: "chilling",
    displayMsg1: "You probably signed up for the wrong game... Your tribe mates are getting frustrated at you slacking off. It's still early in the game and not too late to get back into the game if you want." + "\n" + "1. Time to get into the game!" + "\n" + "Nah. This is it for me.",
    options: ['start over', 'quit the game']
};

//SURVIVOR GAME FUNCTION
var inputHappened = function(currentInput) {
    if(currentInput === "shelter"){
        display(shelter.displayMsg1);
        survivorTally = survivorTally + 2;
    }else if (currentInput === "alliances"){
        display(alliances.displayMsg1);
        survivorTally = survivorTally + 1;
    }else if (currentInput === "idol") {
        display(idol.displayMsg1);
        survivorTally = survivorTally + 1;
    }else if (currentInput === "chill") {
        display(chill.displayMsg1)
        survivorTally = survivorTally - 5;
    };
};