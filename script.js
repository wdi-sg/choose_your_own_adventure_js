console.log("hello script js");

var number;
var choicePrompt = "Please choose from the following:";

///////////////////////////////////////////////////////
// Keep track of what people choose during the game. //
///////////////////////////////////////////////////////
var cerealChosen;

var choicesMade = {};

//////////////////////////////////////////////
// Let's add some achievements just for fun //
//////////////////////////////////////////////
var unknownAchievementText = `? ? ? ? Try different paths to unlock this achievement ? ? ? ?`;

choicesMade.jetPlane = false;
var jetPlaneName = `✈️I'm leaving on a jetplane.✈️`;
var jetPlaneText = `Leave the corporate life behind on a suspiciously priced plane ticket.`;

choicesMade.promoted = false;
var gotMyselfPromotedName = "📈STONKS📈";
var gotMyselfPromotedText = `Aced the presentated so I got promoted!`;

choicesMade.fired = false;
var gotMyselfFiredName = `🔥GOT F*I*R*E*D!🔥`;
var gotMyselfFiredText = `Bombed the presentation so hard I got fired!`;

choicesMade.annoyGary = false;
var annoyGaryGetWallopedName = "😡ANGRY GARY😡";
var annoyGaryGetWallopedText = `Get fired by starting a fight.`;

choicesMade.beeryGood = false;
var beeryGoodName = "🍺Beery Good!🍺";
var beeryGoodText = "Go for a beer after work with your colleague";

choicesMade.stockMarketCrash = false;
var stockMarketCrashName = "📉STOCK MARKET CRASH📉";
var stockMarketCrashText = "Panic and jump through the window.";

var achievementUnlockedText = "**ACHIEVEMENT UNLOCKED**\nYou have earned the following achievement. You can see all your achievements by typing in 'achievement' or 'a' anytime during the game!"


// This is the "index" of the story you are at.
var gameIndex = 0;
var previousChoiceActionText = "";

// Store the player name
var playerName = "playerName";

// Multiple choices for some options, loop through all the options and present them.
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

    if (currentInput[0] == 'a') {
        return displayAchievements() + "\n" + printCurrentLocation(gameIndex);
    }


    if (checkIsASingleDigitNumber(currentInput)) {
        gameIndex = pickSubOption(currentInput);
        return specialOption(gameIndex);
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
    // console.log("index chosen " + destinationIndex);
    return destinationIndex;
}


var checkIsASingleDigitNumber = function(currentInput) {
    var integerInput = parseInt(currentInput);
    if ((integerInput <= gameStory[gameIndex].choices.length) && (integerInput > 0)) {
        return integerInput;
    }

    return false;
}


var displayAchievements = function() {
    var leavingOnAJetplane = (choicesMade.jetPlane) ? jetPlaneText : unknownAchievementText;
    var gotMyselfFired = (choicesMade.fired) ? gotMyselfFiredText : unknownAchievementText;
    var gotMyselfPromoted = (choicesMade.promoted) ? gotMyselfPromotedText : unknownAchievementText;
    var annoyGaryGetWalloped = (choicesMade.annoyGary) ? annoyGaryGetWallopedText : unknownAchievementText;
    var beeryGood = (choicesMade.beeryGood) ? beeryGoodText : unknownAchievementText;
    var stockMarketCrash = (choicesMade.stockMarketCrash) ? stockMarketCrashText : unknownAchievementText;
    var outputString = `**ACHIEVEMENTS**\n
--${jetPlaneName}--\n
${leavingOnAJetplane}\n
--${gotMyselfFiredName}--\n
${gotMyselfFired}\n
--${gotMyselfPromotedName}--\n
${gotMyselfPromoted}\n
--${annoyGaryGetWallopedName}--\n
${annoyGaryGetWalloped}\n
--${beeryGoodName}--\n
${beeryGood}\n
--${stockMarketCrashName}--\n
${stockMarketCrash}\n`;
return outputString;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Some places have "special" things that happen when you reach them. These print out those special dialogues.///
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var specialOption = function(inputGameIndex) {
    var outputToReturn = "";
    switch(inputGameIndex) {

        // going over to talk to Gary.
        case 6:
            var breakfastConversation = ""
            var trafficConversation = ""
            if (choicesMade.lateForWork) {
                trafficConversation = `\n"Hey man, how come you are in so late? You know the boss is gonna be pissed."
"I know," you reply, "There was a terrible traffic jam on the PIE and I was stuck in it for ages.\n`;
            };
            if (choicesMade['cerealChosen'] !== "None") {
                breakfastConversation = `"Yes I had ${choicesMade['cerealChosen']} this morning."`;
            } else {
                breakfastConversation = `"I skipped breakfast this morning."`;
            };
            outputToReturn = `You walk up to Gary.\n
"Hey there ${playerName}. You have breakfast already?"
${breakfastConversation}${trafficConversation}${printCurrentLocation(inputGameIndex)}`
return outputToReturn;
        break;

        // if not a special case we just do the normal current location:
        default:
            return printCurrentLocation(gameIndex);
    }
}


///////////////////////////////////////////////////////////////////////////
/// Try to make the choices appear in an easy to read and edit format.  ///
/// There are going to be a lot of choices and things to go down.       ///
///////////////////////////////////////////////////////////////////////////

var gameStory = {
            0   :   {
    description :   `Welcome to:\n
 _______    _        _ _         _____            _ _     _   _
|__   __|  | |      | | |       |  __ \\          | (_)   | | (_)
   | | ___ | |_ __ _| | |_   _  | |__) |___  __ _| |_ ___| |_ _  ___
   | |/ _ \\| __/ _' | | | | | | |  _  // _ \\/ _' | | / __| __| |/ __|
   | | (_) | || (_| | | | |_| | | | \\ \\  __/ (_| | | \\__ \\ |_| | (__
   |_|\\___/ \\__\\__,_|_|_|\\__, | |_|  \\_\\___|\\__,_|_|_|___/\\__|_|\\___|
  ____   __  __ _         __/ |____ _                 _       _
 / __ \\ / _|/ _(_)       |___/ ____(_)               | |     | |
| |  | | |_| |_ _  ___ ___  | (___  _ _ __ ___  _   _| | __ _| |_ ___  _ __
| |  | |  _|  _| |/ __/ _ \\  \\___ \\| | '_ \\ _ \\| | | | |/ _' | __/ _ \\| '__|
| |__| | | | | | | (_|  __/  ____) | | | | | | | |_| | | (_| | || (_) | |
 \\____/|_| |_| |_|\\___\\___| |_____/|_|_| |_| |_|\\__,_|_|\\__,_|\\__\\___/|_|
\nPlease input your name to start this exciting game!`,
    choices     :   []
                    },

            1   :   {
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
    description :   `After eating you look at the time, if you leave now you can be on time for work.`,
    choices     :   [   {   choiceDescription   :   "Leave for work",
                            choiceId            :   3,
                            confirmation        :   "You gather your things and leave for work.",
                        },
                        {   choiceDescription   :   "Put on the news.",
                            choiceId            :   3,
                            confirmation        :   "You switch on the TV. There seems to be a big accident and traffic jam on the PIE. After watching for a few minutes, you leave for work."
                        }]
                    },

            3   :   {
    description :   "You walk out the door, get in your car and start the engine. How would you like to drive to work?",
    choices     :   [   {   choiceDescription   :   "Take the PIE",
                            choiceId            :   4,
                            confirmation        :   "As soon as you get on the PIE you notice a lot of traffic. It seems there has been a big accident and traffic has slowed to a crawl. You arrive at work 30 minutes late!",
                            variablesToToggle   :   "lateForWork",
                            variableValue       :   true,
                        },
                        {   choiceDescription   :   "Take the ECP",
                            choiceId            :   4,
                            confirmation        :   "Taking the ECP you tune into the radio and hear there has been a traffic accident on the PIE. You arrive at work on time.",
                            variablesToToggle   :   "lateForWork",
                            variableValue       :   false,
                        },
                        {   choiceDescription   :   "Screw going to work, let's go to the airport!",
                            choiceId            :   7,
                            confirmation        :   "You drive to the airport. Let's check out some flights!",
                            variablesToToggle   :   "lateForWork",
                            variableValue       :   false,
                        },
                    ]
                    },

            4   :   {
    description :   "You settle in at your desk. Your agenda shows that you have an important presentation to your boss just before lunch. You see your colleague Gary over in the pantry. He has just gotten back from vacation. He spots you and waves at you to come over.",
    choices     :   [   {   choiceDescription   :   "Study notes for presentation",
                            choiceId            :   5,
                            confirmation        :   "You shake your head at Gary, and look at your notes for the presentation.",
                            variablesToToggle   :   "wantsABeer",
                            variableValue       :   false,
                        },
                        {   choiceDescription   :   "Talk to Gary",
                            choiceId            :   6,
                            confirmation        :   "",
                        }]
                    },

            5   :   {
    description :   "Looks like sales are pretty low for the last quarter. The boss is unlikely to be happy with your presentation with these numbers.",
    choices     :   [   {   choiceDescription   :   "Redo graph",
                            choiceId            :   3,
                            confirmation        :   "You redo the bar chart with pretty colours and stuff.",
                            variablesToToggle   :   "fudgeThePresentation",
                            variableValue       :   1,
                        },
                        {   choiceDescription   :   "Pad the numbers",
                            choiceId            :   3,
                            confirmation        :   "You change the numbers to make it look more flattering.",
                            variablesToToggle   :   "fudgeThePresentation",
                            variableValue       :   -1,
                        },
                        {   choiceDescription   :   "Leave it as is.",
                            choiceId            :   3,
                            confirmation        :   "You read over your notes again.",
                            variablesToToggle   :   "fudgeThePresentation",
                            variableValue       :   0,
                        },
                        ]
                    },

            6   :   {
    description :   `"uh-huh" Gary says "You want to grab a beer after work?"`,
    choices     :   [   {   choiceDescription   :   "Sure let's do it.",
                            choiceId            :   3,
                            confirmation        :   "With all the stress of the presentation, a beer to celebrate, or commiserate, sounds like a good idea.",
                            variablesToToggle   :   "wantsABeer",
                            variableValue       :   true,
                        },
                        {   choiceDescription   :   "Nah",
                            choiceId            :   3,
                            confirmation        :   "You decide against getting a beer.",
                            variablesToToggle   :   "wantsABeer",
                            variableValue       :   false,
                        },
                        {   choiceDescription   :   "Insult Gary",
                            choiceId            :   9,
                            confirmation        :   "You tell Gary his mother was a hamster, and his father smelled of elderberries.",
                            variablesToToggle   :   "annoyGary",
                            variableValue       :   true,
                        }]
                    },

            7   :   {
    description :   `You see flights going to KL or Bali, going to KL the tickets are only $50 in economy, but to Bali there's a choice of first class, business class, or economy tickets.`,
    choices     :   [   {   choiceDescription   :   "Let's go to KL!",
                            choiceId            :   8,
                            confirmation        :   "The ticket only costs $50. Result!",
                            variablesToToggle   :   "jetPlane",
                            variableValue       :   true,
                        },
                        {   choiceDescription   :   "Let's go to Bali, First Class!",
                            choiceId            :   8,
                            confirmation        :   "The ticket costs $191,000! Ouch!",
                            variablesToToggle   :   "jetPlane",
                            variableValue       :   true,
                        },
                        {   choiceDescription   :   "Let's go to Bali, Business Class!",
                            choiceId            :   8,
                            confirmation        :   "The ticket costs $65. Not bad.",
                            variablesToToggle   :   "jetPlane",
                            variableValue       :   true,
                        },
                        {   choiceDescription   :   "Let's go to Bali, Cattle Class!",
                            choiceId            :   8,
                            confirmation        :   "The ticket costs $50.",
                            variablesToToggle   :   "jetPlane",
                            variableValue       :   true,
                        },
                        ]
                    },

            8   :   {
    description :   `Just as you board the plane you get a phone call from your boss:
"Where are you?" he shouts at you down the phone. "You're not at the presentation!"
"I'm at the airport" you reply "Screw corporate life!"
"You're fired!" he says.
You got fired. Shame that.
** THE END **

${achievementUnlockedText}
${jetPlaneName}
${jetPlaneText}`,
    choices     :   [   {   choiceDescription   :   "Choose your breakfast again.",
                            choiceId            :   1,
                            confirmation        :   `By the magic of technology you restart the day.\n`,
                        },
                    ]
                    },

            9   :   {
    description :   `Gary turns red and gets absolutely outranged at the insult.
He punches you in the face and you get knocked out! You wake up in hospital, and find out you've both been fired.
** THE END **

${achievementUnlockedText}
${annoyGaryGetWallopedName}
${annoyGaryGetWallopedText}`,
    choices     :   [   {   choiceDescription   :   "Choose your breakfast again.",
                            choiceId            :   1,
                            confirmation        :   `By the magic of technology you restart the day.\n`,
                        },
                    ]
                    },




};

// We start our story at index 0;
var activeGameSegment = gameStory["0"]


// WOW something happened.
var inputHappened = function(currentInput){
    document.querySelector('#input').value = ""
    output = gameInputProcess(currentInput);
    return output;
};


display(`${activeGameSegment.description} \n ${listChoices(activeGameSegment)} `);