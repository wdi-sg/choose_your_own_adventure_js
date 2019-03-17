//declaring variables/setting stage
var pokedex = [
{
    pokemon: "squirtle",
    desc: "water type tiny turtle POKEMON",
    type: "water",
    hp: 14,
    move1: ["scratch", "normal type attack", 3],
    move2: ["bubble", "fire type attack", 4],
    fainted: "",
    hpRemain: 14,
},
{
    pokemon: "bulbasaur",
    desc: "grass type seed POKEMON",
    type: "grass",
    hp: 12,
    move1: ["tackle", "normal type attack", 3],
    move2: ["vine whip", "grass type attack", 5],
    fainted: "",
    hpRemain: 12,
},
{
    pokemon: "charmander",
    desc: "fire type lizard POKEMON",
    type: "fire",
    hp: 10,
    move1: ["scratch", "normal type attack", 3],
    move2: ["ember", "fire type attack", 6],
    fainted: "",
    hpRemain: 10,
},
{
    pokemon: "growlithe",
    desc: "fire type puppy POKEMON",
    type: "fire",
    hp: 12,
    move1: ["bite", "normal type attack", 3],
    move2: ["flamethrower", "fire type attack", 5],
    fainted: "",
    hpRemain: 12,
},
{
    pokemon: "oddish",
    desc: " grass type weed POKEMON",
    type: "grass",
    hp: 8,
    move1:["vine whip", "grass type attack", 4],
    move2: ["razor leaf", "grass type attack", 6],
    fainted: "",
    hpRemain: 8,
},
{
    pokemon: "poliwag",
    desc: "water type tadpole POKEMON",
    type: "water",
    hp: 10,
    move1: ["bubble", "fire type attack", 3],
    move2: ["water gun", "fire type attack", 5],
    fainted: "",
    hpRemain: 10,
}
]

var charPkmn = [];
var wildPkmn = "";
var availablePkmn = [];
var activePkmn = "";

var gotANewPkmn = function (pkmn) {
    pkmn = charPkmn[charPkmn.length-1]
    alert("Congratulations! You got a new POKEMON!\n\npokemon: " + pkmn.pokemon + "\ndescription: " + pkmn.desc + "\ntype: " + pkmn.type + "\nhp: " + pkmn.hp + "\nfirst move: " + pkmn.move1[0] + ", " + pkmn.move1[1] + ", " + pkmn.move1[2] + " dmg\nsecond move: " + pkmn.move2[0] + ", " + pkmn.move2[1] + ", " + pkmn.move2[2] + " dmg")
    for (i=0 ; i<charPkmn.length; i++) {
        charPkmn[i].hpRemain = charPkmn[i].hp;
        charPkmn[i].fainted = "";
        wildPkmn = [];
        pkmn=[];
    }
};

//asking for user's name

var charName = prompt("Oak: Hello there! Welcome to the world of POKEMON! My name is OAK! People call me the POKEMON PROF! This world is inhabited by creatures called POKEMON! For some people, POKEMON are pets. Others use them for fights. Myself...I study POKEMON as a profession. First, what is your name?").toUpperCase();

//choosing your starting pokemon

var startPkmn = prompt("Oak: " + charName +"! It's dangerous to go alone! There are 3 POKEMON here, choose one! \n A) Squirtle- a water type tiny turtle POKEMON \n B) Bulbasaur- a grass type seed POKEMON \n C) Charmander- a fire type lizard POKEMON").toUpperCase();

if (startPkmn == "A") {
    pkmn = pokedex[0];
    charPkmn.push(pkmn);
    pkmn=[];
} else if (startPkmn == "B") {
    pkmn = pokedex[1];
    charPkmn.push(pkmn);
    pkmn=[];
} else if (startPkmn == "C") {
    pkmn = pokedex[2];
    charPkmn.push(pkmn);
    pkmn=[];
} else {
    alert("Do you not like POKEMON? please refresh the page and choose again!");
}

gotANewPkmn();

//fight sequence loop

var checkPkmn = function() {
    availablePkmn=[];
    for (var i = 0; i < charPkmn.length; i++) {
    if (charPkmn[i].fainted == "") {
            availablePkmn.push("\n" + (i+1) + ") " + charPkmn[i].pokemon);
        }
    }
}

var playerAttack = function (pkmn){
    var move = prompt("choose attack:\n1)" + pkmn.move1[0] + "\n2)" + pkmn.move2[0]);

    if (move == 1) {
        if ((pkmn.move1[1] === "fire type attack" && wildPkmn.type === "grass") || (pkmn.move1[1] === "water type attack" && wildPkmn.type === "fire") || (pkmn.move1[1] === "grass type attack" && wildPkmn.type === "water")) {
            wildPkmn.hpRemain -= (parseInt(pkmn.move1[2]) * 2);
            alert(pkmn.pokemon + " used " + pkmn.move1[0] + "\nIt did " + (parseInt(pkmn.move1[2])*2) + " damage! It's super effective!! (" + wildPkmn.pokemon + " has " + wildPkmn.hpRemain + " hp remaining.)");
        } else {
            wildPkmn.hpRemain -= parseInt(pkmn.move1[2]);
            alert(pkmn.pokemon + " used " + pkmn.move1[0] + "\nIt did " + pkmn.move1[2] + " damage! (" + wildPkmn.pokemon + " has " + wildPkmn.hpRemain + " hp remaining.)");
        }
    } else {
        if ((pkmn.move2[1] === "fire type attack" && wildPkmn.type === "grass") || (pkmn.move2[1] === "water type attack" && wildPkmn.type === "fire") || (pkmn.move2[1] === "grass type attack" && wildPkmn.type === "water")) {
            wildPkmn.hpRemain -= (parseInt(pkmn.move2[2]) * 2);
            alert(pkmn.pokemon + " used " + pkmn.move2[0] + "\nIt did " + (parseInt(pkmn.move2[2])*2) + " damage! It's super effective!! (" + wildPkmn.pokemon + " has " + wildPkmn.hpRemain + " hp remaining.)");
        } else {
            wildPkmn.hpRemain -= parseInt(pkmn.move2[2]);
            alert(pkmn.pokemon + " used " + pkmn.move2[0] + "\nIt did " + pkmn.move2[2] + " damage! It's super effective!! (" + wildPkmn.pokemon + " has " + wildPkmn.hpRemain + " hp remaining.)");
        }
    }
}

var wildAttack = function (pkmn){
    if ((wildPkmn.move1[2] === "fire type attack" && activePkmn.type === "grass") || (wildPkmn.move1[2] === "water type attack" && activePkmn.type === "fire") || (wildPkmn.move1[2] === "grass type attack" && activePkmn.type === "water")) {
        activePkmn.hpRemain -= (wildPkmn.move1[2] * 2);
        alert("Wild " + wildPkmn.pokemon + " used " + wildPkmn.move1[0] + "\nIt did " + wildPkmn.move1[2]*2 + " damage! It's super effective!! (" + pkmn.pokemon + " has " + pkmn.hpRemain + " hp remaining.)");
    } else {
        pkmn.hpRemain -= wildPkmn.move1[2];
        alert("Wild " + wildPkmn.pokemon + " used " + wildPkmn.move1[0] + "\nIt did " + wildPkmn.move1[2] + " damage! (" + pkmn.pokemon + " has " + pkmn.hpRemain + " hp remaining.)");
    }
}

var encounter = function (pkmn) {
    alert("a wild " + pkmn.pokemon + " appears!");
//does player have available pokemon?
    checkPkmn();
    if (availablePkmn == "") {
    alert ("You ran out of POKEMON, GAME OVER!"); //game over outcome
    }
    while (availablePkmn !== "") {
        var choosePkmn = prompt("Choose a pokemon to defend you!" + availablePkmn);
        var activePkmn = charPkmn[choosePkmn-1];
        while (activePkmn.hpRemain > 0 && wildPkmn.hpRemain > 0) {
            playerAttack(activePkmn);
            if (wildPkmn.hpRemain <= 0){
                alert("You captured " + wildPkmn.pokemon);
                charPkmn.push(wildPkmn);
                gotANewPkmn(wildPkmn);
                wildPkmn = [];
                adventure(); //win outcome
            } else {
                wildAttack (activePkmn);
                if (activePkmn.hpRemain <= 0) {
                    alert("your " + activePkmn.pokemon + " fainted!");
                    charPkmn[choosePkmn-1].fainted = "fainted" //end of loop, goes to top and checks again for available pokemon
                }
            }
        }
    }
}

//adventure loop

var adventure = function () {
    var path = prompt("A new adventure awaits in Pewter City! \n\nWill you go there via:\n 1) route with tall grass \n 2) route in the jungle \n 3) route by the beach \n 4) direct path");

    if (path == 1) {
        wildPkmn = pokedex[3];
        encounter(wildPkmn);
    } else if ( path == 2) {
        wildPkmn = pokedex[4];
        encounter(wildPkmn);
    } else if ( path == 3) {
        wildPkmn = pokedex[5];
        encounter(wildPkmn);
    } else {

    }
}

adventure ();