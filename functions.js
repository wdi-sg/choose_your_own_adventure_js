


outcome1 = function() {
    alert("The host caught you raising with a retarded hand. He thinks you're cheating and kills you. R.I.P. " + name);
}

outcome2 = function() {
    alert("You are a retard " + name + "... But at least you're a retard that is alive. \n Your score: -200");
}

outcome3 = function() {
    alert("You are a retard " + name + "... But at least you're a retard that is alive. \n Your score: -400");
}

outcome4 = function() {
    alert("The host caught you raising in a retarded situation. He thinks you're cheating and kills you. R.I.P. " + name);
}

outcome5 = function() {
    alert("You are a retard " + name + ". You folded the nuts. The host finds it incredibly suspicious that you did that and he killed you.");
}

outcome6 = function() {
    alert("The following action has taken place: \n 1. A♣ A♦ (200) Called  \n 2. K♣ K♥ (200) Called \n 3. A♠ K♠ (200) Called \n 4. 10♥ J♥ (400) Folded \n 5. 5♦ 5♣ (200) Bet 200 \n 8. J♦ Q♦ (400) Folded \n" + name + ". 3♥ 4♥ (200) Called \n The pot has $5,200 inside it. \n " + name + " won the pot! Score: +4,400" );
}

outcome7 = function() {
    alert("The following action has taken place: \n 1. A♣ A♦ (0) All-In  \n 2. K♣ K♥ (0) All-In \n 3. A♠ K♠ (400) Folded \n 4. 10♥ J♥ (400) Folded \n 5. 5♦ 5♣ (0) All-In \n 8. J♦ Q♦ (400) Folded \n" + name + ". 3♥ 4♥ (0) All-In \n The pot has $5,800 inside it. \n " + name + " won the pot! Score: +4,800");
}


replayOption = function() {
    replay = prompt("Would you like to replay? Y/N");

    if (replay == "Y" ) {
        game();
    }

    else if (replay != "Y" ){
        alert("Thank you for playing!");
    }
}

/**
c1 = function() {
        alert("The following action has taken place: \n 1. A♣ A♦ (800) Called 200  \n 2. K♣ K♥ (800) Called 200 \n 3. A♠ K♠ (800) Raised to 200 \n 4. 10♥ J♥ (800) Called 200 \n 5. 5♦ 5♣ (800) Called 200 \n 8. J♦ Q♦ (800) Called 200 \n The pot has $1,400 inside it. \n " name + ". 3♥ 4♥ (800) Called 200");

    decision2 = prompt("Onto the Flop: A♥ K♦ 5♥ \n The pot has $3,800 inside it \n The following action has taken place: \n 1. A♣ A♦ (400) Bet 400  \n 2. K♣ K♥ (400) Called 400 \n 3. A♠ K♠ (400) Called 400 \n 4. 10♥ J♥ (400) Called 400 \n 5. 5♦ 5♣ (400) Called 400 \n 8. J♦ Q♦ (400) Called 400 \n \n " name + ": 3♥ 4♥ (800) 400 to Call. \n What will you do? R/C/F?");
}

c2 = function() {
     alert("The following action has taken place: \n 1. A♣ A♦ (400) Bet 400  \n 2. K♣ K♥ (400) Called 400 \n 3. A♠ K♠ (400) Called 400 \n 4. 10♥ J♥ (400) Called 400 \n 5. 5♦ 5♣ (400) Called 400 \n 8. J♦ Q♦ (400) Called 400 \n " + name + ". 3♥ 4♥ (400) Called 400. \n The pot now has $4,200.");

    decision3 = prompt("Onto the Turn: A♥ K♦ 5♥ / 5♠ \n The pot has $4,200. \n The following action has taken place: \n 1. A♣ A♦ (400) Checked  \n 2. K♣ K♥ (400) Checked \n 3. A♠ K♠ (400) Checked \n 4. 10♥ J♥ (400) Checked \n 5. 5♦ 5♣ (400) Checked \n 8. J♦ Q♦ (400) Checked \n \n " name + ": 3♥ 4♥ (400) Action is on you. \n What will you do? R/C/F?");
}

c3 = function() {
    alert("The following action has taken place: \n 1. A♣ A♦ (400) Checked  \n 2. K♣ K♥ (400) Checked \n 3. A♠ K♠ (400) Checked \n 4. 10♥ J♥ (400) Checked \n 5. 5♦ 5♣ (400) Checked \n 8. J♦ Q♦ (400) Checked \n" + name + ". 3♥ 4♥ (400) Checked \n The pot has $4,200 inside it.");

        decision4 = prompt("Onto the River: A♥ K♦ 5♥ / 5♠ / 2♥ \n The following action has taken place: \n 1. A♣ A♦ (400) Checked  \n 2. K♣ K♥ (400) Checked \n 3. A♠ K♠ (400) Checked \n 4. 10♥ J♥ (400) Checked \n 5. 5♦ 5♣ (200) Bet 200 \n 8. J♦ Q♦ (400) Folded \n \n The pot has $4,400 inside it. \n " name + ": 3♥ 4♥ (400) Action is on you. \n What will you do? R/C/F?");
}

*/
