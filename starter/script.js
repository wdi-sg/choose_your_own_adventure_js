// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must contain at least one loop.
// Your code must make use of both string and number user inputs.


// Lost In The Wilderness

// set up scoring
var scoring = {
	playerScore: 0,
	playerHealth: 100,
	computerScore: 0,
	computerHealth: 0
};

// create game objects
var object = {
	items: {},
	food: {'unknown berry': {energy: 10}, 'chestnut': {energy: 20}},
	animals: {'rabbit': {energy: 60}, 'fish': {energy: 45}},
	weapons: {'stick' : {power: 30}, 'bear spray' : {power: 50}},
	enemies: {'bear': {health: 100}, 'lone wolf': {health: 70}, 'hunter': {health: 80}}
};

var playerName = prompt("What is your name?");
	if (!playerName) {
		playerName = "Wanderer";
	}

// want to add stop function on user clicking 'Cancel'

function invalidEntry() {
	alert("You have to do something.");
}

	alert("Hello, " + playerName + "\n\nAre you ready for an adventure?");
	alert("You are alone, lost in the wilderness.\n\nNo one knows you are out here. It has been two days, and food is running scarce.\n\nYou've got to find your way home.");


// player's first choice
function leftOrRight() {
	var choice = prompt("You've been making your way south since sunrise through the forest. You come to a fork in the trail.\n\nYou can go [L]eft or [R]ight.");
	if (choice === 'L' || choice === 'l') {
		riverLeft();
	} else if (choice === "R" || choice === "r") {
		riverRight();
	} else {
		alert("There is no path here.");
		leftOrRight();
	}
}
leftOrRight();

function riverLeft() {
	var choice = prompt("You walk until you see a creek. You follow it downstream until it widens into a small river. You start to feel hungry.\n\nYou can stop to [F]ish, or continue [W]alking.");
	if (choice === 'W' || choice === 'w') {
		alert("You get hungrier by the minute. And die.")
		gameOver();
		// hungryAndDie();
	} else if (choice === 'F' || choice === 'f') {
		alert("You catch a fish.\n\nAll this time, you did not notice that a bear has seen you and is moving in your direction.");
		caughtFish();
	} else {
		invalidEntry();
		riverLeft();
	}
}

function riverRight() {
	var choice = prompt("You go right.\n\nYou continue walking through the forest. You start to feel hungry.\n\nYou can [M]ake an animal trap, or [F]orage for food.");
	if (choice === 'M' || choice === 'm') {


	} else if (choice === "F" || choice === 'f') {
		var choices = object.food.keys(); // ["unknown berry", "chestnut"]
		var option = Math.floor(Math.random() * choices.length); // number between 0 and choices.length - 1
		var foragedFoodName = choices[option];
		var food = object.food[foragedFoodName];

		scoring.playerHealth = scoring.playerHealth + food.energy;
		alert("You found a " + foragedFoodName + ". It has given you " + food.energy + " energy. Your health is now " + scoring.playerHealth);


	} else {
		invalidEntry();
		riverRight();
	}

}

function caughtFish() {
	var choice = prompt("It gets close.\n\nYou can offer it your [F]ish, or use the [B]ear spray you have in your pack, or [R]un.");
	if (choice === 'F' || choice === 'f') {
		alert("You place the fish on the ground slowly. Your heart is racing.");
		alert("The bear notices the fish...");
		alert("It takes the fish and starts eating it.\n\nYou grab your pack and hurridly continue downstream.");
		gameOver();
		// left off here
		// var 
	} else if (choice === 'B' || choice === 'b') {
		// add fish to inventory
		// minus 50 playerHealth
		bearSpray();
	} else if (choice === 'R' || choice === 'r') {
		// add fish to inventory
		alert("You run as fast as you can back into the forest. And live happily ever after");
		gameOver();
		// left off here
		// var ("")
	} else {
		invalidEntry();
		caughtFish();
	}
}

function bearSpray() {
	alert("You reach for the bear spray and take off the safety. The bear is now only a few meters away.\n\nYou take aim and depress the trigger.");
	alert("The spray gives out a short spurt and dies out.\n\nIt was not enough to deter the bear, but enough to annoy it.");
	var choice = prompt("Annoyed, the bear charges at you.\n\nYou turn to run but the bear is too quick. Soon, you feel blows and sharp claws.\n\nYou can struggle and [F]ight back, or [P]lay dead.");
	if (choice === 'F' || choice === 'f') {
		fightBear();

	} else if (choice === 'P' || choice === 'p' ) {
		alert("The bear approaches you and says: \"Hi, " + playerName + ". I've seen this trick before.\"\n\nThe bear has you for lunch.");
		gameOver();
	} else {
		invalidEntry();
		bearSpray();
	}

}

function fightBear() {
	var bearHealth = object.enemies.bear.health;
	var playerHealth = scoring.playerHealth;

	while (playerHealth > 0 && bearHealth > 0) {
		var hitForce = Math.floor(Math.random() * 50);
		var target = Math.floor(Math.random() * 2);
		if (target === 0) {
			playerHealth = playerHealth - hitForce;
			alert("The bear struck you, your health is now " + playerHealth);
		} else {
			bearHealth = bearHealth - hitForce;
			alert("You struck the bear, bear's health is now " + bearHealth);
		}
	}

	scoring.playerHealth = playerHealth;
	object.enemies.bear.health = bearHealth;

	if (playerHealth <= 0) {
		alert("The bear killed you");
		gameOver();
	} else {
		scoring.playerScore = scoring.playerScore + 10;
		alert("You killed the bear. Your score is now " + scoring.playerScore);
	}
	
}

function gameOver() {
	alert("Game Over, your score is " + scoring.playerScore);
	var restart = prompt("Play again? (Y/N)");
	if (restart === 'Y' || restart === 'y') {
		scoring.playerScore = 0;
		scoring.playerHealth = 100;
		leftOrRight();
	}
}


// possible outcomes
// 1. player gets home unscathed
// 2. player gets home injured
// 3. player gets found by search and rescue
// 4. player gets killed by bear
// 5. player dies of starvation
// 6. player dies of
// 7.  









