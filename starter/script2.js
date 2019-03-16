// put code here!
var point = 0;
var numOfGame = 0;
var yearInt;
var toPlayGame = true;

var train = function () {
    var userInput = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? Take her or leave her. (T/L)");

    while(userInput.toLowerCase() !== "t" && userInput.toLowerCase() !== "l") {
        userInput = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? Take her or leave her. (T/L)");
    }

    if(userInput.toLowerCase() === "t") {
        alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her. Point earned = 0" );
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

    else {
        alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.. Point earned = 1" );
        point = point + 1;
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }
}

var griff = function (){
    var userInput = prompt("Griff is asking you if you are in, or out. What do you say? (I/O)");

    while(userInput.toLowerCase() !== "i" && userInput.toLowerCase() !== "o") {
        userInput = prompt("Griff is asking you if you are in, or out. What do you say? (I/O)");
    }

    if (userInput.toLowerCase() !== "i" ) {
        alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you. Point earned = 0" );
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

    else {
        alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure. Point earned = 1");
        point = point + 1;
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }
}

var biff  = function () {
    var userInput = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)");

    while(userInput.toLowerCase() !== "s" && userInput.toLowerCase() !== "r") {
        userInput = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)");
    }

    if (userInput.toLowerCase() !== "s" ) {
        alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure. Point earned = 1" );
        point = point + 1;
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

    else {
        alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice. Point earned = 0");
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }
}



var greaterThan2015 = function () {
    var userInput = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)");

    while(userInput.toLowerCase() !== "b" && userInput.toLowerCase() !== "g") {
        userInput = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)");
    }

    if (userInput.toLowerCase() === "b") {
        biff();
    }

    else {
        griff();
    }
}

var lessThan2015 = function () {
    var userInput = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");

    if (userInput.toLowerCase() === "calvin klein") {
        alert("Welcome to the future, Calvin Klein. Point earned = 1");
        point = point + 1;
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

    else {
        alert("That is the end of game. Point earned = 0");
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

}

var lessThan1985 = function () {
    var userInput = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? Yes, No or Set her up with George.(Y/N/S)");

    while(userInput.toLowerCase() !== "y" && userInput.toLowerCase() !== "n" && userInput.toLowerCase() !== "s") {
        userInput = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)");
    }

    if (userInput.toLowerCase() === "y") {
        alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955. Point earned = 0");
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

    else if (userInput.toLowerCase() === "n") {
        alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist. Point earned = 0");
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

    else {
        alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time. Point earned = 1");
        point = point + 1;
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }
}

var lessThan1955 = function () {
    var userInput = prompt("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)");

    while(userInput.toLowerCase() !== "h" && userInput.toLowerCase() !== "m" && userInput.toLowerCase() !== "t") {
        userInput = prompt("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? Horses, Moonshine or Train. (H/M/T)");
    }

    if (userInput.toLowerCase() === "h") {
        alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it. Point earned: 0");
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

    else if (userInput.toLowerCase() === "m") {
        alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855. Point earned: 0");
        numOfGame = numOfGame + 1;
        promptAnotherGame();
    }

    else {
        train();
    }
}


var startOfGame = function (yearInt) {
    if (yearInt < 1955) {
        lessThan1955();
    }

    else if (yearInt < 1985) {
        lessThan1985();
    }

    else if (yearInt < 2015)
        lessThan2015();

    else {
        greaterThan2015();
    }

}

var promptInput = function () {
    var useInputName = prompt("What is your name?");
    var userInputYear = prompt("Nice to meet you, " + useInputName + ". Which year would you want to go?(YYYY)");
    var yearInt = parseInt(userInputYear);

    while(userInputYear.length !== 4) {
        userInputYear = prompt("Nice to meet you, " + useInputName + ". Which year would you want to go?(YYYY)");
        yearInt = parseInt(userInputYear);
    }
    startOfGame(yearInt);
}

var promptAnotherGame = function() {
    var userInput = prompt("Want to play another game?(Y/N)");
    while(userInput.toLowerCase() !== 'y' && userInput.toLowerCase() !== 'n') {
        userInput = prompt("Want to play another game?(Y/N)");
    }

    if (userInput.toLowerCase() === 'y') {
        toPlayGame = true;
    }

    else {
        toPlayGame = false;
    }
}

while (toPlayGame) {
    promptInput();
}

alert("The total number of games played: " + numOfGame + ".The total score is:  " + point);


