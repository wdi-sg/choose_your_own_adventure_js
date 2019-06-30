console.log("hello script js");


var parsedInput = null;
var playerNameCount = 0;
var playerName = 0;
var y2015Count = 0;
var y1985Count = 0;
var y1955Count = 0;
var y1900Count = 0;

display("Hello there, what is your name?");

document.getElementById('javascriptButton').onclick = function interpretAnswer() {
  var inputResults = document.getElementById('input').value;
  console.log("input value: " + inputResults);
  while (playerNameCount === 0) {
    playerName = inputResults;
    playerNameCount++;
    console.log("player name: " + playerName + " playerNameCount: " + playerNameCount);
  }
    parsedInput = inputResults.toLowerCase();
    console.log("Parsed input value: " + parsedInput);
    display("What year would you like to go to?");
    checkAnswer();
};


var y2015 = function(){
    if (y2015Count < 1) {
            console.log('Entering year 2015 and beyond');
        y2015Count++;
        output = "I see you're a fan of Back to the Future 2, " + playerName + ". Would you rather deal with Biff, or Griff? \n Please choose between 'Biff' or 'Griff'.";
        console.log(y2015Count);
        display(output);
    } else if (parsedInput === "biff" && y2015Count === 1) {
            output = "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? \n Please choose between 'Fight' or 'Run'.";
            display(output);
            y2015Count++;
            console.log(y2015Count + output);
        } else if (parsedInput === "griff" && y2015Count === 1) {
            output = "Griff is asking you if you are in, or out. What do you say? \n Please choose between 'In' or 'Out'.";
            display(output);
            y2015Count++;
            console.log(y2015Count + output);
        } else if (parsedInput === "fight" && y2015Count === 2) {
            output = "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure. \n The End.";
            display(output);
            y2015Count++;
            console.log(y2015Count + output);
        } else if (parsedInput === "run" && y2015Count === 2) {
            output = "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice. \n The End.";
            display(output);
            y2015Count++;
            console.log(y2015Count + output);
        } else if (parsedInput === "in" && y2015Count === 2) {
            output = "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you. \n The End.";
            display(output);
            y2015Count++;
            console.log(y2015Count + output);
        } else if (parsedInput === "out" && y2015Count === 2) {
            output = "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure. \n The End.";
            display(output);
            y2015Count++;
            console.log(y2015Count + output);
        } else {
            output = "If you're seeing this, there's an error somewhere.";
            display(output);
            y2015Count++;
            console.log(y2015Count + output);
        }
};

var y1985 = function () {
    if (y1985Count < 1) {
            console.log("Entering year 1985-2014");
        y1985Count++;
        output = "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?";
        console.log(y1985Count);
        display(output);
    } else if (y1985Count === 1) {
        output = `Welcome to the future, ${document.getElementById('input').value}. \n The End.`;
        display(output);
        y1985Count++;
        console.log(y1985Count + " " + output);
    } else {
        output = "If you're seeing this, there's an error somewhere.";
        display(output);
        y1985Count++;
        console.log(y1985Count + " " + output);
    }
};

var y1955 = function() {
    if (y1955Count < 1) {
        console.log("Entering year 1955-1984");
        y1955Count++;
        output = "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? \n Please choose between 'Yes', 'No', or 'Set-up: Set her up with George'.";
        console.log(y1955Count);
        display(output);
    } else if (parsedInput === "yes" && y1955Count === 1) {
        y1955Count++;
        output = "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955. \n The End.";
        display(output);
        console.log(y1955Count + " " + output);
    } else if (parsedInput === "no" && y1955Count === 1) {
        y1955Count++;
        output = "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist. \n The End.";
        display(output);
        console.log(y1955Count + " " + output);
    } else if (parsedInput = "set-up" && y1955Count === 1) {
        y1955Count++;
        output = "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time. \n The End.";
        display(output);
        console.log(y1955Count + " " + output);
    } else {
        output = "If you're seeing this, there's an error somewhere.";
        display(output);
        y1955Count++;
        console.log(y1955Count + " " + output);
    }
};

var y1900 = function() {
    if (y1900Count < 1) {
        console.log("Entering year 1954 and earlier");
        y1900Count++;
        output = "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? \n Choose between 'Horses', 'Moonshine', or 'Train'.";
        console.log(y1900Count);
        display(output);
    } else if (parsedInput ==="Horses" && y1900Count === 1) {
        y1900Count++;
        output = "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it. \n The End.";
        display(output);
        console.log(y1900Count + " " + output);
    } else if (parsedInput ==="moonshine" && y1900Count === 1) {
        y1900Count++;
        output = "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855. \n The End.";
        display(output);
        console.log(y1900Count + " " + output);
    } else if (parsedInput ==="train" && y1900Count === 1) {
        y1900Count++;
        output = "Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? \n Choose to 'Take' her or 'Leave' her.";
        display(output);
        console.log(y1900Count + " " + output);
    } else if (parsedInput ==="take" && y1900Count === 2) {
        y1900Count++;
        output = "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her. \n The End.";
        display(output);
        console.log(y1900Count + " " + output);
    } else if (parsedInput ==="leave" && y1900Count === 2) {
        y1900Count++;
        output = "Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed. \n The End.";
        display(output);
        console.log(y1900Count + " " + output);
    } else {
        output = "If you're seeing this, there's an error somewhere.";
        display(output);
        y1900Count++;
        console.log(y1900Count + " " + output);
    }
};

function checkAnswer() {
    if (parsedInput >= 2015 || y2015Count > 0) {
        y2015();
    } else if (parsedInput >= 1985 && parsedInput <= 2014 || y1985Count > 0) {
        y1985();
    } else if (parsedInput >= 1955 && parsedInput <= 1984 || y1955Count > 0) {
        y1955();
    } else if (parsedInput <= 1954 || y1900Count > 0) {
        y1900();
    }
};