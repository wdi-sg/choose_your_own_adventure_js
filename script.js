console.log("hello script js");

var currentInput = [];
var inputRecord = [];

var gameStart = function(){
  document.getElementById("output").innerHTML = "First of all, please enter your name.";
};

var inputHappened = function(currentInput){
    inputRecord.push(currentInput);
  console.log(inputRecord);
  display( `Welcome commonner ${inputRecord[0].toUpperCase()}!\nLet's see if you have what it takes to become a Disney Princess!\n\nQ1: Do you like kids? Enter a number as per below.\n1- No, I can't stand them\n2- They're alright\n3- Yes, I adore them` );
  if (parseInt(inputRecord[1]) === 1 ){
    display('Have you ever taken drugs? (Or on them right now?)')
  }
  if (parseInt(inputRecord[1])=== 2 ){}
};