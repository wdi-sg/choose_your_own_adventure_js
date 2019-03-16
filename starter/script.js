var name = prompt("Enter your name!")
var gameChoice = prompt(`Hello, ${name}! Do you want to guess the order of numbers or letters? (N / L)`).toLowerCase();

var score;

if (gameChoice === "n") {
    // ask user for number that wants to be shuffled
    var numArray = promptNStore("number");   // this is an array
    console.log("Ori array: " + numArray);

    // randomise the order of the current array
    numArray = shuffle(numArray);
    console.log("Shuffled array: " + numArray);

    alert("TIME TO GUESS THE ORDERS OF THE NUMBER!");

    // ask user to guess order and make an array
    var ansNumArray = promptNStore("order");
    console.log("Ans array: " + ansNumArray);

    score = checkMatch(numArray, ansNumArray);
    if (score === 0) {
        alert(`TOO BAD! \nSCORE: ${score}`);
    } else {
     alert(`CONGRATS! \nSCORE: ${score}`);
    }
} // end of game choice