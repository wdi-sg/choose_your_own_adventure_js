console.log("Map working")

var player = {
    name: null,
    health: 20,
    battery: 10,
    radiation: 0,
    item: [],
}

var red = 150;
var blue = 150;
var green = 150;
var battleIntro = 0;
var monsterArr = ["Mutant Rat", "Mutant Dog"];
var gameStart = true;
var previousPath = 1;
var previousRoom = "room1";
var currentPath = 0;
var currentRoom = "room1";
var inputPlaceholder = document.querySelector("#input");
var narration = null;
var enterToContinue = false;

var Battery = 10
var Radiation = -1;
var winCondition = 0;
var loseCondition = 0;
var gameEnd = false;

//Display message on the board
function display(text){
    var outputText = document.getElementById("outputText");
    outputText.innerText = text;
    var intensity = Battery;
    red = 15 * intensity;
    blue = 15 * intensity;
    green = 15 * intensity;
    body.style.backgroundColor = `rgb(${red} , ${green} ,${blue})`
    console.log(monsterArr);
    if(gameEnd === true){
        gameOver();
    }
}


function gameOver(){
    var gameoverText = document.getElementById("gameoverText");
    document.querySelector('.UI').style.visibility = "hidden";
    document.querySelector('#output').style.visibility = "hidden";
    document.querySelector('#outputText').innerText = "";
    document.querySelector('#gameover').style.visibility = "visible";
    if (Radiation > 5){
        gameoverText.innerText = "You have died of Radiation Poisoning";
    } else if (player.health <= 0){
        gameoverText.innerText = "You have died.";
    } else if (winCondition > 0){
        gameoverText.innerText = "You have won the game";
    } else if (loseCondition === 1) {
        gameoverText.innerText = "Without anyone to undertake the task, the Chernobyl Reactor continued to melt towards the pool. The steam explosion caused thousands of tons of radioactive material to be flung across Europe. Millions died a slow and agonizing death.\nUnable to flee Chernobyl in time, you perished along with the millions of casualties.";
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
                if (currentPath != "battle" && currentPath != "postBattle" && currentPath != 1) {
                    if(monsterArr.length > 0){
                        var encounter = Math.floor((Math.random()*10)+1);
                        console.log(`encounter rolled: ${encounter}`);
                        if (10 > encounter){
                            battle();
                            break;
                        }
                    }
                }

                if (currentPath === "postBattle") {
                    currentPath = previousPath;
                    game()
                }

                if (currentPath === "battle") {
                    battle();
                    break;
                }

                game();
                break;
        }

        if (input === "return") {
            var tmpR;
            var tmpP;
            tmpR = currentRoom;
            currentRoom = previousRoom;
            previousRoom = tmpR;
            tmpP = currentPath;
            currentPath = previousPath;
            previousPath = tmpP
            enterToContinue = true;
            narration = `You have chosen to return to the ${path["room"][currentRoom]}. Press enter to continue`;
            display(narration);
        }

        switch(currentPath){
            case "battle":
                if (input === "shiv"){
                    var dmg = Math.floor((Math.random()*3)+3); //3-5dmg
                    monsterObj[monsterArr[0]]["hp"] = monsterObj[monsterArr[0]]["hp"] - dmg;
                    console.log(`Damage dealt: ${dmg}`);
                    narration = `You slashed ${monsterArr[0]} for ${dmg} damage! Press enter to continue`
                    console.log(`Monster hp: ${monsterObj[monsterArr[0]]["hp"]}`);
                    battleIntro = 1;
                    display(narration);
                } else if (input === "gun"){
                    var dmg = Math.floor((Math.random()*3)+6); //6-8dmg
                    monsterObj[monsterArr[0]]["hp"] = monsterObj[monsterArr[0]]["hp"] - dmg;
                    console.log(`Damage dealt: ${dmg}`);
                    narration = `You shot ${monsterArr[0]} for ${dmg} damage! Press enter to continue`
                    console.log(`Monster hp: ${monsterObj[monsterArr[0]]["hp"]}`);
                    battleIntro = 1;
                    display(narration);
                }
                enterToContinue = true;
                break;


            case 0:
                if (input === "yes"){
                    currentRoom = "room1";
                    currentPath = 1;
                    enterToContinue = true;
                    narration = "Despite knowing what fate have in store for you, you had chosen to accept this suicide mission. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "no"){
                    gameEnd = true;
                    loseCondition = 1;
                    display(narration);
                    break;
                }

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

//Function for map
function game(input){
    console.log('Current Room: ' + currentRoom);
    console.log('Previous Room: ' + previousRoom);
    // Radiation++;
    Battery--;
    console.log(`Battery level: ${Radiation}`)
    console.log(`Radiation level: ${Radiation}`);
    if(Radiation > 5 || player.health <=0 || player.battery <= 0){
        gameOver();
    }


    switch(winCondition){
        case 1:
            narration = "You have won the game".
            gameEnd = true;
            display(narration);
    }

    switch(currentPath){
        case 0:
            narration = "The year is 1986. The Chernobyl Nuclear Plant has just exploded, leaking radiation as far out as Sweden. You are an employee of the Nuclear plant, and have just received a message from your superiors.\n\nAccording to the Soviet Union's team of best physicists, the molten residue is melting through the ground towards a pool of water coolant. If the lava touches the water, it would cause a steam eruption that could render half of Europe inhospitable for thousands of year.\n\nThere were many volunteers to stop this from happening, but no one else knows where the correct valves to drain the pool was. Should you choose to accept this mission, you will most likely die.\n\nAccept this mission?\n- yes\n- no";
            display(narration);
            break;

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


var monsterObj = {
    "Mutant Rat":{
        hp: 10,
        dmg: Math.floor((Math.random()*2)+1),
    },
    "Mutant Dog": {
        hp: 15,
        dmg: Math.floor((Math.random()*2)+4),
    }
}


function battle(){
    if(monsterObj[monsterArr[0]]["hp"]>0){
        if (battleIntro === 0){
            currentPath = "battle"
            narration = `A wild ${monsterArr[0]} appeared! What would you do?`
            battleIntro = 1
        } else if (battleIntro === 1){
            var damage = monsterObj[monsterArr[0]]["dmg"];
            console.log(`Damage taken ${damage}`);
            narration = `The ${monsterArr[0]} attacked you for ${damage} damage! What do you do next?`
            player.health = player.health - damage;
            console.log(`Player Health: ${player.health}`);
            battleIntro = 2;
        }
        narration = narration + "\nshiv\ngun";
    } else {
        console.log("It is dead")
        narration = `The monster died. Press enter to continue`;
        monsterArr.shift();
        battleIntro = 0;
        enterToContinue = true;
        currentPath = "postBattle";
    }
    console.log(currentPath);
    console.log(previousPath);
    display(narration);
}