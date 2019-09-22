"use strict"
// display() is a function declared within <script> inside index.html
// display() is used here to display a welcomeMessage at the start of the game
var welcomeMessage =    "----------The Matrix-----------\n" +
                        "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \
                          \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
                        "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \
                          \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
                        "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \
                          \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
                        "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \
                          \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
                        "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0login:\xa0[your name]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
                        "-----------------------------------";

display(welcomeMessage);

// game is an object to store data for the game throughout the game
// to access the data inside game --> e.g. game.stage
var game = {
    prevOutput: null, // to store the current output which may be needed subsequently
    stage: -1, // -1 refers to a "stage" before stage 0
    started: false // before the game starts, we want to do some stuff to set up the game, like storing the player name
};
// console.log("Welcome Screen");
// console.log("initial game.stage: ", game.stage);
// console.log("----------------------------------");

// player is an object to store data for the player throughout the game
// to access the data inside player --> e.g. player.name
var player = {
    name: null
};

// stages is an array of objects
// each object inside the array is used to store data for each stage
// to access each stage object within the array --> e.g. stages[0], stage[1] etc...
// to access data inside each stage object --> e.g. stages[0].messages, stages[0].paths etc...
// stages.messages is an object that stores messages that will be displayed to the player
// each key (intro, questions etc) is paired with an array of strings
// each array can be considered as a paragraph, while the strings inside the array can be considered as words and sentences
// placeholder words such as playerName will be replaced later with values entered by the player
// stages.response is.a string that stores the input from the player
// stages.paths is an object that stores data about the next stage that the player will go to , given a particular stages.response
// the key in the paths object corresponds to stages.response
// the value in the paths objects corresponds to the index of the item inside the stages array, e.g. 0 in stages[0]
var stages = [{
        messages: {
            intro: ["Wake up, ", "playerName", "...\n\n\n\n\n"],
            questions: [],
            choices: [],
            hints: ["<enter [c] to continue>\n"],
        },
        paths: { c: 1 },
        response: null,
    },
    {
        messages: {
            intro: ["The Matrix has you...\n\n\n\n\n"],
            questions: [],
            choices: [],
            hints: ["<enter [c] to continue>\n"],
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

// function to replace placeholder words in an array of strings
// e.g. to replace "playerName" in stages[0].messages.intro[1] with player.name (input from player)
var updatePlayerName = function(messages, playerName) {
    for (var i = 0; i < messages.length; i++) {
        if (messages[i] === "playerName") {
            messages[i] = playerName;
        }
    }
    return messages;
};

// function to retrieve each item in an array of strings (words and sentences) and concatenate them into a string (paragraph)
var getMsg = function(messages, playerName) {
    var output = "";

    messages = updatePlayerName(messages, playerName);

    for (var i = 0; i < messages.length; i++) {
        output += messages[i];
    }
    return output;
};

// function to retrieve each array of strings (words and sentences)from stages[i].messages object
// and pass each of them to getMsg() which will return concatenated strings (paragraphs)
// these returned concatenated strings will be concatenated to form a single string to be displayed to the player
var getAllMsg = function(messagesObj, playerName) {
    var messages = Object.values(messagesObj); //creates an array of values [ ["Wake up...", ], ["What" ] ]

    var output = "";

    for (var i = 0; i < messages.length; i++) {
        output += getMsg(messages[i], playerName);
    }

    return output;
};

// function to retrieve the next stage number , given a particular response
var getNextStage = function(response, paths) {
    return paths[response];
};

// main function that is called when a change event is triggered
var inputHappened = function(input) {
    // console.log("game.stage shown on screen a second ago: ", game.stage);
    console.log("input:", input);
    // console.log("player object ", player);
    // console.log("stages object ", stages);
    // console.log("game object ", game);
    var output = "";
    // console.log("game.started: ", game.started);

    var currStage = {}; // object to store the current stage object from stages[i]
    var nextStage = {}; // object to store the next stage object from stages[i]
    var next = null; // number for retrieving the next stage object from the stages array, stages[next]


    if (!game.started) {
    // when the game has not started, i.e. when the screen is showing the welcomeMessage and asking for player name
    // do the following to set up the game:
        player.name = input; // player input will be stored as player.name
        game.started = true; // end of setup, game.started is now true and the stuff inside this if statement won't be run again
        // console.log("changed game.started to: ", game.started);

        // after the welcomeMessage, we want to show the stuff for the first stage,
        // i.e. data stored inside the stages[0].messages
        next = 0;
        nextStage = stages[next];
        // nextStage object now holds the stage object that the player will next go to
        // after the game has started, the nextStage object definitely has to be stages[0]

        // update the game.stage
        // game.stage will be used as an index to retrieve stage objects from the stages array,
        // and be assigned to currStage, so that we can then use the data stored inside currStage
        // e.g. when game.stage is updated to 100, stages[100] will be retrieved and assigned to currStage
        game.stage = next;

        // call getAllMsg to return a single string, which will then be assigned to output
        // output will be returned at the end of the inputHappened() function,
        // which will then be assigned to var output in <script> in index.html,
        // which will then be used by the display() function in <script> in index.html
        output = getAllMsg(nextStage.messages, player.name);

        // console.log("game.stage showing on screen now: ", game.stage);
        // console.log("currStage shown on screen a second ago): ", currStage);
        // console.log("nextStage showing on screen now)", nextStage);
    } else {
        // using game.stage as an index, which will be updated,
        // retrieve the stage object in the stages array --> stages[game.stage]
        // then assign this to the currStage object,
        // currStage can then be used to do useful stuff,
        // like retrieving the response and paths ---> currStage.response , currStage.paths
        // if we don't use the currStage object, then every time we have to use the equivalent stages[game.stage]
        // which is harder to read and longer to type
        currStage = stages[game.stage];

        // store the player input into currStage.response,
        // currStage.response will be used to determine the next stage that the player will go to
        currStage.response = input;

        // currStage.paths is an object containing info about what's the next stage the player will go to,
        // given a particular currStage.response,
        // e.g. if currStage.paths = {F: 1, D: 3},
        // then a currStage.response of "F" will allow the player to proceed to stage 1
        // getNextStage() function returns a number which is a value in the currStage.path object
        //.e.g. currStage.paths["F"] returns 1, currStage.paths["D"] returns 3
        // in other words, currStage.response is used a key to retrieve the value stored in the currStage.paths object
        // the condition in the if statement checks if a response exists in the currStage.paths,
        // i.e. whether a particular key exists in all the keys of the currStage.paths object,
        // if the condition is true, i.e. the key exists, e.g. "F" is found in {F: 1, D: 3},
        // then proceed to retrieve the data to be displayed to the player
        if (currStage.response.toUpperCase() in currStage.paths) {

            // the lines below follow the same pattern as above
            // except that instead of assigning next to be 0,
            // we want to assign next according to the player's response,
            // this is done by calling the getNextStage() function
            // toUpperCase() function is called so that lowercase input from the user is also acceptable
            next = getNextStage(currStage.response.toUpperCase(), currStage.paths);
            nextStage = stages[next];
            // nextStage now holds the data for the next stage that the player will go to

            game.stage = next;
            // as mentioned earlier, game.stage is now updated,
            // so that when this else statement runs again for the subsequent stages,
            // the correct stage object can be retrieved, via stages[game.stage]

            // call getAllMsg() function, just as it was done in the if statement
            output = getAllMsg(nextStage.messages, player.name);

            // console.log("game.stage showing on screen now: ", game.stage);
            // console.log("currStage shown on screen a second ago: ", currStage);
            // console.log("nextStage showing on screen now)", nextStage);
        } else {
            output = game.prevOutput; // do nothing if the player enters anything not found in stages[i].messages.choices
        }

    }

    game.prevOutput = output; // store the current output in game.prevOut for later use
    // console.log("----------------------------------");
    return output;
};