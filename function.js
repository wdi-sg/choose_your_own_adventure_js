//This will store the functions needed for this assignment
function restartGame(){
    var restart = prompt("Ready to choose your own adventure again? (yes/no): ");
    var restartLowerCase = restart.toLowerCase();
    if (restartLowerCase === "yes"){
        startingPoint();
    }
    else if (restartLowerCase === "no"){
        alert("bye!");
    }
    else{
        alert("Input error! Bye!");
    }
}

//**********************************************************************************************************************
//When a user is ready to fight monsters, this function monsters() would be used.
function monsters(){
    var monsters = ["vampire", "flaming dragon", "werewolf", "bigfoot"];
    var chooseMonsters = prompt("Choose a number (1-4) to determine which monster you face: ");
    if (chooseMonsters === "1"){
        var chooseItem = prompt("You came face-to-face with a vampire. Beside you, surprisingly, have a cross and a garlic. Choosing only one, which item will you choose?: (Cross or Garlic): ");
        var chooseItemLowerCase = chooseItem.toLowerCase();
        if (chooseItemLowerCase === "cross"){
            alert("You took the cross but the vampire was not afraid of it. However, the tip of the cross cuts the curtain, letting sunlight in, which then burns the vampire to death");
            alert("You gain one point");
            restartMonsterFight();
        }
        else if (chooseItemLowerCase === "garlic"){
            alert("The vampire ate the garlic and kills you. Bye!")
            restartGame();
        }
        else{
            alert("Input error! Bye!");
        }
    }
    else if (chooseMonsters === "2"){
        var chooseItem2 = prompt("You came face-to-face with a flaming dragon. The dragon is overpowering strong. You see a fire extinguisher and an ice bucket beside you. Which of the item would you choose?: (Fire extinguisher or Ice bucket");
        var chooseItem2LowerCase = chooseItem2.toLowerCase();
        if (chooseItem2LowerCase === "ice bucket"){
            alert("The ice bucket magically grew bigger and you manage to bury the flaming dragon with the ice")
            alert("You gain one point");
            restartMonsterFight();
        }
        else if (chooseItem2LowerCase === "fire extinguisher"){
            alert("You use the fire extinguisher, but the dragon flaming breathe is too hot for the fire extinguisher to extinguish the flames. You got charred to death");
            restartGame();
        }
        else{
          alert("Input error! Bye!");
       }
    }
    else if (chooseMonsters === "3"){
        var chooseItem3 = prompt("You came face-to-face with a werewolf. Since a werewolf looks like a human, you thought maybe you could talk to him. What would you do? (Insert 1 for talking to the werewolf about the moon and 2 for talking to the werewolf about carrots)");
        if (chooseItem3 == 1){
            alert("You talk to the werewolf about the moon. The werewolf looks at you at dismay. You showed the werewolf a picture of the sun, and he changed back into a man.");
            alert("You gain one point and a new friend in werewolf");
            restartMonsterFight();
        }
        else if (chooseItem3 == 2){
            alert("The werewolf loves meat, and not vegetables. You got eaten!");
            restartGame();
        }
        else{
            alert("Input error! Bye!");
        }
    }
    else if (chooseMonsters === "4"){
        var chooseItem4 = prompt("You came face-to-face with a big foot. You hide yourself in the shoe shelf, but the big foot found you. Would you give the bigfoot a glass slipper or a straw sandals? (slipper or sandals): ");
        var chooseItem4LowCase = chooseItem4.toLowerCase();
        if (chooseItem4LowCase == "slipper"){
            alert("Bigfoot loves the glass slipper you gave him, so he tried it. The glass causes the bigfoot to slip down the stairs.");
            alert("You gain one point");
            restartMonsterFight();
        }
        else if (chooseItem4LowCase == "sandals"){
            alert("The bigfoot tried the straw sandals, but it broke into pieces. Raged with anger, the bigfoot smash you with his gigantic feet. You died.");
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


//When a player defeats a monster, he can fight another monster.
function restartMonsterFight (){
    var restartMonster = prompt("Ready to choose another monster to fight? (yes/no): ");
    var restartMonsterLowerCase = restartMonster.toLowerCase();
    if (restartMonsterLowerCase === "yes"){
        monsters();
    }
    else if (restartMonsterLowerCase === "no"){
        alert("bye!");
    }
}
