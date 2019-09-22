console.log("hello script js");
// global variables
var name = "";
var score = 0;
var storyCount = 0;
// var yourHealth = 100;
var output = "";
// var randomArt = (Math.floor(Math.random) * 5);
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
    getName();
	} else if (storyCount === 1) {
    output = intro(currentInput);
	} else if (storyCount === 2) {
		output = partA(currentInput);
	} else {
		output = partB(currentInput);
  }
	// } else if (storyCount === 4) {
	// 	output = partC(currentInput);
	// }
		return output;
};

var getName = function(){
  var randomArt = Math.floor((Math.random() * 3) + 2); 
  output = `What is your name?\n\n${asciiArt[randomArt]}`;
  storyCount ++;
}

var intro = function(option){
  var randomArt = Math.floor((Math.random() * 3) + 2); 
		name = option;
		output = `Welcome ${name}. You wake up in a dark cave. Feeling disorientated, you look around the cave and see three tunnels. \n\nWhich tunnel will you pick? (L/C/R) \n L eft \n C enter \n R ight\n\n${asciiArt[randomArt]}`;
    storyCount ++;
    return output;
}

var partA = function(option){
  var randomArt = Math.floor((Math.random() * 3) + 2); 
	if (option === "L") {
  score = score + 3;
	output = `You, ${name}, entered a brightly lit room with matching furnitures. Light is provided by table lamps. Among the first things you notice walking in are an unusual lamp, a large floor mirror, and a black metal door.\n\n What will you do next?(R/S/O)\n R ub the lamp\n S tare into the mirror\n O pen the door\n\n${asciiArt[randomArt]}`;
	storyCount ++;
	} else if (option === "C") {
  score = score + 2;
	output = `At the end of the tunnel is a forest. The forest was small, crowded, and primal. Its canopy was claimed by larch, cedar, and magnolia, who gave just enough light a chance to descent for an overabundance of plants to flourish in the soft, rich soils below.\n\n In the distance, you see a woman by the river beckoning you come over. A clamor of wild noises, most of which were fleeing animals, echoed in the air, and were out of sync with the swaying of tree tops in the wind.\n\n Now, ${name}, what is your next move? (W/G/M)\n W alk towards the noises\n G o towards the woman\n M ove away from the sound and the woman\n\n${asciiArt[randomArt]}`;
	storyCount ++;
	} else if (option === "R") {
  score = score + 2;
	output = `You, ${name}, exit the tunnel through a tall pair of granite doors. Beyond the pair of granite doors lies a large, broken room. It's covered in large bones, dirt and broken stone. Your torch allows you to see broken arrows, rusty swords and the remains of several humans. At the far end of the room, you see a chest in pristine condition. You step closer to inspect it. Wait, you hear a loud bang in the distance from which you came from.\n\n What will you do next? (C/P/I)\n C heck the corpses.\n P lunder the chest\n I nvestigate the loud bang\n\n${asciiArt[randomArt]}`;
	storyCount ++;
  } 
  // } else {
	// output = output + "\nThis is not an option";
	// }
	return output;
}

var partB = function(option){
  var randomNum = Math.floor(Math.random() * 10);
  var randomEnd = Math.floor(Math.random() * 2);
	if (option === "R") {
    score = score + endings.optionR.score[randomEnd];
    output = `You rubbed the lamp. Smoke starts to billow out of the lamp. When the smoke clears, you realised that a man has appeared in the room.\n\n${npcDescriptionMale[randomNum]}\n\n` + endings.optionR.text[randomEnd] + startOver(randomEnd);
	} else if (option === "S"){
    score = score + endings.optionS.score[randomEnd];
		output = `You peer into the floor mirror and instead of your own reflection, you see a woman looking back at you.\n\n${npcDescriptionFemale[randomNum]}\n\n` + endings.optionS.text[randomEnd] + startOver(randomEnd);
	} else if (option === "O"){
    score = score + endings.optionO.score[randomEnd];
		output = endings.optionO.text[randomEnd] + startOver(randomEnd);
	} else if (option === "W") {
    score = score + endings.optionW.score[randomEnd];
    output = endings.optionW.text[randomEnd] + startOver(randomEnd);
	} else if (option === "G"){
    score = score + endings.optionG.score[randomEnd];
		output = `You make your way towards the woman by the river.\n\n ${npcDescriptionFemale[randomNum]}\n\n` + endings.optionG.text[randomEnd] + startOver();
	} else if (option === "M"){
    score = score + endings.optionM.score[randomEnd];
		output = endings.optionM.text[randomEnd] + startOver(randomEnd);
	} else if (option === "C") {
    score = score + endings.optionC.score[randomEnd];
		output = endings.optionC.text[randomEnd] + startOver(randomEnd);
	} else if (option === "P"){
    score = score + endings.optionP.score[randomEnd];
		output = endings.optionP.text[randomEnd] + startOver(randomEnd);
	} else if (option === "I"){
    score = score + endings.optionI.score[randomEnd];
		output = endings.optionI.text[randomEnd] + startOver(randomEnd);
  }
	// } else {
	// 	output + "\nThis is not an option";
  // }
  console.log(randomEnd)
	return output;
}

var startOver = function(endingOption) {
  console.log(endingOption);
if (endingOption === 0) {
  var randomArt = Math.floor(Math.random() * 2);
  var append = `\n\nYour score is ${score}. Better luck next time, ${name}. Enter any key to start over.\n\n${asciiArt[randomArt]}`;
} else {
  var randomArt = Math.floor((Math.random() * 3) + 2);
  var append = `\n\nYour score is ${score}. Well Done, ${name}. Enter any key to start over.\n\n${asciiArt[randomArt]}`;
}
  storyCount = 0;
  score = 0;
  return append;
}
// var partC = function(option) {

// }

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
