console.log("I'M NOT BROKEN!!!!");

display1(startText);
startTextFlash();


var inputHappened = function(currentInput) {
    if (currentInput.toLowerCase() === "start" && gameStage === 0)
    {
        clearInputs();
        stopTextFlash();
        gameStage++;
        display2("Please enter your name")
        return gameStage;
    }
    else if (gameStage === 1)
    {
        getName(currentInput);
        clearOutput2();
        display1("Greetings " + player.name + ".");
        clearInputs();
        introIntro();
        gameStage++;
        return;
    }
    else if (gameStage === 2)
    {
        introStart(); //if this doesn't work check introIntro timing.
        clearInputs();
        gameStage++
        return;
    }
    else if (gameStage === 3)
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
    }
    else if (gameStage === 4)
    {
        day1P1();
        clearInputs();
        gameStage++;
        return;
    }
    else if (gameStage === 5)
    {
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
    }
    else if (gameStage === 6)
    {
        console.log("Stage 6");
        playerInput = parseInt(currentInput);
        gameChoices.d1P1C1 = playerInput;
            switch (true) {
                case ((gameChoices.d1P1 === 1) && (gameChoices.d1P1C1 === 1) && (player.focus > 2)):
                    clearOutputAll();
                    display1(day1P1D1Front1R);
                    display2("Type anything to continue");
                    focusResults(10);
                    break;
                case ((gameChoices.d1P1 === 1) && (gameChoices.d1P1C1 === 2)):
                    clearOutputAll();
                    display1(day1P1D1Front2R);
                    display2("Type anything to continue");
                    player.rScore = player.rScore + 8; // These are all placeholder numbers. needs balancing
                    break;
                case ((gameChoices.d1P1 === 1) && (gameChoices.d1P1C1 === 3)):
                    clearOutputAll();
                    display1(day1P1D1Front3R);
                    display2("Type anything to continue");
                    rest();
                    player.rScore = player.rScore + 4;
                    break;
                case ((gameChoices.d1P1 === 2) && (gameChoices.d1P1C1 === 1) && (player.focus > 2)):
                    clearOutputAll();
                    display1(day1P1D1Middle1R);
                    display2("Type anything to continue");
                    focusResults(6);
                    classmate1.rel++;
                    classmate1.rel++;
                    break;
                case ((gameChoices.d1P1 === 2) && (gameChoices.d1P1C1 === 2)):
                    clearOutputAll();
                    display1(day1P1D1Middle2R);
                    display2("Type anything to continue");
                    player.rScore = player.rScore + 4;
                    classmate1.rel++;
                    gameStage++;
                    break;
                case ((gameChoices.d1P1 === 2) && (gameChoices.d1P1C1 === 3)):
                    clearOutputAll();
                    display1(day1P1D1Middle3R);
                    display2("Type anything to continue");
                    player.rScore = player.rScore + 2;
                    rest();
                    break;
                case ((gameChoices.d1P1 === 3) && (gameChoices.d1P1C1 === 1) && (player.focus > 2)):
                    clearOutputAll();
                    display1(day1P1D1Back1R);
                    display2("Type anything to continue");
                    player.focus++
                    focusResults(5);
                    break;
                case ((gameChoices.d1P1 === 3) && (gameChoices.d1P1C1 === 2)):
                    clearOutputAll();
                    display1(day1P1D1Back1R);
                    display2("Type anything to continue");
                    player.bonus = 1.2;
                    player.rScore = player.rScore + 4
                    break;
                case ((gameChoices.d1P1 === 3) && (gameChoices.d1P1C1 === 3)):
                    clearOutputAll();
                    display1(day1P1D1Back1R);
                    display2("Type anything to continue");
                    rest();
                    player.bonus = 1.5;
                    break;
                default:
                    display1("Please use a valid input");
                    display2("Try another Option");
                    clearInputs();
                    return;
                }
            gameStage++;
            clearInputs();
            return;
    }
    else if (gameStage === 7)
    {
        clearOutputAll();
        display1(p1QuestStart);
        display2("Type anything to continue.");
        clearInputs();
        gameStage++;
    }
    else if (gameStage === 8)
    {
        console.log("Quest Time");
        questGen();
        display1(randQuest1 + "\n" + ranAns1);
        display2("Type in your answer");
        clearInputs();
        gameStage++;
    }
    else if (gameStage === 9)
    {
        playerInput = parseInt(currentInput);
        if (playerInput === 1)
        {
            player.rScore = player.rScore + 10;
            display1("Nice! You got the right answer!");
            display2("Type anything to continue.");
            clearInputs();
            gameStage++;
            return;
        }
        else
        {
            display1("Sorry but you got the wrong answer\nThe actual answer is :" + ranAns1[0]);
            display2("Type anything to continue.");
            gameStage++;
            return;
        }
    }
    else if (gameStage === 10)
    {
        display1("You encountered a random Programing Problem!!");
        display2("Type 'Start' when you are ready to proceed.")
        gameStage++;
        return;
    }
    else if (gameStage === 11 && currentInput.toLowerCase() == "start")
    {
        enemyRanGen();
        display1("You've Encountered a!?!?!?!\n" + enemyNo.name)
        display2("Prepare for battle! Type 'battle' to tackle this problem!");
        clearInputs();
        gameStage++
        return;
    }
    else if (gameStage === 12 && currentInput.toLowerCase() == "battle")
    {
        updateEnemyInfo();
        display2("Type '1' '2' or '3' to pick your options.");
        inBattle = true;
        clearInputs();
    }
    else if (gameStage === 12 && inBattle == true)
    {
        switch (parseInt(currentInput))
        {
            case 1:
                doAttack();
                clearInputs();
        }
    }
    else
    {
        clearInputs();
    }
}


//    Useful little thing for clearing inputs
//    document.querySelector('#input').value = "";