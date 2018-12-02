// Separate script just for dungeon and further questions

// For damage calculation
var dmgBoss = Math.floor(Math.random() * 20);
var dmgUser = Math.floor(Math.random() * 80);
var dmgUserUlti = Math.floor(Math.random(1000) * 1500);

// For lethal damage on user
var userFinalHp = 0;

// Allow user to choose which room to start with
var dungeonMain = function(){
    var dungChoice = prompt(userNameOutput[0] + " input the dungeon room number from 1 - 3 in order to enter.\nSurprises lies ahead!");
    var dungNewChoice = parseInt(dungChoice);
    while(isNaN(dungNewChoice) === true){
        alert("Error! Please input a number.");
        dungeonMain();
            if(isNaN(dungNewChoice) === false){
                break;
            }
    }
    if(dungNewChoice === 2){
        dungeonRm2Fake();
    }
    dungeonRm(dungNewChoice);
}

var dungeonClear1 = function(){
    var dungClChoice1 = prompt(userNameOutput[0] + " has cleared room 1. " + "Please input the next dungeon room number from 2 / 3 in order to enter.\nSurprises lies ahead!");
    var dungClearChoice1 = parseInt(dungClChoice1);
    while(isNaN(dungClearChoice1) === true){
        alert("Error! Please input a number.");
        dungeonClear1();
            if(isNaN(dungClearChoice1) === false){
                return dungClearChoice1;
            }
    }
    if(dungClearChoice1 === 2 || dungClearChoice1 === 3){
        dungeonRm(dungClearChoice1);
    }
    else{
        alert("Not a valid choice, please choose again.");
        dungeonClear1();
    }
}

var mystDoor = function(){
    alert("Health fully recovered");
    userStats.Health = 100;
    alert("Status update take a look at your current stats:-\n\n" + "Name: "+ userStats.Name + "\n" + "Current Points: " + userStats.Points + "\n" + "Current Health: " + userStats.Health + "\n" + "Current Weapon: " + userStats.Weapon);
    dungeonClear1();
}

var dungeonRm1Nex = function(){
    var dungNewEx = prompt("A mysterious door appeared. Do you want to enter the mysterious door or exit room?");
    var dungNewExDoor = dungNewEx.toLowerCase();
    if(dungNewExDoor.includes("enter") === true){
        mystDoor();
    }
    else if(dungNewExDoor.includes("exit") === true){
        dungeonClear1();
    }
    else{
        alert("Not a valid choice, please choose again.");
        dungeonRm1Nex();
    }
}

var endGame = function(){
    userStats.Health = userFinalHp;
    var userCont = prompt("I guess you have been defeated in the dungeon. Here is your current status:-\n\n" + "Name: "+ userStats.Name + "\n" + "Current Points: " + userStats.Points + "\n" + "Current Health: " + userStats.Health + "\n" + "Current Weapon: " + userStats.Weapon + "\n\nDo you want to continue back into the dungeon? Yes/No");
    var userContAns = userCont.toLowerCase();
    if(userContAns.includes("y") === true){
        userStats.Health = 100;
        alert("Health fully recovered");
        dungeonMain();
    }
    else if(userContAns.includes("n") === true){
        stopGame();
    }
}

var fightRm1 = function(){
    var bossHp = 100;
    var bossCHp = bossHp - dmgUser;
    var userCurHp = userStats.Health - dmgBoss;
    alert(userNameOutput[0] + " attacked Boss using the " + randomEquipString + "\n" + "Damaged dealt to boss: " + dmgUser + "\nBoss current hp: " + bossCHp);
    var fightBoss = prompt("Boss attacked you with its claw with damage of " + dmgBoss + "\nPower up appeared do you want to use? Decide wisely as it might not be what you think it is. Yes/No" + "\n\nYour current hp: " + userCurHp + "\nBoss current hp: " + bossCHp);
    var fightBossAns = fightBoss.toLowerCase();
    if(fightBoss.includes("y") === true){
        var powerUpHp = userCurHp -= dmgBoss;
        alert(userNameOutput[0] + " starts to feel agonizing pain through your body as the power up rushes into your body inflicting you with " + dmgBoss + " damage to you\n\n" + "Your current hp: " + powerUpHp);
        alert(userNameOutput[0] + " uses the " + userStats.Weapon + " starts to glow and you attacked the Boss with it blowing it into pieces with damage of " + dmgUserUlti);
    }
    else if(fightBoss.includes("n") === true){
        alert("Boss nuke you to death");
        endGame();
    }
    else{
        alert("Not a valid choice, please choose again.");
        fightRm1();
    }
    point += 10;
    Object.assign(userStats, {Points: point});
    alert("Boss defeated! 10 points added!");
    dungeonRm1Nex();
}

var fightRm2 = function(){
    alert("Take a look at your current stats:-\n\n" + "Name: "+ userStats.Name + "\n" + "Current Points: " + userStats.Points + "\n" + "Current Health: " + userStats.Health + "\n" + "Current Weapon: " + userStats.Weapon);
    alert("You attacked the weird looking creature with your glowing " + userStats.Weapon + " killing it instantly.")
    point += 5;
    Object.assign(userStats, {Points: point});
    dungeonEscape();
}

var dungeonRm2En = function(){
    var userCurHp2 = userStats.Health - dmgBoss;
    alert("You lost " + dmgBoss + "hp\n" + "Your current hp: " + userCurHp2);
    var dungRm2Box = prompt("Do you want engage the enemy or flee?");
    var dungRm2BoxAns = dungRm2Box.toLowerCase();
    if(dungRm2BoxAns.includes("engage") === true){
        fightRm2();
    }
    else if(dungRm2BoxAns.includes("flee") === true){
        dungeonEscape();
    }
    else{
        alert("Not a valid choice, please choose again.");
        dungeonRm2En();
    }
}

var dungeonRm1 = function(){
    alert("Boss appeared!!!!!\n\n...▀▀▀▀▀▀▀▀...\n...▀▀▀▀▀▀▀▀...\n...▀▀▀▀▀▀▀▀...\n...▀▀▀▀▀▀▀▀...\n...▀▀▀▀▀▀▀▀...\n...▀▀▀▀▀▀▀▀...\n");
    var dungNewChoice1 = prompt("Engage the enemy or flee?");
    var dungRmChoice1 = dungNewChoice1.toLowerCase();
    if(dungRmChoice1.includes("engage") === true){
        fightRm1();
    }
    else if(dungRmChoice1.includes("flee") === true){
        alert(userNameOutput[0] + " has exit the room.");
        dungeonMain();
    }
    else{
        alert("Not a valid choice, please choose again.");
        dungeonRm1();
    }
}

var dungeonRm2 = function(){
    var dungNewChoice2 = prompt("A glowing box appeared in the middle of the room upon entering. Do you want to open the box? Yes/No");
    var dungRmChoice2 = dungNewChoice2.toLowerCase();
    if(dungRmChoice2.includes("y") === true){
        alert(userNameOutput[0] + " walks towards the glowing box cautiously.");
        alert(userNameOutput[0] + " opened the box. A creature came out of the box and attacked you!");
        dungeonRm2En();
    }
    else if(dungRmChoice2.includes("n") === true){
        alert(userNameOutput[0] + " has exit the room.");
        dungeonClear1();
    }
    else{
        alert("Not a valid choice, please choose again.");
        dungeonRm2();
    }
}

var dungeonRm3 = function(){
    alert("Under maintenance");
    dungeonMain();
}

var dungeonRm2Fake = function(){
    alert("Sorry the game is not optimize to start from here. Come back here when you finish room 1 so start from room 1 thank you.");
    dungeonMain();
}

var dungeonRm = function(dungNewChoice){
    if(dungNewChoice === 1){
        dungeonRm1();
    }
    else if(dungNewChoice === 2){
        dungeonRm2();
    }
    else if(dungNewChoice === 3){
        dungeonRm3();
    }
    else{
        alert("Not a valid choice, please choose again.");
        dungeonMain();
    }
}

var dungeonFloor = function(){
    alert(userNameOutput[0] + " you will start earning points while doing various action while you are in the dungeon. The points earned will rank up your adventurer level. You will be able to see your total points once you exit the dungeon. Good Luck!");
    alert("Before commencing further into the dungeon please take a look at your current stats:-\n\n" + "Name: "+ userStats.Name + "\n" + "Current Points: " + userStats.Points + "\n" + "Current Health: " + userStats.Health + "\n" + "Current Weapon: " + userStats.Weapon);
    dungeonMain();
}

var dungeonEscape = function(){
    alert("Please take a look at your current stats:-\n\n" + "Name: "+ userStats.Name + "\n" + "Current Points: " + userStats.Points + "\n" + "Current Health: " + userStats.Health + "\n" + "Current Weapon: " + userStats.Weapon);
    alert("Thank you for playing");
    stopGame();
}