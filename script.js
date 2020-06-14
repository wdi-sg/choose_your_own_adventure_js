var dialogue = ["what's your name",
                "where would you like to go?",
                "what would you like to do?",
                "for how long",
                "is it time to go home?"
               ]
var levelOne = ["beach", "mountains", "jungle"]
var levelTwo = ["swimming", "sunbathe", "pick trash"]
var levelThree = ["one hour", "two hours", "three hours"]
var levelFour = ["bbq", "skiing","read"]
var levelFive = ["yes", "no", "not sure"]
var state = 0;
var selectOption = function(input) {
  if (levelOne[0] == input) {
     state = 2;
    return dialogue[2];
  } else if (levelOne[1] == input) {
    state = 2;
    return dialogue[2];
  } else if (levelOne[1] == input) {
    state = 2;
    return dialogue[2];
  }
  if (levelTwo[0] == input) {
     state = 3;
    return dialogue[3];
  } else if (levelTwo[1] == input) {
    state = 3;
    return dialogue[3];
  } else if (levelTwo[1] == input) {
    state = 3;
    return dialogue[3];
  }
  if (levelThree[0] == input) {
     state = 3;
    return dialogue[4];
  } else if (levelThree[1] == input) {
    state = 3;
    return dialogue[4];
  } else if (levelThree[1] == input) {
    state = 3;
    return dialogue[4];
  }
}

var inputHappened = function(currentInput){
  if (state == 0) {
    state = 1;
    buttonChange("button1",levelOne[0]);
    buttonChange("button2",levelOne[1]);
    buttonChange("button3",levelOne[2]);
    return ("hello " + currentInput + " " + dialogue[1])
    } else if (state == 1) {
    buttonChange("button1",levelTwo[0]);
    buttonChange("button2",levelTwo[1]);
    buttonChange("button3",levelTwo[2]);
    return selectOption(currentInput);
   } else if (state == 2) {
    buttonChange("button1",levelThree[0]);
    buttonChange("button2",levelThree[1]);
    buttonChange("button3",levelThree[2]);
    return selectOption(currentInput);
  } else if (state == 3) {
    buttonChange("button1",levelFive[0]);
    buttonChange("button2",levelFive[1]);
    buttonChange("button3",levelFive[2]);
    return selectOption(currentInput);
  }
};

var buttonChange = function(name, newValue) {
  document.getElementById(name).value = newValue;
};

/*
[{
        locationOne: "home",
        textOne: "Because of Covid, you are stuck at home and can only travel virtually. Where would you like to go?"
    },
    {
        locationOne: "beach",
        textOne: "You have arrived at the Amalfi Coast. What would you like to do?",
        optionsOne: [{
                actionTwo: "swimming",
                textTwo: "You got into the water. You see a shark. What do you do?",
                optionsTwo: [{
                        actionThree: "fight",
                        textThree: "You're wrestle the shark and hurt its feelings. Do you... ?",
                        optionsThree: [{
                                actionFour: "keep fighting",
                                textFour: "You're mean. Go home."
                            },
                            {
                                actionFour: "apologise",
                                textFour: "The shark has left. Go home and reflect on your actions."
                            }
                        ]
                    },
                    {
                        actionThree: "pretend to be dead",
                        textThree: "The shark gets curious and wants to make friends.",
                        optionsThree: [{
                                actionFour: "make friends",
                                textFour: "You guys hangout till it's time for you to go home."
                            },
                            {
                                actionFour: "continue to play dead",
                                textFour: "You do it so well, you actually died. Goodbye."
                            }
                        ]

                    }
                ]
            },
            {
                actionTwo: "sunbathing",
                textTwo: "do you remember to put on sunblock?",
                optionsTwo: [{
                        actionThree: "yes",
                        textThree: "You're protected from the sun. How bout some reading?",
                        optionsThree: [{
                                actionFour: "yes",
                                textFour: "You came home smarter and with a nice tan."
                            },
                            {
                                actionFour: "no",
                                textFour: "Your mother scold you. Go home and read a book."
                            }
                        ]
                    },
                    {
                        actionThree: "no",
                        textThree: "You got a bad sunburn. What next?",
                        optionThree: [{
                                actionFour: "cry",
                                textFour: "Cry until go home. Goodbye."
                            },
                            {
                                actionFour: "put aloe vera",
                                textFour: "You feel a lot better and enjoy the rest of your holiday."
                            }
                        ]
                    }

                ]
            },
            {
                locationOne: "outerspace",
                textOne: "You don't survive the journey. You die. Goodbye."
            }
        ]
*/