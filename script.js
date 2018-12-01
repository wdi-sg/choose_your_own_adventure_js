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


var train = function(){
    var nextStep = prompt("There is a fight happening up ahead. Do you want to help break up the fight or ignore it?");
    var nextStepChoice = nextStep.toLowerCase();
    if(nextStepChoice.includes("help") === true){
        alert("You were attacked while trying to help and died D:");
        start();
    }
    else if(nextStepChoice.includes("ignore") === true){
        alert("Your a jerk and a lightning suddenly strikes you while you walk away. Of course you died!");
        start();
    }
    else{
        alert("Not a valid choice, please choose again");
        train();
    }
}

var explore = function(){
    var exploreTown = prompt("You spotted a person running towards you.\nDo you want to stop the person and ask him about his situation? Yes/No");
    var exploreTownChoice = exploreTown.toLowerCase();
    if(exploreTownChoice.includes("y") === true){
        alert("You reach out your hand to try to grab hold of him");
    }
    else if(exploreTownChoice.includes("n") === true){
        alert("You pretend not to see him and continue walking down the street and continue your exploration");
    }
    else{
        alert("Not a valid choice, please choose again");
        explore();
    }
}

var newMap1 = function(){
    var welcome1 = prompt("A crowd can be seen gathering around a stadium\nDo you want to check out the commotion? Yes/No");
    var welcomeInput1 = welcome1.toLowerCase();
    if(welcomeInput1.includes("y") === true){
        alert("Walking towards the stadium");
    }
    else if(welcomeInput1.includes("n") === true){
        alert("Walking away from the stadium");
        train();
    }
    else{
        alert("Not a valid choice, please choose again");
        newMap1();
    }
}

var newMap2 = function(){
    var welcome2 = prompt("The sky is turning dark and cloudy.\nDo you want to find an inn to stay for the night? Yes/No");
    var welcomeInput2 = welcome2.toLowerCase();
    if(welcomeInput2.includes("y") === true){
        alert("Make a right turn towards a inn along the alley");
        start();
    }
    else if(welcomeInput2.includes("n") === true){
        alert("Carry on exploring the town");
        explore();
    }
    else{
        alert("Not a valid choice, please choose again");
        newMap2();
    }
}

var newMap3 = function(){
    var welcome3 = prompt("Upon your arrival you saw a dungeon, a spring and a cave in front of you.\nWhich will you choose to explore?\n\n" + "The Dungeon?\n" + "The spring?\n" + "The cave?");
    var welcomeInput3 = welcome3.toLowerCase();
    if(welcomeInput3.includes("dung") === true){
        alert("Entering the dungeon");
    }
    else if(welcomeInput3.includes("spr") === true){
        alert("Walking towards the spring");
    }
    else if(welcomeInput3.includes("cave") === true) {
        alert("Entering the cave")
    }
    else{
        alert("Not a valid choice, please choose again");
        newMap3();
    }
}

var enterNewMap = function(storeInput){
    if(storeInput === 1){
        var map1 = alert("Welcome to Oratoria!");
        newMap1();
    }
    else if(storeInput === 2){
        var map2 = alert("Welcome to Taranor!");
        newMap2();
    }
    else if(storeInput === 3){
        var map3 = alert("Welcome to Solayu Forest!");
        newMap3();
    }
    else{
        alert("Warp into Outer space!");
    }
}

var start = function() {
    var userInput = prompt("Hi there adventurer please pick a starting destination\n\n" + "1) Oratoria\n" + "2) Taranor\n" + "3) Solayu Forest");
    var storeInput = parseInt(userInput);

        if(isNaN(storeInput) === true){
            alert("Error! Please choose a number.");
            start();
        }
        else{
            alert("Great Choice! \nLet the Adventure begin!");
        }
    enterNewMap(storeInput);
}

start();
