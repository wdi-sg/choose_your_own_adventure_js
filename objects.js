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
                                            speed: 30
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
                                            power: 200,
                                            speed: 140,
                                     }
                             }
            }]


//4 paths to choose from, there after each destination is determined by random, will merge paths by using exact same object keys and values.
var path = {
            "Fire Path": [["Element Path", "Element Path", "Element Path"],
                            ["Element Path", "Human Path", "Human Path"],
                            ["Human Path", "Beast Path", "Beast Path"]],
            "Water Path": [["Element Path", "Human Path", "Element Path"],
                            ["Human Path", "Element Path", "Human Path"],
                            ["Human Path", "Beast Path", "Beast Path"]],
            "Earth Path": [["Element Path", "Beast Path", "Element Path"],
                            ["Beast Path", "Element Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]],
            "Wind Path": [["Element Path", "Element Path", "Beast Path"],
                            ["Element Path", "God Path", "Element Path"],
                            ["God Path", "Beast Path", "Beast Path"]],
        }

//this is where user encounters the demons according to the path traveled.
var encounter = function(){
    if(input === "proceed"){
        ranNum = Math.floor(Math.random() * 3);
        ranNumDemon = Math.floor(Math.random() * 2);
        currentPath = path[pathTaken[0]][ranNum][ranNum];
        pathTaken.push(currentPath);
    if(currentPath === "Element Path") {
        enemy = demon[ranNumDemon]["demon"];
        enemyName = "Elemental Demon";
        enemyDie = "get more speed"
        enemyHP = enemy.stats.hp;
        enemyPower = enemy.stats.power;
        enemySpeed = enemy.stats.speed;
    } else if(currentPath === "Beast Path") {
        enemy = demon[2]["demon health"];
        enemyName = "Beast Demon";
        enemyDie = "get more power"
        enemyHP = enemy.stats.hp;
        enemyPower = enemy.stats.power;
        enemySpeed = enemy.stats.speed;
    } else if(currentPath === "Human Path") {
        enemy = demon[ranNumDemon]["demon"];
        enemyName = "Lesser Demon";
        enemyDie = "get more health"
        enemyHP = enemy.stats.hp;
        enemyPower = enemy.stats.power;
        enemySpeed = enemy.stats.speed;
    } else if(currentPath === "God Path") {
        enemy = demon[3]["demon boss"];
        enemyName = "Demon Lord";
        enemyDie = "finish the game"
        enemyHP = enemy.stats.hp;
        enemyPower = enemy.stats.power;
        enemySpeed = enemy.stats.speed;
    };
    result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nWatch out, " + name + "! You've just encountered a " + enemyName + "! \n\nIt's stats are displayed below: \n\nDemon HP: " + enemyHP + "\nDemon Power: " + enemyPower + "\nDemon Speed: " + enemySpeed + "\n\nIf you manage to defeat it, you will be able to " + enemyDie + ". \n\nPlease type 'FIGHT' to start fighting the " + enemyName + ".";


    } else {
        step.pop();
        result = "Please type 'Proceed' to continue";
    }
};



//this is where the fight scene occurs
var fightScene = function(){



if(input === "fight"){
        if(characterSpeed >= enemySpeed){
            var whoMovesFirst = name;
            var whoMovesSecond = enemyName;
        } else {
            var whoMovesFirst = enemyName;
            var whoMovesSecond = name;
        };


        if (whoMovesFirst === name){
            enemyHP = parseInt(enemyHP) - parseInt(characterPower);
            if (enemyHP > 0) {
                characterHP = parseInt(characterHP) - parseInt(enemyPower);
                if (characterHP <= 0){
                characterHP = 0;
                };
                step.pop();
                result = "Oh no, the "+ enemyName + " attacked you first! \n\nYou are still alive " + name + " the " + characterChosen + " please type in 'FIGHT' to continue fighting the " + enemyName + "!!"
            }
            if (enemyHP <= 0){
                enemyHP = 0;
            };
        } else {
            characterHP = parseInt(characterHP) - parseInt(enemyPower);
            if (characterHP <= 0){
                characterHP = 0;
                };
        }


        if (enemyHP === 0){
            result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nAs your speed is " + characterSpeed + " and the " + enemyName + " speed is " + enemySpeed + ", the one who strikes first is " + whoMovesFirst + "!!\n\nThe enemy's health is now " + enemyHP + " while yours is " + characterHP + "!!  \n\nCongratulations! You have defeated the " + enemyName + "!! \n\nPlease type 'Proceed' to continue ";
        };

        if (characterHP === 0){
            setTimeout(location.reload.bind(location), 10000);
            result = name + " the " + characterChosen +"\nHP: " + characterHP + "\nPower: " + characterPower +"\nSpeed: " + characterSpeed + "\n\nAs your speed is " + characterSpeed + " and the " + enemyName + " speed is " + enemySpeed + ", the one who strikes first is " + whoMovesFirst + "!!\n\nThe enemy's health is now " + enemyHP + " while yours is " + characterHP + "!! \n\nIt looks like " + name + " the great " + characterChosen + " has been defeated. \n\nDo not falter " + name + "! The Demon Lord needs to be slain and only you have the power to accomplish this task! \n\nThe page will reload in 10 seconds";
        };


} else {
        step.pop();
        result = "Please type 'FIGHT' to face the " + enemyName + "!!";


    }


};