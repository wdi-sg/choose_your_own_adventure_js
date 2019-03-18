// A bloody war game//

executeMainFunction = function() {

alert ("Welcome to 'A bloody world', a game full of blood, gore and other fun stuff. This game is stricly for adults with the maturity of an eight year old or lower.");


var life =10;
var damage = 0;

var warriorArray = ["Xena", "Conan", "Abhimanyu"];
var wizardArray = ["Pug", "Dr. Strange", "Harry Potter"];
var godArray = ["Isis", "Hera", "Athena"];
var weaponArray = ["Arthur's sword Excalibur", "Arjuna's bow Gandiva", "Thor's hammer Mjolnir", "Dr. strange's Eye of Agamotto", "Ring of Gyges", "Grimoire"];
var direction = ["east", "west", "north", "south"]
var monsters = ["dragon", "medusa", "sirens", "sorceror"]

var champion = prompt ("Who will be your Champion? a) A fierce Warrior, b) A Wizard who can wreck magical havoc c) Or maybe a god.");


if (champion === "a") {
	alert ("That was a silly choice. Why would'nt you just pick a god? Do you want your life to be more difficult. No wonder you decided to be a coder!")
	var warrior = prompt ("Choose the warrior who will fight and probably die a very painful and somewhat embarassing death. 1) Xena 2) Conan 3)Abhimanyu")
	var heroInt = parseInt(warrior)
	var hero = warriorArray[heroInt-1];

} else if (champion === "b") {
	alert ("Really...a wizard when you could have a god? Anyhow better than a dumb warrior at least!")
	var wizard = prompt ("Choose the wizard who will fight and probably end up as a orangutan as a result of casting a wrong spell. 1) Pug 2) Dr. Strange 3)Harry Potter");
	var heroInt = parseInt(wizard)
	var hero = wizardArray[heroInt-1];

} else if (champion === "c") {
	alert ("Can you get any lazier? Picking a got to fight your fights! But you maybe in for a pretty unpleasant surprise. Did I fail to mention the gods do not like you too much? The fact that they are making you code something as convoluted as CSS should have been a good hint.")
	var god = prompt ("Choose the god who will fight ...well probably you instead of the bad guys. 1) Isis 2) Hera 3)Athena")
	var heroInt = parseInt(god)
	var hero = godArray[heroInt-1];
};


var weapon = prompt ("Choose a weapon or one will be chosen for you- 1) Arthur's sword Excalibur, 2) Arjuna's bow Gandiva, 3) Thor's hammer Mjolnir, 4) Dr. Strange's Eye of Agamotto, 5) Ring of Gyges , 6) Grimoire 7) Give me anything- I dont care");
var weaponInt = parseInt(weapon);
var randomWeapon = Math.floor(Math.random()*6);
if (weaponInt = 7) {
	var weaponChoice = weaponArray[randomWeapon];
} else {
	weaponChoice = weaponArray[weaponInt - 1]
};

alert ("Your champion" + " " + hero + " " + "armed with" + " " + weaponChoice+ " " + "is ready to ride into battle");

var map = prompt ("Which direction would you like your gullible champion to take?  east west north or south? ")
for (var i=0; i<direction.length; i++) {
	if (map= direction[i]) {
		alert (hero + " " + "rides" + " " +direction[i]);
	};
};

firstFight= prompt("You come upon a fierce fire spewing dragon. Actually no- its normally its fairly easy going as dragons go but happens to be in an bad mood having accidentally burnt its tail. Would you like to a) try and talk the dragon out of turning you into a steak. b) Fight the dragon and take posession of the fabled  drangon's egg c) Flee and try to find the enchanted armour to help you fight the dragon.");

alert ("You have to wait with bated breath to see where this neurotic coder takes you to next!")
};
// put code here!
