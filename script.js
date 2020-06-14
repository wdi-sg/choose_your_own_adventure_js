console.log("hello script js");

var player = { //player object to store player values
    name: "",
    level: [0],
    items: [],
    hitpoints: 10
}

var currentLevel = 0; //tracks the current level user is at

var inputHappened = function(currentInput){ //captures the button that was pressed
    console.log(currentInput);
    processInput(currentInput);
    var textFill = loadLevel(currentLevel);
    console.log(currentLevel);
    return textFill;

};
var processInput = function(input){
    if(input == "Left"){
        if(currentLevel == 2 || currentLevel == 6){
            player.level.push(currentLevel);
            currentLevel = 5;
        } else if(currentLevel == 7){
            player.level.push(currentLevel);
            currentLevel = 6;
        } else if(currentLevel == 4){
            player.level.push(currentLevel);
            currentLevel = 3;
        } else if(currentLevel == 1 || currentLevel == 3 || currentLevel == 5){
            player.level.push(currentLevel);
            currentLevel = 2;
        }
    } else if(input == "Forward"){
        if(currentLevel == 1){
            player.level.push(currentLevel);
            currentLevel = 3;
        } else if(currentLevel == 6){
            player.level.push(currentLevel);
            currentLevel = 8;
        }
    } else if(input == "Back"){
        currentLevel = player.level.pop();
    } else if(input == "Right"){
        if(currentLevel == 4 || currentLevel == 6){
            player.level.push(currentLevel);
            currentLevel = 7;
        } else if(currentLevel == 5){
            player.level.push(currentLevel);
            currentLevel = 6;
        } else if(currentLevel == 2){
            player.level.push(currentLevel);
            currentLevel = 3;
        } else if(currentLevel == 1 || currentLevel == 3 || currentLevel == 7){
            player.level.push(currentLevel);
            currentLevel = 4
        }
    }
};

var loadLevel = function(level){
    if(level == 0){
        currentLevel = 1;
        return loadLevel(currentLevel);
    } else {
        if(level == 1){
            return firstLevel();
        } else if(level == 2){
            return secondLevel();
        } else if(level == 3){
            return thirdLevel();
        } else if(level == 4){
            return fourthLevel();
        } else if(level == 5){
            return fifthLevel();
        } else if(level == 6){
            return sixthLevel();
        } else if(level == 7){
            return seventhLevel();
        } else if(level == 8){
            return finalLevel();
        }
    }
}

var buttonChanger = function(buttonName, newValue){
    //code to change the values of buttons
    document.getElementById(buttonName).value = newValue;
}

var firstLevel = function(){
    //first level code goes here
    var gameText = "You find that the path is reasonably well lit, and it forks into 3 seemingly separate paths,to the left, forward, and to the right. Where will you go?";
    buttonChanger("button1","Left");
    buttonChanger("button2","Forward");
    buttonChanger("button3","Right");

    return gameText;
}

var secondLevel = function(){
    //second level code goes here, loads when user select LEFT path
    var gameText = "";
    if(player.items.includes("Axe")){
        gameText = "The path opens up into a small cavern, there are two doors. Where will you go?";
    } else {
        player.items.push("Axe");
        gameText = "The path opens up into a small cavern, there are two doors. You spot an axe leaning against the wall, and pick it up. Maybe it will be useful. Where will you go next?";
    }
    buttonChanger("button2","Back");
    //document.getElementById("button1").disabled = false;

    return gameText;
}

var thirdLevel = function(){
    var gameText = "You reach a Tee junction, and you spot 2 doors - to the left and right. Where will you go?";
    buttonChanger("button2","Back");
    return gameText;
}

var fourthLevel = function(){
    var gameText = "Fourth LEVEL!!!WTFBBQ";
    buttonChanger("button2","Back");
    //document.getElementById("button1").disabled = false;
    return gameText;
}

var fifthLevel = function(){
    var gameText = "Fifth Level";
    buttonChanger("button2","Back");
    //document.getElementById("button1").disabled = true;
    return gameText;
}

var sixthLevel = function(){
    var gameText = "You are in a square room with a large metal door, flanked by 2 smaller doors - one of which you entered via. You hear growling coming from the large door. Press Forward to enter it, or enter either of the other 2 doors.";
    // document.getElementById("button1").disabled = false;
    // document.getElementById("button3").disabled = false;
    buttonChanger("button2","Forward");
    return gameText;
}

var seventhLevel = function(){
    var gameText = "seventh!";
    //document.getElementById("button3").disabled = true;
    buttonChanger("button2","Back");
    return gameText;
}

var finalLevel = function(){
    var gameText = "final boss time. pew pew pew. Press back to run like a chicken!"
    buttonChanger("button2","Back");
    return gameText;
}