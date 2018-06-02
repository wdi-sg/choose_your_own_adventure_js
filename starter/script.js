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
var name = prompt("Welcome to the world of pokemon.\nHey Trainer, what is your name??");


//Prompts to choose pokemon
var pokemon = prompt("Professor Oak invites you to his house. \nHe offers you 3 pokemon to choose from. \nPlease choose your pokemon. \n(charmander, squirtle or bulbasaur??)");
if (pokemon != "charmander" && pokemon != "squirtle" && pokemon != "bulbasaur") {
	alert("Please try again.");
do {
	var pokemon = prompt("Please choose your pokemon. (charmander, squirtle or bulbasaur??)");
} while (pokemon != "charmander" && pokemon != "squirtle" && pokemon != "bulbasaur");
}

//Chooses enemy pokemon
var enemy = prompt("You met Gary while walking out of Profressor Oak's house. \nGary offers to do a battle with you and you accepts his challenge. \nNow, please choose Gary's Pokemon that you want to battle with. \n(ratata or magikarp??)");
if (enemy != "ratata" && enemy != "magikarp") {
	alert("Please try again.");
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

if (enemy == "ratata" || enemy == "magikarp") {
	alert("The battle has started. " + pokemon + " VS " + enemy + "!");
}

// Decision to make during battle
do {
var decision = prompt("Do you want to attack " + enemy +"? \nOr do you want to run away? \n(attack / run)");

// Run successfully if escape returns 0, fails if returns 1
if (decision == "run") {
	var pokemonEscape = escape(0,2)
	if (pokemonEscape == 0) {
		alert("Escapes successfully!!\nGary is mad at you for leaving the fight. Gary calls " + name + " a pussy.")
		break;
	} if (pokemonEscape == 1) {
		alert("Fails to escape!! \nWhy do you want to leave in a middle of a battle?");
		var enemyHit = attack(0,5);
		if (enemyHit <= 3) {
			pokemonHealth = pokemonHealth - enemyAttack;
			alert(enemy + " used attack. Deals " + enemyAttack + " damage to " + pokemon + ".");
			alert(pokemon + "'s HP: " + pokemonHealth);
			alert(enemy + "'s HP: " + enemyHealth);
		} else {
			alert(enemy + " 's attack missed.");
			alert(pokemon + "'s HP: " + pokemonHealth);
			alert(enemy + "'s HP: " + enemyHealth);
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
		alert(pokemon + " used attack. Deals " + pokemonAttack + " damage to " + enemy + ".");
		alert(pokemon + "'s HP: " + pokemonHealth);
		alert(enemy + "'s HP: " + enemyHealth);
		if (pokemonHealth == 0) {
			alert(pokemon + " has fainted.");
			break;
}		else if (enemyHealth == 0) {
			alert(enemy + " has fainted.");
			break;
}


//enemy turn to hit
		var enemyHit = attack(0,5);
		if (enemyHit <= 3) {
			pokemonHealth = pokemonHealth - enemyAttack;
			alert(enemy + " used attack. Deals " + enemyAttack + " damage to " + pokemon + ".");
			alert(pokemon + "'s HP: " + pokemonHealth);
			alert(enemy + "'s HP: " + enemyHealth);
				if (pokemonHealth == 0) {
					alert(pokemon + " has fainted.");
					break;
}				else if (enemyHealth == 0) {
					alert(enemy + " has fainted.");
					break;
}
		} else {
			alert(enemy + " 's attack missed.");
			alert(pokemon + "'s HP: " + pokemonHealth);
			alert(enemy + "'s HP: " + enemyHealth);
		}


//Pokemon attack and misses
	} else {
		alert(pokemon + " 's attack missed.");
		alert(pokemon + "'s HP: " + pokemonHealth);
		alert(enemy + "'s HP: " + enemyHealth);

//enemy turn to hit
		var enemyHit = attack(0,5);
		if (enemyHit <= 3) {
			pokemonHealth = pokemonHealth - enemyAttack;
			alert(enemy + " used attack. Deals " + enemyAttack + " damage to " + pokemon + ".");
			alert(pokemon + "'s HP: " + pokemonHealth);
			alert(enemy + "'s HP: " + enemyHealth);
			if (pokemonHealth == 0) {
				alert(pokemon + " has fainted.");
				break;
}			else if (enemyHealth == 0) {
				alert(enemy + " has fainted.");
				break;
}
		} else {
			alert(enemy + " 's attack missed.");
			alert(pokemon + "'s HP: " + pokemonHealth);
			alert(enemy + "'s HP: " + enemyHealth);
		}
}
}

} while (pokemonHealth != 0 && enemyHealth != 0)

if (pokemonHealth == 0) {
	alert(enemy + " has won. " + name + " has lost your first pokemon battle. \nRefresh the page if you want revenge.")
} else if (enemyHealth == 0) {
	alert(pokemon + " has won. You successfully won your first pokemon battle. Congrats.")
}























