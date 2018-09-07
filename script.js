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
                console.log("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location + ". You will gain " + caloriePoints + " calories after eating this.")
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
                console.log("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location + ". You will gain " + caloriePoints + " calories after eating this.")
            }
        };
        food.items.forEach(thingThatHappensForEachValue);
    }
} else if (foodChoice.toLowerCase() === "rice") {
    var riceChoice = prompt("What rice do you want? Fried rice, Chicken Rice, Duck Rice, Nasi Padang?")
    var thingThatHappensForEachValue = function(food) {
        if (food.foodtype.toLowerCase().includes(riceChoice)) {
            caloriePoints = caloriePoints + parseInt(food.calories)
            console.log("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location + ". You will gain " + caloriePoints + " calories after eating this.")
        }
    };
    food.items.forEach(thingThatHappensForEachValue);
} else if (foodChoice.toLowerCase() === "salad") {
    var saladChoice = prompt("What would you like your salad with? Steak, Fish or nothing?")
    var thingThatHappensForEachValue = function(food) {
        if (food.foodtype.toLowerCase().includes(saladChoice)) {
            caloriePoints = caloriePoints + parseInt(food.calories)
            console.log("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location + ". You will gain " + caloriePoints + " calories after eating this.")
        }
    };
    food.items.forEach(thingThatHappensForEachValue);
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