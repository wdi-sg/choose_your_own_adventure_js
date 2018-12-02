var uName = prompt("What is your name Adventurer?");
var choosewisely = 0
var roomChoiceHistory = 0, health = 1000, weapon = 200, mWeapon = 100, mHealth = 400, bossMode = false, attackChoice = 0
var monsterDB = ["Oddy", "Lawnmower-man", "artsy fartsy girl", "tiny orc"]
var bossMonster = ["Orgihim", "Orgihim-Master"]
var inputChecker = function (){
    if (choosewisely >= 4 || choosewisely === ""){
        choosewisely = prompt("Wrong input please select either 1 or 2")
        choosewisely = parseInt(choosewisely);
        console.log(roomChoiceHistory, choosewisely);
    }else if (attackChoice >=3 || attackChoice === ""){
        attackChoice = prompt("Wrong input please select either 1 or 2");
        attackChoice = parseInt(attackChoice)
    }
}
var roomRando = function () {
    console.log("In roomRando")
    var tinkywinky = random(2);
    if (tinkywinky === 1){
        warRoom();
    }
    else{
        peaceRoom();
    }
}
var random = function(k){ //specify the max number you want to output
    console.log("in random function");
    return randomNumber = Math.floor(Math.random() * k);
}
var attack = function () {//main attacking and fighting function
    console.log("in attack function");
    var curryMonster = "", dmg = 0,mdmg = 0
    if (bossMode === true){
        curryMonster = bossMonster[random(bossMonster.length)];
        mWeapon = 170;
        mHealth = 700;
    }else{
        curryMonster = monsterDB[random(monsterDB.length)];
    }
    alert("You ready your sword as you encounter " + curryMonster);
    while(mHealth != 0 || health != 0){ //Main battle loop to check who run out of health first
        attackChoice = prompt("Choose 1 to attack and 2 to run");
        attackChoice = parseInt(attackChoice);
        dmg = random(weapon);
        mdmg = random(mWeapon);
        if (attackChoice === 1){
            alert(uName+" draws and attack "+curryMonster+" dealing "+dmg+ " while it counters and deal " +mdmg+" to you");
            health-=mdmg;
            mHealth-=dmg;
            alert("Your health " +health+ ", "+ curryMonster+ " has got " +mHealth +" health")
            if(mHealth < 1){
                weapon+=50;
                alert(curryMonster + " is dead and Your weapon has level up! Nice work!");
                break;
            }else if (health < 1){
                alert("Sadly this looks like end of the road for "+uName+". Thank you for your valiant effort ");
                break;
            }
        }else if (attackChoice === 2){
            alert("Choosing the right option is important!");
            break;
        }else{
            break;
        };
    };
};
var peaceRoom = function () {
    console.log("in peaceroom function");
    if (health <= 400){
        health +=200;
        choosewisely = prompt ("You enter a warm peaceful room where an fairy partially heal your injury. Health: "+health + "Feeling much better you bid farewell to the fairies as you select you room 1 or 2: ");
        choosewisely = parseInt(choosewisely);
        inputChecker();
        roomChoiceHistory += choosewisely;
        console.log(roomChoiceHistory, choosewisely);
    }else if (health > 400){
        choosewisely = prompt ("You enter a warm peaceful room where an fairy cast a protection spell on you to aid you through your journey.\n Enter your choice of room 1 or 2");
        choosewisely = parseInt(choosewisely);
        inputChecker();
        roomChoiceHistory += choosewisely;
        console.log(roomChoiceHistory, choosewisely);
    };
};
var warRoom = function () {
    console.log("in warRoom function")
    attack();
    choosewisely = prompt ("Enter your choice of room 1 or 2. ");
    choosewisely = parseInt(choosewisely);
    inputChecker();
    roomChoiceHistory += choosewisely;
    console.log(roomChoiceHistory, choosewisely);
};
var roomChoice = function(){ // main game leveling and story
    console.log("in roomChoice function")
    if (roomChoiceHistory >= 7 && roomChoiceHistory < 9){
        alert("Finally.. As " + uName +" enter a room of brilliance, an elf approaches you.. ");
        choosewisely =  prompt(uName + " come face to face with Orgihim and his muton soldiers. \n Enter 1 to attack Orgihim \n Enter 2 to flee never to come back \n Enter 3 to try to sneak pass the ugly monster");
        choosewisely = parseInt(choosewisely);
        inputChecker();
        console.log(roomChoiceHistory, choosewisely);
        if (choosewisely === 3){
            alert("Its useless trying to sneak past the ugly orcs he is as thick as Yo'mama\n Prepare to fight!")
        };
        bossMode = true;
        debugger;
        attack();
        alert("Congratulation for defeating Orgihim.\n You have safe the day yet again!");
    }else if (roomChoiceHistory >= 5 && roomChoiceHistory <= 6){
        alert (uName + " ready your sword and shield as you choose your next room");
        mHealth = 500;
        mWeapon = 120;
    }else if (roomChoiceHistory < 5 && roomChoiceHistory >= 1){
        alert("You see from a distance a group of nasty orcs is laying siege to the castle while the kings army is no where to be found");
        mHealth = 500;
        mWeapon = 120;
    }else if (roomChoiceHistory <= 0){
        mWeapon = 100;
        mHealth = 400;
        alert("One day while "+uName+" was having his breakfast beer, he heard the sound of warhorns bellowing to the beat of drums.He heads our to check what is the big deal");
        alert("Darn it the castle is under siege, "+uName+" rush out to save our beloved kingdom");
    }
};
for (var i =0 ; i < 8; i++){ // specify how many rounds you want to play

    roomChoice();
    if(roomChoiceHistory >= 7){
        break;
    };
    roomRando();

};
