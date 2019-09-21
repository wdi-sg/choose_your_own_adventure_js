console.log("hello script js");
// global variables
var name = "";
var score = 0;
var storyCount = 0;
var yourHealth = 100;
var output = "";
//character object to store data
// var yourWeapon = "";
// var randomNum = 0;
// var randomNPC = 0;
// var randomWeapon = 0;

// // win cases
// var winEnding = ["you win a", "you win b", "you win c", "you win d", "you win e"];
// //lose cases
// var deadEnding = ["you're dead a", "you're dead b", "you're dead c", "you're dead d", "you're dead e"];

var inputHappened = function(currentInput){
	if (storyCount === 0){
		output = "What is your name?"
		storyCount ++;
		console.log(storyCount);
	} else if (storyCount === 1) {
		name = currentInput;
		output = "Welcome " + name + ", You wake up in a dark cave. Feeling disorientated, you look around the cave and see three tunnels. Which tunnel will you pick? (L/C/R) \n L eft \n C enter \n R ight";
		storyCount ++;
		console.log(storyCount);
	} else if (storyCount === 2) {
		output = partA(currentInput);
		console.log(storyCount);
	} else if (storyCount === 3) {
		output = partB(currentInput);
		console.log(storyCount);
	} else if (storyCount === 4) {
		output = partC(currentInput);
	}
		return output;
};

var partA = function(option){
	if (option === "L") {
	output = "You, " + name + ", entered a brightly lit room with matching furnitures. Light is provided by table lamps. Among the first things you notice walking in are an unusual lamp, a large floor mirror, and a black metal door.\n\n What will you do next?(R/S/O)\n R ub the lamp\n S tare into the mirror\n O pen the door";
	storyCount ++;
	} else if (option === "C") {
	output = "At the end of the tunnel is a forest. The forest was small, crowded, and primal. Its canopy was claimed by larch, cedar, and magnolia, who gave just enough light a chance to descent for an overabundance of plants to flourish in the soft, rich soils below.\n In the distance, you see a woman by the river beckoning you come over. A clamor of wild noises, most of which were fleeing animals, echoed in the air, and were out of sync with the swaying of tree tops in the wind.\n\n Now, " + name + ", what is your next move? (W/G/M) W alk towards the sound of wild noises\n G o towards the woman\n M ove away from the sound and the woman";
	storyCount ++;
	} else if (option === "R") {
	output = "You, " + name + ", exit the tunnel through a tall pair of granite doors. Beyond the pair of granite doors lies a large, broken room. It's covered in large bones, dirt and broken stone. Your torch allows you to see broken arrows, rusty swords and the remains of several humans. At the far end of the room, you see a chest in pristine condition. You step closer to inspect it. Wait, you hear a loud bang in the distance from which you came from.\n\n What will you do next? (C/P/I)\n Check the corpses.\n P lunder the chest\n Investigate the loud bang";
	storyCount ++;
	} else {
	output = output + "\nThis is not an option";
	}
	return output;
}

var partB = function(option){
	var randomNum = Math.floor(Math.random() * 10);
	if (option === "R") {
		output = "You rubbed the lamp. Smoke starts to billow out of the lamp. When the smoke clears, you realised that a man has appeared in the room.\n\n" + npcDescriptionMale[randomNum] + "\n\nHe turns to you and says \"Greetings " + name + ". I have been imprisoned in the lamp for centuries. It's about time someone came along and set me free. Hand the lamp over and I will grant you a wish.\"\n\n (H/M/F)\n H and the lamp over\n M ake a wish\n F ight him";
		storyCount ++;
	} else if (option === "S"){
		output = "You stare into the mirror and instead of your own reflection, you see a man looking back at you.\n\n" + npcDescriptionFemale[randomNum] + "\n\nShe turns to you and says \"Hello " + name + ". Break the mirror and I will lead you out of this place.\"\n (B/R/Q)\n B reak the mirror\n R efuse her\n B ack away slowly";
		storyCount ++;
	} else if (option === "O"){
		output = "You try to open the door but it is stuck. You muster up your strength and pull harder. The door collapsed crushing you in the process.\n\n Game Over " + name + ".\n\n Your score is " + score + ". Better luck next time.\n\n Enter any key to start over";
		storyCount = 0;
		score = 0;
	} else if (option === "W") {
		output = "You rubbed the lamp. Smoke starts to billow out of the lamp. When the smoke clears, you realised that a woman has appeared in the room.\n\n" + npcDescriptionFemale[randomNum] + "\n\nShe turns to you and says \"Greetings " + name + ". I have been imprisoned in the lamp for centuries. It's about time someone came along and set me free. Hand the lamp over and I will grant you a wish.\"\n\n (H/M/F)\n H and the lamp over\n Make a the wish\n F ight her" ;
		storyCount ++;
	} else if (option === "G"){
		output = "You stare into the mirror and instead of your own reflection, you see a woman looking back at you.\n\n" + npcDescriptionFemale[randomNum] + "\n\nShe turns to you and says \"Hello " + name + ". Break the mirror and I will lead you out of this place.\"\n (H/E/A/F)\n H and the lamp over\n E scape towards the door\n A sk about the wish\n F ight her";
		storyCount ++;
	} else if (option === "M"){
		output = " You muster up your strength and pull harder. The door slowly opens revealing another room. \n\n" + npcDescriptionFemale[randomNum] + "\n\n (H/E/A/F)\n H and the lamp over\n E scape towards the door\n A sk about the wish\n F ight her";
		storyCount ++;
	} else if (option === "C") {
		output = "You rubbed the lamp. Smoke starts to billow out of the lamp. When the smoke clears, you realised that a woman has appeared in the room.\n\n" + npcDescriptionFemale[randomNum] + "\n\nShe turns to you and says \"Greetings " + name + ". I have been imprisoned in the lamp for centuries. It's about time someone came along and set me free. Hand the lamp over and I will grant you a wish.\"\n\n (H/M/F)\n H and the lamp over\n Make a the wish\n F ight her" ;
		storyCount ++;
	} else if (option === "P"){
		output = "You stare into the mirror and instead of your own reflection, you see a woman looking back at you.\n\n" + npcDescriptionFemale[randomNum] + "\n\nShe turns to you and says \"Hello " + name + ". Break the mirror and I will lead you out of this place.\"\n (H/E/A/F)\n H and the lamp over\n E scape towards the door\n A sk about the wish\n F ight her";
		storyCount ++;
	} else if (option === "I"){
		output = " You muster up your strength and pull harder. The door slowly opens revealing another room. \n\n" + npcDescriptionFemale[randomNum] + "\n\n (H/E/A/F)\n H and the lamp over\n E scape towards the door\n A sk about the wish\n F ight her";
		storyCount ++;
	} else {
		output + "\nThis is not an option";
	}
	return output;
}

var partC = function(option) {

}

// name, world status, score(int), total score(int), health(int), damage(int),

// waking up in the middle of a dungeon, 3 door ways, which do you pick, to get out, give clues along the way
// encounter enemies, friends based on random,

// function senarios use switch cases, make dynamic scenarios using random number generator

// combat scenarios
// treasure chests when opened give weapons, armor, potions (huge, medium, small)


// npc use objects in array
// call npc with random number generator

// player use objects from chests
// equipments use objects

// loots use chest

// when player attacks enemy and enemy attacks , damage calculator with random number based on percentage of health



// var storyTemplateFriend = [

// ]

// var npc = [
//   {
//     "race": "elf",
//     "health": "50",
//     "weapon": [blade,

//     ]
//       },
//     },
//     {
//       "potions": {
//           "mana": "mana potions",
//           "health": "health potions",
//           "stamina": "stamina potions"
//       },
//     },
//     {
//       "equipments":{
//           "armor": "",
//           "pants": "",
//           "rings": [],
//           "boots": "",
//           "gloves": ""
//       }
//     }
//   ]
// };

// var x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
