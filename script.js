var isGameRunning = false;
var isNameEntered = false;
var isPlayerActive = false;
var isStoryModeOn = false;
var isStageOne = false;
var isStageTwo = false;


var characterDB = [];
var currentPlayer ;

const character = {
    name: 'name',
    job: 'class',
    hp: 0,
    mp: 0,
    sta: 0,
    skills: "skills",
    logStats() {
        console.log(this.name);
        console.log("job: " + this.job);
        console.log("hp: " + this.hp);
        console.log("mp: " + this.mp);
        console.log("skills: " + this.skills);
    }
};

jobDB = ["Arcane WIzard", "Blood Berserker", "WIzard", "Berserker"]
statPointsDB = [2000, 200, 200, 200, 10, 10, 10, 10]
skillsDB = ["Arcane Bomb", "Arcane Ball", "Blood Rush", "Blood Manipulation"]

playersDB = [];

document.querySelector('#input').addEventListener('change', function(event){
        var currentInput = event.target.value;

        if(!isPlayerActive){
            console.log("Input entered " + currentInput)
            assignCharacter(currentInput);
            console.log("character assigned")
        } else if (isStoryModeOn) {
            storyModeInputs(currentInput);
        }

      });

var displayStory = function(input){
    var output = document.querySelector(".gamestory");
    output.innerHTML = input;
};
var displayStatus = function(input){
    var output = document.querySelector(".gamestatus");
    output.innerHTML = input;
};
var displayPrompts = function(input){
    var output = document.querySelector(".gameprompts");
    output.innerHTML = input;
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function runGame (){
    if(!isPlayerActive){
        alert("input name")
    } else {
        isGameRunning = true;
        isStoryModeOn = true;
    console.log("game is currently running")
    startStageOne();
    }
}
function endGame(){
    if(isGameRunning){
        isGameRunning = false;
        console.log("game has stopped running")
    }
}
function playerStatsWindow (currentPlayer){
    var x = currentPlayer.name;
    x.toupper
    displayStatus(`${currentPlayer.name} <br> Job: ${currentPlayer.job}<br>
    Hp: ${currentPlayer.hp}<br>Mp: ${currentPlayer.mp}<br>Sta: ${currentPlayer.sta}<br>Skills: ${currentPlayer.skills}`)
}
function assignCharacter (player){
    console.log("assigning character");
    nameEntered = true;
    if(nameEntered)
    var newplayer = Object.create(character);
    newplayer.name = player;
    newplayer.job = randomArray(jobDB);
    newplayer.hp = randomArray(statPointsDB);
    newplayer.mp = randomArray(statPointsDB);
    newplayer.sta = randomArray(statPointsDB);
    newplayer.skills = randomArray(skillsDB);
    console.log("character created")

    characterDB.push(newplayer)
    console.log("character added to DB")

    currentPlayer = newplayer;
    playerStatsWindow(currentPlayer)

    newplayer.logStats();
    nameEntered = false;
    console.log("initialized new player")
    isPlayerActive = true;
}
function checkUserInput(userinput){
    var x = userinput.toLowerCase();
    var acceptedInputs = [1, 2, 3, "move", "stay", "still",
        "forward", "help", "try to", "assist", "villain", "hero", 1.,2.]
    if(x.includes(userinput)){
        return x
    } else{
        alert("Please enter a valid answer!")
    }
}
function storyModeInputs(userinput){
    var x = checkUserInput(userinput)
    if(isStageOne){
        stageOneInputs(userinput)
    } else if (isStageTwo){
        stageTwoInputs(userinput);
    }
}

function startStageOne(){
    console.log("start of stage one")
    isStageOne = true;
    displayStory(checkpointOne)
    displayPrompts(pathOneA_Two + pathOneB_Two)
}
function startStageTwo(path){
    var x = randomArray(randomCPStageOne)
    if (path === 1){
        displayStory(x);
        if(x===checkpointTwoA){
            displayPrompts(pathTwoA_ThreeOne + pathTwoA_ThreeTwo + pathTwoA_ThreeThree)
        }else{
            displayPrompts(pathTwoA_ThreeOne + pathTwoA_ThreeTwo + pathTwoA_ThreeThree)
        }
    } else{
        displayStory(checkpointTwoC)
    }

}




function stageOneInputs(userinput){
    if(userinput === 1 || userinput === "move"){
        alert("stage 2")
    } else{
        alert("stage 3")
    }
}
function stageTwoInputs(userinput){
    var userinput = checkUserInput(userinput)
    if(userinput === 1 || userinput === "move"){
        alert("stage 2")
    } else{
        alert("stage 3")
    }

}

if(!isGameRunning){
    console.log("game is not running")
    console.log("awaiting Name input")
}