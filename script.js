
// Declaring global variables
let playerName;

let sceneText = document.getElementById("sceneArea");
let startButton = document.getElementById("start");
let proceedButton = document.getElementById("proceed");
let tryAgainButton = document.getElementById("tryAgain")
let option1Button = document.getElementById("option1");
let option2Button = document.getElementById("option2");
let option3Button = document.getElementById("option3");

// Prompt the user to enter a name. Load preface with user's name.
function startGame() {

    playerName = prompt('What is your name adventurer?');

    sceneText.innerHTML = `Welcome ${playerName}. Your pursuit of adventure and treasure has brought you to the lost Tomb of M'astaba. Will you be able to locate the hidden tomb filled with treasure or will your greed result in your demise? Choose wisely and you might leave with both your life and treasures beyond your wildest imagination!`

    startButton.style.visibility = "hidden";
    proceedButton.style.visibility = "visible";
}

// Load the first scene of the game
function firstScene() {

    sceneText.innerHTML = `You proceed into the tomb and walk through a narrow tunnel, whose walls are filled with hieroglyphs. The tunnel leads to a room with a wooden chest in the corner, with a skeleton lying on top of it. There seems to be a lever on the side of the wall, while a rope dangles from the ceiling. `

    proceedButton.style.visibility = "hidden"
    unhideOptions();
    tryAgainButton.style.visibility = "hidden"


    option1Button.innerHTML = `Move the skeleton off to open the wooden chest`
    option2Button.innerHTML = `Pull the lever on the side of the wall`
    option3Button.innerHTML = `Jump up to grab the rope hanging from the ceiling`

    option1.addEventListener('click', function() {firstChoice(1);})
    option2.addEventListener('click', function() {firstChoice(2);})
    option3.addEventListener('click', function() {firstChoice(3);})

}

// Outcome of choices from the first question
function firstChoice(input) {
    hideOptions();

    switch(input) {
        case 1:
            sceneText.innerHTML = `You disturbed the restful sleep of the skeleton who proceeds to strike you down!`
            tryAgainButton.style.visibility = "visible"
            break;
        case 2:
            sceneText.innerHTML = `The lever opens a trapdoor below, causing you to fall into a pit full of snakes!`
            tryAgainButton.style.visibility = "visible"
            break;
        case 3:

            secondScene();

            break;
    }
}

// Load the second scene of the game
function secondScene(input) {
    unhideOptions();
    tryAgainButton.style.visibility = "hidden";

    sceneText.innerHTML = `You grab the rope, which reveals a hidden door to the right side of the room. You proceed into the next room, where you find a golden monkey statue with diamonds as eyes. As you approach it, you notice some markings on the bottom of the statue. There is also a rubiks cube in the palm of the monkey's hand.`

    option1Button.innerHTML = `Study the markings on the bottom of the statue`
    option2Button.innerHTML = `Retrieve the rubiks cube and try to solve it`
    option3Button.innerHTML = `Pry the diamonds from the monkey statue`

    option1.addEventListener('click', function() {secondChoice(1);})
    option2.addEventListener('click', function() {secondChoice(2);})
    option3.addEventListener('click', function() {secondChoice(3);})
}

// Outcome of choices from the second question
function secondChoice(input) {
    hideOptions();

    switch(input) {
        case 1:
            sceneText.innerHTML = `You stoop down to study the markings. They read "MADE IN CHINA".`
            tryAgainButton.setAttribute("onClick", "secondScene()")
            tryAgainButton.style.visibility = "visible"
            break;
        case 2:

            thirdScene();

            break;
        case 3:
        sceneText.innerHTML = `You managed to pry the diamond eyes from the statue, only to realize that they're high quality fakes!`
        tryAgainButton.setAttribute("onClick", "secondScene()")
        tryAgainButton.style.visibility = "visible"

            break;
    }
}

// Load the third scene of the game
function thirdScene(input) {
    unhideOptions();
    tryAgainButton.style.visibility = "hidden";

    sceneText.innerHTML = `You somehow managed to solve the rubiks cube, which opens up to reveal a 100 carat diamond! You stash the diamond in your satchel and notice sunlight seeping through a crack in the wall in the far corner of the room. As you approach the wall, you notice 3 different tiles that seem to be worn out.`

    option1Button.innerHTML = `Press the tile marked with a hieroglyph of a lying mummy`
    option2Button.innerHTML = `Press the tile marked with the words EXIT`
    option3Button.innerHTML = `Press the tile marked with a hieroglyph that looks like a beetle`

    option1.addEventListener('click', function() {thirdChoice(1);})
    option2.addEventListener('click', function() {thirdChoice(2);})
    option3.addEventListener('click', function() {thirdChoice(3);})
}

// Outcome of choices from the third question
function thirdChoice(input) {
    hideOptions();

    switch(input) {
        case 1:
            sceneText.innerHTML = `Upon pressing the tile, it opens a secret door that leads to a chamber with a sarcophagus surrounded by lots of gold ornaments! You have just discovered the final resting place of M'astaba, along with all his treasure! Well done!`
            tryAgainButton.style.visibility = "hidden"

            break;
        case 2:
            sceneText.innerHTML = `Upon pressing the tile, it opens a door that leads to the outside of the tomb. You exit the tomb without finding the secret resting place of M'astaba, but you have a 100 carat diamond!`
            tryAgainButton.style.visibility = "hidden"

            break;

            break;
        case 3:
        sceneText.innerHTML = `Upon pressing the tile, it opens a door that releases thousands of flesh-eating beetles!`
        tryAgainButton.setAttribute("onClick", "thirdScene()")
        tryAgainButton.style.visibility = "visible"
            break;
    }
}

// To hide all option buttons
function hideOptions() {
    option1Button.style.visibility = "hidden"
    option2Button.style.visibility = "hidden"
    option3Button.style.visibility = "hidden"
}

// To unhide all option buttons
function unhideOptions() {
    option1Button.style.visibility = "visible"
    option2Button.style.visibility = "visible"
    option3Button.style.visibility = "visible"
}