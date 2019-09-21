console.log("Map working")


//Display message on the board
function display(text){
    var outputText = document.getElementById("outputText");
    outputText.innerText = text;
    if(gameEnd === true){
        gameOver();
    }
    console.log(currentRoom)
    console.log(previousRoom)
}

function gameOver(){
    var gameoverText = document.getElementById("gameoverText");
    document.querySelector('#input').style.visibility = "hidden";
    document.querySelector('#output').style.visibility = "hidden";
    document.querySelector('#gameover').style.visibility = "visible";
    if (Radiation > 5){
        gameoverText.innerText = "You have died of Radiation Poisoning";
    } else if (winCondition > 0){
        gameoverText.innerText = "You have won the game";
    }
    // var reload = setTimeout(window.prompt("Do you want to reload?"),5000);
    // if (reload === "yes"){
    //     window.location.reload();
    // } Just create a button like sound button, that allows user to replay.
}

//Take input
document.querySelector('#input').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        var input = event.target.value;
        event.target.value =""

        switch(enterToContinue){
            case true:
                enterToContinue = false;
                if(monster.length === 0){
                    encounter = Math.random();
                    console.log(`encounter rolled: ${encounter}`);
                }
                game();
                break;
        }

        if (input === "return") {
            var tmp;
            tmp = currentRoom;
            currentRoom = previousRoom;
            previousRoom = tmp
            enterToContinue = true;
            narration = `You have chosen to return to the ${path["room"][currentRoom]}. Press enter to continue`;
            display(narration);
        }

        switch(currentPath){
            case 1:
                if(input === "right"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room2";
                    currentPath = 2;
                    enterToContinue = true;
                    narration = "You have chosen to move right. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "left"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room3";
                    currentPath = 3;
                    enterToContinue = true;
                    narration = "You have chosen to move left. Press enter to continue"
                    display(narration);
                    break;
                }

            case 2:
                if(input === "left"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room1";
                    currentPath = 1;
                    enterToContinue = true;
                    narration = "You have chosen to move left. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "up"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room4";
                    currentPath = 4;
                    enterToContinue = true;
                    narration = "You have chosen to move up. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "right"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room5";
                    currentPath = 5;
                    enterToContinue = true;
                    narration = "You have chosen to move right. Press enter to continue"
                    display(narration);
                    break;
                }

            case 3:
                if (input === "up"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room4";
                    currentPath = 4;
                    enterToContinue = true;
                    narration = "You have chosen to move up. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "left"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room6";
                    currentPath = 6;
                    enterToContinue = true;
                    narration = "You have chosen to move left. Press enter to continue"
                    display(narration);
                    break;
                }

            case 4:
                if (input === "left"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room3";
                    currentPath = 3;
                    enterToContinue = true;
                    narration = "You have chosen to move left. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "right") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room2";
                    currentPath = 2;
                    enterToContinue = true;
                    narration = "You have chosen to move right. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "up") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room7";
                    currentPath = 7;
                    enterToContinue = true;
                    narration = "You have chosen to move up. Press enter to continue"
                    display(narration);
                    break;
                }

            //Probably doesn't need because user can just key return. It is a dead end.
            case 5:
            case 6:

            case 7:
                if (input === "down"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room4";
                    currentPath = 4;
                    enterToContinue = true;
                    narration = "You have chosen to move down. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "up") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room8";
                    currentPath = 8;
                    enterToContinue = true;
                    narration = "You have chosen to move right. Press enter to continue"
                    display(narration);
                    break;
                }
        }
    }
})

//Variable for game
var path = {
    visited: {
        room1: false,
        room2: false,
        room3: false,
        room5: false,
        room6: false,
        room7: false,
    },
    room:{
        room1: "Entrance",
        room2: "Pantry",
        room3: "Lounge",
        room4: "Hallway",
        room5: "Fire Escape",
        room6: "Engine Room",
        room7: "Elevator Room",
    },
    wetroom:{
        room8: "Crossroad Tunnel 1",
        room9: "Dead Tunnel 1",
        room10: "Crossroad Tunnel 2",
        room11: "Dead Tunnel 2",
        room12: "Tunnel Hallway",
        room13: "Dead Tunnel 3",
        room14: "Valve hallway",
    }
}

var monster = [];
var gameStart = true;
var previousPath = 1;
var previousRoom = "room1";
var currentPath = 1;
var currentRoom = "room1";
var inputPlaceholder = document.querySelector("#input");
var narration = null;
var enterToContinue = false;
var encounter = 0;
var Radiation = -1;
var winCondition = 0;
var gameEnd = false;




//Function for map
function game(input){
    // Radiation++;
    console.log(`Radiation level: ${Radiation}`);
    if(Radiation > 5){
        gameOver();
    }

    switch(winCondition){
        case 1:
            narration = "You have won the game".
            gameEnd = true;
            display(output);
    }

    switch(currentPath){
        case 1:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path to the left or right`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nleft\nright`;
            path["visited"][currentRoom] = true;
            display(narration);
            break;

        case 2:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path to the right, left and up.`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nright\nleft\nup`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 3:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path to the right, left, and up.`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nright\nleft\nup`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 4:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path to the right, left and up.`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nright\nleft\nup`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 5:
            narration = `You are now in ${path["room"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 6:
            narration = `You are now in ${path["room"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 7:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path upwards and downwards`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nup\ndown`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 8:
            narration = 'Game over';
            display(narration);
            break;
    }
}

if (gameStart === true){
    gameStart = false;
    game()
}