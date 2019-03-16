alert("You went to sleep and it seems like you are unable to wake up!!! \nAnswer the questions to leave your nightmares full of GHOSTS!")
var score = 0;

var name = prompt("Enter your name!").toUpperCase();
alert(`You see three rooms with "WELCOME ${name}!" printed on the door with blood... Choose the room you want to enter!`);

var roomChoice = prompt("Enter the BLUE, RED, or GREEN room").toLowerCase();

if (roomChoice === "red") {
    score = 0;
    alert(`"AAAHHHHHHH!" \nYou entered a room full of ghosts and were killed! GAME OVER \nScore: ${score}`);

} else if (roomChoice === "blue") {
    score += 1;   // because you entered the correct room, points + 1
    alert(`Hello, ${name}! Welcome to the room where you can earn points to fight the ghosts! \nEnter 3 characters and get your reward! \nCurrent Score: ${score}`)

    var gameChoice = prompt(`Do you want to enter Numbers or Letters? (N / L)`).toLowerCase();
    if (gameChoice === "n") {
    // ask user for number that wants to be shuffled
    var numArray = promptNStore("number");   // this is an array
    console.log("Ori array: " + numArray);

    // randomise the order of the current array
    numArray = shuffle(numArray);
    console.log("Shuffled array: " + numArray);

    alert("OH NO!!! The ghosts jumbled up the sequence! \nTIME TO GUESS THE ORDERS CORRECTLY!");

    // ask user to guess order and make an array
    var ansNumArray = promptNStore("order");
    console.log("Ans array: " + ansNumArray);

    blueScore = checkMatch(numArray, ansNumArray);   // how many points user earned from guessing
    if (blueScore === 0) {
        alert(`YOU FAILED! GAME OVER \nSCORE: ${blueScore}`);
    } else {
        score += blueScore;
     alert(`CONGRATS! \nYou earned ${blueScore} point from guessing the sequence correctly. \nCurrent Score: ${score}`);
    } // end of number game

    } else if (gameChoice === "l") {
        // ask user for letters that wants to be shuffled
        var letterArray = promptLStore("letter");
        console.log("Ori array: " + letterArray);

        // shuffle letter array
        letterArray = shuffle(letterArray);
        console.log("Shuffled array: " + letterArray);

        alert("OH NO!!! The ghosts jumbled up the sequence! \nTIME TO GUESS THE ORDERS CORRECTLY!");

        // ask user to guess order and make an array
        var ansLetterArray = promptLStore("order");
        console.log("Ans array: " + ansLetterArray);

        blueScore = checkMatch(letterArray, ansLetterArray);
        if (blueScore === 0) {
            alert(`YOU FAILED! GAME OVER \nSCORE: ${blueScore}`);
        } else {
         alert(`CONGRATS! \nYou earned ${blueScore} point from guessing the sequence correctly. \nCurrent Score: ${score}`);
        } // end of letter game
    }// end of game choice

} else if (roomChoice === "green") {   // end of roomchoice == blue
    var randomWord = "three".toLowerCase()  //  programmer can change the word
    alert(`WHAT?!! The door is locked! \nHurry ${name}! Try to decode to unlock the door! \n\n\nHint: The letter A has a position of 1 in the human world but a position of 26 in your nightmare.`)

    //  encode the correct word first
    var encode = encode(randomWord);
    // console.log(encode);
    var decodeGuess = prompt(`Try to decode this word: ${encode}`).toLowerCase();

    if (decodeGuess === randomWord) {
        var decodeScore = 3;
        score += decodeScore;
        alert(`WOW! The door opened! \nYou earned ${decodeScore} points. \nCurrent Score: ${score}`);

    } else {
        var secondDecodeGuess = prompt(`It's incorrect! Enter word to try again --- \nTry to decode this word: ${encode} \n`).toLowerCase();

        if (secondDecodeGuess === randomWord) {
            var decodeScore = 2;
            score += decodeScore;
            alert(`Yey, finally! The door opened! \nYou earned ${decodeScore} points. \nCurrent Score: ${score}`);

        } else {
            var thirdDecodeGuess = prompt(`OH NO! LAST CHANCE! Enter word to try again --- \nTry to decode this word: ${encode} \n`).toLowerCase();

            if (secondDecodeGuess === randomWord) {
                var decodeScore = 1;
                 score += decodeScore;
                 alert(`FINALLY but THREE times?! \nIt's ok, you still earned ${decodeScore} point. \nCurrent Score: ${score}`);

            } else {
                score += 0;
                alert(`GOODBYE ${name}! You took too long to unlock the door! You were killed by the ghosts --- GAME OVER \nSCORE: ${score}`);
            }
        }

    }

}