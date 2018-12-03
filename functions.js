// generate a random number between 1 to 20
function diceRoll() {
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    return randomNumber;
}

function friendly() {
    randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
        text = alert("You found a Damage Potion, You feel stronger!\n(Attack: +1)")
        userAtk = userAtk + 1;
        break;
        case 1:
        text = alert("You found a Defense Potion, You feel tougher!\n(Defense: +1)");
        userDef = userDef + 1;
        break;
        case 2:
        text = alert("You found a Vitality Potion, You are bursting with energy\n(Health: +10)");
        userHealth = userHealth + 10;
        break;
    }
    return text;
}

function hostile() {
    randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
        text = alert("You fell into a spiked trap!\n(Health: -5)");
        userHealth = userHealth - 5;
        break;
        case 1:
        text = alert("You felt a chill in the air....\n(You decide to proceed with caution)");
        break;
        case 2:
        text = alert("You tripped on a rock....\n(You are dying of embarassment)");
        break;
    }
    return text;
}

function neutral() {
    randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
        text = alert("You came across an extinguished campfire, but there was no one in sight.");
        break;
        case 1:
        text = alert("You heard a whisper from behind, but you could not make out what or who it was");
        break;
    }
    return text;
}

function attack() {
    if (diceRoll() >= 15) {
        atkRoll = "crit"
    } else if (diceRoll() >= 6) {
        atkRoll = "hit";
    } else if (diceRoll() >= 1) {
        atkRoll = "miss";
    }
    return atkRoll;
}

function defend() {
    if (diceRoll() >= 15) {
        defRoll = ("dodge");
    } else if (diceRoll() >= 6) {
        defRoll = ("hit");
    } else if (diceRoll() >= 1) {
        defRoll = ("crit");
    }
}

function combat() {
    alert("A wild " + monster + " appeared!");
//     if (monster === "Bat") {
//        alert("")
//    }
    console.log(monAtk, monHealth)
    do {
        if (attack() === "crit") {
            userDamage = userAtk * 2;
        } else if (attack() === "hit") {
            userDamage = userAtk;
        } else if (attack() === "miss") {
            userDamage = 0;
        }
        if (defend() === "dodge") {
            monDamage = 0;
        } else if (defend() === "hit") {
            monDamage = monAtk;
        } else if (defend() === "crit") {
            monDamage = monAtk + 1;
        }
        console.log("here")
        console.log(userDamage, monDamage)
        userHealth = userHealth - monDamage;
        monHealth = monHealth - userDamage;
        alert("You dealt " + userDamage + " damage. " + monster + " dealt " + monDamage + " damage.");
        alert("You have " + userHealth + " health left. " + monster + " has " + monHealth + " health left.");
    } while (userHealth > 0 || monHealth > 0)
}

function encounter() {
var randEnc = encArray[Math.floor(Math.random() * encArray.length)];
    if (randEnc === monArray) {
        var num = Math.round(Math.random());
        monster = monArray[num].name;
        monAtk = monArray[num].attack;
        monHealth = monArray[num].health;
        console.log(monAtk, monHealth)
        console.log("test");
        alert("You heard something approaching");
        combat();
        //console.log(monHealth,monAtk)
    } else if (randEnc === treasureArray) {
        var num = Math.floor(Math.random() * 3);
        if (treasureArray[num].name === "Sword" && rightHand === false) {
            userAtk = userAtk + treasureArray[num].attack;
            treasure = treasureArray[num].name;
            rightHand = true;
            alert("You found a sharp sword and decide to hold on to it");
        } else if (treasureArray[num].name === "Shield" && leftHand === false) {
            userDef = userDef + treasureArray[num].defense;
            treasure = treasureArray[num].name;
            leftHand = true;
            alert("You found a battered shield and decided to hold on to it");
        } else if (treasureArray[num].name === "Potion" || rightHand === true || leftHand == true) {
            userHealth = 20;
            treasure = treasureArray[num].name;
            alert("You found a potion\nYou decided to drink it");
        }
    } else if (randEnc === event) {
        var randEvent = event[Math.floor(Math.random() * 3)];
        if (randEvent === "Friendly") {
            friendly();
        } else if (randEvent === "Hostile") {
            hostile();
        } else if (randEvent === "Neutral") {
            neutral();
        }
    }
}