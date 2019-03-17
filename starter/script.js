/*
Horse-racing game

This game allows players to pick different horses, treats, and riders that results in different outcomes. To win, players need to feed the right treats to their horses, whisper kind words, and pick a good rider to ride their horses during the race.
*/

// ⚠️ Get player's name
//// Player is asked to give their name to participate in the game

var playerName = prompt("Why, hello there! Welcome to the horse race. To participate, tell me your name:");

// Player is forced to give their name to play
while (playerName == null) {
    playerName = prompt("Tell me your name to participate!")
}


// Points will be accumulated throughout the game
var points = 0;

// Declaring variable "horse", for referencing horses later
var horse = {
    0: "Nothing",
    1: "Pinky Pie",
    2: "Robohorse",
    3: "BoJack",
    4: "Charlie the Unicorn"
}

// ⚠️ Get player's horse

// Declaring "horses" as a variable to use in the question asking players to pick a horse.
var horses = " 1. Pinky Pie \n 2. Robohorse  \n 3. BoJack \n 4. Charlie the Unicorn";


// Player is asked what horse they'd like to pick
var playerHorse = prompt("Okay, " +playerName+ ". First, let's find you a horse to race with. Here is a list of our finest stallions. Enter the horse's number to take your pick. \n \n" +horses+ "\n");

// If player clicks on "cancel", they'll keep getting prompted to pick a horse
while (playerHorse == null) {
    playerHorse = prompt("Come on, pick a horse! \n \n" +horses+ "\n");
}

// Responses for various horses player picks
// If player picks anything other than the 4 choices, they'll be kicked out of the game for cheating
    switch (playerHorse) {
        case "1":
        response = alert("Super! Pinky Pie is an energetic and socialable lil cutie, she's gonna win by hook or charm.");
        break;
        case "2":
        response = alert("Awesome pick! Robohorse just had jetpacks installed in his feet last Thursday, those will definitely come in handy during the race.");
        break;
        case "3":
        response = alert("Oof. You might wanna refrain from giving BoJack bread or beer before the race.");
        break;
        case "4":
        response = alert("Hmm! Charlie is missing a kidney, but he'll do everything he can to help you win the race.")
        break;
        default:
        response = alert("Oops. You're not allowed to bring your own horses to this race. You have been banned from the race. Bye!");
    }

// This is meant to annoy the player for cheating in this game
while (playerHorse !== "1" && playerHorse !== "2" && playerHorse !== "3" && playerHorse !== "4") {
    alert("You've been kicked from this race.")
}

// ⚠️ Get player's choice of treat for their horse

// List of treats to feed horses for the messages
var treats = " 1. Beer \n 2. Candy  \n 3. Birthday cake \n 4. Bytes";

// Treats for reference later
var treat = {
    0: "Nothing",
    1: "Beer",
    2: "Candy",
    3: "Birthday cake",
    4: "Bytes"
}

// What each horse likes to eat best
var horseAndTreats = {
    "Pinky Pie": "Birthday cake",
    "Robohorse": "Bytes",
    "BoJack": "Beer",
    "Charlie the Unicorn": "Candy"
}

//Ask player to pick a treat, this question only appears if player has picked a horse
if (playerHorse === "1" || playerHorse === "2" || playerHorse === "3" || playerHorse === "4") {
    var playerTreat = prompt("Alright, " +playerName+ "! Now, let's feed " +horse[playerHorse]+ " some treats. Pick a number from this list: \n \n" +treats+ "\n");
}

// Player is prompted to pick a treat if they clicked on "cancel"
while (playerTreat == null) {
    var playerTreat = prompt("Pick a treat for " +horse[playerHorse]+ "! \n \n" +treats+ "\n");
}

// Check if the treat the player picked is the right treat
// Allocate points to player according to their selection
// Give player different responses based on the treats they selected for their horse

if (playerTreat === "1" || playerTreat === "2" || playerTreat === "3" || playerTreat === "4") {

    // Pinky Pie and Birthday cake
        if (playerHorse === "1") {
            if (treat[playerTreat] === horseAndTreats["Pinky Pie"]) {
                alert("How did you know that was Pinky's favourite food?");
                points += 10;
            } else {
            alert("Hmm, Pinky didn't like " +treat[playerTreat]+ " that much.");
                points += 5;
            }
        }

    // Robohorse and Bytes
        else if (playerHorse === "2") {
            if (treat[playerTreat] === horseAndTreats["Robohorse"]) {
                alert(horse[2]+ " says: Yummy!");
                points += 10;
            } else {
                alert("Uh oh. " +horse[2]+ " got a bad tummyache from that. (" +horse[2]+ "s can get sick too.)");
              }
        }

    // BoJack and Beer
        else if (playerHorse === "3") {
            if (treat[playerTreat] === horseAndTreats["BoJack"]) {
                alert("Oh no. It seems like " +horse[3]+ "got drunk...");
            } else {
                alert(horse[3]+ " ate everything! That was a delicious meal.");
                points += 10;
              }
        }

    // Charlie the Unicorn and Candy
        else if (playerHorse === "4") {
            if (treat[playerTreat] === horseAndTreats["Charlie the Unicorn"]) {
                alert("The candy sure has cheered " +horse[4]+ " up! To some extent...");
                points += 10;
            } else {
                alert(horse[4]+ " enjoyed that! But I'm not sure if that was the best treat to help him win the race...");
                points += 5;
              }

        }

    // If player says anything else other than the 4 treats available, they're shown this message
    } else {
        alert("Hey! That isn't food suitable for horses! You have been disqualified from this race. Goodbye!")
    }


// ⚠️ Get player to say something to their horse

// This prompt is only triggered if player has selected a treat from the previous question
if (playerTreat === "1" || playerTreat === "2" || playerTreat === "3" || playerTreat === "4") {
    var playerWhisper = prompt("The race is starting soon! Whisper something to " +horse[playerHorse]+ " cheer them on.").toLowerCase();
}

// An array of nice words (by my standards)
// If player says any of these nice things, they will be awarded points
var niceWords = ["good luck", "love you", "great job", "you're amazing", "put a banana in your ear", "break a leg"];

// Players can obtain points for saying nice things, which will affect what the horses say later on
var niceWordsPoints = 0

// This takes the player's input and loops through the array of niceWords, if player says anything nice, they'll be awarded points
for (var i = 0; i < niceWords.length; i++) {

    if (playerWhisper.includes(niceWords[i])) {
        niceWordsPoints++
    } else {
    }
}

// Results of player's words
// If player says at least 1 nice thing, their horse tells them a cute message
// Player is also awarded 8 points
if (niceWordsPoints > 0 && niceWordsPoints <= 1) {
        alert("Aww! " +horse[playerHorse]+ " says: \"Thank you, that is very sweet of you to say. :-)\"")
        points += 8;

// If player says 2 or more than 2 nice things, their horse tells them a cuter message
// Player is awarded 10 points
    } else if (niceWordsPoints >= 2) {
        alert(horse[playerHorse]+ " says: \"That is the nicest thing anyone has ever said to me! I'll do my best during the race!\"");
        points += 10;

// If player doesn't say anything, game master tells them a message
// No points are alloted
    } else if (playerWhisper == "" || playerWhisper == " ") {
            alert("Hmm, you didn't say anything of significance. Oh well! The race is starting soon, let's go now!")

// If player says at least something, but doesn't include any nice words, horse says thanks
// No points are alloted
    } else {
            alert(horse[playerHorse]+ " says: Thanks!");
            points += 5;
      }

// ⚠️ Player is asked to pick a rider

// List of riders for reference
var riders = " 1. Hjörþrimul, the Valkyrie  \n 2. Harry Trotter  \n 3. Sarah \n 4. Batman \n 5. " +playerName+ " — yourself!";

// List of riders for reference, sans option 5, the player
var ridersWithoutPlayer = " 1. Hjörþrimul, the Valkyrie  \n 2. Harry Trotter  \n 3. Sarah \n 4. Batman \n"

// This asks the player to choose a rider
var playerRider = prompt("OK! The last thing we need to do is to pick a rider during the race. Enter the rider's number to make your selection: \n \n" +riders+ "\n");

// This forces the player to pick a valid rider
while (playerRider !== "1" && playerRider !== "2" && playerRider !== "3" && playerRider !== "4" && playerRider !== "5") {
    var playerRider = prompt("OK! The last thing we need to do is to pick a rider during the race. Enter the rider's number to make your selection: \n \n" +riders+ "\n");
}

// This function includes a list of different responses for the horses picked
// Parameter is the player's input A.K.A. the rider they've chosen

function riderResponses (playerRider) {
    switch (playerRider) {
    case "1":
    response = alert("Excellent choice! The sword warrioress is sure to slaaaay any competition that gets in her way.");
        points += 10;
    break;
    case "2":
    response = alert("Hmm, Trotter's patronus is a stag, but I'm not sure if he's had experiences with horses...");
        points += 8;
    break;
    case "3":
    response = alert("Great pick! Sarah knows a great deal about horses (being one herself), you can bet she'll win this race for you!");
        points += 10;
    break;
    case "4":
    response = alert("The Dark Knight! Onward!");
        points += 8;
    break;
    default:
    playerRider = alert("That's cheating! Sorry, you have been kicked out of this race.");
    }
    return points;
}

// I repeated myself here because I wanted to be "interesting" and include a 5th option, for the player to chose themselves, only to tell them that that's not a valid option
switch (playerRider) {
    case "1":
    response = alert("Excellent choice! The sword warrioress is sure to slaaaay any competition that gets in her way.");
        points += 10;
    break;
    case "2":
    response = alert("Hmm, Trotter's patronus is a stag, but I'm not sure if he's had experiences with horses...");
        points += 5;
    break;
    case "3":
    response = alert("Great pick! Sarah knows a great deal about horses (being one herself), you can bet she'll win this race for you!");
        points += 9;
    break;
    case "4":
    response = alert("The Dark Knight! Onward!");
        points += 7;
    break;
    case "5":
    playerRider = prompt("LOL, we both know the only horse you can ride is your high one. Come on down, let's pick a real rider. \n \n" +ridersWithoutPlayer);
        riderResponses(playerRider);
    break;
    default:
    playerRider = confirm("That's cheating! Sorry, you have been kicked out of this race.");
}

// Following variable and function helps to check if player has answered the previous question, this can potentially be implemented for previous questions as well
var check = 0;
function checkIfQuestionAnswered(player) {
    if (player === "1" || player === "2" || player === "3" || player === "4") {
        check++
    }
    return check;
}
checkIfQuestionAnswered(playerRider);

// If player has answered previous question
if (check > 0) {
    // Inform player that race is about to begin
    confirm("🐎🐴🐎🐴🐎 \n Alright! Let's race! \n 🐎🐴🐎🐴🐎");

    // If player has racked up 19 or more points
    if (points >= 19) {

        if (playerHorse === "1" && treat[playerTreat] === horseAndTreats["Pinky Pie"]) {
            alert("🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆\n \nWoohoo! Great job! " +horse[playerHorse]+ " came in first place. She really enjoyed her " +treat[playerTreat].toLowerCase()+ "! \n \n 🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆");
        } else if (playerHorse === "2" && treat[playerTreat] === horseAndTreats["Robohorse"]) {
            alert("🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖 \n \n Meep morp! Great Job!" +horse[playerHorse]+ " came in FIRST place! The " +treat[playerTreat].toLowerCase()+ " you fed him really helped. \n \n 🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖");
        } else {
            alert("🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆 \n \n Woohoo! Great job! " +horse[playerHorse]+ " came in first place. \n \n 🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆 ")
        }
    }

    // If player has racked up 18 points or less
    else if (horse[playerHorse] === "Pinky Pie") {
        if (points <= 18) {
            alert("Neiggghhhh! " +horse[playerHorse]+ " didn't FEEL like that running hard today. Sorry, she came in 2nd place. Better luck next time!");
        }
    }

    else if (horse[playerHorse] === "Robohorse") {
        if (points <= 18) {
            alert("Heavens! " +horse[playerHorse]+ " came down with a bad case of the Trojan flu and came in 3rd place. Boohoo. Better luck next time!");
        }
    }

    else if (horse[playerHorse] === "BoJack") {
        if (points <= 18 && treat[playerTreat] === horseAndTreats["BoJack"]) {
            alert("Yikes. " +horse[playerHorse]+ " was SO DRUNK, he left the race before it even started! You lost. :-( Better luck next time!")
        } else {
            alert(horse[playerHorse]+ " lost. Sorry. Better luck next time!");
        }
    }

    else if (horse[playerHorse] === "Charlie the Unicorn") {
        if (points <= 18) {
            alert(horse[playerHorse]+ " was kidnapped midway through the race. Tough luck! Try again next time.")
        }
    }

    else {
        alert(horse[playerHorse]+ " lost. Sorry, better luck next time!");
    }
} else {
    alert("Goodbye!")
}