console.log("Variables are very varied");


var gameStage = 0; //Help keep track at which state is the game in
/*var gameDay = 1; //Might be useful.*/ //Sacrifices must be made.
var numRange; // For the range of random number generation
var ranNum; // stored random number
var startShow; // For the clear interval function
var startHide;// Same as above
var playerInput; //To keep track of some inputs


var player = {
    name: "",
    perk: 0,
    hpMax: 100,
    hp: 100,
    focus: 4,
    focusMax: 4,
    focusMulti: 1.00,
    bonus: 1,
    mScore: 0, //Madness score
    rScore: 0, //Results score --- Is present in all endings and is a overall assessment of how well one does.
    gScore: 0 //Good Ending Score -- This is only achievable with certain conditions.
};

var classmate1 = {
    name: "John Code",
    rel: 0
};

var gameChoices = {
    d1P1: 0, //choice of where you seat.
    d1P1C1: 0, //Choice of action at seat.
    cm1: false //Did you meet CM1?
};

var enemies =
[
    {
        name: "While Loops",
        hpMax: 50,
        hp: 50,
        difficulty: 1,
        desc: "Pesky little statement. Now where did I put my i++????"
    },
    {
        name: "Random Comma Out Of Place",
        hpMax: 35,
        hp: 35,
        difficulty: 1,
        desc: "Not the most terrifying of foes but certain a stealthy little bugger."
    },
    {
        name: "Spelling Terror",
        hpMax: 35,
        hp: 35,
        difficulty: 0.9,
        desc: "May not seem like munch but udderestimate this foe at your pearil."
    },
    {
        name: "A case most Sensitive",
        hpMax: 35,
        hp: 35,
        difficulty: 0.9,
        desc: "A similar species to those of the spelling terrors but a more insidious case."
    },
    {
        name: "STACK OVERFLOW",
        hpMax: 75,
        hp: 75,
        difficulty: 1.5,
        desc: "Seems like you have a little too much on your stack right now. Good luck figuring that out."
    },
    {
        name: "CODETHULU",
        hpMax: 65535,
        hp: 65535,
        difficulty: 20,
        desc: "A great old one whom complications and depth is immeasurable. Might not be the best thing to tackle starting out.\nBeware the madness and despair that follows.\n^(;,;)^"
    }
];