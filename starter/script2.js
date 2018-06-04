// part 2
var name = prompt(askName); 
if (name === "") {
	name = "Player"
}

//part 3
var score = 0; 

//part 4: Have your player repeat a set of challenges or questions over again- if a player enters a situation or room, allow them to leave and come back if they want.
// created functions to repeat choices

//part 5: Create enemies for your player to face, create weapons that your player can use on the enemies ?!?!?!?!??!
//part 6: randomize eveything ?!?!?!? .........

var letsPlay = function() {
	var choiceOne = prompt(doorWindowFloor);

	if (choiceOne === null) {
		alert(overrideCancel);
		letsPlay();

	} else if (choiceOne.toLowerCase() === "door") {
		score += 100;
		var letsPlayDoor = function() {
			var doorChoice = prompt(forceOrPick);
			var result = "";

			//choiceThree: functions
			var force = function() {
				
				var forceChoice = prompt(punchOrKick);

				if (forceChoice === null) {
					alert(overrideCancel);
					force();

				} else if (forceChoice.toLowerCase() === "punch") {
					score += 100;
					result += resultPunch; // punch and die

				} else if (forceChoice.toLowerCase() === "kick") {
					score += 100;
					result += resultKick; // kicked and died

				} else {
					alert("You have not unlock that move yet.");
					force();
				}
				return result;
			};

			var pickLock = function() {
				
				var pickLockChoice = prompt(searchOrForce)
				
				if (pickLockChoice === null) {
					alert(overrideCancel);
					pickLock();

				} else if (pickLockChoice.toLowerCase() === "search") {
					result += resultSearch;

				} else if (pickLockChoice.toLowerCase() === "force") {
					force(); // loops to parent choice
				
				} else {
					alert("Eh, that's not an option.");
					pickLock();
				
				}
				return result;
			};
			//choiceThree ends

			//choiceTwo: uses functions to run because have loops
			if (doorChoice === null) {
				alert(overrideCancel);
				letsPlayDoor();
			} else if (doorChoice.toLowerCase() === "force") {
				force();      // loops 2nd choice
				alert(result);
			} else if (doorChoice.toLowerCase() === "pick") {
				score += 100;
				pickLock();
				alert(result);
			} else {
				alert("You can't unlock the door with that. Try again.");
				letsPlayDoor(); // repeat letsPlayDoor prompt again until valid answer
			};
			//choiceTwo ends

			return doorChoice;
		};
		letsPlayDoor(); // initiate door option

	} else if (choiceOne.toLowerCase() === "window") {
		score += 100;
		var letsPlayWindow = function() {
			var windowChoice = prompt(breakOrInspect);
			var result = "";

			//choiceThree: functions
			var breakWindow = function() {

				var breakWindowChoice = prompt(jumpOrShout)
				
				if (breakWindowChoice === null) {
					alert(overrideCancel);
					breakWindow();

				} else if (breakWindowChoice.toLowerCase() === "jump") {
					score += 100;
					result += resultJump;

				} else if (breakWindowChoice.toLowerCase() === "shout") {
					score += 100;	
					result += resultShout;
				
				} else {
					alert("I don't think you have time for that.");
					breakWindow();
				
				}
				return result;
			};

			var inspectWindow = function() {

				var inspectWindowChoice = prompt(inspectMoreOrBreak)
				
				if (inspectwindowChoice === null) {
					alert(overrideCancel);
					inspectWindow(); 

				} else if (inspectWindowChoice.toLowerCase() === "inspect") {	//inspectmore
					score += 100;
					result += resultInspect;

				} else if (inspectWindowChoice.toLowerCase() === "break") {
					breakWindow(); // loops 2nd choice
				
				} else {
					alert("Was that a typo? Try again");
					inspectWindow();
				
				}
				return result;
			};
			//choiceThree ends

			//choiceTwo: uses functions to run because have loops
			if (windowChoice === null) {
				alert(overrideCancel);
				letsPlayWindow();
			} else if (windowChoice.toLowerCase() === "break") {
				score += 100;
				breakWindow();
				alert(result);
			} else if (windowChoice.toLowerCase() === "inspect") {
				score += 100;
				inspectWindow();
				alert(result);
			} else {
				alert("Eh, that's not an option. Play seriously! Your life is at stake!");
				letsPlayWindow(); // repeat letsPlayWindow prompt again until valid answer

			};
			//choiceTwo ends

			return windowChoice;
		};
		letsPlayWindow(); // initiate the window option


	} else if (choiceOne.toLowerCase() === "floor") {
		score += 100;
		var letsPlayFloor = function() {
			var floorChoice = prompt(inspectOrJump);
			var result = "";

			//choiceThree: functions
			var inspectFloor = function() {

				var inspectFloorChoice = prompt(openTD);
				if (inspectFloorChoice === null) {
					alert(overrideCancel);
					inspectFloor();

				} else if (inspectFloorChoice.toLowerCase() === "open") {
					score += 100;
					result += resultOpen;
				} else {
					alert("Sorry, you only have one choice here. Heh.");
					inspectFloor();
				}
				return result;
			};

			var jump = function() {
				var jumpTimes = parseInt(prompt(askJumpTimes), );
				if (jumpTimes === null) { // ask!! why does not work
					alert(overrideCancel);
					jump();
				} else if (jumpTimes < 0) {
					alert("Really? You jump negative times lah, let me see.");
					jump(); // repeat choice
				} else if (jumpTimes < 5) {
					score += 100;
					alert(resultJumpLess);
					inspectFloor(); // loops 2nd choice
				} else if (jumpTimes >= 5) {
					score += 100;
					result += resultJumpMore
				} else if (jumpTimes === NaN) { // ask!! why does not work
					alert("You are suppose to choose a number.") 
					jump();
				} else {
					alert("You can't do that now.")
					jump();
				}
				return result;
			};
			//choiceThree ends


			//choiceTwo: uses functions to run because have loops
			if (floorChoice === null) {
				alert(overrideCancel);
				letsPlayFloor();
			} else if (floorChoice.toLowerCase() === "inspect") {
				score += 100;
				inspectFloor();
				alert(result);
			} else if (floorChoice.toLowerCase() === "jump") {
				score += 100;
				jump();
				alert(result);
			} else {
				alert("You can't do that now! Try again.");
				letsPlayFloor(); // repeat letsPlayFloor prompt again until valid answer
			};
			//choiceTwo ends

			return floorChoice;
		};
		letsPlayFloor(); // initiate floor option

	} else {
		alert("You don't see that in the room.. Try again.");
		letsPlay(); // repeat the prompt again until valid answer
	}

	return choiceOne;

}; // end of letsPlay function
letsPlay();


// allocated scores for individual choice but finalScore is always 0 because player dies regardless of choice
finalScore = score - score
alert("Sorry " + name + ", you died. Your score is: " + finalScore)
