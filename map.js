console.log("Map working")
alert("This game is best played with music on.\n\nThe following is a fictional story inspired by the following\n - International bestseller series: Metro 2033\n - Chernobyl Nuclear Accident")

var player = {
    name: "Gopnik",
    oxygen: 10,
    health: 20,
    battery: 17,
    radiation: 0,
    Bullets: 10,
    map: true,
    dry: true,
}

player.name = prompt("What is your name player?");
if (player.name === "alexei" || player.name === "valeri" || player.name === "boris" || player.name === "Alexei" || player.name === "Valeri" || player.name === "Boris"){
    window.open("https://en.wikipedia.org/wiki/Chernobyl_liquidators")
    alert("Thank you to the three man whom willingly risked their lives for the world!")
} else if (player.name === "akira" || player.name === "Akira"){
    window.open("https://i.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.webp")
} else if (player.name === ""){
    var randomName = Math.floor((Math.random()*4)+1);
    if (randomName === 1){
        player.name = "Sergei";
    } else if (randomName === 2){
        player.name = "Anatoli";
    } else if (randomName === 3){
        player.name = "Alona";
    } else if (randomName === 4){
        player.name = "Gopnik";
    }
    alert(`You have not put a valid name! Your name will be defaulted to ${player.name}`);
}


var red = 150;
var blue = 150;
var green = 150;
var battleIntro = 0;
var monsterArr = ["Mutant Rat", "Mutant Dog"];
var gameStart = true;
var tempPath;
var encounterOff = false;
var previousPath = 1;
var previousRoom = "room1";
var currentPath = 0;
var currentRoom = "room1";
var inputPlaceholder = document.querySelector("#input");
var narration = null;
var enterToContinue = false;
var winCondition = 0;
var loseCondition = 0;
var gameEnd = false;

//Display message on the board
function display(text){
    var outputText = document.getElementById("outputText");
    var flavourText = document.getElementById("flavourText");
    var fT ="";
    var random = Math.floor((Math.random()*10)+1);
    console.log(player.radiation);
    console.log(player.battery);
    console.log(player.health);

    if(currentPath != 0){
        if(random > 8){
            fT = fT + `\n\nSomething creaked behind you! You turned around to see nothing.`
        } else if (random > 6){
            fT = fT + `\n\nYou shuddered as you feel the peering gaze of something hidden in the dark.`
        } else if (random > 4){
            fT = fT + `\n\n${player.name}!\nYou heard someone calling you! But that's impossible. You suspect the radiation is beginning to cause hallucination.`
        } else if (random > 2) {
            fT = fT + `\n\nYou feel hungry. But you cannot take out your mask here to eat.`
        }
    }

    if(player.radiation > 20){
        fT = fT + `\nYou feel extremely giddy and started to hallucinate. Your lungs begin to fail you as you struggle to breath.`
    } else if (player.radiation > 10){
        fT = fT + `\nYou head starts throbbing as you find difficulty in balancing yourself.`
    }

    if (player.battery === 0){
        fT = fT + `\nYou grope around aimlessly in the dark, barely seeing on the silhouette of the room to guide you through this derelict maze`;
    } else if(player.battery <= 4){
        fT = fT + `\nYour torchlight flickers occassionally, as it struggles to keep itself lit.`;
    } else if(player.battery < 8){
        fT = fT + `\nYour torchlight begins to dim. You know however, that there is still time for you to find the valve before the worst can happen.`
    }

    if(player.health < 6){
        fT = fT + `\nYou're bleeding profusely. Conciousness slips in and out of your grasp. You worry you may succumb before fulfilling your goals.`
    } else if (player.health < 11){
        fT = fT + `\nMoving forward is extremely painful and labourous, but for the sake of many, forward you must move.`
    } else if (player.health < 16){
        fT = fT + `\nYour wounds stings, but you manage to shrug off the pain.`
    }

    flavourText.innerText = fT
    outputText.innerText = text;

    var hpUI = document.getElementById("HP");
    var batUI = document.getElementById("Battery");
    var radUI = document.getElementById("Radiation");
    var oxyUI = document.getElementById("Oxygen");
    var bulUI = document.getElementById("Bullet");
    hpUI.innerText = `Health:\n${player.health}`;
    batUI.innerText = `Battery:\n${player.battery}`;
    radUI.innerText = `Radiation:\n${player.radiation}`;
    oxyUI.innerText = `Oxygen:\n${player.oxygen}`;
    bulUI.innerText = `Bullet:\n${player.Bullets}`;

    var intensity = player.battery;
    red = 15 * intensity;
    blue = 15 * intensity;
    green = 15 * intensity;
    body.style.backgroundColor = `rgb(${red} , ${green} ,${blue})`

    if (player.radiation <= 0) {
        var vintensity = 0.1;
    } else if (player.radiation < 10){
        var vintensity = player.radiation;
    } else {
        var vintensity = 1;
    }
    vol = 0.1 * vintensity
    bgm.muted = false;
    bgm.play()
    bgm.volume = vol;

    if (player.dry === true){
        underwater.muted = true;
        gasmask.muted = false;
        gasmask.play();
    } else {
        gasmask.muted = true;
        underwater.muted = false;
        underwater.play();
        underwater.volume = 0.5;
    }

    console.log(monsterArr);
    if(gameEnd === true){
        gameOver();
    }
}

function restart(){
    var reload = window.prompt("Do you want to reload?");
    console.log(reload);
    if (reload === "yes") {
        window.location.reload();
    } else if (reload === "secret") {
        window.open("https://i.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.webp")
    }
}


function gameOver() {
    var gameoverText = document.getElementById("gameoverText");
    // document.querySelector('.UI').style.visibility = "hidden";
    // document.querySelector('#map').style.visibility = "hidden";
    document.querySelector('#map').style.display = "none";
    // document.querySelector('#output').style.visibility = "hidden";
    // document.querySelector('#outputText').innerText = "";
    // document.querySelector('#main').style.visibility = "hidden";
    document.querySelector('#main').style.display = "none";
    document.querySelector('#gameover').style.visibility = "visible";
    if (player.radiation > 30) {
        gameoverText.innerText = "You have died of Radiation Poisoning";
    } else if (player.health <= 0) {
        gameoverText.innerText = "You have died.";
    } else if (player.oxygen <=0){
        gameoverText.innerText = "You have died of asphyxiation.";
    } else if (winCondition === 1) {
        gameoverText.innerText = "With great remorse, you put an end to Vadim's life. It was a long struggle, but with the water drained, you managed to leave the nuclear plant. You fainted right at the entrance, with your consciousness fading in and out. You vaguely remember that someone pulled you, and you remember moving, and hearing shouting. You remembered seeing some strangers... wearing white surgical masks, surrounding you as you lay comfortably on the soft white bed. Finally, you remembered hearing a long beep- and then there was nothing. You've died.";
    } else if (loseCondition === 1) {
        gameoverText.innerText = "Without anyone to undertake the task, the Chernobyl Reactor continued to melt towards the pool. The steam explosion caused thousands of tons of radioactive material to be flung across Europe. Millions died a slow and agonizing death.\nUnable to flee Chernobyl in time, you perished along with the millions of casualties in the worst nuclear disaster in human history.";
    }
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

                if (currentPath === "postBattle") {
                    currentPath = tempPath;
                    game();
                    break;
                }

                if (currentPath != "battle" && currentPath != "postBattle" && currentRoom != "room1" && currentRoom != "room2" && currentRoom != "room3") {
                    if(monsterArr.length > 0){
                        var encounter = Math.floor((Math.random()*10)+1);
                        console.log(`encounter rolled: ${encounter}`);
                        if (10 > encounter){
                            encounter =0;
                            battle();
                            break;
                        }
                    }
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
                    narration = "Despite knowing what fate have in store for you, you had chosen to accept this suicide mission. You knew that even if you were to deny the mission, you would still be caught up in the fall out of the explosion.\n\nYou took sometime to prepare- wearing the appropriate suits and bringing along some gears. You can hear your labored breathing through the gas mask, as though every breath you take was a ticking step closer to your death.\n\nAs you reached Chernobyl, your biggest regret began to haunt you- You have yet to bid your love ones farewell. \n\nAnd now, you find yourself completely alone inside the entrance of the Chernobyl Power Plant. Press enter to continue"
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
                } else if (input === "leap") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room8";
                    currentPath = 8;
                    enterToContinue = true;
                    player.dry = false;
                    narration = "You have chosen to leap into the pool of water. Press enter to continue"
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
                } else if (input === "climb") {
                    previousRoom = currentRoom;
                    previousPath = currentPath;
                    currentRoom = "room7";
                    currentPath = 7;
                    enterToContinue = true;
                    player.dry = true;
                    narration = "You have chosen to climb out of the water. Press enter to continue"
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
    // player.radiation++;
    if(player.dry != true){
        player.oxygen--;
    }

    if(player.battery > 0){
        player.battery--;
    }
    console.log(`Battery level: ${player.battery}`)
    console.log(`Radiation level: ${player.radiation}`);
    if(player.radiation > 30 || player.health <=0){
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
            narration = "The year is 1986. The Chernobyl Nuclear Plant has just exploded, the fallout of the radiation spread as far as Sweden. You are an employee of the Nuclear plant, and had just received a message from your superiors.\n\nAccording to the Soviet Union's team of best physicists, the molten residue is melting through the ground towards a pool of water coolant. If the lava touches the water, it would cause a steam eruption that could render half of Europe inhospitable for thousands of year.\n\nYou must reach the basement and access the valve hallway to access the pips. There were many volunteers to stop this from happening, but no one else knows where the correct valves to drain the pool was. One incorrect decision, and it may cause another bigger explosion. Should you choose to accept this mission, you will most likely die.\n\nAccept this mission?\n- yes\n- no";
            display(narration);
            break;

        case 1:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path to the left or right`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nAs you step past the vestibule, you instantly felt nausea. As you see through your gas mask the remains of those caught in the disaster laid strewn across the floor, you begin to wonder if this gas mask was enough to keep you safe for long enough to get the job done. Your eyes started to accilmate to the darkness. Much of the facilities were in ruin. You made sure you took proper care of your steps and not to trip over. Shattering your gas mask now could jepordize the operation. Quickly! You must reach the Engine room and access the manhole to the basement!\n\nSuddenly, you hear some rustling, and spot from a far some movement. Strange, you thought. Nothing else should be in here right now. Perhaps your eyes were playing tricks on you.`;
            }
            narration = `${narration}\n\nChoose:\nleft\nright`;
            path["visited"][currentRoom] = true;
            display(narration);
            break;

        case 2:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path to the right, left and up.`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nInside of the cupboards of the pantry were cans and jars of food- radiated to say the least. The tap was leaking water, and the used dishes layed untouched. Some of the sandwiches prepared by a colleague laid on the table. Although it has been left out in the open for a few days, no flies or ants were seen. However, there were clear bite marks. You suspect if it was a greedy colleague... or something else that is in the vicinity...\n\nYou also saw a birthday card- ${player.name}! Happy birthday! Me and the Boys got you a present! We know how much you love spiders, so we got an exotic species for your birthday! From your friend- Vadim.`
            }
            narration = `${narration}\n\nChoose:\nright\nleft\nup`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 3:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path to the right, left, and up.`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nYou remember loafing around in the lounge during breaktime. Vadim, Artyom and you would often complain about the metro system breaking down. You remembered Artyom joking- "The train ride takes so long, it is almost as if I'm living in the metro". Artyom would also boast about his wife Anna, and complain about his father-in-law, Miller, for being strict and possessive of his daughter. But deep down, you and Vadim could tell that Artyom and his father-in-law respects each other`
            }
            narration = `${narration}\n\nChoose:\nright\nleft\nup`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 4:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path to the right, left and up.`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nThe hallway leads to the Elevator room. The receptionist here changes everyday, but you remember one of them very clearly- Ourela. She's often joyous and can be seen around the building treating everyone like a friend. You still remember the Burritos and Potato chips you were regaled with. However, she performs her job seriously, and would kick anyone past their working hours out, for 'security reasons' and 'no loitering' she would say. Your best friend, Vadim, secretly had a crush on her. You wondered if the receptionist was on duty that day, and whether she made it out alive.`
            }
            narration = `${narration}\n\nChoose:\nright\nleft\nup`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 5:
            narration = `You are now in ${path["room"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nThis is the fire escape, but the door is to the outside is blocked by cartons and boxes. Like many other companies, despite safety regulations, the fire escape is often treated as an additional storage room. Vadim, Artyom and you would sometime squat here during breaktime and eat some Semechki, drink some shots of Vodka, lviing the true Slavic lifestyle. You wondered how many more lives could have been saved if the fire escape was kept tidy and unblocked. You heard movements and a loud thud sound as something fell from the shelves. You have no reason to be here.`
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 6:
            narration = `You are now in ${path["room"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nFinally! You've arrived at the engine room and reached your destination! There's a manhole to the basement, which would lead to the valves!... But to your horror, you realized that the explosion had caused the ceiling to collapse. The manhole now rendered inaccessible, laid under the rubbles. This room is now a dead end. You seem to see a pair of eye flashing from within the debris, looking at you. You blinked and squinted, but there was nothing now. There must be another way to the basement... You remembered being able to access the basement from a tunnel beneath the elevators.`
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 7:
            narration = `You are now in ${path["room"][currentRoom]}. You see a path downwards, or a hole to leap in.`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nThe emergency break has clamped the elevator somewhere upstairs. The door was opened, and you can see the basement tunnels. As expected, the explosion has caused the main water pipe to burst, flooding the entire basement level. Luckily for you, your mission team has already briefed you on this, and prepared swimming apparatus for you. You could hear faint splashing noises, despite the errie silence of the building. Perhaps if jump into the pool, you may arrive at the valve hallway.`
            }
            narration = `${narration}\n\nChoose:\nleap\ndown`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 8:
            narration = `You are now in ${path["wetroom"][currentRoom]}. You see a path to the right, left, or you can climb back up`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nAs you plunged into the cold pool of water, you think back to your childhood, when your parents often brought you to swimming lessons. You wanted to learn swimming because you wanted to one day retire and live near the clear Lake Baikal. You dream of owning a small boat and go out fishing everyday in the relaxing valley, and swimming may come in handy. Never did you realize that your ability in swimming would be the most important thing for half of Europe right now.`
            }
            narration = `${narration}\n\nChoose:\nright\nleft\nclimb`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 9:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nAfter swimming for a while, you come to small opening. Unfortunately for you, this is a dead end. You can see past the debris a path leading to one of the Reactors in the nuclear plant. Judging from the signboard, the valve is on the opposite direction. As you curse yourself for taking the wrong direction, you thought you heard something splashing about. It is best that you head back.`
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 10:
            narration = `You are now in ${path["wetroom"][currentRoom]}. You see a path in all four corners`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nYou've traveled with finess through the long channel of water, filled with debris. Not long after, you've arrived at another junction. You begin to feel fustrated- who even designed these foundations? You don't have anymore time to waste, and you have to choose a path now.`
            }
            narration = `${narration}\n\nChoose:\nup\ndown\nleft\nright`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 11:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\n\nYou felt something moved behind you! You turned around to see nothing but a piece of plastic bag clinging onto you. You turned back to look at where you're headed to, only to find another dead end. It looks as though as you could have been here before. You felt a sense of Deja vu. Whatever the case, time is ticking.`
            } else {
                narration = `${narration}\n\nYou felt something moved behind you! You turned around to see nothing but a piece of plastic bag clinging onto you. You turned back to look at where you're headed to, only to find another dead end. It looks as though as you could have been here before. You felt a sense of Deja vu. Whatever the case, time is ticking.`
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 12:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is a long and dark tunnel, turning abruptly leftwards. Continue forward?`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            } else {
                narration = `${narration}\n\nYou swam in a single direction in this dark tunnel for a really, really long time. You worry that this wasn't the right path, and you could have completely missed the valve hallway. The thought of going the wrong direction, coupled with the weightlessness you feel within the water made you fell alientated from the world. A sense of melancholy grips you as you struggle to decide. Continue forward? Or return back up? You don't have much more time to waste, and you have to decide.`
            }
            narration = `${narration}\n\nChoose:\nleft\nup`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 13:
            narration = `You are now in ${path["wetroom"][currentRoom]}. It is a dead end`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\n\nYou felt something moved behind you! You turned around to see nothing but a piece of plastic bag clinging onto you. You turned back to look at where you're headed to, only to find another dead end. It looks as though as you could have been here before. You felt a sense of Deja vu. Whatever the case, time is ticking.`
            } else {
                narration = `${narration}\n\nYou felt something moved behind you! You turned around to see nothing but a piece of plastic bag clinging onto you. You turned back to look at where you're headed to, only to find another dead end. It looks as though as you could have been here before. You felt a sense of Deja vu. Whatever the case, time is ticking.`
            }
            narration = `${narration}\n\nChoose:\nreturn`;
            path["visited"][currentRoom] = true;
            display(narration)
            break;

        case 14:
            narration = `You are now in ${path["wetroom"][currentRoom]}. After swimming in the darkness for what seemed to be an eternity, you've arrived at your destination! You climbed out of the tunnel and onto solid ground, and begin to find the valve that would drain the facility of its water. The world is saved! You tought to youself, as the water began to drain. However... something lept out from the draining pool of water and attacked you!`;
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
    },
}



function battle(){
    console.log("current Path: "+currentPath);
    console.log(monsterObj["Mutant"]["hp"]);
    if(currentPath === 14 || currentPath === "battleBoss"){
        if(monsterObj["Mutant"]["hp"] > 0){
            if (battleIntro === 0){
                currentPath = "battleBoss"
                narration = `You couldn't believe your eyes. A terribly mutated monster leapt out to attack you. It bore some ressemblance to... Vadim! You tried to calm him down, but to no avail. His mind too far gone from the mutation, Vadim had been following and attacks you! What would you do?`
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
    } else {

        if(monsterObj[monsterArr[0]]["hp"]>0){
            if (battleIntro === 0){
                tempPath = currentPath;
                battleIntro = 1
                console.log(`tempPath: ${tempPath}`);
                console.log(`currentPath: ${currentPath}`)
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
                 player.Bullets += 3
                 player.battery += 10;
                 narration = narration + "\nYou found within the Rat's body some salvageable parts that it probably swallowed while gnawing around the debris. These could be used as bullets.\nAnd just as you were about to leave... you also spotted a spare battery!"
            } else if (monsterArr[0] === "Mutant Dog"){
                player.map = true
                player.health += 10;
                narration = narration + "\nYou found a partly digested map in its body! This could come in useful!... provided you have enough battery in your torchlight to see it.\nAnd just as you were about to leave... you also spotted some plaster! You quickly patched up yourself."
            }
            narration = narration + "\nPress enter to continue";
            monsterArr.shift();
            battleIntro = 0;
            enterToContinue = true;
            currentPath = "postBattle";
        }
    }
    console.log(`Player bullets: ${player.Bullets}`)
    display(narration);
}

console.log(`mutant hp: ${Mutant.hp}`)