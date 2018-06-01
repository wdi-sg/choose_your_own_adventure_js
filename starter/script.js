// put code here!

characters = [
{
	name: "charmander",
	hp : 20,
	attack: 5,
},
{
	name: "squirtle",
	hp : 20,
	attack: 5,
},
{
	name: "bulbasaur",
	hp : 20,
	attack: 5,
},
{
	name: "ratata",
	hp : 15,
	attack: 3,
},
{
	name: "magikarp",
	hp : 15,
	attack: 3,
}
]


//Generate random number
function attack(max, min) {
	return Math.floor(Math.random() * (max - min) + min);
}

function escape(max, min) {
	return Math.floor(Math.random() * (max - min) + min);
}

//Prompts name
var name = prompt("Hey Trainer, what is your name??");


//Prompts to choose pokemon
var pokemon = prompt("Hey, " + name + "!\nPlease choose your pokemon. \n(charmander, squirtle or bulbasaur??)");
if (pokemon != "charmander" && pokemon != "squirtle" && pokemon != "bulbasaur") {
	console.log("Please try again.");
do {
	var pokemon = prompt("Please choose your pokemon. (charmander, squirtle or bulbasaur??)");
} while (pokemon != "charmander" && pokemon != "squirtle" && pokemon != "bulbasaur");
}

//Chooses enemy pokemon
var enemy = prompt("Please choose your enemy. (ratata or magikarp??)");
if (enemy != "ratata" && enemy != "magikarp") {
	console.log("Please try again.");
do {
	var enemy = prompt("Please choose your enemy. (ratata or magikarp??)");
} while (enemy != "ratata" && enemy != "magikarp")
}

//Adding attack and health to pokemon
if (pokemon == "charmander") {
	var pokemonHealth = characters[0].hp;
	var pokemonAttack = characters[0].attack;
}  if (pokemon == "squirtle") {
	var pokemonHealth = characters[1].hp;
	var pokemonAttack = characters[1].attack;
}  if (pokemon == "bulbasaur") {
	var pokemonHealth = characters[2].hp;
	var pokemonAttack = characters[2].attack;
}

//Adding attack and health to enemy pokemon
if (enemy == "ratata") {
	var enemyHealth = characters[3].hp;
	var enemyAttack = characters[3].attack;
}  if (enemy == "magikarp") {
	var enemyHealth = characters[4].hp;
	var enemyAttack = characters[4].attack;
}

// Decision to make during battle
do {
var decision = prompt("Do you want to attack " + enemy +"? \nOr do you want to run away? \n(attack / run)");

// Run successfully if escape returns 0, fails if returns 1
if (decision == "run") {
	var pokemonEscape = escape(0,2)
	if (pokemonEscape == 0) {
		alert("Escapes successfully!!\nYour pokemon and you manage to flee!")
		break;
	} if (pokemonEscape == 1) {
		alert("Fails to escape!!");
		var enemyHit = attack(0,5);
		if (enemyHit <= 3) {
			pokemonHealth = pokemonHealth - enemyAttack;
			console.log(enemy + " used attack. Deals " + enemyAttack + " damage to " + pokemon + ".");
			console.log(pokemon + "'s HP: " + pokemonHealth);
			console.log(enemy + "'s HP: " + enemyHealth);
		} else {
			console.log(enemy + " 's attack missed.");
			console.log(pokemon + "'s HP: " + pokemonHealth);
			console.log(enemy + "'s HP: " + enemyHealth);
		}
}
}

// Hits if result displays 0,1,2,3. 
// Misses if result display 4.

// Pokemon attacks and hits
if (decision == "attack") { 
	var pokemonHit = attack(0,5);
	if (pokemonHit <= 3) {
		enemyHealth = enemyHealth - pokemonAttack;
		console.log(pokemon + " used attack. Deals " + pokemonAttack + " damage to " + enemy + ".");
		console.log(pokemon + "'s HP: " + pokemonHealth);
		console.log(enemy + "'s HP: " + enemyHealth);

//enemy turn to hit
		var enemyHit = attack(0,5);
		if (enemyHit <= 3) {
			pokemonHealth = pokemonHealth - enemyAttack;
			console.log(enemy + " used attack. Deals " + enemyAttack + " damage to " + pokemon + ".");
			console.log(pokemon + "'s HP: " + pokemonHealth);
			console.log(enemy + "'s HP: " + enemyHealth);
		} else {
			console.log(enemy + " 's attack missed.");
			console.log(pokemon + "'s HP: " + pokemonHealth);
			console.log(enemy + "'s HP: " + enemyHealth);
		}


//Pokemon attack and misses
	} else {
		console.log(pokemon + " 's attack missed.");
		console.log(pokemon + "'s HP: " + pokemonHealth);
		console.log(enemy + "'s HP: " + enemyHealth);

//enemy turn to hit
		var enemyHit = attack(0,5);
		if (enemyHit <= 3) {
			pokemonHealth = pokemonHealth - enemyAttack;
			console.log(enemy + " used attack. Deals " + enemyAttack + " damage to " + pokemon + ".");
			console.log(pokemon + "'s HP: " + pokemonHealth);
			console.log(enemy + "'s HP: " + enemyHealth);
		} else {
			console.log(enemy + " 's attack missed.");
			console.log(pokemon + "'s HP: " + pokemonHealth);
			console.log(enemy + "'s HP: " + enemyHealth);
		}
}
}

} while (pokemonHealth != 0 && enemyHealth != 0)

if (pokemonHealth == 0) {
	alert(pokemon + " has fainted.")
} else if (enemyHealth == 0) {
	alert(enemy + "has fainted.")
}























