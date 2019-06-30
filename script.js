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

//var to track if player has immunity
var immunity = false;
console.log ("Player has immunity " + immunity);

//var to track player's main alliance
var friend = "Gina";

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
    displayMsg1: "You have chosen to start building alliances. Who would you like to speak with:" + "\n" + "1. Sarah - The quiet and nerdy girl whom you haven't spoken to since the game started" + "\n" + "2. Mark - The well-built, outgoing chap who said hi earlier" + "\n" + "3. Dennis - The older male who's sharing his ideas on how to get the fire going" + "\n" + "(type: Sarah/Mark/Dennis to select option)",
    adjustTally: + +1,
};

var idol = {
    actionTitle: "search for idol",
    displayMsg1: "You have decided to launch a search for the hidden immunity idol. Would you like to search:" + "\n" + "1. Near the watering hole" + "\n" + "2. Amongst the trees and brush" + "\n" + "(type: water/trees to select option)",
    adjustTally: + +1,
};

var chill = {
    actionTitle: "chilling",
    displayMsg1: "You probably signed up for the wrong game... Your tribe mates are getting frustrated with you slacking off. It's still early in the game and not too late to get back into the game if you want." + "\n" + "1. Time to get into the game!" + "\n" + "Nah. This is it for me." + "\n" + "(type: game/quit to select option)",
    adjustTally: - +5,
};

var wood = {
    actionTitle: "gather wood",
    displayMsg1: "You look for suitable material to build the shelter with. While trying to break off a branch from a sturdy tree, you notice the tail-end of some coloured string sticking out from a hole in the tree." + "\n" + "Do you want to check it out?" + "\n" + "(type: y/n to select option)",
    adjustTally: + +2,
};

var build = {
    displayMsg1: "How will you contribute to the shelter build?" + "\n" + "1. Chop the wood to the correct length" + "\n" + "2. Weave leaves for the roof" + "\n" + "(type: chop/weave to select option)",
    adjustTally: + +1,
};

var water = {
    displayMsg1: "You search around the watering hole but find nothing. You hear people approaching and they are whispering. Do you want to:" + "\n" + "1. Stay and try to listen to the conversation" + "\n" + "2. Run away and head back to camp" + "\n" + "(type: stay/run to select option)",
};

var hardwork = {
    displayMsg1: "Your tribe mates see you as a hardworking individual! Great job!",
    adjustTally: + +1,
};

var idolClue = {
    displayMsg1: "**WELL DONE " + name + "! You have found a clue to a hidden immunity idol!**" + "\n" + "It reads: 'The idol is hidden in plain sight under the tribe flag. However, it will only be there for the next 1 hour.'" + "\n" + "Do you want to make a dash for it and try to get the idol OR forgo the opportunity as you don't want to be an open target?" + "\n" + "(type: dash/forgo to select option)",
    adjustTally: + +2,
};

var medEvac = {
    displayMsg1: "Oh no! You were chopping wood when the machete slipped from your hand and gave you a nasty gash on your forehead!" + "\n" + "Unfortunately, the medical team has made an assessment that further treatment is required and you will be medically evacuated from the game. Get well soon " + name + "!",
};

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
        survivorTally = survivorTally + build.adjustTally;

    }else if (currentInput === "trees" && gamePath === "idolPath") {
        display(idolClue.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + idolClue.adjustTally;
        gamePath = "immunityPath";

    }else if (currentInput === "water" && gamePath === "idolPath") {
        display(water.displayMsg1);
        clearInput("");

    }else if ((currentInput === "Sarah" || currentInput === 'Mark' || currentInput === "Dennis") && gamePath === "alliancesPath") {
        friend = currentInput;
        display("You spoke with " + friend + " and you hit it off right away! You make a pact to stick together till the end." + "\n" + "For now, you both decide to help out with the shelter. Some of the other tribe members are working on the shelter. What would you like to do next:" + "\n" + "1. Start building" + "\n" + "2. Help gather more wood" + "\n" + "(type: build/wood to select option)");
        clearInput("");
        survivorTally = survivorTally + +2;
        gamePath = "shelterPath";

    //to restart function if player wants to start again
    }else if (currentInput === "game" && gamePath === "chillPath") {
        display("What would you do?" + "\n" + "1. Make shelter" + "\n" + "2. Make alliances" + "\n" + "3. Search for an idol" + "\n" + "4. Chill" + "\n" + "(type: shelter/alliances/idol/chill to select option)");
        clearInput("");
        return;

    }else if (currentInput === "quit" && gamePath === "chillPath") {
        display("You continue to slack off till your tribe mates can take it no longer. " + "\n" + eliminated.displayMsg1 + "\n" + "(type: bye)");
        clearInput("");
        survivorTally = 0;
        gamePath = "gameOver";

// to access THIRD level actions
    }else if (currentInput === "y" && gamePath === "shelterPath") {
        display(idolClue.displayMsg1);
        clearInput("");
        survivorTally = survivorTally + idolClue.adjustTally;
        gamePath = "immunityPath";

    }else if (currentInput === "n" && gamePath === "shelterPath") {
        display(hardwork.displayMsg1+ "For now, let's get to a challenge!" + "\n" + "(type: go)");
        clearInput("");
        survivorTally = survivorTally + hardwork.adjustTally;
        gamePath = "mainPath";

    }else if (currentInput === "chop" && gamePath === "shelterPath") {
        display(medEvac.displayMsg1 + "\n" + "(type: bye)");
        clearInput("");
        survivorTally = 0;
        gamePath = "gameOver";

    }else if (currentInput === "weave" && gamePath === "shelterPath") {
        display(hardwork.displayMsg1 + "For now, let's get to a challenge!" + "\n" + "(type: go)");
        clearInput("");
        survivorTally = survivorTally + hardwork.adjustTally;
        gamePath = "mainPath";

    }else if (currentInput === "stay" && gamePath === "idolPath") {
        display("You overheard 3 of your tribe mates forming an alliance and complaining about some of the other members of the tribe. You sneak off and head back to camp. For now, let's get to a challenge!" + "\n" + "(type: go)");
        clearInput("");
        survivorTally = survivorTally + +2;
        gamePath = "mainPath";

    }else if (currentInput === "run" && gamePath === "idolPath") {
        display("You ran back to camp and bumped into your tribe mates who were collecting wood for the shelter and fire. They noticed that you seemed flustered and suspect you of searching for the idol and you now have a target on your back. For now, let's get to a challenge!" + "\n" + "(type: go)");
        clearInput("");
        survivorTally = survivorTally + -1;
        gamePath = "mainPath";

    // to access FOURTH level actions
    }else if (currentInput === "dash" && gamePath === "immunityPath") {
        display("You have found a HIDDEN IMMUNITY IDOL!" + "\n" +
"       |@@@@|     |####|" + "\n" +
"       \@@@@|     |####/" + "\n" +
"        \@@@|     |###/" + "\n" +
"         `@@|_____|##'" + "\n" +
"              (O)" + "\n" +
"           .-'''''-." + "\n" +
"         .'  * * *  `." + "\n" +
"        :  *       *  :" + "\n" +
"       : ~ IMMUNITY ~  :"  + "\n" +
"       : ~ I D O L ! ~ :" + "\n" +
"        :  *       *  :" + "\n" +
"         `.  * * *  .'"  + "\n" +
"           `-.....-'"  + "\n" +
        "For now, let's get to a challenge!" + "\n" + "(type: go)");
        clearInput("");
        survivorTally = survivorTally + +5;
        gamePath = "mainPath";
        immunity = true;

    }else if (currentInput === "forgo" && gamePath === "immunityPath") {
        display("Next time maybe! For now, let's get to a challenge!" + "\n" + "(type: go)");
        clearInput("");
        survivorTally = survivorTally + -1;
        gamePath = "mainPath";

//to access MAIN path (fifth level onwards)
    }else if (currentInput === "go" && gamePath === "mainPath") {
        display("!!IMMUNITY CHALLENGE!!" + "\n" + "The challenge is a physical task which involves height elements and swimming. You are pretty strong at both but are worried that showcasing your physical prowess could put a target on your back. You know that the other tribe is physically very strong and your tribe stands little chance at a win. Do you:" + "\n" + "1.Put in all your effort to help your tribe try for the win" + "\n" + "2. Run the race but hold back and just help the weaker ones along to complete" + "\n" + "(type: effort/hold to select option)");
        clearInput("");
        gamePath = "challenge";

    }else if (currentInput === "effort" && gamePath === "challenge") {
        display("Good effort " + name + "! Despite your efforts, the other tribe pulled out an easy win and your tribe will be heading to tribal council tonight. Your tribe mates see you as a physical asset to the tribe." + "\n" + "(type: tribal)");
        clearInput("");
        survivorTally = survivorTally + +2;
        gamePath = "tribal";

    }else if (currentInput === "hold" && gamePath === "challenge") {
        display("The challenge was a blow out! The other tribe pulled out an easy win and your tribe will be heading to tribal council tonight. Some of your tribe mates secretly blame you for the loss." + "\n" + "(type: tribal)");
        clearInput("");
        survivorTally = survivorTally + -1;
        gamePath = "tribal";

    }else if (currentInput === "tribal" && gamePath === "tribal") {
        display("The tribe now has to vote a player out. You are in an alliance with " + friend + " who wishes to vote out Jeri, who seems to be rather cunning. However, you have spoken to Jeri and believe that she could help further your game in time to come." + "\n" + "\n" + "On the other hand, Jeri has approached you to form an alliance as well. She suggests voting out " + friend + " who she thinks will hinder your game. You have considered this and realise that a big part of it might be true. Do you want to:" +"\n" + "1. Vote with " + friend + " and maintain original alliance" + "\n" + "2. Vote with Jeri and swap alliances" + "\n" + "(type: original/swap to select option)");
        clearInput("");

    }else if (currentInput === "original" && gamePath === "tribal") {
        display("You have chosen to stick out your alliance with " + friend + ". Whether this pays off for you remains to be seen! Let's fast forward to the end and see if your strategy has paid off! " + "\n" + "(type: final tribal)");
        clearInput("");
        survivorTally = survivorTally + Math.floor((Math.random() * 8) + 1);
        gamePath = "finalTribal";

    }else if (currentInput === "swap" && gamePath === "tribal") {
        friend = "Jeri";
        display("You have shifted alliances and are now aligned with " + friend + ". Whether this pays off for you remains to be seen! Let's fast forward to the end and see if your strategy has paid off! " + "\n" + "(type: final tribal)");
        clearInput("");
        survivorTally = survivorTally + Math.floor((Math.random() * 8) + 1);
        gamePath = "finalTribal";

//FINAL TRIBAL COUNCIL
    }else if (currentInput === "final tribal" && gamePath === "finalTribal") {
        display("Well done " + name + "! You have done everything in your power to get to the final 3. It is now up to the jury to vote for who they think is the most deserving survivor who has Outwit, Outplayed, and Outlasted the rest. It's time for the big reveal!" + "\n" + "(type: OMG)");
        clearInput("");

    }else if (currentInput === "OMG" && gamePath === "finalTribal") {
        if (survivorTally > 23) {
            display ("CONGRATULATIONS " + name.toUpperCase() + "!!!" + "\n" + "The jury's votes are in and you have been crowned the sole survivor of Survivor SEI-19!" + "\n" + "(type: bye)");
            gamePath = "gameOver";
        }else if (survivorTally <= 23){
            display ("Sorry " + name + "... You did not win the title of sole survivor but fantastic job on getting here! Unfortunately, no prizes for second place..... :(" + "\n" + "(type: bye)");
            gamePath = "gameOver";
        }
        clearInput("");

    //GAME OVER PATH
    }else if (currentInput === "bye" && gamePath === "gameOver") {
        display("GAME OVER!!! Thanks for playing!");
        clearInput("");
    }


    console.log(gamePath);
    console.log("Tally is now " + survivorTally);
};