
var room1 = prompt('You have been stuck in this magical maze where you do not starve nor sleep. Death only brings you back to the beginning. You have died countless times and lost a whole arm. Yet you have not given up hope. As you get up on your feet again you see a lit torch, lighter and a loaf of bread. You decide to... [1]Take the torch [2]Grab the lighter [3]Take the loaf of bread');

var ans = 0;

var userResponse1 = function () {
    if (ans === 1) {
        ans = alert('You picked up the torch. The entire cave is illuminated and you see the only exit from the cave you are in. You take a deep breath and walk towards it.' + room2);
    } else if (ans === 2) {
        ans = "You picked up the lighter. Weak, yet portable.";
    } else if (ans === 3) {
        ans = "You take the loaf of bread. Odd.";
    }
}

//var room2 = prompt(ans + "Hello this is room 2");