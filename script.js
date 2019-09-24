console.log("hello script js");

// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// var hello = [];

// var opening = "Hello there! Care to share your name?"
var playerName = null;
var stepCounter = 0;
var playerReady = null;
messageDie = "You're gonna die! Try again next time. Or never.";
var messageInvalid = null;
var messageZero = null;
var messageOne = null;
var messageTwo = null;
var messageThree = null;
var messageFour = null;
var messageFive = null;




var inputHappened = function(currentInput){
    if (stepCounter === 0){
        playerName = currentInput;
        messageZero = "Why hello " + playerName + "! Welcome to the Village of the Hidden Leaf, and congratulations on becoming a full-fledged ninja! Ready for your first mission? (Ans: Yes / No / Maybe)" ;
        stepCounter = stepCounter + 1;
            console.log( "Answer " + stepCounter + ": " + currentInput );
        return messageZero;

        // var image = document.getElementById("output");
        // var introImage = document.createElement("img");
        // img.starter.add("picture");
        // img src = "images/22635-naruto-naruto-logo.png";


        // a.href = "http://google.com";
        // a.textContent = "google.com"

        // document.body.appendChild(a)
        // document.output.appendChild(a)
        }

    else if (stepCounter === 1){
        playerReady = currentInput;
        if (playerReady === "Yes" || playerReady === "yes"){
            messageOne = "Nice! Now where would you like to learn your new skill? (Ans: Land of the Frogs / Kaguya's Palace / Village of the Hidden Stone)";
            stepCounter = stepCounter + 1;
            console.log( "Answer " + stepCounter + ": " + currentInput );
            return messageOne;

            // var a = document.createElement("a");
            // a.href = "http://google.com/";
            // a.textContent = "google.com";
            // document.body.appendChild(a)
        }
        else {
            console.log( "Died at stage: " + stepCounter );
            return messageDie;
        }
    }

    else if (stepCounter === 2){
        skillLocation = currentInput;
        if (skillLocation === "Land of the Frogs" || skillLocation === "land of the frogs"){
            messageTwo = "You will have to learn a new skill to deal with Madara. What skill do you desire? (Ans: Sage Mode / Clone Ninjutsu / Sharingan)"
            stepCounter = stepCounter + 1
            console.log( "Answer " + stepCounter + ": " + currentInput );
            return messageTwo;
        }
        else {
            console.log( "Died at stage: " + stepCounter );
            return messageDie;
        }
    }

    else if (stepCounter === 3){
        skillChoice = currentInput;
        if (skillChoice === "Sage Mode" || skillChoice === "sage mode"){
            messageThree = "Awesome! You really know your stuff don't you? Now, you have to pick up a weapon of choice. Which will it be? (Ans: Dragon Shuriken / Frostbourne / Excalibre)";
            stepCounter = stepCounter + 1
            console.log( "Answer " + stepCounter + ": " + currentInput );
            return messageThree;
        }
        else {
            console.log( "Died at stage: " + stepCounter );
            return messageDie;
        }
    }

    else if (stepCounter === 4){
        weaponChoice = currentInput;
        if (weaponChoice === "Dragon Shuriken" || weaponChoice === "dragon shuriken"){
            messageFour = "You're E-P-I-C! Now find Madara and kill him! (Ans: Kaguya's Palace / Konoha / Land of Rock)";
            stepCounter = stepCounter + 1
            console.log( "Answer " + stepCounter + ": " + currentInput );
            return messageFour;
        }
        else {
            console.log( "Died at stage: " + stepCounter );
            return messageDie;
        }
    }

    else if (stepCounter === 5){
        findMadara = currentInput;
        if (findMadara === "Konoha" || findMadara === "konoha"){
            messageFive = "You Win!";
            stepCounter = stepCounter + 1
            console.log( "Answer " + stepCounter + ": " + currentInput );
            return messageFive;
        }
        else {
            console.log( "Died at stage: " + stepCounter );
            return messageDie;
        }
    }
};