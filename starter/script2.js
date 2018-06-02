// part 2
var name = prompt(askName); // add name in story later
//part 3: Assign a score for each task in the game. Report the player's score at the end of the game.
var score = 0; // to add codes to allow player to gain scores
//part 4: Have your player repeat a set of challenges or questions over again- if a player enters a situation or room, allow them to leave and come back if they want.
//part 5: Create enemies for your player to face, create weapons that your player can use on the enemies ?!?!?!?!??!
//part 6: randomize eveything ?!?!?!? .........

var letsPlay = function() {
	var choiceOne = prompt(doorWindowFloor);

	if (choiceOne.toLowerCase() === "door") {
		score += 100;
		var letsPlayDoor = function() {
			var doorChoice = prompt(forceOrPick);
			var result = "";

			//choiceThree: functions
			var force = function() {
				
				var forceChoice = prompt(punchOrKick);

				if (forceChoice.toLowerCase() === "punch") {
					score += 100;
					result += resultPunch; // punch and die

				} else if (forceChoice.toLowerCase() === "kick") {
					score += 100;
					result += resultKick; // kicked and died

				} else {
					alert("Not Valid");
					force();
				}
				return result;
			};

			var pickLock = function() {
				
				var pickLockChoice = prompt(searchOrForce)
				
				if (pickLockChoice.toLowerCase() === "search") { 				// earch
					result += resultSearch;

				} else if (pickLockChoice.toLowerCase() === "force") { 		//force
					force(); // loops to parent choice
				
				} else {
					alert("Not Valid");
					pickLock();
				
				}
				return result;
			};
			//choiceThree ends

			//choiceTwo: uses functions to run because have loops
			if (doorChoice.toLowerCase() === "force") {
				force();      // loops 2nd choice
				alert(result);
			} else if (doorChoice.toLowerCase() === "pick") {
				score += 100;
				pickLock();
				alert(result);
			} else {
				alert("Not valid");
				letsPlayDoor(); // repeat letsPlayDoor prompt again
			};
			//choiceTwo ends

			return doorChoice;
		};
		letsPlayDoor(); // initiate the function above

	} else if (choiceOne.toLowerCase() === "window") {
		score += 100;
		var letsPlayWindow = function() {
			var windowChoice = prompt(breakOrInspect);
			var result = "";

			//choiceThree: functions
			var breakWindow = function() {

				var breakWindowChoice = prompt(jumpOrShout)
				
				if (breakWindowChoice.toLowerCase() === "jump") {
					score += 100;
					result += resultJump;

				} else if (breakWindowChoice.toLowerCase() === "shout") {
					score += 100;	
					result += resultShout;
				
				} else {
					alert("Not Valid");
					breakWindow();
				
				}
				return result;
			};

			var inspectWindow = function() {

				var inspectWindowChoice = prompt(inspectMoreOrBreak)
				
				if (inspectWindowChoice.toLowerCase() === "inspect") {	//inspectmore
					score += 100;
					result += resultInspect;

				} else if (inspectWindowChoice.toLowerCase() === "break") {
					breakWindow(); // loops 2nd choice
				
				} else {
					alert("Not Valid");
					inspectWindow();
				
				}
				return result;
			};
			//choiceThree ends

			//choiceTwo: uses functions to run because have loops
			if (windowChoice.toLowerCase() === "break") {
				score += 100;
				breakWindow();
				alert(result);
			} else if (windowChoice.toLowerCase() === "inspect") {
				score += 100;
				inspectWindow();
				alert(result);
			} else {
				alert("Not valid");
				letsPlayWindow(); // repeat letsPlayWindow prompt again

			};
			//choiceTwo ends

			return windowChoice;
		};
		letsPlayWindow(); // initiate the function above


	} else if (choiceOne.toLowerCase() === "floor") {
		score += 100;
		var letsPlayFloor = function() {
			var floorChoice = prompt(inspectOrJump);
			var result = "";

			//choiceThree: functions
			var inspectFloor = function() {

				var inspectFloorChoice = prompt(openTD);
				if (inspectFloorChoice.toLowerCase() === "open") {
					score += 100;
					result += resultOpen;
				}
				return result;
			};

			var jump = function() {
				var jumpTimes = parseInt(prompt(askJumpTimes));
				if (jumpTimes >= 5) {
					score += 100;
					result += resultJumpMore
				} else if (jumpTimes < 0) {
					alert("Let's be serious..");
					jump(); // repeat choice
				} else {
					score += 100;
					alert(resultJumpLess);
					inspectFloor(); // loops 2nd choice
				}
				return result;
			};
			//choiceThree ends


			//choiceTwo: uses functions to run because have loops
			if (floorChoice.toLowerCase() === "inspect") {
				score += 100;
				inspectFloor();
				alert(result);
			} else if (floorChoice.toLowerCase() === "jump") {
				score += 100;
				jump();
				alert(result);
			} else {
				alert("Not valid");
				letsPlayFloor(); // repeat letsPlayFloor prompt again
			};
			//choiceTwo ends

			return floorChoice;
		};
		letsPlayFloor(); // initiate the function above

	} else {
		alert("Not valid");
		letsPlay(); // repeat the prompt again
	}

	return choiceOne;

}; // end of letsPlay function

letsPlay();


// allocated scores for individual choice but finalScore is always 0 because player dies regardless of choice
finalScore = score - score
alert(name + "\'s score is: " + finalScore)
