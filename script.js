console.log("working");

var playerCards = ["A♣ A♦", "K♣ K♥", "A♠ K♠", "10♥ J♥", "5♦ 5♣", "2♦ 7♠", "4♣ 10♦", "J♦ Q♦", "3♥ 4♥"];

var playerMoney = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];

alert("You are at a poker game and you have rigged the deck to give yourself a winning hand. As the game is run by mobsters, you have to be careful to make them feel that your win is due to blind luck. \n You have planned for the board to be A♥ K♦ 5♥ / 5♠ / 2♥ \n \n These are the hands you have given the other players: \n 1. A♣ A♦ / 2. K♣ K♥ / 3. A♠ K♠ / 4. 10♥ J♥ \n 5. 5♦ 5♣ / 6. 2♦ 7♠ / 7. 4♣ 10♦ / 8. J♦ Q♦ \n \n Your hand: 3♥ 4♥");

var name = prompt("What is your name?");

var game = function() {

var decision1 = prompt("The following action has taken place: \n 1. A♣ A♦ (900) Bet 100  \n 2. K♣ K♥ (900) Call 100 \n 3. A♠ K♠ (800) Raise to 200 \n 4. 10♥ J♥ (800) Call 200 \n 5. 5♦ 5♣ (800) Call 200 \n 6. 2♦ 7♠ (1000) Folded \n 7. 4♣ 10♦ (1000) Folded \n 8. J♦ Q♦ (800) Call 200 \n \n" + name + ": 3♥ 4♥ \n The pot has $1,000 inside it. What will you do? Raise, call or fold? Please type in R/C/F");

if ( decision1 == "R" ) {
    outcome1();
    replayOption();
}

if ( decision1 == "F" ) {
    outcome2();
    replayOption();
}

if ( decision1 == "C" ) {

    alert("The following action has taken place: \n 1. A♣ A♦ (800) Called 200  \n 2. K♣ K♥ (800) Called 200 \n 3. A♠ K♠ (800) Raised to 200 \n 4. 10♥ J♥ (800) Called 200 \n 5. 5♦ 5♣ (800) Called 200 \n 8. J♦ Q♦ (800) Called 200 \n The pot has $1,400 inside it. \n " + name + ". 3♥ 4♥ (800) Called 200");

    decision2 = prompt("Onto the Flop: A♥ K♦ 5♥ \n The pot has $3,800 inside it \n The following action has taken place: \n 1. A♣ A♦ (400) Bet 400  \n 2. K♣ K♥ (400) Called 400 \n 3. A♠ K♠ (400) Called 400 \n 4. 10♥ J♥ (400) Called 400 \n 5. 5♦ 5♣ (400) Called 400 \n 8. J♦ Q♦ (400) Called 400 \n \n " + name + ": 3♥ 4♥ (800) 400 to Call. \n What will you do? R/C/F?");


}

if ( decision2 == "F" ) {
    outcome2();
    replayOption();
}

if ( decision2 == "C" ) {

    alert("The following action has taken place: \n 1. A♣ A♦ (400) Bet 400  \n 2. K♣ K♥ (400) Called 400 \n 3. A♠ K♠ (400) Called 400 \n 4. 10♥ J♥ (400) Called 400 \n 5. 5♦ 5♣ (400) Called 400 \n 8. J♦ Q♦ (400) Called 400 \n " + name + ". 3♥ 4♥ (400) Called 400. \n The pot now has $4,200.");

    decision3 = prompt("Onto the Turn: A♥ K♦ 5♥ / 5♠ \n The pot has $4,200. \n The following action has taken place: \n 1. A♣ A♦ (400) Checked  \n 2. K♣ K♥ (400) Checked \n 3. A♠ K♠ (400) Checked \n 4. 10♥ J♥ (400) Checked \n 5. 5♦ 5♣ (400) Checked \n 8. J♦ Q♦ (400) Checked \n \n " + name + ": 3♥ 4♥ (400) Action is on you. \n What will you do? R/C/F?");

    if ( decision3 == "F" ) {
        outcome3();
        replayOption();
    }

    if ( decision3 == "R" ) {
        outcome4();
        replayOption();
    }

    if ( decision3 == "C" ) {

        alert("The following action has taken place: \n 1. A♣ A♦ (400) Checked  \n 2. K♣ K♥ (400) Checked \n 3. A♠ K♠ (400) Checked \n 4. 10♥ J♥ (400) Checked \n 5. 5♦ 5♣ (400) Checked \n 8. J♦ Q♦ (400) Checked \n" + name + ". 3♥ 4♥ (400) Checked \n The pot has $4,200 inside it.");

        decision4 = prompt("Onto the River: A♥ K♦ 5♥ / 5♠ / 2♥ \n The following action has taken place: \n 1. A♣ A♦ (400) Checked  \n 2. K♣ K♥ (400) Checked \n 3. A♠ K♠ (400) Checked \n 4. 10♥ J♥ (400) Checked \n 5. 5♦ 5♣ (200) Bet 200 \n 8. J♦ Q♦ (400) Folded \n \n The pot has $4,400 inside it. \n " + name + ": 3♥ 4♥ (400) Action is on you. \n What will you do? R/C/F?");

        if ( decision4 == "F" ) {
            outcome5();
            replayOption();
        }

        if ( decision4 == "C" ) {
            outcome6();
            replayOption();
        }

        if ( decision4 == "R" ) {
            outcome7();
            replayOption();
        }
    }

}

}



game();











