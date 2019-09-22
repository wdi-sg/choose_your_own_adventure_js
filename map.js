console.log("Map working")

var player = {
    name: null,
    health: 20,
    battery: 10,
    radiation: 0,
    item: [],
    Bullets: 10,
    map: true,
}

var red = 150;
var blue = 150;
var green = 150;
var battleIntro = 0;
var monsterArr = []//["Mutant Rat", "Mutant Dog"];
var gameStart = true;
var previousPath = 1;
var previousRoom = "room1";
var currentPath = 0;
var currentRoom = "room1";
var inputPlaceholder = document.querySelector("#input");
var narration = null;
var enterToContinue = false;


var Battery = 12;
var Radiation = -1;
var winCondition = 0;
var loseCondition = 0;
var gameEnd = false;

//Display message on the board
function display(text){
    var outputText = document.getElementById("outputText");
    outputText.innerText = text;

    var hpUI = document.getElementById("HP");
    var batUI = document.getElementById("Battery");
    var radUI = document.getElementById("Radiation");
    hpUI.innerText = `Health:\n${player.health}`;
    batUI.innerText = `Battery:\n${Battery}`;
    radUI.innerText = `Radiation:\n${Radiation}`;

    var intensity = Battery;
    red = 15 * intensity;
    blue = 15 * intensity;
    green = 15 * intensity;
    body.style.backgroundColor = `rgb(${red} , ${green} ,${blue})`

    if (Radiation <= 0) {
        var vintensity = 0.1;
    } else if (Radiation < 10){
        var vintensity = Radiation;
    } else {
        var vintensity = 1;
    }
    vol = 0.1 * vintensity
    bgm.muted = false;
    gasmask.muted = false;
    gasmask.play();
    bgm.play()
    bgm.volume = vol;

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
    if (Radiation > 10){
        gameoverText.innerText = "You have died of Radiation Poisoning";
    } else if (player.health <= 0){
        gameoverText.innerText = "You have died.";
    } else if (winCondition === 1){
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
                if (player.map === true){
                    document.querySelector('#map').style.visibility = "visible";
                }
                if (currentPath != "battle" && currentPath != "postBattle" && currentPath != 1 && currentPath != "battleBattle") {
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

                if (currentPath === "battle" || currentPath === "battleBoss") {
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
                } else if (input === "gun" && player.Bullets > 0){
                    player.Bullets--;
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

            case "battleBoss":
                if (input === "shiv"){
                    var dmg = Math.floor((Math.random()*3)+3); //3-5dmg
                    monsterObj["Mutant"]["hp"] = monsterObj["Mutant"]["hp"] - dmg;
                    console.log(`Damage dealt: ${dmg}`);
                    narration = `You slashed Mutant for ${dmg} damage! Press enter to continue`
                    console.log(`Monster hp: ${monsterObj["Mutant"]["hp"]}`);
                    battleIntro = 1;
                    display(narration);
                } else if (input === "gun" && player.Bullets > 0){
                    player.Bullets--;
                    var dmg = Math.floor((Math.random()*3)+6); //6-8dmg
                    monsterObj["Mutant"]["hp"] = monsterObj["Mutant"]["hp"] - dmg;
                    console.log(`Damage dealt: ${dmg}`);
                    narration = `You shot Mutant for ${dmg} damage! Press enter to continue`
                    console.log(`Monster hp: ${monsterObj["Mutant"]["hp"]}`);
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
                    narration = "Despite knowing what fate have in store for you, you had chosen to accept this suicide mission. You knew that even if you were to deny the mission, you would still be caught up in the fall out of the explosion.\n\nYou took sometime to prepare- wearing the appropriate suits and bringing along some gears. You can hear your labored breathing through the gas mask, as though every breath you take was a ticking step closer to your death.\n\nAs you reached Chernobyl, your biggest regret began to haunt you- You have yet to bid your love ones farewell. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "no"){
                    gameEnd = true;
                    loseCondition = 1;
                    display(narration);
                    break;
                }
                break;

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
                break;

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
                break;

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
                } else if (input === "right"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room1";
                    currentPath = 1;
                    enterToContinue = true;
                    narration = "You have chosen to move right. Press enter to continue"
                    display(narration);
                    break;
                }
                break;

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
                break;

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
                break;

            case 8:
                if (input === "right"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room9";
                    currentPath = 9;
                    enterToContinue = true;
                    narration = "You have chosen to move right. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "left") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room10";
                    currentPath = 10;
                    enterToContinue = true;
                    narration = "You have chosen to move left. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "down") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room7";
                    currentPath = 7;
                    enterToContinue = true;
                    narration = "You have chosen to move down. Press enter to continue"
                    display(narration);
                    break;
                }
                break;

            case 10:
                if (input === "down"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room12";
                    currentPath = 12;
                    enterToContinue = true;
                    narration = "You have chosen to move down. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "up") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room11";
                    currentPath = 11;
                    enterToContinue = true;
                    narration = "You have chosen to move up. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "right") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room8";
                    currentPath = 8;
                    enterToContinue = true;
                    narration = "You have chosen to move right. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "left") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room13";
                    currentPath = 13;
                    enterToContinue = true;
                    narration = "You have chosen to move left. Press enter to continue"
                    display(narration);
                    break;
                }
                break;

            case 12:
                if (input === "left"){
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room14";
                    currentPath = 14;
                    enterToContinue = true;
                    narration = "You have chosen to move left. Press enter to continue"
                    display(narration);
                    break;
                } else if (input === "up") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room10";
                    currentPath = 10;
                    enterToContinue = true;
                    narration = "You have chosen to move up. Press enter to continue"
                    display(narration);
                    break;
                }
                break;

            case 14:
                battle();
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
    console.log(`Battery level: ${Battery}`)
    console.log(`Radiation level: ${Radiation}`);
    if(Radiation > 10 || player.health <=0){
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
            } else {
                narration = `${narration}\n\nAs you step past the vestibule, you almost instantly felt nausea. As you see the remains of the poor souls caught in the disaster laid strewn across the floor, you begin to wonder if the gas mask was enough to keep you safe for long enough to get the job done. Your eyes started to accilmate to the darkness. Much of the facilities were in ruin. You made sure you took proper care of your steps and not to trip over. Shattering your gas mask now could jepordize the operation.\n\nSuddenly, you hear some rustling, and spot from a far some movement. Strange, you thought. Nothing else should be in here right now. Perhaps your eyes were playing tricks on you.`;
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
            narration = `You are now in ${path["wetroom"][currentRoom]}. You see a path to the right, left and down`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nright\nleft\ndown`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 9:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 10:
            narration = `You are now in ${path["wetroom"][currentRoom]}. You see a path in all four corners`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nup\ndown\nleft\nright`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 11:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 12:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is a long and dark tunnel, turning abruptly leftwards. Continue forward?`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nleft\nup`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 13:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 14:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is the Valve Hall!`;
            narration = `${narration}\n\nPress enter to continue`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 15:
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
        dmg: Math.floor((Math.random()*3)+1), //1-3 dmg
    },
    "Mutant Dog": {
        hp: 15,
        dmg: Math.floor((Math.random()*3)+2), //2-4 dmg
    },
    "Mutant": {
        hp: 20,
        dmg: Math.floor((Math.random()*4)+4), //4-7 dmg
    }
}


function battle(){
    if(currentPath === 14 || currentPath === "battleBoss"){
        if(monsterObj["Mutant"]["hp"] > 0){
            if (battleIntro === 0){
                currentPath = "battleBoss"
                narration = `A Mutant has followed and attacks you! What would you do?`
            } else if (battleIntro === 1){
                var damage = monsterObj["Mutant"]["dmg"];
                console.log(`Damage taken ${damage}`);
                narration = `The Mutant attacked you for ${damage} damage! What do you do next?`
                player.health = player.health - damage;
                console.log(`Player Health: ${player.health}`);
                battleIntro = 2;
            }
            if (player.Bullets > 0){
                narration = narration + "\ngun"
            }
            narration = narration + "\nshiv";
        } else {
            winCondition = 1;
            gameOver();
        }
    }

    if(monsterObj[monsterArr[0]]["hp"]>0){
        if (battleIntro === 0){
            currentPath = "battle"
            narration = `A wild ${monsterArr[0]} appeared! What would you do?`
        } else if (battleIntro === 1){
            var damage = monsterObj[monsterArr[0]]["dmg"];
            console.log(`Damage taken ${damage}`);
            narration = `The ${monsterArr[0]} attacked you for ${damage} damage! What do you do next?`
            player.health = player.health - damage;
            console.log(`Player Health: ${player.health}`);
            battleIntro = 2;
        }
        if (player.Bullets > 0){
            narration = narration + "\ngun"
        }
        narration = narration + "\nshiv";
    } else {
        console.log("It is dead")
        narration = `The ${monsterArr[0]} died.`;
        if (monsterArr[0] === "Mutant Rat"){
             player.map = true;
             narration = narration + "\nYou found a partly digested map in its body! This could come in useful!... provided you have enough battery in your torchlight to see it."
        }
        narration = narration + "\nPress enter to continue";
        monsterArr.shift();
        battleIntro = 0;
        enterToContinue = true;
        currentPath = "postBattle";
    }
    console.log(`Player bullets: ${player.Bullets}`)
    display(narration);
}