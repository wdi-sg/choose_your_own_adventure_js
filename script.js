var scene = 8;
var enemy;
var battleMode = false;
target.randomTaste(); //Generate random outfit preference for target.
function addApproval(input) {
    user.approval += input;
}

//Function to display scenario, choices & approval where appropriate.

function showScene(number) {
    //If the scenario has choices, return text, choices, and approval rating (only after the scene where you meet the target.)
    if (scenarios[number].choices) {
        return `${(scene > 8) ? `Approval : ${user.approval} ${p}`:""}  ${scenarios[number].text} ${p} ${scenarios.display(number)}`;
        //If the scenario is an ending, just return the text, and a final approval rating (after meeting target).
    } else {
        return `${(scene > 8) ? `Final Approval : ${user.approval} ${p}`:""} ${scenarios[number].text}`
    }
}

//Function to reset the game.
function reset() {
    scene = 1;
    user.name = null;
    enemy = null;
    trainee.hp = 8;
    user.outfit = null;
    user.approval = 0;
    user.hp = 15;
    if (user.moves.length > 2) {
        user.moves.pop();
    };
    return showScene(1)
}

//BATTLE FUNCTION
function battle(input, enemy) {
    var userMoves = `Choose your move: ${user.showMoves()}.`;
    var userResults = user.attack(input, enemy);
    var enemyResults = enemy.attack(getRandomInt(0, 1), user); //Randomizes enemy's attacks.

    //If enemy HP reaches 0.
    if (enemy.hp <= 0) {
        battleMode = false;
        scene = 4;
        return showScene(4);
        //If user HP reaches 0.
    } else if (user.hp <= 0) {
        scene = 3; //bad ending
        battleMode = false;
        return showScene(3);
    }

    return `${userResults} ${p} ${enemyResults} ${p} Your HP: ${user.hp} ${br} ${enemy.name} HP: ${enemy.hp} ${p} ${userMoves}`;
}

//Display first scene.
document.getElementById("output").innerText = showScene(1);


///MAIN FUNCTION
var inputHappened = function(currentInput) {
    console.log(`Current scene: ${scene}`)
    var username;
    //Clear all inputs.
    clearInput();

    //Make sure input is a number for all scenes apart from 8, where user should input their name.
    if (scene !== 8) {
        currentInput = parseInt(currentInput);
    }

    //Make default error message.
    var error = `Sorry, that was not a valid input. Please try again. \n\n ${showScene(scene)}`

    //Check if battlemode is on
    if (battleMode) {
        return battle(currentInput, enemy);
    } else {
        //If battlemode is not on, display scenarios & choices accordingly.
        switch (scene) {
            case 1:
                if (currentInput === 0) {
                    user.moves.push({
                        key: 2,
                        name: "Flip Flop Attack", //Adds flip flops to user moves.
                        power: 3
                    })
                    user.outfit = "flipflop";
                    scene++;
                } else if (currentInput === 1) {
                    user.outfit = "classy";
                    scene++;
                } else if (currentInput === 2) {
                    user.outfit = "casual";
                    scene++;
                } else {
                    return error
                }
                break;
            case 2:
                if (currentInput === 0) {
                    enemy = trainee;
                    battleMode = true;
                    return `You are now facing ${enemy.name}. ${p} Choose your move: ${user.showMoves()}`
                } else {
                    return error
                }
                break;
            case 4:
                if (currentInput === 0) {
                    if (user.outfit === "flipflop") {
                        scene = 5;
                    } else {
                        scene = 8
                    }
                } else {
                    return error;
                }
                break;
            case 5:
                if (currentInput === 0) {
                    scene = 7; //bad ending
                } else if (currentInput === 1) {
                    scene = 6
                } else {
                    return error
                };
                break;
            case 6:
                if (currentInput === 0) {
                    user.outfit = "classy"
                    user.moves.pop(); //takes flip flops out of moves.
                    scene = 8;
                } else if (currentInput === 1) {
                    user.outfit = "casual";
                    user.moves.pop(); //takes flip flops out of moves.
                    scene = 8;
                } else {
                    return error
                }
                break;
            case 8:
                user.name = capitalise(currentInput);
                scene++;
                if (user.outfit === target.preference) { //If user outfit matches target's preference, bonus 20 points.
                    addApproval(20);
                }
                showScene(9);
                break;
            case 9:
                console.log(user.name);
                if (currentInput === 0) {
                    addApproval(10);
                    scene = 11;
                } else if (currentInput === 1) {
                    addApproval(20);
                    scene = 10;
                } else {
                    return error;
                }
                break;
            case 10:
            case 11:
                if (currentInput === 0) {
                    addApproval(-10);
                    scene = 13;
                } else if (currentInput === 1) {
                    addApproval(10);
                    scene = 14;
                } else if (currentInput === 2) {
                    scene = 12; //bad ending
                } else {
                    return error;
                }
                break;
            case 13:
            case 14:
                if (currentInput === 0) {
                    addApproval(20);
                    scene = 15;
                } else if (currentInput === 1) {
                    addApproval(10);
                    scene = 16;
                } else {
                    return error;
                }
                break;
            case 15:
            case 16:
                if (currentInput === 0) {
                    addApproval(-10);
                    scene = 17
                } else if (currentInput === 1) {
                    addApproval(20);
                    scene = 17;
                } else {
                    return error;
                }
                break;
            case 17:
                if (currentInput === 0) {
                    if (user.approval < 50) {
                        scene = 18 //bad ending
                    } else {
                        scene = 19
                    }
                } else if (currentInput === 1) {
                    if (user.approval < 50) {
                        scene = 20; //bad ending
                    } else {
                        scene = 21;
                    }
                } else {
                    return error;
                }
                break;

            case 19:
                if (currentInput === 0) {
                    addApproval(20);
                    scene = 22;
                } else if (currentInput === 1) {
                    addApproval(10)
                    scene = 22;
                } else {
                    return error;
                }
                break;
            case 21:
                if (currentInput === 0) {
                    addApproval(20);
                    scene = 22;
                } else if (currentInput === 1) {
                    addApproval(-10)
                    scene = 22;
                } else {
                    return error;
                }
                break;
            case 22:
                if (currentInput === 0) {
                    if (user.approval >= 60) {
                        scene = 23; //decide to kill or save target
                    } else if (user.approval < 60) {
                        scene = 26; //bad ending
                    }
                } else {
                    return error;
                }
                break;
            case 23:
                if (currentInput === 0) {
                    scene = 24; //save target: bad ending
                } else if (currentInput === 1) {
                    scene = 25; //GOOOD ENDING.
                } else {
                    return error;
                }
                break;
                //CASES WHERE USER HAS FAILED OR SUCCEEDED, RESET EVERYTHING.
            case 3:
            case 7:
            case 12:
            case 18:
            case 20:
            case 24:
            case 25:
            case 26:
                reset();
                break;
            default:
                reset();
                return error;
        }
    }
    return showScene(scene);
};
