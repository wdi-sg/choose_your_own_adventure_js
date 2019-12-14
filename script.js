console.log("I'M NOT BROKEN!!!!");


startTextFlash();


var inputHappened = function(currentInput)
{
    if (currentInput.toLowerCase() === "start" && gameStage === 0)
    {
        document.querySelector('#input').value = "";
        stopTextFlash();
        gameStage++;
        display1("Please enter your name")
        return gameStage;
    } else if (gameStage === 1)
    {
        getName(currentInput);
        clearOutput1();
        display1("Greetings " + player.name + ".");
        document.querySelector('#input').value = "";
        introIntro();
        gameStage++;
        return;
    } else if (gameStage === 2)
    {
        introStart();
        document.querySelector('#input').value = "";
        gameStage++
        return;
    } else if (gameStage === 3)
    {
        playerInput = currentInput;
        if (currentInput == 1 || currentInput == 2)
        {
            player.perk = currentInput;
            gameStage++;
            document.querySelector('#input').value = "";
            return player.perk;
        }
    } else if (gameStage === 4)
    {
        console.log("Whats next?");
    }
    return;
};



//    Useful little thing for clearing inputs
//    document.querySelector('#input').value = "";