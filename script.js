console.log("hello script js");


var goToVormir = false;
var goToMorag = false;
var soulStone = {found:false,name:"Soul Stone"};
var powerStone = {found:false,name:"Power Stone"};
var infinityStones = [soulStone,powerStone]
var moragChoiceCount = 0;
var life = true;

//just a function to return destinations choices
var choicesDestinationsDisplay = function(){
    return "A : New York City (Time/Mind/Space stones)\nB : Vormir (Soul Stone)\nC : Morag (Power Stone)\nD : Asgard (Reality Stone)\n\n"+checkStones();
}

var checkStones = function(){
    var str = "";
    for(var i = 0; i<infinityStones.length;i++){
        if(infinityStones[i].found)
            str += infinityStones[i].name + "\n"
    }

    if (str ==="")
        return "Infinity Stones found so far:\nNone"
    else
        return `Infinity Stones found so far:\n${str}`;
}

//display the choices at the begining of the game
display(`Welcome to Avengers:End Game!\n\nYou will be joining the Avengers as a new recruit to help them find the Infinity Stones by travelling back in time.\n\n Lets choose a destination:\n\n${choicesDestinationsDisplay()}`);


//MAIN FUNCTION TO TAKE USER INPUT
var inputHappened = function(currentInput){

    if(life){
        if (goToVormir && !soulStone.found){
            choicesVormir(currentInput);

        }else if(goToMorag && !powerStone.found){
            if(moragChoiceCount === 0)
                choicesMorag(currentInput);
            else if (moragChoiceCount === 1)
                choicesMorag2(currentInput);
        }else{
            chooseDestinations(currentInput);
        }
    }else{
        display(gameOverMessage());
    }

}



//display choice of destinations
var chooseDestinations = function(currentInput){
    display(choicesDestinationsDisplay());
    switch (currentInput){
        case "A":
            console.log("Test");
            break;
        case "B":
            if(soulStone.found){
                display(`${stoneFoundMessage(soulStone)}\n\n${choicesDestinationsDisplay()}`);
                break;
            }else{
                goToVormir = true;
                display(choicesVormirDescription()+"\n\n"+choicesVormirDisplay());
                break;
            }
        case "C":
            if(powerStone.found){
                display(`${stoneFoundMessage(powerStone)}\n\n${choicesDestinationsDisplay()}`);
                break;
            }else{
                goToMorag = true;
                display(choicesMoragDescription()+"\n\nWhat would you do?\n"+choicesMoragDisplay());
                break;
            }

        case "D":
            console.log("Test");
            break;

        default:
            display(`${invalidInputMessage()}\n\n${choicesDestinationsDisplay()}`);
            break;

    }
}

//take input for choices at Vormir
var choicesVormir = function(currentInput){
    switch(currentInput){
        case "A":
            goToVormir = false;
            life = false;
            display("You jumped off the cliff suddenly without discussing with the others.. thats heroic and all but, you died and never get to see the ending.\n\n"+gameOverMessage());
            break;
        case "B":
            goToVormir = false;
            life = false;
            display("Your suggestion made Hawkeye pissed and he pushed you down the cliff instead\n\n"+gameOverMessage());
            break;
        case "C":
            goToVormir = false;
            soulStone.found = true
            display("The Three of you pushed Red Skull down the cliff and gotten the Soul Stone. \n\nYes!!\n\n Your team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesVormirDisplay()}`);
            break;
    }
}

var choicesMorag = function(currentInput){
    switch(currentInput){
        case "A":
            moragChoiceCount += 1;
            display("Your distraction helped WarMachine to knock out StarLord. Great Job!\n\n"+choicesMoragDescription2()+"\n"+choicesMoragDisplay2());
            break;
        case "B":
            moragChoiceCount += 1;
            display("You win StarLord in the dance battle and he give you the key to the Ancient Temple voluntarily.\n\nGreat Job!\n\n"+choicesMoragDescription2()+"\n"+choicesMoragDisplay2());
            break;
        case "C":
            life = false;
            display("StarLord noticed the ambush and escaped. You staying quiet is actually useless zz..\n\n"+gameOverMessage())
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesMoragDisplay()}`);

    }
}

var choicesMorag2 = function(currentInput){
    switch(currentInput){
        case "A":
            life = false;
            goToMorag = false;
            display("Nebula doesn't like the idea and throat punched you. \n\n"+gameOverMessage());
            break;
        case "B":
            goToMorag = false;
            powerStone.found = true;
            display("You managed to take the stone but it cost your hand. The team thank you for your effort but they think they had better ideas than this. Well too bad..\n\nYour team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
            break;
        case "C":
            goToMorag = false;
            powerStone.found = true;
            display("The stone was successfully retrieved without much sacrifices.\n\nGreat Job!\n\nYour team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesMoragDisplay2()}`);
    }
}






//display message if stone found
var stoneFoundMessage = function(stoneObject){
    return `You already found the ${stoneObject.name}!\n\n Please choose another destination`;
}

var choicesVormirDescription = function(){
    return "You went to Vormir with Hawkeye and BlackWidow, you found out that the Soul Stone requires one soul in exchange. Who will you sacrifice?";
}

var choicesVormirDisplay = function(){
    return "A : Sacrifice yourself\nB : Sacrifice BlackWidow\nC : Sacrifice Red Skull"
}

var choicesMoragDescription = function(){
    return "You went to Morag with WarMachine and Nebula.\n\nStarLord is dancing and on his way to the Ancient Temple. WarMachine is ready to knock him out."
}

var choicesMoragDisplay = function(){
    return "A : Help him to distract StarLord\nB : Go for a dance battle with StarLord \nC : Stay quiet\n"
}

var choicesMoragDescription2 = function(){
    return "All of you then enter the ancient temple and found out the power stone is surrounded by a magic force field\n\nWhat should you do?"
}

var choicesMoragDisplay2 = function(){
    return "A : Let Nebula take the stone with her hand\nB : Take the stone with your hand\n C : Suggest WarMachine to control his suit to take the stone without his hand in it"
}

//return invalid input message
var invalidInputMessage = function(){
    return "Please enter something that makes sense!"
}

var gameOverMessage = function(){
    return "Game Over\n\nRefresh to restart the game"
}
