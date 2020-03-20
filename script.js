console.log("hello script js");
var inputState="initial";
var playerName;
var player={};
//ASCII art
var knightAscii=



//player type warrior
var warriorOriginal={
    name:"",
    class:"warrior",
    level:0,
    hp:300,
    maxhp:300,
    nextLevel:100,
    maxNextLevel:100,
    attacks:["bash","bloodLust"],
    weapon:"Wooden sword",
    gil:0
};

var warriorPlayer={
    name:"",
    class:"warrior",
    level:0,
    hp:300,
    maxhp:300,
    nextLevel:100,
    maxNextLevel:100,
    attacks:["bash","bloodLust"],
    weapon:"Wooden sword",
    gil:0
};
//player type mage
var mageOriginal={
        name:"",
    class:"mage",
    level:0,
    hp:100,
    maxhp:100,
    nextLevel:100,
    maxNextLevel:100,
    attacks:["ember","fireBlast"],
    weapon:"Wooden staff",
    gil:0
};

var magePlayer={
        name:"",
    class:"mage",
    level:0,
    hp:100,
    maxhp:100,
    nextLevel:100,
    maxNextLevel:100,
    attacks:["ember","fireBlast"],
    weapon:"Wooden staff",
    gil:0
};

//maps S for safe, G for goblin, D for deathknight, EB for easy boss, Se for Sephiroth,H, for health
var chosenMapState;
var mapMessage;
var xOrigin=0;
var yOrigin=0;
var mapPlayed={}
var easyMapOriginal={
    level:"easy",
    maxHorizontal:4,
    maxVertical:4,
    position:[[["S","S","S","S"],["S","S","G","S"],["S","G","G","S"],["EB","S","S","S"]],
              [["G","S","G","S"],["G","S","G","S"],["S","G","G","S"],["G","S","S","S"]],
              [["S","S","S","S"],["S","S","G","S"],["S","G","G","S"],["G","S","S","S"]],
              [["S","S","S","H"],["S","S","G","S"],["S","G","G","S"],["G","G","S","S"]]
              ]

};
var mediumMapOriginal={
    level:"medium",
    maxHorizontal:4,
    maxVertical:4,
    position:[[["S","S","S","S"],["S","S","D","S"],["D","G","G","S"],["EB","S","S","S"]],
              [["G","S","G","S"],["G","S","G","S"],["S","G","G","S"],["G","S","S","S"]],
              [["S","S","S","S"],["S","S","G","S"],["S","G","G","S"],["G","S","S","S"]],
              [["S","D","D","H"],["S","S","G","S"],["S","G","G","S"],["G","G","S","S"]]
              ]

};
var hardMapOriginal={
    level:"hard",
    maxHorizontal:4,
    maxVertical:4,
    position:[[["S","S","S","S"],["S","S","G","D"],["D","D","G","S"],["D","Se","S","S"]],
              [["G","S","G","S"],["G","S","D","S"],["S","G","G","S"],["G","S","S","S"]],
              [["S","S","S","S"],["S","S","D","S"],["S","G","G","S"],["G","S","S","S"]],
              [["S","S","S","H"],["S","D","G","S"],["S","G","G","S"],["G","G","S","S"]]
              ]

};
//map movement
var movement;
var mapMessage="";
var didIbump= function(map){
//    console.log(yOrigin);
    if(yOrigin<map.maxVertical&&xOrigin<map.maxHorizontal&&yOrigin>=0&&xOrigin>=0)
    {
        if(yOrigin<map.maxVertical&&xOrigin<map.maxHorizontal&&yOrigin>=0&&xOrigin>=0)
        {
            return "\u2191 up \u2193down \u2190 left \u2192right";
        }else
        if(yOrigin<map.maxVertical&&xOrigin<map.maxHorizontal&&yOrigin>=0&&xOrigin<0){
            return "\u2191 up \u2193down \u2192right";
        }else
        if(yOrigin<map.maxVertical&&xOrigin>=map.maxHorizontal&&yOrigin>=0&&xOrigin>=0)
        {
            return "\u2191 up \u2193down \u2190 left ";
        }else
        if(yOrigin<map.maxVertical&&xOrigin<map.maxHorizontal&&yOrigin<0&&xOrigin<0){
            return "\u2191 up \u2192right";
        }else
        if(yOrigin<map.maxVertical&&xOrigin>=map.maxHorizontal&&yOrigin<0&&xOrigin>=0)
        {
            return "\u2191 up \u2190 left ";
        }
        else
        if(yOrigin>=map.maxVertical&&xOrigin<map.maxHorizontal&&yOrigin>=0&&xOrigin<0){
            return " \u2193down \u2192right";
        }else
        if(yOrigin>=map.maxVertical&&xOrigin>=map.maxHorizontal&&yOrigin>=0&&xOrigin>=0)
        {
            return "\u2193down \u2190 left ";
        }






        }else
    {
        console.log("bumped");
        return "bump";
    }

}


//encounter maps S for safe, G for goblin, D for deathknight, EB for easy boss, Se for Sephiroth,H, for health
var encounterState="";
var encounter=function(map)
{
    var indexEncounter=Math.floor(Math.random()*4);
    console.log(map.position[xOrigin][yOrigin][indexEncounter]);
    return map.position[xOrigin][yOrigin][indexEncounter];
}

//monster and boss fight
var previousMapstate="";
/*goblinAttack
deathknightAttack
bossAttack
sephirothAttack*/
var beforeAttackStore="";
var monster={};
var previousMonsterState="";
var goblinOriginal={
    name:"goblin",
    type:"monster",
    hp:120,
    attack:5,
    gil:1,
    exp:5,
    normalDrop:["Wooden sword", "Trash", "Wooden Staff"],
    rareDrop:["Trash", "Trash", "Wooden sword", "Wooden Staff", "Iron sword","Star Wand"]
};
var goblinAttacked={
    name:"goblin",
    type:"monster",
    hp:120,
    attack:5,
    gil:1,
    exp:5,
    normalDrop:["Wooden sword", "Trash", "Wooden Staff"],
    rareDrop:["Trash", "Trash", "Wooden sword", "Wooden Staff", "Iron sword","Star Wand"]
};

var bossOriginal={
    name:"goblin king",
    type:"monster",
    hp:700,
    attack:5,
    gil:70,
    exp:10,
    normalDrop:["Wooden sword", "Trash", "Wooden Staff"],
    rareDrop:["Star Wand", "Iron sword", "Wooden sword", "Wooden Staff", "Iron sword","Star Wand"]
};
var bossAttacked={
    name:"goblin king",
    type:"monster",
    hp:700,
    attack:5,
    gil:70,
    exp:10,
    normalDrop:["Wooden sword", "Trash", "Wooden Staff"],
    rareDrop:["Star Wand", "Iron sword", "Wooden sword", "Wooden Staff", "Iron sword","Star Wand"]
};

var deathknightOriginal={
    name:"death knight",
    type:"dark knight",
    hp:600,
    attack:30,
    gil:120,
    exp:70,
    normalDrop:["Iron sword", "Trash", "Star Wand"],
    rareDrop:["Iron sword", "Nova sword", "Star Wand", "Star Wand", "Iron sword","Ultima Wand"]
};
var deathknightAttacked={
    name:"death knight",
    type:"dark knight",
    hp:600,
    attack:30,
    gil:120,
    exp:70,
    normalDrop:["Iron sword", "Trash", "Star Wand"],
    rareDrop:["Iron sword", "Nova sword", "Star Wand", "Star Wand", "Iron sword","Ultima Wand"]
};

var sephirothOriginal={
    name:"Sephiroth",
    type:"human",
    hp:9000,
    attack:500,
    gil:7000,
    exp:1000,
    normalDrop:["Iron sword", "Trash", "Star Staff"],
    rareDrop:["Utlima Wand", "Nova sword", "Nova sword", "Ultima Wand", "Iron sword","Star Wand"]
};
var sephirothAttacked={
    name:"Sephiroth",
    type:"human",
    hp:9000,
    attack:500,
    gil:7000,
    exp:1000,
    normalDrop:["Iron sword", "Trash", "Star Staff"],
    rareDrop:["Utlima Wand", "Nova sword", "Nova sword", "Ultima Wand", "Iron sword","Star Wand"]
};

//battle
var rawAttack;
var dropItem;
var attackDamageEnemyRaw=function(player, attack)
{
    var levelMultiplier=1;
    var weaponAttackAdder=1;
    var attackTypeDamage;
    levelMultiplier=(1+0.1*player.level);
    if(player.weapon.includes("Wooden sword", "Wooden Staff"))
    {
        weaponAttackAdder=20;
    } else
    if(player.weapon.includes("Iron sword", "Star Wand"))
    {
        weaponAttackAdder=50;
    } else
    if(player.weapon.includes("Nova sword", "Ultima Wand"))
    {
        weaponAttackAdder=70;
    } else
    {
        weaponAttackAdder=0;
    }
    switch (attack){
        case "bash":
        attackTypeDamage=30;
        break;
        case "bloodLust":
        attackTypeDamage=50*Math.floor(Math.random());
        break;
        case "ember":
        attackTypeDamage=50;
        break;
        case "fireBlast":
        attackTypeDamage=70*Math.floor(Math.random());
        break;
        default:
        break;
    }
    return attackTypeDamage*levelMultiplier+weaponAttackAdder;

}
var resetState=function(){
    inputState="initial";
    playerName="";
    player={};
    chosenMapState="";
    mapPlayed={};
    xOrigin=0;
    yOrigin=0;
    encounterState="";
    mapMessage="";
    previousMapstate="";
    beforeAttackStore="";
    goblinAttacked=goblinOriginal;
    deathknightAttacked=deathknightOriginal;
    bossAttacked=bossOriginal;
    sephirothAttacked=sephirothOriginal;
    previousMonsterState="";
    dropItem="";

}

var monsterResetState=function(){
    goblinAttacked=goblinOriginal;
    deathknightAttacked=deathknightOriginal;
    bossAttacked=bossOriginal;
    sephirothAttacked=sephirothOriginal;


}

var inputHappened = function(currentInput){
      var output;
    if(inputState==="initial")
    {
        playerName=currentInput;
        inputState="class"
        output=" Thank you. Please choose your class. 1 for Warrior, 2 for Mage."
    }else

    if(inputState==="class")
    {

        if(currentInput==="1"||currentInput==="2")
        {
            if(currentInput==="1"){
                player=warriorPlayer;
                player.name=playerName;
                //console.log(player);
            } else{
                player=magePlayer;
                player.name=playerName;
                console.log(player);
            }
            output=`Welcome to the game. Please choose from 3 Map(Easy(e), Medium(m), Hard(h)`;
            inputState="map";
        }
        else{

            output="You have typed an invalid option. Please choose your class. 1 for Warrior and 2 for Mage.";
        }
    }else


if(inputState==="map"){
//To add condition for deathand victory later
                            chosenMapState=currentInput.toLowerCase();
                                if(chosenMapState==="e"||currentInput==="m"||currentInput==="h")
                                {
                                    inputState=chosenMapState+"map";
                                    if(chosenMapState==="e")
                                    {
                                        mapPlayed=easyMapOriginal;
                                        output=`Welcome to the game ${playerName} the ${player.class}. You may use w for \u2191, and d for  \u2192  currently. You win when you defeat the boss.`;
                                    }else
                                    if(chosenMapState==="m")
                                    {
                                        mapPlayed=mediumMapOriginal;
                                        output=`Welcome to the game ${playerName} the ${player.class}. You may use w for \u2191, and d for  \u2192  currently. You win when you defeat the boss.`;
                                    }else
                                    {
                                        mapPlayed=hardMapOriginal;
                                        output=`Welcome to the game ${playerName} the ${player.class}. You may use w for \u2191, and d for  \u2192 currently.You win when you defeat Sephiroth.`;
                                    }
                                    console.log(inputState);


                                }
                                else{

                                    output="You have typed an invalid option. Please choose from 3 Map(Easy(e), Medium(m), Hard(h).";
                                }

                        }
else
if(inputState==="emap"){
    //w for up, a for left s for down d for right
//This will be for the position of the player

// S for safe, G for goblin, D for deathknight, EB for easy boss, Se for Sephiroth,H, for health
    if(currentInput==="w"||currentInput==="a"||currentInput==="s"||currentInput==="d"){
                switch(currentInput){
                    case "w":
                    yOrigin++;
                    mapMessage =didIbump(mapPlayed);
                    console.log(mapMessage);
                    console.log(typeof mapMessage);
                    if(mapMessage==="bump"){
                        yOrigin--;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }


                    break;



                    case "a":
                    xOrigin--;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        xOrigin++;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }
                    break;
                    case "s":

                    yOrigin--;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        yOrigin++;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }

                    break;
                    case "d":
                    xOrigin++;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        xOrigin--;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }
                    break;

                }


            }
    else{
        output="You have keyed the wrong input. Please use w for \u2191, s for \u2193, a for  \u2190 and d for  \u2192."
    }
}
else
if(inputState==="mmap"){
    //w for up, a for left s for down d for right
//This will be for the position of the player

// S for safe, G for goblin, D for deathknight, EB for easy boss, Se for Sephiroth,H, for health
    if(currentInput==="w"||currentInput==="a"||currentInput==="s"||currentInput==="d"){
                switch(currentInput){
                    case "w":
                    yOrigin++;
                    mapMessage =didIbump(mapPlayed);
                    console.log(mapMessage);
                    console.log(typeof mapMessage);
                    if(mapMessage==="bump"){
                        yOrigin--;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }


                    break;



                    case "a":
                    xOrigin--;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        xOrigin++;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }
                    break;
                    case "s":

                    yOrigin--;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        yOrigin++;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }

                    break;
                    case "d":
                    xOrigin++;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        xOrigin--;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }
                    break;

                }


            }
    else{
        output="You have keyed the wrong input. Please use w for \u2191, s for \u2193, a for  \u2190 and d for  \u2192."
    }
}
else
if(inputState==="hmap"){
    //w for up, a for left s for down d for right
//This will be for the position of the player

// S for safe, G for goblin, D for deathknight, EB for easy boss, Se for Sephiroth,H, for health
    if(currentInput==="w"||currentInput==="a"||currentInput==="s"||currentInput==="d"){
                switch(currentInput){
                    case "w":
                    yOrigin++;
                    mapMessage =didIbump(mapPlayed);
                    console.log(mapMessage);
                    console.log(typeof mapMessage);
                    if(mapMessage==="bump"){
                        yOrigin--;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }


                    break;



                    case "a":
                    xOrigin--;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        xOrigin++;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }
                    break;
                    case "s":

                    yOrigin--;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        yOrigin++;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }

                    break;
                    case "d":
                    xOrigin++;
                    mapMessage =didIbump(mapPlayed);

                    if(mapMessage==="bump"){
                        xOrigin--;
                        output="You have hit an invisible wall. Try a different direction";
                    }
                    else{
                        encounterState=encounter(mapPlayed);
                        switch(encounterState){
                            case "S":
                            console.log("entry to switch");
                            output=`You can move ${mapMessage}`;
                            break;
                            case "G":
                            output="You encountered a goblin! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="goblinAttack";
                            break;
                            case "D":
                            output="You encountered a deathknight! Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="deathknightAttack";
                            break;
                            case "H":
                            player.hp=player.maxhp;
                            output= `You found a health potion! You can move ${mapMessage}`;
                            break;
                            case "EB":
                            output="Boss fight!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="bossAttack";
                            break;
                            case "Se":
                            output="Sephiroth! Good luck!Press 1 to attack. 2 to run.";
                            previousMapstate=inputState;
                            inputState="sephirothAttack";
                            break;

                        }
                    }
                    break;

                }


            }
    else{
        output="You have keyed the wrong input. Please use w for \u2191, s for \u2193, a for  \u2190 and d for  \u2192."
    }
}else

/*goblinAttack
deathknightAttack
bossAttack
sephirothAttack*/
if(inputState==="goblinAttack"){
    console.log("testing switch time");
    if(currentInput==="1"){
        beforeAttackStore=inputState;
        monster=goblinAttacked;
        console.log(monster.hp);
        output=`The available attacks are ${player.attacks}. Type your attack.`;
        inputState="smackdown";
    }
    else if(currentInput==="2")
    {
        console.log(mapMessage);
    output=`running home to mummy. You can move ${mapMessage}`;
    inputState=previousMapstate;
    goblinAttacked=goblinOriginal;
    }
    else{
        output= "You have pressed wrongly. Press 1 to attack. 2 to run."
    }
}
else



if(inputState==="deathknightAttack"){
    console.log("testing switch time");
    if(currentInput==="1"){
        beforeAttackStore=inputState;
        monster=deathknightAttacked;
        console.log(monster.hp);
        output=`The available attacks are ${player.attacks}. Type your attack.`;
        inputState="smackdown";
    }
    else if(currentInput==="2")
    {
        console.log(mapMessage);
    output=`running home to mummy. You can move ${mapMessage}`;
    inputState=previousMapstate;
    deathknightAttacked=deathknightOriginal;
    }
    else{
        output= "You have pressed wrongly. Press 1 to attack. 2 to run."
    }
}else
if(inputState==="bossAttack"){
    console.log("testing switch time");
    if(currentInput==="1"){
        beforeAttackStore=inputState;
        monster=bossAttacked;
        console.log(monster.hp);
        output=`The available attacks are ${player.attacks}. Type your attack.`;
        inputState="smackdown";
    }
    else if(currentInput==="2")
    {
        console.log(mapMessage);
    output=`running home to mummy. You can move ${mapMessage}`;
    inputState=previousMapstate;
    bossAttacked=bossOriginal;
    }
    else{
        output= "You have pressed wrongly. Press 1 to attack. 2 to run."
    }
}else
if(inputState==="sephirothAttack"){
    console.log("testing switch time");
    if(currentInput==="1"){
        beforeAttackStore=inputState;
        monster=sephirothAttacked;
        console.log(monster.hp);
        output=`The available attacks are ${player.attacks}. Type your attack.`;
        inputState="smackdown";
    }
    else if(currentInput==="2")
    {
        console.log(mapMessage);
    output=`running home to mummy. You can move ${mapMessage}`;
    inputState=previousMapstate;
    sephirothAttacked=deathknightOriginalt;
    }
    else{
        output= "You have pressed wrongly. Press 1 to attack. 2 to run."
    }
}
else //error and cause the error as omit else
if(inputState==="smackdown"){
    rawAttack=attackDamageEnemyRaw(player,currentInput);
    console.log(monster.hp);
    if((monster.hp-rawAttack)<=0)
    {
        monster.hp=0;
    }
    else
    {
        monster.hp=monster.hp-rawAttack
    }
    player.hp=player.hp-monster.attack;
    if(monster.hp>0 && player.hp>0)
    {

        inputState="decision";
        output=`You have done ${rawAttack} damage on ${monster.name}. He has ${monster.hp} hp and you have ${player.hp} hp. What would you like to do? 1 to continue attacking or 2 to flee.`
    }
    else
    if(player.hp<=0)
    {
        inputState="GameOver";
        output=`You have lost.\n You have ${player.gil} gil aka score.\n Would you like to start from the beginning?(y/n)`;
    }
    else(monster.hp<=0)
    {
        player.gil=player.gil+monster.gil;

        if(monster.name==="goblin king"||monster.name==="Sephiroth")
        {
            inputState="win";
            output=`You have won.\n You have ${player.gil} gil aka score.\n Would you like to start from the beginning?(y/n)`;
        }
        else{
            player.nextLevel=player.nextLevel-monster.exp;
            if(player.nextLevel<0)
            {
                player.level++;
                player.hp=player.hp*1.1;
                player.maxhp=player.maxhp*1.1;
                player.maxNextLevel=player.maxNextLevel*1.1;
                player.nextLevel=player.maxNextLevel;
            }
            var drop=Math.floor(Math.random()*3);
            var dropIndex;
            if(drop===1)
            {
                dropIndex=Math.floor(Math.random()*3);
                dropItem=monster.normalDrop[dropIndex];
                inputState="Drop Item Confirm";
                output=`Would you like ${dropItem}? (y/n)`;
            }
            else if(drop===2)
            {
                dropIndex=Math.floor(Math.random()*6);
                dropItem=monster.rareDrop[dropIndex];
                inputState="Drop Item Confirm";
                output=`Would you like ${dropItem}? (y/n)`;
            }


        }
        monsterResetState();
    }
}
else
if(inputState==="decision"){
    if(currentInput==="1"){
        inputState="smackdown";
        output=`The available attacks are ${player.attacks}. Type your attack.`;
    }
    else if (currentInput==="2"){
        inputState=previousMapstate;
        output=`running home to mummy. You can move ${mapMessage}.`;
        monsterResetState();
    }
    else
    {
        output=`You have key in wrongly. What would you like to do? 1 to continue attacking or 2 to flee.`
    }
}
else
if(inputState==="GameOver")
{
    currentInput=currentInput.toLowerCase(); //error as i moved into the if statement
    if(currentInput="y"){
        resetState();
        output="Welcome adventurer. Please tell me your name.";
    }
    else{
        output=`You have lost.\n You have ${player.gil} gil aka score.\n Would you like to start from the beginning?(y/n)`;
    }

} else
if(inputState==="win")
{
    currentInput=currentInput.toLowerCase(); //error as i moved into the if statement
    if(currentInput="y"){
        resetState();
        output="Welcome adventurer. Please tell me your name.";
    }
    else{
        output=`You have won.\n You have ${player.gil} gil aka score.\n Would you like to start from the beginning?(y/n)`;
    }

}
else
if(inputState==="Drop Item Confirm"){
currentInput=currentInput.toLowerCase();
if(currentInput==="y"){
player.weapon=dropItem;
        inputState=previousMapstate;
        output=`You can move ${mapMessage}.`;
}
else if(currentInput==="n")
        inputState=previousMapstate;
        output=`You can move ${mapMessage}.`;
}
else
{
    output=`You have keyed in wrongly. Please confirm whether you want ${dropItem}? (y/n)`;
}


  return output;
};


/*
var goblinOriginal={
    type:"monster",
    hp:120,
    attack:5,
    gil:1,
    exp:5,
    normalDrop:["Wooden sword", "Trash", "Wooden Staff"],
    rareDrop:["Trash", "Trash", "Wooden sword", "Wooden Staff", "Iron sword","Star Wand"]
};*/








var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};