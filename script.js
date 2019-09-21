console.log("Working")

var sequence = 0;

var playerName = prompt("Hello! Welcome to your river adventure. Please enter your name. ", "Tiffany")

function nextSequence() {
    sequence++;
}

function backSequence() {
    sequence--;
}

function badEnding() {
    return "You return to your life and continue making the best butter in your town. However, no one is happy with how you've handled things. You dream every night of how you could've done things differently. \n\nWould you like to play again?"
}

function dead() {
    return "You've died. Would you like to play again?"
}

function beginAdventure() {
    if (sequence === 0) {
        var output = `You are ${playerName} Aching, a 9-year old girl.\n\nToday, you're lying by the river, tickling trout. Your perpetually sticky brother, Wentworth, is a little way away, messing around with a stick.\n\nA little blue man is floating on the river, in a round basket. He waves a fist at you and is shouting: \n "Crivens! Gang awa' oot o' here, ye daft wee hinny! 'Ware the green heid!" \n\n Do you stay to see what the 'green heid' is or run away immediately?`;
        nextSequence();
        display(output);
    }
}

beginAdventure();

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (sequence === 1 && currentInput.includes("stay")) {
    output = "The water begins to bubble and gets darker, greener, and somehow, much deeper. Long skinny arms are coming out of the water! Do you try to grab the arms or step backwards?";
    nextSequence();
    return output;
} else if (sequence === 1 && currentInput.includes("run")) {
    output = `You get away safely! But as you run back towards your home, you remember you've left your brother behind. Oops! \n\n ${badEnding()}`;
    return output;
} else if (sequence ===2 && currentInput.includes("grab")) {
    output = `The arms are much stronger than you think and you've been pulled into the water. ${dead()}`;
    return output;
} else if (sequence ===2 && currentInput.includes("step")) {
    output =
} else return "fudgedeedoo";
}