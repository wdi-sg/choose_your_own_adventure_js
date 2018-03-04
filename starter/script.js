let currentHP = 30;
let maxHP = 30;
let numberOfLevels = 10 + Math.floor(Math.random() * 15);
let prevLevels = [];
let name = "";
let weapons = [];
let equippedWeapon = "";
let slimes = 0;
let weaponType = ["Lousy Number Wand","Good Wand","Super Good Wand"];
let weaponInventory = [];
let weaponDamage = {
    "Lousy Number Wand": 1,
    "Good Wand": 2,
    "Super Good Wand": 3
}


/************************
*************************
Main Game
*************************
*************************/
function startGame() {
    name = prompt("What is your name?");
    alert(name+", you are a super smart mathemagician who turns coins into bundles of cash, just using your mind! You have a very unique job - you create cash for your government! (how else can a country get money?)\n\n*Scary Noise* One Tuesday evening, while going back home from work, a mysterious black van stops next to you and abducts you. (The government should have put more protection planned for you right?). Oh no!\n\n");
    
    alert("\"Don't worry "+name+", we aren't bad guys. In fact, we are fellow mathemagicians, but we can only create a few coins from loads of cash. Obviously our mathemagical powers are inferior to yours. Anyways, WE NEED YOU TO SAVE OUR WORLD!\n\nThe secret parallel world, StashOverflow, the place where our powers draw new money from, is under attack by strange smart monsters! Hundreds of us mathemagicians have fallen to these monsters. We now have found you, "+name+", the greatest of us all, to save us! Find the Giant Scroll of Knowledge, which we can use to get rid of all the monsters at once!\"\n\n");

    alert("[Enter Training Centre]");

    alert("*Robotic Voice* Welcome "+name+", thank you for volunteering to be our sacrifice *ahem* I mean Hero. You will be moving around StashOverflow by choosing options listed to you. Occasionally you will meet smart monsters that stop your progress. You must get rid of them in order to move on. In order to get to the Giant Scroll of Knowledge, you will need to know how to use your smartness to get rid of the smart monsters. \n\nIn this training centre, you will learn the basics of fighting to ensure (yea right...) your success! After this training, you will be teleported to the land of StashOverflow, where smart monsters and bosses lurk. We call smart monsters, Smonsters, because it is a smart thing to do.\n\n")

    alert("While I can sense you are a physical weakling, your math skills is all you will need in StashOverflow. In StashOverflow, your mental energy can be channelled to damage Smonsters. The Smonsters can do the same to you though, and remember, the ARE smart. Try not to die. For starters, this is the basic weapon, the \"Lousy Number Wand\", which helps to channel your mental energy.\n\n");
    
    weapons = weapons.concat("Lousy Number Wand");
    equippedWeapon = "Lousy Number Wand";
    weaponInventory = weaponInventory.concat("Lousy Number Wand");

    alert("When in battle, the world of StashOverflow randomly displays math questions and three options as answers. Choosing the right answer within the time limit channels your mental energy to your \"Lousy Number Wand\", which shoots a rainbow laser at the Smonster, damaging them. Weapons such as the \"Lousy Number Wand\" might also amplify the damage done to a Smonster. \n\nIf you select a wrong answer, or are too slow, the Smonster will attack you and you lose HP. We are not sure how damage is really calculated in StashOverflow, but we have a sense that it is related to the actual value of your answers. If you find out, we have bonus questions after you have retrieved the Giant Scroll of Knowledge, to test out your hypothesis (by which you would be super duper smarter right?). Now, fight a bag of harmless potatoes. You won't die in this fight.\n\n");

    battleRound(9999,10);

    alert("Great job on defeating the potato! Now try this baby Smonster we managed to catch in the dustbin! You will only have your normal HP now.");

    battleRound(currentHP,20);

    alert("Great job on defeating the baby Smonster! Time to teleport you StashOverflow!");

    alert("[Teleported to StashOverflow] You are now all alone...");

    mainGame();

    // possible endings
    
    if (currentHP > 0) {
        alert("Congrats! You have slayed the final SUPER BOSS and obtained the Great Scroll of Knowledge! Smonsters don't stand a chance now!");
        alert("On returning to Earth, you find that the Great Scroll of Knowledge gave all humans Mathemagical powers equal to yours./n/nEveryone is a Billionaire now!");
        alert("THE END");
        alert("Hope you enjoyed the game!/n/n" + "Levels completed: " + numberOfLevels + "/nFinal HP: " + currentHP + "/nSlimes: " + slimes + "/nBest weapon: " + equippedWeapon);
    }
}

function mainGame() {
    let levelChoice = 0;
    while (prevLevels.length < numberOfLevels) {
        let generatedLevel = levelGenerator(levelChoice);
        if (generatedLevel === "Smonster") {
            alert("HP: " + currentHP + "/" + maxHP + "   Slimes: " + slimes + "   Weapon: " + equippedWeapon + "\n\n" + "You come face to face with an evil Smonster. Kill it!");
            let enemyHP = 30;
            currentHP = battleRound(currentHP,enemyHP);
            if (currentHP > 0) {
                slimes += enemyHP;
                alert("The Smonster dissolve into slimes.\n\nYou pick up " + enemyHP + " slimes.\n\nTotal slimes in owned: " + slimes);
            }
        }
        else if (generatedLevel === "Mini Boss") {
            alert("HP: " + currentHP + "/" + maxHP + "   Slimes: " + slimes + "   Weapon: " + equippedWeapon + "\n\n" + "You come face to face with an Mini Boss. Kill it!");
            let enemyHP = 75;
            currentHP = battleRound(currentHP,enemyHP);
            if (currentHP > 0) {
                slimes += enemyHP;
                alert("The Mini Boss dissolves into slimes.\n\nYou pick up " + enemyHP + " slimes.\n\nTotal slimes in owned: " + slimes);
            }
        }
        else if (generatedLevel === "Item Store") {
            alert("HP: " + currentHP + "/" + maxHP + "   Slimes: " + slimes + "   Weapon: " + equippedWeapon + "\n\n" + "Welcome to the Item Store. Feel free to give me all your money.");
            let option = prompt("What would you like to buy?/n/n1. Lousy Number Wand (10 Slimes)\n\n2. Good Wand (100 Slimes)/n/n3. Super Good Wand (300 Slimes)/n/nPlease enter an option 1 - 3:/n/n");
            while (!(option === "1" || option === "2" || option === "3")) {
                alert("Please select 1 - 3 only.");
                option = prompt("What would you like to buy?/n/n1. Lousy Number Wand (10 Slimes)\n\n2. Good Wand (100 Slimes)/n/n3. Super Good Wand (300 Slimes)/n/nPlease enter an option 1 - 3:/n/n");
            }
            if (option === "1") {
                slimes -= 10;
                if (slimes >= 0) {
                    alert("Since you already have a Lousy Number Wand, I will replace it with this shiny new one. Use your Lousy Number Wand wisely.");
                    if (!weaponInventory.includes("Lousy Number Wand")) {
                        weaponInventory = weaponInventory.concat("Lousy Number Wand");
                    }
                }
            }
            else if (option === "2") {
                slimes -= 100;
                if (slimes >= 0) {
                    alert("If you already have a Good Wand, I will replace it with this shiny new one. Use your Good Wand wisely.");
                    if (!weaponInventory.includes("Good Wand")) {
                        weaponInventory = weaponInventory.concat("Good Wand");
                    }
                    if (equippedWeapon === "Lousy Number Wand") {
                        equippedWeapon = "Good Wand";
                        alert('Good Wand equipped.');
                    }
                }
            }
            else {
                slimes -= 300;
                if (slimes >= 0) {
                    alert("If you already have a Good Wand, I will replace it with this shiny new one. Use your Lousy Number Wand wisely.");
                    if (!weaponInventory.includes("Super Good Wand")) {
                        weaponInventory = weaponInventory.concat("Super Good Wand");
                    }
                    if (equippedWeapon !== "Super Good Wand") {
                        equippedWeapon = "Super Good Wand";
                        alert('Super Good Wand equipped.');
                    }
                }
            }

            if (slimes < 0) {
                alert("YOU DO NOT HAVE ENOUGH SLIMES. DIE YOU CHEATER!/n/nThe Store owner attacks you for 20 damage and throws you out of the shop.");
                currentHP -= 20;
            }
        }
        else if (generatedLevel === "Forked Path") {
            levelChoice = prompt("HP: " + currentHP + "/" + maxHP + "   Slimes: " + slimes + "   Weapon: " + equippedWeapon + "\n\n" + "You approach a path that splits in two. Should you take the Left or Right path?");
            while (!(levelChoice === "Left" || levelChoice === "Right")) {
                alert("Please select Left or Right only.");
                levelChoice = prompt("You approach a path that splits in two. Should you take the Left or Right path?");
            }
        }
        else if (generatedLevel === "Good Stuff Path") {
            levelChoice = prompt("HP: " + currentHP + "/" + maxHP + "   Slimes: " + slimes + "   Weapon: " + equippedWeapon + "\n\n" + "You have a good feeling today. The path seems to be full of life. You see a sign: \"Go Left to find treasure, or Right to take a swim.\"\n\nDo you go Left or Right?");
            while (!(levelChoice === "Left" || levelChoice === "Right")) {
                alert("Please select Left or Right only.");
                levelChoice = prompt("You see a sign: \"Go Left to find treasure, or Right to take a swim.\"\n\nDo you go Left or Right?");
            }
            if (levelChoice === "Left") {
                levelChoice = 1;
            }
            else if (levelChoice === "Right") {
                levelChoice = 2;
            }
        }
        else if (generatedLevel === "Treasure Room"){
            alert("HP: " + currentHP + "/" + maxHP + "   Slimes: " + slimes + "   Weapon: " + equippedWeapon + "\n\n" + "You see a treasure chest in the shadows.");
            let treasure = weaponType[Math.floor(Math.random() * 3)];
            alert("You open it and find..." + treasure + "!");
            if (weaponInventory.includes(treasure)) {
                alert("You already have this weapon!");
            }
            else if (weaponType.indexOf(treasure) < weaponType.indexOf(equippedWeapon)) {
                alert("This weapon is lousier than your current weapon. You throw it away.");
            }
            else {
                alert("Awesome! A better item. Gonna equip it right now!");
                equippedWeapon = treasure;
            }
        }
        else if (generatedLevel === "Healing Spring") {
            alert("HP: " + currentHP + "/" + maxHP + "   Slimes: " + slimes + "   Weapon: " + equippedWeapon + "\n\n" + "You dive head first into the Healing Spring, only to fracture your skull, and get it healed up immediately. You HP has been fully restored.");
            currentHP = maxHP;
        }
        else if (generatedLevel === "Super Boss") {
            alert("HP: " + currentHP + "/" + maxHP + "   Slimes: " + slimes + "   Weapon: " + equippedWeapon + "\n\n" + "This is the final SUPER BOSS. Kill it to get the Great Scroll of Knowledge!");
            let enemyHP = 100;
            currentHP = battleRound(currentHP,enemyHP);
            if (currentHP > 0) {
                slimes += enemyHP;
                alert("The SUPER BOSS dissolves into slimes.\n\nYou pick up " + enemyHP + " slimes.\n\nTotal slimes in owned: " + slimes);
            }
        }

        if (currentHP <= 0) {
            alert("You have died :'(  \n\n...restart the browser to start again.");
            break;
        }
    }
}

/************************
*************************
Level Generation
*************************
*************************/

// input nil
// output String
function levelGenerator(levelChoice) {
    let roomTypes = [
        "Treasure Room",
        "Smonster",
        "Mini Boss",
        "Healing Spring",
        "Item Store",
        "Forked Path",
        "Good Stuff Path"
    ]
    if (prevLevels.length + 1 === numberOfLevels) {
        prevLevels = prevLevels.concat("Super Boss");
        return "Super Boss";
    }
    else if (prevLevels.length + 1 === 1) {
        let nextLevel = ["Smonster","Forked Path"][Math.floor(Math.random() * 2)];
        prevLevels = prevLevels.concat(nextLevel);
        return nextLevel;
    }
    else if (prevLevels[prevLevels.length - 1] === "Forked Path") {
        let nextLevel = ["Smonster","Forked Path"][Math.floor(Math.random() * 2)];
        prevLevels = prevLevels.concat(nextLevel);
        return nextLevel;
    }
    else if (prevLevels[prevLevels.length - 1] === "Good Stuff Path") {
        if (levelChoice === 1) {
            let nextLevel = "Treasure Room";
            prevLevels = prevLevels.concat(nextLevel);
            return nextLevel;
        }
        else if (levelChoice === 2) {
            let nextLevel = "Healing Spring";
            prevLevels = prevLevels.concat(nextLevel);
            return nextLevel;
        }
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

// heroHP = battleRound(heroHP, enemyHP);


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

startGame();





















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