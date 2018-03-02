// ## Battle System
// - Arithmatic question appears
// - Enemy HP and Hero HP appear
// - Countdown timer starts (KIV)
// - 3 options (1 correct) appear
//     - select options using 1,2,3
// - if correct option selected within time, damage enemy * amplifier
//     - else damage on self * DEF formula
// - if enemy HP = 0
//     - stop game
//     - declare winner
//     - distribute random slimes based on enemy HP
//     - continue with next destination
// - if hero HP = 0
//     - stop game
//     - END GAME page
//     - Try again? 
//     - bring to start of current adventure


/************************
*************************
Battle System
*************************
*************************/
let heroHP = 10;
let enemyHP = 10;

// input: Number, Number
// output: Number
function battleRound(heroHP, enemyHP) {
    while (true) {
        let qna = generateQuestionAndAnswer();
        let question = qna.question;
        let answer = qna.answer;
        let mixedOptions = mixOptions(answer);
        let correctOption = mixedOptions[0];
        let options = mixedOptions[1];
        
        let choice = prompt("Enemy: "+enemyHP + "HP   Hero: " + heroHP+"HP\n\n" +
        "Choose your answer wisely.\n\nWhat is \n\n" + question + " = " + answer + "\n\n" +
        "[1]  " + options[0] + "     [2]  " + options[1] + "     [3]  " + options[2]);
        choice = parseInt(choice) - 1;
        let roundScore = generateScore(answer);
        if (choice === correctOption) {
            enemyHP -= roundScore;
            alert("The ENEMY lost " + roundScore + "HP!\nThe ENEMY has " + enemyHP + "HP remaining.");
            if (enemyHP <= 0) {
                alert("The ENEMY is destroyed!")
                return heroHP;
            }
        }
        else {
            heroHP -= roundScore;
            alert("YOU lost " + roundScore + "HP!\nYou have " + heroHP + "HP remaining.");
            if (heroHP <= 0) {
                alert("YOU have been destroyed!")
                return heroHP;
            }
        }
    }
}

battleRound(heroHP, enemyHP);
/************************
Countdown Timer (KIV)
*************************/
// const readline = require('readline');

// Battle Countdown Timer
// var countdown = 3000;

// console.log("You have " + (countdown/1000).toString().padEnd(2) + "secs left!");
// function updateCountdown() {
//     countdown -= 1000;
//     console.log("You have " + (countdown/1000).toString().padEnd(2) + "secs left!");
// }
// let countdownTimer = setInterval(updateCountdown,1000);
// console.log(countdownTimer._called);
// function endCountdown() {
//     clearInterval(countdownTimer);
//     console.log(countdownTimer._called);
// }
// setTimeout(function() {endCountdown()},3000);

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let test1;
// rl.question('What do you think of Node.js? ', (test) => {
//     // TODO: Log the answer in a database
//     // console.log(`Thank you for your valuable feedback: ${test}`);
//     test1 = test;

//     rl.close();
// });
// console.log(test);
// while (countdownTimer) {
//     console.log("countdownTimer");
// }

/************************
END
*************************/
























/************************
*************************
Question and Answer Generation and Score Calculation
*************************
*************************/

// input: String
// output: {"question": String,
//          "answer": Number}
function generateQuestionAndAnswer(difficulty="normal") {
    // get random number from 1-99
    let numRand1 = Math.floor(Math.random() * 99) + 1;
    let numRand2 = Math.floor(Math.random() * 99) + 1;
    let opRand = ["+","-","*","%"][Math.floor(Math.random() * 4)];
    let question = "" + numRand1.toString() + " " + opRand + " " + numRand2.toString();

    let answer = 0;
    if (opRand === "+") {
        answer = numRand1 + numRand2;
    }
    else if (opRand === "-") {
        answer = numRand1 - numRand2;
    }
    else if (opRand === "*") {
        answer = numRand1 * numRand2;
    }
    else if (opRand === "%") {
        answer = numRand1 % numRand2;
    }
    // console.log(question, "=", answer);

    return {"question": question,
            "answer": answer}
}

// input: Number
// output: [Number,Number]
function generateWrongAnswers(answer) {
    const errorPercent = 30/100;
    let errorRange = Math.ceil(answer*errorPercent);
    const numberWrongAnswers = 2;
    let wrongAns = [0,0];
    for (let i = 0; i < numberWrongAnswers; i++) {
        let offsetSign = Math.floor(Math.random() * 2);
        if (offsetSign === 0) {
            wrongAns[i] = answer - Math.floor(Math.random() * errorRange);
            if (wrongAns[i] === answer) {
                wrongAns[i]--;
            }
        }
        else if (offsetSign === 1) {
            wrongAns[i] = answer + Math.floor(Math.random() * errorRange);
            if (wrongAns[i] === answer) {
                wrongAns[i]++;
            }
        }

    }
    // console.log(wrongAns);
    return wrongAns;
}

// input: Number
// output: Number
// generates an integer score betwee 1-10 (inclusive)
function generateScore(answer) {
    answer = Math.abs(answer);
    while (10 <= answer) {
        answer /= 10;
    }
    console.log(Math.ceil(answer));
    return Math.ceil(answer); 
}

// input: Number
// output: [Number, [Number, Number, Number]
function mixOptions(answer) {
    let options = generateWrongAnswers(answer);
    let ansPosition = Math.floor(Math.random() * 2);
    options.splice(ansPosition,0,answer);
    console.log("Choose your answer wisely");
    console.log("[1] " + options[0] + "   [2] " + options[1] + "   [3] " + options[2])
    return [ansPosition, options];
}