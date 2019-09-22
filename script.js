// Math.floor(Math.random() * 10)
// playerName is not working - it keeps getting redefined everytime there's currentInput
console.log("hello script js");
alert('Hello. Welcome to \'Guitars and Monsters: The Adventure.\' What is your name? Please type CAREFULLY. You only got ONE shot and stupid names are stored FOREVER.')
var boxes = [{
        item: 'Legendary Stratocaster of Hendrix!',
        dmg: 9999,
        description: 'Gamebreaker!'
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
var playerHP = 415;
var boss = {
    name: 'Beezebub',
    hp: 500,
    dmg: 80,
    description: `The evilest being to roam the earth.`
}
var enteredName = 0;
var approachAxel = 0;
var goHome = 0;
var goBar = 0;
var getBox = 0;
var openedBox;
var rejectBox = 0;
var givenBox;
var playerName = [];
var playerWon;
var playerLost;
var fightBoss;
var bossWon;
var randomizeBox = function() {
    var odds = Math.floor(Math.random() * 10)
   if (odds >= 0 && odds < 3) {
    givenBox = boxes[0];
   } else if (odds >= 3 && odds < 9) {
    givenBox = boxes[1];
   } else if (odds === 9) {
    givenBox = boxes[2];
   }
   return givenBox;
}

var fightCalc = function() {
    while (playerHP > 0 && boss.hp > 0) {
    playerHP = playerHP - boss.dmg;
    boss.hp = boss.hp - givenBox.dmg;
    }
    if (playerHP > 0 && playerHP > boss.hp) {
            playerWon = true;
            var winMessage = `You won with ${playerHP} HP left! You have defeated ${boss.name}. Congratulations, you are the raddest rocker to ever live!`;
            return winMessage;
    } else if (boss.hp > 0 && boss.hp > playerHP) {
            playerLost = true;
            var loseMessage = `You lost with ${playerHP} HP left. You have been defeated by ${boss.name}. Try again, sucka!`
            return loseMessage;
    }
}

var inputHappened = function(currentInput){
    playerName.push(currentInput);
    var welcomeMessage = `Hi ${playerName}! Henceforth commences the face-melting. We might even fight monsters and shit. Let's begin. \n
    You're walking along Hollywood Boulevard, where you meet a dude with vicious attitude and SERIOUS guitar skills. Like, legendary. What do you do? (Hint: type the exact characters before the brackets to perform an action) \n\n ah) Approach him. \n gh) Nah. Go home.`
    if (currentInput && enteredName === 0 && currentInput != "ah") {
        enteredName = true;
        return welcomeMessage;
    } if (currentInput === 'ah' && enteredName) {
        approachAxel = true;
        return `You approach him and ask for his name.\n\n "Axel," he says.\n\n "I'm just about to head to the bar, dude. Wanna come? The place is literally filled with legendary guitarists." \n\nWhat do you do? \n\n gb) Go to the bar. \n gh) Nah. Go home.`
    } if (currentInput === 'gb' && enteredName === true && approachAxel) {
        goBar = true;
        return `You're at the bar now. You take a look around and DUDE, Axel wasn't kidding - there are shredders EVERYWHERE. A shady-looking hoodied figure walks over. "Hey, you're ${playerName[0]}, right? I've been looking for you. You're the chosen one..." He stretches out his hand, in it, a small box. Do you:
        \n ti) Take it. \n hn) Hell no.`
    } if (currentInput === 'ti' && enteredName && approachAxel && goBar) {
        getBox = true;
        var results = randomizeBox();
        return `You take the box. When you look up, the seedy-looking guy's already disappeared. \n\n "Dude, we get lot of types in here but that was weird," Axel mutters while shaking his head. You look at the box, puzzled. \n\n "Well," he barely manages. "You'd better open it."\n\n You open the box, and inside is: \n\n Item: ${givenBox.item} \n Power level: ${givenBox.dmg} \n Description: ${givenBox.description} \n\n Time to give your gear a test drive! Feeling the immense power flowing through your hands, you command your fiercest power stance and let the guitar ring. \n\n Enter (c) to continue`
    } if (currentInput === 'c' && enteredName && approachAxel && goBar && getBox) {
        openedBox = true;
        return `The moment you strum the guitar, electricity begins to course through the air. Smoke is everywhere - slowly, an enormous figure materializes. "I'VE FOUND YOU," it bellows. "I'm ${boss.name} and I'm here to destroy you and the ${givenBox.item} FOREVER!" \n Well, shit. \n\n Time to fight the boss! \n
            ${boss.name} \n\n Description: ${boss.description} \n Boss HP: ${boss.hp} \n Your HP: ${playerHP} \n\n fb) Fight boss`
    } if (currentInput === 'fb' && enteredName && approachAxel && goBar && getBox && openedBox) {
        fightBoss = true;
        return fightCalc();
        if (playerWon) {
            return winMessage;
        } else if (playerLost) {
            return loseMessage;
        }
    } if (currentInput === 'hn' && enteredName && approachAxel && goBar) {
        rejectBox = true;
        return `Live a life of being boring forever, why don't you. This is supposed to be an adventure. \n GAME OVER`
    }
     if (currentInput === 'gh' && enteredName) {
        var goHome = true;
        return `You decide to go home instead. WEAK, dude. What do you do? \n op) Order pizza. \n bs) You're surfing the net and see some loot boxes. You decide to buy stuff.`
    } else {
        return `Invalid input`
    }
}