
var smallGroup = function(firstQuestion) {
    if (firstQuestion < 5) {
     var whichOne = prompt("Which food do you think the judges prefer? \"Sushi\" or \"Ramen\"?");
      if (whichOne === "Sushi") {
          var salmonOrTuna = prompt("Would you go for \"Salmon\" or \"Tuna\"?");
          if (salmonOrTuna === "Salmon") {
            alert("Great choice! The head of judge liked a lot!");
        } else if (salmonOrTuna === "Tuna") {
            alert("\"Hmmmm.....Not my favorite.\" The head of judge doesn't like Tuna.");
        }
       } else if (whichOne === "Ramen") {
        var howManyMins = prompt("How many minutes do you boil the noodle? Type a number:");
        if (howManyMins <= 3) {
            alert("You know how to cook Al dente! Good job!");
        } else if (howManyMins > 3) {
            alert("Is this jelly or noodle? You boiled too much! Yikes!");
        }
       }
 }
}


var mediumGroup = function(firstQuestion) {
    if (firstQuestion >= 5 && firstQuestion < 10) {
    var howIsMeat = prompt("You have to make the perfect steak. How many minutes would you cook? Type a number:");
    if (howIsMeat < 5) {
        alert("Too rare! It Tastes too blood....");
    } else if (howIsMeat >= 5 && howIsMeat <= 8) {
        alert("Wow, this is incredibly perfect cooked steak!");
    } else if (howIsMeat > 8) {
        alert("Uggg, over cooked. The meat lost all its flavor.");
    }
 }
}



var largeGroup = function(firstQuestion) {
    if (firstQuestion >= 10) {
    var bigGroup = prompt("You've got a big group of judge. Which kind of cuisine would you cook? \"Italian\", \"French\" or \"Spanish\"?");
    if (bigGroup === "Italian") {
        alert("Bad luck! The judges are not really fan of Italian cuisine....");
    } else if (bigGroup === "French") {
        alert("\"This isn't the authentic French!\" The chef Ramsay throw the food into garbage bin.");
    } else if (bigGroup === "Spanish") {
        alert("All the judges enjoying the food. Well done!");
        var chooseWine = prompt("Now, they want to drink wine too. Which wine would you choose? \"Red\" or \"White\"?");
        if (chooseWine === "Red") {
            alert("Great choice! They love red wine.");
        } else if (chooseWine === "White") {
            alert("Seems it wasn't a good choice. They prefer red wine.");
        }
    }
 }
}

// var askUserName = function() {
//     var userName = prompt("Welcome to Master Chef in Singapore! What's your name? Type your name:");
//     alert("Hello " + userName.toString() + "!");
// }



var startQuestion = prompt("How many judges are there? Type a number:");

//askUserName();
smallGroup(startQuestion);
mediumGroup(startQuestion);
largeGroup(startQuestion);