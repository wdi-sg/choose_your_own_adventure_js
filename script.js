console.log("hello script js");

//declare starting variables
var playerName = null;
var currentPokemon = null;
var opponentPokemon = [];
var bag = ["pokeball","antidote"];
var pokemonBelt = [];
var stage = 0;
var questionComplete = ["0"];
var battleMode = false;
var attackMode = false;
var winCounter = 0

//List of starter pokemon
var starterPokemon = ["bulbasaur", "squirtle", "charmander", "pikachu", "charizard", "blastoise", "venasaur"];

//list of possible wild pokemon encounters
var wildPokemonList = ["caterpie", "rattata","butterfree"];

//List of all pokemon
var pokemonList = [
    {   "pokemon": "bulbasaur",
        "moveList": ["growl", "tackle"],
        "hitPoints": 200
    },
    {
        "pokemon": "squirtle",
        "moveList": ["tackle", "tail whip"],
        "hitPoints": 200
    },
    {
        "pokemon": "charmander",
        "moveList":["scratch", "growl"],
        "hitPoints": 200
    },
    {
        "pokemon": "pikachu",
        "moveList": ["thunder shock", "growl"],
        "hitPoints": 200
    },
    {
        "pokemon": "blastoise",
        "moveList": ["hydro pump", "skull bash", "headbutt", "bubble beam"],
        "hitPoints": 290
    },
    {
        "pokemon": "charizard",
        "moveList": ["fire spin", "flamethrower", "slash", "wing attack"],
        "hitPoints": 300
    },
    {
        "pokemon": "venasaur",
        "moveList": ["petal dance", "solar beam", "razor leaf"],
        "hitPoints": 270
    },
    {   "pokemon": "caterpie",
        "moveList": ["growl", "tackle"],
        "hitPoints": 150
    },
    {   "pokemon": "butterfree",
        "moveList": ["growl", "tackle"],
        "hitPoints": 180
    },
    {   "pokemon": "rattata",
        "moveList": ["growl", "tackle"],
        "hitPoints": 160
    },
];

//List of damage by ability
var abilityDamage = [
    {
      "move": "tackle",
      "damage": 200
    },
    {
      "move": "scratch",
      "damage": 200
    }]


////    Storyline Functions    ////
//updates completed questions array
function completeQuestion(currentInput) {
    questionComplete.push(currentInput);
    console.log(questionComplete);
    document.getElementById('input').value='';
}


//Show list of pokemon abilities in battle
function showMoveList(currentPokemon) {
    for (i=0;i<pokemonList.length;i++) {
        if (currentPokemon === pokemonList[i].pokemon) {
        display(`1. ${pokemonList[i].moveList[0]}\n2. ${pokemonList[i].moveList[1]}\n3. ${pokemonList[i].moveList[2]}\n4. ${pokemonList[i].moveList[3]}`);
        document.getElementById('input').value='';
        }
    };
}

//Show pokemon available in belt
function showPokemonBelt(pokemon) {
    if (pokemonBelt.length === 1) {
        display(`You do not have any other pokemon!\n\n1. Ability (skill)\n2. Switch Pokemon (switch)\n3. Open Bag (bag)\n4. Escape (run)`);
        document.getElementById('input').value='';
    } else {
    display(`1. ${pokemonBelt[0]}\n2.${pokemonBelt[1]}`);
    document.getElementById('input').value='';
    }
}
//Show items in bag
function showBag() {
    display(`1. ${bag[0]}\n2. ${bag[1]}`);
    document.getElementById('input').value='';
}


//      TO UPDATE ATTACK FUNCTION    //
// function attack(move) {
//     for (i=0; i < abilityDamage.length; i++) {
//         if (abilityDamage[i].move === pokemonList[0].moveList[1]) {
//             console.log(`the damage of ${abilityDamage[i].move} is ${abilityDamage[i].damage}`);
//             opponentPokemon
//         }
//     }
// }
// console.log(abilityDamage[0].move);
// console.log(pokemonList[0].moveList[1]);
// if (pokemonList[0].moveList[1] === abilityDamage[0].move) {
//     console.log(`the damage of ${abilityDamage[0].move} is ${abilityDamage[0].damage}`);
// }


//           TO UPDATE.    ////
// //battle function
// function battleFunctions(currentPokemon) {
//     display(`What will ${currentPokemon} do?\n1. Fight\n2. Pokemon\n3. Bag\n4. Escape`);
// }



//////// POKEMON  ADVENTURES ////////
////////////Start of Game///////////

display("What is your name, young trainer?");
counter(`Number of battles won: ${winCounter}`);
console.log(`stage 0 => choose username`)

var inputHappened = function(currentInput) {
    if (battleMode === true) {
        stage = "battle";
        console.log(`Currently in battle`);
        if (attackMode === true) {
            stage = "attack";
        };
    } else if (battleMode === false) {
        stage = questionComplete.length;
        console.log(`${stage} is the current stage`)
    };


///////    STAGE 1 Choose Pokemon   ///////
    if (stage === 1) {
        console.log(`stage 1 - choose pokemon`);
        playerName = currentInput;
        display(`Welcome to the world of pokemon, ${playerName.charAt(0).toUpperCase()+playerName.slice(1)}! \n\nChoose your starting pokemon: \n1. Bulbasaur \n2. Squirtle\n3. Charmander\n4. Pikachu\n5. Choose a random pokemon for me (random)`);
        console.log(playerName);
        questionComplete.push(playerName);
        console.log(questionComplete);
        document.getElementById('input').value='';
    }

///////  STAGE 2 Choose Start Point  ///////
    if (stage === 2 && questionComplete[1]===playerName) {
        console.log(`stage 2 choose start town`);
        if (currentInput === 'bulbasaur'||currentInput === 'squirtle'||currentInput === 'charmander'||currentInput === 'pikachu') {
            pokemonBelt.push(currentInput);
            currentPokemon = pokemonBelt[0];
            console.log(`Player chose ${currentPokemon}`);
            display(`Great choice, ${playerName.charAt(0).toUpperCase()+playerName.slice(1)}!\nCongrats on choosing your first pokemon ${currentPokemon.charAt(0).toUpperCase()+ currentPokemon.slice(1)}.\n\nNow where would you like to begin your adventure? \n\n1. Pallet Town (pallet)\n2. Lavender Town (lavender)\n3. Cinabar Island (cinabar)\n4. Pewter City (pewter)\n5. Safari Zone (safari)`);
            completeQuestion(currentInput);
        } else if (currentInput === 'random') {
            pokemonBelt.push(starterPokemon[Math.floor(Math.random()*7)]);
            currentPokemon = pokemonBelt[0];
            display(`Ahh, taking chances I see, ${playerName.charAt(0).toUpperCase()+playerName.slice(1)}!\nCongrats on acquiring your first pokemon ${pokemonBelt[0].charAt(0).toUpperCase()+pokemonBelt[0].slice(1)}!\n\nNow where would you like to begin your adventure? \n\n1. Pallet Town (pallet)\n2. Lavender Town (lavender)\n3. Cinabar Island (cinabar)\n4. Pewter City (pewter)\n5. Safari Zone (safari)`);
            completeQuestion(currentInput);
        } else {
            return;
        }
    }

//////            STAGE 3           ///////
    if (stage === 3 && (questionComplete[2]==="bulbasaur"||questionComplete[2]==="squirtle"||questionComplete[2]==="charmander"||questionComplete[2]==="pikachu"||questionComplete[2]==="random")) {
        console.log("Stage 3");
        if (currentInput.toLowerCase() === "pallet") {
                display(`What better way to start our adventure than from our hometown.\n\nShould we:\n1. Visit cousin Gary (gary)\n2. Head up north (north)`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "lavender") {
                // var opponentPokemon = [];
                opponentPokemon.push(wildPokemonList[Math.floor(Math.random()*3)]);
                console.log(`first pokemon to fight ${opponentPokemon}`);
                display(`You head up north to Lavender Town.\n\nUpon entering a grass patch, you encounter your first pokemon.\n\nWild ${opponentPokemon[0].charAt(0).toUpperCase()+opponentPokemon[0].slice(1)} appeared!\n\n 1. Fight\n2. Run`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "cinabar") {
            display(`You arrive on Cinabar Island.\nThere is not a soul in sight.\n\nWhat would you do?\n1. Have a drink by the coast (drink)\n2. Surf back to Pallet Town (surf)`);
            completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "pewter") {
            display(`You take a lift from Professor Oak and arrive in Pewter City.\nA huge rock gym stands in front of you.\n\n1. Enter the gym (gym)\n2. Head east towards the cave (cave)`);
            completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "safari") {
            display(`You do not have a safari ticket yet.\n\nGo back.`);
            document.getElementById('input').value='';
        } else if (currentInput === "back") {
            display(`Now where would you like to begin your adventure? \n\n1. Pallet Town (pallet)\n2. Lavender Town (lavender)\n3. Cinabar Island (cinabar)\n4. Pewter City (pewter)\n5. Safari Zone (safari)`);
            document.getElementById('input').value='';
        }
    }


//////            STAGE 4           ///////
//Pallet Town storyline -> visit gary or head north
    if (stage === 4 && questionComplete[3]==="pallet") {
        console.log("Stage 4 pallet town");
        if (currentInput.toLowerCase() === "gary") {
                display(`It's been a long time since you have seen Gary.\n\nGary challenges you to your first pokemon battle.\n\n1. Accept the challenge (accept)\n2. Tell Gary he's wasting your time and head north (north)`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "north") {
                display('You head north\n\nGame still under construction');
                document.getElementById('input').value='';
        } else if (currentInput === "back") {
                display(`What better way to start our adventure than from our hometown.\n\nShould we:\n1. Visit cousin Gary (gary)\n2. Head up north (north)`);
                document.getElementById('input').value='';
        }
    }
//Lavender Town storyline -> fight or run
    if (stage === 4 && questionComplete[3]==="lavender") {
        console.log("Stage 4 lavender");
        if (currentInput.toLowerCase() === "fight") {
                display(`You sent out ${currentPokemon.charAt(0).toUpperCase()+currentPokemon.slice(1)}!\n\nWhat will ${currentPokemon.charAt(0).toUpperCase()+currentPokemon.slice(1)} do?\n1. Ability (skill)\n2. Switch Pokemon (switch)\n3. Open Bag (bag)\n4. Escape (run)`);
                battleMode = true;
                document.getElementById('input').value=''
                // completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "run") {
                display('You ran away');
                completeQuestion(currentInput);
        }
    }

//Cinabar Island storyline -> drink or surf
    if (stage === 4 && questionComplete[3]==="cinabar") {
        console.log("Stage 4 cinabar");
        if (currentInput.toLowerCase() === "drink") {
                display(`You reach for your bag and grab a beer by the coast.\n\nAhh tastes great!`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "surf") {
                display("You don't have any pokemon with the surf ability.\n\nGo back.");
                document.getElementById('input').value='';
        } else if (currentInput === "back") {
                display(`You arrive on Cinabar Island.\nThere is not a soul in sight.\n\nWhat would you do?\n1. Have a drink by the coast (drink)\n2. Surf back to Pallet Town (surf)`);
                document.getElementById('input').value='';
        }
    }

//Pewter City storyline -> choose gym or cave
    if (stage === 4 && questionComplete[3]==="pewter") {
        console.log("Stage 4 pewter");
        if (currentInput.toLowerCase() === "gym") {
                display(`Your level is too low to enter this gym!\n\nCome back when you are level 10.`);
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "cave") {
                display('On your way to the cave, you see a another pokemon trainer.\n\n1. Challenge trainer to a fight (challenge)\n2. Take another route to avoid him (avoid)');
                completeQuestion(currentInput);
        } else if (currentInput === "back") {
                display(`You take a lift from Professor Oak and arrive in Pewter City.\nA huge rock gym stands in front of you.\n\n1. Enter the gym (gym)\n2. Head east towards the cave (cave)`);
                document.getElementById('input').value='';
        }
    }




//////            STAGE 5           ///////
//Pallet Town storyline -> visit gary or head north
    if (stage === 5 && questionComplete[4]==="gary") {
        console.log("Stage 5 pallet town");
        if (currentInput.toLowerCase() === "accept") {
                opponentPokemon.push("mewtwo");
                display(`Gary sent out ${opponentPokemon[0].charAt(0).toUpperCase()+opponentPokemon[0].slice(1)}.\n\nGo ${currentPokemon.charAt(0).toUpperCase()+currentPokemon.slice(1)}!\n\nWhat will ${currentPokemon.charAt(0).toUpperCase()+currentPokemon.slice(1)} do?\n1. Ability (skill)\n2. Switch Pokemon (switch)\n3. Open Bag (bag)\n4. Escape (run)`);
                battleMode = true;
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "north") {
                display('You head north\n\nGame still under construction');
                // completeQuestion(currentInput);
        }
    }



//Pewter City storyline  -> avoid or engage
    if (stage === 5 && questionComplete[4]==="cave") {
        console.log("Stage 5 to the cave");
        if (currentInput === "challenge") {
                display(`You approach the pokemon trainer.\n\nHe is not interested in having a pokemon battle.\n\n1. Continue on your journey (cont).`);
        } else if (currentInput === "avoid"){
            display(`You take a different route and arrive in the forest.\n\n1. Continue on your journey (cont).`);
        }
        completeQuestion(currentInput);

    }

//In Battle mode
    if (stage === "battle" ) {
        console.log(`In battle now`);
        if (currentInput === "skill") {
            showMoveList(currentPokemon);
            attackMode = true;
        } else if (currentInput === "switch"){
            showPokemonBelt();
        } else if (currentInput === "bag") {
            showBag();
        } else if (currentInput === "run") {
            display(`You got away safely!`)
            ;
            document.getElementById('input').value='';
        }
    }

//In Attack Mode
    if (stage === "attack" ) {
            console.log(`In attack mode now`);
            if (currentInput === "1") {
                display(`${opponentPokemon[0].charAt(0).toUpperCase()+opponentPokemon[0].slice(1)} fainted.\n\nYou Won!\n\n1. Continue`);
                winCounter += 1;
                counter(`Number of battles won: ${winCounter}`);
                battleMode = false;
                document.getElementById('input').value='';
            }
    }
}