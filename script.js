console.log("hello script js");

// log down number of inouts from player
let runTime = 0;

// if user types in a non-valid input
let invalid = "Urgh your head still hurts."

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
    weapon: "",
};

let step2 = ". You're messing with the wrong guys. If you want to see your friend again, you get me my package back.";

// player won
let goodEnding = "You shot Doug. Stu runs to the car, starts it up and you hop in. He jams the gas pedal before you can even close the door. The car makes a loud screech and looking at the rearview mirror you see Doug slowly disappear"
// player died
let badEnding = "There's a loud ringing in your ears. Your knees buckled and your vision was swimming. A quick flash of darkness envelops the senses as you feel your body shut itself down. \n\nThanks for playing!";

// starter code
var inputHappened = function(currentInput){
    runTime++;
    console.log(runTime);
    console.log( currentInput );
// test code
    if (player.name !== "") {

// step 2
    } else {
        player.name = currentInput;
        console.log(player.name);
        return `Listen up ${player.name}` + step2;
    };
};






/* ///// resource pot ////////
Hangover the game


Object

Find people and get clues

Go places and get clue

Find items and get clue

Start off without knowledge of anything, wake up in a dark room and this gangster texts you "hey, what's your name?" "Okay 'x' listen up. You pretty boy friend is still passed out at our place and if you don't get our suitcase back we're gonna do something really bad to him.

Dark room can be anywhere. Wardrobe in a hotel room. Storage room of a club in the day (able to pick up bottle opener). Kitchen of a restaurant (able to pick up knife). Confession


Choose to open door and go out or do nothing: if you do nothing, your phone vibrates and you get to text somebody: if you've already texted them before, they won't reply. Use conditionals to text texted or not.

Phone number option : if correct will call the correct person, if wrong will call another person and jeopardize your safety

Able to start from a few "save points" : home, restaurant, club,

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

Class array

Enemies array

One ending: found out who has your bag of drugs

ASCII image
*/