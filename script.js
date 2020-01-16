// Prompt the player for their name
var nameOfPlayer = prompt("Hello, what is your name?")
// Prompt the player on their choice of food
var foodChoice = prompt("Nice to meet you, " + nameOfPlayer + ". Would you like to have noodles, rice, salad, or you are lazy to think and wanna have a random choice?")
// Introduced Calories as the points systems
var caloriePoints = 0;
// Create a random function to choose a random item from the food.items array.
var randomChoice = food.items[Math.floor(Math.random() * food.items.length)]
// Create a variable to define the hunger level
var hungryOrNot = true
// Initialize a starting value for the number game.
var moneyToPay = 5
// Create a array to pick a random value from for the Rock Paper Scissors Game
var rockPaperScissorsArray = ["rock", "paper", "scissors"]
var ownerChoice = rockPaperScissorsArray[Math.floor(Math.random() * 2)]

// Logic for food choices 
if (foodChoice.toLowerCase() === "noodles") {
    var noodleChoice = prompt("Would you like soup or dry noodles?")
    // logic if choose soup noodles
    if (noodleChoice.toLowerCase() === "soup") {
        var soupNoodleChoice = prompt("Would you like to have fishball noodles, ramen or Seafood soup noodles?")
        // Set forEach function to loop through the entire object showing the foods and returns something when it finds a match
        var thingThatHappensForEachValue = function(food) {
            if (food.foodtype.toLowerCase().includes(soupNoodleChoice)) {
                caloriePoints = caloriePoints + parseInt(food.calories)
                alert("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location + ". You will gain " + caloriePoints + " calories after eating this.")
                // Logic if choose dry noodles
            }
        };
        food.items.forEach(thingThatHappensForEachValue)
    } else if (noodleChoice.toLowerCase() === "dry") {
        var dryNoodleChoice = prompt("Would you like to have dry wanton noodle, fried hokkien noodles or tenzaru soba")
        // Set forEach function to loop through the entire object showing the foods and returns something when it finds a match
        var thingThatHappensForEachValue = function(food) {
            if (food.foodtype.toLowerCase().includes(dryNoodleChoice)) {
                caloriePoints = caloriePoints + parseInt(food.calories)
                alert("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location + ". You will gain " + caloriePoints + " calories after eating this.")
            }
        };
        food.items.forEach(thingThatHappensForEachValue);
    }
} else if (foodChoice.toLowerCase() === "rice") {
    var riceChoice = prompt("What rice do you want? Fried rice, Chicken Rice, Duck Rice, Nasi Padang?")
    var thingThatHappensForEachValue = function(food) {
        if (food.foodtype.toLowerCase().includes(riceChoice)) {
            caloriePoints = caloriePoints + parseInt(food.calories)
            alert("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location + ". You will gain " + caloriePoints + " calories after eating this.");
            alert("Surprise! The Uncle decides to play a game with you. He takes out a Black Jar with 10 Ping Pong Balls with different values on it. You will both dip your hands into the Jar one at a time, and the person with the bigger number will win. You will both start at $5 and each time you win, you pay $1 less. If you lose the round, you pay $1 more. The game will go on until you either pay $10 or nothing.")
            numberGame();
            if (moneyToPay === 0) {
                alert("You won! Your meal is free!");
            } else if (moneyToPay === 10) {
                alert("You lost! You have to pay $10 for your meal!");
            } else {
                return;
            };
        };
    };
    food.items.forEach(thingThatHappensForEachValue);
} else if (foodChoice.toLowerCase() === "salad") {
    var saladChoice = prompt("What would you like your salad with? Steak, Fish or nothing?")
    var thingThatHappensForEachValue = function(food) {
        if (food.foodtype.toLowerCase().includes(saladChoice)) {
            caloriePoints = caloriePoints + parseInt(food.calories)
            alert("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location + ". You will gain " + caloriePoints + " calories after eating this.")
        };
    };
    food.items.forEach(thingThatHappensForEachValue);
    alert("The owner of the place is a Rock Paper Scissors Olympic Champion. He challenges you to a game of Rock Paper Scissors. On the line is not Olympic Glory, but a cup of drink. If you lose, you have to buy him a drink. Otherwise, if you win, he will give you a free drink!")
    var playerChoice = prompt("What is your Choice? scissors, rock or paper?")
    // Call the rock paper scissors game function
    rockPaperScissors();
} else {
    alert("You can go eat " + randomChoice.foodtype + " at " + randomChoice.shop + " located at " + randomChoice.location + ". You will gain " + randomChoice.calories + " calories after eating this.");
    caloriePoints = caloriePoints + randomChoice.calories
};
// Added to check if the player is hungry and wants to eat more
hungryOrNot = confirm("Do you want to eat more?")
if (hungryOrNot === true) {
    // Tempporarily added this to reload the page if the player chooses to eat more.
    // I want to check if there is another weay to do this so that the points and user name persists in the memory.
    alert("OK. You will have to make your choices again.");
    location.reload();
} else {
    alert("That's great! Moderation is the key to good health.");
};