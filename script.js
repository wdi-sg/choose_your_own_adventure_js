console.log("hello script js");


//Whether to continue or discontinue with the game
var start = function() {
    var reply = confirm("Play Game?");
    if (reply == false){
        alert("Quit Game?");

        //Message display below button
        document.getElementById("text").innerHTML = "Thanks for playing!";
    }
    else {
        //if (reply == true); game will start
        playGame();
    }
};


//Score starts from 0 & accumulate score points in function for all correct answers
var score = 0;

//Start playing the game
var playGame = function() {

    var getName = prompt("Hey stranger... what is your name?");
    alert("Hello " + getName);

    var enterCabin = confirm("You come across a strange house in the woods. Do you want to go in?");
    if (enterCabin == true) {

        //You enter the cabin
        var porridgeChoice = prompt("You walk into the cabin and see a lovely kitchen.  On the table there are three bowls of porridge.  Do you try 1, 2 or 3?");

        if (porridgeChoice == 1) {
            //You choose porridge #1
            alert("The porridge is too hot! Game Over!")
            //Restart the game && choose whether to continue or discontinue the game. Discontinuing breaks the looping
            return start();
        }
        else if (porridgeChoice == 2){
            //You choose porridge #2
            alert("The porridge is too cold! Game Over!");
            //Restart game && choose continue or discontinue playGame
            return start();
        }
        else {
            //Score increment 1
            score++;
            document.getElementById("totalScore").innerHTML = score;
            //If the choice is not 1 or 2, it must be porridge #3
            alert("This porridge is just right!");
        }

            //If choose porridge #3 proceed to choose chair!
            var chairChoice = prompt("You walk into the living room and see three chairs. A BIG chair, MEDIUM chair and a SMALL chair. Which chair do you choose?");
            if (chairChoice == "big") {
                //You choose big chair
                alert("The chair is way too big! Game Over!");
                return start();
            }
            else if (chairChoice == "medium") {
                //You choose medium chair
                alert("The chair is kind of too big. Game Over!");
                return start();
            }
            else {
                //You choose small chair
                //Score increment 2
                score++;
                document.getElementById("totalScore").innerHTML = score;
                alert("This chair is just right for your size.");
            }

            //You pick bedChoice after correct porridge# and chairChoice
            var bedChoice = prompt("You walk into the next room over and see three beds. A BIG one, a MEDIUM one and a SMALL one. Which one do you choose?");
            if (bedChoice == "big") {
                alert("It is too hard and you cannot sleep. The End!");
                return start();
            }
            else if (bedChoice == "medium") {
                alert("It is too soft and you cannot sleep. The End!");
                return start();
            }
            else {
                //Score increment 3
                score++;
                document.getElementById("totalScore").innerHTML = score;
                alert("It is just right and you fall into a deep slumber.");
            }

            //You heard someone at the door
            var hideChoice = prompt("You heard key cling sound. Someone is trying to open the door. There is wardrobe, underneath bed and sleep. Which one do you choose?");
            if (hideChoice == "underneath bed") {
                alert("The three bears find you underneath the bed. You have been found! Game Over!");
                return start();
            }
            else if (hideChoice == "sleep") {
                alert("You pretend to sleep. The three bears are looking at you angrily. Game Over!");
                return start();
            }
            else {
                //Score increment 4
                score++;
                document.getElementById("totalScore").innerHTML = score;
                alert("Nobody finds you. You wait in the wardrobe.");
            }

            //You thought the three bears were asleep. You want to escape
            var escapeChoice = prompt("You come out from the wardrobe. You want to escape. There is a window, a door and blanket. Which one do you choose?");
            if (escapeChoice == "door") {
                alert("You come out from the room. The three bears are at the dining room. They stare at you angrily. Game Over!");
                return start();
            }
            else if (escapeChoice == "blanket") {
                alert("The blanket is too small to cover you. The three bears see you. Game Over!");
                return start();
            }
            else {
                //Score increment 5
                score++;
                document.getElementById("totalScore").innerHTML = score;
                alert("You escape the cabin through the window and run away");
            }

            //Get help after escape. The bears are chasing you
            var getHelp = prompt("The three bears know you escape. They are chasing you. You can see a ranger, a dog and a tree from afar. Which one do you choose to get help?");
            if (getHelp == "dog") {
                alert("The dog is best friend of the bears. The dog captures you. Game Over!");
                return start();
            }
            else if (getHelp == "tree") {
                alert("The three bears see you hide behind the tree. You are captured! Game Over!");
                return start();
            }
            else {
                //Score increment 6
                score++;
                document.getElementById("totalScore").innerHTML = score;
                alert("The ranger saves you from the bears. He takes out the rifle to scare the bears away. You are saved!");
            }

        //Game completed. Decide whether to continue playing the game or discontinue the game
        var playAgain = confirm("Do you want to play again?");
        if (playAgain == true) {
            playGame();
        }
        else {
        document.getElementById("text").innerHTML = "Thanks for playing!";
        }
    }
    else {
        //We dont enter the cabin (enterCabin is false)
        alert("You do not go into the cabin. The End.");
    }
};



//This is a function call. This is how we run the function we just declared
// playGame();