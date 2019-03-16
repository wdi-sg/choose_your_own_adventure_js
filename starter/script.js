var name = prompt("Enter your name!")
var gameChoice = prompt(`Hello, ${name}! Do you want to guess the order of numbers or letters? (N / L)`).toLowerCase();

var numArray = [];
var ansNumArray = [];
var score;

if (gameChoice === "n") {
    var test = test(numArray, "number");
    console.log(test);
    //var firstNumber = askNumber("first", "number");

   /* if (Number.isInteger(firstNumber) === true) {
        var secondNumber = askNumber("second", "number");

        if (Number.isInteger(secondNumber) === true) {
            var thirdNumber = askNumber("third", "number");

            if (Number.isInteger(thirdNumber) === true) {
                eleToArray(numArray, firstNumber, secondNumber, thirdNumber);

                // randomise the order of the current array
                numArray = shuffle(numArray);
                console.log(numArray);

                alert("TIME TO GUESS THE ORDERS OF THE NUMBER!")

                var firstOrder = askNumber("first", "order");

                if (Number.isInteger(firstOrder) === true) {
                    var secondOrder = askNumber("second", "order");

                    if (Number.isInteger(secondOrder) === true) {
                        var thirdOrder = askNumber("third", "order")

                        if (Number.isInteger(thirdOrder) === true) {
                            eleToArray(ansNumArray, firstOrder, secondOrder, thirdOrder);

                            console.log(ansNumArray);

                            score = checkMatch(numArray, ansNumArray);
                            if (score === 0) {
                                alert(`TOO BAD! \nSCORE: ${score}`);
                            } else {
                               alert(`CONGRATS! \nSCORE: ${score}`);
                            }





                        } else {  // error for third order
                            alert(numError());
                        }
                    } else {  // error for second order
                        alert(numError());
                    }
                } else {  // error for first order
                    alert(numError());
                }

            } else {   // error for third number
                alert(numError());
            }
        } else { // error for second number
            alert(numError());
        }
    } else {  // error for first number
        alert(numError());
    }*/
} // end of game choice