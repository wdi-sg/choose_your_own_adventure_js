// put code here!

var character = {
    health: 5,
    str: 0,
    agi: 0,
    int: 0
}; //character stats are modified based on starting choices and events in the game


function diceRoll(stat) {
    var diceResult = Math.floor(Math.random() * Math.floor(20)) + stat;
    alert(`Your rolled a ${diceResult}!`);
    return diceResult;
} //this basically rolls a D20, if need to modify result, use character.stat i.e


function startingClass() {
    var userInput = prompt("choose your starting class, adventurer! \n(F)ighter \n(A)rcher \n(W)eezard\nNote: there is no spelling error, a Weezard is a very tiny Wizard.");
    userInput = userInput.toLowerCase();

    if (userInput === "f") {
        alert("You are a fighter!");
        character.str += 2;
        character.int -= 2;
    } else if (userInput === 'a') {
        alert("You are an archer");
        character.str -= 2;
        character.agi += 2;
    } else if (userInput === 'w') {
        alert("You are a weezard!");
        character.agi -= 2;
        character.int += 2;
    } else {
        alert("There's no such thing!");
    }
} //chooses starting class and adjusts character stats based on choice

function poison() {
    if (diceRoll(0) < 10) {
        character.health--;
        alert(`Your health is now ${character.health}!`);
        checkDead();
    }
}; //deducts health points if poison check succeeds.

function surpriseAttack() {
    userInput = (prompt('A knife in the dark! \n(D)odge \n(B)lock')).toLowerCase();

    if (userInput === 'd') {
        if ( diceRoll(character.agi) > 10) {
            alert('You dodged it successfully!')
        } else {
            character.health --;
            alert( `Your health is now ${character.health}!`)
            checkDead();

        }
    } else if (userInput === 'b') {
        if (diceRoll(character.str) > 10) {
            alert('You blocked it successfully!')
        } else {
            character.health --;
            alert( `Your health is now ${character.health}!`)
            checkDead();
        }
    }
} // deducts health points if fail to block, to add in setTimer for slow reactions.

function attack(life) {
    var enemyLife = life; //set enemy life via integer

// use while loop because the standard for loop does not work.
    while (enemyLife > 0) {
        if (diceRoll(0) > 10) {
            alert("HIT!")
            enemyLife--;
        } else {
            alert(`The enemy counter attacks!`)
            character.health --;
            alert( `Your health is now ${character.health}!`)
            checkDead()
        }
    }

    if (enemyLife === 0) {
        alert('You defeated the enemy!');
    }

}

function checkDead() {
    if (character.health === 0) {
    alert('YOU DIED');
    throw new Error("Something went badly wrong!"); //this stop the rests of the javascript from loading.
    //for more info refer to https://stackoverflow.com/questions/9298839/is-it-possible-to-stop-javascript-execution
    }
} //you have to add this in after every scenario character.health --


//THIS PART STARTS THE TEXT ADVENTURE
startingClass();
// poison();

surpriseAttack()
attack(10);
console.log(character)