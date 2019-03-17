//based on the user input guide the user to 11 different destinations
var game = function() {
    var firstQuestion = prompt("How many judges are there? Type a number:");
    var score = 0;
    if (firstQuestion < 5) {
     var whichOne = prompt("Which food do you think the judges prefer? \"Sushi\" or \"Ramen\"?");
      if (whichOne === "Sushi") {
          var salmonOrTuna = prompt("Would you go for \"Salmon\" or \"Tuna\"?");
          if (salmonOrTuna === "Salmon") {
            score++;
            alert("Great choice! The head of judge liked a lot!");
            keepScore(score);
        } else if (salmonOrTuna === "Tuna") {
            alert("\"Hmmmm.....Not my favorite.\" The head of judge doesn't like tuna.");
            keepScore(score);
        }
       } else if (whichOne === "Ramen") {
        var howManyMins = prompt("How many minutes do you boil the noodle? Type a number:");
        if (howManyMins <= 3) {
            score ++;
            alert("You know how to cook Al dente! Good job!");
            keepScore(score);
        } else if (howManyMins > 3) {
            alert("Is this jelly or noodle? You boiled too much! Yikes!");
            keepScore(score);
        }
       }
 } else if (firstQuestion >= 5 && firstQuestion < 10) {
    var howIsMeat = prompt("You have to make the perfect steak. How many minutes would you cook? Type a number:");
    if (howIsMeat < 5) {
        alert("Too rare! It Tastes too blood....");
        keepScore(score);
    } else if (howIsMeat >= 5 && howIsMeat <= 8) {
        score++;
        alert("Wow, this is incredibly perfect cooked steak!");
        keepScore(score);
    } else if (howIsMeat > 8) {
        alert("Uggg, over cooked. The meat lost all its flavor.");
        keepScore(score);
    }
 } else if (firstQuestion >= 10) {
    var bigGroup = prompt("You've got a big group of judge. Which kind of cuisine would you cook? \"Italian\", \"French\" or \"Spanish\"?");
    if (bigGroup === "Italian") {
        score--;
        alert("Bad luck! The judges are not really fan of Italian cuisine....");
        keepScore(score);
    } else if (bigGroup === "French") {
        score--;
        alert("\"This isn't the authentic French!\" The chef Ramsay throw the food into garbage bin.");
        keepScore(score);
    } else if (bigGroup === "Spanish") {
        alert("All the judges enjoying the food. Well done!");
        var chooseWine = prompt("Now, they want to drink wine too. Which wine would you choose? \"Red\" or \"White\"?");
        if (chooseWine === "Red") {
            score += 2;
            alert("Great choice! They love red wine.");
            keepScore(score);
        } else if (chooseWine === "White") {
            score++;
            alert("Seems it wasn't a good choice. They prefer red wine.");
            keepScore(score);
        }
    }
 }
//ask the user if they want to play again
var playAgain = confirm("Do you want to play again?");
if (playAgain === true) {
    game();
} else {
    alert("Thanks for playing! See you again ;)")
}
}

//keep score and report the user score at the end of the game
var keepScore = function(score) {
    score++;
    alert("You got " + score + " point :D");
}

//ask for the user name and start the game
var playGame = function() {
    var userName = prompt("Hello! What's your name? Type your name:");
    if (isNaN(userName)) {
        alert("Welcome to Master Chef in Singapore, " + userName.toString() + "!");
        game();
    } else {
        alert("Please type your name.");
    }
}


playGame();