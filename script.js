console.log("hello script js");

var fishingRod=false;
var bowl=false;
var bowAndArrow=false;

// var inputHappened = function(currentInput) {
//     console.log(currentInput);
//     display("WOW SOMETHING HAPPENED");
// };

//Starting scene-introduction
console.log('Game start');
display("Hi, please enter your name.");

var welcomingMessage = function(currentInput) {
    gameStart = true;
    userName = currentInput;
    display(`Hi ${userName}, Welcome to Lost Island. Your plane has just crashed. You will need to make some important choices to survive.Every decision you make will impact your life on the island. Choose wisely.\n\n Lets choose what tools you will create first:\n\n${choicesToolsDisplay()}`);
}

var chooseTools = function(currentInput) {
    display(choicesToolsDisplay());
    switch (currentInput) {
        case "A":
            fishingRod = true;
            display("You have now built a fishing rod. You are able to fish for your food.");
            break;
        case "B":
            bowl = true {
                display("You have now built a bowl. You may collect some water to hydrate yourself.");
                break;
            }
        case "C":
            bowAndArrow = true {
                display("You have now built a bow and an arrow. You can now hunt for your food.");
                break;}
        default:
            display(`${invalidInputMessage()}`);
            break;
    }
}