// var myInput;
// var currentStage = 0;

// var yearChoice = ['2015', '1985', '1955'];
// var yearMsg = ["I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**", "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?", "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do?**(Y/N/S)**"];

// var charChoice = ['B', 'G'];
// var charMsg = ["Hmm, interesting. Biff is angry and has a cane. Do you Stand and fight, or Run away like a coward? **(S/R)**", "Griff is asking you if you are in, or out. What do you say?**(I/O)**"];

// var fightFlightChoice = ['S', 'R'];
// var fightFlightMsg = ["Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.", "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."];

// var inputHappened = function(currentInput){
//     myInput = currentInput.toUpperCase();

//     switch (myInput) {
//         case '2015':
//             msg = "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B or G)";
//             var charChoice = ['b', 'g'];
//             case 'b':
//                 msg =
//             break;
//         case '1985':
//             msg = "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?"
//             break;
//         default:
//             msg = "Please enter choice";
//     } // END OF YEAR CHOICE  //////////////////
//     display( msg );
// }



// ////////////////////////////////////
// // PLAYER CHOOSE LEVEL ONE ACTION
// if (levelOneChoice == tempInput) {

//     switch (levelOneChoice) {
//         case 'B': // Biff or Giff
//         msg = "Hmm, interesting. Biff is angry and has a cane. Do you STAND and fight, or RUN away like a coward? (S/R)";
//         break;
//     case 'G':
//         msg = "Griff is asking you if you are in, or out. What do you say? (I/O)"
//         break;
//     default:
//         msg = "Please enter choice";
//     } // END OF LEVEL ONE CHOICE  //////////////////
// display( msg );
// }

///////////////////////////////////////////
/*

<html>
   <head>

   <script type="text/javascript">

   var message = [];
   var gameForm =  ' Your Input:<input type="text" id="answer"> <input type ="button" id ="enter" onclick="yourMove()" value = "enter">';
   var stage = 1;
   var number = 1;

   function stuff(){
   //stage 1
   message[1] = "Do you want to play a game?";
   //stage 2
   message[2] = " You are sitting in front of a computer On the screen a cursor blinks: 'Do you know tha password?' glows in the centre
   beneath         a    skull and crossbones";
   message[3] = "That is not the password - Do you know tha password?";

   //stage 3
   message[4] = "<>Computer code scrolls down the screen the light fills the message with a dull green swamplike glow. Four more terminals
   jump     into action. You are in..... </p>
   message[4] +="<>You will need help. You can call Jack and Maeve ,the hackers or Kate and David the cyper-coders.";
   message[4] +="Jack and Maeve can only be contacted via irc ,a few hours at least. They're less likely to be detected but could take hours. </p>";
   message[4] +="<>Kateand David specialise in encryption but they are more likely to be watched by the enemy.</p>";
   message[4] +=" <> Type IRC or email to continue.</p> ";
   //stage4
   message[5] = "You chose the hackers. You will need to access the mainframe, by creating a madelbrot virus programe.";
   message[6] = "You choose the coders. You will need to decrypt the Central Firewall System.";
   var respond = document.getElementById("container");
   var input = document.getElementById("input_form");
   respond.innerHTML = message[1];
   input.innerHTML = gameForm;
   }
//

   function yourMove()
   {
   respond = document.getElementById("container");
   input = document.getElementById("input_form");
   answer = document.getElementById("answer").value;
   ///////////////////////////////////////////////
   if (stage == 1 && answer == "yes")
   {
   number = 2;
   stage = 2 ;
   }
   else if( stage=="no"){
   number = 3;
   }
   ////////////////////////////////////////////////////////////////////
    if (stage == 2  && answer == "no")
   {
    number = 4;
   stage  = 4;
   }
   if (stage == 4 && answer == "IRC")
   {
   stage   = 5;
   number  = 5;
   }
   if (stage == 4 && answer == "email")
   {
   stage  = 5;
   number = 6;
   }
   respond.innerHTML = message[number];
   input.innerHTML= gameForm;
// I have deliberately not used case/switch statements if/else is good enough. A ninja can pick up case/switch in their own time.

    }
   </script>
   </head>
   <body onload = "stuff()">
   </body>
 </html>
// You will notice that the variable 'number' is redundant in it's current form. The aim is not to remove it , but instead make it relevant. If the game where to allow for a rooms with a realtionship to each other then perhaps number =number +1 , would produce more meangigfull results than number = 6 or number = 5. Or better yet what about making a multidemsuional array for the messages that includes exits.

   message[0][0] ="You are standin in a room you see a table. On the table are:";
   message[0][1] ={1,3,4,5"};
   message[0][3]= {"a knife","a bag of gold","a ring"};
   */