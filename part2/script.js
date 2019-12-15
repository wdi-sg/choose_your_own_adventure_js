console.log("Hello World! Choose your own adventure!");
var steps = 0; // The game starts at step 0;

var input = document.getElementById("input");
input.placeholder = "What is your name?"; // First question to user

var userName = ""; // Stores user's name
var userInput = "";
var countryLetters = ["a", "b", "c"];
var statement;


//STEP 1 : USER INPUTS NAME
var inputHappened = function(currentInput){
    if (steps === 0) {
        userName = input.value; // User inputs name
        steps++;
        statement = "Hello " + userName + "!\n" + "\n Welcome to Create Your Own Adventure!" + "\n Where would you like to go today? \n" + "\na :  Singapore " + "\nb :  Dubai " + "\nc :  Australia\n" + "\rTo select a/b/c";
    };
        userInput = input.value;
    console.log(currentInput);
    return statement; //Welcome message to user. User to select A B or C
    return userInput;


// THIS STEP DOES NOT WORK
    if (steps === 1 && userInput === countryLetters[0]) {
        steps++;
        statement = "Destination: Singapore. Botanical Gardens, Sungei Buloh Nature Park or Chinatown? Select b/s/c)?";
        } else if (steps === 1 && countryLetters[1]) {
            steps++;
            statement = "Destination: Dubai. Malls, Souk or Deira? (M/S/D)";
        } else {
            steps++;
            statement = "Destination: Australia.  Sydney, Central Australia or Tasmania? (S/C/T)";
        console.log(statement);
        return statement;
    }
}









/*Create an object of places selected and data relevant to them for this game
var countries = {
  location: ["Singapore", "Dubai", "Australia"],
  message: ["Where would you like to go today? Singapore, Dubai or Australia"]}

  var singapore = {
    location: ["Botanic Gardens, Sungei Buloh Nature Park or Chinatown? (Botanic gardens /Sungei /Chinatown)"],
  }*/




// PSEUDOCODE
// STEP 1: Ask user: "What is your name?"
// STEP 2: User keys in input
// STEP 3: Save user's name into a variable
// STEP 4: Message: " Hello USER's NAME. Welcome to the Travel Game. Where would you like to go?" Give three choices -  (A)SINGAPORE  (B) UAE  (C) USA
// STEP 5: User selects A, B or C.
// STEP 6: If User selects A, go to selection A
// else if (user selects B) go to B
// else (user selects C) go to C
// Use if else statements
// STEP 7: Go to Selection A (Singapore).
// 3 choices : (A)Nature   (B)City life (C) Museums.  Select one.
// STEP 8: IF user step === ? and user selects A, go to A, else if go to B and else go to C.
// Keep repeating these steps.
// Follow steps with Initial Choice B
// Follow steps for Initial Choice C
// Final Step:  Game Over: when the length of the array of choices is zero



/*Pseudo-coded Example
What is your name?
Joyce
Hello Joyce. Welcome to Create Your Own Adventure!" Where would you like to go today? (A or B or C)


A
You will be going to Singapore. Are you interested in Botanical Gardens, Sungei Buloh Nature Park or Chinatown? (B/S/C)
Botanical Gardens
Sit on the grass for a picnic or Hike? (S/H)
Sit on the grass
Raining heavily. Game over.
Hike
It’s raining but you decide to hike anyway and enjoy the experience.

Sungei Buloh Nature Park
Photography tour or a Nature hike? (P/N)
Photography Tour
Closed for annual census of flora and fauna species. Game over.
Nature Hike
Closed for annual census of flora and fauna species. Game over.

Chinatown
Temples?  Meal? Street exploration? (T/M/S)
Temples
Closed for renovation. Game over.
Meals
Long queue and no table. Game over.
Street exploration
Continue exploring




B
You will be going to Dubai. Are you interested in Malls, Souk Madinat Jumeirah or Deira? (M/S/D)

Malls
Burj Khalifa or Snow City  (B/S)
Burj Khalifa
Long queue and two hour wait for tickets. You decide against it. Game over.
Snow City
It’s open and you enjoy the experience.

Souk Madinat Jumeirah
Walk around or Meal? (W/M)
Walk around
You enjoy the cultural experience.
Meal
No table available and you decide against it. Game over.

Deira
Walk or Meal? (W/M)
Walk
You start walking but realise it’s too hot and decide to return to your hotel.
Meals
Nice restaurant and meal. You enjoy the experience.




C
You will be going to Australia. Are you interested in Sydney, Central Australia or Tasmania? (S/C/T)
Sydney
Sydney Opera House or Walking Tour? (S/W)
Sydney Opera House
It’s open and you watch a concert.
Walking Tour
You enjoy the experience

Central Australia
Cultural Tour or a Nature hike? (C/N)
Cultural Tour
You visit some art museums and enjoy the experience.
Nature Hike
Ayers Rock is closed and does not allow visitors to climb it. Game over.

Tasmania
Forest hike or Boat ride ? (F/B)
Forest hike
You start hiking. But soon your path is blocked by a huge tree. Move the tree with help from rest of the group or wait for help? (M / W)
Move the tree. Successfully moved tree and continue hike.
Wait for help. But it’s getting late. No help comes. You get trapped in the forest. Game over.
Boat ride
Bad weather. Boat starts sinking. You are a weak swimmer and you perish in the ocean.
*/