// Welcome message
document.querySelector('#output').innerText = `Hello there! What is your name?`;

var clearInput = function() {
    return document.getElementById("input").value = '';
}

var playerName, newPlayerName;
var counter = '0';
var score = 0;

document.querySelector('#scoreBoard').innerText = score;

//Score counter
var scoreCounter = function (points) {
    score = score + points;
    document.querySelector('#scoreBoard').innerText = score;
    return score;
};

var inputHappened = function(currentInput){
    var output = adventureStart(currentInput);
    return output;
};

var adventureStart = function (currentInput) {

    clearInput();

//Greeting
    if (counter == '0') {
        counter = '01';
        playerName = currentInput;
        return `Nice to meet you, ${playerName}. What year would you like to go to? (YYYY)`;
    }

//********************* QUESTION 2 **************************

//Response to Year (YYYY)
    if (counter == '01') {

        if (currentInput >= 2015) {
            counter = '011';
            scoreCounter(20);
            return `I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)`;
        } else if (currentInput >= 1985 && currentInput < 2015) {
            counter = '012';
            scoreCounter(5);
            return `Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?`;
        } else if (currentInput >= 1955 && currentInput < 1985) {
            counter = '013';
            scoreCounter(10);
            return `I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)`;
        } else if (currentInput < 1955) {
            counter = '014';
            scoreCounter(30);
            return `I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)`;
        }

    }

//********************** QUESTION 3 *************************

//Response to Back to the Future 2
    if (counter == '011') {

        if (currentInput.toLowerCase() == 'b') {
            counter = '0111';
            scoreCounter(20);
            return `Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)`;
        } else if (currentInput.toLowerCase() == 'g') {
            counter = '0112';
            scoreCounter(30);
            return `Griff is asking you if you are in, or out. What do you say? (I/O)`;
        } else {
            return `Invalid response. Choose again. \n Would you rather deal with Biff, or Griff? (B/G)`;
        }
    }

//Response to Destroyed Time Machine
    if (counter == '012') {
        counter = '0121';
        scoreCounter(5);
        newPlayerName = currentInput;
        return `Welcome to the future, ${newPlayerName}.`;
    }

//Response to Back to the Future 1
    if (counter == '013') {

        if (currentInput.toLowerCase() == 'y') {
            counter = '0131';
            scoreCounter(-100);
            return `Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.`;
        } else if (currentInput.toLowerCase() == 'n') {
            counter = '0132';
            scoreCounter(50);
            return `Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.`;
        } else if (currentInput.toLowerCase() == 's') {
            counter = '0133';
            scoreCounter(100);
            return `Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.`;
        } else {
            return `Invalid response. Choose again. \n Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)`;
        }
    }

//Response to Back to the Future 3
    if (counter == '014') {

        if (currentInput.toLowerCase() == 'h') {
            counter = '0141';
            scoreCounter(50);
            return `Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.`;
        } else if (currentInput.toLowerCase() == 'm') {
            counter = '0142';
            scoreCounter(-100);
            return `You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.`;
        } else if (currentInput.toLowerCase() == 't') {
            counter = '0143';
            scoreCounter(100);
            return `Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)`;
        } else {
            return `Invalid response. Choose again. \n You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)`;
        }

    }

//********************** QUESTION 4 *************************

//Response to Fight or Run away
    if (counter == '0111') {

        if (currentInput.toLowerCase() == 's') {
            counter = '01111';
            scoreCounter(100);
            return `Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.`;
        } else if (currentInput.toLowerCase() == 'r') {
            counter = '01112';
            scoreCounter(50);
            return `You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.`;
        } else {
            return `Invalid response. Choose again. \n Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)`;
        }
    }

//Response to Griff In or Out
    if (counter == '0112') {

        if (currentInput.toLowerCase() == 'i') {
            counter = '01121';
            scoreCounter(-100);
            return `Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.`;
        } else if (currentInput.toLowerCase() == 'o') {
            counter = '01122';
            scoreCounter(100);
            return `Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.`;
        } else {
            return `Invalid response. Choose again. \n Griff is asking you if you are in, or out. What do you say? (I/O)`;
        }
    }

//Response to Clara wants to go Back to the Future with you
    if (counter == '0143') {

        if (currentInput.toLowerCase() == 't') {
            counter = '01431'
            scoreCounter(50);
            return `Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.`;
        } else if (currentInput.toLowerCase() == 'l') {
            counter = '01432';
            scoreCounter(50);
            return `Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.`;
        } else {
            return `Invalid response. Choose again. \n But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)`;
        }
    }

//********************** QUESTION 5 *************************
//to be continued...

}; //TERMINAL