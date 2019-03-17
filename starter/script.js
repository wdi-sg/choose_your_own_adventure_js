alert("You went to sleep and it seems like you are unable to wake up!!! \nAnswer the questions to leave your nightmares full of GHOSTS!")
var score = 0;
var name = prompt("Enter your name!").toUpperCase();

while (true) {
    var choice = Number(prompt("Enter 1 to Earn Points! \nEnter 2 to Fight the Ghosts using the points you have earned! \nEnter 0 to Exit Game"));
    if (choice === 1) {
        alert(`You see three doors with "WELCOME ${name}!" printed on it with blood... Choose the door you want to escape from!`);

        var doorChoice = prompt("Open the BLUE, RED, or GREEN door").toLowerCase();

        if (doorChoice === "red") {
            score = 0;
            alert(`"AAAHHHHHHH!" \nYou entered a room full of ghosts and were killed! GAME OVER \nScore: ${score}`);
            break;

        } else if (doorChoice === "blue") {
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

            var blueScore = checkMatch(numArray, ansNumArray);   // how many points user earned from guessing
            if (blueScore === 0) {
                alert(`YOU FAILED! GAME OVER \nSCORE: ${blueScore}`);
                break
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

                var blueScore = checkMatch(letterArray, ansLetterArray);
                if (blueScore === 0) {
                    alert(`YOU FAILED! GAME OVER \nSCORE: ${blueScore}`);
                    break;
                } else {
                 alert(`CONGRATS! \nYou earned ${blueScore} point from guessing the sequence correctly. \nCurrent Score: ${score}`);
                } // end of letter game
            }// end of game choice

        } else if (doorChoice === "green") {   // end of roomchoice == blue
            var randomWord = "three".toLowerCase()  //  programmer can change the word
            alert(`WHAT?!! The door is locked! \nHurry ${name}! Try to decode to unlock the door! \n\n\nHint: The letter A has a position of 1 in the human world but a position of 26 in your nightmare.`)

            //  encode the correct word first
            var encodeWord = encode(randomWord);   // why it goes through the first time but not the second time?!
            var decodeGuess = prompt(`Try to decode this word: ${encodeWord}`).toLowerCase();

            if (decodeGuess === randomWord) {
                var decodeScore = 3;
                score += decodeScore;
                alert(`WOW! The door opened! \nYou earned ${decodeScore} points. \nCurrent Score: ${score}`);

            } else {
                var secondDecodeGuess = prompt(`It's incorrect! Enter word to try again --- \nTry to decode this word: ${encodeWord} \n`).toLowerCase();

                if (secondDecodeGuess === randomWord) {
                    var decodeScore = 2;
                    score += decodeScore;
                    alert(`Yey, finally! The door opened! \nYou earned ${decodeScore} points. \nCurrent Score: ${score}`);

                } else {
                    var thirdDecodeGuess = prompt(`OH NO! LAST CHANCE! Enter word to try again --- \nTry to decode this word: ${encodeWord} \n`).toLowerCase();

                    if (thirdDecodeGuess === randomWord) {
                        var decodeScore = 1;
                         score += decodeScore;
                         alert(`FINALLY but THREE times?! \nIt's ok, you still earned ${decodeScore} point. \nCurrent Score: ${score}`);

                    } else {
                        score += 0;
                        alert(`GOODBYE ${name}! You took too long to unlock the door! You were killed by the ghosts --- GAME OVER \nSCORE: ${score}`);
                        break;
                    }  // end of third guess
                }  // end of second guess

            }  // end of room choice = green
        }
    } else if (choice === 2) {
        var ghostPoints = Math.floor((Math.random() * 10) + 1);
        console.log(ghostPoints);
        // compare ghost points and current score
        if (ghostPoints > score) {
            alert(`YOU ARE DEAD! You are not strong enough to fight the ghosts! \nGAME OVER \nYou can't fight a ${ghostPoints} with a ${score}`)
            break;
        } else if (ghostPoints < score) {
            alert(`CONGRATS!!!! YOU WIN!!! \nYou managed to kill all the ghosts and wake up from your sleep with a beautiful dream instead of a nightmare!`);
            break;
        } else if (ghostPoints === score) {
            alert(`WAIT! You're as strong as the ghosts. Try again`);
        }

    } else if (choice === 0) {
        alert(`It seems like you managed to force yourself to wake up! Goodbye, ${name}~! \nTotal score: ${score}`);
        break;
    }  // end of main game choice
}  // end of while loop