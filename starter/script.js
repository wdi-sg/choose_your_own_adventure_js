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
	firstScene: true,
	breakCode: undefined
};
var name = prompt("Welcome, what is your name?");
var score = 0;
var gameContinue = true;
var hitpoints = 200; 
var enemies = [{
	type: "soldier",
	strength: 10,
	bonus: 1,
	hp: 100
}, {
	type: "dog",
	strength: 20,
	bonus: 2,
	hp: 50
}, {
	type: "officer",
	strength: 30,
	bonus: 3,
	hp: 100
}];
var encounterNumber = 3;
var hitNumber = 3;
var power = 50;


// Set all variables to undefined

function reset() {
	for (places in scene) {
		scene[places] = undefined;
	}
}

// Battle loop

function battle(a)  {
	function damage() {
		var luck = Math.floor(Math.random() * 2);
		var hit = luck * a.strength;
		hitpoints -= hit;
		switch (hit) {
			case 0:
				alert(`The ${a.type} misses!`);
				break;
			default:
				alert(`The ${a.type} deals ${hit} damage! You are left with ${hitpoints} hitpoints`);
				break;
		}
	}
	alert(`A ${a.type} appeared! The ${a.type} starts attacking!`);
	var hitOrMiss = Math.floor(Math.random() * hitNumber);
	var enemyHp = a.hp;
	damage();
	while (enemyHp > 0 && hitpoints > 0) {
		hitOrMiss = Math.floor(Math.random() * hitNumber);
		switch (hitOrMiss) {
			case 2:
				alert(`Your attack missed!`);
				damage();
				break;
			case 1:
				alert(`You shot the ${a.type}!`);
				enemyHp -= power;
				if (enemyHp <= 0) {
					alert(`The ${a.type} is dead!`);
					score += a.bonus;
					alert(`Your current score is ${score}`);
				} else {
					alert(`The ${a.type} is deeply wounded!`);
					damage();
				}
				break;
			case 0:
				alert(`You knifed the ${a.type}!`);
				enemyHp -= power;
				if (enemyHp <= 0) {
					alert(`The ${a.type} is dead!`);
					score += a.bonus;
					alert(`Your current score is ${score}`);
				} else {
					alert(`The ${a.type} is deeply wounded!`);
					damage();
				}
				break;
			default:
				break;
		}
	}
}

// Random enemy encounter

function encounter() {
	var chance = Math.floor(Math.random() * 5);
	switch (true) {
		case (chance < encounterNumber):
			battle(enemies[chance]);
			break;
		default:
			break;
	}
}


// Introduction

alert(`Lieutenant ${name} has been appointed by the Captain to infiltrate a terrorist base in Kashmar in Iran.\n\nThe mission is to find ${name}'s platoonmate Jason who has been held captive for 2 days.\n\n${name} has been deployed to the outskirts of Kashmar.\n\nAfter 1 day of seeking, ${name} is now right outside of the building where Jason is being captured.`);


// Game begins

while (gameContinue === true) {
	
	if (!(hitpoints <= 0)) {

		// First Scene

		switch (scene.firstScene) {
			case true:
				do {
					scene.buildingAtrium = prompt("You have just entered the atrium of the building and there is a door to the left and a passageway to the right.\nDo you\n(O)pen the door on the left or \n(G)o right:");
					scene.buildingAtrium = scene.buildingAtrium.toUpperCase();
				}
				while (scene.buildingAtrium !== "O" && scene.buildingAtrium !== "G");
				encounter();
				break;
			default:
				break;
		}

		switch (scene.buildingAtrium) {
			case "O":
				do {
					scene.roomOnLeft = prompt("You enter a room with stairs going up and a door to your right. Do you\n(T)ake the stairs;\n(G)o through the door; or\n(R)eturn back to the building atrium:");
					scene.roomOnLeft = scene.roomOnLeft.toUpperCase();
				}
				while (scene.roomOnLeft !== "T" && scene.roomOnLeft !== "G" && scene.roomOnLeft !== "R");
				encounter();
				break;
			case "G":
				do {
					scene.rightPassage = prompt("At the end of the passageway, you find a room and a door to your right. You can see flashes of light coming out from the room. Do you\n(W)ait and check out the room;\n(G)o through the door on the right; \n(S)hoot at first sight; or\n(R)eturn back to atrium:")
					scene.rightPassage = scene.rightPassage.toUpperCase();
				}
				while (scene.rightPassage !== "W" && scene.rightPassage !== "G" && scene.rightPassage !== "S" && scene.rightPassage !== "R");
				encounter();
				break;
			default:
				break;
		}


		


		// Second Scene

			// Open the door on left

		switch (scene.roomOnLeft) {
			case "T":
				do {
					scene.upstairs = prompt("There are some pictures on the wall. One of them is Jason's- tied up in a rope with a thick tape covering his mouth. Looks terrifying. Do you\n(T)ake the photo off the wall;\n(F)ocus on the mission and move on quick; or\n(G)o back downstairs:");
					scene.upstairs = scene.upstairs.toUpperCase();
				}
				while (scene.upstairs !== "T" && scene.upstairs !== "F" && scene.upstairs !== "G");
				encounter();
				break;
			case "G":
				do {
					scene.rightDoor = prompt("Suddenly a door behind opens. Do you\n(R)un for the bend ahead;\n(C)reep behind the door; or\n(D)ash back to the room before:");
					scene.rightDoor = scene.rightDoor.toUpperCase();
				}
				while (scene.rightDoor !== "R" && scene.rightDoor !== "C" && scene.rightDoor !== "D");
				encounter();
				break;
			case "R":
				reset();
				scene.firstScene = true;
				break;
			default:
				break;
		}

			// Go Right 

		switch(scene.rightPassage) {
			case "W":
				do {
					scene.waiting = prompt("Pulling out your gun, you slowly make your way in. There is a TV switched on. Do you\n(S)witch off the TV;\n(H)ide and wait to see if anyone else is coming; or\n(G)o back outside the room:");
					scene.waiting = scene.waiting.toUpperCase();
				}
				while (scene.waiting !== "S" && scene.waiting !== "H" && scene.waiting !== "G");
				encounter();
				break;
			case "G":
				do {
					scene.hostageRoom = prompt("It is locked. There is a number code you need to punch in. What do you enter: (Enter 'Q' to stop)");
					switch (true) {
						case (isNaN(scene.hostageRoom)):
							alert("It is a number code.");
							break;
						case (scene.hostageRoom !== "2805"):
							alert("Wrong code.");
							break
						default:
							break;
					}
				}
				while (scene.hostageRoom !== "Q" && scene.hostageRoom !== "q" && scene.hostageRoom !== "2805");
				switch (true) {
					case (scene.hostageRoom === "Q" || scene.hostageRoom === "q"):
						reset();
						scene.buildingAtrium = "G";
						break;
					case (scene.hostageRoom === "2805"):
						scene.breakCode = true;
						break;
					default:
						break;
				}
				encounter();
				break;
			case "S":
				do {
					scene.shootToKill = prompt("Just when you pull out your gun, a soldier appear and you shoot him in the head. Phew! Do you\n(S)earch his body;\n(R)un along; or\n(T)his is only your imagination and you have not shot anyone:");
					scene.shootToKill = scene.shootToKill.toUpperCase();
				}
				while (scene.shootToKill !== "S" && scene.shootToKill !== "R" && scene.shootToKill !== "T");
				encounter();
				break;
			case "R":
				reset();
				scene.firstScene = true;
				break;
			default:
				break;
		}


		


		// Third Scene

				// Take the Stairs

		switch (scene.upstairs) {
			case "T":
				alert("It is stuck. You quickly use a knife to scrape it off. You notice there is a dose of adrenaline at your feet. You pick it up and shoot yourself with it. Time to head back.");
				hitpoints = 200;
				alert("Bonus: full hitpoints!");
				encounter();
				reset();
				scene.roomOnLeft = "T";
				break;
			case "F":
				alert("You come to a dead end with a table and a cabinet. The cabinet is empty, however you notice there is a dog tag on the table. It reads '2LT JASON SMITH'. You pray for his safety as you turn back.");
				encounter();
				reset();
				scene.roomOnLeft = "T";
				break;
			case "G":
				reset();
				scene.buildingAtrium = "O";
				break;
			default:
				break;
		}

				// Go Through the Door

		switch (scene.rightDoor) {
			case "R":
				alert("You slowly pull out your gun, take a deep breath, and slowly look behind. Nothing. There is nobody in the room ahead. You heave a sigh of relief and go back.");
				encounter();
				reset();
				scene.roomOnLeft = "G";
				break;
			case "C":
				alert("Before the soldier can do anything, you have already knocked him out with a firm chop to the back of the neck. You peek into the room. It has a bed and study table and it looks pretty messy. You search the soldier's body. There is Jason's lucky charm. Finders, keepers so wear it around your neck.");
				encounterNumber = 2;
				alert("Bonus: No more enemy officer!");
				encounter();
				reset();
				scene.roomOnLeft = "G";
				break;
			case "D":
				reset();
				scene.buildingAtrium = "O";
				break;
			default:
				break;
		}



				// -------------------------------------



				// Wait and Check Out the Room

		switch (scene.waiting) {
			case "S":
				alert("TV turned off. There is a note on top of the TV which reads '2805'. Alright, time to go.");
				encounter();
				reset();
				scene.rightPassage = "W";
				break;
			case "H":
				alert("Bad luck. Some enemy(s) came to watch the TV and they seem like they are not about to leave anytime soon. Tired of watching the TV yourself, you emerge from behind the door...");
				encounter();
				encounter();
				encounter();
				reset();
				scene.rightPassage = "W";
				break;
			case "G":
				reset();
				scene.buildingAtrium = "G";
				break;
			default:
				break;
		}

				// Go Through the Door on the Right

		switch (scene.breakCode) {
			case true:
				alert("You have found Jason, in a very very bad shape lying on the floor. It looks like you will have to help him out. On the way out...");
				encounter();
				encounter();
				encounter();
				reset();
				gameContinue = false;
				alert("Congratulations you have successfully rescued Jason!");
				break;
			default:
				break;
		}

				// Shoot at First Sight
	 
		switch (scene.shootToKill) {
			case "S":
				alert("You find a gun on the soldier and it is similar to yours! Now you have 2 guns!");
				power = 100;
				alert("Bonus: double damage!");
				encounter();
				reset();
				scene.rightPassage = "S";
				break;
			case "R":
				alert("There is a sink at the corner rather well hidden from sight. Quickly, you turn on the tap and wash your face and take a few sips of water. Now you feel more energised!");
				hitNumber = 2;
				alert("Bonus: hit percentage = 100%!")
				encounter();
				reset();
				scene.rightPassage = "S";
				break;
			case "T":
				reset();
				scene.buildingAtrium = 'G';
				break;
			default:
				break;
		} 
	} else {
		alert("Sorry you are dead. Let's hope the nation pays tribute to you.");
		break;
	}
}

alert(`${name}'s final score is ${score}`);