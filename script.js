// Math.floor(Math.random() * 10)
// playerName is not working - it keeps getting redefined everytime there's currentInput
console.log("hello script js");
alert('Hello. Welcome to \'Guitars and Monsters: The Adventure.\' What is your name? Please type CAREFULLY. You only got ONE shot and stupid names are stored FOREVER.')
var boxes = [{
        item: 'Legendary Stratocaster of Hendrix!',
        dmg: 9999,
        description: 'Gamebreaker!!!'
    },
            {
        item: 'Telecaster of Prince!',
        dmg: 100,
        description: 'Prince has blessed this Tele with soul power.'
    },
            {
        item: 'junk',
        dmg: 0,
        description: 'It\'s just a box of junk. You\'re screwed.'
    }
]

var boss = {
    name: 'Beezebub',
    hp: 500,
    dmg: 80
}
var playerHP = 415;

var fightCalc = function() {
    while (playerHP > 0 && boss.hp > 0) {
        playerHP = playerHP - boss.dmg;
        boss.hp = boss.hp - givenBox.dmg;
    }
    if (playerHP > 0 && playerHP > boss.hp) {
        console.log('this')
        return `You're left with ${playerHP} hp! You defeated the boss!`;
    } else if (boss.hp > 0 && boss.hp > playerHP) {
         console.log('that')
        return `The boss is left with ${boss.hp}. You don't have any HP left. \n GAME OVER`;
    }
}
var enteredName = 0;
var approachAxel = 0;
var goHome = 0;
var goBar = 0;
var getBox = 0;
var rejectBox = 0;
var givenBox;
var playerName = [];
var randomizeBox = function() {
    var odds = Math.floor(Math.random() * 10)
   if (odds >= 0 && odds < 3) {
    givenBox = boxes[0];
   } else if (odds >= 3 && odds < 9) {
    givenBox = boxes[1];
   } else if (odds === 9) {
    givenBox = boxes[2];
   }
   console.log(givenBox)
   return givenBox;
}


var inputHappened = function(currentInput){
    playerName.push(currentInput);
    var welcomeMessage = `Hi ${playerName}! Henceforth commences the face-melting. Might even fight monsters and shit. Let's begin. \n
    You're walking along Hollywood Boulevard, where you meet a dude with vicious attitude and SERIOUS guitar skills. Like, legendary. What do you do? (Hint: type the exact characters before the brackets to perform an action) \n ah) Approach him. \n gh) Nah. Go home.`
    if (currentInput && enteredName === 0 && currentInput != "ah") {
        enteredName = true;
        return welcomeMessage;
    } if (currentInput === 'ah' && enteredName) {
        approachAxel = true;
        return `You approach him and ask for his name.\n "Axel", he says. "I'm just about to head to the bar, dude. Wanna come? There's gonna be other legendary guitarists." \nWhat do you do? \n gb) Go to the bar. \n gh) Nah. Go home.`
    } if (currentInput === 'gb' && enteredName === true && approachAxel) {
        goBar = true;
        return `You're at the bar now. You take a look around and DUDE, Axel wasn't joking - there are shredders EVERYWHERE. A shady-looking hoodied figure walks over. "Hey, you're ${playerName[0]}, right? I've been looking for you. You're the chosen one." He stretches out his hand, in it, a small box. Do you:
        \n ti) Take it. \n hn) Hell no.`
    } if (currentInput === 'ti' && enteredName && approachAxel && goBar) {
        getBox = true;
        var results = randomizeBox();
        console.log(results)
        return `You take the box. When you look up, the hoodied dude's already gone. "Dude, we get lot of types in here but that was weird", Axel mutters while shaking his head. You look at the box, puzzled. \n "Well. You better open it."\n You open the box, and inside is: \n Item: ${givenBox.item} \n Power level: ${givenBox.dmg} \n Description: ${givenBox.description} \n Well, shit. Time to give your gear a test drive! Feeling the immense power flowing through your hands, you command your best power stance and let the guitar ring. \n Enter (c) to continue`
    // } if (currentInput === 'c' && enteredName && approachAxel && goBar && getBox) {
// insert fight calculation function here
    } if (currentInput === 'hn' && enteredName && approachAxel && goBar) {
        rejectBox = true;
        return `Live a life of being boring forever, why don't you. This is supposed to be an adventure. \n GAME OVER`
    }
     if (currentInput === 'gh' && enteredName) {
        var goHome = true;
        return `You decide to go home instead. Like, WEAK, dude. What do you do? \n op) Order pizza. \n bs) You're surfing the net and see some loot boxes. You decide to buy stuff.`
    } else {
        return `Invalid input`
    }
}