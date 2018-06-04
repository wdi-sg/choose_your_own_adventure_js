// put code here!
var door1 = function() {
	alert('You enter the first door and see an ogre inside the room.');
	alert('Suddenly, the door slams shut behind you and the ogre shouts:\n"WELCOME ADVENTURER. You have to answer a set of questions before I let you pass!"');
	random1 = Math.floor(Math.random() * 100);
	random2 = Math.floor(Math.random() * 100);
	randSum = random1 + random2;
	ans = '';
	while(ans != randSum) {
		ans = prompt('What is the result of ' + random1 + ' + ' + random2 + ' ?');
	}
	random3 = (Math.floor(Math.random() * 11)+1);
	random4 = (Math.floor(Math.random() * 11)+1);
	randProd = random3 * random4;
	ans1 = '';
	while(ans1 != randProd) {
		ans1 = prompt('Good! Next question. \nWhat is the result of ' + random3 + ' x ' + random4 + ' ?');
	}
	ans2 = '';
	ans2 = prompt('GOOD JOB!\nFINAL QUESTION:\nDO YOU LIKE JAVASCRIPT?');
	if (ans2[0].toLowerCase() == 'y') {
		alert('CONGRATULATIONS, YOU MAY PASS THROUGH.');
		ending();
	} else {
		alert('YOU SHALL NOT PASS!');
		alert('The angry ogre proceeds to attack you.\nYou attempt to use your ' + weapon + ' to defend yourself but the ogre overpowers you.');
		dead('not liking Javascript');
	}
}

var door2 = function() {
	alert('You enter the second door and see the evil wizard sound asleep.');
	whatNow = prompt('Do you want to attack the wizard[1] or get out of the room immediately[2]?');
	if (whatNow == 1) {
		alert('You managed to sneak up on the evil wizard.\nYou take a deep breath before using your ' + weapon + ' to attack him.');
		alert('The evil wizard wakes up and tries to fight back.\nYour ' + weapon + ' hits for the last time and the evil wizard falls to the ground.');
		alert('Nice one, you killed the evil wizard!');
		killWizard = true;
		ending();
	} else if (whatNow == 2) {
		alert('You managed to sneak out of the room without waking the evil wizard.');
		killWizard = false;
		ending();
	} else {
		alert('Suddenly, the evil wizard wakes up and casts a spell on you.\nYou turn to dust and fall to the ground.');
		dead('being indecisive and encountering the evil wizard');
	}
}

var princess = function() {
	alert('You see a lady tied to a chair.');
	alert('"Help! Please help me! I am the princess of Javascript Land." \nshe shouted.\nIf you help me, I will grant you the best Javascript skills in the world!');
	var help = prompt('Do you want to help the princess? (Y/N)');
	if (help[0] == 'y' || help[0] == 'Y') {
		alert('You walk over to the princess and untie her from the chair.')
		alert('"Thank you for helping me."\n"You are granted infinite Javascript skills!"');
		savePrincess = true;
		goDown();
	} else {
		alert('You decide to ignore the princess and walk away.')
		alert('"YOU WILL REGRET THIS!"\n*princess cries*');
		savePrincess = false;
		goDown();

	}	
}

var witch = function() {
	alert('You realise that the evil witch has noticed you.');
	alert('You run back towards the staircase but the witch teleports in front of you and blocks your way.')
	alert('Before you can use your ' + weapon + ', she casts a spell and you turn into stone.')
	dead('encountering the evil witch');
}

var goUp = function() {
	alert('You walk up the staircase, wondering what awaits you upstairs.');
	if (light) {
		alert('You get to the top of the stairs and take a moment to catch your breath. You continue walking down the corridor.');
		princess();
	} else {
		alert('At the end of the stairs, you see a silhouette of what appears to be a person.');
		alert('You decide to walk towards the silhouette and check it out.');
		q2 = prompt('Do you want to switch on your torchlight? (Y/N)');

		if (q2[0] == 'y' || q2[0] == 'Y') {
		random = Math.floor(Math.random() * 2);
		if (random == 1) {
			alert('You switch on the torchlight and with the lights on,');
			princess();
		} else {
			alert('You switch on the torchlight and with the lights on,');
			witch();
		}
	} else {
		alert('You walk closer to the silhouette, curious as to what it may be.');
		witch();
	}
	}
}

var goDown = function() {
	alert('Attempting to find a way out, you walk down the stairs.');
	door = ''
	while (door != 1 && door != 2) {
		door = prompt('You reach the junction and there are 2 doors, do you want to enter door 1 or door 2? [1/2]')
	if (door == 1) {
			door1();
		} else if (door == 2) {
			door2();
		} else {
			alert('There is no other path from here, you have to pick a door!');
		}
	}	
}

var door = function() {
	alert('You walk through the door, there is a staircase leading upstairs and another leading downstairs.');
	direction = '';
	while (direction != 1 && direction != 2) {
		direction = prompt('Do you want to proceed upstairs[1] or downstairs[2]?'); 
		if (direction == 1) {
			goUp();
		} else if (direction == 2) {
			goDown();
		} else {
			alert('FORBIDDEN, NOT ALLOWED!');
		}
	}
}

var chooseWeapon = function() {
	weaponNum = prompt('You need to choose a weapon, do you want the sword[1] or the axe[2]?');
	if (weaponNum == 1) {
		weapon = 'sword';
	} else if (weaponNum == 2) {
		weapon = 'axe';
	} else {
		weapon = 'fist';
	}
	alert('Nice, you chose ' + weapon + '. That is a good choice!');
	if (light) {
		alert('You walk down the pathway to see a door that is half open.');
	} else {
		alert('You stumble your way through a narrow pathway that leads to a door.');
	} door();
}

var torchOn = function() {
	light = true;
	alert('Okay cool, you see a narrow pathway that leads to a door.');
	chooseWeapon();
}

var torchOff = function() {
	light = false;
	alert('You keep the torchlight in your pocket, it sure is dark in here.');
	chooseWeapon();
}

var ending = function() {
	alert('At the end of the door, you find a pot of gold coins.');
	gold = prompt('How many gold coins do you take?');
	alert('You managed to find your way to the exit. Congratulations!');
	alert('Player: ' + name +'\nGold = ' + gold);
	if (killWizard == true && savePrincess == true) {
		alert("You killed the evil wizard and rescued the princess.\nYou return to the village to be appointed as the new price of Javascript.\nNice one!");
	}
	else if (killWizard == true && savePrincess == false) {
		alert('You managed to kill the evil wizard but the princess is still trapped in the dungeon.');
	}
	else if (killWizard == false && savePrincess == true) {
		alert('You saved the princess but the evil wizard is still somewhere in the dungeon.');	
	}
	else if (killWizard == false && savePrincess == false) {
		alert('You managed to escape the dungeon but you wonder what brought you there in the first place. Hmm...');
	}

	alert('"THE END"');
	replay = prompt('Do you want to play again? (Y/N)');

	if (replay[0] == 'y' || replay[0] == 'Y') {
		start();
	} else {
		alert('Thanks for playing, goodbye.');
	}	
}

var dead = function(how) {
	alert('Player: ' + name + '\nYou died by ' + how + '.');
	alert('"THE END"');
	replay = prompt('Do you want to play again? (Y/N)');

	if (replay[0] == 'y' || replay[0] == 'Y') {
		start();
	} else {
		alert('Thanks for playing, goodbye.');
	}	
}
var start = function() {

	name = '';
	while (name == '' || name[0] == ' ') {
		name = prompt('What is your name?');
	}
	killWizard = false;
	savePrincess = false;
	alert('Hello ' + name + ', get ready for your adventure.');
	alert('You wake up and find yourself in a dark room.');
	alert('You check your surroundings to find a small torchlight, a sword and an axe.');
	var q1 = prompt('You pick up the torchlight. Do you want to turn it on? (Y/N)');

	if (q1[0] == 'y' || q1[0] == 'Y') {
		torchOn();
	} else {
		torchOff();
	}
}


start();