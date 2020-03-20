console.log("hello script js");

var clubs = ["Arsenal", "Chelsea", "Manchester United", "Everton", "Liverpool", "Manchester City", "Tottenham Hotspurs"];


var step = 0;
var reset = function() {
    return document.querySelector("#input").value = '';
}


var inputHappened = function(input){
  console.log( input );
    if(step === 0) {
        step++;
        reset();
        return "Happy birthday and congratulations on turning 18 " + input + "! My name is Ian and I have been assigned to you as your agent. My role here is to find you the most suitable football club that will hopefully kick-start your footballing career. Leaving London may be difficult for you but what concerns you the most at this point in time? (L)ocation? (M)oney? (S)uccess? (G)ame time?  -------- Please key in one of these alphabets. (L/M/S/G)" ;
    }

    if(step === 1) {
        if(input === "L") {
            step++;
            reset();
            return "You'll never be short of options as London is home to a host of football clubs. Which team are you a supporter of? (A)rsenal, (C)helsea or (T)ottenham Hotspurs? -------- Please key in one of these alphabets (A/C/T)";

        } else if (input === "M") {
            step++;
            reset();
            return "I see you thirst for money aye? How about Manchester City? That is the only football club that can satisfy your greed. ------  Please key in either (yes) or (no).";
        } else if (input === "S") {
            step++;
            reset();
            return "I admire your ambition. Liverpool are currently enjoying a stellar season. Would you like me to approach them for a trial? ------ Please key in either (y) for yes or (n) for no.";
        } else if (input === "G") {
            step++;
            reset();
            return "(M)anchester United are may no longer be the club they once used to be but they still have a fantastic following and a good youth setup. The same can be said of (E)verton who are known for giving youth players a chance. Both teams will offer decent game-time. Which club would you pick? ------- Please key in either (M) or (E)";
        }

 } else if (step === 2) {
    if(input === "A") {
        return "Good choice son! Arsenal play a sexy brand of football! Let me try and get you a trial.";
    } else if (input === "C") {
        return "Chelsea?! That's disappointing. You are destined to fail but sure let's see what they say.";
    } else if (input === "T") {
        return "Tottenham Hotspurs are the worst club on this planet and they are never going to win anything! Also, their fans are rubbish! As your agent, I quit! Hopeless!";
    } else if (input === "y") {
        return "Jurgen Klopp is one of the best managers in town! You will learn a lot from him.";
    } else if (input === "M") {
        return "Good choice, hopefully you will bring this fantastic club back to where it belongs.";
    } else if (input === "E") {
        return "Wise choice. Everton is a people's club and their fans are some of England's most passionate fans. I believe you will grow at this club.";
    } else {
        return "At this moment I'm afraid I don't know which club is suitable for you. Let me continue my search.";
    }
 }

}