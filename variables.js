console.log("Variables are very varied");


var gameStage = 0; //Help keep track at which state is the game in
var numRange; // For the range of random number generation
var ranNum; // stored random number
var startShow; // For the clear interval function
var startHide;// Same as above
var playerInput; //To keep track of some inputs


var player = {
    name: "",
    perk: 0,
    hp: 100,
    mScore: 0,
    aScore: 0,
    gScore: 0
};