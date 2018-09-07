// Prompt the player for their name
var nameOfPlayer = prompt("Hello, what is your name?")
// Prompt the player on their choice of food
var foodChoice = prompt("Nice to meet you, " + nameOfPlayer + ". Would you like to have noodles, rice, salad, or something else?")
console.log(food)
// Logic for food choices 
if (foodChoice.toLowerCase() === "noodles") {
    var noodleChoice = prompt("Would you like soup or dry noodles?")
    // logic if choose soup noodles
    if (noodleChoice.toLowerCase() === "soup") {
        var soupNoodleChoice = prompt("Would you like to have fishball noodles, ramen or wanton soup noodles?")
        // Set forEach function to loop through the entire object showing the foods and returns something when it finds a match
        var thingThatHappensForEachValue = function(food) {
            if (food.foodtype.toLowerCase().includes(soupNoodleChoice)) {
                console.log("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location)
                // Logic if choose dry noodles
            }
        };
        food.items.forEach(thingThatHappensForEachValue)
    } else if (noodleChoice.toLowerCase() === "dry") {
        var dryNoodleChoice = prompt("Would you like to have dry wanton noodle, fried hokkien noodles or tenzaru soba")
        // Set forEach function to loop through the entire object showing the foods and returns something when it finds a match
        var thingThatHappensForEachValue = function(food) {
            if (food.foodtype.toLowerCase().includes(dryNoodleChoice)) {
                console.log("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location)
            }
        };
        food.items.forEach(thingThatHappensForEachValue);
    }
} else if (foodChoice.toLowerCase() === "rice") {
    var riceChoice = prompt("What rice do you want? Fried rice, Chicken Rice, Duck Rice, Nasi Padang?")
    var thingThatHappensForEachValue = function(food) {
        if (food.foodtype.toLowerCase().includes(riceChoice)) {
            console.log("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location)
        }
    };
    food.items.forEach(thingThatHappensForEachValue);
} else if (foodChoice.toLowerCase() === "salad") {
    var saladChoice = prompt("What would you like your salad with? Steak, Fish or nothing?")
    var thingThatHappensForEachValue = function(food) {
        if (food.foodtype.toLowerCase().includes(saladChoice)) {
            console.log("You can go eat " + food.foodtype + " at " + food.shop + " located at " + food.location)
        }
    };
    food.items.forEach(thingThatHappensForEachValue);

} else {
    console.log("Would you like something else?")
}