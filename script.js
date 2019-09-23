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

function changeBook() {
    return `Look at a different book? The books on the shelf are ${(Object.keys(bookshelf).join(', '))}.`
}

function changeGinnyImg(){
    document.getElementById("y").src="ginny.jpg"
}

function changePowerImg(){
    document.getElementById("y").src="tiffany-iron-pan.png"
}

function changeParrot() {
    document.getElementById("y").src="https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif"
}

var chance = Math.floor(Math.random() * 100)

function oops() {
    if (chance < 2) {
        changeGinnyImg();
        return `Unfortunately, today is not your day and the creature in the water is impervious to iron and the pan bounces gently off. It turns on you, seemingly annoyed by the situation and drags you into the water. ${dead()}`
    } else {
        changePowerImg();
        nextSequence();
        return `The creature hangs there for a moment, a few teeth and bits of green weed splashing into the water, then slides down slowly and sinks with massive bubbles. \n\nSecret hint: press enter`
    }
}

function beginAdventure() {
    if (sequence === 0) {
        var output = `You are ${playerName} Aching, a 9-year old girl.\n\nToday, you're lying by the river, tickling trout. Your perpetually sticky brother, Wentworth, is a little way away, messing around with a stick.\n\nA little blue man is floating on the river, in a round basket. He waves a fist at you and is shouting: "Crivens! Gang awa' oot o' here, ye daft wee hinny! 'Ware the green heid!" \n\n Do you stay to see what the 'green heid' is or run away immediately?`;
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
    changeGinnyImg();
    return output;
} else if (sequence === 2 && currentInput.includes("step")) {
    output = `A thin face with long sharp teeth, huge round eyes and dripping green hair like water-weed bursts out of the river. The arms claw madly at the riverbank where you were a moment ago. You run to your brother, picking him up just out of reach from the river monster. You are both safe for the moment!\n\nDo you pick up a stick on the riverbank to use as a weapon, or return to Home Farm before doing something else?`;
    nextSequence();
    return output;
} else if (sequence === 3 && (currentInput.includes ("stick") || currentInput.includes("pick"))) {
    output = `You return to the spot where the monster had emerged, with your stick ready. The water looks as if it is boiling, and the green head plunges out. You poke it, hard! The monster turns its saucer-like face towards you, unaffected by the stick, and drags you into the river. \n\n${dead()}`;
    changeGinnyImg();
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
} else if (sequence === 5 && currentInput.includes("weapon")) {
    output = `You grab a broomstick and return to the spot where the monster had emerged, with your broomstick ready. The water looks as if it is boiling, and the green head plunges out. You whack it, hard! The monster turns its saucer-like face towards you, unaffected by the broomstick, and drags you into the river. \n\n${dead()}`;
    changeGinnyImg();
    return output;
} else if (sequence === 5 && currentInput.includes("bookshelf")) {
output = `The books on the shelf are ${(Object.keys(bookshelf).join(', '))}. \n\nEnter the full title of the book you want to read. \n\nHint: copy and paste it in`
nextSequence();
return output;
} else if (sequence === 6 && currentInput.includes("Almanack")) {
    output =`${bookshelf[currentInput]} \n\n${changeBook()}`;
    return output;
} else if (sequence === 6 && currentInput === "Diseases of the Sheep") {
    output =`${bookshelf[currentInput]} \n\n${changeBook()}`;
    return output;
} else if (sequence === 6 && currentInput === "Flowers of the Chalk") {
    output =`${bookshelf[currentInput]} \n\n${changeBook()}`;
    return output;
} else if (sequence === 6 && currentInput === "The Goode Childe's Booke of Faerie Tales") {
    output =`${bookshelf[currentInput]} \n\nNow choose a weapon. Broomstick or cast iron pan?`
    nextSequence();
    return output;
} else if (sequence === 6 && currentInput === "Farm Diary") {
    output =`${bookshelf[currentInput]} \n\n${changeBook()}`;
    return output;
} else if (sequence === 7 && (currentInput.includes("iron") || currentInput.includes("pan"))) {
    output = `You grab the cast iron pan and head out to teach that Jenny Green-teeth a lesson. \n\nYou hide behind a bush, using your brother as bait by the riverside. As you watch the water, it begins to churn and a thin face with long sharp teeth, huge round eyes and dripping green hair like water-weed bursts out of the river, screaming. You run out and swing the cast iron pan, the pan meeting its mark with the oiyoiyoioioioioioioinnnnnngggggg of a clang well done. \n\n${oops()}`
    return output;
} else if (sequence === 7 && currentInput.includes("broomstick")) {
    output = `You grab a broomstick and return to the spot where the monster had emerged, with your broomstick ready. The water looks as if it is boiling, and the green head plunges out. You whack it, hard! The monster turns its saucer-like face towards you, unaffected by the broomstick, and drags you into the river. \n\n${dead()}`;
    changeGinnyImg();
    return output;
} else if (sequence === 8) {
    changeParrot();
    output = "You've succeeded! You've managed to defeat the monster and keep your territory safe for another day."
    return output;
} else return "You've entered something wrong. Click below to play again.";
}