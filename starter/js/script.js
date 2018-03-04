//hash function to generate a single number digit
String.prototype.hashCode = function() {
	// returns a single digit between 1 - 10 baed on the hash
  let hash = 0, i, chr, lastDigit;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
    lastDigit = hash.toString().split('').pop();
  }
  return parseInt(lastDigit) + 1;
};

// random whole number function - between start and end range
const getNumber = (start, end) => {
	return (Math.floor(Math.random() * (end + 1 - start)) + start); 
};

// game variables & settings
let gameState = "play"; // play, lost, quit, win
let replay = true;
// let gameSteps = 3;
const animals = ["cat", "dog", "fish"];
let user;
let userCountry;
let totalPoints;
let inputStr;
let enemy;
let anaiml;

const countries = {
	"REKT-LAND": ["terrible", 7],
	"STINK-LAND": ["decent", 5],
	"NO-MANS-LAND": ["nice", 3]
};

const zombies = [
	"JUNWEI",
	"JED",
	"JIANHAO",
	"SCOTT",
	"JERRY",
	"NICK",
	"AKIRA",
	"CHEEKEAN",
	"RAY",
	"WALTER",
	"JEROME",
	"JACOB"
];

// generate animal list
animalStrings = ""
for (i=0; i < animals.length; i++) {
	animalStrings += animals[i] + "\n";
}

// STEP 1 // BASE POINTS

const setup = () => {
	// prompt user for name
	user.name = prompt("Enter your name");
	if (user.name === null) {
		gameState = "quit";
		return gameState
	}

	// generate base stats
	const originalStats = user.name.hashCode();
	if (originalStats !=1) {
		console.log(`${user.name} is born in an aeroplane with a base of ${originalStats} points.`);
	} else {
		console.log(`${user.name} is born in an aeroplane with a base of ${originalStats} point.`);	
	}
	user.cp += originalStats;
	user.unallocated += originalStats;
	// fuel bonus for low-base names
	console.log("fuel", user.fuel);
	user.fuel += Math.round((10 - originalStats) / 2);
	console.log("final fuel", user.fuel);

	// choose animal to feed on
	const animal = prompt(`${user.name} is starving! Pick one animal to feed on.\n\n${animalStrings}`);
	if (animal === null) {
		gameState = "quit";
		return false;
	}
	return animal;
};

// STEP 2 // COMSUME ANIMAL FOR ADDITIONAL POINTS

// comsume and level up
const consumeLevel = (prey) => {
	const nameAnimal = user.name + prey;
	const newStats = Math.round((parseInt(nameAnimal.hashCode()) + 1) / 3);
	user.cp += newStats;
	user.unallocated += newStats;
	if (newStats != 1) {
		console.log(`${user.name} chomped on ${prey}! ${user.name} gained ${newStats} additional Combat Power.`);
	} else {
		console.log(`${user.name} chomped on ${prey}! ${user.name} gained ${newStats} additional Combat Power.`);
	}
	alert(`Level up! ${user.name}'s' Combat Power has increased to ${user.cp}.`);
};

// STEP 3 // POINT ALLOCATION BETWEEN STR AND DEX

const allocationPrompt = () => {
	if (inputStr !== null) {
			inputStr = prompt(`${user.name} has ${user.unallocated} unallocated points remaining.\nAllocate ${user.name}'s points between STRENGTH and DEXTERITY.\n\nEnter the amount of points you want to spend on STRENGTH.
`);
		// console.log("input", inputStr);

		while (isNaN(inputStr) || inputStr > user.unallocated || inputStr % 1 !== 0) {
			// prompt user to input again
			alert("Invalid input. Please try again.");
			inputStr = prompt(`${user.name} has ${user.unallocated} unallocated points remaining.\nAllocate ${user.name}'s points between STRENGTH and DEXTERITY.\n\nEnter the amount of points you want to spend on STRENGTH.
`);
			console.log("reinput", inputStr);
		}
		// set game state to false if user clicks cancel
		if (inputStr === null) {
			gameState = "quit";
		}
	} 
	return inputStr;
};

const allocationAssign = () => {
	// continue game
	console.log('str', parseInt(inputStr));
	user.dex += user.unallocated - parseInt(inputStr);
	user.str += parseInt(inputStr);
	user.unallocated = 0;
	console.log(`- ${user.name} attributes -\nCOMBAT POWER: ${user.cp}\nHP: ${user.hp}\nSTR: ${user.str}\nDEX: ${user.dex}`);
	return true;
};

// STEP 4 // must jump out of airplane before it runs out of fuel, determine country and fights remaining
const planeLogic = () => {
	// cancel doesnt quit game for his logic
	for (var country in countries){
		console.log(country);
		userCountry = confirm(`Plane is flying over ${country} now. This looks like a ${countries[country][0]} place to get out.\n\nDo you want ${user.name} to jump now?`);
		if (userCountry) {
			user.location = country;
			user.fightsToFight = countries[country][1];
			return true;
		} else {
			user.fuel = user.fuel - countries[country][1];
			console.log("fuel left", user.fuel);
			// end game if plan runs out of fuel
			if (user.fuel < 0) {
				gameState = "lost";
				return false;
			}
		}
	}
	gameState = "lost";
	return false;
};

// STEP 5 // fight time
/* 
zombie health increase +1 after every fight
zombie str and dex is based on hash and allocated randomly
user gain points after each win and allocate points
// */

const generateZombie = (name, rank) => {
	const cp = name.hashCode() + (rank * 2);
	const str = getNumber(1, cp);
	const dex = 1 + cp - str + (rank * 2);
	const zomb = {
		name,
		cp,
		str,
		dex
	};
	return zomb
};



// dummy data
// let user = {
// 	cp: 8,
// 	hp: 10,
// 	str: 4,
// 	dex: 2,
// 	fightsToFight: 5,
// 	fuel: 10,
// 	location: "",
// 	name: "junwei",
// 	unallocated: 0
// };

const fight = () => {
	let fightNumber;
	const attackPercent = (user.str / (user.str + enemy.str) * 100).toFixed(0);
	const runPercent = (user.dex / (user.dex + enemy.dex) * 100).toFixed(0);
	console.log(attackPercent, runPercent);
	console.log(`- ${user.name} attributes -\nCOMBAT POWER: ${user.cp}\nHP: ${user.hp}\nSTR: ${user.str}\nDEX: ${user.dex}`);
	let fightOrFlight = prompt(`You encounter, ${enemy.name}, a fellow zombie. Fight or Flight!\n\n-- ${enemy.name} attributes --\nCOMBAT POWER: ${enemy.cp}\nHP: ${enemy.hp}\n\nEnter f to Fight ${enemy.name}.\n\nEnter r to attempt to Run from ${enemy.name}.`);
	// console.log(fightOrFlight);

	// repeat if input is invalid
	while (fightOrFlight === null || (fightOrFlight.toLowerCase() !== "r" && fightOrFlight.toLowerCase() !== "f")) {
		alert("Invalid input. Please try again.");
		fightOrFlight = prompt(`Enter f to Fight ${enemy.name}.\n\nEnter r to attempt to Run from ${enemy.name}`);
	}

	// FIGHT SEQUENCE
	if (fightOrFlight === "f") {
		while (enemy.hp !== 0 && user.hp !== 0) {
			fightNumber = getNumber(1, 100);
			// console.log("random number", fightNumber);
			if (attackPercent > fightNumber) {
				// win
				console.log(`${user.name} punches ${enemy.name}. ${enemy.name} loses 1 HP.`);
				enemy.hp += -1;
			} else {
				// lose
				console.log(`${enemy.name} punches ${user.name}. ${user.name} loses 1 HP.`);
				user.hp += -1;
				if (user.hp <= 0) {
					gameState = "lost";
				}
			}
		}
		// console.log(`--- ${user.name} ---\nHP: ${user.hp} \n\n--- ${enemy.name} ---\nHP: ${enemy.hp}`);
		if (enemy.hp === 0) {
			user.fights += 1;
			alert(`${user.name} killed ${enemy.name}.`);
			consumeLevel(enemy.name);
			allocationPrompt();
			console.log(gameState);
			if (gameState === "play") {
				allocationAssign();
			} 

		} else if (gameState === "lost") {
			alert(`GAME OVER. ${user.name} got killed by ${enemy.name}.`);
			return gameState;
		}
	} else {
		// RUN SEQUENCE
		let runSuccess = false;
		while (!runSuccess && user.hp>0) {
			fightNumber = getNumber(1, 100);
			if (runPercent > fightNumber) {
				runSuccess = true;
			} else {
				console.log(`${user.name} got hurt while running away. ${user.name} loses 2 HP.`);
				user.hp += -2;
			}
		}
		if (user.hp > 0) {
			alert(`${user.name} escaped successfully!`);
		} else {
			// game over
			alert(`GAME OVER. ${user.name} got killed by ${enemy.name}.`);
			gameState = "lost";
			return gameState;
		}
		
	}
	return "play";
};

while (gameState === "play"){
	user = {
		name: "",
		str: 0,
		dex: 0,
		cp: 0,
		unallocated: 0,
		hp: 10,
		fuel: getNumber(4, 10), // random fuel between 5 to 10
		location: "plane",
		fightsToFight: "",
		fights: 0
	};

	// step 1 - setup
	animal = setup(); // initial character build

	if (gameState === "play") {

		// concat name & animal to generate additional stats
		consumeLevel(animal);

		// call allocation func
		allocationPrompt(); // allocation input

		console.log("game state", gameState);
		if (gameState === "play") {
			allocationAssign(); // assign points
			console.log(`The plane seems be running out of fuel and the fuel gauge is broken. ${user.name} needs to jump out of the plane before it crashes!`);
		// user choose destination
		if (planeLogic()) {
				console.log(`${user.name} parachutes into ${user.location}.`);
			} else {
				alert(`DEAD. Ran out of fuel and crashed.`);
				// call end game
			};
		};

		let enemies = zombies;
		for (i=0; i<user.fightsToFight; i++) {
			if (gameState === "lost" || gameState === "quit") {
				break;
			}
			console.log("fight number: ", i)
			// console.log(`there are ${enemies.length} left in the pool.`);
			// generate enemy from pool bu random
			enemy = generateZombie(enemies[getNumber(0, enemies.length-1)], i);
			enemy.hp = i + 1;
			// console.log(enemy);
			// remove enemy from pool
			let index = enemies.indexOf(enemy.name);
			enemies.splice(index, 1);
			// console.log(enemies);

			// fight
			gameState = fight();

		};
		// change game state to win if game state is still "play" at the end of the game
		if (gameState==="play") {
			gameState = "win";
		}
	};

	if (gameState === "win") {
		if (confirm(`Congrats! You completed the game.\n\n- ${user.name} attributes -\nCOMBAT POWER: ${user.cp}\nHP: ${user.hp}\nSTR: ${user.str}\nDEX: ${user.dex}\nFIGHTS WON: ${user.fights}\nRETIRED IN: ${user.location}\n\nDo you want to play again?`)) {
			gameState = "play";
		} else {
			gameState = "quit";
		}
	} else if (gameState === "lost") {
		if (confirm(`Sorry, you lost.\n\n- ${user.name} attributes -\nCOMBAT POWER: ${user.cp}\nHP: ${user.hp}\nSTR: ${user.str}\nDEX: ${user.dex}\nFIGHTS WON: ${user.fights}\nRETIRED IN: ${user.location}\n\nDo you want to play again?`)) {
			gameState = "play";
		} else {
			gameState = "quit";
			console.log("GAME TERMINATED!");
		}
	} else {
		console.log("GAME TERMINATED!");
	}
}








