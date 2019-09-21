console.log("hello script js");
alert('Hello. Welcome to \'Adventure for the Pick of Destiny.\' What is your name?')
var playerName;


var inputHappened = function(currentInput){
    playerName = currentInput;
    var welcomeMessage = `Hi ${playerName}! What would you like to do? a) Enter \'e\' to eat cake OR \n b) \'p\' to play game `
    return welcomeMessage;
}