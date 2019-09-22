console.log("Working")

var sequence = 0;

var playerName = prompt("Hello! Welcome to your river adventure. Please enter your name. ", "Tiffany")

function nextSequence() {
    sequence++;
}

function backSequence() {
    sequence--;
}

function badEnding() {
    sequence = 0;
    return "You return to your life and continue making the best butter in your town. However, no one is happy with how you've handled things. You dream every night of how you could've done things differently. \n\nClick the button below to play again."
}

function dead() {
    sequence = 0;
    return "You've drowned in the river. Click the button below to play again."
}

var bookshelf = {
    "The Almanack": "The Almanack is an annual publication listing a set of events forthcoming in the next year.",
    "Diseases of the Sheep": "A book full of cures for ailments of sheep, with handwritten notes in the margins, many of them involving turpentine, a good cussin' or a kick.",
    "Flowers of the Chalk": "Flowers of the Chalk is a thin book with coloured in pictures of flowers.",
    "The Goode Childe's Booke of Faerie Tales": "The Goode Childe's Booke of Faerie Tales is an old book from a time where there were far more 'e's around. \n\nJackpot! You find a description of the river monster inside, a Jenny Green-teeth, whose weakness is iron.",
    "Farm Diary": "The Farm Diary is a book on the farm you have to write in yourself, and includes entries about dairy."
}

function changeImg(){
    if (sequence === 2) {
    document.getElementById("y").src="ginny.jpg"
}
}
function beginAdventure() {
    if (sequence === 0) {
        var output = `You are ${playerName} Aching, a 9-year old girl.\n\nToday, you're lying by the river, tickling trout. Your perpetually sticky brother, Wentworth, is a little way away, messing around with a stick.\n\nA little blue man is floating on the river, in a round basket. He waves a fist at you and is shouting: \n "Crivens! Gang awa' oot o' here, ye daft wee hinny! 'Ware the green heid!" \n\n Do you stay to see what the 'green heid' is or run away immediately?`;
        nextSequence();
        display(output);
    }
}

beginAdventure();

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (sequence === 1 && currentInput.includes("stay")) {
    output = `The water begins to bubble and gets darker, greener, and somehow, much deeper. Long skinny arms are coming out of the water! \n\nDo you try to grab the arms or step backwards?`;
    nextSequence();
    return output;
} else if (sequence === 1 && currentInput.includes("run")) {
    output = `You get away safely! But as you run back towards your home, you remember you've left your brother behind. Oops! He has probably been eaten by the monster in the river. \n\n ${badEnding()}`;
    return output;
} else if (sequence === 2 && currentInput.includes("grab")) {
    output = `The arms are much stronger than you think and you've been pulled into the water.\n\n ${dead()}`;
    changeImg();
    return output;
} else if (sequence === 2 && currentInput.includes("step")) {
    output = `A thin face with long sharp teeth, huge round eyes and dripping green hair like water-weed bursts out of the river. The arms claw madly at the riverbank where you were a moment ago. You run to your brother, picking him up just out of reach from the river monster. You are both safe for the moment!\n\nDo you pick up a stick on the riverbank to use as a weapon, or return to Home Farm before doing something else?`;
    nextSequence();
    changeImg();
    return output;
} else if (sequence === 3 && (currentInput.includes ("stick") || currentInput.includes("pick"))) {
    output = `You return to the spot where the monster had emerged, with your stick ready. The water looks as if it is boiling, and the green head plunges out. You poke it, hard! The monster turns its saucer-like face towards you, unaffected by the stick, and drags you into the river. \n\n${dead()}`;
    return output;
} else if (sequence === 3 && currentInput.includes("return")) {
    output = `You return to Home Farm with your brother, wondering what you should do about the monster in the river. \n\nDo you pretend you saw nothing? Or do you take action, because no monster is going to come onto your territory and live?!`;
    nextSequence();
    return output;
} else if (sequence === 4 && (currentInput.includes("pretend")) || currentInput.includes("nothing")) {
    output = badEnding();
    return output;
} else if (sequence === 4 && currentInput.includes("action")) {
    output = "Go to bookshelf to research or grab a weapon?"
    nextSequence();
    return output;
// haven't written the if for broomstick
} else if (sequence === 5 && currentInput.includes("bookshelf")) {
output = `The books on the shelf are ${(Object.keys(bookshelf).join(', '))}. \n\nEnter the full title of the book you want to read.`
nextSequence();
return output;
} else if (sequence === 6 && currentInput.includes("Almanack")) {
    output =`${bookshelf[currentInput]} \n\nLook at a different book? The books on the shelf are ${(Object.keys(bookshelf).join(', '))}.`;
    return output;
} else if (sequence === 6 && currentInput === "Diseases of the Sheep") {
    output =`${bookshelf[currentInput]} \n\nLook at a different book? The books on the shelf are ${(Object.keys(bookshelf).join(', '))}.`;
    return output;
} else if (sequence === 6 && currentInput === "Flowers of the Chalk") {
    output =`${bookshelf[currentInput]} \n\nLook at a different book? The books on the shelf are ${(Object.keys(bookshelf).join(', '))}.`;
    return output;
} else if (sequence === 6 && currentInput === "The Goode Childe's Booke of Faerie Tales") {
    output =`${bookshelf[currentInput]} \n\nNow choose a weapon. Broomstick or cast iron pan?`
    nextSequence();
    return output;
} else if (sequence === 6 && currentInput === "Farm Diary") {
    output =`${bookshelf[currentInput]} \n\nLook at a different book? The books on the shelf are ${(Object.keys(bookshelf).join(', '))}.`;
    return output;
} else if (sequence === 7 ) {
    return "IM POOPED"
// STOPPED HERE. update with if statement for broomstick or cast iron pan, write battle sequence with Jenny, include HP??? and damage???
} else return "You've said something wrong. Try again.";
}