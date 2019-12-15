const outputBox = document.querySelector("#output");
const inputBox = document.querySelector("#input");
let name;
let playerWeapon;
let step = 0;
let totalScore = 0;
let gameOver = false;
let enteredName = false;

const objects = {
  player: {
    hp: 100
  },
  monsters: {
    lowerDemons: {
      hp: 100,
      damage: Math.floor(Math.random() * (30 - 10) + 10)
    },
    boss: {
      hp: 500,
      damage: Math.floor(Math.random() * (50 - 30) + 30)
    }
  },
  weapons: {
    normalSword: {
      damage: Math.floor(Math.random() * (50 - 30) + 30)
    },
    bluntSword: {
      damage: Math.floor(Math.random() * 30)
    },
    greaterSword: {
      damage: Math.floor(Math.random() * (100 - 50) + 50)
    },
    swordOfVictory: {
      damage: Math.floor(Math.random() * (300 - 200) + 200)
    }
  }
};

outputBox.textContent = `Choose your own adventure! Please enter your name.`;

var inputHappened = function(currentInput) {
  if (enteredName === false) {
    name = currentInput;
    enteredName = true;
  }
  if (enteredName === true && step === 0) {
    inputBox.value = "";
    totalScore = 0;
    step = 1;
    return `${name}, the alphabets on the left correspond to decisions you can make. 
    For now, enter anything to begin.`;
  }
  if (enteredName && step === 1) {
    inputBox.value = "";
    step = 2;
    totalScore++;
    return `Groggy and confused, you orient yourself to your surroundings. It's a dark cave. Do you 

      l) Go left
      s) Go straight
      r) Go right`;
  }

  if (enteredName && step === 2 && currentInput === "l") {
    step = 3;
    totalScore++;
    return `You go left`;
  } 

  // straight branch
  else if (enteredName && step === 2 && currentInput === "s") {
    inputBox.value = "";
    step = 3;
    totalScore++;
    return `You decide to go straight. There's a lady in white. She appears to be guarding a chest. Next to her, there's a door. Do you:

    a) Approach her
    i) Ignore her, see what's behind the door
    c) Check what's in the chest
    `;
  } else if (enteredName && step === 3 && currentInput === "a") {
    inputBox.value = "";
    step = 4;
    totalScore++;
    playerWeapon = objects.weapons.swordOfVictory;
    return `You decide to approach the lady in white. 
    
    "Hello, ${name}. I've been waiting for you. The road ahead is difficult. It is fortunate that you ran into me - here is a weapon that will help you. Enter this door. Behind this, challenges await."
    
    Enter any key to continue`;
  } else if (enteredName && step === 3 && currentInput === "i") {
    inputBox.value = "";
    step = 4;
    totalScore++;
    playerWeapon = objects.weapons.normalSword;
    return `You enter the door. Demons close in on you!
    
    Enter any key to continue`;
  }

  // right branch
  else if (enteredName && step === 2 && currentInput === "r") {
    inputBox.value = "";
    step = 3;
    totalScore++;
    return `You decide to go right. There's a door in front of you. In the corner, what appears to be a wizard is sprawled out across the floor. The wizard is in a deep sleep. Next to him, a chest. 
    
    What do you do?

    d) Enter the door
    w) Wake the wizard
    c) Open the chest`;
  }
  if (enteredName && step === 3 && currentInput === "d") {
    step = 4;
    inputBox.value = "";
    totalScore++;
    playerWeapon = objects.weapons.normalSword;
    return `You're met by a horde of lower demons! Enter any key to continue.`;
  } else if (enteredName && step === 3 && currentInput === "w") {
    step = 4;
    totalScore++;
    inputBox.value = "";
    playerWeapon = objects.weapons.greaterSword;
    return `You decide to wake the wizard. He appears to be grateful. 
    
    "Thank you, ${name}. I was cursed by a demon to sleep eternally. You saved me. In thanks, have this. You'll need this on your journey. Go through this door. There are demons on the other end. You'll have to defeat them to continue your journey."

    Enter any key to continue.`;
  } else if (enteredName && step === 3 && currentInput === "c") {
    step = 4;
    totalScore++;
    inputBox.value = "";
    playerWeapon = objects.weapons.normalSword;
    return `Magical purple gas fills the room. You're poisoned! When the gas finally clears, nothing is left in the room. You'll need to enter the door. 
    
    Remaining hp: ${(objects.player.hp -= Math.floor(
      Math.random() * (30 - 10) + 10
    ))}
    
    Press any key to continue. `;
  }
  if (enteredName && step === 4 && currentInput) {
    step = 5;
    totalScore++;
    inputBox.value = "";
    return `The demons advance on you!

    Enter any key to do battle.`;
  }

  if (enteredName && step === 5 && currentInput) {
    totalScore++;
    while (objects.player.hp > 0 && objects.monsters.lowerDemons.hp > 0) {
      inputBox.value = "";
      objects.player.hp =
        objects.player.hp - objects.monsters.lowerDemons.damage;
      objects.monsters.lowerDemons.hp = objects.monsters.lowerDemons.hp -=
        playerWeapon.damage;
      return `You attack the monsters!

      Remaining hp: ${objects.player.hp}
      Monster hp: ${objects.monsters.lowerDemons.hp} `;
    }
    if (
      objects.monsters.lowerDemons.hp < objects.player.hp &&
      objects.player.hp !== 0
    ) {
      inputBox.value = "";
      step = 6;
      return `You vanqiush the lower demons. A greater demon appears.`; // implement logic for greater demon
    } else {
      inputBox.value = "";
      resetValues();
      return `You lost! Total score: ${totalScore}
      Try again?`;
    }
  }
  if (enteredName && step === 6 && currentInput) {
    totalScore++;
    inputBox.value = "";
    while (objects.player.hp > 0 && objects.monsters.boss.hp > 0) {
      objects.player.hp -= objects.monsters.boss.damage;
      objects.monsters.boss.hp -= playerWeapon.damage;
      return `You attack the greater demon! 
      Remaining hp: ${objects.player.hp}
      Boss hp: ${objects.monsters.boss.hp}`;
    }

    if (objects.player.hp <= 0) {
      resetValues();
      return `You lost! Total score: ${totalScore}
      Try again?`;
    } else if (objects.monsters.boss.hp <= 0) {
      resetValues();
      return `You win! Total score: ${totalScore}
      Play again?`;
    }
  } else {
    return `Invalid input!`;
  }
};

var display = function(data) {
  var displayElement = document.querySelector("#output");
  // get rid of the entire contents
  displayElement.innerHTML = "";
  // put the data into the div
  output.innerText = data;
};

function suspensefullyCalculateScore() {
  let num = 0;
  let calculatingScore = setInterval(function() {
    num++;
    outputBox.innerText = `Calculating score ${num}`;
  }, 10);

  setInterval(function() {
    clearInterval(calculatingScore);
  }, 3000);

  outputBox.innerText = `Your score is ${totalScore}!`;
}

function resetValues() {
  step = 0;
  objects.player.hp = 100;
  objects.monsters.lowerDemons.hp = 100;
  objects.monsters.boss.hp = 500;
}
