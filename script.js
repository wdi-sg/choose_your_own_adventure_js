// I CANT DO FREAKING MODULES
console.log(charmander.hp);
var name = prompt("Hello, trainer! What's your name?").toUpperCase();
var rival = prompt("And it appears you have a rival. What's their name again?").toUpperCase()
var gameDialog = [];
var stage = 1;
var number = 1;

var output = document.getElementById("output-container");
var input = document.getElementById("user-input");
var enter = document.getElementById("enter-button");
var restart = document.getElementById("restart");

var gameOn = function() {
    answer = input.value.toLowerCase();
    getDialog();
    checkStage();
    output.innerHTML = gameDialog[number];
    input.value = null;
}

var initialiseGame = function () {
    stage = 1;
    getDialog();
    output.innerHTML = gameDialog[1];
    input.innerHTML = null;
}

enter.addEventListener("click", gameOn);
restart.addEventListener("click", initialiseGame);

initialiseGame();