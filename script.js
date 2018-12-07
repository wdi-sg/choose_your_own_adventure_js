var name = prompt("What is your name");
var gender = prompt("What is your gender? Male/Female");
alert("Hi" + " " + " " + name + "." + " " + "Nice name!!!");
var game = prompt("Which game would you like to play? Prince & Princess or Police & Thief");
var gamePlay = ["Prince & Princess", "Police & Thief"]

// Game Prince & Princess
alert("Welcome to the world of Prince & Princess. Lets take you to the land of their dreams")
// //var entryExit = prompt("Excited to play the game further and help the Prince to find his Princess? Yes or No")

//Level 1 - Door choice
var doorChoice = prompt("You are at the Princess Palace. You have 2 doors to choose between. Which door you would choose? Door1 or Door2");

if (doorChoice === "Door1") 
{
  alert("You have reached the next level in the Palace. You will be facing the soldier of the Palace");
  var soldierChoice = prompt("Would you like to continue? Yes or No");
 
    if (soldierChoice.toLowerCase() === "yes")
    {
       alert("Great!!! Lets move forward")
       alert("You have the choice to either fight the soldier or run away.");
       var fightChoice = prompt("What would you choose? Fight or Run away");
    }else if (soldierChoice.toLowerCase() === "no")
    {
      alert("Guess you would like to come back again well prepared");
    }
          
         if (fightChoice.toLowerCase() === "Fight")
         {
           alert("Good moves!!!. Congratulations now you can move to next level");
           alert("You have reached to the last level of the game.");
           var doorChoice2 = prompt("You have 2 doors to choose between. Which door you would choose? Door1 or Door2");
         }else if (fightChoice.toLowerCase() === "Run away")
        {
          alert("Sad that you want to run away and dont want to fight for your princess.Better luck next time");
        }

            if (doorChoice2 === "Door1")
            {
              alert("Hurray!!! You found your princess. Wish you both a happy life together");
            }else
            {

            }
               
    

 }


//  else 
//  if (doorchoice === "Door2")
// {
//   alert("You have reached the next level in the Palace.You will be facing the dog of the Palace");
//   var dogChoice
// }

//  if (soldierchoice === "Yes")
//  var 
// }else 
// if (doorchoice === "Door2")
// {
//  alert("You have reached the next level in the Palace.You will be facing the dog of the Palace");
//  var  soldierchoice = prompt("Would you like to continue? Yes or No");
// }





















//Police & Thief
// alert("You had to choose some direction and you chose West. You have been walking for miles.... and you're thirsty, and dehydrated.");
// alert("... you have just begun to feel you're walking into eternity when you see a T-junction. But just then you hear a ROAR!!!");
// alert("You turn back to see a giant lion, miles away, running after you at great speed. You just have time to react. What now?);
