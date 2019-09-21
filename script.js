"use strict"
// display the welcome message at the start of the game
var welcomeMessage = " --------The Matrix--------\n" + "Enter Your Name & Hit Enter";
display(welcomeMessage);

// use playerName to store the player name throughout the game
var playerName = null;
var isStartOfGame = true;
var previousOutput = null;

// game object to keep track of the game status
var game = {
    prevOutput: null,// to store the current output which may be needed subsequently
    stage: 0,
};

    // player object to store player info
var player = {
    name: null
};

var stages = [
     {
        message: {
            intro: ["Wake up, ", "playerName", "...\n", "The Matrix has you...\n", "Follow the white rabbit.\n"],
            questions: ["What would you like to do?\n"],
            choices: ["*[F]ollow\n", "*[D]o nothing\n"],
            hints: ["<Hint: hit the letter in the [ ] to continue>\n"],
        },
        path: ["F","D"],
        response: null,
     },
     {
        message: {
            intro: ["Welcome, ", "playerName", ". As you no doubt have guessed, I am Morpheus.\n"],
            questions: ["What would you like to do?\n"],
            choices: ["[T]alk to Morpheus\n", "[W]alk away\n"],
            hints: [],
        },
        path: [],
        response: null,
     },

]

var updatePlayerName = function(messages, playerName) {
    // console.log("---updateMsg---");
    // console.log("messages: ", messages);
    // console.log("match: ", playerName);
    for (var i = 0; i < messages.length; i++) {
        if (messages[i] === "playerName") {
            messages[i] = playerName;
        }
    }
}

var getMsg = function(messages, playerName) {
    var output = "";

    updatePlayerName(messages, playerName);

    for (var i = 0 ; i < messages.length ; i++) {
        output += messages[i];
    }
    return output;
}

var getAllMsg = function(currStage, playerName) {
    var messages = Object.values(currStage); //creates an array of values [ ["Wake up...", ], ["What" ] ]
    var output = "";
    for (var i=0; i < messages.length; i++) {
        output += getMsg(messages[i], playerName);
    }
    return output;
}


var inputHappened = function(input) {
    console.log("input:", input);
    // console.log("typef(input): ", typeof(input));
    console.log("player object ", player);
    console.log("stages object ", stages);
    console.log("game object ", game);
    var output = "";

    if (game.stage !== 0 ) {
        var prevStage = stages[game.stage - 1];
        console.log("prevStage: ", prevStage);
    }
    var currStage = stages[game.stage];
    console.log("currStage: ", currStage);

    if (game.stage === 0) {
        player.name = input;
        output = getAllMsg(currStage.message, player.name);
        game.stage++;
    } else {
        currStage.response = input;
        if (currStage.response === prevStage.path[0]) {
            output = getAllMsg(currStage.message, player.name);
            game.stage++;
        } else {
            output = game.prevOutput;
        }
    }

    game.prevOutput = output;
    return output;
};