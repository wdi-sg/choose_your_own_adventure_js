// ### Rules
// * Any path the user goes down must ask them at least **three** questions.
// * There must be a minimum of **seven** total destinations the user could arrive at based on their responses.
// * For **at least one** of the questions asked, there must be **more than two possible user responses**.
// * Your code must contain **at least one loop**.
// * Your code must make use of **both string and number user inputs**.
// * The game should work without the dev tools console open- no `console.log`!
// * You can only use `prompt`, `alert`, and `confirm`

// 1. Create prompt to get user input(create 3 questions after chosen path)
// 2. store the user input
// 3. create 7 rooms to go into
// 4. create questions with more than 1 option
// 5. ceate for loop in a room to get random weapon in chest

// Equipment array that stores equipment. When user answer yes to prompt in dungeon function they given a random weapon
var equipmentBox = ["Sword", "Spear", "Dagger", "Axe", "Rapier", "PickAxe", "Bat"];
var randomNum = Math.floor(Math.random() * 7);
var randomEquip = equipmentBox[randomNum];
var randomEquipString = randomEquip.toString();

var userNameOutput = [];
var point = 0;
// Object for user stats to show before entering dungeon
var userStats = {
    Name: userNameOutput,
    Points: point,
    Health: 100,
    Weapon: randomEquipString
}

// Function to break out of game
var stopGame = function(){
    break;
}

// Function executed from newMap 1 second if statement
var train = function(){
    var nextStep = prompt("There is a fight happening up ahead. Do you want to help break up the fight or ignore it?");
    var nextStepChoice = nextStep.toLowerCase();
    if(nextStepChoice.includes("help") === true || nextStepChoice.includes("fight") === true){
        alert(userNameOutput[0] + " was attacked while trying to help and died D:");
        start();
    }
    else if(nextStepChoice.includes("ignore") === true){
        alert(userNameOutput[0] + " is jerk and a lightning suddenly strikes you while you walked away. Of course you died!");
        start();
    }
    else{
        alert("Not a valid choice, please choose again.");
        train();
    }
}

// Function executed from newMap2 second if statement
var explore = function(){
    var exploreTown = prompt(userNameOutput[0]+ " have just spotted a person running towards you.\nDo you want to stop the person and ask him about his situation? Yes/No");
    var exploreTownChoice = exploreTown.toLowerCase();
    if(exploreTownChoice.includes("y") === true){
        alert(userNameOutput[0] + " reached out your hand to try to grab hold of him.");
        alert("The guy push you away and you fell backwards. You knocked your head against the wall and became unconscious.");
        start();
    }
    else if(exploreTownChoice.includes("n") === true){
        alert(userNameOutput[0] + " pretends not to see him and continue walking down the street and continue your exploration.");
        start();
    }
    else{
        alert("Not a valid choice, please choose again.");
        explore();
    }
}

var dungeon = function(){
    alert(userNameOutput[0] + " has reached the dungeon entrance. A sign board and a huge box lying beneath it.\n\nThe sign board reads 'Welcome to the dungeon brave soul in order to aid you on your tough trial that lies ahead of you, I have left a box below this sign and I want you to open it. A random equipment will appear in the box and you are free to bring it along with you on your adventure into the dungeon. I wish you luck!'-Annoymous");
    alert("These are the equipments that can appear from the equipment box 'Sword, Spear, Dagger, Axe, Rapier, Crowbar, Bat'.");
    var dungeonEntrance = prompt("Do you still want to proceed to open the equipment box? Yes/No");
    var dungeonEntranceInput = dungeonEntrance.toLowerCase();

        if(dungeonEntranceInput.includes("y") === true){
            alert(userNameOutput[0] + " has received a " + randomEquip + "." + "\nVenture on adventurer!");
            dungeonFloor();
        }
        else if(dungeonEntranceInput.includes("n") === true){
            alert(userNameOutput[0] + " leaves the dungeon and headed back to the previous location.");
            newMap3();
        }
        else{
            alert("Not a valid choice, please choose again.");
            dungeon();
        }
}

// Base on enterMap function the choices will execute 1 out of the 3 newMap function
var newMap1 = function(){
    var welcome1 = prompt("A crowd can be seen gathering around a stadium\nDo you want to check out the commotion? Yes/No");
    var welcomeInput1 = welcome1.toLowerCase();
    if(welcomeInput1.includes("y") === true){
        alert(userNameOutput[0] + " walks towards the stadium.");
        alert(userNameOutput[0] + " there is nothing to see here therefore you will be teleported back to the start.")
        start();
    }
    else if(welcomeInput1.includes("n") === true){
        alert(userNameOutput[0] + " walks away from the stadium.");
        train();
    }
    else{
        alert("Not a valid choice, please choose again.");
        newMap1();
    }
}

var newMap2 = function(){
    var welcome2 = prompt("The sky is turning dark and cloudy.\nDo you want to find an inn to stay for the night? Yes/No");
    var welcomeInput2 = welcome2.toLowerCase();
    if(welcomeInput2.includes("y") === true){
        alert(userNameOutput[0] + " makes a right turn towards a inn along the alley.");
        start();
    }
    else if(welcomeInput2.includes("n") === true){
        alert(userNameOutput[0] + " carries on exploring the town.");
        explore();
    }
    else{
        alert("Not a valid choice, please choose again.");
        newMap2();
    }
}

var newMap3 = function(){
    var welcome3 = prompt("Upon your arrival you saw a dungeon, a spring and a cave in front of you.\nWhich will you choose to explore?\n\n" + "The Dungeon\n" + "The Spring\n" + "The Cave");
    var welcomeInput3 = welcome3.toLowerCase();

    if(welcomeInput3.includes("dung") === true){
        alert(userNameOutput[0] + " walks towards the dungeon.");
        dungeon();
    }
    else if(welcomeInput3.includes("spr") === true){
        alert(userNameOutput[0] + " walks towards the spring.");
        alert("Spring closed please leave. " + userNameOutput[0] + " have no choice but to walk back to the previous location.");
        newMap3();
    }
    else if(welcomeInput3.includes("cave") === true) {
        alert(userNameOutput[0] + " walks towards the cave.");
        alert("Cave sealed please leave. " + userNameOutput[0] + " have no choice but to walk back to the previous location.");
        newMap3();
    }
    else{
        alert("Not a valid choice, please choose again.");
        newMap3();
    }
}

// Function will take the storeInput parameter from the start function and start executing the next function
var enterNewMap = function(storeInput){
    if(storeInput === 1){
        alert("Great Choice " + userNameOutput[0] + "\nLet the Adventure begin!");
        alert("Welcome to Oratoria!");
        newMap1();
    }
    else if(storeInput === 2){
        alert("Great Choice " + userNameOutput[0] + "\nLet the Adventure begin!");
        alert("Welcome to Taranor!");
        newMap2();
    }
    else if(storeInput === 3){
        alert("Great Choice " + userNameOutput[0] + "\nLet the Adventure begin!");
        alert("Welcome to Solayu Forest!");
        newMap3();
    }
    else if(storeInput === 4){
        alert("GoodBye! Have a nice day!");
        stopGame();
    }
    else{
        alert(userNameOutput[0] + " entered incorrect number. Returning to the start!"); // If user type in random integers in start function this will cease the game
        start();
    }
}

var inputName = function(){
    var userNameInput = prompt("Please input your name.");
    var userName = userNameInput;
    userNameOutput.push(userName);
}

// Function ask which area does the user want to start
var start = function() {
    var userInput = prompt("Hi there adventurer please pick a starting destination\n\n" + "1) Oratoria\n" + "2) Taranor\n" + "3) Solayu Forest\n" + "4) Exit Game\n\n" + "Just a heads up from the game maker please choose Solayu Forest then dungeon for maximum experience :D");
    var storeInput = parseInt(userInput);

        while(isNaN(storeInput) === true){
            alert("Error! Please input a number.");
            start();
            if(isNaN(storeInput) === false){
                break;
            }
        }
    enterNewMap(storeInput); // This function will be executed once the user input the right value
}

inputName(); // This function execute first when the browser opens
start(); // This function will execute second when the browser opens
