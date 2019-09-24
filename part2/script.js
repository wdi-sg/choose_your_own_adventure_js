/*           Assignment Part 2 - DOM Manipulation            */
var addToDOM = function(output, id) {
    var content = document.createElement("p");
    content.innerText = output;
    var display = document.querySelector(id);

    if (display.lastChild) {
        display.removeChild(display.lastChild);
    }

    display.appendChild(content);
};

var blink1 = function() {
    var obj = document.querySelector("#input");
    obj.placeholder = "login: ..............";
};

var blink2 = function() {
    var obj = document.querySelector("#input");
    obj.placeholder = "";
};

var blinkInterval1 = setInterval(blink1, 1000);
var blinkInterval2 = setInterval(blink2, 2000);



var updatePlayerName = function(messages, playerName) {
    for (var i = 0; i < messages.length; i++) {
        if (messages[i] === "playerName") {
            messages[i] = playerName.toUpperCase();
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
    var messages = Object.values(messagesObj);
    var output = "";
    for (var i = 0; i < messages.length; i++) {
        output += getMsg(messages[i], playerName);
    }
    return output;
};

var inputHappened = function(input) {
    var output = "";
    var currStage = {};
    var nextStage = {};
    var next = null;

    if (!game.started) {
        player.name = input;
        game.started = true;
        next = 0;
        nextStage = stages[next];
        game.stage = next;
        output = getAllMsg(nextStage.messages, player.name);
        addToDOM(output, "#display");
    } else {
        currStage = stages[game.stage];
        currStage.response = input.toLowerCase();
        if (currStage.response.toLowerCase() in currStage.paths) {
            next = currStage.paths[currStage.response];
            nextStage = stages[next];
            game.stage = next;
            output = getAllMsg(nextStage.messages, player.name);
            addToDOM(output, "#display");
        } else {
            output = game.prevOutput;
            addToDOM(output, "#display");
        }
    }
    game.prevOutput = output;
    return;
    // return output;
};