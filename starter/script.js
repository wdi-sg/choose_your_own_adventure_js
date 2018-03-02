//status
var stats = {
	health:80,
	armour:0,
	damage:1,
	bag:{
		bread:35,
		pizza:20,
		bottle:20
	}
}

//Display the status in a more readable format;
var statsDisplay = function(){
	var statusDisplay = "";
	var heartSyb = "\uD83D\uDC9B";

	var health = heartSyb + ": " + stats["health"];  
	var armour = "armour: " + stats["armour"];
	var damage = "damage: " + stats["damage"];

	var backpack = "";
	//packCounter is for listing in numeric
	var packCounter = 1;
	for(var itemName in stats["bag"]){
		backpack += packCounter +"." + itemName + " ";
		packCounter ++;
	}

	statsDisplay = health + "%\n" + armour + "\n" + damage + "\n";	
	//alert("Current stats: \n" + statsDisplay + "\n bag:" + backpack);
	var output = "Current stats: \n" + statsDisplay + "bag:" + backpack;
	return output;
}

//enemy
var monsterList = {
	chicken:{
		health:50,
		armour:0,
		damage:5,
		description: "Delicious KFC",
	},
	dog:{
		health:50,
		armour:2,
		damage:10,
		description: "Such huge fangs!"
	}
}

//display the description and stats of monster
var monstDisplay = function(monster){
	var monstDisplay = "";
	var currMonst = monsterList[monster];
	for (var stat in currMonst){
		monstDisplay += stat + ": " + currMonst[stat] + "\n";
	}
	var output = "Enemy: " + monster + "\n" + monstDisplay;
	return output;	
}

var player = "";
//for storing the current monster being encountered
var monster = "";


/* <<<<< Execution commands >>>>>>*/
//timer set inside init
var gameStart = prompt("Game Title: Unexpected Journey into the Elven Lands \n Objective: Find your way back home! \n Game start [Y/N] \n Game Help[H] \n What to expect?[W]");
if(checkGameStart(gameStart)==true){
	console.log("<<<<< Unexpected Journey in to the Elven Lands >>>> + \n By: freeloops");
	gamePlay();
}

//gameplay code
function gamePlay(){
	//choice will store the decision made in each step
	var choice="";

	var player = prompt("Enter your name!");
	alert("Hi " + player + "!");
	// set timer?
	alert("You woke up feeling dazed after a long night of partying. You found yourself resting in a secluded haystack inside possibly a small shack. You feel thirsty and reached out to your bag.");
	//open stats
	alert(statsDisplay());

	//Part1: the bottle
	choice = prompt("You found yourself a bottle. It's full? Drink or save it for later? [Y/N]");
	if(choice=="Y"){
		stats["health"] = eatFood(choice,"bottle");
		alert("You feel refreshed and healthy. Your health status is currently " + stats["health"] + "%. \n bottle has been removed from your bag");
		//check current bag status
		alert("These are your current inventories: " + checkBag());
	}
	else if(choice=="N"){
		stats["health"] = eatFood(choice,"bottle");
		alert("You decide against drinking. It is best to save it for later. You felt dehydrated, your health is " + stats["health"] + "%");
		//check current bag status
		alert("These are your current inventories: " + checkBag());
	}

	//Part2: the map
	choice = prompt("You brushed off the dust on your body and feel ready to go. Upon opening the shack, you found yourself in a valley. There is a map on the shack. Do you want to read it?[Y/N]");
	if(choice=="Y"){
		alert("Head east to priff [->] \n Head west to ardougne [<-]")
	}
	choice = prompt("There are two ways out of valley! Head to east or west exit [</>]");

	//Part3: the monster fight
	monster = monsterFreq();

	alert("As you are walking, you got attacked by a " + monster + " !");
	alert(monstDisplay(monster));
	var whoWins = fight(player,monster);	
	if(whoWins==player){
		alert("There're more adversity ahead! Content in development.");
	}
	else{
		alert("Hope you enjoy playing!");
	}
}


/** <<<<<<<<<<<<<<<< Helper functions below here >>>>>>>>>>>>>>>>> */

//check gameStart direct accordingly on what was keyed in
function checkGameStart(gameStart){
  if(gameStart=="Y"){
    return true;
  }
  else if (gameStart == "N"){
    console.log("We shall play next time then!");
    return false;
  }
  else{
  	console.log("Function still in development!");
  	return false;
  }
}

//function to show only bag
function checkBag(){
	var backpack = "";
	//packCounter is for listing in numeric
	var packCounter = 1;
	for(var itemName in stats["bag"]){
		backpack += packCounter +"." + itemName + " ";
		packCounter ++;
	}
	return backpack;
}

//roll dice to see which monster appear
function monsterFreq(){
	var monster = "";

	//dice to calculate probability
	var dice = Math.random();
	//if certain proability, certain mobs will appear,
	if (dice<0.3){
		monster = "dog";
	}
	else if (dice>0.3){
		monster = "chicken";
	}
	return monster;
}

function menu(monster){
	//1. Attack 2. Food 3. Run
	var output = prompt(statsDisplay+"\n\n"+ monstDisplay(monster) + "\n" + "Attack(A) \n Food(F) \n Run(R)");
	return output;	
}

//target refers to the subject being attacked
function attack(target,player,playHp,playArmour,playDamage,monster,monstHp,monstArmour,monstDamage){

	var hitOrMiss = Math.random();
	console.log(hitOrMiss);
	//roll and add two dice(for player). add damage - armour --> health change
	if(target==monster){
		//successful hit
		if(hitOrMiss<0.8){
			var bonusDamage = Math.floor((Math.random()*6)+1) + Math.floor((Math.random()*6)+1);
			var m_finalHp = monstHp + monstArmour - playDamage - bonusDamage;
			var difference = monstHp - m_finalHp;
			//return modified monster health
			alert("You land a blow on the monster! You damaged it by " + difference);
			return m_finalHp;
		}
		//miss
		else {
			//return starting monster health			
			alert("The monster expertly evades your attack!");
			return monstHp;
		}
	}
	else if(target==player){
		var p_finalHp = playHp + playArmour - monstDamage;
		var difference = playHp - p_finalHp;
		//return modified player health
		alert("Ouch! That monster hurts! You got damaged by " + difference);
		return p_finalHp;
	}
}

function eatFood(choice,item){
	//get the specific item-value from the stats Object
	var food = stats["bag"][item];
	//get the initial health
	var initialHp = stats["health"];

	if(choice=="Y"){
		//restore health from food
		var finalHp = food + initialHp;
		//remove the food from bag since it's gone
		delete stats["bag"][item];
		return finalHp;
	}
	else{
		//no change to health stat
		return initialHp;
	}
}

function run(){
	//code to be added
}

function fight(player,monster){
	//note hp is abbreviation for health

	//get stats for player
	var playHp = stats["health"];  
	var playArmour = stats["armour"];
	var playDamage = stats["damage"];
	//get stats for monster
	var monstHp = monsterList[monster]["health"];
	var monstArmour = monsterList[monster]["armour"];
	var monstDamage = monsterList[monster]["damage"];

	var turn = "";
	turn = fightFirst(player,monster);
	alert(turn + " will begin first!");

	//store the winner of battle
	var winner = "";
	var running = true;

	//loop until the fight end. i.e. hp of one of them drop to 0
	while(running){
		if(turn==player){
			alert("It's " + player + " turn!");
			var input = menu(monster);
			if(input=="A"){
				monstHp = attack(monster,player,playHp,playArmour,playDamage,monster,monstHp,monstArmour,monstDamage);
				alert(monster + " currently has " + monstHp);
			}
			else if(input=="F"){
				var choice = "Y";
				var whatFood = prompt("What food do you want to eat? \n this is what you have in your bag: \n" + checkBag() + "\n key in the food that you want");
				//hp changes with food
				playHp = eatFood(choice,whatFood);
				alert("You ate " + whatFood + "\n your health is now " + playHp);
			}
			else if(input=="R"){
				alert("You escaped from battle!");
				winner=player;
				break;
			}
			turn=monster;
		}
		else if(turn==monster){
			alert("It's " + monster + " turn");
			playHp = attack(player,player,playHp,playArmour,playDamage,monster,monstHp,monstArmour,monstDamage);
			alert(player + " currently has " + playHp);
			turn=player;
		}

		//check for who dies
		if(playHp<=0){
			alert("GAME OVER! YOU DIED!");
			winner=monster;
			break;
		}
		if(monstHp<=0){
			alert("You defeated " + monster + " !");
			winner=player;
			break;
		}
	}
	return winner;
}

function fightFirst(player,monster){
	var dice = Math.random();
	if (dice<=0.5){
		return player;
	}
	else{
		return monster;
	}
}




