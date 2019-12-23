console.log("I'M NOT BROKEN!!!!");


startTextFlash();










var inputHappened = function(currentInput){
    if (currentInput.toLowerCase() === "start" && gameStage === 0) {
        stopTextFlash();
        document.querySelector('#input').value = "";
        gameStage++;
        display(askForName);
        return gameStage;
    } else if (gameStage === 1) {
        getName(currentInput);
        display("Greetings " + playerName + ".");
        document.querySelector('#input').value = "";
        gameStage++;
        setTimeout(function(){introStart();}, 3000);
        return; gameStage;
    }
};


//    Useful little thing for clearing inputs
//    document.querySelector('#input').value = "";