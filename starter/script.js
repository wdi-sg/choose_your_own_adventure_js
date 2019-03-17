/*
Horse-racing game

This is a chance-based game allowing players to pick different horses, food to feed their horses, etc. that brings them to different outcomes.

TBC
*/

console.log("Hi");

var playerName = prompt("Hi, what is your name?");

// alert("Hi, " +username+ " welcome to horse-racing!");

// declaring horses as a variable to use in the question asking players to pick a horse.
var horses = " 1. Pinky Pie 🎀 \n 2. Robohorse  \n 3. BoJack \n 4. Charlie the Unicorn";

var horsin = [
    {
        "name": "Pinky Pie",
        "treat": "Birthday cake",
        "brush": 1
    },
    {
        "name": "Robohorse",
        "treat": "Bytes",
        "brush": 2
    },
    {
        "name": "BoJack",
        "treat": "Beer",
        "brush": 3
    }
]


// ⚠️ Pick a horse.
var playerHorse = prompt("First, let's find you a horse to race with. Here is a list of our finest stallions. Enter the horse's number to pick. \n" +horses);

// var playerHorse will be 1, 2, 3 or 4

var horse = {
    0: "Nothing",
    1: "Pinky Pie",
    2: "Robohorse",
    3: "BoJack",
    4: "Charlie the Unicorn"
}

// alert("Wow! Great choice. " +horse[playerHorse] +" is an awesome runner.")

    // console.log("Yay " + horse[playerHorse] + "!");

    // switch (playerHorse) {
    //     case "1":
    //     response = alert("Super! Pinky Pie is an energetic and socialable lil cutie, she's gonna win by hook or charm.");
    //     break;
    //     case "2":
    //     response = alert("Awesome pick! Robohorse just had jetpacks installed in his feet last Thursday, those will definitely come in handy during the race.");
    //     break;
    //     case "3":
    //     response = alert("Oof. You might wanna refrain from giving BoJack bread or beer before the race.");
    //     break;
    //     case "4":
    //     response = alert("Hmm! Charlie is missing a kidney, but he'll do everything he can to help you win the race.")
    //     break;
    //     default:
    //     response = confirm("Oops. You didn't read and follow my instructions properly. You have been banned from the race. Bye!");
    // }

// List of treats to feed horses.
var treats = " 1. Beer \n 2. Candy  \n 3. Birthday cake \n 4. Bytes";

var treat = {
    0: "Nothing",
    1: "Beer",
    2: "Candy",
    3: "Birthday cake",
    4: "Bytes"
}

// Checking if user is entering correct responses, if not, kick them out.
// function check() {
//     if (playerHorse !== "1" || playerHorse !== "2" || playerHorse !== "3" || playerHorse !== "4")
// }

// ⚠️ Feed your horse a treat.

if (playerHorse === "1" || playerHorse === "2" || playerHorse === "3" || playerHorse === "4") {
    var playerTreat = prompt("Alright, " +playerName+ "! Now, let's feed " +horse[playerHorse]+ " some treats. Pick a number from this list: \n" +treats);
} else {

   while (playerHorse !== "1" && playerHorse !== "2" && playerHorse !== "3" && playerHorse !== "4") {
        var playerHorse = prompt("That's not a horse. Try again. \n" +horses);
   } var playerTreat = prompt("Alright, " +playerName+ "! Now, let's feed " +horse[playerHorse]+ " some treats. Pick a number from this list: \n" +treats);
}


// If player selects the right treat for the horse they pick... they get a special message.
// Else, they get a message asking them to confirm their pick
    // If they confirm, we move on to the next question
    // If they do not confirm, we get them to re-pick a horse treat.


var horseAndTreats = {
    "Pinky Pie": "Birthday cake",
    "Robohorse": "Bytes",
    "BoJack": "Beer",
    "Charlie the Unicorn": "Candy"
}

// Pinky Pie and Birthday Cake
// horse[1]

// Check if the treat the player picked is the right treat.


if (playerTreat === "1" || playerTreat === "2" || playerTreat === "3" || playerTreat === "4") {

// Pinky Pie and Birthday cake
    if (playerHorse === "1") {
        if (treat[playerTreat] === horseAndTreats["Pinky Pie"]) {
    console.log("Woohoo!");
        } else {
        console.log("Ew, she hates that.");
        }
    }

// Robohorse and Bytes
    else if (playerHorse === "2") {
        if (treat[playerTreat] === horseAndTreats["Robohorse"]) {
        console.log("Woohoo!");
        } else {
            console.log("Uh oh. " +horse[2]+ " got a bad tummyache from that. (" +horse[2]+ "s can get sick too.)");
          }
    }

// BoJack and Beer
    else if (playerHorse === "3") {
        if (treat[playerTreat] === horseAndTreats["BoJack"]) {
        console.log("Oh no. It seems that BoJack got drunk and doesn't feel like participating in the race anymore...");
        } else {
            console.log("Yummy!");
          }
    }

// Charlie the Unicorn and Candy
    else if (playerHorse === "4") {
        if (treat[playerTreat] === horseAndTreats["Charlie the Unicorn"]) {
        console.log("The candy sure has cheered " +horse[4]+ " up! To some extent...");
        } else {
            console.log(horse[4]+ " enjoyed that! But I'm not sure if that was the best treat to help him win the race...");
          }

    }

} else {
    alert("Hey! That isn't food suitable for horses! You have been disqualified from this race. Goodbye!")
}

// ⚠️ Whisper something.

if (playerTreat === "1" || playerTreat === "2" || playerTreat === "3" || playerTreat === "4") {
    var playerWhisper = prompt("The race is starting soon! Whisper something to " +horse[playerHorse]+ " cheer them on.").toLowerCase();
}

var niceWords = ["good luck", "love you", "great job", "you're amazing", "put a banana in your ear", "amazing"];

var niceWordsPoints = 0

for (var i = 0; i < niceWords.length; i++) {

    if (playerWhisper.includes(niceWords[i])) {
        niceWordsPoints++
    } else {
    }
}

if (niceWordsPoints > 0 && niceWordsPoints <= 1) {
        alert("Aww! " +horse[playerHorse]+ " says: \"Thank you, that is very sweet of you to say. :-)\"")
    } else if (niceWordsPoints >= 2) {
        alert(horse[playerHorse]+ " says: \"That is the nicest thing anyone has ever said to me! I'll do my best during the race!\"")
    } else if (playerWhisper == "" || playerWhisper == " ") {
            alert("Hmm, you didn't say anything of significance. Oh well! The race is starting soon, let's go now!")
    } else {
            alert(horse[playerHorse]+ " says: Thanks!");
      }

// ⚠️ Pick a rider

var riders = " 1. Hjörþrimul, the Valkyrie  \n 2. Harry Trotter  \n 3. Sarah \n 4. Batman \n 5. " +playerName+ " — yourself!";
var ridersWithoutPlayer = " 1. Hjörþrimul, the Valkyrie  \n 2. Harry Trotter  \n 3. Sarah \n 4. Batman \n"

var playerRider = prompt("OK! The last thing we need to do is to pick a rider during the race. Enter the rider's number to make your selection: \n" +riders);

switch (playerRider) {
    case "1":
    response = alert("Excellent choice! The sword warrioress is sure to slaaaay any horse that comes in her way.");
    break;
    case "2":
    response = alert("Hmm, Trotter's patronus is a stag, I'm not sure if he's had experiences with horses...");
    break;
    case "3":
    response = alert("Great pick! Sarah knows a great deal about horses (being one herself), you can bet she'll win this race for you!");
    break;
    case "4":
    response = alert("The Dark Knight! Onward!");
    break;
    case "5":
    playerRider = prompt("LOL, we both know the only horse you can ride is your high one. Come on down, let's pick a real rider. \n \n" +ridersWithoutPlayer);
    break;
    default:
    response = alert("That's cheating! You have been kicked out of this race.")
}