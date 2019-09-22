//3 class of characters, with different values of stats, haven't add in skills yet.
var character = {
    warrior: {
                stats: {
                            hp: 90,
                            power: 70,
                            speed: 40
                       },
             },
    mage: {
                stats: {
                            hp: 40,
                            power: 90,
                            speed: 50
                        }
        },
    ranger: {
                stats: {
                            hp: 60,
                            power: 50,
                            speed: 90
                        }
            }
}

//Fight 4 demons for now, maybe can add more later
var demon = [{
                "demon": {
                                stats: {
                                            hp: 60,
                                            power: 30,
                                            speed: 30,
                                     }
                             }
            },
            {
                "demon": {
                                stats: {
                                            hp: 30,
                                            power: 30,
                                            speed: 60
                                     }
                             }
            },
            {
                "demon health": {
                                stats: {
                                            hp: 60,
                                            power: 40,
                                            speed: 30,
                                     }
                             }
            },
            {
                "demon boss": {
                                stats: {
                                            hp: 200,
                                            power: 100,
                                            speed: 100
                                     }
                             }
            }]


//4 paths to choose from, there after each destination is determined by random, will merge paths by using exact same object keys and values.
var path = {
            "Fire Path": [["Element Path", "Element Path", "Element Path"],
                            ["Element Path", "Element Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]],
            "Water Path": [["Element Path", "Element Path", "Element Path"],
                            ["Element Path", "Element Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]],
            "Earth Path": [["Element Path", "Element Path", "Element Path"],
                            ["Element Path", "Element Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]],
            "Wind Path": [["Element Path", "Element Path", "Element Path"],
                            ["Element Path", "Element Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]],
        }

//this is where user encounters the demons according to the path traveled.
var encounter = function(){
    if(input === "proceed"){
        pathTaken[1] = path[pathTaken[0]][ranNum][ranNum];
        if(pathTaken[1] === "Element Path") {
            enemy = demon[ranNumDemon]["demon"];
            enemyName = "Elemental Demon";
            enemyDie = "get nothing"
            enemyHP = enemy.stats.hp;
            enemyPower = enemy.stats.power;
            enemySpeed = enemy.stats.speed;
        } else if(pathTaken[1] === "Beast Path") {
            enemy = demon[2]["demon health"];
            enemyName = "Beast Demon";
            enemyDie = "get more power"
            enemyHP = enemy.stats.hp;
            enemyPower = enemy.stats.power;
            enemySpeed = enemy.stats.speed;
        } else if(pathTaken[1] === "Human Path") {
            enemy = demon[ranNumDemon]["demon"];
            enemyName = "Lesser Demon";
            enemyDie = "get more health"
            enemyHP = enemy.stats.hp;
            enemyPower = enemy.stats.power;
            enemySpeed = enemy.stats.speed;
        } else if(pathTaken[1] === "God Path") {
            enemy = demon[3]["demon boss"];
            enemyName = "Demon Lord";
            enemyDie = "finish the game"
            enemyHP = enemy.stats.hp;
            enemyPower = enemy.stats.power;
            enemySpeed = enemy.stats.speed;
        };
        result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nWatch out, " + name + "! You've just encountered a " + enemyName + "! \n\nIt's stats are displayed below: \n\nDemon HP: " + enemyHP + "\nDemon Power: " + enemyPower + "\nDemon Speed: " + enemySpeed + "\n\nIf you manage to defeat it, you will be able to " + enemyDie + ". \n\nWill you run or will you fight, " + name + "??? \n\nPlease type 'RUN' to move on to the next path, or type 'FIGHT' to start fighting the " + enemyName + ".";
    } else {
        step.pop();
        result = "Please type 'Proceed' to continue";
    }
};



//this is where the fight scene occurs
var fightScene = function(){
    if(input === "fight"){
            if(characterSpeed > enemySpeed){
                var whoMovesFirst = name;
                var whoMovesSecond = enemyName;
            } else {
                var whoMovesFirst = enemyName;
                var whoMovesSecond = name;
            };
            if (whoMovesFirst === name){
                enemyHP = parseInt(enemyHP) - parseInt(characterPower);
                if (enemyHP <= 0){
                    enemyHP = 0;
                }
            } else {
                characterHP = parseInt(characterHP - enemyPower);
                if (characterHP <= 0){
                    characterHP = 0;
                }
            };
            if (enemyHP === 0){
                result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nAs your speed is " + characterSpeed + " and the " + enemyName + " speed is " + enemySpeed + " The one who strikes first is " + whoMovesFirst + "!! \n\nCongratulations! You have defeated the " + enemyName + "!!";
            } else if (characterHP === 0){
                result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\ns your speed is " + characterSpeed + " and the " + enemyName + " speed is " + enemySpeed + " The one who strikes first is " + whoMovesFirst + "!! \n\nIt looks like " + name + " the " + characterChosen + " has been defeated";
            };
        } else if (input === "run" && run === "") {
            run = "User have ran"
            result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nYou managed to ran away from the demon, you live to fight another day now " + name + ". Or do you???? \n\nPlease type 'Proceed' to continue ";
        } else if (input === "run" && run !== ""){
            step.pop();
            result = "It seems that " + name + " the great " + characterChosen + " have already ran away before and is unable to do so again, please type 'FIGHT' to face the enemy!! ";
        } else {
                step.pop();
                result = "Please type in 'RUN' or 'FIGHT' ";
        }
}
};