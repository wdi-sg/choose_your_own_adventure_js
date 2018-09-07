// prompt for user name
var userName = prompt("Welcome to Azeroth! What is your name adventurer?");
var alphabets = /^[a-zA-Z]+$/;

if(userName.match(alphabets)) {
	alert("Greetings " + userName + "!");
	console.log("Greetings " + userName + "!");
}
else {
	alert("Username has to contain only alphabets");
	userName = prompt("Welcome to Azeroth! What is your name adventurer?");
	alert("Greetings " + userName + "!");
};

// make array for userScore
userScore = [];

// Make decision
function startQuest() {
var reqDest = alert("Would you like to: 1. Explore the Firelands, " + " 2. Explore Deepholms " + " 3. Explore Skywall?");
var chosenDest = prompt("Enter your choice:");
};

// Enter Firelands
if(chosenDest == "1") {
	console.log("Entered Firelands");
	var fireLands = alert("You have entered into the Elemental Plane of Fire and continue to trudge on. Nearby, a Magma Cave loomed into view and you also hear rumbling footsteps approaching.");
	var fireDest = prompt("Will you: 1. Explore the Magma Cave? " + "OR" + " 2. Hold your ground while the footsteps gets louder?");
};
// Enter Magma Cave or Ragnaros
if(fireDest == "1") {
	console.log("Entered Magma Cave");
	alert("The cave walls are lined with egg sacs and you can see Fire Spiders crawling about. Thousands of eyes focused upon you as they saw you enter their home.");
	var fireSpiders = prompt("1. Charge the spiders! " + "OR" + " 2. Run away!!!");
}
else if(fireDest == "2") {
	console.log("Encounter Ragnaros");
	alert("The massive figure of Lord Ragnaros emerged from behind you. You cowered in fear as you see it taking a swipe at you with it's fist. Staring helplessly as you are about to be squished to death...")
	userScore.push(0);
};
// Fire Spiders, Fight or Run
if(fireSpiders == "1") {
	console.log("Fight Fire Spiders");
	alert("You brandished your weapons and started hacking away at the spiders. Soon, spider carcasses littered the ground and you emerged victorious while drenched in putrid blood.");
	userScore.push(2);
}
else if(fireSpiders == "2") {
	console.log("Run away from Fire Spiders");
	alert("You started running deeper into the cave while the Fire Spiders gave chase. As you were frantically making your escape, you didn't notice the lava pit in front and fell to your death. AAARRRGGHH!");
	userScore.push(1);
};

// Enter Deepholms
if(chosenDest == "2") {
	console.log("Entered Deepholms");
	var deepHolms = alert("You hear a piercing screech from the sky as a huge shadow passed by above you. Mighty gust of winds blew at you as the dragon, Deathwing circles the sky above.");
	var deepDest = prompt("Will you: 1. Challenge Deathwing to a duel? " + "OR" + " 2. Rally for allies?");	
};

// Challenge Deathwing or call for help
if(deepDest == "1") {
	console.log("Challenge Deathwing");
	alert("As you yelled your battlecry at Deathwing, the dragon made a swoop at you. You got incinerated by Deathwing's breathe of fire.");
	userScore.push(0);
}
else if(deepDest == "2") {
	console.log("Rally for allies");
	var allegience = prompt("1. Approach the Alliance for help? " + "OR" + " 2. Call upon the Horde for assistance?");	
	userScore.push(1);
};
// Alliance or Horde
if(allegience == "1") {
	console.log("For the Alliance");
	alert("You see a party of dwarfs, elves and gnomes rallying to your call. 'Lord "  + userName + "! Do not fear, we heard your call and will stand by you. FOR THE ALLIANCE!'");
	userScore.push(2);
}
else if(allegience == "2") {
	console.log("For the Horde")
	alert("You see a party of orcs, trolls and taurens assembling behind you. 'Chieftain " + userName + "! Do not fear, we heard your call and will stand by you. FOR THE HORDE!'");
	userScore.push(2);
};
// Enter Skywall
if(chosenDest == "3") {
	console.log("Entered Skywall");
	alert("After a long hike up, you reached the Vortex Pinnacle. Its elegant structures made of bronze and gold, sitting atop platforms bridged by pure air, lay sprawled before you eyes");
	var skyWall = prompt("Would you: 1. Head over to the floating mines further down the vally? " + "OR" + " 2. Continue onwards towards the stronghold ahead?");	
};
// Enter floating mines
if(skywall == "1") {
	console.log("Entered floating mines");
	alert("Thousands of crystal veins lined the walls of the mines. Without hesitation, you picked up a nearby pickaxe and started mining for Skyshards. After filling up your backpack with those shards, you decided to leave the mines before getting caught.");
	userScore.push(3);
}
// Trials of the Gods
else if(skywall == "2") {
	console.log("Entered Pantheon");
	alert("You enterd into the Pantheon and sees three massive titans standing in the hallway.");
	var trial = prompt("Welcome " + userName + ", to the Trial of the Gods!" + " Who will you challenge today?"+ " 1. Myself, Odyn" + "OR" + " 2. Freya" + "OR" + " 3. Hymdall");
};

if(trial == "1") {
	console.log("Fight Odyn");
	alert("Fight Odyn");
	userScore.push(3);
}
else if(trial == "2") {
	console.log("Fight Freya");
	alert("Fight Freya");
	userScore.push(3);
}
else if(trial == "3") {
	console.log("Fight Hymdall");
	alert("Fight Hymdall");
	userScore.push(3);
};
	
function countScore(count) {
	var score = 0
	for( i = 0; i < count.length; i++) {
		score += count[i];
	};
	console.log(score);
	alert(userName + ", your adventure has ended! You have scored " + score + " points!");
};

countScore(userScore);