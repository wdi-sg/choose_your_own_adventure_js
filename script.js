console.log("hello script js");

//declare 5 choices user has to choose from
var starterPokemon = ["bulbasaur", "squirtle", "charmander", "pikachu", "random1", "random2", "random3"];
var question = 0;
var questionComplete = [];
var playerName = null;

display("What is your name");

var inputHappened = function(currentInput){
    question = questionComplete.length + 1;
    console.log("question now is " +question);
    //when user enters name, give 5 choices of year to go to
    if (question === 1) {
        display(`Welcome ${currentInput}! \nChoose your starting pokemon \n1. Bulbasaur \n2. Squirtle\n3. Charmander\n4. Pikachu\n5. Choose a random pokemon for me!`);
        playerName = (currentInput);
        console.log(playerName);
        questionComplete.push(1);
        console.log(questionComplete + "question complete");
        document.getElementById('input').value='';
    }

    // //return messages for diff year choices
    if (question === 2) {
        console.log("question now is " +question);
        if (currentInput === 'bulbasaur') {
            display(`You chose ${currentInput} \n\n1. Go Left \n2. Go Right`);
            questionComplete.push(1);
            console.log(questionComplete + "question complete");
            document.getElementById('input').value='';
        } else if (currentInput === 'squirtle') {
            display(`WHAT?! ${currentInput}`)
        } else {
            return;
        }
    }

    if (question === 3) {
        console.log("Q3");
        if (currentInput.toLowerCase() === "left") {
                display('what!');
        } else if (currentInput === "right") {
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