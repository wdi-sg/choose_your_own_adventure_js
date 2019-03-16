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

    alert("TIME TO GUESS THE ORDERS OF THE NUMBERS!");

    // ask user to guess order and make an array
    var ansNumArray = promptNStore("order");
    console.log("Ans array: " + ansNumArray);

    score = checkMatch(numArray, ansNumArray);
    if (score === 0) {
        alert(`TOO BAD! \nSCORE: ${score}`);
    } else {
     alert(`CONGRATS! \nSCORE: ${score}`);
    } // end of number game

} else if (gameChoice === "l") {
    // ask user for letters that wants to be shuffled
    var letterArray = promptLStore("letter");
    console.log("Ori array: " + letterArray);

    // shuffle letter array
    letterArray = shuffle(letterArray);
    console.log("Shuffled array: " + letterArray);

    alert("TIME TO GUESS THE ORDERS OF THE LETTERS!");

    // ask user to guess order and make an array
    var ansLetterArray = promptLStore("order");
    console.log("Ans array: " + ansLetterArray);

    score = checkMatch(letterArray, ansLetterArray);
    if (score === 0) {
        alert(`TOO BAD! \nSCORE: ${score}`);
    } else {
     alert(`CONGRATS! \nSCORE: ${score}`);
    } // end of letter game


}// end of game choice