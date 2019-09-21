console.log("hello script js");
alert('Hello. Welcome to THE \'Adventure to Become the Best Living Guitarist in, like, EVER.\' What is your name? Please type CAREFULLY. You only got ONE shot and stupid names are stored FOREVER.')
var playerName;
var enteredName = 0;


var inputHappened = function(currentInput){
    playerName = currentInput;
    var welcomeMessage = `Hi ${playerName}! Henceforth commences the face-melting where we might fight monsters and shit. Let's begin. \n
    You're walking along Hollywood Boulevard, where you meet a dude with vicious attitude and SERIOUS guitar skills. Like, legendary. What do you do? \n a) Approach him. \n b) Nah. Go home.`
    if (currentInput && enteredName === 0) {
        enteredName = true;
        return welcomeMessage;
    } if (currentInput === 'a' && enteredName) {
        var approachAxel = true;
        return `You approach him and ask for his name.\n "Axel", he says. "I'm just about to head to the bar, dude. Wanna come? There's gonna be other legendary guitarists." \nWhat do you do? \n a) Go to the bar. \n b) Nah. Go home.`
    } if (currentInput === 'a' && enteredName && approachAxel) {
        return `You're at the bar now.`
    }
     if (currentInput === 'b' && enteredName) {
        var goHome = true;
        return `You decide to go home instead. Like, WEAK, dude.`
    } else {
        return `Invalid input. Please input EITHER a or b`
    }
}