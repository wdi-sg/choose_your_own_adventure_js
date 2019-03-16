// put code here!

var character = {
    health: 5,
    str: 0,
    agi: 0,
    int: 0
}; //character stats are modified based on starting choices and events in the game. Object to store values and other things

// ------------------- CORE MECHANICS FUNCTIONS ---------------------
// These are the core functions that serve as mechanics for the text adventure
function diceRoll(stat) {
    var diceResult = Math.floor(Math.random() * Math.floor(20)) + stat;
    alert(`Your rolled a ${diceResult}!`);
    return diceResult; //returns and stores a value for use
} //this basically rolls a D20, if need to modify result, use character.stat i.e diceRoll(character.agi)


function startingClass() {
    var userInput = prompt("choose your starting class, adventurer! \n(F)ighter \n(A)rcher \n(W)eezard\nNote: there is no spelling error, a Weezard is a very tiny Wizard.");
    userInput = userInput.toLowerCase();

    if (userInput === "f") {
        alert("You are a fighter!");
        character.str += 4;
        character.int -= 4;
    } else if (userInput === 'a') {
        alert("You are an archer");
        character.str -= 4;
        character.agi += 4;
    } else if (userInput === 'w') {
        alert("You are a weezard!");
        character.agi -= 4;
        character.int += 4;
    } else {
        alert("There's no such thing!");
    }
} //chooses starting class and adjusts character stats based on choice

function poison() {
    if (diceRoll(0) < 10) {
        alert('You failed to resist the poison.')
        checkDead();
    } else {
        alert('You managed to resist the poison.')
    }
}; //deducts health points if poison check succeeds.

function surpriseAttack() {
    userInput = (prompt('A knife in the dark! \n(D)odge \n(B)lock')).toLowerCase(); //converts choice to lower case. accounts for capital

    if (userInput === 'd') {
        if ( diceRoll(character.agi) > 10) {
            alert('You dodged it successfully!')
        } else {
            checkDead();

        }
    } else if (userInput === 'b') {
        if (diceRoll(character.str) > 10) {
            alert('You blocked it successfully!')
        } else {
            checkDead();
        }
    }
} // deducts health points if fail to block, to add in setTimer for slow reactions.

function attack(life, stat, percentage) {
    var enemyLife = life; //set enemy life via integer

// use while loop because the standard for loop does not work.
    while (enemyLife > 0) {
        if (diceRoll(stat) > percentage) {  //percentage adjusts difficulty of monster, stat dictates which stat to roll with
            alert("HIT!")
            enemyLife--;
        } else {
            alert(`The enemy counter attacks!`)
            checkDead()
        }
    }

    if (enemyLife === 0) {
        alert('You defeated the enemy!');
    }
} // this function generates a simple monster with a lifebar and players will continue to attack it until either player or monster dies.

function checkDead() {
    character.health--;
    alert(`Your health is now ${character.health}!`);
    if (character.health === 0) {
    alert('YOU DIED');
    throw new Error("Something went badly wrong!"); //this stop the rests of the javascript from loading.
    //for more info refer to https://stackoverflow.com/questions/9298839/is-it-possible-to-stop-javascript-execution
    }
} //this function reduces character health by 1 and check if its 0. If its 0 script will stop running.

// -------- END OF CORE MECHANICS FUNCTIONS -----------------


// ------------- STORY BLOCK FUNCTIONS  ----------------------

function pathOne() {
    alert('path one!')
    userInput = (prompt("Choose path")).toLowerCase();
    if (userInput == 1) {
        pathTwo();
    } else {
        pathOne();
    }
}

function pathTwo() {
    alert('path two!')
    userInput = (prompt("Choose path")).toLowerCase();
    if (userInput == 1) {
        pathOne();
    }
}  // Junk code for reference and study. path one and path two creates an infinite loop.


//THIS PART STARTS THE TEXT ADVENTURE
startingClass();
poison();

surpriseAttack()
attack(1, character.str, 6);
console.log(character)

pathOne()