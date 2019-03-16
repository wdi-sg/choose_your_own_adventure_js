var firstQuestion = prompt("Welcome to Master Chef in Singapore! How many judges there? Type the number:");

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
        var howManyMins = prompt("How many minutes do you boil the noodle? Type the number");
        if (howManyMins <= 3) {
            alert("You know how to cook Al dente! Good job!");
        } else if (howManyMins > 3) {
            alert("Is this jelly or noodles? Yikes!");
        }
       }
// } else if (firstQuestion > 5 || firstQuestion < 9) {

// }