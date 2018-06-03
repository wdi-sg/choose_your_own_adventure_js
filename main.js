// A simple adventure game inspired by drunken journey on friday. Vinny goes to whiteCastle

//Character profile as an Object that can be manipulated. Name and Drunkedness.

character = {
	name: '' ,
	drunkedness: 0
}


var beer = function() {
	var pints =  10 //Math.floor((Math.random() * 5) + 1) 
	return character.drunkedness += pints; 
}

var shots = function() {
	var shots =  10 //Math.floor((Math.random() * 10) + 1) 
	return character.drunkedness += shots; 
}

//simple rule alerting the end of the game and showing the drunkedness score
 if (character.drunkedness > 10) {
 	alert("Game over! Enjoy the hangover! You got " + character.drunkedness + "/10 drunk")	
 }

//Level 0: where user inputs name name and the name is added to the character object.
character.name = prompt('What is your name tired soul?')

//Level 1:
var level1 = prompt('You have had a long week ' + character.name + '.' + ' Go home or Go hard?', 'home/hard' )
	if (level1 == 'home'){
		alert('You missed out on great night! You got ' + character.drunkedness + "/10 drunk")
	}
	if (level1 == 'hard') 
		//Level 2:
		level2 = prompt('Where are you going to meet your friends', 'cq/hv')

	
	