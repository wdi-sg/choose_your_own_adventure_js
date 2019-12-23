console.log("Functions seem to be working? (I hope).")

var gameStage = 0; //Help keep track at which state is the game in
var playerName;
var numRange;
var ranNum;
var playerInput;
var startShow; // For the clear interval function
var startHide;// Same as above


// Use "display()" function to easily change what is being displayed.
var display = function( data ){
    var displayElement = document.querySelector('#output');
    // get rid of the entire contents
    displayElement.innerHTML = "";
    // put the data into the div
    output.innerText = data;
};

// Starting Text
var startText = function() {
    display("Type 'start' to begin");
};

// To empty out the display
var clearOutput = function() {
    display("")
    console.log("Did you want me to happen?")
};

// Flashes the starting text every 2 seconds
var startTextFlash = function () {
    startText();
    startShow = setInterval(function(){ startText(); }, 2000);
    setTimeout(function(){ startHide = setInterval(function(){ clearOutput(); }, 2000); }, 1000);
    return;
}

// Stops the flashing "Start" text
var stopTextFlash = function () {
    clearInterval(startShow);
    clearInterval(startHide);
}


var getName = function (name) {
    playerName = name;
    return playerName;
}


var introStart = function () {
    display(introduction);
}



/*var ranNumGen = function (numRange) {
        ranNum = Math.floor(Math.random()*numRange);
        console.log(ranNum);
        return ranNum;
};*/