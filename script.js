console.log("hello script js");
document.getElementById("input").value = "";
document.getElementById("input").placeholder="Please enter your Name   ";
var select=[];
var title="undefined";
var trainingPath = 0;
var ign = "undefined";
var level = 1;
var exp = 0;
var monster = "undefined";
var monsterExp = 0;
var fight;
var result;
var hp = 100;
var monsterHp = "undefined";
var afterPVE;
var tempResult;
var stats;

console.log("Please enter your ign: ")
/*console.log(
    "Welcome our new hero\n"+
    "--------------------\n"+
    "Please choose 1 of the path\n"+
    "please choose wisely.\n"+
    "=====================\n"+
    "ign - to key in your ign\n"+
    "1. Warrior\n"+
    "2. Bowman\n"+
    "3. Thief\n"+
    "4. Magician\n"+
    "=====================\n");*/

 //After input
var inputHappened = function(currentInput){
    document.getElementById("input").placeholder="";
    console.log(currentInput);
    select.push(parseInt(currentInput));
    clear();

    if(currentInput == "hi") {
        reset();
    } else
    if(select.length == 1 && ign=="undefined") {
        ignPath(currentInput);
    } else
    //Path 1 - to select job
    if(select.length == 1 || stats == 1) {
        firstPath();
    } else
    //Path 2 - to learn about job
    if(select.length == 2) {
        secondPath();
    } else
    //Path 3 - advance on job
    if(select.length == 3) {
        thirdPath();
    } else
    //Path 4 - just incase
    if(select.length == 4) {
        fourthPath();
    } else {
        select.pop();
    }
    if(exp >= 100) {
        lvlup ();
    }
    return result;
};
//------------------------------------------------------//
//                   List of Functions                  //
//------------------------------------------------------//

var firstPath = function () {
    console.log("path1")
    switch (select[0]) {
    case 1:
        title = "Warrior";
        break;
    case 2:
        title = "Bowman";
        break;
    case 3:
        title = "Thief";
        break;
    case 4:
        title = "Magician";
        break;
    default:
        wrong();

    }
    if(title != "undefined") {
        result =
        "Name: "+ign+
        "\nLevel: "+level+
        "\nJob: "+title+
        "\nHP: "+hp+
        "\nExp: "+exp+"/100"+

        "\n\nWhich area do you want to go next\n"+
        "=====================\n"+
        "1. Pleasant Park\n"+
        "2. Sweaty Sands\n"+
        "3. Weeping Woods\n"+
        "4. Retail Row\n"+
        "5. Fairy Forest\n"+
        "6. Job Advancement Temple\n"+
        "=====================\n";
    }
    if(stats == 1) {
        stats = 0;
        select.pop();
    }
}
var secondPath = function () {
    console.log("path2")

    //once monster registered will fight
    PVE ();

    if (trainingPath != 0 && monster == "undefined") {
        switch (trainingPath) {
            case 1:
                monsterHp = 50;
                monsterExp = 50;
                monster = "Slime";
                select.pop();
                break;
            case 2:
                monsterHp = 70;
                monsterExp = 70;
                monster = "Mushroom";
                select.pop();
                break;
            case 3:
                monsterHp = 90;
                monsterExp = 80;
                monster = "Golem";
                select.pop();
                break;
            case 4:
                monsterHp = 110;
                monsterExp = 90;
                monster = "Robot";
                select.pop();
                break;
            case 5:
                monsterHp = 130;
                monsterExp = 100;
                monster = "Fairy";
                select.pop();
                break;
            default:
                wrong();
        }
        result =
            monster+"\'s HP: "+
            monsterHp+"\n"
            +ign+"\'s HP: "+hp+
            "\nSuddenly, a wild "+monster+" appeared\n"+
            "1. Fight\n"+
            "2. Run away :(";
    }

    if (trainingPath == 0 && select.length ==2) {
        switch (select[1]) {
            case 1:
                result = "Welcome to Pleasant Park\n Press any key to continue.";
                trainingPath = 1;
                select.pop();
                break;

            case 2:
                result = "Welcome to Sweaty Sands\n Press any key to continue.";
                trainingPath = 2;
                select.pop();1
                break;

            case 3:
                result = "Welcome to Weeping Woods\n Press any key to continue.";
                trainingPath = 3;
                select.pop();
                break;
            case 4:
                result = "Welcome to Retail Row\n Press any key to continue.";
                trainingPath = 4;
                select.pop();
                break;
            case 5:
                result = "Welcome to Fairy Forest\n Press any key to continue.";
                trainingPath = 5;
                select.pop();
                break;
            case 6:
                result = "Job advancement Temple\n"+
                    "Press any key to continue"
                break;
            default:
                result =
                 "\n\nWhich area do you want to go next\n"+
                "=====================\n"+
                "1. Pleasant Park\n"+
                "2. Sweaty Sands\n"+
                "3. Weeping Woods\n"+
                "4. Retail Row\n"+
                "5. Fairy Forest\n"+
                "6. Job Advancement Temple\n"+
                "=====================\n"
                wrong ();
        }
    }
}
var thirdPath = function () {
    console.log("path3")
    console.log("Congratulations on reaching this level");

    switch (select[0]) {
    case 1 :
        result = "Please pick a class to advance\n"+
            "1. Dragon Knight\n2. Hero";
        break;
    case 2 :
        result = "Please pick a class to advance\n"+
            "1. Bowmaster\n2. Marksman";
        break;
    case 3 :
        result ="Please pick a class to advance\n"+
            "1. Nightlord\n2. Shadower";
        break;
    case 4 :
        result = "Please pick a class to advance\n"+
            "1. Bishop\n2. Arch Mage";
        break;
    default :
        wrong();
    }
}

var fourthPath = function () {
    console.log("path4")
    switch (select[0]) {
    case 1 :
        //warrior
        switch (select[3]){
            case 1:
                title = "Dragon Knight";
                break;
            case 2:
                title = "Hero";
                break;
            default:
                wrong();
        }
        break;
    case 2 :
        //bowman
        switch (select[3]){
            case 1:
                title = "Bowmaster";
                break;
            case 2:
                title = "Marksman";
                break;
            default:
                wrong();
        }
        break;
    case 3 :
        //thief

        switch (select[3]){
            case 1:
                title = "Night Lord";
                console.log("")
                break;
            case 2:
                title = "Shadower";
                console.log("")
                break;
            default:
                wrong();
        }
        break;
    case 4 :
        //magician

        switch (select[3]){
            case 1:
                title = "Bishop";
                console.log("")
                break;
            case 2:
                title = "Arch Mage";
                console.log("")
                break;
            default:
                wrong();
        }
        break;
    }
    if(select.length == 4) {
    result = "Congratulations "+ign+",\nYou are a level "+level+", "+title;
    }
}
var ignPath = function (currentInput) {
    console.log("into the ign loop");
    ign = currentInput;

    select.pop();
    result =
    "Welcome "+ign+", our new hero\n"+
    "===============================\n"+
    "Please choose 1 of the path\n"+
    "please choose wisely.\n"+
    "===============================\n"+
    "1. Warrior\n"+
    "2. Bowman\n"+
    "3. Thief\n"+
    "4. Magician\n"+
    "===============================\n";
}

var PVE = function () {
    if (monster != "undefined") {
            fightscene ();
    }
    if(hp <= 0 && trainingPath != 0) {
        monsterHp = "undefined";
        trainingPath = 0;
        afterPVE =
            "You have fail to defeat "+monster
            "press any key to continue";
        monster = "undefined";
    }
    if(monsterHp <= 0 && trainingPath != 0) {
        exp = exp + monsterExp;
        monsterHp = "undefined";
        trainingPath = 0;
        afterPVE =
            "congratulations you've defeated a "+monster
            +"\nYour current exp :"+exp+"\npress any key to continue.";
        monster = "undefined";
        stats = 1;
    }
    result = afterPVE;
}
// -----------------//
// work in progress //
// -----------------//
var fightscene = function () {
    switch (select[select.length-1]){
        case 1:
            select.pop();
            hp = hp - randomNUM(3);
            monsterHp = monsterHp - randomNUM(10);
            afterPVE =
                ign+"\'s HP: "+hp+"\n"+
                monster+"\'s HP: "+monsterHp+
                "\n1. Fight\n"+
                "2. Run away :(";
            break;
        case 2:
            select.pop();
            monster = "undefined";
            monsterHp = "undefined";
            trainingPath = 0;
            afterPVE = "Run away sucessfully"+
            "press any key to continue";
            stats = 1;

            break;
        default:
            afterPVE =
                "Please choose again\n\n"+
                ign+"\'s HP: "+hp+"\n"+
                monster+"\'s HP: "+monsterHp+
                "\n1. Fight\n"+
                "2. Run away :(";
            select.pop();

    }
}

var reset = function () {
    select=[];
    title=[];
    trainingPath = 0;
    ign = "undefined";
    level = 1;
    exp = 0;
    monster = "undefined";
    hp = 100;
    result = ("Game is reset.\nPlease enter your name: ")
}
var rename = function () {
    if(select[select.length-1] == "ign") {
        ign = select[select.length-2];
        select.pop();
        console.log("Your name has changed to "+ign);
    }
}
var heal = function () {
        hp = 100;
        select.pop();
        result = "A sudden flow of magic has heal your hp back to full~ :D";
}

var lvlup = function () {
    level = level + 1;
    exp = exp - 100;
    console.log("congratulations you've gained a level!"+
        "\nYour current level is: "+level)
}
//if Num = 4, return 1-4
function randomNUM(num){
    return Math.floor(Math.random() * num) + 1;
}

var wrong = function () {
    select.pop();
    tempResult = "Please choose again\n\n"+ result;
    result = tempResult;
}

var clear = function () {
    document.getElementById("input").value = "";
}