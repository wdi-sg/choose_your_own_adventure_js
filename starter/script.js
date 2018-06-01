// put code here!
var scene = {
	buildingAtrium: undefined,
	roomOnLeft: undefined,
	rightPassage: undefined,
	upstairs: undefined,
	rightDoor: undefined,
	waiting: undefined,
	hostageRoom: undefined,
	shootToKill: undefined,
	firstScene: true
};
var name;
var score = 0;
var gameContinue = true;


// Set all variables to undefined
function reset() {
	for (places in scene) {
		scene[places] = undefined;
	}
}


// Ask for name
name = prompt("Welcome, what is your name?");


// Introduction
alert(`Lieutenant ${name} has been appointed by the Captain to infiltrate a terrorist base in Kashmar in Iran.\n\nThe mission is to find ${name}'s platoonmate Jason who has been held captive for 2 days.\n\n${name} has been deployed to the outskirts of Kashmar.\n\nAfter 1 day of seeking, ${name} is now right outside of the building where Jason is being captured.`);


// Game begins

while (gameContinue === true) {
	
	// First Scene

	switch (scene.firstScene) {
		case true:
			scene.buildingAtrium = prompt("You have just entered the atrium of the building and there is a door to the left and a passageway to the right.\nDo you\n(O)pen the door on the left or \n(G)o right:");
			scene.buildingAtrium = scene.buildingAtrium.toUpperCase();
			break;
		default:
			gameContinue = false;
			break;
	}

	switch (scene.buildingAtrium) {
		case "O":
			scene.roomOnLeft = prompt("You entered another room with stairs going up and a door to your right. Do you\n(T)ake the stairs;\n(G)o through the door; or\n(R)eturn to building atrium:");
			scene.roomOnLeft = scene.roomOnLeft.toUpperCase();
			score++;
			break;
		case "G":
			scene.rightPassage = prompt("At the end of the passageway, you find a room with 2 soldiers in it. There is a door to your right. Do you\n(W)ait and hear what they say; or\n(G)o through the door;\n(S)hoot to kill; or\n(R)eturn back to atrium:")
			scene.rightPassage = scene.rightPassage.toUpperCase();
			score++;
			break;
		default:
			gameContinue = false;
			break;
	}





	// Second Scene

		// Open the door on left

	switch (scene.roomOnLeft) {
		case "T":
			scene.upstairs = prompt("There is an AK47 rifle and a sharp knife lying at the top of the stairs. Do you\n(T)ake the rifle and knife;\n(F)ocus on the mission and move on quick instead; or\n(G)o back downstairs:");
			scene.upstairs = scene.upstairs.toUpperCase();
			score++;
			break;
		case "G":
			scene.rightDoor = prompt("Suddenly a door behind opens. Do you\n(R)un for the bend ahead;\n(C)reep behind the door; or\n(D)ash back to the room before:");
			scene.rightDoor = scene.rightDoor.toUpperCase();
			score++;
			break;
		case "R":
			reset();
			scene.firstScene = true;
			score--;
			break;
		default:
			gameContinue = false;
			break;
	}

		// Go Right 

	switch(scene.rightPassage) {
		case "W":
			scene.waiting = prompt("They are talking in a language that you do not understand. Amidst the silence, you hear some soft moans from a corner of the room. You try to angle yourself for a better view and find Jason! Do you\n(H)ave a shootout;\n(A)wait the right moment; or\n(S)top hearing and go back one step:");
			scene.waiting = scene.waiting.toUpperCase();
			score++;
			break;
		case "G":
			scene.hostageRoom = prompt("You find a female hostage. She is muffled and her hands are tied. Do you\n(F)ree her;\n(L)eave them behind and go through the next door; or\n(P)retend you never see her and return into the passageway:");
			scene.hostageRoom = scene.hostageRoom.toUpperCase();
			score += 2;
			break;
		case "S":
			scene.shootToKill = prompt("You managed to kill one, but missed the other. He managed to hide from view. Do you\n(S)earch the room;\n(R)un away; or\n(T)his is only your imagination and you have not shot anyone:");
			scene.shootToKill = scene.shootToKill.toUpperCase();
			score += 2;
			break;
		case "R":
			reset();
			scene.firstScene = true;
			score--;
			break;
		default:
			gameContinue = false;
			break;
	}





	// Third Scene

			// Take the Stairs

	switch (scene.upstairs) {
		case "T":
			alert("'Bang!' Your right shoulder is hit! You quickly turn the next corner to hide. Just as you hear the pistol reloading, you take a chance to shoot at the enemy. He dies but now you are bleeding...");
			score += 2;
			gameContinue = false;
			break;
		case "F":
			alert("You hear some footsteps behind and quickly find a room to hide. The footsteps fade away and you sigh in relief.");
			score++;
			gameContinue = false;
			break;
		case "G":
			reset();
			scene.buildingAtrium = 'O';
			score--;
			break;
		default:
			gameContinue = false;
			break;
	}

			// Go Through the Door

	switch (scene.rightDoor) {
		case "R":
			alert("You managed to hide from the person who is an armed soldier. Lucky you are safe but not Jason.");
			score++
			gameContinue = false;
			break;
		case "C":
			alert("Before the soldier can pull anything you have already knocked him out with a firm chop to the back of the neck. You search his body and find a phone.");
			score += 2;
			gameContinue = false;
			break;
		case "D":
			reset();
			scene.buildingAtrium = 'O';
			score--;
			break;
		default:
			gameContinue = false;
			break;
	}



			// -------------------------------------



			// Wait and Hear What They say

	switch (scene.waiting) {
		case "H":
			alert("You pull out your pistol and take a deep breath. Hit the first guy with 3 shots and without hesitation, you shoot the second one. However, he managed to escape! Whatever. You have Jason now.");
			score += 5;
			gameContinue = false;
			break;
		case "A":
			alert("Someone grab you from behind and before you know it you black out.");
			gameContinue = false;
			break;
		case "S":
			reset();
			scene.buildingAtrium = 'G';
			score--;
			break;
		default:
			gameContinue = false;
			break;
	}

			// Go Through the Door

	switch (scene.hostageRoom) {
		case "F":
			alert("The door opens and you quickly point your pistol to the door. You managed to kill the first guy but let's just say you are just sitting duck waiting for the rest of the enemies to get to you. Good luck!");
			score++;
			gameContinue = false;
			break;
		case "L":
			alert("You have exited the building. Great, you are free to go without Jason.")
			gameContinue = false;
			break;
		case "P":
			reset();
			scene.buildingAtrium = 'G';
			score -= 2;
			break;
		default:
			gameContinue = false;
			break;
	}

			// Shoot to Kill

	switch (scene.shootToKill) {
		case "S":
			alert("You spot a hostage on lying on the floor wounded. It is your Jason! One life saved!");
			score += 4;
			gameContinue = false;
			break;
		case "R":
			alert("You run quickly out of the building. Now you have to leave Jason behind...");
			score++;
			gameContinue = false;
			break;
		case "T":
			reset();
			scene.buildingAtrium = 'G';
			score -= 2;
			break;
		default:
			gameContinue = false;
			break;
	}

} 

// Highest score is lucky 7!
alert(`${name}'s final score is ${score}`);