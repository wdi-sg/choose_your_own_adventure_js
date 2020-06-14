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
        if(currentLevel == 1 || currentLevel == 3){
            player.level.push(currentLevel);
            currentLevel = 2;
        } else if(currentLevel == 4){
            player.level.push(currentLevel);
            currentLevel = 3;
        }
    } else if(input == "Forward"){
        if(currentLevel == 1){
            player.level.push(currentLevel);
            currentLevel = 3;
        }
    } else if(input == "Back"){
        currentLevel = player.level.pop();
    } else if(input == "Right"){
        if(currentLevel == 1 || currentLevel == 3){
            player.level.push(currentLevel);
            currentLevel = 4;
        } else if(currentLevel == 2){
            player.level.push(currentLevel);
            currentLevel = 3;
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
    var gameText = "The path opens up into a small cavern, there are two doors. Where will you go?";
    buttonChanger("button2","Back");

    return gameText;
}

var thirdLevel = function(){
    var gameText = "Third level!!";
    buttonChanger("button2","Back");
    return gameText;
}

var fourthLevel = function(){
    var gameText = "Fourth LEVEL!!!WTFBBQ"
    buttonChanger("button2","Back");
    return gameText;
}