function playGame() {
    var enterCave = confirm("Searching for the long lost treasure. You are about to enter the Cave of the lost Souls. To proceed you will need to answer Riddles by the Sphinx. Failure is equal to death. Shall you proceed?")

    if(enterCave == true){
        //we enter the cabin
        var firstRiddle = prompt("What is greater than God,more evil than the devil,the poor have it,the rich need it,and if you eat it, you'll die? (Money | Nothing | Wisdom)")
        if(firstRiddle == "Money") {
            alert("The poor has no money.The End!.");
        }
        else if (firstRiddle == "Wisdom") {
            alert("You cannot eat Wisdom!The End!.");
        }
        else {
            alert("You are correct! You may proceed to the next level!");

            var secondRiddle = prompt("You can drop me from the tallest building and I'll be fine, but if you drop me in water I die. What am I? (Air | Pebble | Paper)")
            if(secondRiddle == "Air") {
                alert("Air cant be dropped! The End!");
            }
            else if(secondRiddle == "pebble") {
                alert("Pebble cant die! The End!");
            }
            else {
                alert("You are correct! You may proceed to the next level!");
                var thirdRiddle = prompt("What has a head and a tail, but no body? (Snake | Coin | Ghost)");
                if (thirdRiddle == "Snake") {
                    alert("Snake do have a body. The End!");
                }
                else if(thirdRiddle == "ghost") {
                    alert("The ghost haunt you forever! The End!");
                }
                else {
                    alert("You are correct!");
                    alert("You have completed all riddles.The treasure is yours!");
                    alert("looking in the treasure chest, you found a note that says 'Better Luck Next Time!' ");
                }
            }
        }
    }
else {
    alert("You refused to enter the cave. Well.. That's all folks!. The end");
}
var playAgain = confirm("Do you want to play again?");
if(playAgain == true){
    playGame();
}
}

playGame ();