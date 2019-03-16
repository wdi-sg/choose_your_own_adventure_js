// put code here!

var character = {
    name: "person",
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
} //this basically rolls a D20, if need to modify result, use character.stat i.e diceRoll(character.agi) i.e diceRoll(0) rolls D20 without applying stat modifiers.

function userUnderstanding() {
    alert('In this text-based adventure, you would have to key in choices at key parts of the game.\nTo select your choice, simply key in the letter within the brackets. to select (C)hoice, type C and enter into the prompt window. ')
    var userInput = (prompt('Do you understand?\n (Y)es. \n (N)o.')).toLowerCase();

    if (userInput === 'y') {
        alert('Well done!')
    } else {
        userUnderstanding();
    }

} //this function tests if users are able to understand how to operate the text based choices.

function startingClass() {

    var userName = prompt("What is your name, adventurer?")
    character.name = userName;

    var userInput = prompt("Choose your starting class, adventurer! \n(F)ighter \n(A)rcher \n(W)eezard\nNote: there is no spelling error, a Weezard is a very tiny Wizard.");
    userInput = userInput.toLowerCase();

    if (userInput === "f") {
        alert(`You are a Fighter, ${character.name}!`);
        character.str += 5;
        character.int -= 5;
    } else if (userInput === 'a') {
        alert(`You are an Archer, ${character.name}!` );
        character.str -= 5;
        character.agi += 5;
    } else if (userInput === 'w') {
        alert(`You are a Weezard, ${character.name}`);
        character.agi -= 5;
        character.int += 5;
    } else {
        alert("There's no such thing!");
        startingClass();
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
    } else {
        pathTwo();
    }
}  // Junk code for reference and study. path one and path two creates an infinite loop if you call pathOne()

function pathA() {
    alert('You have been hired by the King to rescue his daughter, Princess Leia from the clutches of a dastardly dragon.\nHowever, the night before you set out on your quest, it seems there are forces conspiring to stop you from fulfilling your quest...')
    alert('You have noticed this hooded man following you for a while now. Do you...')
    userInput = (prompt('(A)ttack and attempt to knock him out?\n(S)lip away and lose him in the alleyways?\n(T)alk to him?')).toLowerCase();

//THIS section selects userchoice and rolls a dice for them, if they succeed they will move to pathB
    if (userInput === 'a') {
      alert('You strike out at him!')
      attack(1, character.str, 10);
      pathB();
    } else if (userInput === 's') {
        if (diceRoll(character.agi) > 10) {
          alert('You slip into the alleyways');
          pathB();
        } else {
            alert('You fail to lose him');
            surpriseAttack();
            attack(1, character.str, 10);
            pathB();
        };
    } else if (userInput === 't') {
        if (diceRoll(character.int) > 10) {
            alert('You confronted him in broad daylight and he backs off.')
            pathB();
        } else {
          alert('He shakes his head and pulls out a knife out of a sudden.')
          surpriseAttack();
          attack(1, character.str, 10);
          pathB();
        };
    } else {
        alert('Invalid Input!')
        pathA();
    }
}

function pathB() {
    alert('Having settled your issue, you make your way to the dragon lair whereby you come across your first obstacle.\nThe biggest, meanest and ugliest troll you ever seen guarding the bridge that you have to cross.\n\n Do you... ')
    var userInput = (prompt('(S)wim across the river.\n(F)ight the troll.\n(P)ay the troll.')).toLowerCase();

    if (userInput === 's')
}

//END OF STORY BLOCKS FUNCTIONS

//THIS PART STARTS THE TEXT ADVENTURE
userUnderstanding();
startingClass();
pathA(); // PathA links into all the other paths within their functions.
console.log(character)
// pathOne()
// poison();
// surpriseAttack()
// attack(1, character.str, 6);