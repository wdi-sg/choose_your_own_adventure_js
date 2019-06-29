console.log("hello script js");


var goToVormir = false;
var goToMorag = false;
var goToAsgard = false;
var goToNY = false;

var soulStone = {found:false,name:"Soul Stone"};
var powerStone = {found:false,name:"Power Stone"};
var realityStone = {found:false,name:"Reality Stone"};
var timeStone = {found:false,name:"Time Stone"};
var mindStone = {found:false,name:"Mind Stone"};
var spaceStone = {found:false,name:"Reality Stone"};
var infinityStones = [soulStone,powerStone,realityStone,timeStone,mindStone,spaceStone];


var moragChoiceCount = 0;
var asgardThor = false;
var asgardOdin = false;
var choiceNYStonePick = false;
var NYTimeStone = false;
var NYMindStone = false;
var NYMindB = false;
var NYMindC = false;

var life = true;

//just a function to return destinations choices
var choicesDestinationsDisplay = function(){
    return "A : New York City (Time/Mind/Space stones)\nB : Vormir (Soul Stone)\nC : Morag (Power Stone)\nD : Asgard (Reality Stone)\n\n"+checkStones();
}

//check number of stones obtained
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
        }else if(goToAsgard && !realityStone.found){
            if(asgardOdin)
                choicesAsgardOdin(currentInput);
            else if (asgardThor)
                choicesAsgardThor(currentInput);
            else
                choicesAsgard(currentInput);
        }else if(choiceNYStonePick){
            if(NYTimeStone)
                choicesNYTime(currentInput);
            else if(NYMindStone){
                if(NYMindB)
                    choicesNYMindB(currentInput);
                else if (NYMindC)
                    choicesNYMindC(currentInput);
                else
                    choicesNYMind(currentInput);
            }else
                choicesNYStone(currentInput);
        }
        else{
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
            choiceNYStonePick = true;
            display("Which stone do you want to go for?\n\n"+choicesNYStoneDisplay());
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
            if(realityStone.found){
                display(`${stoneFoundMessage(realityStone)}\n\n${choicesDestinationsDisplay()}`);
                break;
            }else{
                goToAsgard = true;
                display(choicesAsgardDescription()+"\n"+choicesAsgardDisplay());
                break;
            }

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

//take input for choices at Morag
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

//take input for 2nd set of choices at Morag
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

var choicesAsgard = function(currentInput){
    switch(currentInput){
        case "A":
            asgardThor = true;
            display("You tried to stop Thor but he has gone uncontrollable and decided to fight you. What would you do?\n"+choicesAsgardThorDisplay());
            break;
        case "B":
            life = false;
            goToAsgard = false;
            display("You following Rocket actually did not help at all due to your size, and you guys were discovered by the guards!\n\nTouch Luck bro!\n\n"+gameOverMessage());
            break;
        case "C":
            asgardOdin = true;
            display("You don't even know why do you look for Odin..\n\n Odin sees you and ask who you are. What do you answer?\n"+choicesAsgardOdinDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesAsgardDisplay()}`);
            break;
    }
}

var choicesAsgardThor = function(currentInput){
    switch(currentInput){
        case "A":
            goToAsgard = false;
            asgardThor = false;
            realityStone.found = true;
            display("Due to Thor having not fighting for 5 years, you managed to win him and knock him out!\n\nRocket has came back with the reality stone and your team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
            break;
        case "B":
            goToAsgard = false;
            asgardThor = false;
            realityStone.found = true;
            display("This calmed Thor down and both of you looked for his mum, Frigga. Frigga consoled Thor and thanked you for helping him. \n\nRocket has came back with the reality stone and your team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
            break;
        case "C":
            goToAsgard = false;
            asgardThor = false;
            life = false;
            display("Thor rushed to look for Loki, but Loki used him to escape and caused both of you to get cause. Too bad..\n\n"+gameOverMessage());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesAsgardThorDisplay()}`);
            break;

    }
}

var choicesAsgardOdin = function(currentInput){
    switch(currentInput){
        case "A":
            life = false;
            goToAsgard = false;
            asgardOdin = false;
            display("Odin crushed you within seconds. What do you even think you are doing? @@\n\n"+gameOverMessage());
            break;
        case "B" :
            life = false;
            goToAsgard = false;
            asgardOdin = false;
            display("Odin ordered his man to catch you. You were unable to join the group back to present time. Game over for you sonny\n\n"+gameOverMessage());
            break;
        case "C" :
            goToAsgard = false;
            asgardOdin = false;
            realityStone.found = true;
            display("Odin actually listened to your story and let you go in the end.\nRocket finally gotten the reality stone and you guys went back to the present time.\n\nChoose your next destination:\n"+choicesDestinationsDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesAsgardOdinDisplay()}`);
            break;
    }
}

var choicesNYStone = function(currentInput){
    switch(currentInput){
        case "A":
            if(timeStone.found){
                choiceNYStonePick = false;
                display(`${stoneFoundMessage(timeStone)}\n\n${choicesDestinationsDisplay()}`);
                break;
            }else{
                NYTimeStone = true;
                display("You arrived at New York 2012 and you went with Hulk to meet the Ancient One for the Time Stone\n\nThe hulk asked for the time stone from the Ancient One but she denied. \n\nWhat would you do?\n"+choicesNYTimeDisplay());
                break;
            }
        case "B":
            if(mindStone.found){
                choiceNYStonePick = false;
                display(`${stoneFoundMessage(mindStone)}\n\n${choicesDestinationsDisplay()}`);
                break;
            }else{
                NYMindStone = true;
                display("You arrived at New York 2012 and went with Captain America to look for the Mind Stone, which should still attached on Loki's Scepter.\n\nUpon going into the Stark's tower you guys saw the scepter is already in the SHIELD's possession. \n\nWhat should you do?\n"+choicesNYMindDisplay());
                break;
            }

        default:
            display(`${invalidInputMessage()}\n\n${choicesNYStoneDisplay()}`);
            break;
    }
}

var choicesNYTime = function(currentInput){
    switch(currentInput){
        case "A":
            life = false;
            choiceNYStonePick = false;
            NYTimeStone = false;
            display("You and Hulk souls were being pushed out and were left hanging.\n\nYou both have no way of going back\n\n"+gameOverMessage());
            break;
        case "B":
            life = false;
            choiceNYStonePick = false;
            NYTimeStone = false;
            display("The Ancient One think that you are a liar and went off. You did not managed to get the stone from her\n\n"+gameOverMessage());
            break;
        case "C":
            choiceNYStonePick = false;
            NYTimeStone = false;
            timeStone.found = true;
            display("The Ancient One actually pitied you and give you the Time Stone. What a luck eh?\n\nYou and Hulk head back to present time. \n\nChoose your next destination:\n"+choicesDestinationsDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesNYTimeDisplay()}`);
            break;
    }
}

var choicesNYMind = function(currentInput){
    switch(currentInput){
        case "A":
            NYMindStone = false;
            choiceNYStonePick = false;
            life = false;
            display("You made too big of an attention and also revealed their through identity, they caused a havoc and escaped.\n\n Good work genius!\n\n"+gameOverMessage());
            break;
        case "B":
            NYMindB = true;
            display("You managed to steal from them, but the whole SHIELD units are chasing both of you. Eventually you are surrounded by them.\n\nWhat do you do next!?\n"+choicesNYMindBDisplay());
            break;
        case "C":
            NYMindC = true;
            display("You and Captain America went into the lift with them. The SHIELD members find that both of you looked suspicious.\n\nWhat should you do?\n"+choicesNYMindCDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesNYMindDisplay()}`);
            break;
    }
}

var choicesNYMindB = function(currentInput){
    switch(currentInput){
        case "A":
            NYMineB = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            mindStone.found = true;
            display("They really thought you are one of them, and they even protect you and escort you out from the commotion.\n\nLucky!!\n\nYou and Captain America quickly found an opportunity to return to the present time.\n\nPlease choose your next destination:\n"+choicesDestinationsDisplay());
            break;
        case "B":
            NYMineB = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            mindStone.found = true;
            display("You used the scepter to control few of them to attack each other. The commotion is big enough for both of you to make your escape.\n\nGreat Work!\n\nYou and Captain America go back to the present time.\n\nChoose your next destination\n"+choicesDestinationsDisplay());
            break;
        case "C":
            NYMineB = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            life = false;
            display("They ignore what you said and just pin you down. Both of you are caught and unable to go back to the present time.\n\n"+gameOverMessage());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesNYMindBDisplay()}`);
            break;
    }
}

var choicesNYMindC = function(currentInput){
    switch(currentInput){
        case "A":
            NYMineC = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            mindStone.found = true;
            display("They thought that you are really Hydra and pass you the scepter. Both you and Captain America walked out with a Smirk\n\nGreat Work!\n\nBoth of you then go back to the present time.\n\nChoose your next destination:\n"+choicesDestinationsDisplay());
            break;
        case "B":
            NYMineC = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            life = false;
            display("Your distraction helped Captain America to escape with the scepter but you ended up being caught and unable to go back to the present.\n\nThanks for you help hero, but too bad you can't see the end of it.\n\n"+gameOverMessage());
            break;
        case "C":
            NYMineC = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            mindStone.found = true;
            display("The SHIELD unit quickly pin you down to help Captain America. Captain America then suggests he will bring you into custody with a false report. He also take the scepter with him. You guys quickly fled when given a chance.\n\nGreat Work!\n\nBoth of you go back to the present.\n\nChoose your next destination:\n"+choicesDestinationsDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesNYMindCDisplay()}`);
            break;
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

var choicesAsgardDescription = function(){
    return "You went to Asgard with Thor and Rocket\n\nThor suddenly went hysterical and run off. Rocket ignores him and went to look for Jane\n\nWhat should you do?";
}

var choicesAsgardDisplay = function(){
    return "A : Run after Thor\nB : Follow rocket\nC : Look for Odin!";
}

var choicesAsgardThorDisplay = function(){
    return "A : \"FIGHT ME!\"\nB : Tell him about his mum\nC : Tell him about Loki";
}

var choicesAsgardOdinDisplay = function(){
    return "A : \"FIGHT ME!\"\nB : \"Just passing by sir\"\nC : \"I am here to warn you of a tragedy that is to come!\"";
}

var choicesNYStoneDisplay = function(){
    return "A : Time Stone\nB : Mind Stone\nC : Space Stone";
}

var choicesNYTimeDisplay = function(){
    return "A : Tell the Hulk to smash her\nB : Tell her it was Doctor Strange's idea\nC : Cry in front of her";
}

var choicesNYMindDisplay = function(){
    return "A : Scream \"HAIL HYDRA!!\"\nB : Try to steal it away from them\nC : Pretend to be calm and get close to them"
}

var choicesNYMindBDisplay = function(){
    return "A : Nows the time to scream \"HAIL HYDRA\"\nB : Use the scepter!\nC : Tell them you are from the future!"
}

var choicesNYMindCDisplay = function(){
    return "A : Tell them softly \"Hail Hydra\"\nB : Distract them by going hysterical\nC : Reveals that Captain America is actually Hydra";
}

//return invalid input message
var invalidInputMessage = function(){
    return "Please enter something that makes sense!"
}

var gameOverMessage = function(){
    return "Game Over\n\nRefresh to restart the game";
}