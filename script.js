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
        playerInput = parseInt(currentInput);
        gameChoices.d1P1C1 = playerInput;
        clearInputs();
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
        if (currentInput == "YES" && confirmCheck == true)
        {
            gameOverGU();
        }
        switch (parseInt(currentInput))
        {
            case 1:
                doAttack();
                checkForDeadPeople();
                clearInputs();
                break;
            case 2:
                doFocus();
                checkForDeadPeople();
                clearInputs();
                break;
            case 3:
                if (confirmCheck === false)
                {
                    alert("Are you sure you want to give up?\nThe game will end if you do.\nIf so, please type 'YES' in all caps to confirm.")
                    confirmCheck = true;
                    return;
                }
                else
                {
                    clearInputs();
                }
        }
    }
    else if (gameStage === 13)
    {
        switch(parseInt(currentInput))
        {
            case 1:
                display1(readCodenomicon);
                display2("DESPAIR, DESPAIR, DESPAIR!");
                clearInputs();
                gameStage = 65535;
                inBattle = true;
                break;
            case 2:
                display1("You're pretty tired already and decide that maybe going through such a thick and heavy book might be for a later time.")
                display2("The day ends and you carry on your way about things.")
                gameStage = 9999;
                break;
            case 3:
                display1("Unsure what comes over you but you decide to chuck the heavy book away with all your might and into the trash. A shiver rushes through your spine but you feel a weird sense of relief. Who knows what is going on right now.")
                display2("Welp. Here we are at the end of day 1 right now. Maybe I'll update this at a later time.")
                gameStage = 9999;
                break;
            default:
                display1("Woops, typed something wrong I'm guessing.\nType 1 to read the codenomicon\nType 2 to keep it for another time.\nType 3 to throw that sucker.");
                display2("Make your choice.")
        }
    }
    else if (gameStage === 65535)
    {
        enemyNo = enemies[5];
        updateEnemyInfo();
        display2("Despair");
        doAttack();
        alert("YOU GOT THE MADNESS ENDING");
        gameStage = 42424242;
    }
    else if (gameStage > 1000);
    {
        display1("This is your Results score " + player.rScore + "\nHope you had some fun with this short game.");
        display2("Goodnight as I need to sleep!!!");
    }
    {
    {
        clearInputs();
        display2("Not sure but try typing something else!")
    }
    }
}


//    Useful little thing for clearing inputs
//    document.querySelector('#input').value = "";