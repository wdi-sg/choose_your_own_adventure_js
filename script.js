var name = prompt("Please insert your name: ");
var startingPoint = function (name){
    var input = prompt("In order to become the best in MunchLand, YOU, " + name + " , have to fight your rivals to reach the top. The only way to do that is to gain treasures through defeating monsters in a dungeon. To start, what character class would you choose?(Warrior, Wizard): ");
    var inputToLowCase = input.toLowerCase();
    //choice to choose a class
    if (inputToLowCase === "warrior"){
        var classInput = prompt("To become the best warrior in MunchLand, you have to choose a weapon to fight. What weapon would you choose? (Small Sword, Medium Sword, Big Sword): ");
        var classInputLowCase = classInput.toLowerCase();
        //choice to choose a weapon
        //small sword
        if(classInputLowCase === "small sword"){
            var smallSword = prompt("You stepped into the entrance of the dungeon. Behind the door, stands many monsters. What would you do? (Kick the door, run away): ");
            var smallSwordLowCase = smallSword.toLowerCase();
            //choice to kick the door
            if (smallSwordLowCase === "kick the door"){
                alert("You encounter a flaming dragon behind the door. Since your sword is small, you immediately got burn to death.");
                restartGame();
            }

            else if(smallSwordLowCase === "run away"){
                alert("You realise that your sword is too small. Maybe a bigger sword would be better. Try again!");
                restartGame();
            }
        }
        else if (classInputLowCase === "medium sword"){
            var mediumSword = prompt("You stepped into the entrance of the dungeon. Behind the door, stands many monsters. What would you do? (Kick the door, run away): ");
            var mediumSwordLowCase = mediumSword.toLowerCase();
            if (mediumSwordLowCase === "kick the door"){
                var attack = ("You encounter a monster behind the door. Pick a number 1-5 to determine which monster you battle.");
            }
            else if (mediumSwordLowCase === "run away"){
                alert("You try to run away, but you fall into a bottomless pit just outside the door. You died with no corpse being found!");
            }
        }
    }
}
startingPoint(name);

