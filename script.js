console.log("hello script js");

var userInput;
var randomNum;


document.querySelector('#output').innerText ='Enter a number between 1 to 100 to begin.';

var random10 = Math.floor(Math.random() * 10);

var inputHappened = function(currentInput){
  userInput = parseInt(currentInput);
  console.log( userInput );
  if(userInput != 0){
    if(userInput <= 100 && userInput >= 1){
      return "SOMETHING HAPPENED";
    }
    else{
      return 'Invalid input, please try again.'
    }
  }
  else if(userInput == 0){
    console.log('reset');
    return 'restart'
  }
};