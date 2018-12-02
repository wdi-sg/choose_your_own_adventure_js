// put code here!
var titleGame = alert("Title: Murderer of Caspian City");
//Ask the player for their name at the beginning of the game and use it in the game.
var playerName = prompt("What is your name?");


//Introduction
alert("Hi Detective " + playerName + ", the city of Caspian needs your help to find a murderer that has escaped from police custody. He is currently on the loose, last scene on Market Street 41.");
//Some instructions
alert("In this quest, the outcomes will depend on the choices you have made. Make you decision wisely!")
//Start of Quest (Level 1)
alert("Clue 1: Suspect last seen at Market St 41. \nWhat would you like to do next? We need to hurry before the suspect make his escape.");

var question1 = prompt("[a] Go to Market Street 41.\n[b] Go home \n[c] Lepak and drink kopi");

if (question1 === "a") {
    alert("Great! Let's go to Market Street 41 to look out for more clues.");
} else {
    alert("Ohh no! What a terrible choice you have made! You missed the chance to capture suspect due to your lepak attitude");
    youLose();
}


//Quest (Level 2)
var question2 = prompt("There are thee alternatives to go to Market St 42. Choose the best and fastest route. \n[a] Route A crowded and there is road congestion.\n[b] Route B less crowded and road path is clear. \n[c] Route C a very bad road accident had just happened.") ;

    if(question2 === "b") {
        alert("Wise choice indeed! Route B is clear and you will arrive at Market St 42 at the fastest time! Good Job!")
    } else{
        alert("Hmmm..bad choice. Suspect had escaped while you arrived at location 1 hour later. :(");
        youLose();
    }


//Quest (Level 3)
alert("Clue 2: We have received a tip-off from an informant, suspect was last seen at Mangrove Hotel. \n*Hint: He has short brown hair, 6 feet tall and has an x scar on his left cheek.");

alert ("You arrived at Mangrove hotel. You spot 2 suspicious men, both with short brown hair and are 6 feet tall.");

alert(" They entered the same lift and went to level 5. To get to level 5, you need to enter a hotel guest access code in the lift.");

alert ("Solve these 3 riddles to get code to gain acess to level 5");



for(maxTry = 3; maxTry > 0; maxTry --){
var riddle1 = prompt ("1 = 5 \n2 = 25 \n3 = 325 \n4 = 4325 \nThen 5 = ? \nKey in the correct answer below");
var ansRiddle1 = Number(riddle1);

    if( ansRiddle1 === 1 ) {
        alert("Correct! The first access code number is 1! One down, two more to go!");
        break;
    }else {
        alert("Try again!" + maxTry) ;
    }
};





















// var level1 = prompt("[a] Go to Market Street 41.\n[b] Go home \n[c] Lepak and drink kopi");
//
// if (level1 === "a") {
    // alert("Great! Let's go to Market Street to gather more clues.");
// } else
// {
    // alert("You are one lepak detective. The murderer has escaped.");
// }




// if (startGame === "y")  {
//     stage1();
// } else
//   quit();
//

//
// function stage1(question, choices)   {
//
    // var questionsStage1 =[
        // {
            // question: "Where is Grand Canyon located?",
                // choices: {
                    // a: "[a] Arizona,USA",
                    // b: "[b] Utah, USA",
                    // c: "[c] Nevada, USA",
                    // d: "[d] Colorado, USA"
                    // },
            // answer: "a"
        // }
    // ]; return questionsStage1;
// };
//
// const myQuestions = [
  // {
    // question: "Who is the strongest?",
    // answers: {
      // a: "Superman",
      // b: "The Terminator",
      // c: "Waluigi, obviously"
    // },
    // correctAnswer: "c"
  // },
  // {
    // question: "What is the best site ever created?",
    // answers: {
      // a: "SitePoint",
      // b: "Simple Steps Code",
      // c: "Trick question; they're both the best"
    // },
    // correctAnswer: "c"
  // },
  // {
    // question: "Where is Waldo really?",
    // answers: {
      // a: "Antarctica",
      // b: "Exploring the Pacific Ocean",
      // c: "Sitting in a tree",
      // d: "Minding his own business, so stop asking"
    // },
    // correctAnswer: "d"
  // }
// ];
