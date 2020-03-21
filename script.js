var scene = 1;
var enemy;
var battleMode = false;

target.randomTaste(); //Generate random preference for target.

function addApproval(input) {
    user.approval += input;
}

function showScene(number) {
    if (scenarios[number].choices) {
        return `Scene: ${scene} ${br} Approval: ${user.approval} ${p} ${scenarios[number].text} ${p} ${scenarios.display(number)}`;
    } else {
        return `${scenarios[number].text}`
    }
}

function getUserName(name) {
  user.name = name;
}

function reset() {
    scene = 1;
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

function battle(input, enemy) {
    var userMoves = `Choose your moves: ${user.showMoves()}.`;
    var randomNo = getRandomInt(0, 1)
    var userResults = user.attack(input, enemy);
    var enemyResults = enemy.attack(randomNo, user);
    if (enemy.hp <= 0) {
        battleMode = false;
        scene = 4;
        return showScene(4);
    } else if (user.hp <= 0) {
        scene = 3;
        battleMode = false;
        return showScene(3);
    }

    return `${userResults} ${p} ${enemyResults} ${p} Your HP: ${user.hp} ${br} ${enemy.name} HP: ${enemy.hp} ${p} ${userMoves}`;
}

document.getElementById("output").innerText = showScene(1);

var inputHappened = function(currentInput) {
    console.log(`Current scene: ${scene}`)
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

        switch (scene) {
            case 1:
                if (currentInput === 0) {
                    user.moves.push({
                        key: 2,
                        name: "Flip Flop Attack",
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
                    return `You are now facing ${enemy.name}. Please choose your moves: ${user.showMoves()}.`
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
                    scene = 7;
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
                getUserName(currentInput);
                scene++;
                if (user.outfit === target.preference) {
                    addApproval(20);
                } else {
                    addApproval(10);
                }
                break;
            case 9:
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
                    scene = 12;
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
                        scene = 20;
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
                if (currentInput) {
                    if (user.approval >= 70) {
                        scene = 23;
                    } else if (user.approval < 70) {
                        scene = 27;
                    } else {
                        return error;
                    }
                }
                break;
            case 23:
                if (currentInput === 0) {
                    scene = 24;
                } else if (currentInput === 1) {
                    scene = 25;
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
