var firstQuestion = prompt("Welcome to Master Chef in Singapore! How many judges there? Type a number:");

if (firstQuestion < 5) {
     var whichOne = prompt("Which food do you think the judges prefer? Sushi or Ramen? Type\"S\"or \"R\"");
      if (whichOne === "S") {
          var salmonOrTuna = prompt("Would you go for Salmon or Tuna? Type\"S\"or \"T\"");
          if (salmonOrTuna === "S") {
            alert("Great choice! The head of judge liked a lot!");
        } else if (salmonOrTuna === "T") {
            alert("\"Hmmmm.....Not my favorite.\" Seems like the head of judge doesn't like Tuna.");
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
        alert("Uggg, over cooked. The meat lost all its flavor.")
    }
 }