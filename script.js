console.log("hello script js");

//declare 5 choices user has to choose from
var starterPokemon = ["bulbasaur", "squirtle", "charmander", "pikachu", "charizard", "blastoise", "venasaur"];
var pokemonChose = [];
var question = 0;
var questionComplete = [];
var playerName = null;

display("What is your name");

function beginAdventure(currentInput) {
    console.log(pokemonChose);
    display(`Great choice, ${playerName}!\nCongrats on choosing your first pokemon ${pokemonChose[0].charAt(0).toUpperCase()+pokemonChose[0].slice(1)}.\n\nWhere would you like to begin your adventure? \n\n1. Pallet Town \n2. Lavender Town\n3. Saffron City`);
    questionComplete.push(2);
    console.log(questionComplete + "question complete");
    document.getElementById('input').value='';
}


var inputHappened = function(currentInput){
    question = questionComplete.length + 1;
    console.log("question now is " +question);
    //when user enters name, give 5 choices of year to go to
    if (question === 1) {
        display(`Welcome ${currentInput.charAt(0).toUpperCase()+currentInput.slice(1)}! \n\nChoose your starting pokemon: \n1. Bulbasaur \n2. Squirtle\n3. Charmander\n4. Pikachu\n5. Choose a random pokemon for me!`);
        playerName = (currentInput.charAt(0).toUpperCase()+currentInput.slice(1));
        console.log(playerName);
        questionComplete.push(1);
        console.log(questionComplete + "question complete");
        document.getElementById('input').value='';
    }

    // //return messages for diff year choices
    if (question === 2) {
        console.log("question now is " +question);
        if (currentInput === 'bulbasaur') {
            pokemonChose.push("bulbasaur")
            beginAdventure(currentInput);
        } else if (currentInput === 'squirtle') {
            beginAdventure();
        } else if (currentInput === 'charmander') {
            beginAdventure();
        } else if (currentInput === 'pikachu') {
            beginAdventure();
        } else if (currentInput === 'random') {
            pokemonChose.push(starterPokemon[Math.floor(Math.random()*7)]);
            display(`Ahh, taking chances I see, ${playerName}!\nCongrats on acquiring your first pokemon ${pokemonChose[0].charAt(0).toUpperCase()+pokemonChose[0].slice(1)}!\n\nNow where would you like to begin your adventure? \n\n1. Pallet Town \n2. Lavender Town\n3. Saffron City`);
            questionComplete.push(2);
            console.log(questionComplete + "question complete");
            document.getElementById('input').value='';

        } else {
            return;
        }
    }

    if (question === 3) {
        console.log("Q3");
        if (currentInput.toLowerCase() === "pallet town") {
                display(`Ahh what better way to start our adventure than from our hometown.\nShould we:\n\n1. Visit cousin Gary\n2. Head up north`);
                questionComplete.push(3);
                console.log(questionComplete + "question complete");
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "lavender town") {
                display('You chose right');
        }
    }

    if (question === 4) {
        console.log("Q4");
        if (currentInput.toLowerCase() === "gary") {
                display(`It's been a long time since you have seen Gary.\nGary challenges you to your first pokemon battle.\n\n1. Accept the challenge\n2. Tell Gary he's wasting your time and head north`);
                questionComplete.push(4);
                console.log(questionComplete + "question complete");
                document.getElementById('input').value='';
        } else if (currentInput.toLowerCase() === "lavender town") {
                display('You chose right');
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