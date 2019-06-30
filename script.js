var userName = ""; // to record user's name
var choicesMade = []; //to record the choices the user made
var numberOfChoices = 3; //initial value for number of choices
var adventure = { //adventure object
	story: "Who do you want as your starter Pokemon?\n\n",
	choices: [{
		choice: "Bulbasaur",
		story: "You picked Bulbasaur, a Grass type.\nYou and Squirtle went into the tall grass and someone nearby challenges you to a battle. He sends out a Pidgey, a Flying type Pokemon.\n\nWhich move do you use?",
		choices: [{
			choice: "Growl",
			story: "Bulbasaur growl in an endearing way.\nBoth the challenger and his Pidgey looks charmed by it. They decide to call of the battle and asked if you and Bulbasaur would like to hang out. The four of you went to an nearby eatery and became good buddies after.",
                choices: [{
                    choice: "Replay adventure",
                    restart: true,
                }]
		}, {
			choice: "Razor Leaf",
			story: "Bulbasaur shot razor leaves.\nHowever, Pidgey managed to dodged the leaves with much ease. Suddenly, you hear the challenger shouting 'Ouch'. He is on his knees and his shoulders is bleeding. It seems that one of the leaves have cut him.\n\nWhat do you do?",
			choices: [{
				choice: "Help him up",
				story: "He is grateful for your kindness and want to repay you for life.",
                choices: [{
                    choice: "Replay adventure",
                    restart: true,
                }]
			}, {
				choice: "TACKLEEEEE!",
				story: "Bulbasaur looked at you with a disappointed face.\nIt use it's vines to help the challenger up and carry him off, possibly towards a nearby clinic. Pidgey quickly follow them. You are left alone in the tall grass and you have no more Pokemon.",
                choices: [{
                    choice: "Replay adventure",
                    restart: true,
                }]
			}]
		}, {
			choice: "Vine Whip",
			story: "Bulbasaur began to strike Pidgey with its whiplike vines.\nThat strike was very effective and Pidgey fainted. The challenger kept Pidgey in the Pokeball and seems to be on the verge of tearing up.\n\nWhat do you say?",
			choices: [{
				choice: "It's alright, we can always battle again.",
				story: "The challenger looked at you and stood up. He declared you as his rival and ran home. From then on, he would always bug you everyday, challenging you to battle.",
                choices: [{
                    choice: "Replay adventure",
                    restart: true,
                }]
			}, {
				choice: "Noob",
				story: `The challenger started bawling and ran home.\nAfter that day, you became widely know as ${userName} the stone-hearted trainer.`,
                choices: [{
                    choice: "Replay adventure",
                    restart: true,
                }]
			}]
		}]
	}, {
		choice: "Charmander",
		story: "You picked Charmander, a Fire type.\nYou and Charmander went into the tall grass to catch Pokemon. However, A brush fire starts because of the fire on it's tail and you were never seen again.",
        choices: [{
            choice: "Reincarnate and try again",
            restart: true
        },{
            choice: "Rewind time and try again",
            restart: true
        }]
	}, {
		choice: "Squirtle",
		story: "You picked Squirtle, a Water type.\nYou and Squirtle walk into the tall grass to catch Pokemon. Both of you walked for hours and did no encounter any Pokemon. Seeing Squirtle looking tired, you took out an apple from your bag and gave it. You then hear a sound at a nearby bush.\n\nWhat do you do?",
		choices: [{
			choice: "Take a peek",
			story: "You and Squirtle slowly approach the bush. Suddenly, a yellow blob moved quickly before your eyes and Squirtle let out a squeak. You found Pikachu and it is pulling Squirtle's tail.\n\nWhat moves should we tell Squirtle to use?",
			choices: [{
				choice: "Bubble",
				story: "Squirtle threw Pikachu immediately stopped pulling Squirtle's tail and swiftly dodge all of the bubbles. Pikachu then snatched Squirtle's apple before running away. Squirtle looks disheartened and you decide to go home so both of you go grab dinner.",
                choices: [{
                    choice: "Replay adventure",
                    restart: true,
                }]
			}, {
				choice: "Tackle",
				story: "Squirtle managed to pin Pikachu down after tackling. Just before Pikachu faint, a burst of lightning emerged from Pikachu, making Squirtle faint as well. You carry both of them and bring them to the nearest Pokemon Center to heal them.",
                choices: [{
                    choice: "Replay adventure",
                    restart: true,
                }]
			}, {
				choice: "Do nothing",
				story: "After doing nothing and watching them squabble.\nYou noticed Pikachu is actually trying to grab Squirtle's apple. You took out another apple from your bag and handed it to Pikachu. It was very pleased and followed you and Squirtle back home after.",
                choices: [{
                    choice: "Replay adventure",
                    restart: true,
                }]
			}]
		}, {
			choice: "Head back",
			story: "You are tired and decided not to take a look.\nYou brought Squirtle back to your home and will continue your journey the next day.",
            choices: [{
                choice: "Replay adventure",
                restart: true,
            }]
		}]
	}]
}

var startAdventure = function (userInput) {
    //if there is no recorded user name
	if (!userName) {
        //save user name
		userName = userInput;

        //set current story question and prompt user to make their first choice
		let currentQuestion = `Okay ${userName}! ` + adventure.story;
		displayQuestion(currentQuestion);

        //get the list of choices from the adventure choice object
        let currentChoices = "";
		for (var i = 0; i < adventure.choices.length; i++) {
			currentChoices += `${i + 1}. ${adventure.choices[i].choice}\n`
		}
        //display the list of choices
		displayChoices(currentChoices);
	}
    //if there is a recorded user name
    else {
        //check if user's choice is among the choices
		userChoice = parseInt(userInput.trim());
		if (isNaN(userChoice) || userChoice < 1 || userChoice > numberOfChoices) {
            //display error message if user's choice is invalid
			displayError("Please select one of the choices!\n e.g. 1, 2 or 3");
		} else {
            //add to choicesMade array if user's choice is valid
			choicesMade.push((userChoice - 1));
            //progress story
			storyProgress()
		}
	}
}

var storyProgress = function () {
    //initalise current question and list of choices to empty string
	let currentQuestion = "";
	let currentChoices = "";
    //set position of story as adventure object
    let currentPosition = adventure

    //update the current position of story using choicesMade's length.
    for (var i=0;i<choicesMade.length; i++) {
        currentPosition = currentPosition.choices[choicesMade[i]];
    }
    // if currentPosition object have restart
    if (currentPosition.restart) {
        //clear recorded user name and the choices the user have made
        userName = "";
        choicesMade = [];
        numberOfChoices = 3;
        currentQuestion ="Hello there! You can now begin your journey as a Pokemon Trainer.\n\nMay I get your name?";
    }
    // if currentPosition object do not have restart
    else {
        //get story from currentPosition  set it as current question
        currentQuestion = currentPosition.story;
        //get list of choices from currentPosition and display it
        for (var i = 0; i < currentPosition.choices.length;i++){
            currentChoices += `${i + 1}. ${currentPosition.choices[i].choice}\n`;
        }
        //set number of choices available for choice validation
        numberOfChoices = currentPosition.choices.length;
    }
    displayChoices(currentChoices);
	displayQuestion(currentQuestion);
}