console.log("Loaded");

const previousInputs = [];
let name = "";
const player = [];
const connoisseur = [];
const optionBoard = [['b','s'],['r','i'],['b','f'],['c','s']];
for (let i=0; i<4; i++) {
    connoisseur.push(optionBoard[i][Math.floor(Math.random()*2)]);
    console.log(connoisseur)
};
let score = 0;
const game = (currentInput) => {
    player.push(currentInput);
    match();
    document.getElementById('score').innerText = `Score: ${score}`
}
let step = 0;
const match = () => {
    if (connoisseur[step-2] === player[step-2]) {
        score += 25;
    }
}
const eating = () => {
    displayElement.innerText = `He's eating it...`;
}
const result = () => {
    if (score === 100) {
        displayElement.innerText = `The connoisseur is impressed by you! Congratulations!`
        let img = document.createElement('img');
        img.src = 'burger.jpg';
        document.body.insertBefore(img, document.getElementById('input'));
    } else {
        displayElement.innerText = `Didn't manage to impress the connoisseur, but it still looks delicious! Try again?`
    }
}

// STARTER CODE STARTS HERE
var displayElement = document.querySelector('#output');

document.querySelector('#input').addEventListener('change', function(event){
    var currentInput = event.target.value;
    step++;
    previousInputs.push(currentInput);
    console.log(step);
    // var result = gameMagic(currentInput);
    display(currentInput);
    event.target.value = "";
});

var display = function(currentInput){
    switch (step) {
        case 1:
            name = currentInput;
            displayElement.innerText = `Let's call this ${name}'s burger! Choice of bun?\n\n'b'rioche\n's'ourdough`;
            document.getElementById('title').innerText = `${name.toUpperCase()}'S BURGER`;
            break;
        case 2:
            displayElement.innerText = `What type of lettuce would you use?\n\n'r'omaine\n'i'ceberg`;
            game(currentInput);
            break;
        case 3:
            displayElement.innerText = `What about the patty?\n\n'b'eef\n'c'hicken\n'f'ish`;
            game(currentInput);
            break;
        case 4:
            displayElement.innerText = `Final touch, what type of cheese?\n\n'c'heddar\n's'wiss`;
            game(currentInput);
            break;
        case 5:
            displayElement.innerText = `Serving a portion of ${name}'s burger to the connoisseur...`;
            game(currentInput);
            setTimeout(eating, 2000);
            setTimeout(result, 5000);
            break;
        default:
            displayElement.innerText = `Kitchen on fire!`
    }
};

// var gameMagic = function(currentInput){
//     let textReturned = "";
//     if (step === 1) {
//         player.name = currentInput;
//         textReturned = `Welcome ${player.name}.\n\n'k'nife or 'g'un?`;
//     } else if (step === 2) {
//         switch (currentInput) {
//             case "k":
//                 break;
//             case "g":
//                 break;
//             default:
//                 textReturned = "Broken";
//         }
//     }
//     return textReturned;
// };

// console.log("hello script js");

// code migrated from index.html
// document.querySelector('#input').addEventListener('change', function(event){
//     var currentInput = event.target.value;
//     var output = inputHappened(currentInput);
//     display( output );
//     event.target.value = "";
//     }
// );

// // code migrated from index.html
// var display = function( data ){
//     var output = document.querySelector('#output');
//     output.innerText = data;
// };

// const previousInputs = [];


// // log down number of inouts from player
// let runTime = -1;

// // for user to go back to when they key in something invalid
// let previousInputs = [];

// // randomly returns true or false
// let coinFlip = function() {
//     if (Math.ceil(Math.random()*2) === 2) {
//         console.log(true);
//         return true;
//     } else {
//         console.log(false);
//         return false;
//     };
// };

// // player object
// let player = {
//     name: "",
//     getName: function(){
//         return this.name;
//     }
// };

// // putting all the steps into this object
// let gameBoard = {
//     // after retrieving name
//     step2: function() {
//         return `Doug: "Listen up ${player.name}. You're messing with the wrong guys. If you want to see your friend again, you get me my package back."\n\nget moving / reply`;
//     },
//     // story chunks
//     "get moving": `You struggle to get up, using the light from the phone to get to the door. On the other side of the door, you find yourself in a hotel room. "What was I doing in a closet?", you thought to yourself.\n\ncheck phone / look around`,
//     // story chunks
//     "reply": `"I don't know what you're talking about". You think about hangover cures and how the smell of alcohol was intoxicating last night, yet it adds to the nausea now. Doug replies: "Don't play dumb with me. You dicks were partying so hard, popping bottles. I needed to deliver the package to my dealer and you dicks offered to drive me there, but midway you told me to grab some more booze from the convenience store and just when I got out of the car, you took off with the package. Anyway, you best return it to me before I mess your friend up real good."\n\nget moving / check phone`,
//     // story chunks
//     "check phone": `You look through the phone to get a clue about last night. The last thing you remembered was drinking at the club with Stu and he offered you some pills for preventing hangover...\n\nopen gallery / open messages`,
//     // story chunks
//     "look around": `The room is in a mess. Used condoms lying around, clothes everywhere, pills on the ground. On closer inspection, you realised that this may be the package Doug was talking about. You turn the room upside down looking for the package. Then, you thought of one place, the place you came out of. You look to the closet, staring straight back at you are two things: A gun and the opened package. You take the\n\ngun / package`,
//     // story chunks, needs to work with preEnd
//     "package": [`"It's only right to return what was wrongfully taken. You're responsible that way, `,`", you encourage yourself. `,`You see Doug reaching for his gun. You\n\ntry to fight / run away`],
//     // prelude, result based on coinFlip
//     "try to fight": `You charged at Doug, fighting to get the gun off his hands. `,
//     // prelude to badEnding
//     "run away": `You died.`,
//     // prelude to goodEnding
//     "gun": [`"He's probably going to kill us both if I turn up with just half of the pills. Might as well beat him to the chase", you thought. `,`You pretend to take the package, but you reach for the gun. `],
//     // explanation before ending
//     preEnd: `You made a call to Doug and arranged a meeting. Doug shows up with Stu, tied up and helpless. Stu: "Sorry I lied. Those weren't vitamins. They were drugs! I got them from this guy at the club!" Doug: "You weren't supposed to take them, moron. You were supposed to give them to others. They're roofies, retards!" You: "Untie him first, I'll hand you the package." Doug proceeds to untie Stu. Stu shakes off the ropes and gets up. `,
//     // player died
//     badEnding: `Bang! There's a loud ringing in your ears. Your knees buckled and you hit the ground. Your vision is swimming. A quick flash of darkness envelops the senses as you feel your body shut itself down. \n\nThanks for playing!`,
//     // player won
//     goodEnding: "You shot Doug. Stu runs to the car, starts it up and you hop in. He jams the gas pedal before you can even close the door. Stu and you get out of there as fast as possible.\n\nThanks for playing!",
// };

// // starter code
// var inputHappened = function(currentInput){
//     runTime++;
//     console.log(runTime);
//     previousInputs.push(currentInput);
//     console.log(previousInputs);
//     let result = "skipped past logic circuit";
// // test code
//     if (player.getName() !== "") {
// // prevent user from erroneous inputs
//         switch (gameBoard[currentInput]) {
//             case undefined:
//                 runTime--;
//                 previousInputs.pop();
//                 result = gameBoard[previousInputs[runTime]];
//                 console.log("savePoint ACTIVATED");
//             break;
//             case gameBoard["gun"]:
//                 result = gameBoard["gun"][0] + gameBoard["preEnd"] + gameBoard["gun"][1] + gameBoard.goodEnding;
//             break;
//             case gameBoard["run away"]:
//                 result = gameBoard["badEnding"];
//             break;
//             case gameBoard["package"]:
//                 result = gameBoard["package"][0] + player.getName() + gameBoard["package"][1] + gameBoard["preEnd"] + gameBoard["package"][2];;
//             break;
//             case gameBoard["try to fight"]:
//                 if (coinFlip()) {
//                     result = gameBoard["try to fight"] + gameBoard["goodEnding"];
//                 } else {
//                     result = gameBoard["try to fight"] + gameBoard["badEnding"];
//                 };
//             break;
//             default:
//                 result = gameBoard[currentInput];
//         };
// // step 2
//     } else {
//         player.name = currentInput;
//         result = gameBoard.step2();
//     };
//     console.log(result);
//     return result;
// };






/*
//////// notes ////////

Possible improvements:

Find people and get clues
Go places and get clues
Find items and get clues
Dark room can be anywhere: Wardrobe in a hotel room/Storeroom of a club(bottle opener)/Restaurant kitchen(knife).

Text somebody: (array.pop)if you've texted them before, they won't reply.

Remembering phone number: if correct number will call the correct person, if wrong will call another person and jeopardize your safety.

array of places, accessed by random array index
let places = ["hotel", "restaurant", "club", "back alley", "hotel suite", etc]

Able to fight so thugs, have HP
Array of weapons of varying damage: player{name: "", weapon: {knife: {damage: 5}}, health: 10}

Pop item from array after accessing array, return "there's nothing here..." if undefined.

Complex ending: find out who has your bag of drugs

ASCII image
*/