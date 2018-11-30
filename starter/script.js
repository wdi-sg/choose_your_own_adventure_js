//Written by Beng Hui
//Choose your own adventure

function inputUserName(){
    var name = prompt ("Please enter your name!");
    return name;
}

function randomNumber() {
    var randomNum = Math.ceil(Math.random() * 100);
    return randomNum;
}

function restart(){
    var restart = prompt ("Do you want to play again? (Y/N)").toLowerCase();
                if (restart === "y"){
                    adventureStart(userInputName);
                } else {
                    alert("Thank you for playing. Goodbye!");
                }
}

function adventureStart(userInputsName){
    //var name = inputUserName();
    alert("Hello " + userInputsName + "! Welcome to the enchanted forest! To get out you have to find the mystical unicorn!");
}

function crossroad(userInputsName){
    crossroad = prompt("You are lost at a crossroad. Do you want to follow the left path or the right path? (L/R)").toLowerCase();

    switch(crossroad){

        case "l":
                darkCave = prompt ("The path to the left leads to a dark cave. Do you wish to enter? (Y/N)").toLowerCase();
                break;

        case "r":
                muddyRiver = prompt("The path to the right leads to a muddy river. Do you wish to cross to the other side? (Y/N)").toLowerCase();
                break;

        default:
                alert("You have entered an invalid input");
                crossroad(userInputsName);
                break;
    }
}

function darkCave(){
    switch (darkCave){
        case "y":
                bigBear = prompt ("You entered the cave and encountered a big bear!! Do you fight or run? (F/R)").toLowerCase();
                break;

        case "n":
                wolfPack = prompt ("You go past the cave but encounter a pack of wolves!! Do you fight, seek shelter in the cave or run? (F/S/R)").toLowerCase();
                break;

        default:
                alert("You have entered an invalid input");
                darkCave();
                break;
    }
}

function muddyRiver(){
    switch (muddyRiver){
        case "y":
                fierceCrocodile = prompt ("While crossing the river, a Crocodile starts chasing you!! Do you turn and fight or swim faster? (F/S)").toLowerCase();
                break;

        case "n":
                oldWizard = prompt ("As you walk along the river bank, you spot a Wizard. Do you try to sneak away or talk with the Wizard? (S/T)");
                break;

        default:
                alert("You have entered an invalid input");
                muddyRiver();
                break;
    }
}

function bigBear(){
    switch (bigBear){
        case "f":
                alert ("You were mauled by the bear.");
                restart();
                break;

        case "r"
                alert ("Your attempt to run failed. You were mauled by the bear.");
                restart();
                break;

        default:
                alert("You have entered an invalid input");
                bigBear();
                break;
    }
}

function wolfPack(){
    switch (wolfPack){
        case "f":
                alert ("You were mauled by the wolves.");
                restart();
                break;

        case "r":
                alert("Your attempt to run failed. You were mauled by the wolves.");
                restart();
                break;

        case "s":
                bigBear();
                break;

        default:
                alert("You have entered an invalid input");
                wolfPack();
                break;
    }

}

function fierceCrocodile(){
    switch (fierceCrocodile){
        case "f":
                alert ("You were mauled by the crocodile.");
                restart();
                break;

        case "s":
                alert ("You miraculously managed to swim away from the crocodile and reach the other side of the River where you find the Unicorn and ride it out of the forest");
                restart();
                break;

        default:
                alert("You have entered an invalid input");
                fierceCrocodile();
                break;

    }
}

function oldWizard(){
    switch (oldWizard){
        case "s":
                alert ("The Wizard finds you sneaking away and kills you with a fireball.");
                restart();
                break;

        case "t":
                luckyNum = prompt ("The Wizard asks you to choose a number between 1 and 100. If it matches what he has chosen he will tell you how to find the Unicorn").parseInt();
                if (luckyNum === randomNum){
                    alert (luckyNum + " is correct! The Wizard tells you how to find the Unicorn and you ride it out of the forest");
                } else {
                    alert (luckyNum + " is wrong. The Wizard blasts you with a fireball!");
                }
                restart();
                break;

        default:
                alert("You have entered an invalid input");
                oldWizard();
                break;
    }

}

$(document).ready(function() {
    adventureStart(inputUserName());
});