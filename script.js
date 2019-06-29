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

//var to track path that player is on
var gamePath = 0;
console.log ("Game path is " + gamePath);

//welcome message to start game rolling
display("Hi " + name + "! You have just arrived on the beach with your new tribe. What would you do first?" + "\n" + "1. Make shelter" + "\n" + "2. Make alliances" + "\n" + "3. Search for an idol" + "\n" + "4. Chill" + "\n" + "(type: shelter/alliances/idol/chill to select option)");

//objects to hold information for each option
var shelter = {
    actionTitle: "make shelter",
    displayMsg1: "You have chosen to build the shelter first. There is some wood lying around camp which looks sufficient for a basic structure. What would you like to do next:" + "\n" + "1. Start building with what you have" + "\n" + "2. Gather more wood" + "\n" + "(type: build/wood to select option)",
    adjustTally: + +2,
};

var alliances = {
    actionTitle: "make alliances",
    displayMsg1: "You have chosen to start building alliances. Who would you like to speak with:" + "\n" + "1. The quiet girl whom you haven't spoken to since the game started" + "\n" + "2. The outgoing chap who said hi earlier" + "\n" + "3. The older male who's sharing his ideas on how to get fire going",
    adjustTally: + +1,
    options: ['alliance1', 'alliance2']
};

var idol = {
    actionTitle: "search for idol",
    displayMsg1: "You have decided to launch a search for the hidden immunity idol. Would you like to search:" + "\n" + "1. Near the watering hole" + "\n" + "2. Amongst the trees and brush" + "\n" + "(type: water/trees to select option)",
    adjustTally: + +1,
    options: ['idol1', 'idol2']
};

var chill = {
    actionTitle: "chilling",
    displayMsg1: "You probably signed up for the wrong game... Your tribe mates are getting frustrated with you slacking off. It's still early in the game and not too late to get back into the game if you want." + "\n" + "1. Time to get into the game!" + "\n" + "Nah. This is it for me." + "\n" + "(type: game/quit to select option)",
    adjustTally: - +5,
    options: ['start over', 'quit the game']
};

var wood = {
    actionTitle: "gather wood",
    displayMsg1: "You look for suitable material to build the shelter with. While trying to break off a branch from a sturdy tree, you notice the tail-end of some coloured string sticking out from a hole in the tree." + "\n" + "Do you want to check it out?" + "\n" + "(type: y/n to select option)",
    adjustTally: + +2,
};

var hardwork = {
    displayMsg1: "You manage to gather lots of useful material and your tribe mates see you as a hardworking individual! Great job!",
    adjustTally: + +1,
};

var idolClue = {
    displayMsg1: "**WELL DONE " + name + "! You have found a clue to a hidden immunity idol!**",
    adjustTally: + +5,
};
//"You have found a clue to a hidden immunity idol!" + "\n" + "|@@@@|     |####|" + "\n" + "|@@@@|     |####|"

var eliminated = {
    displayMsg1: "Jeff Probst: " + name + ", your tribe has spoken.",
};

//SURVIVOR GAME FUNCTION
//first, player selects first path to be on
var inputHappened = function(currentInput) {
    if(currentInput === "shelter"){
        display(shelter.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + shelter.adjustTally;
        gamePath = "shelterPath";

    }else if (currentInput === "alliances"){
        display(alliances.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + alliances.adjustTally;
        gamePath = "alliancesPath";

    }else if (currentInput === "idol") {
        display(idol.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + idol.adjustTally;
        gamePath = "idolPath";

    }else if (currentInput === "chill") {
        display(chill.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + chill.adjustTally;
        gamePath = "chillPath";

//to access SECOND level actions
    }else if (currentInput === "wood" && gamePath === "shelterPath") {
        display(wood.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + wood.adjustTally;

    }else if (currentInput === "build" && gamePath === "shelterPath") {
        display(build.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + wood.adjustTally;

    }else if (currentInput === "trees" && gamePath === "idolPath") {
        display(idolClue.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + idolClue.adjustTally;

    //to restart function if player wants to start again
    }else if (currentInput === "game" && gamePath === "chillPath") {
        display("What would you do?" + "\n" + "1. Make shelter" + "\n" + "2. Make alliances" + "\n" + "3. Search for an idol" + "\n" + "4. Chill" + "\n" + "(type: shelter/alliances/idol/chill to select option)");
        clearInput("");
        return;

    }else if (currentInput === "quit" && gamePath === "chillPath") {
        display("You continue to slack off till your tribe mates can take it no longer. " + "\n" + eliminated.displayMsg1);
        clearInput("");
        survivorTally = 0;

// to access THIRD level actions
    }else if (currentInput === "y" && gamePath === "shelterPath") {
        display(idolClue.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + idolClue.adjustTally;

    }else if (currentInput === "n" && gamePath === "shelterPath") {
        display(hardwork.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + hardwork.adjustTally;
    }


    console.log(gamePath);
    console.log("Tally is now " + survivorTally);
};