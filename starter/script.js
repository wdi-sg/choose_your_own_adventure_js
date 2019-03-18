//***********************************Variables
let monster = "";
let stat = 10;
let hitpointMonster = 10;
let direction = "";
let mineral = "";
let fish = "";
let taskChoice = "";
let fightChoice = "";
let contFishChoice = "";
let prob = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

let taskArray =
["\na) Hunting",
"\nb) Mining",
"\nc) Fishing"]

let monsterArray =
["\na) Eye of the Basilisk",
"\nb) Hide of the Mammoth",
"\nc) Bone of the Dragon"]

let mineralArray =
["\na) Adamantium",
"\nb) Pumice",
"\nc) Lapiz Lazuli"]

let fishArray =
["\na) Sea bream",
"\nb) Tuna",
"\nc) Eel"]

//**********************Hunting task functions

//Chooses a monster to hunt
function qn1_1 () {
    monster = prompt(`Cain:\nWhich would you like to start from?${monsterArray[0]}${monsterArray[1]}${monsterArray[2]}\nE.g. enter a, b or c`);
    if (monster.toLowerCase() === "a" && monsterArray[0] === "\na) Eye of the Basilisk") {
        monster = "Basilisk";
    }
    else if (monster.toLowerCase() === "b" && monsterArray[1] === "\nb) Hide of the Mammoth") {
        monster = "Mammoth";
    }
    else if (monster.toLowerCase() === "c" && monsterArray[2] === "\nc) Bone of the Dragon") {
        monster = "Dragon";
    }
    else {
        alert("You entered an invalid choice.");
        qn1_1();
    }
    alert1_2();
    alert1_3();
    alert1_4();
    qn1_2();
}

//Choose to fight or escape
function qn1_2 () {
    fightChoice = prompt("Will you fight?\na) Fight\nb) Escape\n(Enter a or b)");
    if (fightChoice.toLowerCase() === "a") {
        chanceMonster();
    }
    else if (fightChoice.toLowerCase() === "b") {
        alert1_5();
        alert1_6();
        stat = 10;
        hitpointMonster = 10;
        qn1();
    }
    else {
        alert("You entered an invalid choice.");
        qn1_2();
    }
}

//Chance function
function chance () {
    prob = Math.floor(Math.random()*10)
    }

//chance to hit Monster or get hit by Monster
function chanceMonster () {
    chance();
    if (prob < 5) {
        hitpointMonster--;
        alert1_7();
        monsterDead();
    }
    else if (prob >= 5) {
        stat--;
        alert1_8();
        charFaint();
    }
}

//Checks whether monster is dead or not
function monsterDead () {
    if (hitpointMonster === 0) {
        alert1_9();
        alert1_12();
        questHuntClear();
        taskClear();
        gameClearCheck();
        hitpointMonster = 10;
        stat = 10;
        qn1();
    }
    else {
        qn1_3();
        chanceMonster();
    }
}

//Checks whether character faints or not
function charFaint () {
    if (stat === 0) {
        alert1_10();
        alert1_11();
        stat = 10;
        hitpointMonster = 10;
        qn1();
    }
    else {
        qn1_3();
        chanceMonster();
    }
}

//Continue to fight or not
function qn1_3 () {
    fightChoice = prompt("Continue to fight?\na) Fight\nb) Escape\n(Enter a or b)");
    if (fightChoice.toLowerCase() === "a") {
        chanceMonster();
    }
    else if (fightChoice.toLowerCase() === "b") {
        alert1_5();
        alert1_6();
        stat = 10;
        hitpointMonster = 10;
        qn1();
    }
    else {
        alert("You entered an invalid choice.");
        qn1_3();
    }
}

//Clears a monster after Quest completion
function questHuntClear () {
    if (monster === "Basilisk") {
        monsterArray[0] = "";
    }
    else if (monster === "Mammoth") {
        monsterArray[1] = "";
    }
    else if (monster === "Dragon") {
        monsterArray[2] = "";
    }
}
//--------------------End of Hunting functions



//*************************Hunting task alerts
function alert1_1 () {
    alert("Cain: \nBrave warrior! I need you to hunt down a few monsters and bring these materials back to me.");
}

function alert1_2 () {
    alert(`Cain:\nGreat! Let me give you a ride there`);
}

function alert1_3 () {
    alert("Cain:\nWe've arrived! Take care! I'll see you back at Tristram");
}

function alert1_4 () {
    alert(`You've encountered the ${monster}!`);
}

function alert1_5 () {
    alert(`Cain:\nWelcome back, ${charName}! You seem tired. Let's get you some rest.`);
}

function alert1_6 () {
    alert(`Cain\nGood day, ${charName}! You seem well-rested.`);
}


function alert1_7 () {
    alert(`You managed to land a blow on the ${monster}.\n${monster} HP:${hitpointMonster}/10`);
}

function alert1_8 () {
    alert(`You missed. You received a blow from the ferocious beast.\nYour HP: ${stat}/10`);
}

function alert1_9 () {
    alert(`You've managed to take out the ${monster}! Quest completed!`);
}

function alert1_10 () {
    alert("You have no remaining HP. You fainted.");
}

function alert1_11 () {
    alert(`Cain:\nHello ${charName}! Someone found you fainted out there. Glad to see that you are fine now.`)
}

function alert1_12 () {
    alert(`Cain:\nWelcome back, ${charName}! I knew you could do it! Thank you for the hardwork. Let's get you some food and a good rest`);
}
//------------------End of hunting task alerts



//***********************Mining task functions

function qn2_1 () {
    mineral = prompt(`Cain:\nWhich would you like to start from?${mineralArray[0]}${mineralArray[1]}${mineralArray[2]}\nE.g. enter a, b or c`);
    if (mineral === "a" && mineralArray[0] ==="\na) Adamantium") {
        mineral = "Adamantium";
    }
    else if (mineral === "b" && mineralArray[1] ==="\nb) Pumice") {
        mineral = "Pumice";
    }
    else if (mineral === "c" && mineralArray[2] ==="\nc) Lapiz Lazuli") {
        mineral = "Lapiz Lazuli";
    }
    else {
        alert("You entered an invalid choice.");
        qn2_1();
    }
    alert1_2();
    alert2_2();
    qn2_2();
}

function qn2_2 () {
    direction = prompt(`You see 2 caves which lead further into the mine. Which route will you take?\nRemaining energy: ${stat}/10\na) Left\nb) Right\n(Enter a or b)`);
    if (direction.toLowerCase() === "a") {
        direction = "left";
        chance();
    }
    else if (direction.toLowerCase() === "b") {
        direction = "right";
        chance();
    }
    else {
        alert("You entered an invalid choice.");
        qn2_2();
    }
    if (prob < 1) {
        stat = 10;
        alert2_4();
        qn2_2();
    }
    else if (prob >= 1 && prob < 2) {
        alert2_5();
        questMineClear();
        taskClear();
        gameClearCheck();
        stat = 10;
        qn1();
    }
    else {
        stat--;
        alert2_3();
        charFaintMine();
    }
}

function charFaintMine () {
    if (stat === 0) {
        alert1_10();
        alert1_11();
        stat = 10;
        qn1();
    }
    else {
        qn2_2();
    }
}

function questMineClear () {
    if (mineral === "Adamantium") {
        mineralArray[0] = "";
    }
    else if (mineral === "Pumice") {
        mineralArray[1] = "";
    }
    else if (mineral === "Lapiz Lazuli") {
        mineralArray[2] = "";
    }
}

//----------------End of Mining task functions



//**************************Mining task alerts

function alert2_1 () {
    alert("Cain:\nTough lad! I need you to find these minerals for me.");
}

function alert2_2 () {
    alert(`You entered the mines.`);
}

function alert2_3 () {
    alert(`You took the route on the ${direction} and you did not find any ${mineral}...\nRemaining energy: ${stat}/10`);
}

function alert2_4 () {
    alert(`You took the route on the ${direction} and you found an oasis!\nYou drank the water from the oasis and recovered your energy!\nRemaining energy: ${stat}/10`);
}

function alert2_5 () {
    alert(`Eureka! You found the ${mineral}!`);
}

//-------------------End of Mining task alerts



//**********************Fishing task functions

function qn3_1 () {
    fish = prompt(`Cain:\nWhat would you like to catch today?${fishArray[0]}${fishArray[1]}${fishArray[2]}\nE.g. enter a, b or c`);
    if (fish.toLowerCase() === "a" && fishArray[0] === "\na) Sea bream") {
        fish = "Sea bream"
    }
    else if (fish.toLowerCase() === "b" && fishArray[1] === "\nb) Tuna") {
        fish = "Tuna"
    }
    else if (fish.toLowerCase() === "c" && fishArray[2] === "\nc) Eel") {
        fish = "Eel"
    }
    else {
        alert("You entered an invalid choice.");
        qn3_1();
    }
    alert1_2();
    qn3_2();
}


function qn3_2 () {
    contFishChoice = prompt("What do you want to do?\na) Fish\nb) Return to Tristram\n(Enter a or b)");
    if (contFishChoice.toLowerCase() === "a") {
        alert3_2();
        chanceFish();
    }
    else if (contFishChoice.toLowerCase() === "b") {
        alert1_5();
        alert1_6();
        stat = 10;
        qn1();
    }
    else {
        alert("You entered an invalid choice.");
        qn3_2();
    }
}

function chanceFish () {
    chance()
    if (prob < 1) {
        alert3_7();
        questFishClear();
        taskClear();
        gameClearCheck();
        stat = 10;
        qn1();
    }
    else if (prob >= 1 && prob < 3) {
        stat--;
        alert3_8();
        checkBait();
    }
    else if (prob >= 3 && prob < 5) {
        stat--;
        alert3_9();
        checkBait();
    }
    else if (prob >= 5 && prob < 7) {
        stat--;
        alert3_3();
        checkBait();
    }
    else if (prob >= 7 && prob < 10) {
        stat--;
        alert3_4();
        checkBait();
    }
    else {
        alert("You entered an invalid choice.");
        qn3_2();
    }
}

function checkBait () {
    if (stat === 0) {
        alert3_5();
        alert3_6();
        stat = 10;
        qn1();
    }
    else {
        qn3_2();
    }
}

function questFishClear () {
    if (fish === "Sea bream") {
        fishArray[0] = "";
    }
    else if (fish === "Tuna") {
        fishArray[1] = "";
    }
    else if (fish === "Eel") {
        fishArray[2] = "";
    }
}

//------------------End of Fishing task alerts



//*************************Fishing task alerts

function alert3_1 () {
    alert("Cain:\nA fan of the seas, aren't you! I need you to find catch these fishes for me.");
}

function alert3_2 () {
    alert("Hooked! You've got something tugging at your line!");
}

function alert3_3 () {
    alert(`You reeled in a piece of floating trash. You cursed at the inconsiderate person who threw the trash into the ocean.\nRemaining bait: ${stat}/10 `);
}

function alert3_4 () {
    alert(`You reeled in but your line got snapped.\nRemaining bait: ${stat}/10 `);
}

function alert3_5 () {
    alert("You ran out of bait and had to return to Tristram");
}

function alert3_6 () {
    alert(`Cain:\nHello ${charName}! You are back!\nWhat? You ran out of bait?\nIt's okay, I'll get you some tomorrow.`)
}

function alert3_7 () {
    alert(`You reeled in and caught a ${fish}!\nWoohoo! Time to head back to Tristram!`);
}

function alert3_8 () {
    alert(`You reeled in but the fish got away with your bait.\nRemaining bait: ${stat}/10 `);
}

function alert3_9 () {
    alert(`You reeled in and you caught a Magikarp. Splash! Splash!\nRemaining bait: ${stat}/10 `);
}

//------------------End of Fishing task alerts



//*************************************General

//Task type Alert:
function alert1 () {
    alert(`Cain: \n${charName}! That's a nice name.\nWell, there are 3 types of tasks which you can do to help me collect all the materials needed.`);
}

//Task type function:
function qn1 () {
    taskChoice = prompt(`Cain: \nWhat would you like to do today?${taskArray[0]}${taskArray[1]}${taskArray[2]}\nE.g. enter a, b or c`);
    if (taskChoice === "a" && taskArray[0] === "\na) Hunting") {
        alert1_1();
        qn1_1();
    }
    else if (taskChoice === "b" && taskArray[1] === "\nb) Mining") {
        alert2_1();
        qn2_1();
    }
    else if (taskChoice === "c" && taskArray[2] === "\nc) Fishing") {
        alert3_1();
        qn3_1();
    }
    else {
    alert("You entered an invalid choice.");
    qn1();
    }
}


function taskClear () {
    for (i=0; i<monsterArray.length; i++) {
        if (monsterArray[i] === "") {
            count1 ++;
        }
    }
    if (count1 === monsterArray.length) {
        taskArray[0] = "";
    }
    else {
        count1 = 0;
    }
    for (i=0; i<mineralArray.length; i++) {
        if (mineralArray[i] === "") {
            count2++;
        }
    }
    if (count2 === mineralArray.length) {
        taskArray[1] = "";
    }
    else {
        count2 = 0;
    }
    for (i=0; i<fishArray.length; i++) {
        if (fishArray[i] === "") {
            count3++;
        }
    }
    if (count3 === fishArray.length) {
        taskArray[2] = "";
    }
    else {
        count3 = 0;
    }
}

function gameClearAlert () {
    alert(`${charName}! You collected all the materials needed!\nThank you for your help! I knew you could do it!`)
}

function gameClearCheck () {
    for (i=0; i<taskArray.length; i++) {
        if (taskArray[i] === "") {
            count4++;
        }
    }
    if (count4 === taskArray.length) {
        gameClearAlert();
        repeatGame();
    }
    else {
        count4 = 0;
    }
}

function repeatGame () {
    prompt(`Congratulations! You've completed the game!\nDo you want to play again?\na) Yes\nb) Nah, I've had enough`)
    resetVar ();
}

function resetVar () {
    stat = 10;
    hitpointMonster = 10;
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;

    taskArray =
    ["\na) Hunting",
    "\nb) Mining",
    "\nc) Fishing"];

    monsterArray =
    ["\na) Eye of the Basilisk",
    "\nb) Hide of the Mammoth",
    "\nc) Bone of the Dragon"];

    mineralArray =
    ["\na) Adamantium",
    "\nb) Pumice",
    "\nc) Lapiz Lazuli"]

    fishArray =
    ["\na) Sea bream",
    "\nb) Tuna",
    "\nc) Eel"]
}

//------------------------------End of general



//*****************************Game initiation
const charName = prompt("Stranger: \nHello there! Welcome to Tristram!\nI am Cain, the legendary blacksmith. I am currently forging a new weapon and I'll need your help.\nBut first, what is your name?\nEnter your character name:");
alert1();
qn1();