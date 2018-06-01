// put code here!
var buildingAtrium, roomOnLeft, rightPassage, upstairs, rightDoor, waiting, hostageRoom, shootToKill;


// Introduction
alert("You have been appointed by your captain to infiltrate a terrorist base in Kashmar in Iran.\n\nThe mission is to find your platoonmate Jason who has been held captive for 2 days.\n\nYou have been deployed at the outskirts of Kashmar where you started your quest.\n\nAfter 1 day of seeking, you are now right outside of the building where he is being captured.");



// First Scene
buildingAtrium = prompt("You have just entered the atrium of the building and there is a door to the left and a passageway to the right.\nDo you\n(O)pen the door on the left or \n(G)o right:");
buildingAtrium = buildingAtrium.toUpperCase();
switch (buildingAtrium) {
	case "O":
		roomOnLeft = prompt("You entered another room with stairs going up and a door to your right. Do you\n(T)ake the stairs or\n(G)o through the door:");
		roomOnLeft = roomOnLeft.toUpperCase();
		break;
	case "G":
		rightPassage = prompt("At the end of the passageway, you find a room with 2 soldiers in it. There is a door to your right. Do you\n(W)ait and hear what they say; or\n(G)o through the door; or\n(S)hoot to kill:")
		rightPassage = rightPassage.toUpperCase();
		break;
}



// Second Scene

	// Open the door on left

switch (roomOnLeft) {
	case "T":
		upstairs = prompt("There is an AK47 rifle and a sharp knife lying at the top of the stairs. Do you\n(T)ake the rifle and knife or\n(F)ocus on the mission and move on quick instead:");
		upstairs = upstairs.toUpperCase();
		break;
	case "G":
		rightDoor = prompt("Suddenly a door behind opens. Do you\n(R)un for the bend ahead or\n(C)reep behind the door:");
		rightDoor = rightDoor.toUpperCase();
		break;
}

	// Go Right 

switch(rightPassage) {
	case "W":
		waiting = prompt("They are talking in a language that you do not understand. Amidst the silence, you hear some soft moans from a corner of the room. You try to angle yourself for a better view and find Jason! Do you\n(H)ave a shootout or\n(A)wait the right moment:");
		waiting = waiting.toUpperCase();
		break;
	case "G":
		hostageRoom = prompt("You find a female hostage. She is muffled and her hands are tied. Do you\n(F)ree her or\n(L)eave them behind and go through the next door:")
		hostageRoom = hostageRoom.toUpperCase();
		break;
	case "S":
		shootToKill = prompt("You managed to kill one, but missed the other. He managed to hide from view. Do you\n(S)earch the room or\n(R)un away:");
		shootToKill = shootToKill.toUpperCase();
		break;
}



// Third Scene

		// Take the Stairs

switch (upstairs) {
	case "T":
		alert("'Bang!' Your right shoulder is hit! You quickly turn the next corner to hide. Just as you hear the pistol reloading, you take a chance to shoot at the enemy. He dies but now you are bleeding...");
		break;
	case "F":
		alert("You hear some footsteps behind and quickly find a room to hide. The footsteps fade away and you sigh in relief.");
		break;
}

		// Go Through the Door

switch (rightDoor) {
	case "R":
		alert("You managed to hide from the person who is an armed soldier. Lucky you are safe but not Jason.");
		break;
	case "C":
		alert("Before the soldier can pull anything you have already knocked him out with a firm chop to the back of the neck. You search his body and find a key. What is it for you wonder");
		break;
}

		// -------------------------------------

		// Wait and Hear What They say

switch (waiting) {
	case "H":
		alert("You pull out your pistol and take a deep breath. Hit the first guy with 3 shots and without hesitation, you shoot the second one. However, he managed to escape! Whatever. You have Jason now.");
		break;
	case "A":
		alert("Someone grab you from behind and before you know it you black out.");
		break;
}

		// Go Through the Door

switch (hostageRoom) {
	case "F":
		alert("The door opens and you quickly point your pistol to the door. You managed to kill the first guy but let's just say you are just sitting duck waiting for the rest of the enemies to get to you. Good luck!");
		break;
	case "L":
		alert("You have exited the building. Great, you are free to go without Jason.")
		break;
		}

		// Shoot to Kill

switch (shootToKill) {
	case "S":
		alert("You spot a hostage on lying on the floor wounded. It is your Jason! One life saved!");
		break;
	case "R":
		alert("You run quickly out of the building. Now you have to leave Jason behind...");
		break;
}
