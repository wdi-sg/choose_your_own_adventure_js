"use strict"
// display() is a function declared within <script> inside index.html
// display() is used here to display a welcomeMessage at the start of the game
var welcomeMessage = "----------The Matrix-----------\n" +
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
var stages = [{ //stage 0 - Wake Up
        messages: {
            intro: ["---", "playerName", "\'S ", "APARTMENT---\n\n", "Wake up, ", "playerName", "...\n\n\n\n"],
            questions: [],
            choices: [],
            hints: ["<Enter c to [c]ontinue>\n"],
        },
        paths: { c: 1 },
        response: null,
    },
    { //stage 1 - Follow The White Rabbit
        messages: {
            intro: ["The Matrix has you...\n\n\n\nFollow the white rabbit.\n\n"],
            questions: [],
            choices: [],
            hints: ["[f]ollow\n"],
        },
        paths: { f: 2 },
        response: null,
    },
    { //stage 2 - Rabbit Hole
        messages: {
            intro: ["---HOTEL LAFAYETTE---\n",
                "Welcome ", "playerName", ".\n\n",
                "As you no doubt have guessed, I am MORPHEUS.\n\n",
                "This is your last chance. After this, there is no going back.\n\n",
                "You take the *blue* pill and the story ends.\n",
                "You wake in your bed and you believe whatever you want to believe.\n\n",
                "You take the *red* pill and you stay in Wonderland\n",
                "and I show you how deep the rabbit-hole goes.\n\n"
            ],
            questions: ["Which pill would you take?\n\n"],
            choices: ["[b]lue OR [r]ed\n"],
            hints: [],
        },
        paths: { b: 3, r: 4 },
        response: null,
    },
    { //stage 3 - Blue - THE END
        messages: {
            intro: ["\n\n\nWelcome back to the Matrix.\n\n\n",
                    "<THE END>\n\n"],
            questions: [],
            choices: ["[r]estart game"],
            hints: [],
        },
        paths: { r: 0 },
        response: null,
    },
    { //stage 4 - Red
        messages: {
            intro: ["Let's go down the rabbit-hole.\n\n\n\n\n\n"],
            questions: [],
            choices: [],
            hints: ["[c]ontinue"],
        },
        paths: { c: 5 },
        response: null,
    },
    { //stage 5 - Combat
        messages: {
            intro: ["---MAIN DECK---\n\n",
                "You're plugged in, hanging in one of the suspension chairs.\n\n\n",
                "TANK:\n",
                "\We're supposed to load all these operations programs first,\n",
                "but this is some major boring shit.\n",
                "Why don't we start something a little fun?\n",
                "How about some combat training?\n\n",
                "A tall carousel is loaded with micro discs.\n\n"
            ],
            questions: ["Choose a disc:\n\n"],
            choices: ["[K]enpo OR [T]ae Kwan Do OR [D]runken boxing"],
            hints: [],
        },
        paths: { k: 6, t: 7, d: 8 },
        response: null,
    },
    { //stage 6 - Kenpo
        messages: {
            intro: ["playerName", ":\n", "I know Kenpo.\n\n\n\n"],
            questions: ["Load more combat training?\n\n"],
            choices: ["[y]es OR [n]o"],
            hints: [],
        },
        paths: { y: 5, n: 9 },
        response: null,
    },
    { //stage 7 - Tae Kwan Do
        messages: {
            intro: ["playerName", ":\n", "I know Tae Kwan Do.\n\n\n\n"],
            questions: ["Load more combat training?\n\n"],
            choices: ["[y]es OR [n]o"],
            hints: [],
        },
        paths: { y: 5, n: 9 },
        response: null,
    },
    { //stage 8 -Drunken Boxing
        messages: {
            intro: ["playerName", ":\n", "I know Drunken Boxing.\n\n\n\n"],
            questions: ["Load more combat training?\n\n"],
            choices: ["[y]es OR [n]o"],
            hints: [],
        },
        paths: { y: 5, n: 9 },
        response: null,
    },
    { //stage 9 - Nebuchadnezzar
        messages: {
            intro: ["---NEBUCHADNEZZAR---\n\n",
                "MORPHEUS:\n",
                "How's he doing?\n\n",
                "TANK:\n",
                "We just finished the operation programs and he's showing great retention.\n\n",
                "MORPHEUS:\n",
                "Good. I want everyone alerted to 12-hour stand-by. We're going in.\n",
                "playerName", ", it's time for you to know why you're here.\n\n",
                "playerName", ":\n",
                "What's he talking about?\n\n",
                "TANK:\n",
                "He's taking you into the Matrix to see someone.\n\n",
                "playerName", ":\n",
                "See who?\n\n"
            ],
            questions: ["Who would you like to see?\n\n"],
            choices: ["The [O]racle OR The [A]rchitect"],
            hints: [],
        },
        paths: { o: 10, a: 11 },
        response: null,
    },
    { //stage 10- The Oracle
        messages: {
            intro: ["---ORACLE'S CHAMBER---\n\n",
                "ORACLE:\n",
                "You know why MORPHEUS brought you to see me?\n\n\n",
            ],
            questions: ["Do you know?\n\n"],
            choices: ["I [t]hink so OR I [d]on't know"],
            hints: [],
        },
        paths: { t: 12, d: 13 },
        response: null,
    },
    { //stage 11 - The Architect
        messages: {
            intro: ["The Architect"],
            questions: [],
            choices: [],
            hints: [],
        },
        paths: {},
        response: null,
    },
    { //stage 12 - Are You The One
        messages: {
            intro: ["ORACLE:\n",
                "So? What do you think?  You think you're the one?\n\n\n\n"
            ],
            questions: [],
            choices: ["[y]es OR [n]o"],
            hints: [],
        },
        paths: { y: 14, n: 15 },
        response: null,
    },
    { //stage 13 - I'm Not The One - THE END
        messages: {
            intro: ["ORACLE:\n",
                    "Then you're not.\n\n\n",
                    "Will you please excuse me.\n\n\n",
                    "<THE END>\n\n"],
            questions: [],
            choices: ["[r]estart game"],
            hints: [],
        },
        paths: {r: 0},
        response: null,
    },
    { //stage 14 - I'm The One
        messages: {
            intro: ["\n\n\nAlright, you're THE ONE.\n\n\n",
                    "Please go and see The Architect.\n"],
            questions: [],
            choices: ["[c]ontinue"],
            hints: [],
        },
        paths: {c: 11},
        response: null,
    },
    { //stage 15 - I'm Not The One - THE END
        messages: {
            intro: ["The Oracle gestures to a wooden plaque,\n",
                "the kind every grandma has,\n",
                "except that the words are in Latin.\n\n",
                "ORACLE:\n",
                "You know what that means?\n",
                "It's Latin. Means 'Know thyself'.\n",
                "I'm going to let you in on a little secret.\n",
                "Being The One is just like being in love.\n",
                "No one can tell you you're in love, you just know it.\n",
                "Through and through. Balls to bones.\n",
                "Well, I better have a look at you.\n",
                "Open your mouth, say Ahhh.\n\n\n",
                "<THE END>\n\n"
            ],
            questions: [],
            choices: ["[r]estart game"],
            hints: [],
        },
        paths: { r: 0 },
        response: null,
    },
    { //stage
        messages: {
            intro: [],
            questions: [],
            choices: [],
            hints: [],
        },
        paths: {},
        response: null,
    },
    { //stage
        messages: {
            intro: [],
            questions: [],
            choices: [],
            hints: [],
        },
        paths: {},
        response: null,
    },
]

// function to replace placeholder words in an array of strings
// e.g. to replace "playerName" in stages[0].messages.intro[1] with player.name (input from player)
var updatePlayerName = function(messages, playerName) {
    for (var i = 0; i < messages.length; i++) {
        if (messages[i] === "playerName") {
            messages[i] = playerName.toUpperCase();
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
        if (currStage.response.toLowerCase() in currStage.paths) {

            // the lines below follow the same pattern as above
            // except that instead of assigning next to be 0,
            // we want to assign next according to the player's response,
            // this is done by calling the getNextStage() function
            // toLowerCase() function is called so that uppercase input from the player is also acceptable
            next = getNextStage(currStage.response.toLowerCase(), currStage.paths);
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