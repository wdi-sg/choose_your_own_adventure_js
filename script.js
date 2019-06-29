console.log("hello script js");


var goToVormir = false;
var foundTimeStone = {found:false,name:"Time Stone"};

//just a function to return destinations choices
var choicesDestinations = function(){
    return "A : New York City\nB : Vormir\nC : Morag\nD : Asgard"
}

//display the choices at the begining of the game
display(choicesDestinations());

//MAIN FUNCTION TO TAKE USER INPUT
var inputHappened = function(currentInput){

    if (goToVormir && !foundTimeStone.found){
        choicesVormir(currentInput);

    }else{
        chooseDestinations(currentInput);
    }

}


//return invalid input message
var invalidInputMessage = function(){
    return "Please enter something that makes sense!"
}

//display choice of destinations
var chooseDestinations = function(currentInput){
    display(choicesDestinations());
    switch (currentInput){
        case "A":
            console.log("Test");
            break;
        case "B":
            if(foundTimeStone.found){
                display(`${stoneFoundMessage(foundTimeStone)}\n\n${choicesDestinations()}`);
                break;
            }else{
                goToVormir = true;
                display("At Vormir, you found out that the Soul Stone requires one soul in exchange. Who will you sacrifice?\n\nA : Sacrifice yourself\nB : Sacrifice your partner\nC : Sacrifice Red Skull");
                break;
            }
        case "C":
            console.log("Test");
            break;

        case "D":
            console.log("Test");
            break;

        default:
            display(`${invalidInputMessage()}\n\n${choicesDestinations()}`);
            break;

    }
}

var choicesVormir = function(currentInput){
    switch(currentInput){
        case "A":
            goToVormir = false;
            foundTimeStone.found = true;
            display("You get the Time Stone!\n\nYou head back to present time.\n\nChoose your next destination:\n"+choicesDestinations());
            break;
    }
}

var stoneFoundMessage = function(stoneObject){
    return `You already found the ${stoneObject.name}!\n\n Please choose another destination`;
}