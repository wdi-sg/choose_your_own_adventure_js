console.log("hello script js");
// global variables
var name = "";
var score = 0;
var storyCount = 0;
var output = "";
var body = document.querySelector("body");

var domCss = function() {
  document.querySelector("#input").style.color= "white";
  document.querySelector("#input").style.border="3px solid rgb(200, 200, 200)";
  document.querySelector("#input").style.backgroundColor= "rgba(100, 0, 0, 0.8)";
  document.querySelector("#output").style.backgroundColor= "rgba(100, 0, 0, 0.8)";
  document.querySelector("#output").style.color= "white";
  document.querySelector("#output").style.border="3px solid rgb(200, 200, 200)";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "100% 100%";
  console.log(storyCount);
  if (storyCount === 0) {
    body.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0558/2081/files/AdventureTime_Caltsoudas_RegSm_1024x1024.jpg?v=1505922925')";
   } else {
  body.style.backgroundImage = "url('https://pro2-bar-s3-cdn-cf4.myportfolio.com/388e2fbec08a0689b89a57b2e1ad166b/f382c92da48466ecb2363bd7ae1646d1c038f6417fd7051e47150003f79c1b75942a997af3caca37_rw_1200.jpg?h=c52f8640effd5fd12ed23fefb8c86db4')";
  }
}

domCss();

//User Input
var inputHappened = function(currentInput){
	if (storyCount === 0) {
    getName();
    domCss();
	} else if (storyCount === 1) {
    output = intro(currentInput);
	} else if (storyCount === 2) {
		output = partA(currentInput);
	} else {
		output = partB(currentInput);
  }
		return output;
};


var display = function( data ){
  var output = document.querySelector('#output');
  output.innerText = data;
}

//prompt user to enter name
var getName = function() {
  var randomArt = happyRandomArt();
  output = `What is your name?\n\n${asciiArt[randomArt]}`;
  storyCount ++;
}

//intro
var intro = function(option) {
  var randomArt = happyRandomArt();
		name = option;
    output = `Welcome ${name}. You wake up in a dark cave. Feeling disorientated, you look around the cave and see three tunnels. \n\nWhich tunnel will you pick? (L/C/R) \n L eft \n C enter \n R ight\n\n${asciiArt[randomArt]}`;
    body.style.backgroundImage = "url('https://ehgtravel.com/wp-content/uploads/2018/04/maxresdefault-2.jpg')";
    storyCount ++;
    return output;
}

var partA = function(option) {
  //generate random ascii art for each run
  var randomArt = happyRandomArt(); 
	if (option === "L") {
  score = score + 3;
  output = `You, ${name}, entered a brightly lit room with matching furnitures. Light is provided by table lamps. Among the first things you notice walking in are an unusual lamp, a large floor mirror, and a black metal door.\n\n What will you do next?(R/S/O)\n R ub the lamp\n S tare into the mirror\n O pen the door\n\n${asciiArt[randomArt]}`;
  body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/covers/images/007/610/062/large/joshua-khusal-1.jpg?1507305114')";
	storyCount ++;
	} else if (option === "C") {
  score = score + 2;
  output = `At the end of the tunnel is a forest. The forest was small, crowded, and primal. Its canopy was claimed by larch, cedar, and magnolia, who gave just enough light a chance to descent for an overabundance of plants to flourish in the soft, rich soils below.\n\n In the distance, you see a woman by the river beckoning you come over. A clamor of wild noises, most of which were fleeing animals, echoed in the air, and were out of sync with the swaying of tree tops in the wind.\n\n Now, ${name}, what is your next move? (W/G/M)\n W alk towards the noises\n G o towards the woman\n M ove away from the sound and the woman\n\n${asciiArt[randomArt]}`;
  body.style.backgroundImage = "url('https://i.pinimg.com/originals/e1/61/d5/e161d573eb8616af64bbba0108f58d06.png')";
	storyCount ++;
	} else if (option === "R") {
  score = score + 2;
  output = `You, ${name}, exit the tunnel through a tall pair of granite doors. Beyond the pair of granite doors lies a large, broken room. It's covered in large bones, dirt and broken stone. Your torch allows you to see broken arrows, rusty swords and the remains of several humans. At the far end of the room, you see a chest in pristine condition. You step closer to inspect it. Wait, you hear a loud bang in the distance from which you came from.\n\n What will you do next? (C/P/I)\n C heck the corpses.\n P lunder the chest\n I nvestigate the loud bang\n\n${asciiArt[randomArt]}`;
  body.style.backgroundImage = "url('https://im.tiscali.cz/games/2014/09/01/425215-alone-in-the-dark-illumination-1920x1080.jpg')";
	storyCount ++;
  } 
	return output;
}

var partB = function(option) {
  var randomNum = Math.floor(Math.random() * 10);
  //generate random ending for each option
  var randomEnd = Math.floor(Math.random() * 3);
	if (option === "R") {
    //track score based on random ending
    score = score + endings[option].score[randomEnd];
    //output is random NPC description, with random ending text and end message based on random ending
    output = `You rubbed the lamp. Smoke starts to billow out of the lamp. When the smoke clears, you realised that a man has appeared in the room.\n\n${npcDescriptionMale[randomNum]}\n\n` + endings[option].text[randomEnd] + startOver();
	} else if (option === "S") {
    score = score + endings[option].score[randomEnd];
		output = `You peer into the floor mirror and instead of your own reflection, you see a woman looking back at you.\n\n${npcDescriptionFemale[randomNum]}\n\n` + endings[option].text[randomEnd] + startOver();
	} else if (option === "O") {
    score = score + endings[option].score[randomEnd];
		output = endings[option].text[randomEnd] + startOver();
	} else if (option === "W") {
    score = score + endings[option].score[randomEnd];
    output = endings[option].text[randomEnd] + startOver();
	} else if (option === "G") {
    score = score + endings[option].score[randomEnd];
		output = `You make your way towards the woman by the river.\n\n ${npcDescriptionFemale[randomNum]}\n\n` + endings[option].text[randomEnd] + startOver();
	} else if (option === "M") {
    score = score + endings[option].score[randomEnd];
		output = endings[option].text[randomEnd] + startOver();
	} else if (option === "C") {
    score = score + endings[option].score[randomEnd];
		output = endings[option].text[randomEnd] + startOver();
	} else if (option === "P") {
    score = score + endings[option].score[randomEnd];
		output = endings[option].text[randomEnd] + startOver();
	} else if (option === "I") {
    score = score + endings[option].score[randomEnd];
		output = endings[option].text[randomEnd] + startOver();
  }
	return output;
}

var startOver = function() {
if (score <=5) {
  var randomArt = Math.floor(Math.random() * 2);
  var append = `\n\nYour score is ${score}. Better luck next time, ${name}. Enter any key to start over.\n\n${asciiArt[randomArt]}`;
  body.style.backgroundImage = "url('https://s31092.pcdn.co/wp-content/uploads/2019/07/Limbo-1080.jpg')";
} else {
  var randomArt = happyRandomArt();
  var append = `\n\nYour score is ${score}. Well Done, ${name}. Enter any key to start over.\n\n${asciiArt[randomArt]}`;
  body.style.backgroundImage = "url('https://artfiles.alphacoders.com/115/115353.jpg')";
}
  storyCount = 0;
  score = 0;
  return append;
}

var happyRandomArt = function() {
  return Math.floor((Math.random() * 7) + 2);
}

//set css with DOM
