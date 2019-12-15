console.log("hello script js");

var number;
var choicePrompt = "Please choose from the following:";

///////////////////////////////////////////////////////
// Keep track of what people choose during the game. //
///////////////////////////////////////////////////////
var cerealChosen;

var choicesMade = {};

// This is the "index" of the story you are at.
var gameIndex = 0;

var playerName = "playerName";

var previousChoiceActionText = "";

var listChoices = function (storySegmentObject) {
    var choices = storySegmentObject.choices;
    var result = "";
    for (var i = 0; i < choices.length; i++) {
        var description = choices[i].choiceDescription;
        result += "\n" + (i+1) + ": " + description;
    }
    return result;
}


var gameInputProcess = function(currentInput) {
    var sanitizedInput = currentInput.toLowerCase().trim()
    return gameAction(currentInput);
}


var printCurrentLocation = function(gameNode) {
    activeGameSegment = gameStory[gameNode];
    return(`${previousChoiceActionText}\n${activeGameSegment.description} \n ${choicePrompt} \n ${listChoices(activeGameSegment)} `);
}


var gameAction = function(currentInput) {

    if (gameIndex === 0) {
        playerName = currentInput;
        gameIndex = 1;
        previousChoiceActionText = "Welcome to the game, " + playerName + "!";
        return printCurrentLocation(gameIndex);
    }

    if (checkIsASingleDigitNumber(currentInput)) {
        gameIndex = pickSubOption(currentInput);
        return printCurrentLocation(gameIndex);
    } else {
        return "Invalid input, please try again.\n" + printCurrentLocation(gameIndex);
    }

}


var pickSubOption = function(currentInput) {
    var activeGameSegment = gameStory[gameIndex];
    var choiceIndex = currentInput - 1;
    var choiceMade = activeGameSegment.choices[choiceIndex];
    previousChoiceActionText = choiceMade.confirmation;
    choicesMade[choiceMade.variablesToToggle] = choiceMade.variableValue;
    var destinationIndex = choiceMade.choiceId;
    console.log("index chosen " + destinationIndex);
    return destinationIndex;
}


var checkIsASingleDigitNumber = function(currentInput) {
    var integerInput = parseInt(currentInput);
    if ((integerInput <= gameStory[gameIndex].choices.length) && (integerInput > 0)) {
        return integerInput;
    }

    return false;
}

///////////////////////////////////////////////////////////////////////////
/// Try to make the choices appear in an easy to read and edit format.  ///
/// There are going to be a lot of choices and things to go down.       ///
///////////////////////////////////////////////////////////////////////////

var gameStory = {
            0   :   {
    id          :   0,
    description :   `Please input your name to start this exciting game!`,
    choices     :   []
                    },
            1   :   {
    id          :   1,
    description :   "Good morning! You walk into the kitchen to get some cereal. What would you like to eat?",
    choices     :   [   {   choiceDescription   :   "Weetabix",
                            choiceId            :   2,
                            confirmation        :   "You pick up the Weetabix from the cupboard. They are delicious!",
                            variablesToToggle   :   "cerealChosen",
                            variableValue       :   "Weetabix",
                        },
                        {   choiceDescription   :   "Fruit Loops",
                            choiceId            :   2,
                            confirmation        :   "You pick up the fruit loops from the cupboard. They are delicious!",
                            variablesToToggle   :   "cerealChosen",
                            variableValue       :   "Fruit Loops"
                        },
                        {   choiceDescription   :   "Skip Breakfast and go straight to work",
                            choiceId            :   3,
                            confirmation        :   "You walk straight out the door and go to work",
                            variablesToToggle   :   "cerealChosen",
                            variableValue       :   "None",
                        }]
                    },
            2   :   {
    id          :   2,
    description :   `They are delicious! You look at the time, if you leave now you can be on time for work.`,
    choices     :   [   {   choiceDescription   :   "Leave for work",
                            choiceId            :   3,
                            confirmation        :   "You gather your things and leave for work.",
                        },
                        {   choiceDescription   :   "Put on the news.",
                            choiceId            :   3,
                            confirmation        :   "You switch on the TV. There seems to be a traffic jam on the PIE."
                        }]
                    },
            3   :   {
    id          :   3,
    description :   "You walk out the door and go to work",
    choices     :   [   {   choiceDescription   :   "Take the Car",
                            choiceId            :   3,
                            confirmation        :   "Get in the car.",
                        },
                        {   choiceDescription   :   "Take the MRT",
                            choiceId            :   3,
                            confirmation        :   "Walk to the MRT station."
                        }]
                    }
                };

var activeGameSegment = gameStory["0"]

var inputHappened = function(currentInput){
    document.querySelector('#input').value = ""
    output = gameInputProcess(currentInput);
    return output;
};


display(`${activeGameSegment.description} \n ${listChoices(activeGameSegment)} `);