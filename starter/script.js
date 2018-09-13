while (true) {

var capitalize = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

var score = 0;
var start = alert(`Getting to General Assembly from home`);
var inputName = prompt("What's your name?");
var playersName = capitalize(inputName);

alert("Your name is " + playersName + ".")
var modeOfTransport = prompt("How do you plan to get there? Input 1 or 2 \n1. On foot \n2. Bus");

if (modeOfTransport === "1") {
    alert(`Bad idea. ${playersName} start walking to GA anyway.`)
    score ++
    var dodgeRock = prompt("You see a rock right in front of you. Do you spot it in time? \nInput y or n")


    if (dodgeRock.toLowerCase() === "y") {
        var stateOfMind = prompt("Nothing happens to you. Are you shaken? \n Input 1, 2 or 3 \n 1. Shaken bro \n 2. Slightly shaken bro \n3. Not shaken bro")
            if (stateOfMind === "1") {
                alert(playersName + " didnt make it to GA on time.")
                score --
            } else if (stateOfMind === "2") {
                alert(playersName + " recovers and makes it to GA on time.")
                score ++
            } else if (stateOfMind === "3") {
                alert("Well done! " + playersName + " was able to move on quickly, and even had time for breakfast at Toast Box")
                score += 2

    } else if (dodgeRock.toLowerCase() === "n") {
        var kenaRock = prompt(playersName + "couldnt react on time and you tripped on the rock.")
        prompt(playersName + " is late for class yo.")
        }
    }
} else if (modeOfTransport === "2") {
    alert("Good idea." + playersName + " takes bus 132 from Ang Mo Kio")
    score--
    var busCard = prompt("Did you bring your EZ-link card out? Input y or n")
        if (busCard.toLowerCase() === "y") {
            prompt(playersName + " boards the bus and arrives to GA on time.");
            score++
        } else if (busCard.toLowerCase() === "n") {
            var goHome = prompt("Do you run or do you walk home to get your card? Input 1 or 2 \n1. Walk \n2. Run");
            if (goHome === "1") {
                prompt("Chill indeed, but " + playersName + " doesnt make it to GA on time.");
                score --
            } else if (goHome === "2") {
                prompt("Way to go! " + playersName + " gets the card in a jiffy and manages to arrive at GA on time");
                score ++
            }
        }
}

alert(playersName + " ends the journey with a score of " + score)
}
