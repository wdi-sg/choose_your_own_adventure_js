console.log("hello script js");


// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   var output = "WOW SOMETHING HAPPENED";
//   return output;
// };
// After 1st time drafting, thought of using || to end user''s game instead
//Initial stage, asking if user wants to enter giant door
var enterDoor = confirm("You're in front of a giant door. Do you want to go in?");
alert(enterDoor);

// checking if 1st condition is true, if yes, ask a question that returns 3 values. prompts waits for user's next input
function playGame() {
if (enterDoor === true) {
    var firstChoice = prompt("You decide to enter the door. 3 different paths lie ahead of you. Choose a direction to proceed. 1) Head East, 2) Head West, 3) Take the stairs and go to level 2 instead");
    alert(firstChoice);

//if head east, another 3 actions. checking if 1st condition evaluates to true and 2nd condition evaluates to 1st choice, then prompt 2nd level question.
    if (enterDoor === true && firstChoice === '1') {
        var optionA = prompt("You saw a Griffin. Pick an action. 1) Greet the Griffin, 2) Pretend that he is not there, 3) Challenge him to a fist fight?");
        alert(optionA);
    }
//if head west. another 3 actions. checking if 1st condition evaluates to true and 2nd condition evaluates to 2nd choice, then prompt 2nd level question.
    else if (enterDoor === true && firstChoice === '2') {
        var optionB = prompt("You see some legos lying around. Do you, 1) Pick them up and assemble something, 2) Treat it as musical instrument and dance around 3) Keep them in your bag and claim it as your own?");
        alert(optionB);
    }
//if take stairs, another 3 actions. checking if 1st condition evaluates to true and 2nd condition evaluates to 3rd choice, then prompt 2nd level question.
    else if (enterDoor === true && firstChoice === '3') {
        var optionC = prompt("Upon reaching level 2, there's some food available on the table top. Feeling hungry, choose a dish that you would like to try. 1) Ramen, 2) Pizza, 3) Burger");
        alert(optionC);
    }
    // checking if 1st condition evaluates to true && 2nd condition evaluates to 1st choice && 3rd condition evaluates to 1st choice
        if (enterDoor === true && firstChoice === '1' && optionA === '1') {
            var optionA = prompt("Griffin smiles back. He leads you to another path which has 3 doors. Choose a door to enter. 1. Big door 2. Medium door. 3. Small door")
            alert(optionA);
        } else if (enterDoor === true && firstChoice === '1' && optionA === '2') {
            var optionB = prompt("Griffin is sad. Choose a way to comfort him. 1. Sing to him 2. Ask if he wants to play scissors, paper, stone. 3. Tell him a bedtime story");
            alert(optionB);
        } else if (enterDoor === true && firstChoice === '1' && optionA === '3') {
            var optionC = alert("Griffin is excited. But he punches you too hard and you're died. Game over 😵");
            alert(optionC);
        }

            // checking if 1st condition evaluates to true && 2nd condition evaluates to 1st choice && 3rd condition evaluates to 1st choice && 4th condition evaluates to true

            if (enterDoor === true && firstChoice === '1' && optionA === '1' && optionA === '1') {
                var optionA = alert("Troops of soldiers appear out of nowhere and starts firing guns at you. You're dead. Game over 😵")
                alert(optionA);
            } else if (enterDoor === true && firstChoice === '1' && optionA === '1' && optionA === '2') {
                var optionB = alert("Random arrows starts shooting at you. You're pierced to death. Game over 😵 ");
                alert(optionB);
            } else if (enterDoor === true && firstChoice === '1' && optionA === '1' && optionA === '3') {
                var optionC = alert("Griffin's uncle mistaken you as food delivered from Grab. You're being eaten by him. Game over 😵 ");
                alert(optionC); }

            if (enterDoor === true && firstChoice === '1' && optionA === '2' && optionB === '1') {
            var optionB = alert("Griffin is annoyed by your out of pitch sound and kills you. You're dead. Game over 😵");
            alert(optionB);}

            else if (enterDoor === true && firstChoice === '1' && optionA === '2' && optionB === '2') {
            var optionB = alert("Griffin dislikes playing games. He throws you out of the window out of frustration. Game over 😵");
            alert(optionB);}

            else if (enterDoor === true && firstChoice === '1' && optionA === '2' && optionB === '3') {
            var optionB = alert("Griffin sleeps soundly and snores so loud that you ears break. Game over 😵");
            alert(optionB); }

            //End of head east options
            //Beginning of head west options
            //("You see some legos lying around. Do you, 1) Pick them up and assemble something, 2) Treat it as musical instrument and dance around 3) Keep them in your bag and claim it as your own?")

            if (enterDoor === true && firstChoice === '2' && optionB === '1') {
            var optionA = alert("The legos has magical power upon successfully assembling them. The legos decide to crush you. Game over 😵");
            alert(optionA);
        } else if (enterDoor === true && firstChoice === '2' && optionB === '2') {
            var optionB = alert("Sound from dancing around awoken an invisible creature. It wraps itself around your neck and choked you till you're out of breath. Game over 😵");
            alert(optionB);
        } else if (enterDoor === true && firstChoice === '2' && optionB === '3') {
            var optionC = alert("Apparently the legos are self-destructive bombs. Upon contact with human, it will explode. Game over 😵");
            alert(optionC);
        }

            //End of head west options
            //Beginning of take the stairs and go level 3 options
            //"Upon reaching level 2, there's some food available on the table top. Feeling hungry, choose a dish that you would like to try. 1) Ramen, 2) Pizza, 3) Burger"

            if (enterDoor === true && firstChoice === '3' && optionC === '1') {
            var optionA = alert("Ramen turns into slimy creatures that starts wrapping themselves around head and suffocate you till death. Game over 😵");
            alert(optionA);
        } else if (enterDoor === true && firstChoice === '3' && optionC === '2') {
            var optionB = alert("Pizza is deceiving. The ingredients come alive upon seeing human and decides to attack you. Game over 😵");
            alert(optionB);
        } else if (enterDoor === true && firstChoice === '3' && optionC === '3') {
            var optionC = alert("Burger is the best. After eating it, you feel full and satisfied. Brain works and you decide to leave for good. You won.😊");
                alert(optionC);
            }
            //allow user to play again
            var playAgain = confirm("Do you want to play again?")
            if (playAgain === true) {
                playGame();
            }

}

}


//call playGame function. all codes written in playGame function. need to learn to shorten codes (use some other ways like loop or iteration maybe)
playGame();