var firstQuestion = prompt("Welcome to Master Chef in Singapore! How many judges there? Type a number:");

if (firstQuestion < 5) {
     var whichOne = prompt("Which food do you think the judges prefer? Sushi or Ramen? Type \"S\" or \"R\"");
      if (whichOne === "S") {
          var salmonOrTuna = prompt("Would you go for Salmon or Tuna? Type \"S\" or \"T\"");
          if (salmonOrTuna === "S") {
            alert("Great choice! The head of judge liked a lot!");
        } else if (salmonOrTuna === "T") {
            alert("\"Hmmmm.....Not my favorite.\" The head of judge doesn't like Tuna.");
        }
       } else if (whichOne === "R") {
        var howManyMins = prompt("How many minutes do you boil the noodle? Type a number");
        if (howManyMins <= 3) {
            alert("You know how to cook Al dente! Good job!");
        } else if (howManyMins > 3) {
            alert("Is this jelly or noodles? Yikes!");
        }
       }
 } else if (firstQuestion >= 5 && firstQuestion < 10) {
    var howIsMeat = prompt("You have to make perfect steak. How many minutes would you cook? Type a number:");
    if (howIsMeat < 5) {
        alert("Too rare! It Tastes too blood....");
    } else if (howIsMeat >= 5 && howIsMeat <= 8) {
        alert("Wow, this is incredibly perfect cooked steak!");
    } else if (howIsMeat > 8) {
        alert("Uggg, over cooked. The meat lost all its flavor.");
    }
 } else if (firstQuestion >= 10) {
    var bigGroup = prompt("You've got a big group of judge. Which kind of cuisine would you cook? Italian, French or Spanish? Type \"I\",\"F\" or \"S\"");
    if (bigGroup === "I") {
        alert("Bad luck! The judges are not really fan of Italian cuisine....");
    } else if (bigGroup === "F") {
        alert("\"This isn't authentic French!\" The chef Ramsay throw the food into garbage bin.");
    } else if (bigGroup === "S") {
        alert("All the judges enjoying the food. Well done!");
        var chooseWine = prompt("They want to drink wine too. Which wine would you choose? Red or White? Type \"R\" or \"W\"");
        if (chooseWine === "R") {
            alert("Great choice! They love red wine.");
        } else if (chooseWine === "W") {
            alert("Seems it wasn't a good choice. They prefer red wine.");
        }
    }
 }