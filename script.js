alert("Welcome to Life Simulator!");
alert("You'll be going through a series of scenarios and play as different roles, where you can earn coins (just like typical adulting). \n\nYou will start with *0 fatigue* and *0 coin*. The goal is to make it through all the stages *without exhausting your fatigue (fatigue > 100)*. However, if your *coins are still <50 after 3 stages*, you will be disqualified.\n\n If you are low on fatigue, you will be given the option to buy *fatigue reducers* with your hard-earned coins. \n\nDecide wisely! ;)");

var userName= prompt("How should we address you?")
userChar["name"] = userName;

alert("Great, " + userChar.name + "!");

var currentGame = occupations;
var stageCount = 0;
var stageContinue = true;
// console.log(currentGame);

debugger;
while (occupations.length>0 && userChar.userFatigue < 100 && stageContinue) {
    var stageUser = prompt("Please choose any number from 1 to " + occupations.length + ":")
    stageUser = parseInt(stageUser) - 1;
    stageUser = parseInt(stageUser);

    console.log(stageUser);
    console.log(currentGame[stageUser]);

    // plays game and calculations
    calculations(playGame(currentGame[stageUser]));

    alert("Your current fatigue level: " + userChar.userFatigue + "\n\nYour current coins: " + userChar.money);

    var fatigueReduceChoice = prompt("Would you like to view our fatigue reducer catalogue? (yes/no)");
    fatigueReduceChoice = fatigueReduceChoice.toLowerCase();

    if (fatigueReduceChoice === "no"){
        alert("Alright, we shall proceed!");
    } else if (fatigueReduceChoice === "yes") {
        fatigueCatalogue();
        var fatigueCatalogueChoice = prompt("Would you like to purchase a fatigue reducer?");
    }

    // if *coins are still <50 after 3 stages*, disqualified.
    if (stageCount > 3 && userChar.money > 50){
        stageContinue = false;
    }

    // counts the number of stages
    stageCount++;

    // removes stage from array of game stages, so there will be no repetition
    currentGame.splice((stageUser),1);
    console.log(currentGame);
}