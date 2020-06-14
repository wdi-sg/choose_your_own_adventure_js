console.log("hello script js");

//misc. function

//prompt user to key in name
var name = prompt("Key in your name");

//display message in h4 which id="message"
function displayName(){
    document.getElementById("message").innerHTML = "Hi " + name + ", key your option below: ";
}

displayName();

function displayError(){
    document.getElementById("error-message").innerHTML = "* Please key in the correct input below.";
}


//display start message in the output box
function startMessage(message){
    output.innerText = message;
}

startMessage("Nice to meet you, " + name + ". What year would you like to go to? (YYYY)");


//reset the input after entry
function inputReset(){
    document.getElementById('input').value = "";
}


//main function

var currentStatus = "";

var score = 0;

//levels object
var levels = {
    optionOne: {
        questionOne: "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)",
        //B
        partOne: {
            questionTwo: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R) S - Stand and Fight, R - Run like a coward",
            //S
            one: "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.",
            //R
            two: "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."
        },
        //G
        partTwo: {
            questionTwo: "Griff is asking you if you are in, or out. What do you say? (I/O) I - In, O - Out",
            //I
            one: "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.",
            //O
            two: "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure."
        }
    },

    optionTwo: {
        questionOne: "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?",
        //Calvin Klein
        partOne: "Welcome to the future, Calvin Klein."
    },

    optionThree: {
        questionOne: "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S) Y - Yes, N - No, S - Set her up with George",
        //Y
        partOne: "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.",
        //N
        partTwo: "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.",
        //S
        partThree: "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time."
    },

    optionFour: {
        questionOne: "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T) H - Horses, M - Moonshine, T - Train",
        //H
        partOne: "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.",
        //M
        partTwo: "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.",
        //T
        partThree: {
            questionTwo: "Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (G/L) G - Grab her, L - Leave her",
            //G
            one: "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.",
            //L
            two: "Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed."
        }
    }
};


function inputHappened(currentInput){
    console.log( currentInput );

    inputReset();

    var input = currentInput.toUpperCase();
    console.log(input);

    // >= 2015
    //optionOne - questionOne
    if (currentInput >= 2015){
        currentStatus = "optionOne - questionOne";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionOne"]["questionOne"];
    }

    // >= 2015
    //optionOne - partOne - questionTwo
    if (currentStatus === "optionOne - questionOne" && input === "B"){
        currentStatus = "optionOne - partOne - questionTwo";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionOne"]["partOne"]["questionTwo"];
    }
    // >= 2015
    //optionOne - partOne - questionTwo - one
    if (currentStatus === "optionOne - partOne - questionTwo" && input === "S"){
        currentStatus = "end";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionOne"]["partOne"]["one"] + " Total score: " + score;
    }
    // >= 2015
    //optionOne - partOne - questionTwo - two
    if (currentStatus === "optionOne - partOne - questionTwo" && input === "R"){
        currentStatus = "end";
        console.log(currentStatus);
        score--;
        console.log(score);
        return levels["optionOne"]["partOne"]["two"] + " Total score: " + score;
    }

    // >= 2015
    //optionOne - partTwo - questionTwo
    if (currentStatus === "optionOne - questionOne" && input === "G"){
        currentStatus = "optionOne - partTwo - questionTwo";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionOne"]["partTwo"]["questionTwo"];
    }
    // >= 2015
    //optionOne - partTwo - questionTwo - one
    if (currentStatus === "optionOne - partTwo - questionTwo" && input === "I"){
        currentStatus = "end";
        console.log(currentStatus);
        score--;
        console.log(score);
        return levels["optionOne"]["partTwo"]["one"] + " Total score: " + score;
    }
    // >= 2015
    //optionOne - partTwo - questionTwo - two
    if (currentStatus === "optionOne - partTwo - questionTwo" && input === "O"){
        currentStatus = "end";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionOne"]["partTwo"]["two"] + " Total score: " + score;
    }

    // 1985-2014
    //optionTwo - questionOne
    if (currentInput >= 1985 && year <= 2014){
        currentStatus = "optionTwo - questionOne";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionTwo"]["questionOne"];
    }

    // 1985-2014
    //optionTwo - partOne
    if (currentStatus === "optionTwo - questionOne" && input === "CALVIN KLEIN"){
        currentStatus = "end";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionTwo"]["partOne"] + " Total score: " + score;
    } else if (currentStatus === "optionTwo - questionOne" && input != "CALVIN KLEIN"){
        console.log(currentStatus);
        score--;
        console.log(score);
        return "Wrong answer, try again! Think of the brand, CK."
    }

    // 1955-1984
    //optionThree - questionOne
    if (currentInput >= 1955 && year <= 1984){
        currentStatus = "optionThree - questionOne";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionThree"]["questionOne"];
    }
    // 1955-1984
    //optionThree - partOne
    if (currentStatus = "optionThree - questionOne" && input === "Y"){
        currentStatus = "end";
        console.log(currentStatus);
        score -= 2;
        console.log(score);
        return levels["optionThree"]["partOne"] + " Total score: " + score;
    }
    // 1955-1984
    //optionThree - partTwo
    if (currentStatus = "optionThree - questionOne" && input === "N"){
        currentStatus = "end";
        console.log(currentStatus);
        score--;
        console.log(score);
        return levels["optionThree"]["partTwo"] + " Total score: " + score;
    }
    // 1955-1984
    //optionThree - partThree
    if (currentStatus = "optionThree - questionOne" && input === "S"){
        currentStatus = "end";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionThree"]["partThree"] + " Total score: " + score;
    }

    // < 1955
    //optionFour - questionOne
    if (currentInput < 1955){
        currentStatus = "optionFour - questionOne";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionFour"]["questionOne"];
    }

    // < 1955
    //optionFour - partOne
    if (currentStatus = "optionFour - questionOne" && input === "H"){
        currentStatus = "end";
        console.log(currentStatus);
        score--;
        console.log(score);
        return levels["optionFour"]["partOne"] + " Total score: " + score;
    }
    // < 1955
    //optionFour - partTwo
    if (currentStatus = "optionFour - questionOne" && input === "M"){
        currentStatus = "end";
        console.log(currentStatus);
        score -= 2;
        console.log(score);
        return levels["optionFour"]["partTwo"] + " Total score: " + score;
    }

    // < 1955
    //optionFour - partThree - questionTwo
    if (currentStatus = "optionFour - questionOne" && input === "T"){
        currentStatus = "optionFour - partThree - questionTwo";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionFour"]["partThree"]["questionTwo"];
    }

    // < 1955
    //optionFour - partThree - one
    if (currentStatus = "optionFour - partThree - questionTwo" && input === "G"){
        currentStatus = "end";
        console.log(currentStatus);
        score--;
        console.log(score);
        return levels["optionFour"]["partThree"]["two"] + " Total score: " + score;
    }
    // < 1955
    //optionFour - partThree - two
    if (currentStatus = "optionFour - partThree - questionTwo" && input === "L"){
        currentStatus = "end";
        console.log(currentStatus);
        score++;
        console.log(score);
        return levels["optionFour"]["partThree"]["two"] + " Total score: " + score;
    }
}