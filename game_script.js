//#####Initialing players details#####

var valueName = prompt('What is your name?'); //Prompt for player's name

if(isNaN(valueName)){       //Checking that input name is not a number
	console.log(valueName);
}else{
	var i = 0;              // Create a while loop so that if user enters wrong number, it will be prompt again
	while(i<Infinity){
		valueName = prompt('Re-enter your name, invalid character');
		if(isNaN(valueName)){
			console.log(valueName);
			break;
		}else{
			i++;	
		}
	}
}

function checkYear(year){   //function to check if year is numbers and year is 4 digit 
	yearInt = parseInt(year);
	if(Number.isInteger(yearInt) && year.length==4){
		return true;
	}else{
		return false;
	}
}

var timeTravel = prompt('Nice to meet you, '+valueName+'. Which year are you born in?');
if ( checkYear(timeTravel)===true ) {
	console.log(timeTravel);
}else {
	var i = 0;                // Create a while loop so that if user enters wrong number, it will be prompt again
	while(i<Infinity){
		timeTravel = prompt('Re-enter your year, invalid character');
		if( checkYear(timeTravel)===true ){
			console.log(timeTravel);
			break;
		}else{
			i++;
		}
	}
}


//#####Starting of the game#####

var playerPoints=null;
var hitPoints=null;
var playerHealth=null;
var enemyHealth=null;
var enemyHitPoints=null;
var chosenPlayer = startGame();

function startGame(){
	var fighterPlayer = prompt('In the era that you are in who is the greatest fighter you adore?');
	return fighterPlayer;
}

function randWeapons(){
	var weaponKey= Object.keys(weaponsAvailable);
	var randWeapon = Math.floor(Math.random()*weaponKey.length);
	var randWeaponKey = weaponKey[randWeapon];
	var weaponSelected = weaponsAvailable[randWeaponKey]; //Prints out random weapon for 'special item'
	return parseInt(weaponSelected);
}

function shopWeapons(){
	var weaponsAvailable = {sword:10, hooks:5, guns:15, bambooStick:5, special:20};
	var weaponChosen = prompt('What weapons do you want'+chosenPlayer+'We have sword,hooks,guns,bambooStick,special,random');
	if(weaponChosen==='random'){
		hitPoints+=randWeapons();
	}else{
		hitPoints+=parseInt(weaponsAvailable[weaponChosen]);
	}
	console.log('Your current Hit Points are ' + hitPoints + 'damage');
}

function readyBattle(){
	var readyBattle = prompt('Do you want to go into battle or continue to train more?**(B/T)**')
	if(readyBattle==='B'){
		alert('Going into battle mode');
		battleMode();
	}else if(readyBattle==='T'){
		var trainingGrd = prompt('where would you like to train? Deep Ocean Gym, Forest of death or Sun Palace of Gods? **(O/F/S)**');
		if(trainingGrd==='O'){
			alert('Welcome to the Deep Ocean Gym, I heard you are here to gain more experience.');
			var pickSkill = prompt('Choose one skill that you would like to train ? ' + skills);
			powerBoard[pickSkill]+=parseInt(3); //IT SEEMS THAT I ADD IT AS A STRING INSTEAD OF THE EXISITING NUMBER
		}else if(trainingGrd==='F'){
			alert('Welcome to the Forest of death, training here is tough but rewarding')
			var pickSkill = prompt('Choose one skill that you would like to train ? ' + skills);
			powerBoard[pickSkill]+=parseInt(4);
		}else if(trainingGrd==='S'){
			alert('Welcome to Sun Palace of Gods, here you will be training with the most powerful Gods')
			var pickSkill = prompt('Choose one skill that you would like to train ? ' + skills);
			powerBoard[pickSkill]+=parseInt(5);
		}
	}
}

//adding of points to the hitPoints section
function totalPoints(){
	for(i=0;i<skills.length;i++){
		powerBoard[skills[i]]+=parseInt(hitPoints);
	}
}

function battleMode(){
var enemy2Fight= prompt('Going into battle, Who do you want to battle with? kenMaster, ryu or chunLi');
var enemyBattle = {kenMaster:90,ryu:60,chunLi:100};
var enemies = Object.keys(enemyBattle);
var enemiesHealth = Object.values(enemyBattle);

for (var i=0; i<enemies.length; i++){
  if (enemy2Fight == enemies[i]){
    enemyHealth += enemiesHealth[i];
  }
}

fightBegin = prompt('Are you ready to fight '+ chosenPlayer+'?**(Y/N)**');
if(fightBegin==='Y'){
alert('Your player stats are' + 'Hit: '+ playerPoints + 'Health: ' + playerHealth);
alert('After round one, you have suffered a big hit')


}else if(fightBegin==='N'){
	readyBattle();
}else{
	readyBattle()
}
// pathOne		
startGame();
var fighterDemo = prompt('Is '+chosenPlayer+' an Asian or American fighter?');
if(fighterDemo=== 'Asian'){
	playerHealth+=500;
	var potion = prompt('There is a special potion found in China town, this potion is gives superhuman strength, shall I bring you there? **(Y/N)**');
	if(potion==='Y'){
		console.log('You have arrived to the door of the shop, the road ahead is a tough journey young warrior, Good luck, You will need all the luck you can get');
	}else if (potion==='N'){
		var decision = prompt('Do you wish to choose another character? Or go exit the game?**(S/Q)**');
		if(decision==='S'){
			console.log('You have made the right choice young one, the journey ahead will be an interesting one');
		}else if (decision==='Q'){
			startGame();
		}
	}
}else if (fighterDemo==='American'){
	playerHealth+=400;
	var choice = prompt('There is a mystical weapon found in the forest of trees, shall I bring you there? **(Y/N)**');
	if(choice==='Y'){
		choiceTwo = prompt('You are at the entrance of the forest, it is getting late are you sure you want to continue? **(Y/N)**');
		if(choiceTwo==='Y'){
			console.log('Good luck');
		}else if(choiceTwo==='N'){
			console.log('Maybe I can bring you here again tomorrow morning');
		}
	}else if(choice==='N'){
		console.log('I see that you are quite confident without a weapon, weapon gives higher damage and gives you more health, Good Luck than');
	}
}
readyBattle();// A calling function to ask if the player is ready to battle

//pathTwo
var weaponBuy = prompt('Do you wish to buy a weapon?**(Y/N)**');
if(weaponBuy==='Y'){
	shopWeapon();
}else if(weaponBuy==='N'){
	var confirmDec = prompt('May the force be with you, are you sure you dont want to get a weapon? **(Y/N)**');
	if(confirmDec === 'N'){
		shopWeapon();
	}else if (confirmDec === 'Y'){
		console.log('Alright, Good Luck my friend');
	}

}
readyBattle();// A calling function to ask if the player is ready to battle

//pathThree

var fighterSkills = prompt('What does this '+fighterDemo+' top 3 skills?');
var skills=fighterSkills.split(',');
alert('Rules of the game, you only can give each skills a point from 1-5, you cannot give the same number twice to each skill');//HAVENT DONE THE CHECKING OF IF THE POINTS ARE DUPLICATED

var powerBoard = {};// Power board has the skills and the damage points ###VERY IMPORTANT###

for(i=0;i<skills.length;i++){
	powerBoard[skills[i]]=prompt('Enter your value **(1-5)**');
}

readyBattle();// A calling function to ask if the player is ready to battle

//pathFour
var training = prompt('Do you want to train somemore?**(Y/N)**');
if(training==='Y'){
	readyBattle();
}else if(training==='N'){
	var ready2Battle=prompt('Do you want to go into battle or weapon shop?**(Battle/Weapon)');
	if(ready2Battle==='Battle'){
		battleMode();
	}else if(ready2Battle==='Weapon'){
		weaponShop();
	}
}





























