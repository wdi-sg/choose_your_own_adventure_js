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
var NYSpaceStone = false;
var NYMindB = false;
var NYMindC = false;

var life = true;
var gameStart = false;
var userName = "";
var score = 0;
var tempHp = 0;

//Battle System Variables

var player = { hp : 1000, atk : 100, acc : 0.7, lvl:1};
var enemyThor = { hp : 500, atk : 70, acc  :0.5, name:"Thor",conclude:false,};
var battle = false;
var battleThorWin = false;
var battleThorLose = false;

var playerLevelUp = function(num){
    player.hp += (100*num);
    player.atk += (10*num);
    player.accuracy += (0.01*num);
}

var battleOnDisplay = function(playerData,enemyData){
    return(`${userName} LVL ${player.lvl}\nHP : ${playerData.hp}\n\nEnemy Thor\nHP : ${enemyData.hp}\n\nChoose your moves:\nA : Punch\nB :  Machine Gun Swipe`);
}

var battleOn = function(currentInput,playerData,enemyData){
    var atkDmg = null;
    var enemyDmg = null;
    var randomPlayer = Math.random();
    var randomEnemy = Math.random();
    tempHp = playerData.hp;
    switch (currentInput){
        case "A":
            if(randomPlayer>playerData.acc)
                atkDmg = 0;
            else
                atkDmg = Math.round(playerData.atk);

            if(randomEnemy>enemyData.acc)
                enemyDmg = 0;
            else
                enemyDmg = Math.round(enemyData.atk);

            enemyData.hp -=atkDmg;
            playerData.hp -=enemyDmg;

            break;
        case "B":
            if(randomPlayer>playerData.acc)
                atkDmg = 0;
            else
                atkDmg = Math.round(playerData.atk*0.7);

            if(randomEnemy>enemyData.acc)
                enemyDmg = 0;
            else
                enemyDmg = Math.round(enemyData.atk);

            enemyData.hp -=atkDmg;
            playerData.hp -=enemyDmg;

            break;

        default:
            display(`${invalidInputMessage()}\n\n${battleOnDisplay(playerData,enemyData)}`);
            return false
            break;
    }


    if(enemyData.hp>0 && playerData.hp >0){
        display(`You caused ${atkDmg} damage to ${enemyData.name}. \n${enemyData.name} caused ${enemyDmg} dmg to you.\n\n${battleOnDisplay(playerData,enemyData)}`);
    }else if(enemyData.hp>0 && playerData.hp <=0){
        life = false;
        display("You lost the battle..\n\n"+gameOverMessage());
    }
    else if(enemyData.hp <=0 && playerData.hp>0){
        enemyData.conclude = true;
        playerData.hp = tempHp;
        display("You Won the battle!\n\nPress any key to continue..")
    }

}



//just a function to return destinations choices
var choicesDestinationsDisplay = function(){
    if(countStones()===6)
        return "A : New York City (Time/Mind/Space stones)\nB : Vormir (Soul Stone)\nC : Morag (Power Stone)\nD : Asgard (Reality Stone)\nE : Save the World\n\n"+checkStones()+"\n\n"+reportScore();
    else
        return "A : New York City (Time/Mind/Space stones)\nB : Vormir (Soul Stone)\nC : Morag (Power Stone)\nD : Asgard (Reality Stone)\n\n"+checkStones()+"\n"+reportScore();

}

var countStones = function(){
    var count = 0;
    for(var i = 0; i<infinityStones.length;i++){
        if(infinityStones[i].found)
            count += 1
    }
    return count;
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


display("Hi, please enter your name.")

var welcomingMessage = function(currentInput){
    gameStart = true;
    userName = currentInput;
    display(`Hi ${userName}, Welcome to Avengers:End Game!\n\nYou will be joining the Avengers as a new recruit to help them find the Infinity Stones by travelling back in time.\n\n Lets choose a destination:\n\n${choicesDestinationsDisplay()}`);
}

//display the choices at the begining of the game



//MAIN FUNCTION TO TAKE USER INPUT
var inputHappened = function(currentInput){

    if(!gameStart)
        welcomingMessage(currentInput);
    else{
        if(life){
            if(currentInput === "whosyourdaddy")
                cheatcode(currentInput);
            else if (goToVormir && !soulStone.found){
                choicesVormir(currentInput);

            }else if(goToMorag && !powerStone.found){
                if(moragChoiceCount === 0)
                    choicesMorag(currentInput);
                else if (moragChoiceCount === 1)
                    choicesMorag2(currentInput);
            }else if(goToAsgard && !realityStone.found){
                if(asgardOdin)
                    choicesAsgardOdin(currentInput);
                else if (asgardThor){
                    if(battle){
                        if(enemyThor.conclude){
                            choicesPostThorBattle();
                        }else{
                            battleOn(currentInput,player,enemyThor);
                        }
                    }
                    else
                        choicesAsgardThor(currentInput);
                }
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
                }else if(NYSpaceStone)
                    choicesNYSpace(currentInput);
                else
                    choicesNYStone(currentInput);
            }
            else{
                chooseDestinations(currentInput);
            }
        }else{
            display(gameOverMessage());
        }
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
        case "E":
            life = false;
            score += 10000000000000000;
            display(`${scoreAddDisplay(1000000000000000)}\n\nYou finally saved the world! Congratulations ${userName}!\n\n${gameEndScore()}`);
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
            display("You jumped off the cliff suddenly without discussing with the others.. thats heroic and all "+userName+" but, you died and never get to see the ending.\n\n"+gameOverMessage());
            break;
        case "B":
            goToVormir = false;
            life = false;
            display("Your suggestion made Hawkeye pissed and he pushed you down the cliff instead\n\n"+gameOverMessage());
            break;
        case "C":
            goToVormir = false;
            soulStone.found = true
            score += 500;
            display(scoreAddDisplay(500)+"\n\nThe Three of you pushed Red Skull down the cliff and gotten the Soul Stone. \n\nNice Job "+userName+"!\n\n Your team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
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
            score += 200;
            display(scoreAddDisplay(200)+"\n\nYour distraction helped WarMachine to knock out StarLord. Great Job "+userName+"!\n\n"+choicesMoragDescription2()+"\n"+choicesMoragDisplay2());
            break;
        case "B":
            score += 500;
            moragChoiceCount += 1;
            display(scoreAddDisplay(500)+"\n\nYou win StarLord in the dance battle and he give you the key to the Ancient Temple voluntarily.\n\nGreat Job "+userName+"!\n\n"+choicesMoragDescription2()+"\n"+choicesMoragDisplay2());
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
            score -= 100;
            display(scoreMinusDisplay(100)+"\n\nNebula doesn't like the idea and throat punched you. \n\nTry choosing another option:\n"+choicesMoragDisplay2());
            break;
        case "B":
            goToMorag = false;
            powerStone.found = true;
            score -= 200;
            display(scoreMinusDisplay(200)+"\n\nYou managed to take the stone but it cost your hand. The team thank you for your effort but they think they had better ideas than this. Well too bad "+userName+"..\n\nYour team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
            break;
        case "C":
            score += 1000;
            goToMorag = false;
            powerStone.found = true;
            display(scoreAddDisplay(1000)+"\n\nThe stone was successfully retrieved without much sacrifices.\n\nGreat Job!\n\nYour team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesMoragDisplay2()}`);
    }
}


var choicesAsgard = function(currentInput){
    switch(currentInput){
        case "A":
            score += 200;
            asgardThor = true;
            display(scoreAddDisplay(200)+"\n\nYou tried to stop Thor but he has gone uncontrollable and decided to fight you. What would you do "+userName+"?\n"+choicesAsgardThorDisplay());
            break;
        case "B":
            life = false;
            goToAsgard = false;
            display("You following Rocket actually did not help at all due to your size, and you guys were discovered by the guards!\n\nTouch Luck bro!\n\n"+gameOverMessage());
            break;
        case "C":
            score += 100;
            asgardOdin = true;
            display(scoreAddDisplay(100)+"\n\nYou don't even know why do you look for Odin..\n\n Odin sees you and ask who you are. What do you answer?\n"+choicesAsgardOdinDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesAsgardDisplay()}`);
            break;
    }
}



var choicesAsgardThor = function(currentInput){
    switch(currentInput){
        case "A":
            battle = true;
            display("Battle Start!!\n\n"+battleOnDisplay(player,enemyThor));
            break;
        case "B":
            goToAsgard = false;
            asgardThor = false;
            realityStone.found = true;
            score += 1000;
            display(scoreAddDisplay(1000)+"\n\nThis calmed Thor down and both of you looked for his mum, Frigga. Frigga consoled Thor and thanked you for helping him. \n\nRocket has came back with the reality stone and your team head back to the present time.\n\nChoose your next destination\n\n"+choicesDestinationsDisplay());
            break;
        case "C":
            goToAsgard = false;
            asgardThor = false;
            life = false;
            display("Thor rushed to look for Loki, but Loki used him to escape and caused both of you to get cause. Too bad "+userName+"..\n\n"+gameOverMessage());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesAsgardThorDisplay()}`);
            break;

    }
}

var choicesPostThorBattle = function(){
    score += 500;
    goToAsgard = false;
    asgardThor = false;
    battle = false;
    realityStone.found = true;
    player.lvl +=2;
    playerLevelUp(2);

    display(`${scoreAddDisplay(500)}\n\nYou leveled up!\n${userName} LVL${player.lvl}\nHP : ${player.hp}\nAtk : ${player.atk}\nAcc : ${player.acc}\n\nDue to Thor having not fighting for 5 years, you managed to win him and knock him out!\n\nRocket has came back with the reality stone and your team head back to the present time.\n\nChoose your next destination\n\n${choicesDestinationsDisplay()}`);

}

var choicesAsgardOdin = function(currentInput){
    switch(currentInput){
        case "A":
            life = false;
            goToAsgard = false;
            asgardOdin = false;
            display("Odin crushed you within seconds. What do you even think you are doing "+userName+"? @@\n\n"+gameOverMessage());
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
            score += 1000;
            display(scoreAddDisplay(1000)+"\n\nOdin actually listened to your story and let you go in the end.\nRocket finally gotten the reality stone and you guys went back to the present time.\n\nChoose your next destination:\n"+choicesDestinationsDisplay());
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
        case "C":
            if(spaceStone.found){
                choiceNYStonePick = false;
                display(`${stoneFoundMessage(spaceStone)}\n\n${choicesDestinationsDisplay()}`);
                break;
            }else{
                NYSpaceStone = true;
                display("You arrived at New York 2012 and went with Iron Man and Ant Man to look for the Space Stone. The Space Stone is at the past Tony's Possession after the Avengers beat Loki.\n\nWhat can you do?\n"+choicesNYSpaceDisplay());
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
            score -= 100;
            display(scoreMinusDisplay(100)+"\n\nThe Ancient One is still not convinced.\n\nWhat should you do?"+choicesNYTimeDisplay());
            break;
        case "C":
            choiceNYStonePick = false;
            NYTimeStone = false;
            timeStone.found = true;
            score += 1000;
            display(scoreAddDisplay(1000)+"\n\nThe Ancient One actually pitied you and give you the Time Stone. What a luck eh "+userName+"?\n\nYou and Hulk head back to present time. \n\nChoose your next destination:\n"+choicesDestinationsDisplay());
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
            score += 300;
            display(scoreAddDisplay(300)+"\n\nYou managed to steal from them, but the whole SHIELD units are chasing both of you. Eventually you are surrounded by them.\n\nWhat do you do next!?\n"+choicesNYMindBDisplay());
            break;
        case "C":
            NYMindC = true;
            score += 500;
            display(scoreAddDisplay(500)+"\n\nYou and Captain America went into the lift with them. The SHIELD members find that both of you looked suspicious.\n\nWhat should you do?\n"+choicesNYMindCDisplay());
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
            score += 1000;
            display(scoreAddDisplay(1000)+"\n\nThey really thought you are one of them, and they even protect you and escort you out from the commotion.\n\nLucky!!\n\nYou and Captain America quickly found an opportunity to return to the present time.\n\nPlease choose your next destination:\n"+choicesDestinationsDisplay());
            break;
        case "B":
            NYMineB = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            mindStone.found = true;
            score += 500;
            display(scoreAddDisplay(500)+"\n\nYou used the scepter to control few of them to attack each other. The commotion is big enough for both of you to make your escape.\n\nGreat Work "+userName+"!\n\nYou and Captain America go back to the present time.\n\nChoose your next destination\n"+choicesDestinationsDisplay());
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
            score += 1000;
            display(scoreAddDisplay(1000)+"\n\nThey thought that you are really Hydra and pass you the scepter. Both you and Captain America walked out with a Smirk\n\nGreat Work "+userName+"!\n\nBoth of you then go back to the present time.\n\nChoose your next destination:\n"+choicesDestinationsDisplay());
            break;
        case "B":
            NYMineC = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            life = false;
            display("Your distraction helped Captain America to escape with the scepter but you ended up being caught and unable to go back to the present.\n\nThanks for you help "+userName+", but too bad you can't see the end of it.\n\n"+gameOverMessage());
            break;
        case "C":
            NYMineC = false;
            NYMindStone = false;
            choiceNYStonePick = false;
            mindStone.found = true;
            score += 1000;
            display(scoreAddDisplay(1000)+"\n\nThe SHIELD unit quickly pin you down to help Captain America. Captain America then suggests he will bring you into custody with a false report. He also take the scepter with him. You guys quickly fled when given a chance.\n\nGreat Work "+userName+"!\n\nBoth of you go back to the present.\n\nChoose your next destination:\n"+choicesDestinationsDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesNYMindCDisplay()}`);
            break;
    }
}

var choicesNYSpace = function(currentInput){
    switch(currentInput){
        case "A":
            NYSpaceStone = false;
            choiceNYStonePick = false;
            life = false;
            display("The commotion was successful and Iron Man managed to stole the Space Stone, but Hulk suddenly appeared and threw Iron man off, causing the stone to be take by Loki and he escaped with it.\n\nYou knew this will happen right?\n\n"+gameOverMessage());
            break;
        case "B":
            NYSpaceStone = false;
            choiceNYStonePick = false;
            life = false;
            display("They thought you are a mad man and had SHIELD to arrest you. Did you really think this would work "+userName+"?\n\n"+gameOverMessage());
            break;
        case "C":
            NYSpaceStone = false;
            choiceNYStonePick = false;
            spaceStone.found = true;
            score += 1000;
            display(scoreAddDisplay(1000)+"\n\nIron Man and Ant Man helped you to distract the past Avengers members and you managed to steal away the Space stone. You all successfully found an opportunity to escape back to the present as well.\n\nGood Work "+userName+"!\n\nChoose your next destination:\n"+choicesDestinationsDisplay());
            break;
        default:
            display(`${invalidInputMessage()}\n\n${choicesNYSpaceDisplay()}`);
            break;
    }
}



var cheatcode = function(currentInput){
    for(var i = 0; i<infinityStones.length;i++){
        infinityStones[i].found = true
    }
    display("Activated cheat code.\n\nPlease choose your next destination:\n"+choicesDestinationsDisplay());

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

var choicesNYSpaceDisplay = function(){
    return "A : Make a commotion by having Ant Man to cause Tony a cardiac arrest\nB : Tell them you are from the future\nC : Try to steal it from Tony";
}

//return invalid input message
var invalidInputMessage = function(){
    return "Please enter something that makes sense!"
}

var gameOverMessage = function(){
    return "Game Over\n\n"+gameEndScore()+"\n\nRefresh to restart the game";
}

var reportScore = function(){
    return "Your current score is "+score;
}

var gameEndScore = function(){
    return "Your final score is "+score;
}

var scoreAddDisplay = function(scoreGet){
    return "Score +"+scoreGet;
}

var scoreMinusDisplay = function(scoreGet){
    return "Score -"+scoreGet;
}