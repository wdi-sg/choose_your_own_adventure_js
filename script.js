console.log("hello script js");

var choicePrompt = "Please choose from the following:";
var

///////////////////////////////////////////////////////
// Keep track of what people choose during the game. //
///////////////////////////////////////////////////////
var cerealChosen;

var playerName = "playerName";

var activeGameSegment = gameStory[1]

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
    console.log(sanitizedInput);
}

var gameAction = function(currentInput) {

}

///////////////////////////////////////////////////////////////////////////
/// Try to make the choices appear in an easy to read and edit format.  ///
/// There are going to be a lot of choices and things to go down.       ///
///////////////////////////////////////////////////////////////////////////

var gameStory = [
                    {
    id          :   0,
    description :   `Please input your name to start this exciting game!`;
    choices     :   []
                    },
                    {
    id          :   1,
    description :   `Good morning ${playerName}! You walk into the kitchen to get some cereal. What would you like to eat?`,
    choices     :   [   {   choiceDescription   :   "Weetabix",
                            choiceId            :   2,
                            confirmation        :   "You pick up the Weetabix from the cupboard.",
                            variablesToToggle   :   [cerealChosen],
                            variableValue       :   "Weetabix",
                        },
                        {   choiceDescription   :   "Fruit Loops",
                            choiceId            :   2,
                            confirmation        :   "You pick up the fruit loops from the cupboard.",
                            variablesToToggle   :   [cerealChosen],
                            variableValue       :   "Fruit Loops"
                        },
                        {   choiceDescription   :   "Skip Breakfast and go straight to work",
                            choiceId            :   3,
                            confirmation        :   "You walk straight out the door and go to work",
                            variablesToToggle   :   [],
                            variableValue       :   "",
                        }]
                    },
                    {
    id          :   2,
    description :   `You enjoy the ${cerealChosen} very much. They are delicious! You look at the time, if you leave now you can be on time for work.`,
    choices     :   [   {   choiceDescription   :   "Leave for work",
                            choiceId            :   2,
                            confirmation        :   "You gather your things and leave for work.",
                        },
                        {   choiceDescription   :   "Put on the news.",
                            choiceId            :   2,
                            confirmation        :   "You switch on the TV. There seems to be a traffic jam on the PIE."
                        }]
                    }
                ];

display(`${activeGameSegment.description} \n ${choicePrompt} \n ${listChoices(activeGameSegment)} `);

var inputHappened = function(currentInput){
    output = gameInputProcess(currentInput);
    return output;
};