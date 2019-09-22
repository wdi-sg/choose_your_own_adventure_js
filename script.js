"use strict"
// display the welcome message at the start of the game
var welcomeMessage = " --------The Matrix--------\n" + "Enter Your Name & Hit Enter";
display(welcomeMessage);

// game object to keep track of the game status
var game = {
    prevOutput: null, // to store the current output which may be needed subsequently
    stage: -1, // -1 refers to the welcomeMessage
    started: false
};
console.log("Welcome Screen");
console.log("initial game.stage: ", game.stage);
console.log("----------------------------------");

// player object to store player info
var player = {
    name: null
};

var stages = [{
        messages: {
            intro: ["Wake up, ", "playerName", "...\n", "The Matrix has you...\n", "Follow the white rabbit.\n"],
            questions: ["What would you like to do?\n"],
            choices: ["*[F]ollow\n", "*[D]o nothing\n"],
            hints: ["<Hint: hit the letter in the [ ] to continue>\n"],
        },
        paths: { F: 1, D: 3 },
        response: null,
    },
    {
        messages: {
            intro: ["Welcome, ", "playerName", ". As you no doubt have guessed, I am Morpheus.\n"],
            questions: ["What would you like to do?\n"],
            choices: ["[T]alk to Morpheus\n", "[W]alk away\n"],
            hints: [],
        },
        paths: [],
        response: null,
    },
    {
        messages: {
            intro: ["Stage 2 intro\n"],
            questions: ["Stage 2 questions\n"],
            choices: ["Stage 2 choices\n"],
            hints: [],
        },
        paths: [],
        response: null,
    },
    {
        messages: {
            intro: ["Stage 3 intro\n"],
            questions: ["Stage 3 questions\n"],
            choices: ["Stage 3 choices\n"],
            hints: [],
        },
        paths: [],
        response: null,
    },
]

var updatePlayerName = function(messages, playerName) {
    for (var i = 0; i < messages.length; i++) {
        if (messages[i] === "playerName") {
            messages[i] = playerName;
        }
    }
    return messages;
};

var getMsg = function(messages, playerName) {
    var output = "";

    messages = updatePlayerName(messages, playerName);

    for (var i = 0; i < messages.length; i++) {
        output += messages[i];
    }
    return output;
};

var getAllMsg = function(messagesObj, playerName) {
    var messages = Object.values(messagesObj); //creates an array of values [ ["Wake up...", ], ["What" ] ]

    var output = "";

    for (var i = 0; i < messages.length; i++) {
        output += getMsg(messages[i], playerName);
    }

    return output;
};

var getNextStage = function(response, paths) {
    return paths[response];
};

var inputHappened = function(input) {
    console.log("game.stage shown on screen a second ago: ", game.stage);
    console.log("input:", input);
    console.log("player object ", player);
    console.log("stages object ", stages);
    console.log("game object ", game);
    var output = "";
    console.log("game.started: ", game.started);

    var currStage = {};
    var nextStage = {};
    var next = null;


    if (!game.started) {
        player.name = input;
        game.started = true;
        console.log("changed game.started to: ", game.started);

        next = 0;
        nextStage = stages[next];

        game.stage = next; // go to the first stage in the game, stage 0

        output = getAllMsg(nextStage.messages, player.name);

        console.log("game.stage showing on screen now: ", game.stage);
        console.log("currStage shown on screen a second ago): ", currStage);
        console.log("nextStage showing on screen now)", nextStage);
    } else {
        currStage = stages[game.stage];
        currStage.response = input;

        if (currStage.response in currStage.paths) {
            next = getNextStage(currStage.response, currStage.paths);
            nextStage = stages[next];

            game.stage = next;

            output = getAllMsg(nextStage.messages, player.name);

            console.log("game.stage showing on screen now: ", game.stage);
            console.log("currStage shown on screen a second ago: ", currStage);
            console.log("nextStage showing on screen now)", nextStage);
        } else {
            output = game.prevOutput;
        }

    }

    game.prevOutput = output;
    console.log("----------------------------------");
    return output;
};