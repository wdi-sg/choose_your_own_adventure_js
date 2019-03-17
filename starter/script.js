var name = prompt("Hi there. Please enter your name?");
if (name === "null") {
  location.reload(); //break out of the function early
}
// alert("Hi " + name + " Its nice to meet you. Lets get this game started");// put code here!

// Start Game: Choosing your character

var begin = alert("Avengers Game");

alert("Welcome " + name + " to the Avengers where you will save the universe from Thanos");
alert("The aim of the game is to achieve the highest score possible");
alert("This game has a different narrative for each hero so pick carefully.");
alert("Now lets pick your hero");

var yourRole = prompt("Would you like to be the Iron-Man or Captain America? Enter 'Iron' or 'Cap'");

if (yourRole === "Iron") {
  var role = "Iron man";
  // Game Scenario 1: Iron Man
  alert(name + " " + role +" Lets get your suit powered up ");
  alert("Ok lets head to the ship where we will travel to defeat Thanos");
  alert("you have approached the lair of Thanos");
  alert("What is your choice of action " + name);


  var fight = prompt ("Choose [A] Fire laser cannon and fight him straight on or [B]Go for a sneak attack. --- Type A or B to enter your choice");
  if (fight === "A"){
   alert("After a long fought battle. Thanos proved too strong to handle alone");
   yourScore(`Game Over. You suck bad. Score: ${0}`);
   location.reload();
 }
 else {
  alert("You sneak behind Thanos and when hes not looking you decide to");
  yourScore(`Smart choice! You earned 50 points. Score: ${50}`);
  var sneak = prompt ("Choose [A] remove his gauntlet or [B] Fire missles when at his weak point");

  if (fight === "A") { 
    alert("you have removed his gauntlet");
    alert("Thanos is weakened");
    alert("Attack him while you have the chance! " + name );
    var kill = prompt ("[A] Stab Thanos with the dagger or [B] Blast him into pieces using laser cannon");
    if (kill === "A") {
      alert("Thanos has fallen");
      alert("Game Over!");
      yourScore(`ou have saved the universe!!" + name + "You should be proud. Score : ${80}`);}
    }
    else if (fight === "B") {
      yourScore(`Thanos is badly hurt. Score: ${80}`);
      alert("Thanos begs for mercy!");
      alert("What is your decision.");
      var endgame = prompt ("[A] Bring him back as captive or [B] Blast him into pieces");
      if (endgame === "A") {
        yourScore(`Thanos has escaped. Score : ${90}`);
        alert("We will fight him some other time");
        alert("Game Over");
        location.reload();
      }
      else if (endgame === "B") {
        alert("Thanos has fallen");
        alert("Game Over!");
        yourScore("You have saved the universe!!" + name + "You should be proud. Score: ${100}");
        location.reload();

      }
    }
  } 
}
// Game Scenario 2: Captain 
else if (yourRole === "Cap") { 
  var role = "Captain America";
  alert(name + " " + role +" Lets get your shield and lets head to the aircraft.");
  alert("Ok lets head to the aircraft where we will travel to defeat Thanos");
  alert("you have approached the lair of Thanos");
  alert("What is your choice of action " + name);


  var fight = prompt ("Choose [A] Attack it head on! For the AVENGERS! [B]Go around for a sneak attack. --- Type A or B to enter your choice");
  if (fight === "A") {
   alert("After a long fought battle. Thanos proved too strong to handle alone");
   alert("Your Shield has broken!");
   yourScore(`Game Over. You suck bad. Score: ${0}`);
   location.reload();
  }
  else if (fight === "B") {
  alert("You sneak behind Thanos and when hes not looking you decide to");
  yourScore(`Smart choice! You earned 50 points. Score: ${50}`);
  var sneak = prompt ("Choose [A] remove his gauntlet or [B] Throw shield at Thanos");
  if (sneak === "A") { 
    alert("you have removed his gauntlet");
    alert("Thanos is weakened");
    alert("Attack him while you have the chance! " + name );
    var kill = prompt ("[A] Stab Thanos with the dagger or [B] Capture Thanos as captive");
    if (kill === "A") {
      alert("Thanos has fallen");
      alert("Game Over!");
      yourScore("You have saved the universe!! " + name + `You should be proud. Score: ${80}`);
      //score doesnt register properly
      location.reload();
    }
    else if (kill === "B") {
      alert("On the way back our ship has been attacked.");
      alert("Thanos has escaped");
      alert("We will fight him some other time");
      yourScore(`Game Over. Score : ${60}`);
      location.reload();
    }
  }
  else if (sneak === "B") {
    yourScore(`Thanos has been dazed from your shield. Score: ${80}`);
    alert(name + ", this is your moment to strike when hes down");
    alert("What is your decision.");
    var endgame = prompt ("[A] Remove gauntlet or [B] Go head on and destroy Thanos");
    if (endgame === "A") {
      yourScore(`Thanos is now weakened. Score : ${100}`);
      alert("Now is our chance " + name + " finish him off now!");
      var kill = prompt ("[A] Stab Thanos with the dagger or [B] Capture Thanos as captive");
      if (kill === "A") {
        alert("Thanos has fallen");
        alert("Game Over!");
        yourScore('You have saved the universe!! ' + name + `You should be proud. Score : ${150}`);
          location.reload();
      }
      else if (kill === "B") {
        alert("On the way back our ship has been attacked.");
        alert("Thanos has escaped");
        alert("We will fight him some other time");
        yourScore(`Game Over. Score : ${110}`);
        location.reload();
      }
    }
    else if (endgame === "B") {
      alert("Thanos draws power from all the infinity stones");
      alert("Thanos sends a huge blast of energy at you");
      alert("This proved too much to handle for " + name);
      yourScore(`Game Over! Try again. Score: ${80}`);
      location.reload();
    }
  }
}
}
