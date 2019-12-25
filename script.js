console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };

function startGame(){
var playerName = "";

do {
    playerName = prompt("Hello there, How do i address you?").toUpperCase();
}
while (!playerName);

alert("Hi " + playerName + ",Welcome to xEscape Room.");
alert("Hope you can find ways to escape out of here safely!!");
alert("In this COLD DARK room alone, you have to find a key that unlocks the door to save you from freezing in here.");
alert("what do you do first??");
darkRoom();
}


function darkRoom(){
    var choice;
    do{
        choice= parseInt((prompt("1. Pick up the torchlight from the table beside you.\n"+"2. Scream and shout for help.\n"+"3. Look for keys in the dark.")));
    } while(choice !==1 && choice !==2 && choice !==3);

    if(choice === 1){
        alert("That's right! Now it is easier for you to find the key.");
        alert("You turned on the torchlight and saw the key beside the door.");
        openDoor();
    }
    else if (choice === 2){
        alert("You are ALONE in this room, there is no use even if you scream and help.");
        endGame();
    }
    else if (choice === 3){
        alert("Okay.. you took a long time. It's too cold for you here, you might need some tools to keep yourself warm");
        warmTools();
    }

}
function warmTools(){
    var choice;

    do{
        choice = parseInt((prompt("Which material will you take to warm yourself\n\n"+"1. Matchstick\n"+"2. I DON'T NEED ANY OF THESE!!\n"+"3. Winter wear")));
    } while(choice!=1 && choice!=2 && choice!=3);

    if (choice===1){
        alert("WOW you just set the place on fire. You get exploded together with the house.");
        endGame();
    }
    else if(choice==2){
        alert("Hmmm, looks like you froze yourself to death.");
        endGame();
    }
    else if(choice===3){
        alert("Great!You are all suit up.. please continue to find ways to escape from this room!");
        openDoor();
    }
}
function openDoor(){
    alert("There is a note beside the doors.\n\n" + "Note: This key can open 2 doors. One in black, and one in gold. Once you enter the door, you have to solve a riddle. THe BLACK door holds the EASY riddle, while the GOLD door holds a HARD riddle.\n\n" + "*** Harder riddle will help you to escape this room faster. ***");
    var choice;
    do{
        choice = parseInt((prompt("Which door do you wish to enter?\n" + "1. Black\n" +"2.Gold")));
} while(choice!=1 && choice!=2);

    if(choice ===1){
        alert("Welcome to the easy riddle! Answer this riddle to move on..");
        easyRiddle();
    }
    else if (choice ==2){
        alert("Welcome to the hard riddle! No worries, if you get pass this you will be able to escape from this place faster!!\n\n" +"Answer this riddle:\n");
            hardRiddle();
    }
}

    function easyRiddle() {
        var choice;
        do{
            choice = parseInt((prompt("What gets wet while is drying?\n\n"+"1. Towel\n"+"2. Hair dryer\n" +"3. paper")));
        } while(choice!=1 && choice!=2 && choice!=3 );

        if(choice ===1){
            alert("WELL DONE! You got it right!");
            secondEasyriddle();
        }
        else if( choice===2){
            alert("!!WRONG!!you stayed too long in this room, you are frozen to death.");
            endGame();
        }
        else if(choice===3){
            alert("!!WRONG!!you stayed too long in this room, you are frozen to death.");
            endGame();
        }
    }
    function hardRiddle(){
        var choice;
        do{
            choice = parseInt((prompt("How many letters are there in Alphabet?\n\n"+"1. 11\n"+"2. 8\n" +"3. 26")));
        } while(choice!=1 && choice!=2 && choice!=3 );

        if(choice ===2){
            alert("WELL DONE! You got it right!");
            decodeToExit();
        }
        else if( choice === 1){
            alert("!!WRONG!! A-L-P-H-A-B-E-T, there's 8 letters!! you stayed too long in this room, you are frozen to death.");
            endGame();
        }
        else if(choice ===3){
            alert("!!WRONG!! A-L-P-H-A-B-E-T, there's 8 letters!! you stayed too long in this room, you are frozen to death.");
            endGame();
        }
    }

    function secondEasyriddle(){
        alert("MUAHAHA you have to answer a 2nd riddle because you chose an easy one just now!!!");
        var choice;
        do{
            choice = parseInt((prompt("Answer this:\n" +"I am an odd number, take away an alphabet and i became even. What number am i?\n\n"+"1. eleven\n"+"2. fourteen\n" +"3. seven")));
        } while(choice!=1 && choice!=2 && choice!=3 );

        if(choice ===3){
            alert("WOW! You got it right!! You can proceed.");
            decodeToExit();
        }
        else if( choice === 1){
            alert("!!WRONG!! if i take away letter S, I'll become EVEN. S-EVEN!! you fall for the trap.");
            endGame();
    }
     else if( choice ===2){
            alert("!!WRONG!! if i take away letter S, I'll become EVEN. S-EVEN!! you fall for the trap.");
            endGame();
    }
}
    function decodeToExit(){
        alert("You need to find the code to exit out of this hell..");
        var codeGuess = prompt("There is this note which says:\n\n"+ "CODE:\n" + "1 stands for A\n"+"2 stands for B\n" + "3 stands for C\n" + "and so on...\n"+"Please solve word with the code below:\n"+"19 03 15 21 20");

        if (codeGuess === "scout") {
            alert("Congratulations, you have successfully managed to escape this place!!");
        }
        else{
            var secondCodeGuess = prompt("Try Again. Number of tries left: 1");
            if (secondCodeGuess === "scout"){
                alert("Congratulations, you have successfully managed to escape this place!!");
            }
            else{
                var thirdCodeGuess = prompt("Try Again.LAST CHANCE!");
                if(thirdCodeGuess === "scout"){
                    alert("Congratulations, you have successfully managed to escape this place!!");
                }
                else{
            alert("Oh no.. you were so close to escape from this place..");
            endGame();
        }

    }
}
}

function endGame(){
    alert("You failed! You are stuck in this room forever now..");

    var choice = confirm("Play again?");

    if (choice){
        alert("Ok, lets start to escape the room again!");
        startGame();
    } else if (!choice){
        alert("Alright, see you soon. Goodbye!");
    }
}

startGame();