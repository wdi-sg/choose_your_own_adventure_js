let heroHP = 10;
let numberOfLevels = 10 + Math.floor(Math.random() * 15);
let prevLevels = [];

// ## Level Generation Rules
// - random selection of levels (between 10 and 25, unreported to user)
// - at least 1 Smonster in first 3 levels
// - Item and Stats stores appear after 7 levels
// - Each Mini boss must be preceded by at least 3 Smonsters
// - Super boss appears at the end only
// - random generation of levels based on above rules

// ### 7 Destinations
// - Treasure room
// - Smonster
// - Mini boss
// - Super boss
// - Healing spring
// - Item store
// - Stats store
// - Default Left/Right choice
// - I smell something nice Left/Right choice for Treasure,Item,Stats,Healing Spring; else any other based on rules

/************************
*************************
Level Generation
*************************
*************************/

// input nil
// output String


function levelGenerator() {
    let roomTypes = [
        "Treasure Room",
        "Smonster",
        "Mini Boss",
        "Healing Spring",
        "Item Store",
        "Stats Store",
        "Forked Path",
        "Good Stuff Path"
    ]
    if (prevLevels.length + 1 === numberOfLevels) {
        prevLevels = prevLevels.concat("Super Boss");
        return "Super Boss";
    }
    else if (prevLevels.length + 1 === 1) {
        prevLevels = prevLevels.concat("Forked Path");
        return "Forked Path";
    }
    else if (prevLevels[prevLevels.length - 1] === "Forked Path") {
        let nextLevel = ["Smonster","Forked Path"][Math.floor(Math.random() * 2)];
        prevLevels = prevLevels.concat(nextLevel);
        return nextLevel;
    }
    else {
        let nextLevel = roomTypes[Math.floor(Math.random() * roomTypes.length)];
        prevLevels = prevLevels.concat(nextLevel);
        return nextLevel;
    }
}







/************************
*************************
Battle System
*************************
*************************/
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

heroHP = battleRound(heroHP, enemyHP);
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