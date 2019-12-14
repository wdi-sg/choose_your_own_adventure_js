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


// Flashes the starting text every 2 seconds
var startTextFlash = function () {
    display1("Type 'Start' to begin");
    startShow = setInterval(function(){ display1("Type 'Start' to begin"); }, 2000);
    setTimeout(function(){ startHide = setInterval(function(){ clearOutput1(); }, 2000); }, 1000);
    return;
}

// Stops the flashing "Start" text
var stopTextFlash = function () {
    clearInterval(startShow);
    clearInterval(startHide);
}


var getName = function (name) {
    player.name = name;
    return player.name;
}


var introStart = function () {
    display2(introduction);
}



/*var ranNumGen = function (numRange) {
        ranNum = Math.floor(Math.random()*numRange);
        console.log(ranNum);
        return ranNum;
};*/