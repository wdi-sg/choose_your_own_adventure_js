console.log("hello script js");

///////////////////////////////////////////////////////
// Keep track of what people choose during the game. //
///////////////////////////////////////////////////////
var choicesMade = {};

//////////////////////////////////////////////
// Let's add some achievements just for fun //
//////////////////////////////////////////////
var unknownAchievementText = `? ? ? ? Try different paths to unlock this achievement ? ? ? ?`;

choicesMade.jetPlane = false;
var jetPlaneName = `✈️I'm leaving on a jetplane.✈️`;
var jetPlaneText = `Leave the corporate life behind on a suspiciously priced plane ticket.`;

choicesMade.gotMyselfPromoted = false;
var gotMyselfPromotedName = "📈STONKS📈";
var gotMyselfPromotedText = `Aced the presentation so I got promoted!`;

choicesMade.gotMyselfFired = false;
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
choicesMade.playerName = "playerName";

var choicePrompt = "Please choose from the following:";

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

// WOW something happened.
var inputHappened = function(currentInput){
    document.querySelector('#input').value = ""
    return gameAction(currentInput);
};


var gameAction = function(currentInput) {

    currentInput = currentInput.trim();

    if (gameIndex === 0) {
        choicesMade.playerName = currentInput;
        gameIndex = 1;
        previousChoiceActionText = "Welcome to the game, " + choicesMade.playerName + "!";
        return printCurrentLocation(gameIndex);
    }

    // sanitize the input for after the very first choice.
    currentInput = currentInput.toLowerCase();


    if (currentInput[0] === 'a') {
        return displayAchievements() + "\n" + printCurrentLocation(gameIndex);
    }


    if (checkIsASingleDigitNumber(currentInput)) {
        gameIndex = pickSubOption(currentInput);
        return specialOption(gameIndex);
    } else {
        return "Invalid input, please try again.\n" + printCurrentLocation(gameIndex);
    }

}

///
/// Looks at the active story node.
/// Chooses the index (choiceId) to the destination story node.
///
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


// return a nicely formatted string to display on the console.
var printCurrentLocation = function(gameNode) {
    activeGameSegment = gameStory[gameNode];
    return(`${previousChoiceActionText}\n${activeGameSegment.description}\n\n${choicePrompt} \n ${listChoices(activeGameSegment)} `);
}

//
// Is the input a single-digit integer that is valid for the active story node?
var checkIsASingleDigitNumber = function(currentInput) {
    var integerInput = parseInt(currentInput);
    if ((integerInput <= gameStory[gameIndex].choices.length) && (integerInput > 0)) {
        return integerInput;
    }

    return false;
}

/////////////////////////////////////////////////////////
/// I am 100% sure there's a better way of doing this ///
/////////////////////////////////////////////////////////
var displayAchievements = function() {
    var leavingOnAJetplane = (choicesMade.jetPlane) ? jetPlaneText : unknownAchievementText;
    var gotMyselfFired = (choicesMade.gotMyselfFired) ? gotMyselfFiredText : unknownAchievementText;
    var gotMyselfPromoted = (choicesMade.gotMyselfPromoted) ? gotMyselfPromotedText : unknownAchievementText;
    var annoyGaryGetWalloped = (choicesMade.annoyGary) ? annoyGaryGetWallopedText : unknownAchievementText;
    var beeryGood = (choicesMade.beeryGood) ? beeryGoodText : unknownAchievementText;
    var stockMarketCrash = (choicesMade.stockMarketCrash) ? stockMarketCrashText : unknownAchievementText;
    var outputString = `**ACHIEVEMENTS**\n
--${jetPlaneName}--
${leavingOnAJetplane}\n
--${gotMyselfFiredName}--
${gotMyselfFired}\n
--${gotMyselfPromotedName}--
${gotMyselfPromoted}\n
--${annoyGaryGetWallopedName}--
${annoyGaryGetWalloped}\n
--${beeryGoodName}--
${beeryGood}\n
--${stockMarketCrashName}--
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
                trafficConversation = `\n"Hey man, how come you are in so late? You know the boss is gonna be pissed."\n"I know," you reply, "I ${choicesMade.lateForWork}"\n`;
            };
            if (choicesMade['breakfastChosen'] !== "None") {
                breakfastConversation = `"Yes I had ${choicesMade['breakfastChosen']} this morning."`;
            } else {
                breakfastConversation = `"I skipped breakfast this morning."`;
            };
            outputToReturn = `You walk up to Gary.\n"Hey there ${choicesMade.playerName}. You have breakfast already?"\n${breakfastConversation}${trafficConversation}${printCurrentLocation(inputGameIndex)}`
            return outputToReturn;
        break;


        // the presentation either goes well or badly depending on previous choices.
        case 12:
            var stomachRumbles = "";
            var caughtCheating = "";
            var bossLateComment = "";
            var presentationScore = choicesMade.fudgeThePresentation;
            var goingForBeer = "";

            if (choicesMade.breakfastChosen === "None") {
                stomachRumbles = "Partway through the presentation, your stomach gurgles really loudly. Gary stifles a laugh and your boss does not look impressed.";
            } else {
                stomachRumbles = "You smoothly go through the presentation without a hitch. ";
            }

            if (presentationScore === 1) {
                caughtCheating = "The boss nods in agreement. ";
            } else if (presentationScore === -1) {
                caughtCheating = "You hope these inflated numbers impress your colleagues.\nThe boss looks through a stack of papers and shakes his head. ";
            }

            if (choicesMade.lateForWork) {
                bossLateComment = `"It's nice of you to grace us with your presence, ` + choicesMade.playerName + `." he adds sarcastically.\n`
            }

            if (choicesMade.wantsABeer) {
                goingForBeer = " Gary winks at you and mimes drinking a bottle of beer while he is exiting."
            }

            outputToReturn = `The boss says "Very well, let's see what the sales figures are from the last quarter."\n` + bossLateComment +  'You start the presentation and go through the numbers. ' + caughtCheating + stomachRumbles + "\nAt the end of the presentation everybody awkwardly shuffles out in silence." + goingForBeer + printCurrentLocation(inputGameIndex);
            return outputToReturn;
        break;


            // Summarise all the things that have happened in the game.
        case 13:
            // calculate your score.
            var stomachRumbles = "";
            var caughtCheating = "";
            var bossLateComment = "";

            var bossImpressedScore = 0;
            if (choicesMade.breakfastChosen !== "None") {
                bossImpressedScore++;
            } else {
                stomachRumbles = 'I would suggest you have have something to eat before presenting in future. ';
            }

            bossImpressedScore += choicesMade.fudgeThePresentation;

            if (choicesMade.fudgeThePresentation === 1) {
                caughtCheating = 'I really appreciate you making the charts my favourite colours. '
            } else if (choicesMade.fudgeThePresentation === -1) {
                caughtCheating = 'I am very disappointed that you inflated the numbers. I am going to have to let the team know you lied. '
            };

            if (choicesMade.lateForWork) {
                bossImpressedScore--;
                bossLateComment = "I don't appreciate you being tardy this morning. ";
            };

            var bossComments = 'The boss says "' + choicesMade.playerName + ', I have some comments to make about your presentation."\nYou nervously gulp in anticipation of bad news.\n"' + stomachRumbles + caughtCheating + bossLateComment + 'Unfortunately the numbers have been bad for this quarter. ';

            if (bossImpressedScore < 0) { // Low score = fired
                bossComments = bossComments + `In light of this, I am going to have to fire you."\nYou've been fired!\n** THE END **\n\n${achievementUnlockedText}\n\n${gotMyselfFiredName}\n${gotMyselfFiredText}`;
                choicesMade.gotMyselfFired = true;
                return bossComments + printCurrentLocation(inputGameIndex);
            } else if (bossImpressedScore > 1 ) { // High score = promoted
                if (choicesMade.wantsABeer) { // Have a beer, I don't think this ending is actually reachable
                    bossComments = bossComments + `Despite this, I'm going to give you a promotion! I really hope you'll be able to turn this company's fortunes around."\nYou've been promoted! Gary is very happy, as this means that drinks are on you now!\n** THE END **\n\n${achievementUnlockedText}\n\n${gotMyselfPromotedName}\n${gotMyselfPromotedText}\n\n${beeryGoodName}\n${beeryGoodText}\n`;
                    choicesMade.gotMyselfPromoted = true;
                    choicesMade.beeryGood = true;
                    return bossComments + printCurrentLocation(inputGameIndex);
                } else { // No beer but still a promotion.
                    bossComments = bossComments + `Despite this, I'm going to give you a promotion! I really hope you'll be able to turn this company's fortunes around."\nYou've been promoted!\n** THE END **\n\n${achievementUnlockedText}\n\n${gotMyselfPromotedName}\n${gotMyselfPromotedText}\n`;
                    choicesMade.gotMyselfPromoted = true;
                    return bossComments + printCurrentLocation(inputGameIndex);
                }
            } else if (choicesMade.wantsABeer) { // Presentation is meh but have a beer with Gary.
                bossComments = bossComments + `I really hope with hard work we will be able to turn this company's fortunes around."\nAfter work, you go out for a beer with Gary.\n** THE END **\n\n${achievementUnlockedText}\n\n${beeryGoodName}\n${beeryGoodText}\n`;
                    choicesMade.beeryGood = true;
                    return bossComments + printCurrentLocation(inputGameIndex);
            } else { // The 'worst' ending with no achievement.
                return '"Well that was that" the boss says. You feel like you could have done much better. Or much worse. Would you like to try again?' + printCurrentLocation(inputGameIndex);
            }

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

            1   :   {   // This number is the index of the story node.
    description :   "Good morning! You walk into your kitchen to get some breakfast. What would you like to eat?",
    choices     :   [   {   choiceDescription   :   "Cereal",
                            choiceId            :   2,
                            confirmation        :   "You pick up a packet of Corn Flakes from the cupboard. They are delicious!",
                            variablesToToggle   :   "breakfastChosen",
                            variableValue       :   "a bowl of Corn Flakes",
                        },
                        {   choiceDescription   :   "Kaya Toast",
                            choiceId            :   2,
                            confirmation        :   "You prepare some toast with Kaya spread, it's awesome!",
                            variablesToToggle   :   "breakfastChosen",
                            variableValue       :   "a couple slices of Kaya Toast"
                        },
                        {   choiceDescription   :   "Skip Breakfast and go straight to work",
                            choiceId            :   3,
                            confirmation        :   "You walk straight out the door and go to your car.",
                            variablesToToggle   :   "breakfastChosen",
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
                            variableValue       :   "got stuck in traffic on the PIE. There was a really bad accident.",
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
                            variablesToToggle   :   "fudgeThePresentation",
                            variableValue       :   0,
                        }]
                    },

            5   :   {
    description :   "Looks like sales are pretty low for the last quarter. The boss is unlikely to be happy with your presentation with these numbers.",
    choices     :   [   {   choiceDescription   :   "Redo graph",
                            choiceId            :   10,
                            confirmation        :   "You redo the bar chart with pretty colours and stuff.",
                            variablesToToggle   :   "fudgeThePresentation",
                            variableValue       :   1,
                        },
                        {   choiceDescription   :   "Pad the numbers",
                            choiceId            :   10,
                            confirmation        :   "You change the numbers to make it look more flattering.",
                            variablesToToggle   :   "fudgeThePresentation",
                            variableValue       :   -1,
                        },
                        {   choiceDescription   :   "Leave it as is.",
                            choiceId            :   10,
                            confirmation        :   "You read over your notes again.",
                            variablesToToggle   :   "fudgeThePresentation",
                            variableValue       :   0,
                        },
                        ]
                    },

            6   :   {
    description :   `"uh-huh" Gary says, "You want to grab a beer after work?"`,
    choices     :   [   {   choiceDescription   :   "Sure let's do it.",
                            choiceId            :   10,
                            confirmation        :   "With all the stress of the presentation, a beer to celebrate, or commiserate, sounds like a good idea.",
                            variablesToToggle   :   "wantsABeer",
                            variableValue       :   true,
                        },
                        {   choiceDescription   :   "Nah",
                            choiceId            :   10,
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
                        {   choiceDescription   :   "Let's go to work instead.",
                            choiceId            :   4,
                            confirmation        :   "You drive from the airport to your workplace. Because it's a long journey you've arrived late for work!",
                            variablesToToggle   :   "lateForWork",
                            variableValue       :   "went to the airport for a last minute getaway. Then thought better of it.",
                        },
                        ]
                    },

            8   :   {
    description :   `Just as you board the plane you get a phone call from your boss:
"Where are you?" he shouts. "You're not at the presentation!"
"I'm at the airport" you reply "Screw corporate life!"
"You're fired!" he yells.
You got fired. Shame.
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
Unfortunately the programmer is yet to incorporate a combat system into this game.
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

            10  :   {
    description :   "Your alarm goes off, it's time for your presentation to your boss. You're first in the meeting room and get set up. You're so nervous that the window looks awfully tempting...",
    choices     :   [   {   choiceDescription   :   "Do the presentation",
                            choiceId            :   12,
                            confirmation        :   ""
                        },
                        {   choiceDescription   :   "Jump through the window.",
                            choiceId            :   11,
                            confirmation        :   "You courageously decide to jump through the window and fall to the ground below.",
                            variablesToToggle   :   "stockMarketCrash",
                            variableValue       :   true,
                        },
                    ]
                    },

            11  :   {
    description :   `You land on the ground with a loud *SPLAT* - you are now officially pavement pizza. Even worse, you've also been fired.
** THE END **

${achievementUnlockedText}
${stockMarketCrashName}
${stockMarketCrashText}`,
    choices     :   [   {   choiceDescription   :   "Choose your breakfast again.",
                            choiceId            :   1,
                            confirmation        :   `By the magic of technology you restart the day.\n`,
                        },
                    ]
                    },

            12  :   {
    description :   `\nYour boss is still in the room after everyone else has left. That window sure looks even more tempting now.`,
    choices     :   [   {   choiceDescription   :   "Hear what the boss has to say.",
                            choiceId            :   13,
                            confirmation        :   "",
                            variablesToToggle   :   "stockMarketCrash",
                            variableValue       :   true,
                        },
                        {   choiceDescription   :   "Jump through the window.",
                            choiceId            :   11,
                            confirmation        :   "You courageously decide to jump through the window and fall to the ground below.",
                            variablesToToggle   :   "stockMarketCrash",
                            variableValue       :   true,
                        },]
                    },

            13  :   { // End the game, this is just letting you go back to the beginning again.
    description :   "",
    choices     :   [   {   choiceDescription   :   "Choose your breakfast again.",
                            choiceId            :   1,
                            confirmation        :   `By the magic of technology you restart the day.\n`,
                        },
                    ]
                    },
};

// We start our story at index 0 (this has to be after the story declaration);
var activeGameSegment = gameStory["0"]


display(`${activeGameSegment.description} \n ${listChoices(activeGameSegment)} `);