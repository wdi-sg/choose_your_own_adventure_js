console.log("hello script js");

var playerName;
var enteredName = false;
var progress = 0;
var userInput = document.querySelector("#input");
const pinkBox = document.querySelector("#output");
var playerWeapon;
var i = 0;

const totalObjects = {
    user: {
        health: 100
    },
    monsters: {
        straight: {
            venomFrogs: {
                health: 100,
                damage: Math.floor(Math.random() * 5)
            }
        },
        left: {
            vipers: {
                health: 100,
                damage: Math.floor(Math.random() * 5)
            }
        },
        right: {
            fireAnts: {
                health: 100,
                damage: Math.floor(Math.random() * 5)
            }
        },
        finalBoss: {
            leviathan: {
                health: 1000,
                damage: Math.floor(Math.random() * 10)
            }
        }
    },
    weapons: {
        goldenAxe: {
            weaponName: "Golden Axe",
            damage: Math.floor(Math.random() * 30)
        },
        morningStar: {
            weaponName: "Morning Star",
            damage: Math.floor(Math.random() * 15)
        },
        excalibur: {
            weaponName: "Excalibur",
            damage: 500
        },
        saintSword: {
            weaponName: "Saint Sword",
            damage: Math.floor(Math.random() * 30)
        },
        rustySword: {
            weaponName: "Rusty Sword",
            damage: Math.floor(Math.random() * 15)
        },
        awm: {
            weaponName: "AWM Sniper",
            damage: Math.floor(Math.random() * 30)
        },
        dEagle: {
            weaponName: "Desert Eagle",
            damage: Math.floor(Math.random() * 15)
        }
    }
    }

pinkBox.textContent = "Choose a name";

var inputHappened = function(currentInput){
    if(enteredName === false){
        playerName = currentInput;
        enteredName = true;
        userInput.value = "";
  var output = "Welcome " + playerName + "," + " enter anything to continue";
  return output;
}
if (enteredName === true && progress === 0) {
    progress = 1;
    console.log("progress is " + progress);
    userInput.value = "";
    var output = `You find yourself in a dark swamp, surrounded by trees and mud. With the fresh scent of slained goblins wafting into your nose, do you:
      1) Go straight
      2) Go left
      3) Go right`;
    return output;
}
if (currentInput === "1" && progress === 1) {
    userInput.value = "";
    progress = 2;
    console.log("progress is " + progress);
    return `You decide to head straight into the swamp. You see a horde of orcs. Do you:
    a) Fight them
    b) Escape`;
}
if (currentInput === "a" && progress === 2){
    return "You rush foolishly into a group of orcs. You manage to take down a couple of the foul beasts before one decapitates you with his axe. Game Over."
}
else if (currentInput === "b" && progress === 2) {
    progress = 3;
    console.log("progress is: " + progress)
    userInput.value = "";
    return `After astutely making your exit, you come across a treasure chest. Do you:
    c) Open it
    d) Leave it`
}
if (currentInput === "c" && progress === 3) {
    progress = 4;
    playerWeapon = totalObjects.weapons.goldenAxe;
    console.log("player weapon is " + playerWeapon)
    userInput.value = "";
    return "You take a look at the chest and see a rusty lock Looking around for a few seconds, you spot a rock, which you use to bash the lock open. You found a Golden Axe!" + `

    Type anything to continue.`
}
else if (currentInput === "d" && progress === 3) {
    playerWeapon = totalObjects.weapons.morningStar;
    progress = 4
    userInput.value = "";
    return "You take a look at the chest and see a rusty lock. Not wanting to risk an infection, you decide to look around the chest and find a Morning Star lying on the ground. " + `

    Type anything to continue.`
}
if (currentInput !== null && progress ===4 && playerWeapon === totalObjects.weapons.goldenAxe) {
    progress = 5;
    userInput.value = "";
    return "You trudge on ahead. With the added confidence from the acquisition of the Golden Axe, you pick up the pace. You come across a group of Venom Frogs!"
}
else if (currentInput !== null && progress ===4 && playerWeapon === totalObjects.weapons.morningStar) {
    progress = 5;
    userInput.value = "";
    return "You trudge on ahead. With the added confidence from the acquisition of the Morning Star, you pick up the pace. You come across a group of Venom Frogs!" + `
    Type anything to continue`
}
else if (currentInput === "2" && progress === 1) {
    userInput.value = "";
    progress = 2;
    console.log("progress is " + progress);
    return `You decide to head left into the swamp. You see a horde of zombies. Do you:
    aa) Fight them
    bb) Escape`;
}
if (currentInput === "aa" && progress === 2) {
    return "You rush foolishly into a group of zombies. You manage to take down a couple of the undead beasts before one crushes your neck with its hands. Game Over."
}
if (currentInput === "bb" && progress === 2){
    progress = 3;
    userInput.value = "";
    console.log("progress is " + progress);
    return `After barely making it out alive you see a corpse lying on the floor, decked out in equipments. Do you:

    cc) Search the body
    dd) Leave the body`
}
if (currentInput === "cc" && progress === 3){
    progress = 4;
    console.log("progress is " + progress);
    userInput.value = "";
    playerWeapon = totalObjects.weapons.saintSword;
    return `You brave the smell of the rotting corpse and ransack the body. You find a Saint Sword! This body must have belonged to a Holy Knight.

    Type anything to continue.`
}
else if (currentInput === "dd" && progress === 3) {
    userInput.value = "";
    progress = 4;
    console.log("progress is " + progress);
    playerWeapon = totalObjects.weapons.rustySword;
    return `You decided that you were too grossed out by the dead body and decide to walk past it. After walking a little distance away from the body, you stumble across a Rusty Sword lying on the ground and pick it up.

    Type anything to continue.`
}
if (currentInput !== null && progress === 4 && playerWeapon === totalObjects.weapons.saintSword) {
    progress = 5;
    console.log("progress is " + progress);
    userInput.value = "";
    return "You trudge on ahead. With the added confidence from the acquisition of the Saint Sword, you pick up the pace. You come across a group of Vipers!" + `

    Type anything to continue`
}
else if (currentInput !== null && progress === 4 && playerWeapon === totalObjects.weapons.rustySword) {
    progress = 5;
    console.log("progress is " + progress);
    userInput.value = "";
    return "You trudge on ahead. With the added confidence from the acquisition of the Rusty Sword, you pick up the pace. You come across a group of Vipers!" + `

    Type anything to continue`
    }
else if (currentInput === "3" && progress === 1){
    userInput.value = "";
    progress = 2;
    console.log("progress is " + progress);
    return `You decide to head right into the swamp. You see a group of lizardmen. Do you:
    aaa) Fight them
    bbb) Escape`;
}
if (currentInput === "aaa" && progress === 2){
    return "You rush foolishly into a group of lizardmen. You manage to knock down a couple of the scaly monsters before one stabs you with its spear. Game Over."
}
if (currentInput === "bbb" && progress === 2){
    progress = 3;
    userInput.value = "";
    console.log("progress is " + progress);
    return `You managed to sneak past the lizardmen without arousing any attention to yourself. You then come across a poorly hidden bag covered by a few loose leaves. Do you:

    ccc) Search the bag
    ddd) Leave the bag`
}
if (currentInput === "ccc" && progress === 3){
    progress = 4;
    console.log("progress is " + progress);
    userInput.value = "";
    playerWeapon = totalObjects.weapons.awm;
    return `You remove the leaves and search the bag. You found an AWM sniper rifle!

    Type anything to continue.`
}
else if (currentInput === "ddd" && progress === 3){
    progress = 4;
    console.log("progress is " + progress);
    userInput.value = "";
    playerWeapon = totalObjects.weapons.dEagle;
    return `You decide not to slow down to search the bag in case the lizardmen catch up to you. While continuing your escape, you picked up a Desert Eagle lying on the ground!

    Type anything to continue.`
}
if (currentInput !== null && progress === 4 && playerWeapon === totalObjects.weapons.awm) {
    progress = 5;
    console.log("progress is " + progress);
    userInput.value = "";
    return "You trudge on ahead. With the added confidence from the acquisition of the AWM, you pick up the pace. You come across a Fire Ant nest!" + `

    Type anything to continue`
}
if (currentInput !== null && progress === 4 && playerWeapon === totalObjects.weapons.dEagle) {
    progress = 5;
    console.log("progress is " + progress);
    userInput.value = "";
    return "You trudge on ahead. With the added confidence from the acquisition of the Desert Eagle, you pick up the pace. You come across a Fire Ant nest!" + `

    Type anything to continue`
}
if (currentInput !== null && progress === 5 && playerWeapon === totalObjects.weapons.goldenAxe){
    progress = 6;
    console.log("progress is " + progress);
    userInput.value = "";
    while (totalObjects.user.health > 0 && totalObjects.monsters.straight.venomFrogs.health > 0) {
        userInput.value = "";
        totalObjects.user.health = totalObjects.user.health - totalObjects.monsters.straight.venomFrogs.damage;
        totalObjects.monsters.straight.venomFrogs.health = totalObjects.monsters.straight.venomFrogs.health - playerWeapon.damage;
        return `You attack the Venom Frogs with the ${playerWeapon.weaponName}!

        Your Health: ${totalObjects.user.health}
        Venom Frogs Health: ${totalObjects.monsters.straight.venomFrogs.health}`;
    }
}
if (totalObjects.monsters.straight.venomFrogs.health < totalObjects.user.health && totalObjects.user.health !== 0 && playerWeapon === totalObjects.weapons.goldenAxe) {
    progress = 7;
    console.log("progress is " + progress);
    userInput.value = "";
    console.log("player weapon is " + playerWeapon)
    return `You defeat the Venom Frogs

    Type anything to continue`
}
else if (totalObjects.monsters.straight.venomFrogs.health > totalObjects.user.health && playerWeapon === totalObjects.weapons.goldenAxe) {
    return `You were killed in action. Game Over!`
}

if (currentInput !== null && progress === 7 && playerWeapon === totalObjects.weapons.goldenAxe && totalObjects.user.health > 0){
    progress = 8;
    console.log("progress is " + progress);
    userInput.value = "";
    userWeapon = totalObjects.weapons.excalibur;
    return `You carry on forward and come face to face with the World Tree, Yggdrasil. "My child, you've come." Confused to start to look around for a possible source of the voice. "I'm Yggdrasil, the World Tree, and I'm speaking directly to your mind."

    "I must applaud your bravery so far. There's just one final task you have to complete. You have to defeat the monster that will threaten all life in the near future, the Leviathan. But fear not, you will not be alone. I bestow upon you the King's weapon, the Excalibur. Now go forth my child, to victory."

    Spurred on by your new weapon, you carry on forward and come across a huge lake covered in mist. You feel uneasy as the ground starts to shake and more mist starts to appear from nowhere. Before you could even escape, a Leviathan appears out of the water and confronts you!

    Type anything to continue`
}
if (currentInput !== null && progress === 8 && playerWeapon === totalObjects.weapons.excalibur){
    progress = 9;
    console.log("progress is " + progress);
    userInput.value = "";
    while (totalObjects.user.health > 0 && totalObjects.monsters.finalBoss.leviathan.health > 0) {
        totalObjects.user.health = totalObjects.user.health - totalObjects.monsters.finalBoss.leviathan.damage;
        totalObjects.monsters.finalBoss.leviathan.health = totalObjects.monsters.finalBoss.leviathan.health - playerWeapon.damage;
        `You attack the Leviathan with the ${playerWeapon.weaponName}!

        Your Health: ${totalObjects.user.health}
        Leviathan's Health: ${totalObjects.monsters.finalBoss.leviathan.health}`
    }
    if (totalObjects.user.health <= 0) {
        return `You were killed by Leviathan. You've failed the World Tree and all life as you know it will be destroyed. Game Over.`
    }
    else if (totalObjects.monsters.finalBoss.leviathan.health <= 0) {
        return `You defeat the world's nemises, the Leviathan! Congratulations, you win!`
    }
    else if (currentInput !== null && progress === 5 && playerWeapon === totalObjects.weapons.morningStar){
    progress = 6;
    console.log("progress is " + progress);
    userInput.value = "";
    while (totalObjects.user.health > 0 && totalObjects.monsters.straight.venomFrogs.health > 0) {
        userInput.value = "";
        totalObjects.user.health = totalObjects.user.health - totalObjects.monsters.straight.venomFrogs.damage;
        totalObjects.monsters.straight.venomFrogs.health = totalObjects.monsters.straight.venomFrogs.health - playerWeapon.damage;
        return `You attack the Venom Frogs with the ${playerWeapon.weaponName}!

        Your Health: ${totalObjects.user.health}
        Venom Frogs Health: ${totalObjects.monsters.straight.venomFrogs.health}`;
    }
} if (totalObjects.monsters.straight.venomFrogs.health < totalObjects.user.health && totalObjects.user.health !== 0 && playerWeapon === totalObjects.weapons.morningStar) {
    progress = 7;
    console.log("progress is " + progress);
    userInput.value = "";
    return `You defeat the Venom Frogs

    Type anything to continue`
}
else {
    return `You were killed in action. Game Over!`
}
}
if (currentInput !== null && progress === 7 && playerWeapon === totalObjects.weapons.morningStar){
    progress = 8;
    console.log("progress is " + progress);
    userInput.value = "";
    userWeapon = totalObjects.weapons.excalibur;
    return `You carry on forward and come face to face with the World Tree, Yggdrasil. "My child, you've come." Confused to start to look around for a possible source of the voice. "I'm Yggdrasil, the World Tree, and I'm speaking directly to your mind."

    "I must applaud your bravery so far. There's just one final task you have to complete. You have to defeat the monster that will threaten all life in the near future, the Leviathan. But fear not, you will not be alone. I bestow upon you the King's weapon, the Excalibur. Now go forth my child, to victory."

    Spurred on by your new weapon, you carry on forward and come across a huge lake covered in mist. You feel uneasy as the ground starts to shake and more mist starts to appear from nowhere. Before you could even escape, a Leviathan appears out of the water and confronts you!

    Type anything to continue`
}
if (currentInput !== null && progress === 8 && playerWeapon === totalObjects.weapons.excalibur){
    progress = 9;
    console.log("progress is " + progress);
    userInput.value = "";
    while (totalObjects.user.health > 0 && totalObjects.monsters.finalBoss.leviathan.health > 0) {
        totalObjects.user.health = totalObjects.user.health - totalObjects.monsters.finalBoss.leviathan.damage;
        totalObjects.monsters.finalBoss.leviathan.health = totalObjects.monsters.finalBoss.leviathan.health - playerWeapon.damage;
        `You attack the Leviathan with the ${playerWeapon.weaponName}!

        Your Health: ${totalObjects.user.health}
        Leviathan's Health: ${totalObjects.monsters.finalBoss.leviathan.health}`
    }
    if (totalObjects.user.health <= 0) {
        return `You were killed by Leviathan. You've failed the World Tree and all life as you know it will be destroyed. Game Over.`
    }
    else if (totalObjects.monsters.finalBoss.leviathan.health <= 0) {
        return `You defeat the world's nemises, the Leviathan! Congratulations, you win!`
    }
}

};