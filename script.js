console.log("I'M NOT BROKEN!!!!");

display1(startText);
startTextFlash();


var inputHappened = function(currentInput)
{
    if (currentInput.toLowerCase() === "start" && gameStage === 0)
    {
        clearInputs();
        stopTextFlash();
        gameStage++;
        display2("Please enter your name")
        return gameStage;
    } else if (gameStage === 1)
    {
        getName(currentInput);
        clearOutput2();
        display1("Greetings " + player.name + ".");
        clearInputs();
        introIntro();
        gameStage++;
        return;
    } else if (gameStage === 2)
    {
        introStart(); //if this doesn't work check introIntro timing.
        clearInputs();
        gameStage++
        return;
    } else if (gameStage === 3)
    {
        playerInput = currentInput;
        if (currentInput == 1 || currentInput == 2)
        {
            player.perk = currentInput;
            clearInputs();;
            if (player.perk == 1)
            {
                display1("You are more Tenacious.\nThis gives you more Max HP.");
                display2("Type anything to continue.");
                player.hpMax = 150;
                player.hp = player.hpMax;
                updateHp();
                updateFocus();
            } else {
                display1("You are more Intelligent.\nThis makes your focus more efficient.");
                display2("Type anything to continue.");
                player.focusMulti = 1.25;
                updateHp();
                updateFocus();
            }
            gameStage++;
            return player.perk;
        }
    } else if (gameStage === 4)
    {
        day1P1();
        clearInputs();
        gameStage++;
        return;
    } else if (gameStage === 5)
    {
        console.log("test1");
        playerInput = parseInt(currentInput);
        if (playerInput === 1 || playerInput === 2 || playerInput === 3)
        {
            gameChoices.d1P1 = playerInput;
            switch (gameChoices.d1P1)
            {
                case 1:
                    clearOutputAll();
                    display1(day1P1D1Front);
                    display2("Type '1' , '2' or '3'");
                    gameStage++
                    clearInputs();
                    return;
                    break;
                case 2:
                    clearOutputAll();
                    display1(day1P1D1Middle);
                    display2("Type '1' , '2' or '3'");
                    gameStage++
                    clearInputs();
                    return;
                    break;
                case 3:
                    clearOutputAll();
                    display1(day1P1D1Back);
                    display2("Type '1' , '2' or '3'");
                    gameStage++
                    clearInputs();
                    return;
                    break;
                default:
                    console.log("Something went wrong with 'gameChoices.d1p1'.");
                    display1("Something is wrong");
                    display2("Something is wrong");
                    clearInputs();
                    return;
            }
        }
    } else if (gameStage === 6)
        {
            console.log("what abt now?")
            playerInput = parseInt(currentInput);
            gameChoices.d1P1C1 = playerInput;
            console.log("Is this occurring");
            switch (true)
        {
             case ((gameChoices.d1P1 === 1) && (gameChoices.d1P1C1 === 1)):
                console.log("How about this?");
                focusCheck();
                clearOutputAll();
                display1(day1P1D1Front1R);
                display2("Type anything to continue");
                gameStage++;
                break;
            case ((gameChoices.d1P1 === 1) && (gameChoices.d1P1C1 === 2)):
                clearOutputAll();
                display1(day1P1D1Front2R);
                display2("Type anything to continue");
                gameStage++;
                break;
            case ((gameChoices.d1P1 === 1) && (gameChoices.d1P1C1 === 3)):
                clearOutputAll();
                display1(day1P1D1Front3R);
                display2("Type anything to continue");
                gameStage++;
                break;
            case ((gameChoices.d1P1 === 2) && (gameChoices.d1P1C1 === 1)):
                clearOutputAll();
                display1(day1P1D1Middle1R);
                display2("Type anything to continue");
                gameStage++;
                break;
            case ((gameChoices.d1P1 === 2) && (gameChoices.d1P1C1 === 2)):
                clearOutputAll();
                display1(day1P1D1Middle2R);
                display2("Type anything to continue");
                gameStage++;
                break;
            case ((gameChoices.d1P1 === 2) && (gameChoices.d1P1C1 === 3)):
                clearOutputAll();
                display1(day1P1D1Middle3R);
                display2("Type anything to continue");
                gameStage++;
                break;
            case ((gameChoices.d1P1 === 3) && (gameChoices.d1P1C1 === 1)):
                clearOutputAll();
                display1(day1P1D1Back1R);
                display2("Type anything to continue");
                gameStage++;
                break;
            case ((gameChoices.d1P1 === 3) && (gameChoices.d1P1C1 === 2)):
                clearOutputAll();
                display1(day1P1D1Back1R);
                display2("Type anything to continue");
                gameStage++;
                break;
            case ((gameChoices.d1P1 === 3) && (gameChoices.d1P1C1 === 3)):
                clearOutputAll();
                display1(day1P1D1Back1R);
                display2("Type anything to continue");
                gameStage++;
                break;
            default:
                console.log("Something went wrong with 'gameChoices.d1P1C1");
                display1("Something is wrong");
                display2("Something is wrong");
                clearInputs();
    }
        console.log("123");
        clearInputs();
}
    return;
};



//    Useful little thing for clearing inputs
//    document.querySelector('#input').value = "";