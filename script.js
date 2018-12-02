alert("Welcome to Life Simulator!");
alert("You'll be going through a series of scenarios and play as different roles, where you can earn coins (just like typical adulting). \n\nYou will start with *0 fatigue* and *0 coin*. The goal is to make it through all the stages *without exhausting your fatigue and coins (fatigue > 100, coins < 0)*. However, if your *coins are still < 50 after 3 stages*, you will be disqualified.\n\n If you are low on fatigue, you will be given the option to buy *fatigue reducers* with your hard-earned coins. \n\nDecide wisely! ;)");

var userName= prompt("How should we address you?")
userChar["name"] = userName;

alert("Great, " + userChar.name + "!");

var currentGame = occupations;
var stageCount = 1;
var stageContinue = true;
// console.log(currentGame);

debugger;
while (occupations.length>0 && userChar.userFatigue < 100 && stageContinue && userChar.money >= 0) {

    // Should I give them illusion of choice HMMM LOL
    var stageUser = prompt("Please choose any number from 1 to " + occupations.length + ":")
    stageUser = parseInt(stageUser) - 1;
    stageUser = parseInt(stageUser);

    console.log(stageUser);
    console.log(currentGame[stageUser]);

    // prints stage number
    alert("Stage " + stageCount);
    // plays game and calculations
    calculations(playGame(currentGame[stageUser]));

    var fatigueReduceChoice = prompt("Would you like to view our fatigue reducer catalogue? (yes/no)");
    fatigueReduceChoice = fatigueReduceChoice.toLowerCase();

    if (fatigueReduceChoice === "no"){
        alert("Alright, we shall proceed!");
    } else if (fatigueReduceChoice === "yes") {
        var catalogue = fatigueCatalogue();

        var fatigueCatalogueChoice = prompt("Would you like to purchase a fatigue reducer? (yes/no)");
        fatigueCatalogueChoice = fatigueCatalogueChoice.toLowerCase();

        if (fatigueCatalogueChoice === "yes") {
            var fatigueReduceBuy =  prompt("Do your calculations wisely! Choose your fatigue reducer (1/2/3): \n\n" + catalogue);
            fatigueReduceBuy = parseInt(fatigueReduceBuy);

            // ensures index is correct
            fatigueReduceBuy -= 1;
            fatigueReduceBuy = parseInt(fatigueReduceBuy);

            calculations(fatigueReducers[fatigueReduceBuy]);
        } else if (fatigueCatalogueChoice === "no"){
            alert("Alright, moving on!");
        }
    }
    // counts the number of stages
    stageCount++;

    // removes stage from array of game stages, so there will be no repetition
    currentGame.splice((stageUser),1);
    console.log(currentGame);

     // if *coins are still <50 after 3 stages*, disqualified.
    if (stageCount > 3 && userChar.money < 50){
        alert("Oh no. ): You didn't manage to make it to the end because you didn't have enough assets.");
        reset();

    } else if (currentGame.length === 0 && userChar.money > 50){
        alert("You have won the game!");
        reset();

    } else if (userChar.userFatigue > 100){
        alert("Oh no. ): You didn't manage to make it to the end because you fell into deep slumber from over-exhaustion.");
        reset();
    } else if (userChar.money < 0){
        alert("Did you just squander all your money?! It's okay. At least it's not real. :,)");
        reset();
    }
}

