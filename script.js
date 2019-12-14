console.log("hello script js");

var choicePrompt = "Please choose from the following:";

var listChoices = function (storySegmentObject) {
    var choices = storySegmentObject.choices;
    var result = "";
    for (var i = 0; i < choices.length; i++) {
        var description = choices[i].choiceDescription;
        result += "\n" + (i+1) + ": " + description;
    }
    return result;
}

var cerealChosen;

var playerName = "playerName";

///////////////////////////////////////////////////////////////////////////
/// Try to make the choices appear in an easy to read and edit format.  ///
/// There are going to be a lot of choices and things to go down.       ///
///////////////////////////////////////////////////////////////////////////

var storySegment1 = {
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
                    };

var storySegment2 = {
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
                    };

display(`${storySegment1.description} \n ${choicePrompt} \n ${listChoices(storySegment1)} `);

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "WOW SOMETHING HAPPENED";
  return output;
};