// put code here!



function myname() {
    var nameEnter = prompt("What is you name?");
    return nameEnter;
};
//console.log(myname());
var cellbreak = prompt(myname() + ", You got kidnapped and you found yourself\nin this room, the door is open! You walk out of the door,\ninfront of you are three ways to go?\nWhich way to go? (Press L to turn left, R to right and C to walk straight)");
//
if (cellbreak === ("L" && "l")){//saw kidnapper
    var cellbreakkidnapper = prompt("You saw the kidnapper running towards you!\nWhat would you do? Press F to fight him?\n Press R to run away.");
    } else if (cellbreak === ("C" && "c")){//saw 2 doors
        var cellbreakpromptdoor = prompt("You see 2 doors in front of you. One is black and the other is green. Which door would you choose? Press key (B/G)");
    } else if (cellbreak === ("R" && "r")) {//saw someone unknown
        var cellbreakpromptmate = prompt("You saw someone running towards you");
    } else {
        alert("You decide to quit the game");
        // myname();
    }


//1st left turn saw officer

if (cellbreakkidnapper === ("F" && "f")){
    var searchkidnapper = prompt("You caught the kidnapper unprepared, you knock him down, you found a bag. You search the bag you found 2 small boxes.\nChoose boxes Press A for box 1 and Press B for box 2");
    } else {cellbreakkidnapper === ("R" && "r");
    var runaway = prompt("The kidnapper saw you running away, he took out the gun and shoot you. You are died. Restart (Y) or Quit (Q)");
        };
//you runaway you die and quit game
if (runaway === ("Y" && "y")){
location.reload();
    }
//you runaway you die and quit game
else if (runaway === ("Q" && "q")) {
alert("Thank you for playing.");
}

//saw 2 doors
if (cellbreakpromptdoor === ("b" && "B")){
    alert("This is a black door");
} else if(cellbreakpromptdoor === ("g" && "G")){
alert("This is a green door");
} else


// var age = parseInt(prompt("How old are you?"));

// if (isNaN(age)){
//     alert("This is not a number!");
// }

// var number = (function ask() {
//   var n = prompt('Number from 1 to 100:');
//   return isNaN(n) || +n > 100 || +n < 1 ? ask() : n;
// }());