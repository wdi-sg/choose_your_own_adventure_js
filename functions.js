// Created functions for Game Logics to reduce code.
// Game Logic for Random Number Game
var numberGame = function() {
    while (moneyToPay < 10 && moneyToPay > 0) {
        var hisNumber = Math.floor(Math.random() * 10)
        var yourNumber = Math.floor(Math.random() * 10)
        if (hisNumber > yourNumber) {
            moneyToPay++;
            alert("You Lost this round! The amount to pay currently is " + moneyToPay)
        } else if (hisNumber < yourNumber) {
            moneyToPay--;
            alert("You Won this round! The amount to pay currently is " + moneyToPay)
        } else {
            alert("Your numbers were equal");
            yourNumber = Math.floor(Math.random() * 10);
        };
    };
    return moneyToPay;
};

// Defining a Rock Paper Scissors Game. This code can definitely be cleaned up, but just writing out the rough version first.
// Think about refining the code for this game if got time.
var rockPaperScissors = function() {
    if (playerChoice.toLowerCase() === "scissors") {
        if (ownerChoice == "scissor") {
            alert("You both drew scissors! Try Again!");
        } else if (ownerChoice === "paper") {
            alert("You won! The owner picked " + ownerChoice + "! You get a free drink!");
        } else if (ownerChoice === "rock") {
            alert("You lost! The owner picked " + ownerChoice + "! You have to buy the owner a drink!");
        } else {
            alert("Something went wrong.")
        };
    };
    if (playerChoice.toLowerCase() === "paper") {
        if (ownerChoice == "paper") {
            alert("You both drew paper! Try Again!");
        } else if (ownerChoice === "rock") {
            alert("You won! The owner picked " + ownerChoice + "! You get a free drink!");
        } else if (ownerChoice === "scissors") {
            alert("You lost! The owner picked " + ownerChoice + "! You have to buy the owner a drink!");
        } else {
            alert("Something went wrong.")
        };
    };
    if (playerChoice.toLowerCase() === "rock") {
        if (ownerChoice == "rock") {
            alert("You both drew rock! Try Again!");
        } else if (ownerChoice === "scissors") {
            alert("You won! The owner picked " + ownerChoice + "! You get a free drink!");
        } else if (ownerChoice === "paper") {
            alert("You lost! The owner picked " + ownerChoice + "! You have to buy the owner a drink!");
        } else {
            alert("Something went wrong.")
        };
    };
    return;
};