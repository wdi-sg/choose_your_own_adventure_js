console.log("hello script js");

// code migrated from index.html
document.querySelector('#input').addEventListener('change', function(event){
    var currentInput = event.target.value;
    var output = inputHappened(currentInput);
    display( output );
    event.target.value = "";
    }
);

// code migrated from index.html
var display = function( data ){
    var output = document.querySelector('#output');
    output.innerText = data;
};

// log down number of inouts from player
let runTime = -1;

// for user to go back to when they key in something invalid
let previousInputs = [];

// randomly returns true or false
let coinFlip = function() {
    if (Math.ceil(Math.random()*2) === 2) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    };
};

// player object
let player = {
    name: "",
};

// putting all the steps into this object
let gameBoard = {
    // after retrieving name
    step2: function() {
        return `Doug: "Listen up ${player.name}. You're messing with the wrong guys. If you want to see your friend again, you get me my package back."\n\nget moving / reply`;
    },
    // if user types in a non-valid input
    invalid: `You mumbled under your breadth. The hangover feels like a balloon under your cranium, slowly being inflated, pressure mounting.`,
    // player died
    badEnding: `There's a loud ringing in your ears. Your knees buckled and your vision was swimming. A quick flash of darkness envelops the senses as you feel your body shut itself down. \n\nThanks for playing!`,
    // player won
    goodEnding: "You shot Doug. Stu runs to the car, starts it up and you hop in. He jams the gas pedal before you can even close the door. Stu and you get out of there as fast as possible.\n\nThanks for playing!",
    // story chunks
    "get moving": `You struggle to get up, using the light from the phone to get to the door. On the other side of the door, you find yourself in a hotel room. "What was I doing in a closet?", you thought to yourself.\n\ncheck phone / look around`,
    // story chunks
    "reply": `"I don't know what you're talking about". You think about hangover cures and how the smell of alcohol was intoxicating last night, yet it adds to the nausea now. Doug replies: "Don't play dumb with me. You dicks were partying so hard, popping bottles. I needed to deliver the package to my dealer and you dicks offered to drive me there, but midway you told me to grab some more booze from the convenience store and just when I got out of the car, you took off with the package. Anyway, you best return it to me before I mess your friend up real good."\n\nget moving / check phone`,
    // story chunks
    "check phone": `You look through the phone to get a clue about last night. The last thing you remembered was drinking at the club with Stu and he offered you some pills for preventing hangover...\n\nopen gallery / open messages`,
    // story chunks
    "look around": `The room is in a mess. Used condoms lying around, clothes everywhere, pills on the ground. On closer inspection, you realised that this may be the package Doug was talking about. You turn the room upside down looking for the package. Then, you thought of one place, the place you came out of. You look to the closet, staring straight back at you are two things: A gun and the opened package. You take the\n\ngun / package`
// prelude to ending, with 2 possibilities
};

// prelude to goodEnding
let gunStory = `"He's probably going to kill us both if I turn up with just half of the pills. Might as well beat him to the chase", you thought. You made a call to Doug and arranged a meeting. Doug shows up with Stu, tied up and helpless. Stu: "Sorry I lied. Those weren't vitamins. They were drugs! I got them from this guy at the club!" Doug: "You weren't supposed to take them, moron. You were supposed to give them to others. They're roofies, retards!" You: "Untie him first, I'll hand you the package." Doug proceeds to untie Stu. Stu shakes off the ropes and gets up. You pretend to take the package, but you reach for the gun. `

// starter code
var inputHappened = function(currentInput){
    runTime++;
    console.log(runTime);
    previousInputs.push(currentInput);
    console.log(previousInputs);
// test code
    if (player.name !== "") {
// prevent user from erroneous inputs
        if (gameBoard[currentInput] === undefined) {
            runTime--;
            previousInputs.pop()
            let savePoint = gameBoard[previousInputs[runTime]];
            return savePoint;
        } else if (currentInput === "gun") {
            return gunStory + gameBoard.goodEnding;
        } else {
            console.log(gameBoard[currentInput]);
            return gameBoard[currentInput];
        };
// step 2
    } else {
        player.name = currentInput;
        console.log(player.name);
        return gameBoard.step2();
    };
    console.log("skipped past logic circuit");
    return "broken";
};






/* ///// resource pot ////////
Find people and get clues

Go places and get clue

Find items and get clue

Dark room can be anywhere. Wardrobe in a hotel room. Storage room of a club in the day (able to pick up bottle opener). Kitchen of a restaurant (able to pick up knife). Confession


Choose to open door and go out or do nothing: if you do nothing, your phone vibrates and you get to text somebody: if you've already texted them before, they won't reply. Use conditionals to text texted or not.

Phone number option : if correct will call the correct person, if wrong will call another person and jeopardize your safety

Able to go to a few places: back alley, hotel suite,

Able to fight so thugs
Get knocked out

Pop item from array after accessing array, return "there's nothing here..." if undefined.

 - name: user input
 - weapon: choice from array
 - class
 - health

Use for loops to print out the

Weapons array
array of places, accessed by random array index
let places = ["hotel", "restaurant", "club"];

Class array

Enemies array

One ending: found out who has your bag of drugs

ASCII image
*/