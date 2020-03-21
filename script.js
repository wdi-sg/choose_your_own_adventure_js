console.log("hello script js");

//shortcut
var input = document.getElementById("input");
//empty Variables
var userName = "Harry";

//Array
var horcrux = ["Tom Riddle's diary", "Marvolo Gaunt's ring", "Salazar Slytherin's locket", "Helga Hufflepuff's cup", "Rowena Ravenclaw's diadem", "Nagini, the snake", "Harry Potter himself"];

//count Variables
var count = 0;


//reset Text Box's value after user input.
var inputReset = function() {
    input.value = "";
};

var resetPH = function() {
    input.placeholder  = "";
};

//default setting
var contPH = function () {
    input.placeholder = "enter 1 to continue";
};

//game start

contPH();
var inputHappened = function(currentInput){
    if (parseInt(currentInput) === 1 && count === 0) {
        contPH();
        count++;
        console.log("Input Start: " +count);
        inputReset();
        input.placeholder = "fang or sword"
        return `Hi ${userName}. Pick a weapon. Basilisk's Fang or Gryffindor's Sword?`;
    } else if (currentInput.toLowerCase() === "fang" && count === 1) {
        count++;
        console.log("Input fang: " +count);
        inputReset();
        input.placeholder = "A or B";
        return `Pick a letter: A or B`;
    } else if (currentInput.toLowerCase() === "a" && count === 2) {
        count++
        console.log("Input A: " +count);
        inputReset();
        input.placeholder = "glass or key";
        return `You have entered the Chamber of Secret? \n
        Pick an item from the room: glass or key`;
    } else if (currentInput.toLowerCase() === "glass" && count === 3) {
        count++
        console.log("Input glass: " +count);
        inputReset();
        input.placeholder = "Y or I";
        return `A secret word is at the bottom of the glass: \n
        What letter is missing? "Gr_ffindor" \n
        Y or I`;
    } else if (currentInput.toLowerCase() === "y" && count === 4) {
        count++
        console.log("Input Y: " +count);
        inputReset();
        input.placeholder = "yes or no";
        return `You got it. Tom Riddle's diary found. \n
        Continue to other Quest? Yes or No`;
    } else if (currentInput.toLowerCase() === "yes" && count === 5) {
        count++
        console.log("Input Yes: " +count);
        inputReset();
        input.placeholder = "sword or fang";
        return `Pick a weapon. Gryffindor's Sword or Basilisk's Fang`;
    } else if (currentInput.toLowerCase() === "fang" && count === 6) {
        count++
        console.log("Input fang: " +count);
        inputReset();
        input.placeholder = "let me check";
        return "Done."
    } else {
        console.log(count);
        inputReset();
        return "Please enter a valid choice.";
    };
    console.log("outside " + count);
};