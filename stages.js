var starter = {};
var rivalStarter = {};

var attackDamage = null;
var isBlock = null;
var defenseCounter = 0;

var attackMode = function() {
    attackDamage = Math.floor(Math.random() * 11); //YOUR pokemon attack damage
    isBlock = Math.random() >= 0.8; //enemy has a 20% chance of blocking
    if (isBlock) {
        number = 10;
    } else {
        rivalStarter.hp -= attackDamage;
        if (rivalStarter.hp <= 0) {
            stage = 4;
            number = 12;
        } else {
            number = 11;
        }
    }
};

var defenseMode = function() {
    defenseCounter += 1;
    if (defenseCounter === 3) {
        number = 13;}
        else {
        number = 14;}
};

var checkStage = function () {
    //Stage 1 - Leaving Bed
    if (answer === "zzz") {
        number = 2;
        stage = 1;
    } else if (answer === "leave") {
        number = 3;
        stage = 2;
    }

    //Stage 2 - Choosing your Pokemon
    //Charmander
    if (stage === 2 && answer === "c") {
        number = 4;
        stage = 2;
        starter = {
            name: "Charmander",
            hp: 10,
            }
        rivalStarter = {
            name: "Squirtle",
            hp: 10,
             }
    } else if (stage === 2 && answer === "b") {
        number = 5;
        stage = 2;
        starter = {
            name: "Bulbasaur",
            hp: 10,
            }
        rivalStarter = {
            name: "Charmander",
            hp: 10,
             }
    } else if (stage === 2 && answer === "s") {
        number = 6;
        stage = 2;
        starter = {
            name: "Squirtle",
            hp: 10,
            }
        rivalStarter = {
            name: "Bulbasaur",
            hp: 10,
             }
    } else if (stage === 2 && answer === "enter") {
        number = 7;
        stage = 3;
    }

    //Stage 3: Rival Challenge
    //Runaway
    if (stage === 3 && answer === "flee") {
        number = 8;
        stage = 3;
    }
    //Fight - uh does it matter which starter it is KIV
    else if (stage === 3 && answer === "fight") {
        number = 9;
        stage = 4;
    }

    //Stage 4: Rival Battle
    if (stage === 4 && answer === "attack") {
        attackMode(); }
        else if (stage === 4 && answer === "defend") {
        defenseMode();
        }
};//end of checkStage() function

//add more dialog options and function steps to actually allow the other guy to attack you back lol so different gameDialog variations based on whether they blocked etc.