// put code here

// Global Variables
var hit_miss = ["hit", "miss"];

var player = {
  name: "",
  health: 100,
  attack: 0,
  hit_points: 0,
  score: 0
};

var enemy = {
  zombie:{
    name: "Zombie",
    health: 100,
    attack: 20,
    hit_points: 0
  },
  nemesis:{
    name: "Nemesis",
    health: 100,
    attack: 30,
    hit_points: 0
  },
  snake:{
    name: "Snake",
    health: 100,
    attack: 50,
    hit_points: 0
  }
};

var weapons_array = ["sword", "gun", "rifle", "shotgun"];

var weapons_obj = {
  sword:{
    damage: 10
  },
  gun:{
    damage: 20
  },
  rifle:{
    damage: 30
  },
  shotgun:{
    damage: 50
  }
};

// ------------------------------- Start of functions---------------------------------------------------------

// Function to drop weapon loot that will determine player's attack damage
function drop_loot(){
  var weapon_index = Math.floor((Math.random() * 4) + 0);
  var weapon = weapons_array[weapon_index];
  player.attack = weapons_obj[weapon].damage;
  alert("Player has acquired " + weapon + " and the damage is " + weapons_obj[weapon].damage);
}

// Function for continuous battle between player and enemy till either health reaches <= 0
function battle(player, enemy_name){
  alert("Battle between " + player.name + " and " + enemy_name + " begins");
  while( (player.health > 0) && (enemy[enemy_name].health > 0) ){
    // Determine whether has player dealt damage to enemy
    var player_hit_miss_index = Math.floor((Math.random() * 2) + 0);
    var player_hit_miss = hit_miss[player_hit_miss_index];
    if (player_hit_miss === "hit") {
      enemy[enemy_name].health -= player.attack;
      player.hit_points += player.attack;
      alert(player.name + " has dealt a damage of " + player.attack + " to " + enemy[enemy_name].name);
      console.log(player.name + " has dealt a damage of " + player.attack + " to " + enemy[enemy_name].name);
    }
    else if (player_hit_miss === "miss") {
      alert(player.name + " has dealt a damage of 0 to " + enemy[enemy_name].name);
      console.log(player.name + " has dealt a damage of 0 to " + enemy[enemy_name].name);
    }

    // Determine whether has enemy dealt damage to player
    var enemy_hit_miss_index = Math.floor((Math.random() * 2) + 0);
    var enemy_hit_miss = hit_miss[enemy_hit_miss_index];
    if (enemy_hit_miss === "hit") {
      player.health -= enemy[enemy_name].attack;
      enemy[enemy_name].hit_points += enemy[enemy_name].attack;
      alert(enemy[enemy_name].name + " has dealt a damage of " + enemy[enemy_name].attack + " to " + player.name);
      console.log(enemy[enemy_name].name + " has dealt a damage of " + enemy[enemy_name].attack + " to " + player.name);
    }
    else if (enemy_hit_miss === "miss") {
      alert(enemy[enemy_name].name + " has dealt a damage of 0 to " + player.name);
      console.log(enemy[enemy_name].name + " has dealt a damage of 0 to " + player.name);
    }
  }

  // Determine who is the victor based on the health
  if (player.health <= 0) {
    alert("BATTLE HAS ENDED!, VICTORY GOES TO " + enemy[enemy_name].name);
    alert(enemy[enemy_name].name + "'s total hit points: " + enemy[enemy_name].hit_points);
  }
  else if (enemy[enemy_name].health <= 0) {
    alert("BATTLE HAS ENDED!, VICTORY GOES TO " + player.name);
    player.score += 100;
    alert(player.name + "'s total score: " + player.score);
    alert(player.name + "'s total hit points: " + player.hit_points);
  }
}

// Function to get the game going
function start_game(){

  // Ask user for name
  var name = prompt("Enter your name: ");
  player.name = name;
  console.log("Name is = " + name);

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
        drop_loot();  // Auto drop weapon loot for player to pick up and determine pkayer's attack damage
        alert("Good, you are still alive. You earn 50 points.");
        player.score += 50;

        var path = prompt("You have turned left but now there are 2 doors in front of you, DEATH/SURVIVE. What is your choice? ");
        if (path.toLowerCase() === "death") {
          battle(player, "zombie");
        }
        else if (path.toLowerCase() === "survive") {
          alert("HOORAY! You made it out of the maze in one single piece alive! You earn extra 100 points.");
          player.score += 100;
          alert("Your total score is: " + player.score);
        }
      }

      else if (left_right.toLowerCase() === "right") {
        drop_loot();  // Auto drop weapon loot for player to pick up and determine pkayer's attack damage
        alert("Good, you are still alive. You earn 50 points.");
        player.score += 50;

        var path = prompt("You have turned right but now there are 2 doors in front of you, CLIFF/SURVIVE. What is your choice? ");
        if (path.toLowerCase() === "cliff") {
          battle(player, "nemesis");
        }
        else if (path.toLowerCase() === "survive") {
          alert("HOORAY! You made it out of the maze in one single piece alive! You earn extra 100 points.");
          player.score += 100;
          alert("Your total score is: " + player.score);
        }
      }
    break;

    // Normal Maze
    case "normal":
      console.log("Entered normal maze");
      var left_right = prompt("You encountered a crosspath, there are only 2 paths ahead of you. Would you like to turn left or right?");
      if (left_right.toLowerCase() === "left") {
        drop_loot();  // Auto drop weapon loot for player to pick up and determine pkayer's attack damage
        alert("Wonderful! You are still alive. You earn 50 points.");
        player.score += 50;

        var path = prompt("You have turned left but now there are 2 doors in front of you, DEATH/SURVIVE. What is your choice? ");
        if (path.toLowerCase() === "death") {
          battle(player, "snake");
        }
        else if (path.toLowerCase() === "survive") {
          alert("HOORAY! You made it out of the maze in one single piece alive! You earn extra 100 points.");
          player.score += 100;
          alert("Your total score is: " + player.score);
        }
      }

      else if (left_right.toLowerCase() === "right") {
        drop_loot();  // Auto drop weapon loot for player to pick up and determine pkayer's attack damage
        alert("Good, you are still alive. You earn 50 points.");
        player.score += 50;

        var path = prompt("You have turned right but now there are 2 doors in front of you, CLIFF/SURVIVE. What is your choice? ");
        if (path.toLowerCase() === "cliff") {
          battle(player, "nemesis");
        }
        else if (path.toLowerCase() === "survive") {
          alert("HOORAY! You made it out of the maze in one single piece alive! You earn extra 100 points.");
          player.score += 100;
          alert("Your total score is: " + player.score);
        }
      }
      break;

    default:
      alert("Sorry!, maze does not exist");
  }
  console.log("Exiting switch block");
}

// ------------------------------- End of functions---------------------------------------------------------


// Ask user how many rounds user wants to play
var rounds = prompt("How many rounds do you want to play? ");
rounds = parseInt(rounds);
for (var i=0; i<rounds; i++){
  console.log("Start Round " + i);

  start_game();
}
