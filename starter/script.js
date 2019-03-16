var name = prompt("Hi there. Please enter your name?")
alert("Hi " + name + " Its nice to meet you. Lets get this game started")// put code here!


// Start Game: Choosing your character

var begin = alert("Avengers Game")

alert("Welcome " + name + " to the Avengers where you will save the universe from Thanos")
alert("The aim of the game is to achieve the highest score possible")
alert("This game has a different narrative for each hero so pick carefully.")
alert("Now lets pick your hero")

// console.log("The war on drugs is taking its toll no matter which side you are on. Only one side wins!")
// console.log("Which side you gonna be on when shit goes down?")

var yourRole = prompt("Would you like to be the Iron-Man or Captain America? Enter 'Iron' or 'Cap'")

if (yourRole === "Iron") {

  var role = "Iron man";


// Game Scenario 1: Iron Man


alert(name + " " + role +" Lets get your suit powered up ")
alert("Ok lets head to the ship where we will travel to defeat Thanos")
alert("you have approached the lair of Thanos")
alert("What is your choice of action " + name)


var fight = prompt ("Choose [A] Fire laser cannon and fight him straight on or [B]Go for a sneak attack. --- Type A or B to enter your choice")

if(fight === "A"){
 alert("After a long fought battle. Thanos proved too strong to handle alone");
 alert("Game Over. Please try again :(");
 // smoothTalk()
 yourScore(`Score : ${30}`)

}}

else if (fight === "B"){

  alert("You sneak behind Thanos and when hes not looking you decide to");
            // bangBang()
            yourScore(`Score : ${50}`)
            var sneak = prompt ("Choose [A] remove his gauntlet or [B] Fire missles when at his weak point")

            if(fight === "A"){ 
              alert("you have removed his gauntlet")
              alert("Thanos is weakened")
              alert("Attack him while you have the chance! "+name )
              var kill = prompt ("[A] Stab Thanos with the dagger or [B] Blast him into pieces using laser cannon")
            }

              if(kill === "A"){
              alert("Thanos has fallen")
              alert("Game Over!")
              alert("You have saved the universe!!" +name + "You should be proud.")
              yourScore(`Score : ${50}`)}
            }

              else if(kill === "B"){
              alert("Thanos has fallen")
              alert("Game Over!")
              alert("You have saved the universe!!" +name + "You should be proud.")
              yourScore(`Score : ${60}`)
            }
            else if (fight === "B"){
              yourScore(`Score : ${20}`)  
            alert("Thanos is badly hurt")
            alert("Thanos begs for mercy!")
            alert("What is your decision.")
            var endgame = prompt ("[A] Bring him back as captive or [B] Blast him into pieces")
           }

            if (endgame === "A"){
              yourScore(`Score : ${0}`)
            alert("Thanos has escaped")
            alert("We will fight him some other time")
            alert("Game Over")
            }

            else if(endgame === "B"){
              alert("Thanos has fallen")
            
            alert("Game Over!")
            alert("You have saved the universe!!" +name + "You should be proud.")
            yourScore(`Score : ${60}`)
          }



