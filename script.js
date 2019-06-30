console.log("hello script js");

//declare global variables
var playerName = null;
var starterPokemon = ["bulbasaur", "squirtle", "charmander", "pikachu", "charizard", "blastoise", "venasaur"];
var pokemonChose = [];
var opponentPokemonList = ["caterpie", "rattata","butterfree"];
var opponentPokemon = [];
var questionComplete = [];
var stage = 0;


//storyline functions
function beginAdventure(currentInput) {
    pokemonChose.push(currentInput.charAt(0).toUpperCase()+currentInput.slice(1))
    console.log(`Player chose ${pokemonChose}`);
    display(`Great choice, ${playerName}!\nCongrats on choosing your first pokemon ${pokemonChose[0].charAt(0).toUpperCase()+pokemonChose[0].slice(1)}.\n\nNow where would you like to begin your adventure? \n\n1. Pallet Town (pallet)\n2. Lavender Town (lavender)\n3. Saffron City (saffron)\n4. Pewter City (pewter)\n5. Safari Zone (safari)`);
    questionComplete.push(2);
    console.log(`stage ${stage} complete`)
    document.getElementById('input').value='';
}

function pokemonBattle(currentInput) {

}

//start of game
display("What is your name, young trainer?");

var inputHappened = function(currentInput){
    stage = questionComplete.length + 1;
    console.log("question now is " +questionComplete);
    //when user enters name, give choices of pokemon to choose from
//STAGE 1 => Choose Pokemon
    if (stage === 1) {
        display(`Welcome ${currentInput.charAt(0).toUpperCase()+currentInput.slice(1)}! \n\nChoose your starting pokemon: \n1. Bulbasaur \n2. Squirtle\n3. Charmander\n4. Pikachu\n5. Choose a random pokemon for me (random)`);
        playerName = (currentInput.charAt(0).toUpperCase()+currentInput.slice(1));
        console.log(playerName);
        questionComplete.push(1);
        document.getElementById('input').value='';
        console.log(stage + " stage complete");
    }

//STAGE 2 => Begin adventure and choose town
    // //run beginAdventure function after player chooses start pokemon
    if (stage === 2 && questionComplete[0]===1) {
        console.log("question now is " +questionComplete);
        if (currentInput === 'bulbasaur') {
            beginAdventure(currentInput);
        } else if (currentInput === 'squirtle') {
            beginAdventure(currentInput);
        } else if (currentInput === 'charmander') {
            beginAdventure(currentInput);
        } else if (currentInput === 'pikachu') {
            beginAdventure(currentInput);
        } else if (currentInput === 'random') {
            pokemonChose.push(starterPokemon[Math.floor(Math.random()*7)]);
            display(`Ahh, taking chances I see, ${playerName}!\nCongrats on acquiring your first pokemon ${pokemonChose[0].charAt(0).toUpperCase()+pokemonChose[0].slice(1)}!\n\nNow where would you like to begin your adventure? \n\n1. Pallet Town (pallet)\n2. Lavender Town (lavender)\n3. Saffron City (saffron)\n4. Pewter City (pewter)\n5. Safari Zone (safari)`);
            questionComplete.push(2);
            console.log(`stage ${stage} complete`);
            document.getElementById('input').value='';
        } else {
            return;
        }
    }

//STAGE 3
    if (stage === 3 && questionComplete[1]===2) {
        console.log("Q3");
        if (currentInput.toLowerCase() === "pallet") {
                display(`What better way to start our adventure than from our hometown.\nShould we:\n\n1. Visit cousin Gary\n2. Head up north`);
                questionComplete.push(3);
                console.log(stage + " stage complete");
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "lavender") {
                opponentPokemon.push(opponentPokemonList[Math.floor(Math.random()*3)]);
                console.log(`first pokemon to fight ${opponentPokemon}`);
                display(`You head up north to Lavender Town.\n\nUpon entering a grass patch, you encounter your first pokemon, ${opponentPokemon[0].charAt(0).toUpperCase()+opponentPokemon[0].slice(1)}!\n\n 1. Fight\n2. Run`);
                questionComplete.push(4);
                console.log(stage + "stage complete");
                document.getElementById('input').value='';
        }
    }


//STAGE 4
    if (stage === 4 && questionComplete[2]===3) {
        console.log("Stage 3 Gary Path");
        if (currentInput.toLowerCase() === "gary") {
                display(`It's been a long time since you have seen Gary.\n\nGary challenges you to your first pokemon battle.\n\n1. Accept the challenge (accept)\n2. Tell Gary he's wasting your time and head north (north)`);
                questionComplete.push(4);
                console.log(stage + "stage complete");
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "north") {
                display('You chose north');
                questionComplete.push(5);
                console.log(questionComplete + "question complete");
                document.getElementById('input').value='';
        }
    }

    if (stage === 4 && questionComplete[2]===3) {
        console.log("Stage 3 Gary Path");
        if (currentInput.toLowerCase() === "gary") {
                display(`It's been a long time since you have seen Gary.\n\nGary challenges you to your first pokemon battle.\n\n1. Accept the challenge (accept)\n2. Tell Gary he's wasting your time and head north (north)`);
                questionComplete.push(4);
                console.log(stage + "stage complete");
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "north") {
                display('You chose north');
                questionComplete.push(5);
                console.log(questionComplete + "question complete");
                document.getElementById('input').value='';
        }
    }

//STAGE 5
    if (stage === 5 && questionComplete[3]===4) {
        console.log("Q5");
        if (currentInput.toLowerCase() === "fight") {
                display(`Fight`);
                questionComplete.push(5);
                console.log(questionComplete + "question complete");
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "run") {
                display('You want to run');
        }
    }

    if (stage === 5 && questionComplete[3]===5) {
        console.log("Q5");
        if (currentInput.toLowerCase() === "fight") {
                display(`Fight`);
                questionComplete.push(5);
                console.log(questionComplete + "question complete");
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "run") {
                display('You want to run');
        }
    }







    // for (i=0; i < year.length; i++) {
    //     if (parseInt(currentInput) === year[i]) {
    //         console.log("year chose is" + year)
    //         yearChose.push(year[i]);
    //         console.log("year chose is" + year);
    //     }
    // return;
    // }

    //if user chooses 1, give two choices of characters to deal wth














};