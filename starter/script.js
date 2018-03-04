var playerName = prompt("Please enter your desired name");
var playerAge = prompt("Please enter your age here");
var age = parseInt(playerAge);
var totalScore = 0;

gameStart();

function gameStart() {
	while (isNaN(age) == true) {
		playerAge = prompt("Please enter your age here");
		age = parseInt(playerAge);
	} if (isNaN(age) == false) {
		startingQn = prompt(playerName + " is in a room with 2 doors, Black and White. Which will " + playerName + " choose? (B/W)").toLowerCase();
		while (startingQn !== "b" && startingQn !== "w") {
			startPrompt();
		} if (startingQn === "b") {
			darkPath();
		} else if (startingQn === "w") {
			whitePath();
		}
	}
};


function darkPath() {
	darkRoom = prompt(playerName + " entered a dark room and felt a breeze coming from the other end of the room but " + playerName + " sensed another presence as well. Search for the Light or run towards the Breeze? (L/B)").toLowerCase();
	while (darkRoom !== "l" && darkRoom !== "b") {
		darkPrompt();
	} if (darkRoom === "l") {
		lightSwitch = prompt("There was another deaf creature at the corner of the room, upon catching sight of " + playerName + " it aggressively lunged towards " + playerName + "." + " Fight back, try to Escape or Go back to previous options? (F/E/G)").toLowerCase();
		while (lightSwitch !== "f" && lightSwitch !== "e" && lightSwitch !== "g") {
			lightPrompt();
		} if (lightSwitch === "f") {
			totalScore += 3
			var battleCreature = alert("Good choice, the creature was weak and starving, " + playerName + " managed to grab hold of the nearest object and defeated it! " + playerName + " felt a strange surge of sensation through his body. Player Score = " + totalScore);
		} else if (lightSwitch === "e") {
			var attemptEscape = alert("Coward, There is nowhere to run! " + playerName + " got devoured by the starving creature. Game over! Player Score = " + totalScore);
		} else if (lightSwitch === "g") {
			repeatDarkPath = prompt("Do you want to repeat the Dark room or back to the Beginning? (D/B)").toLowerCase();
			while (repeatDarkPath !== "d" && repeatDarkPath !== "b") {
				darkPathPrompt();
			} if (repeatDarkPath === "d") {
				darkPath();
			} else if (repeatDarkPath === "b") {
				gameStart();
			}
		}
	} else if (darkRoom === "b") {
		var abyss = alert(playerName + " ran towards the direction of the breeze and ended up falling into an abyss. Game over! Player Score = " + totalScore);
	}
};

function whitePath() {
	whiteDoor = prompt(playerName + " entered a white empty room with a staff on an empty throne and another white door at the end of the room. Grab Staff or head towards the Door? (S/D)").toLowerCase();
	while (whiteDoor !== "s" && whiteDoor !== "d") {
		whitePrompt();
	} if (whiteDoor === "s") {
		sleepingMage = prompt("As " + playerName + " touches the staff, a Mage appears on the throne. The mage appears to be asleep. Wake him up, Steal his staff or Go back to previous options? (W/S/G)").toLowerCase();
		while (sleepingMage !== "w" && sleepingMage !== "s" && sleepingMage !== "g") {
			magePrompt();
		} if (sleepingMage === "w") {
			totalScore += 5
			var giftReward = alert("Oh you must be " + playerName + ", I have been waiting for you! Mage hands staff to " + playerName + " and vanishes. " + playerName + " acquired magical powers. Player Score = " + totalScore);
		} else if (sleepingMage === "s") {
			var angryMage = alert("The Mage woke up furious and spouted a few incantations, " + playerName + " has been burnt to crisp. Game over! Player Score = " + totalScore);
		} else if (sleepingMage === "g") {
			repeatWhitePath = prompt("Do you want to repeat the White room or go back to the Beginning? (W/B)").toLowerCase();
			while (repeatWhitePath !== "w" && repeatWhitePath !== "b") {
				whitePathPrompt();
			} if (repeatWhitePath === "w") {
				whitePath();
			} else if (repeatWhitePath === "b") {
				gameStart();
			}
		}
	} else if (whiteDoor === "d") {
		var snow = alert(playerName + " enters the door into another dimension covered in never-ending snow. The door behind shuts and vanishes, " + playerName + " eventually froze to death. Game over! Player Score = " + totalScore);
	}
};


function startPrompt() {
	startingQn = prompt("Sorry, that was an invalid response. Please enter either 'B' or 'W' (B/W)").toLowerCase();
};

function darkPrompt() {
	darkRoom = prompt("Sorry, that was an invalid response. Please enter either 'L' or 'B' (L/B)").toLowerCase();
};

function lightPrompt() {
	lightSwitch = prompt("Sorry, that was an invalid response. Please enter either 'F', 'E' or 'G' (F/E/G)").toLowerCase();
};

function whitePrompt() {
	whiteDoor = prompt("Sorry, that was an invalid response. Please enter either 'S' or 'D' (S/D)").toLowerCase();
};

function magePrompt() {
	sleepingMage = prompt("Sorry, that was an invalid response. Please enter either 'W', 'S' or 'G' (W/S/G)").toLowerCase();
};

function darkPathPrompt() {
	repeatDarkPath = prompt("Sorry, that was an invalid response. Do you want to repeat the Dark room or back to the Beginning? (D/B)").toLowerCase();
};

function whitePathPrompt() {
	repeatWhitePath = prompt("Do you want to repeat the White room or go back to the Beginning? (W/B)").toLowerCase();
};