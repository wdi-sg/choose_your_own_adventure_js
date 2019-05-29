
//The structure of the game. Fighting monster function is listed inside function.js
var startingPoint = function (){
    var name = prompt("Please insert your name: ");
    var input = prompt("In order to become the best in MunchLand, YOU, " + name + " , have to fight your rivals to reach the top. The only way to do that is to gain treasures through defeating monsters in a dungeon. To start, what character class would you choose?(Warrior, Wizard): ");
    var inputToLowCase = input.toLowerCase();
    //choice to choose a class
    if (inputToLowCase === "warrior"){
        var classInput = prompt("To become the best warrior in MunchLand, you have to choose a weapon to fight. What weapon would you choose? (Small Sword, Big Sword): ");
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
            else{
              alert("Input error! Bye!");
             }
        }
        else if (classInputLowCase === "big sword"){
            var bigSword = prompt("You stepped into the entrance of the dungeon. Behind the door, stands many monsters. What would you do? (Kick the door, run away): ");
            var bigSwordLowCase = bigSword.toLowerCase();
            if (bigSwordLowCase === "kick the door"){
                monsters();
            }
            else if (bigSwordLowCase === "run away"){
                alert("You try to run away, but you fall into quick sand, and since your sword is big, you died sinking into it");
                restartGame();
            }
            else{
               alert("Input error! Bye!");
            }
        }
        else{
           alert("Input error! Bye!");
        }
    }
    if (inputToLowCase === "wizard"){
        var spells = prompt("As a wizard, you need to learn 2 spells: cockuroola or akalazam. Pick a spell to learn: (1 for cockuroola or 2 for akalazam): ");
        if (spells == 1){
            alert("You learn cockuroola, but the difficulty of the spells destroy the timeline and you got brought back into the past. Goodbye!");
            restartGame();
        }
        else if (spells == 2){
            alert("After learning akalazam, you are ready to fight the monsters in the dungeon.");
            monsters();
        }
    }
    else{
        alert("Input error! Bye!");
    }

}
startingPoint(name);

