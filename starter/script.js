function confirmName() {
    const confirmation = confirm(`Is your Name ${playerName}?`);
    if (confirmation === false) {
        playerChoosesName();
    }
}

function playerChoosesName(){
    const choice = prompt("What is your name?");
    //Check if UserInput only contains [A-Za-z]
    if (/[a-z]+$/i.test(choice)) {
        playerName = choice;
        confirmName();
    } else {
        alert("Please only enter Alphabet!")
        playerChoosesName();
    }
    return playerName;
}

function isYearValid(){
    const year = parseFloat(prompt(`Nice to meet you, ${playerName}. What year would you like to go to?`));
    if (year % 1 === 0) {
        chooseYear(year);
    } else {
    alert("Please enter a year in this format(YYYY)");
    isYearValid();
    }
    // return year;
}

function fightOrRun() {
    const choice = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? Enter either \n -S \n -R").toLowerCase();
    if (choice === "s" ) {
                alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
            } else if (choice === "r") {
                alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
            } else {
                alert("Please ONLY enter the letter S or R");
                fightOrRun();
            }
}

function inOrOut(){
    const choice = prompt("Griff is asking you if you are in, or out. What do you say? Enter either \n -I \n -O").toLowerCase();
    if (choice === "i") {
        alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.");
    } else if (choice === "o") {
        alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
    } else {
        alert("Please ONLY enter the letter I or O");
        inOrOut();
    }
}

function biffOrGriff(){
    const choice = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? Enter either \n -B \n -G").toLowerCase();
    if (choice === "b") {
        fightOrRun();
    }
    else if (choice === "g") {
        inOrOut();
    } else {
        alert("Please ONLY enter the letter B or G");
        biffOrGriff();
    }
}

function backToTheFuture1(){
    const choice = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? Enter only \n -Y \n -N \n -S").toLowerCase();
    switch(choice){
        case "y":
            alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
            break;
        case "n":
            alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
            break;
        case "s":
            alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
            break;
        default:
            alert("Please ONLY enter the letter Y or N or S");
            backToTheFuture1();
    }
}

function takeOrLeave(){
    const input = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? Enter only \n -T \n -L");
    if (input === "t") {
        alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.");
    } else if (input === "l") {
        alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
    } else {
        alert("Please ONLY enter the letter T or L")
        takeOrLeave();
    }

}
function horsesMoonshineTrain(){
    const choice = prompt("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? Enter only \n -H \n -M \n -T").toLowerCase();
    switch(choice){
        case "h":
            alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
            break;
        case "m":
            alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.");
            break;
        case "t":
            takeOrLeave();
            break;
        default:
            alert("Please ONLY enter the letter H or M or T");
            horsesMoonshineTrain();
    }
}

function chooseYear(year){
    if (year >= 2015) {
        biffOrGriff();
    } else if (year > 1984 && year < 2015) {
        alert("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");
        //We will reuse the func() before to check if our User Input has any characters other than alphabets
        playerChoosesName();
        alert(`Welcome to the future, ${playerName}`);
    } else if (year > 1954 && year < 1985) {
        backToTheFuture1();
    } else {
        horsesMoonshineTrain();
    }
}

let playerName;
playerChoosesName();
isYearValid();