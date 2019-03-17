var score = 0;

var startWarning = function() {
    var confirmRun = confirm("I hope you've read the instructions!\nClick OK to run game or Cancel to go back.");
    if (confirmRun == true) {
        playerName();
    }
    else {
        thankYouMessage();
    };
};

var thankYouMessage = function(){
    alert("Thank you for trying out my game!");
    location.reload();
};

var playerName = function(){
    playerName = prompt("What is your name?");
    if (playerName === "" || playerName === null){
        alert("Please enter a name!");
        console.log("reloading");
        location.reload();
    } else {
        askYear();
    }
};

var askYear = function(){
    yearInput = prompt("Nice to meet you, " + playerName + (". What year would you like to go to? (YYYY)"));
    if (yearInput % 1 === 0) {
        timeTravel();
    } else {
        alert("Please enter a year in this format: YYYY eg. 1984");
        alert("Lets try this again!");
        console.log("reloading");
        location.reload();
    }
};

var dbg = function(){
    alert("I see you're a fan of Back to the Future 2.");
    fightWho = prompt("Would you rather deal with Biff, or Griff? (B/G)");
    if (fightWho.toLowerCase() === "b") {
        choiceBiff = prompt("Hmm, interesting. Biff is angry and has a cane. Do you Stand and fight, or Run away like a coward? (S/R)")
        if (choiceBiff.toLowerCase() === "s") {
            alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
            score++;
        } else if (choiceBiff.toLowerCase() === "r"){
            alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
            score--;
        }
    } else if (fightWho.toLowerCase() === "g") {
        choiceGriff = prompt("Griff is asking you if you are In, or Out. What do you say? (I/O)");
        if (choiceGriff.toLowerCase() === "i") {
            alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
            score--;
        } else if (choiceGriff.toLowerCase() === "o") {
            alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
            score++;
        }
    }
};

var waiting = function(){
    alert("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015.");
    newName = prompt("What name would you like to go by until then?");
    alert("Welcome to the future, " + newName + ".");
    score--;
};

var prom =function(){
    alert("I see you're a fan of Back to the Future 1.");
    goProm = prompt("Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? Yes, No, or Set her up with George? (Y/N/S)");
    if (goProm.toLowerCase() === "y") {
        alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in " + yearInput + ".");
        score--;
    } else if (goProm.toLowerCase() === "n") {
        alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
        score--;
    } else if (goProm.toLowerCase() === "s") {
        alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
        score++;
    };
};

var hmt = function(){
    alert("I see you're a fan of Back to the Future 3.");
    power = prompt("You've run out of gas and can't get back to your own time! How do you power the Time Machine? Horses, Moonshine, or Train? (H/M/T)");
    if (power.toLowerCase() === "h") {
        alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
        score--;
    } else if (power.toLowerCase() === "m") {
        alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in " + yearInput + ".");
        score--;
    } else if (power.toLowerCase() === "t") {
        alert("Good call! This plan seems to be working.");
        score++;
        clara = prompt("But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? Take her, or Leave her? (T/L)");
        if (clara.toLowerCase() === "t") {
            alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in " + yearInput + " with her.");
        } else if (clara.toLowerCase() === "l") {
            alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
        }
    };
};


var timeTravel = function(){
    if (yearInput >=2015){
        console.log("BG");
        dbg();
    } else if (yearInput >=1985 && yearInput <=2014){
        console.log("waiting");
        waiting();
    } else if (yearInput >=1955 && yearInput <=1984){
        console.log("prom");
        prom();
    } else if (yearInput < 1955) {
        console.log("hmt");
        hmt();
    };
    alert("Your score is: " + score);
    if (score > 0) {
        alert("Good job!");
    } else if (score <0) {
        alert("Maybe time traveling isn't a good idea...");
    }
};