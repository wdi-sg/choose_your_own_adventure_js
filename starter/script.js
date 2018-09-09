// put code here!
var nameEnter = prompt("What is you name?");

var cellbreak = prompt((nameEnter) + ", You got kidnapped and you found yourself\nin this room, the door is open! You walk out of the door,\ninfront of you are three ways to go?\nWhich way to go? (Press L to turn left, R to right and C to walk straight)");

if (cellbreak === ("L" && "l")){
    var cellbreakofficer = prompt("You saw the kidnapper running towards you!");
    } else if (cellbreak === ("C" && "c")){
        var cellbreakpromptdoor = prompt("You see 2 doors in front of you");
    } else if (cellbreak === ("R" && "r")) {
        var cellbreakpromptmate = prompt("You saw someone running towards you");
    } else {
        alert("You decide to quit the game");
    }


// var age = parseInt(prompt("How old are you?"));

// if (isNaN(age)){
//     alert("This is not a number!");
// }

// var number = (function ask() {
//   var n = prompt('Number from 1 to 100:');
//   return isNaN(n) || +n > 100 || +n < 1 ? ask() : n;
// }());