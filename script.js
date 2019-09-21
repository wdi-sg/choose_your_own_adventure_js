console.log("hello script js");
alert('Hello. Welcome to THE \'Adventure to Become the Best Living Guitarist in, like, EVER.\' What is your name? Please type CAREFULLY. You only got ONE shot and stupid names are stored FOREVER.')
var playerName;
var enteredName = 0;
var approachAxel = 0;
var goHome = 0;
var goBar = 0;

var inputHappened = function(currentInput){
    playerName = currentInput;
    var welcomeMessage = `Hi ${playerName}! Henceforth commences the face-melting. Might even fight monsters and shit. Let's begin. \n
    You're walking along Hollywood Boulevard, where you meet a dude with vicious attitude and SERIOUS guitar skills. Like, legendary. What do you do? (Hint: type the exact characters before the brackets to perform an action) \n ah) Approach him. \n gh) Nah. Go home.`
    if (currentInput && enteredName === 0) {
        enteredName = true;
        return welcomeMessage;
    } if (currentInput === 'ah' && enteredName) {
        approachAxel = true;
        return `You approach him and ask for his name.\n "Axel", he says. "I'm just about to head to the bar, dude. Wanna come? There's gonna be other legendary guitarists." \nWhat do you do? \n gb) Go to the bar. \n gh) Nah. Go home.`
    } if (currentInput === 'gb' && enteredName && approachAxel) {
        goBar = true;
        return `You're at the bar now. You take a look around and DUDE, Axel wasn't joking - there are shredders EVERYWHERE. A shady-looking hoodied figure walks over. "Hey, you're ${playerName}, right? I've been looking for you. You're the chosen one." He stretches out his hand, in it, a small box. Do you:
        \n ti) Take it. \n hn) Hell no.`
    }
     if (currentInput === 'gh' && enteredName) {
        var goHome = true;
        return `You decide to go home instead. Like, WEAK, dude.`
    } else {
        return `Invalid input`
    }
}