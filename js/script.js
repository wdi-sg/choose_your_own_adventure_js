console.log("hello script js");

// ["mainscr", "game", "enc"] ===> mainscr, gameintro, game, encyclopedia mode
let gameMode = "mainscr";
let inGameSequence = 1; // 1:Read Description of Rm, 2: RandomCreature, 3: Fight/Flight, 4: Move
let godMode = false;
let currentPos = 10;
let randomBeast = "";
let savedScreenMsg = "";
let hitPoints = 5;

/////////////////////////////////////////////////////
// Initialise Game: Loading of DataBases & Screens //
/////////////////////////////////////////////////////
window.onload = initGame(); // init game upon window fully loaded all HTML, CSS, Scripts

function initGame() {
    beastsDB = [];
    spellsDB = [];
    mapArray = [];
    roomsDescriptionArray = [];
    loadDataBase();
    clearInput();
    display(screenGraphics('mainpage'));
    gameMode = "mainscr";
    inGame = false;
    godMode = false;
    currentPos = 10;
}

var inputHappened = function(currentInput) {
    currentInput = currentInput.toLowerCase();

    if (currentInput === "restart") {
        initGame();
        clearInput();
    }

    if (gameMode === "mainscr" && currentInput === "enc") {
        gameMode = "enc";
        clearInput('');
    } else if (gameMode === "mainscr" && (currentInput === "game" || currentInput === "g")) {
        gameMode = "gameintro";
        //gameHome(currentInput);
        clearInput('');
    } else {
        //do nothing
    }

    switch (true) {
        case (gameMode === "enc"):
            runEncyclopediaMode(currentInput);
            break;
        case (gameMode === "gameintro"):
            gameHome(currentInput);
            break;
        case (gameMode === "game"):
            gameHandlingRoutine(currentInput);
            break;
        default:
            break;
    }
    console.log(`inputHappened function ended...`);
};

////////////////////////////
// Encyclopedia Interface //
////////////////////////////
function runEncyclopediaMode(currentInput) {
    display(screenGraphics("encyclopediapage"));
    clearInput('Enter "b" for beasts, "s" for spells and "x" to exit');
    if (currentInput === 'b') {
        printBeastsDB(currentInput);
    } else if (currentInput === "s") {
        printSpellsDB(currentInput);
    } else if (currentInput === "x") {
        gameMode = "mainscr";
        initGame();
    } else {
        //ignore inputs and do nothing
    }
}

//////////////////////////
// Game Intro Interface //
//////////////////////////
function gameHome(currentInput) {
    //let msg = '<h2 style="margin-top:0.5em;">The year is 1925, You are our protagonist, Newt Scamander, travelling across the five continents researching for his book (Fantastic Beasts and Where to Find Them). Our adventure begins at an ancient ruins in Sudan...</h2><p>Press "s" to start your adventure or "x" to exit to the main screen!</p>';

    if (currentInput === "x") {
        gameMode = "mainscr";
        initGame();
    } else if (currentInput === "s") {
        clearInput();
        console.log("start the game --->");
        gameMode = "game";
        gameHandlingRoutine(currentInput);
    } else {
        display(screenGraphics("gameintropage"));
        clearInput();
    }
}

///////////////////////////
// Game Handling Routine //
///////////////////////////

function gameHandlingRoutine(currentInput) {
    console.log(`Game handling routine, IP: ${currentInput}, inGameSequence: ${inGameSequence}, currentPos: ${currentPos}`);
    //Start of Game conditions
    if ((gameMode === "game") && (currentPos === 10)) { // this part is for the beginning of the game
        displayRoomInfo(currentPos);
        clearInput();
        moveChar(currentInput, mapArray[currentPos - 1]);
        console.log("END OF SPECIAL")
    }
    if (gameMode === "game" && (currentPos !== 10 || inGameSequence === 4)) {
        console.log(`Inside Game Handling Routine`)
        if (inGameSequence === 1) {
            displayRoomInfo(currentPos);
            inGameSequence = 2;
        }
        if (inGameSequence === 2) {
            randomBeast = rollForRandomBeasts();
            console.log('random beast = ' + randomBeast)
        }
        if (inGameSequence === 3) {
            console.log('sequence 3...')
            fightOrFlee(randomBeast, currentInput);
        }
        if (inGameSequence === 4) {
            moveChar(currentInput, mapArray[currentPos - 1]);
        }
        if (inGameSequence === 99) {
            playerDead();
        }
    }
}

function displayRoomInfo(currentPos) {
    display(describeRoom(currentPos-1));
    displayAddContent(`You could move in the following direction(s) : ${navigate(currentPos-1)}`);
}

function rollForRandomBeasts() {
    let randEncounter = Math.ceil(Math.random()*100);
    console.log(`RANDOM ROLL: ${randEncounter}`);
    if (randEncounter > 60) {
        let randInt = Math.floor(Math.random()*beastsDB.length);
        let randBeast = beastsDB[randInt];
        //console.log(randBeast);
        console.log(randBeast['Name']);
        displayAddContent(`<p>You have encountered the ${randBeast["Name"]}!</p>`);
        displayAddContent(`<p>Do you want to "f" fight the ${randomBeast} or "r" run away from it?</p>`);
        inGameSequence = 3;
        clearInput();
        return randBeast['Name'];
    } else {
        console.log(`There is nothing of interest here.`);
        displayAddContent(`<p>There is nothing of interest in this part of the room.</p>`);
        inGameSequence = 4;
        return "";
    } // roll a dice for encounters with random beasts,
}

function fightOrFlee(randomBeast, currentInput) {
    let randomResults = false;
    savedScreenMsg = output.innerHTML;
    if (currentInput === "f") {
        displayAddContent('<p>Ready your wand!</p>');
        let beastDead = false;
        console.log(`beastDead: ${beastDead}, hitpoints: ${hitPoints}`)
        while (!beastDead && hitPoints > 0) {
            beastDead = fightBeast(randomBeast);
        }
        if (hitPoints < 1) {
            console.log(`i'm dead`);
            clearInput();
            inGameSequence = 99;
            return ;
        }
        inGameSequence = 4;
        clearInput();
        return;
    } else if (currentInput === "r") {
        displayAddContent('<p>You turn and run!</p>')
        inGameSequence = 4;
        clearInput();
        return;
    }
    console.log(savedScreenMsg);
}

function fightBeast(randomBeast) {
    let rand = Math.floor(Math.random()*spellsDB.length);
    if (Math.ceil(Math.random()*100) > 50) {
        displayAddContent(`You cast ${spellsDB[rand]['Spell Name']} on the ${randomBeast} successfully!\nThe beast is dead!\n`);
        displayAddContent(`Continue with your exploration.\n`);
        return true;
    } else {
        hitPoints -= 1;
        displayAddContent(`The ${randomBeast} hits you!\n`);
        displayAddContent(`You have ${hitPoints} hit points left.\n`);
        return false;
    }
}

function navigate(currentPos) {
    let directionArr = [];
    let goNorth = 0;
    let goSouth = 0;
    let goEast = 0;
    let goWest = 0;
    let msg = "";

    if (mapArray[currentPos][0] > 0) {
        msg += 'N';
    } else {
        msg += '_';
    };

    if (mapArray[currentPos][1] > 0) {
        msg += 'S';
    } else {
        msg += '_';
    };

    if (mapArray[currentPos][2] > 0) {
        msg += 'E';
    } else {
        msg += '_';
    };

    if (mapArray[currentPos][3] > 0) {
        msg += 'W';
    } else {
        msg += '_';
    }
    directionArr = msg.split('');
    return directionArr;
}

function moveChar(currentInput, posArr) {
    console.log(`Printing moveChar: currentInput: ${currentInput}, posArr: ${posArr}`);
    if (currentInput === "n" && posArr[0] > 0) {
        currentPos = posArr[0];
        console.log(`move successfully into position Arr : ${posArr[0]}`);
        displayRoomInfo(currentPos);
        inGameSequence = 1;
    } else if (currentInput === "s" && posArr[1] > 0) {
        currentPos = posArr[1];
        console.log(`move successfully into position Arr : ${posArr[1]}`);
        displayRoomInfo(currentPos);
        inGameSequence = 1;
    } else if (currentInput === "e" && posArr[2] > 0) {
        currentPos = posArr[2];
        console.log(`move successfully into position Arr : ${posArr[2]}`);
        displayRoomInfo(currentPos);
        inGameSequence = 1;
    } else if (currentInput === "w" && posArr[3] > 0) {
        currentPos = posArr[3];
        console.log(`move successfully into position Arr : ${posArr[3]}`);
        displayRoomInfo(currentPos);
        inGameSequence = 1;
    } else {
        console.log('invalid movement');
        clearInput('Invalid Direction!');
    }
    clearInput();
    //displayRoomInfo(currentPos);
}

function playerDead() {
    let msg = "<h1>YOU ARE DEAD! TRY AGAIN!</h1>";
    display(msg);
}

function playerWon() {

}
