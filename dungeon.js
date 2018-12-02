// Separate script just for dungeon and further questions

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

var fightRm2 = function(){

}

var dungeonRm2En = function(){
    var dungRm2Box = prompt("Do you want engage the enemy or flee?");
    var dungRm2BoxAns = dungRm2Box.toLowerCase();
    if(dungRm2BoxAns.includes("engage") === true){
        fightRm2();
    }
    else if(dungRm2BoxAns.includes("flee") === true){
        dungeonClear1();
    }
    else{
        alert("Not a valid choice, please choose again.");
        dungeonRm2En();
    }
}

var dungeonRm1 = function(){
    alert("Boss appeared!!!!!");
    var dungNewChoice1 = prompt("Engage the enemy or flee?");
    var dungRmChoice1 = dungNewChoice1.toLowerCase();
    if(dungRmChoice1.includes("engage") === true){
        alert(userNameOutput[0] + " attacked Boss using " + randomEquipString);
        point += 10;
        alert("Boss defeated! 10 points added!");
        dungeonRm1Nex();
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
        alert(userNameOutput[0] + " opened the box. A creature came out of the box and attacked you! You lost 20Hp.");
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
    alert("Take a look at your current stats:-\n\n" + "Name: "+ userStats.Name + "\n" + "Current Points: " + userStats.Points + "\n" + "Current Health: " + userStats.Health + "\n" + "Current Weapon: " + userStats.Weapon);
    dungeonMain();
}