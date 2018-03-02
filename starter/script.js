// put code here

// Initialize variables
var player_score = 0;

// Ask user for name
var name = prompt("Enter your name: ");
console.log("Name is = " + name);

// Notify user what game will be played
alert("We are going to play a maze game. In this game, you test your luck at choosing paths whether left or right at every turn you make. Sometimes, a zombie will appear and you will have the chance to kill it or be attacked");
alert("Points will be gained along the way. Your total score will be displayed at the end of the game");

// Ask user which country he wish to visit
var choice = prompt("Nice to meet you, " + name + ". Would you like to enter the zombie maze or the normal maze? [zombie/normal]");

// Switch case based on the country user input
console.log("Entering switch block");
switch (choice.toLowerCase())
{
  // Zombie Maze
  case "zombie":
    console.log("Entered zombie maze");
    var left_right = prompt("You encountered a crosspath, there are only 2 paths ahead of you. Would you like to turn left or right?");
    if (left_right.toLowerCase() === "left") {
      alert("Good, you are still alive. You earn 50 points.");
      player_score += 50;

      var path = prompt("You have turned left but now there are 2 doors in front of you, DEATH/SURVIVE. What is your choice? ");
      if (path.toLowerCase() === "death") {
        player_score -= 50;
        alert("GAME OVER!~~~ You have been killed by the zombie. You have lost all the points. ");
        alert("Your total score is: " + player_score);
      }
      else if (path.toLowerCase() === "survive") {
        alert("HOORAY! You made it out of the maze in one single piece alive! You earn extra 100 points.");
        player_score += 100;
        alert("Your total score is: " + player_score);
      }
    }

    else if (left_right.toLowerCase() === "right") {
      alert("Good, you are still alive. You earn 50 points.");
      player_score += 50;

      var path = prompt("You have turned right but now there are 2 doors in front of you, CLIFF/SURVIVE. What is your choice? ");
      if (path.toLowerCase() === "cliff") {
        alert("You have fallen off the cliff and you are now paralyzed from head to toe, however you still SURVIVED! You lose 40 points.");
        player_score -= 40;
        alert("Your total score is: " + player_score);
      }
      else if (path.toLowerCase() === "survive") {
        alert("HOORAY! You made it out of the maze in one single piece alive! You earn extra 100 points.");
        player_score += 100;
        alert("Your total score is: " + player_score);
      }
    }
  break;

  // Normal Maze
  case "normal":
    console.log("Entered normal maze");
    var left_right = prompt("You encountered a crosspath, there are only 2 paths ahead of you. Would you like to turn left or right?");
    if (left_right.toLowerCase() === "left") {
      alert("Wonderful! You found an poison antitode. You earn 50 points.");
      player_score += 50;

      var path = prompt("You have turned left but now there are 2 doors in front of you, DEATH/SURVIVE. What is your choice? ");
      if (path.toLowerCase() === "death") {
        alert("You enter a room full of poisonous snakes. Suddenly, a snake out from nowehere came and bit you. The poison has entered your bloodstream, you collasped on the ground, minus 20 points");
        player_score -= 20;

        var antitode_choice = prompt("Do you wish to use the antitode you found earlier on? [YES/NO]");
        if (antitode_choice.toLowerCase() === "yes") {
          alert("Phew!, you somehow managed to save yourself, you are back to full health. You have pass the maze. You earned yourself an extra 50 points.");
          player_score += 50;
          alert("Your total score is: " + player_score);
        }
        else if (antitode_choice.toLowerCase() === "no") {
          alert("What a stupid choice to make!!!~~~ You are now dead! You lost all the points.");
          player_score = 0;
          alert("Your total score is: " + player_score);
        }
      }
      else if (path.toLowerCase() === "survive") {
        alert("HOORAY! You made it out of the maze in one single piece alive! You earn extra 100 points.");
        player_score += 100;
        alert("Your total score is: " + player_score);
      }
    }

    else if (left_right.toLowerCase() === "right") {
      alert("Good, you are still alive. You earn 50 points.");
      player_score += 50;

      var path = prompt("You have turned right but now there are 2 doors in front of you, CLIFF/SURVIVE. What is your choice? ");
      if (path.toLowerCase() === "cliff") {
        alert("You have fallen off the cliff but PHEW! you somehow managed to survive because you fell into a river and it washed you ashore. You earn extra 200 points for being lucky.");
        player_score += 200;
        alert("Your total score is: " + player_score);
      }
      else if (path.toLowerCase() === "survive") {
        alert("HOORAY! You made it out of the maze in one single piece alive! You earn extra 100 points.");
        player_score += 100;
        alert("Your total score is: " + player_score);
      }
    }
    break;

  default:
    alert("Sorry!, maze does not exist");
}
console.log("Exiting switch block");
