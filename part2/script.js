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
    } else {
        currStage = stages[game.stage];
        currStage.response = input.toLowerCase();
        if (currStage.response.toLowerCase() in currStage.paths) {
            next = currStage.paths[currStage.response];
            nextStage = stages[next];
            game.stage = next;
            output = getAllMsg(nextStage.messages, player.name);
        } else {
            output = game.prevOutput;
        }
    }
    game.prevOutput = output;
    return output;
};