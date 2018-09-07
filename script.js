var nameOfPlayer = prompt("Hello, what is your name?")

var foodChoice = prompt("Nice to meet you, " + nameOfPlayer + ". Would you like to have noodles, rice, salad, or something else?")

if (foodChoice.toLowerCase() === "noodles") {
    var noodleChoice = prompt("Would you like soup or dry noodles?")
    console.log(noodleChoice)
} else if (foodChoice.toLowerCase() === "rice") {
    var riceChoice = prompt("What kinda rice do you like?")
    console.log(riceChoice)
} else if (foodChoice.toLowerCase() === "salad") {
    var saladchoice = prompt("What would you like your salad with?")
    console.log(saladchoice)
} else {
    console.log("Would you like something else?")
}