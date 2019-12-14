console.log("I'M NOT BROKEN!!!!");


startTextFlash();


var inputHappened = function(currentInput)
{
    if (currentInput.toLowerCase() === "start" && gameStage === 0)
    {
        document.querySelector('#input').value = "";
        stopTextFlash();
        clearOutputAll();
        gameStage++;
        display1("Please enter your name")
        return gameStage;
    } else if (gameStage === 1)
    {
        getName(currentInput);
        clearOutput1();
        display1("Greetings " + player.name + ".");
        document.querySelector('#input').value = "";
        introStart();
        gameStage++;
        return;
    } else if (gameStage === 2)
    {

        return;
    }
return;
};



//    Useful little thing for clearing inputs
//    document.querySelector('#input').value = "";