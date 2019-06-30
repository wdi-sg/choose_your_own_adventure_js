console.log("hello script js");

//declare global variables
var playerName = null;
var currentPokemon = null;
var starterPokemon = ["bulbasaur", "squirtle", "charmander", "pikachu", "charizard", "blastoise", "venasaur"];
var wildPokemonList = ["caterpie", "rattata","butterfree"];
var pokemonList = [
    {   "pokemon": "bulbasaur",
        "moveList": ["growl", "tackle"]
    },
    {
        "pokemon": "squirtle",
        "moveList": ["tackle", "tail whip"]
    },
    {
        "pokemon": "charmander",
        "moveList":["scratch", "growl"]
    },
    {
        "pokemon": "pikachu",
        "moveList": ["thunder shock", "growl"]
    },
    {
        "pokemon": "blastoise",
        "moveList": ["hydro pump", "skull bash", "headbutt", "bubble beam"]
    },
    {
        "pokemon": "charizard",
        "moveList": ["fire spin", "flamethrower", "slash", "wing attack"]
    },
    {
        "pokemon": "venasaur",
        "moveList": ["petal dance", "solar beam", "razor leaf"]
    },
];
var opponentPokemon = [];

//battle variables
var bag = ["pokeball","antidote"];
var pokemonBelt = [];


//variables for stage and questions
var stage = 0;
var questionComplete = ["0"];

//storyline functions
function completeQuestion(currentInput) {
    questionComplete.push(currentInput);
    console.log(questionComplete);
    document.getElementById('input').value='';
}

function beginAdventure(currentInput) {
    pokemonBelt.push(currentInput);
    currentPokemon = pokemonBelt[0];
    console.log(currentPokemon);
    console.log(`Player chose ${currentPokemon}`);
    display(`Great choice, ${playerName.charAt(0).toUpperCase()+playerName.slice(1)}!\nCongrats on choosing your first pokemon ${currentPokemon.charAt(0).toUpperCase()+ currentPokemon.slice(1)}.\n\nNow where would you like to begin your adventure? \n\n1. Pallet Town (pallet)\n2. Lavender Town (lavender)\n3. Saffron City (saffron)\n4. Pewter City (pewter)\n5. Safari Zone (safari)`);
}

//battle function
function battleFunctions(currentPokemon) {
    display(`What will ${currentPokemon} do?\n1. Fight\n2. Pokemon\n3. Bag\n4. Escape`);
}

//display move list
function showMoveList(pokemonChose) {
    for (i=0;i<pokemonList.length;i++) {
        if (currentPokemon === pokemonList[i].pokemon) {
        display(`1. ${pokemonList[i].moveList[0]}\n2. ${pokemonList[i].moveList[1]}\n3. ${pokemonList[i].moveList[2]}\n4. ${pokemonList[i].moveList[3]}`);
        }
    }
}
//show pokemon belt
function showPokemonBelt(pokemon) {
    if (pokemonBelt=null) {
        display(`You do not have any other pokemon!`)
    } else {
    display(`1. ${pokemonBelt[0]}\n2.${pokemonBelt[1]}`);
}
}
//open bag
function showBag() {
    display(`1. ${bag[0]}\n2. ${bag[1]}`);
}


//start of game
display("What is your name, young trainer?");
console.log(`stage 0 => choose username`)

var inputHappened = function(currentInput){
    stage = questionComplete.length;
    // if (currentInput === "back") {
    //     stage = stage - 1;
    //     questionComplete.pop();
    //     console.log(questionComplete);
    //     console.log(stage);
    // }

//STAGE 1 => Choose Pokemon
    if (stage === 1) {
        console.log(`stage 1 - choose pokemon`);
        playerName = currentInput;
        display(`Welcome to the world of pokemon, ${playerName.charAt(0).toUpperCase()+playerName.slice(1)}! \n\nChoose your starting pokemon: \n1. Bulbasaur \n2. Squirtle\n3. Charmander\n4. Pikachu\n5. Choose a random pokemon for me (random)`);
        console.log(playerName);
        questionComplete.push(playerName);
        console.log(questionComplete);
        document.getElementById('input').value='';
    }

//STAGE 2 => Begin adventure and choose town
    if (stage === 2 && questionComplete[1]===playerName) {
        console.log(`stage 2 choose start town`);
        if (currentInput === 'bulbasaur'||currentInput === 'squirtle'||currentInput === 'charmander'||currentInput === 'pikachu') {
            beginAdventure(currentInput);
            completeQuestion(currentInput);
        } else if (currentInput === 'random') {
            pokemonBelt.push(starterPokemon[Math.floor(Math.random()*7)]);
            display(`Ahh, taking chances I see, ${playerName.charAt(0).toUpperCase()+playerName.slice(1)}!\nCongrats on acquiring your first pokemon ${pokemonBelt[0].charAt(0).toUpperCase()+pokemonBelt[0].slice(1)}!\n\nNow where would you like to begin your adventure? \n\n1. Pallet Town (pallet)\n2. Lavender Town (lavender)\n3. Cinabar Island (cinabar)\n4. Pewter City (pewter)\n5. Safari Zone (safari)`);
            completeQuestion(currentInput);
        } else {
            return;
        }
    }

//STAGE 3 =>
    if (stage === 3 && (questionComplete[2]==="bulbasaur"||questionComplete[2]==="squirtle"||questionComplete[2]==="charmander"||questionComplete[2]==="pikachu"||questionComplete[2]==="random")) {
        console.log("Stage 3");
        if (currentInput.toLowerCase() === "pallet") {
                display(`What better way to start our adventure than from our hometown.\nShould we:\n\n1. Visit cousin Gary\n2. Head up north`);
                completeQuestion();
        } else if (currentInput.toLowerCase() === "lavender") {
                opponentPokemon.push(wildPokemonList[Math.floor(Math.random()*3)]);
                console.log(`first pokemon to fight ${opponentPokemon}`);
                display(`You head up north to Lavender Town.\n\nUpon entering a grass patch, you encounter your first pokemon.\n\nWild ${opponentPokemon[0].charAt(0).toUpperCase()+opponentPokemon[0].slice(1)} appeared!\n\n 1. Fight\n2. Run`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "cinabar") {
            display(`You arrive in Cinabar Island.\nThere is not a soul in sight.\n\nWhat would you do?\n1. Have a drink by the coast (drink)\n2. Surf back to Pallet Town (surf)`);
            completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "pewter") {
            display(`You take a lift from Professor Oak and arrive in Pewter City.\nA huge rock gym stands in front of you.\n\n1. Enter the gym (gym)\n2. Head east towards the cave (cave)`);
            completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "safari") {
            display(`You do not have a safari ticket yet.\n\nGo back to Pallet Town`);
            completeQuestion(currentInput);
        }
    }


//STAGE 4
    if (stage === 4 && questionComplete[3]==="pallet") {
        console.log("Stage 4 pallet town");
        if (currentInput.toLowerCase() === "gary") {
                display(`It's been a long time since you have seen Gary.\n\nGary challenges you to your first pokemon battle.\n\n1. Accept the challenge (accept)\n2. Tell Gary he's wasting your time and head north (north)`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "north") {
                display('You chose north');
                completeQuestion(currentInput);
        }
    }

    if (stage === 4 && questionComplete[3]==="lavender") {
        console.log("Stage 4 lavender town");
        if (currentInput.toLowerCase() === "fight") {
                display(`You sent out ${pokemonBelt}!\n\nWhat will ${pokemonBelt} do?\n1. Fight\n2. Pokemon\n3. Bag\n4. Escape`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "run") {
                display('You ran away');
                completeQuestion(currentInput);
        }
    }

    if (stage === 4 && questionComplete[3]==="cinabar") {
        console.log("Stage 4 cinabar");
        if (currentInput.toLowerCase() === "drink") {
                display(`You reach for your bag and grab a beer by the coast.\n\nAhh tastes great!.`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "surf") {
                display('Find a pokemon with surf.');
                completeQuestion(currentInput);
        }
    }

    if (stage === 4 && questionComplete[3]==="pewter") {
        console.log("Stage 4 pewter");
        if (currentInput.toLowerCase() === "gym") {
                display(`Your level is too low to enter this gym!\n\nCome back when you are level 10.`);
                completeQuestion(currentInput);
        } else if (currentInput.toLowerCase() === "cave") {
                display('On your way to the cave, you see a another pokemon trainer.\n\n1. Challenge trainer to a fight (challenge)\nTake another route to avoid him (avoid)');
                completeQuestion(currentInput);
        }
    }





//STAGE 5
    if (stage === 5 && questionComplete[4]==="fight") {
        console.log("Stage 5");
        if (currentInput === "fight") {
            showMoveList(pokemonBelt);
            // stage = 5.1;
            // if (stage===5.1 && currentInput==="fight") {

            // }
        } else if (currentInput === "pokemon"){
            showPokemonBelt();
            stage = 5.2;
        } else if (currentInput === "bag") {
            showBag();
        } else {
            display(`You ran away safely!`);
        }
        completeQuestion(currentInput);

    }
//user can choose challenge or avoid trainer
    if (stage === 5 && questionComplete[4]==="cave") {
        console.log("Stage 5 to the cave");
        if (currentInput === "challenge") {
                display(`You approach the pokemon trainer.\n\nHe is not interested in having a pokemon battle.\n\n1. Continue on your journey (cont).`);
        } else if (currentInput === "avoid"){
            display(`You take a different route and arrive in the forest.`);
        }
        completeQuestion(currentInput);

    }










    // for (i=0; i < year.length; i++) {
    //     if (parseInt(currentInput) === year[i]) {
    //         console.log("year chose is" + year)
    //         yearChose.push(year[i]);
    //         console.log("year chose is" + year);
    //     }
    // return;
    // }















};