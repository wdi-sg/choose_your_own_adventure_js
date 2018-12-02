// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must contain at least one loop.
// Your code must make use of both string and number user inputs.
// The game should work without the dev tools console open- no console.log!
// You can only use prompt, alert, and confirm

//scenario 1

// var startPage = alert(
//     "  _____   _   _   ____ \n"+
//     " |_   _  | | | | | |  __|\n"+
//     "    |  |    | |_| | | |__ \n"+
//     "    |  |    |  _  | |  __|\n"+
//     "    |  |    | | | | | |__ \n"+
//     "    |_ |    |_| |_| |____|\n\n\n"+

//     "  _______   ______   __       __   ____ \n"+
//     " |  _____| |  __  | |  \     /  | |  __|\n"+
//     " | |  ___  | |__| | |   \   /   | | |__ \n"+
//     " | | |_  | |  __  | | |\ \ / /| | |  __|\n"+
//     " | |___| | | |  | | | | \   / | | | |__ \n"+
//     " |_______| |_|  |_| |_|  \_/  |_| |____|\n");

// var wake = prompt("As you open your eyes, you blink. The fuzziness clears. Do you move your arms[A] or your head?[H]").toLowerCase();

// switch (wake) {
//     case "a":
//         stats.health = addTen(stats.health);
//         alert("You have gained health.\n Your health is now: "+ stats.health + ".");
//         break;
//     case "h":
//         stats.intelligence = addTen(stats.intelligence);
//         alert("You have gained intelligence.\n Your intelligence is now: "+ stats.intelligence + ".");
//         break;
//     default:
//         alert ("Nothing happens.");
// }

// //scenario 2: with loop


// var slap = prompt("Just as you recognise that you are being carried by a person much bigger than you, a hand slaps you on you back. Do you start crying[C] or stare at the person who slapped you[S]?").toLowerCase();

// var run = 0;
// run++;

// while (run===1) {
//     if (slap == "c") {
//         stats.mentalWellBeing = addTen(stats.mentalWellBeing);
//         alert("Your cries are met with approval by all parties in the room.\n Your mental wellbeing is now: "+ stats.mentalWellBeing + ".");
//         run-=1;
// }   else if (slap == "s") {
//         var slap = prompt("The hand slaps you again on your back. Do you start crying[C]?")
// }   else    {
//         stats.intelligence = minusTen(stats.intelligence);
//         alert ("Obviously disturbed by the lack of a response, the hand slaps you even harder. The force drives you out of the other person's embrace. You hit the ground on your head.\n Your intelligence is now: "+ stats.intelligence + ".");
//         run-=1;
//     }
// }

// //scenario 3: getting the name and dob

// var newName = prompt("Very much alive, and arriving into this brave new world, you deserve a name. What shall it be?");

// stats.userName = capitalise(newName) + restOfString(newName);

// alert("Your parents give you the extraordinarily boring name of: " + stats.userName +".");

// stats.dob = getDate();

// var resultStats = logStats(stats);
// var currentStats = showStats(resultStats)

// alert("Congratulations, " + stats.userName + ", you have entered the world with the following stats:\n\n" + currentStats);

// //scenario 4: going to school

// var studyEffort = parseInt(prompt("You are now twelve. \n\n As with other twelve-year-olds (some eleven, some thirteen), you are preparing to take your PSLE. You are not sure why, but your loving parents tell you that this is very important and will affect you for the rest of your life. \n\n How much effort will you give (from 1-100)? (Remember: no matter what people tell you, it is physically impossible to go above 100%."));

// run++
// while (run===1) {
//     if (studyEffort <= 100) {
//         stats.intelligence = stats.intelligence += (2*randGen(studyEffort));
//         stats.mentalWellBeing = stats.mentalWellBeing -= randGen(studyEffort);
//         stats.physicalWellBeing = stats.physicalWellBeing -= randGen(studyEffort);
//         // console.log(Math.random()*studyEffort);
//         alert("The efforts you placed into studying have changed you.\n Your intelligence increases to "+ stats.intelligence +".\n Your mental wellbeing decreases to: "+ stats.mentalWellBeing + ".\n Your physical wellbeing decreases to: " + stats.physicalWellBeing + ".");
//         run-=1;
//     } else if (studyEffort > 100) {
//         var extraMile = confirm("Are you sure you want to do this? In case we were not clear enough, going more than 100% can result in DEATH.");
//             if (extraMile == true ){
//                 alert("You tried your best. But you tried too hard. Your body could not take it.");
//                 throw new FatalError("End of story.");
//             } else {
//                 studyEffort = parseInt(prompt("How much effort will you give (from 1-100)?"));
//         }
//     } else {
//         studyEffort = parseInt(prompt("Please give a number. How much effort will you give (from 1-100)?"));
//     }
// }

//scenario 5: specific and repeatable challenges with enemies

// var background = prompt("You are now fourteen.\n\n Impetuousness is the hallmark of your youth. The hallways of school carry whispers of an underground fight club. Eager to prove yourself, you head to an alloted time and place.\n However, just when you are about to head inside, the club manager asks you if you do any extra-curricular activities. \n\n You may pick from: \n (W)eightlifting: increases 100 health.\n (V)ideo-gaming: increases 100 intelligence.\n (G)ardening: increases 50 health and 50 intelligence.").toLowerCase();

// switch (background) {
    // case "w":
//         stats.health = addHundred(stats.health);
//         alert("You have gained health.\n Your health is now: "+ stats.health + ".");
//         break;
//     case "v":
//         stats.intelligence = addHundred(stats.intelligence);
//         alert("You have gained intelligence.\n Your intelligence is now: "+ stats.intelligence + ".");
//         break;
//     case "g":
//         stats.intelligence = addFifty(stats.intelligence);
//         stats.health = addFifty(stats.health);
//         alert("You have gained intelligence and health.\n Your intelligence is now: "+ stats.intelligence + ".\n Your health is now: "+ stats.health + ".");
//         break;
//     default:
//         alert ("It seems that you did not do much in school.");
// }

// var challenge = prompt("You enter the room. You glanced about nervously. If you wish to back out. Now is the time. Do you wish to proceed? (Y/N)").toLowerCase();

// var fight = 0;

// if (challenge=="n") {
//     alert("You decided against the fight. It seemed like the prudent choice.");
//     } else {
//         run++;
//         while (run==1) {
//             userHealth = stats.health;
//             opponentHealth = 100;
//             opponentIntelligence = 50;
//             var fightStart = alert("Your opponent steps into the middle of the classroom. You do the same. Adrenaline pumps through your veins as you move in.");
//             fight ++
//             while (fight == 1){
//                 var reaction = prompt("Do you:\n (P)unch - high accuracy, low damage \n (K)ick - medium accuracy, medium damage \n (B)odyslam - low accuracy, high damage").toLowerCase();
//                 var userSuccess = hitChoice(reaction);
//                 var userDamage = attackChoice(reaction);
//                 var userHit = userCalculator(userSuccess);
//                 var opponentSuccess = hitChoice("k");
//                 var opponentHit =  userCalculator(opponentSuccess);
//                 userHealth = userHealth -= opponentHit;
//                 opponentHealth = opponentHealth -= userHit;
//                 alert ("Your " + userSuccess + "\n Your opponent's " + opponentSuccess + "\n You caused "+ userHit + " damage.\n Your opponent caused " + opponentHit + " damage.\n Your health: " + userHealth + "\n Opponent's health: " + opponentHealth);
                // if (userHealth < 1) {
                //     stats.health = minusTen(stats.health);
                //     alert ("You lose! Your general health decreases to: " + stats.health +".");
                //     fight -=1;
                // } else if (opponentHealth < 1) {
                //     stats.health = addTen(stats.health);
                //     alert ("You win! Your general health increases to: " + stats.health +".");
                //     fight -=1;
                // }
//         }
//         var cont = prompt("Continue?(Y/N)").toLowerCase();
//         if (cont == "n") {
//         run -=1;
//         }
//     }
// }

// Further: Dynamic Game (randomised encounters)

var resultStats = logStats(stats);
var currentStats = showStats(resultStats)

var school = alert("You are now 16. By one reason or another, you have moved to a new school. Today is orientation day. You have the freedom of exploring the school. Surviving this far, you have the following stats: \n\n" + currentStats + "\n\n Suddenly, a student punches you on the back of the head. Laughing loudly, he runs off into the school. You have the option of finding him, or you can do other things.");

encounter();