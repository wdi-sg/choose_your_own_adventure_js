// A simple adventure game inspired by drunken journey on friday.

//Character profile as an Object that can be manipulated. Name and Drunkedness.

character = {
	name: '' ,
	drunkedness: 0,
	location: ''
}


var beer = function() {
	var pints =  Math.floor((Math.random() * 5) + 1) 
	return character.drunkedness += pints; 
}

var shots = function() {
	var shots =  Math.floor((Math.random() * 7) + 1) 
	return character.drunkedness += shots; 
}

var pickYourPoison = function(poison) {
			switch (poison) {
			 	case 'shots' : shots();
			 	console.log(character.drunkedness);
			 	break;
			 	case 'beer' : beer();
			 	console.log(character.drunkedness);
			 	break;
}
}



//Level 0: where user inputs name name and the name is added to the character object.
	character.name = prompt('What is your name tired soul?')

//simple rule alerting the end of the game and showing the drunkedness score
 /*if (character.drunkedness > 10) {
 	alert("Game over! Enjoy the hangover! You got " + character.drunkedness + "/10 drunk");	*/

//Level 1:
	var level1 = prompt('You have had a long week ' + character.name + '.' + ' Go home or Go hard?', 'home/hard' )
	if (level1 == 'home'){
		alert('You missed out on great night! You got ' + character.drunkedness + "/10 drunk")
	}
	if (level1 == 'hard') 
		//Level 2:
		var level2 = prompt('Where are you going to meet your friends?', 'cq/hv')
		if (level2 == 'cq' || level3 == 'cq') {
			character.location = 'Clarke Quay';
			//Level 3: Run pickYourPoison fucntion. It runs till drunkedness >= 5.
			 var poison = prompt('You reach Clarke Quay. Your friends urge you to to pick your poison!', 'beer/shots')
			 pickYourPoison(poison)
			 while (character.drunkedness < 5) { poison = prompt('Still sober! Drink somemore!', 'beer/shots')
			 pickYourPoison(poison)
				}
				//Level 4: if drunkedess from previous while loop > 8 game over.
				// else character is given option to proceed home or head to hv.
				if (character.drunkedness > 10) {
 				alert("Enjoy the hangover! You got " + character.drunkedness + "/10 drunk")}
 				else {
 				var level3 = prompt('Everything is fuzzzxssyy now. Head home or not.' )
 				if (level3 == 'home'){
				alert('You know when to quit! You got ' + character.drunkedness + "/10 drunk")
				}
 				}
		}

			

		if (level2 == 'hv' || level3 == 'hv')	{
		character.location = 'Holland Village';
			//Level 3: Run pickYourPoison fucntion. It runs till drunkedness >= 5.
			 var poison = prompt('You reach Holland Village. Your friends urge you to to pick your poison!', 'beer/shots')
			 pickYourPoison(poison)
			 while (character.drunkedness < 5) { poison = prompt('Still sober! Drink somemore!', 'beer/shots')
			 pickYourPoison(poison)
				}
				//Level 4: if drunkedess from previous while loop > 8 game over.
				// else character is given option to proceed home or head to hv.
				if (character.drunkedness > 10) {
 				alert("Enjoy the hangover! You got " + character.drunkedness + "/10 drunk")}
 				else {
 				var level3 = prompt('Everything is fuzzzxssyy now. Head home or not.' )
 				if (level3 == 'home'){
				alert('You know when to quit! You got ' + character.drunkedness + "/10 drunk")
				}
 				}
		}

	