console.log("hello script js");

var num1 =  Math.floor(Math.random() * 2);
var num2 =  Math.floor(Math.random() * 7);
var num3 =  Math.floor(Math.random() * 10);
var secretNumArray = [num1, num2, num3];
console.log(secretNumArray);
var gameTools = ['axe', 'cloak', 'bandage'];
var playerTools = [];
var correctNum;
var correctGuess = 0;
var totalGuess = 0;

//player starts game and guess passcodes
alert('start game');
alert('what\'s the passcode?');

//check if guess correct
var inputHappened = function(currentInput){
    console.log( currentInput );
    var playerGuess = parseInt(currentInput);
    var i = 0;
    correctNum = false;
    while (i < secretNumArray.length) {
        if (playerGuess === secretNumArray[i]) {
            correctNum = true;
            console.log(correctNum);
        }
    i = i + 1;
    };
    collectTool();
    collectSet();
};


//collect tool if correct guess
var collectTool = function () {
    if (correctNum === true) {
        correctGuess = correctGuess + 1;
        console.log('correct guess: ' + correctGuess);
        totalGuess = totalGuess + 1;
        console.log('total guess: ' + totalGuess);
        var j = correctGuess - 1;
        playerTools.push(gameTools[j]);
        console.log(playerTools);
        display('passcode unlocked and collected ' + playerTools[j] + ' !');
    }
    else {
        totalGuess = totalGuess + 1;
        console.log('total guess: ' + totalGuess);
        display('wrong guess. move on and guess the next passcode.');
    }
};

//check if collected full set of tools after 3 guesses
var collectSet = function () {
    if (totalGuess === 3) {
        if (playerTools.length === gameTools.length) {
            display('nice! you have the full set of ' + playerTools + '. hurry up and find your friend!');
        }
        else {
        display('you managed to collect ' + playerTools + '. good luck and fight on!');
        }
    }
};

//level 1: axe to fight zombie. zombiefied if no axe.
var xx = function() {
    if () {

    } else {

    }
};

//level 2: cloak to hide from mad unicorn. gg if no cloak.
var xx = function() {
    if () {

    } else {

    }
};

//level 3: friend found, use bandage to stop his bleeding. friend not rescued if no bandage.
var xx = function() {
    if () {

    } else {

    }
};

//level 4: select right answer from 3 options to open dungeon gate.