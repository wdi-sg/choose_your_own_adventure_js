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
let gameState = true;
// let gameSteps = 3;
const animals = ["cat", "dog", "fish"];
let user = {
	name: "",
	str: "",
	dec: "",
	hp: 10,
	fuel: getNumber(4, 10), // random fuel between 5 to 10
	location: "",
	fightsToFight: ""
};
let userCountry;
let totalPoints;
let inputStr;
console.log(inputStr);

const countries = {
	"REKT-LAND": ["terrible", 7],
	"STINK-LAND": ["decent", 5],
	"NO-MANS-LAND": ["nice", 3]
};

let zombies = [
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

// check game state function
// if (!gameState) {
// 	alert('Quiter!');
// }

// STEP 1 // BASE POINTS

const setup = () => {
	// prompt user for name
	user.name = prompt("Enter your name");
	if (user.name === null) {
		alert('QUITER!');
	}

	// generate base stats
	const originalStats = user.name.hashCode();
	if (originalStats !=1) {
		console.log(`${user.name} is born in an aeroplane with a base of ${originalStats} points.`);
	} else {
		console.log(`${user.name} is born in an aeroplane with a base of ${originalStats} point.`);	
	}
	// fuel bonus for low-base names
	console.log("fuel", user.fuel);
	user.fuel += Math.round((10 - originalStats) / 2);
	console.log("final fuel", user.fuel);

	return originalStats;
};

const originalStats = setup();

// STEP 2 // COMSUME ANIMAL FOR ADDITIONAL POINTS

// comsume and level up
const consumeLevel = (prey) => {
	const nameAnimal = user.name + animal;
	const newStats = Math.round((parseInt(nameAnimal.hashCode()) + 1) / 2);
	return newStats;
};

// generate animal list
animalStrings = ""
for (i=0; i < animals.length; i++) {
	animalStrings += animals[i] + "\n";
}

// choose animal to feed on
const animal = prompt(`${user.name} is starving! Pick one animal to feed on.\n\n${animalStrings}`);

// concat name & animal to generate additional stats
const newStats = consumeLevel(animal);
totalPoints = newStats + originalStats;

if (newStats != 1) {
	console.log(`${user.name} chomped on ${animal}! ${user.name} gained ${newStats} additional points.`);
} else {
	console.log(`${user.name} chomped on ${animal}! ${user.name} gained ${newStats} additional point.`);
}
console.log(`${user.name} now has a total of ${totalPoints} points.`);


// STEP 3 // POINT ALLOCATION BETWEEN STR AND DEX

const allocationPrompt = () => {
	if (inputStr !== null) {
		inputStr = prompt(`Allocate ${user.name}'s points between STRENGTH and DEXTERITY.\n\nEnter the amount of points you want to spend on STRENGTH.\n
${user.name} has ${totalPoints} points remaining.`);
		console.log("input", inputStr);

		while (isNaN(inputStr) || inputStr > totalPoints || inputStr % 1 !== 0) {
			// prompt user to input again
			alert("Invalid input. Please try again.")
			inputStr = prompt(`Allocate ${user.name}'s points between STRENGTH and DEXTERITY.\n\nEnter the amount of points you want to spend on STRENGTH.\n
${user.name} has ${totalPoints} points remaining.`);
			console.log("reinput", inputStr);
		}
		// set game state to false if user clicks cancel
		if (inputStr === null) {
			gameState = false;
		}

	} 
	return inputStr;
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
				return false;
			}
		}
	}
	return false;
};

// call allocation func
allocationPrompt();

const allocationAssign = () => {
	// continue game
	user.dex = totalPoints - inputStr;
	user.str = inputStr;
	console.log(`- ${user.name} attributes -\nHP: ${user.hp}\nSTR: ${user.str}\nDEX: ${user.dex}`);
	return true;
};

console.log("game state", gameState);
if (gameState) {
	allocationAssign();
	console.log(`The plane seems be running out of fuel but the fuel gauge is broken. ${user.name} needs to jump out of the plane before it crashes!`);
if (planeLogic()) {
		console.log(`${user.name} parachutes into ${user.location}.`);
	} else {
		alert(`DEAD. Ran out of fuel and crashed.`);
		// call end game
	};
};



// STEP 5 // fight time
/* 
zombie health increase +1 after every fight
zombie str and dex is based on hash and allocated randomly
user gain points after each win and allocate points
*/

const generateZombie = () => {

};

for (i=0; i<user.fightsToFight; i++) {
	console.log("fight number: ", i)
};











