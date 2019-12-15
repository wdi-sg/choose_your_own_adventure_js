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

// using focus to get better results.
var focusResults = function (rGain) {
    player.rScore = player.rScore + (rGain * player.focusMulti);
    player.focus--;
    updateFocus();
    return player.rScore;
};

//Check if player has enough focus.
var focusCheck = function() {
    if (player.focus < 1) {
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