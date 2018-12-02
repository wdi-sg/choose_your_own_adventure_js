//store data
var character = {
    name : "User 1",
    health : 4000,
    fight : 100,
    ultD : 2,
    run : 1,
    level : 0,
    winStatus : "nil",
    restart : "ok"
}
var monster = {
    health : [100, 250, 500, 700, 1000],
    attack: [100, 200, 300, 500, 1000]
}
var damage;
var dealt;
var strings = function(level, type){
    var battle = "A Monster of " + monster.health[character.level] + " hp stands before you! What do you do? Fight, Run, or restart the game?? (f/ r/ end)\n\nHealth: " + character.health + "\nLevel: " + character.level + "\nMonster (Health/ Base Damage): " + monster.health[character.level] + " // " + monster.attack[character.level];
    var peace = "There are 2 paths in front of you! Do you go LEFT or RIGHT?? or restart the game? (rt/ lt/ end)\n\nHealth: " + character.health + "\nLevel: " + character.level;
    var fight = "\n\nHealth: " + character.health + "\nLevel: " + character.level + "\nMonster (Health/ Base Damage): " + monster.health[character.level] + " // " + monster.attack[character.level];
    if(type === "battle"){
        return battle;
    }else if(type === "peace"){
        return peace;
    }else {
        return fight;
    }
}
//calculations
var inputCorrect = function(input, type){
    if(type === "num"){
        var correction = parseInt(input);
    }else if (type === "string"){
        var correction = input.toLowerCase();
    }
    return correction;
};
var randomizer = function(max){
    return Math.floor(Math.random() * Math.floor(max));
}
var difficulty = function(level){
    if(level === 1)
        character.health = 4000 / level;
        character.ultD = 2 / level;
        run = 2 / level;
        monster.health = [100 * level, 250 * level, 500 * level, 700 * level, 1000 * level];
        monster.attack = [100 * level, 200 * level, 300 * level, 500 * level, 1000 * level];
}
//options
var options = {
    f : function(){
        while(monster.health[character.level] > 0 && character.health > 0){
            var ult = prompt("Last chance to use your Ult. (u)\nYou can also continue. (f)" + strings(0, "fight"));
            if(inputCorrect(ult, "string") === "u") {
                options.u();
            }
            if(inputCorrect(ult, "string") === "f"){
                dealt = randomizer(character.fight);
                damage = randomizer(monster.attack[character.level]);
            }
            character.health -= damage;
            monster.health[character.level] -= dealt;
            alert("You dealt " + dealt + " damage!\nYou received " + damage + " damage!" + strings(0, "fight"));
        }
        if(character.health < 0){
            return
        }else {
            character.level += 1;
            alert("YOU HAVE DEFEATED THE MONSTER!\nNEXT LEVEL: \n" + strings(0, "fight"));
        }
    },
    r : function(){
        alert("You ran safely to the next level!\nHealth: " + character.health + "\nLevel: " + character.level);
        character.level += 1;
    },
    u : function(){
        var ultChoice = prompt("You have 3 Ultimates: \nSword of Death (d)\nFountain of Youth (y)\nSwift Strike (s)\nThe description of their abilities lies below" + strings(0, "fight"))
        if(inputCorrect(ultChoice, "string") === "d"){
            if(character.ultD >= 1){
                character.ultD -= 1;
                dealt = 10000;
                damage = 0;
            }else{
                alert("You don't have the Sword of Death!");
                ultChoice = prompt("You have 2 Ultimates: \nFountain of Youth (y)\nSwift Strike (s)\n The description of their abilities lies below" + strings(0, "fight"));
            }

        }
        if(inputCorrect(ultChoice, "string") === "y"){
            var multiplier = 5;
            while(multiplier <= 0 || multiplier >= 5){
                multiplier = prompt("There are 4 levels of Youth, Choose Wisely \n(1/2/3/4)" + strings(0, "fight"));
                inputCorrect(multiplier, "num")
            }
                dealt = 0;
                damage = randomizer(monster.attack[character.level] * multiplier * 2);
                var heal = monster.attack[character.level] * multiplier * 1.5;
                character.health += heal;
                alert("You are healed!\nAdditional hp: " + heal + strings(0, "fight"))
        }
        if(inputCorrect(ultChoice, "string") === "s"){
            var multiplier = 5;
            while(multiplier <= 0 || multiplier >= 5){
                multiplier = prompt("How many Strikes do you want to Execute? Choose Wisely \n(1/2/3/4)" + strings(0, "fight"))
                inputCorrect(multiplier, "num")
            }
            dealt = randomizer(monster.attack[character.level] * multiplier * 2);
            damage = randomizer(monster.attack[character.level] * multiplier * 2);
        }
    },
    lt : function(){
        var random = randomizer(10);
        if(random === 3){
            alert("TSUAMI!!! YOU WERE PUSHED A LEVEL BACK!");
            character.level -=1;
        }else if(random > 3){
            var damage = randomizer(1000);
            var trap = ["funny", "spike", "dart", "fire", "non"]
            character.health -= damage;
            alert("You are caught in a " + trap[randomizer(4)] + " trap! and was dealt " + damage + " damage!\nHealth: " + character.health + "\nLevel: " + character.level);
            character.level += 1;
        }else{
            alert("You passed safely to the next level");
            character.level += 1;
        }
    },
    rt : function(){
        options.lt();
    },
    end : function(){
        alert("restarting game ... ");
        character.name = "User 1";
        character.health = 4000;
        character.fight = 100;
        character.ultD = 1;
        character.run = 1;
        character.level = 0;
        character.winStatus = "nil";
        character.restart = "ok";
        monster.health = [100, 250, 500, 700, 1000];
        monster.attack =  [100, 200, 300, 500, 1000];
    }
};
//win Condition
var winLose = function(type){
    var replay = prompt(character.name + " ! You have " + type + "the game!\nIndicate if you want to play again(Y/N)");
    if(inputCorrect(replay, "string") === "n"){
        character.restart = "no";
    }else {
        options.end();
    }
}
//DUNGEON PATHS
var dungeon = function(path) {
    var optCheck = ["f", "r", "u", "lt", "rt", "end"];
    while(character.level < 5 && character.health > 0) {
        var run = "run";
        while (run === "run"){
            var opt = prompt(strings(character.level, path));
            opt = inputCorrect(opt, "string");
            run = "nr";
            if(opt === "r"){
                if (character.run <= 1){
                    run = "run";
                    alert("You ran out of energy to run, try again");
                }
            }
        }
        for(var i = 0; i < optCheck.length; i++) {   //input into options
            if(opt === optCheck[i]) {
                options[optCheck[i]]();
            }
        }
    }
    if(character.health < 0){
        character.winStatus = "lose";
    }else{
        character.winStatus = "win";
    }
};


var intro = function(){
    while(character.restart === "ok"){
        alert("Do read the instructions below!!! Before you lies a DUNGEON!\nGet to the end of the DUNGEON before losing all your HEALTH!!!");
        var diff = prompt("Enter a difficulty Level!\n(1/2/3/4)");
        var paths = prompt("There are 7 paths before you! \nCHOOSE WISELY THE PATH YOU WISH TO GO DOWN (1/.../7)");
        paths = inputCorrect(paths, "num");
        difficulty(diff);
        if(paths === 2 || paths === 3 || paths === 6 || paths === 7){
            alert("You have entered a BATTLE path, fight off swarms of monsters to get out ALIVE!");
            dungeon("battle");
        }
        if(paths === 1 || paths === 4 || paths === 5) {
            alert("You have entered a PEACE path, get through a maze of traps to get out ALIVE!");
            dungeon("peace");
        }
        winLose(character.winStatus);
    }
};


// calls
intro();
console.log("name" + character.name);
console.log("health" + character.health);
console.log("run" + character.run);
console.log("level" + character.level);