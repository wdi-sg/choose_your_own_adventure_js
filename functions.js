console.log("Functions seem to be working? (I hope).")


// To empty out the displays
var clearOutputAll = function() {
    display1("");
    display2("");
};


var clearOutput1 = function() {
    display1("");
};


var clearOutput2 = function() {
    display2("");
};

// use whenever hp value changes
var updateHp = function() {
    hpDisplay("Health\n" + player.hp + "/" + player.hpMax);
};

//use whenever focus is changed
var updateFocus = function() {
    focusDisplay("Focus\n" + player.focus + "/" + player.focusMax);
};

// Flashes the starting text every 2 seconds
var startTextFlash = function () {
    display2("Type 'Start' to begin");
    startShow = setInterval(function(){ display2("Type 'Start' to begin"); }, 2000);
    setTimeout(function(){ startHide = setInterval(function(){ clearOutput2(); }, 2000); }, 1000);
    return;
}

// Stops the flashing "Start" text
var stopTextFlash = function () {
    clearInterval(startShow);
    clearInterval(startHide);
    clearOutputAll();
}


//introduction stuff
var getName = function (name) {
    player.name = name;
    return player.name;
}

var displayIntro = function () {
    display1(introduction);
    display2("Type anything to continue.");
}

var introIntro = function () {
    setTimeout(function(){clearOutput2();}, 10); //these 2 are a little faster than intended. Change later when done testing*******
    setTimeout(function(){displayIntro();}, 10);
}

var introStart = function () {
    display2(perkInstruct);
    display1(perkIntro);
}

//Actual start to the game and first branching choice.
var day1P1 = function () {
    display1(day1P1D101);
    display2("Your adventure begins.");
    setTimeout(function(){display2(day1P1D201);}, 10);//Remember to change when finished testing.
}




// Stuff to do with numbers
var ranNumGen = function (numRange) {
    ranNum = Math.floor(Math.random()*numRange);
    console.log(ranNum);
    return ranNum;
};

//selecting random question
var questGen = function () {
    ranNumGen(quest.length);
    randQuest1 = quest[ranNum];
    ranAns1 = questAns[ranNum];
}

//Picking of random Enemy
var enemyRanGen = function () {
    ranNumGen(enemies.length - 1);
    enemyNo = enemies[ranNum];
    return enemyNo;
}

// using focus to get better results.
var focusResults = function (rGain) {
    player.rScore = player.rScore + (rGain * player.focusMulti);
    player.focus = player.focus - 2;
    updateFocus();
    return player.rScore;
};

//Check if player has enough focus.
var focusCheck = function() {
    if (player.focus < 2) {
        setTimeout(function(){alert("You do not have enough 'Focus' to do this action.")});
    }
}

//Resting restores focus and hp
var rest = function() {
    player.focus++;
    player.hp = player.hp + (player.hpMax * 0.25);
    if (player.focus > player.focusMax) {
        player.focus = player.focusMax;
    }
    if (player.hp > player.hpMax) {
        player.hp = player.hpMax;
    }
    updateFocus();
    updateHp();
}

//QOL functions
var clearInputs = function() {
    document.querySelector("#input").value = "";
};



//Battle functions
var doAttack = function () {
    ranNumGen(10);
    enemyNo.hp = enemyNo.hp - (ranNum + 2);
    ranNumGen(10*enemyNo.difficulty)
    player.hp = player.hp - ranNum;
    updateHp();
    updateEnemyInfo();
    return enemyNo.hp;
}

var doFocus = function () {
    if (player.focus < 1)
    {
        alert("You don't have enough focus to use this");
    }
    else
    {
        ranNumGen(20*player.focusMulti);
        enemyNo.hp = enemyNo.hp - (ranNum + 10);
        player.focus--
        ranNumGen(10*enemyNo.difficulty)
        player.hp = player.hp - ranNum;
        updateHp();
        updateFocus();
        updateEnemyInfo();
    }
    return;
}

var updateEnemyInfo = function () {
    display1(enemyNo.name + "\nEnemy Health :" + enemyNo.hp + "\nDesc: " + enemyNo.desc + "\n1. Attack Problem\n2. Use your focus to attack\n3. Give Up");
}

var gameOverGU = function () {
    gameStage = 9999;
    display1("You gave up.\nMaybe in another life you'll do better.");
    display2("I should make a reset command but it is late and I need to sleep");
    return;
}

var gameOverLost = function () {
    alert("You died");
    display1("The problem was too great and you went mad over the problem.\nIs this the end?");
    display2("I need to really make that reset command but my bed calls me.");
    gameStage = 9999;
    return;
}

var victoryBattle = function () {
    alert("You Won!!")
    display1("With great patience, insight and a little bit of luck you managed to overcome this programming problem.\nCongrats! You've Won the game. It is a little short right now but maybe in the future more will be done.\nYou got through the day and got the 'CODENOMICON'.\nWould you like to read it? ^(;,;)^");
    display2("Type '1' to read. Type '2' to keep it away for later.\nType '3' to throw it away.")
    gameStage++;
    inBattle = false;
}


var checkForDeadPeople = function () {
    if (player.hp <= 0)
    {
        gameOverLost();
    }
    else if (enemyNo.hp <= 0)
    {
        victoryBattle();
    }
    else
    {
        return;
    }
}