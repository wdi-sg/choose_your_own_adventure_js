console.log("hello script js");

/* 
Further improvements which could be added: 
1. Choosing the starter pokemon. 
2. Resetting the game with full health points for all pokemon.
*/

//Identify move the user chose
var whichMove = 0

//Identify move opponent chose
var hisMove = 0

//Define Game State 
const state = {
	current: 3,
	start: 3,
	inBattle: 1,
	transit: 2,
	
}

//Index of Opponents Pokemon
var oppIndex = 2; 

//See if a move can be found
var found = 0;


//Track choices
var tracker = "";

//To help in displaying opponent choices
var choice1;
var choice2;

//Track no. of battles completed. Game ends when it reaches 0.
var stage = 3;


//Returns the pokemon object, given the oppIndex
var opp;

var inputHappened = function(currentInput){
  	switch(state.current){
		case state.intro:
			state.current = state.start;
			//Resets HP
			
			
			return displayIntro();
			//display and change to state start.
			//reset health points

		case state.start:
			
			if(currentInput == "s"){
				
				document.querySelector('#input').value = "";
				generateOpponent();
				state.current = state.transit;
				//Return image of pokemon choices
				displayChoices(choice1,choice2);
				return "Choose your opponent : "+pokemon[choice1].name+" or "+pokemon[choice2].name
			} else {
				document.querySelector('#input').value = "";
				return "Key in s you idiot."
			}

		case state.inBattle:
			//Reset the below index finder function so it works every call.
			found = 0
			// Finds the index of the move the user chose 
			for ( let i = 0; i < pokemon[0].Attack.length; i++){
				if(currentInput == pokemon[0].Attack[i].name){
					whichMove = i;
					found = 1;
					break;
				}
			}

			//If it isn't found, ask the user to try again.
			if (found == 0){
				document.querySelector('#input').value = "";
				return "Invalid Move. "+" "+pokemon[0].Attack[0].name+" or "+pokemon[0].Attack[1].name+" ? "
			}

			//Run the inBattle function and return its output. 
			return inBattle(currentInput,oppIndex);

		case state.transit:
			//state.transit displays opponent choices, and awaits input of user's choice.

			//Make sure input is valid
			if (!(currentInput == pokemon[choice1].name || currentInput == pokemon[choice2].name)){
				document.querySelector('#input').value = "";
				return "Can't recognise input, try again. "+pokemon[choice1].name+" or "+pokemon[choice2].name 
			} else {

				//Find oppIndex of input
				for(let i = 0; i < pokemon.length; i++){
					if(currentInput == pokemon[i].name){
						oppIndex = i;
						break;
					}
				}

				tracker = tracker.concat(oppIndex);
				document.querySelector('#input').value = "";
				state.current = state.inBattle;
				opp = pokemon[oppIndex];
				//* Display Pikachu Image
				displayOppImage(opp);
				
				return "You have chosen "+pokemon[oppIndex].name+" as your opponent! Prepare for battle! Enter your first move"
			} 
	}//end switch
}

//Represents a tree, where there are 32 different outcomes at the final stage.
function generateOpponent(){

	if(tracker.length == 0){
		choice1 = 1;
		choice2 = 2;
	} else {
		var x = tracker.substring(tracker.length - 2,tracker.length)

		if (x == "1w"){
			choice1 = 3;
			choice2 = 4;
		} else if (x == "1l"){
			choice1 = 5;
			choice2 = 6;
		} else if (x == "2w"){
			choice1 = 7;
			choice2 = 8;
		} else if (x == "2l"){
			choice1 = 9;
			choice2 = 10;
		} else if (x == "3w"){
			choice1 = 11;
			choice2 = 12;
		} else if (x == "3l"){
			choice1 = 13;
			choice2 = 14;
		} else if (x == "4w"){
			choice1 = 15;
			choice2 = 16;
		} else if (x == "4l"){
			choice1 = 17;
			choice2 = 18;
		} else if (x == "5w"){
			choice1 = 19;
			choice2 = 20;
		} else if (x == "5l"){
			choice1 = 21;
			choice2 = 22;
		} else if (x == "6w"){
			choice1 = 23;
			choice2 = 24;
		} else if (x == "6l"){
			choice1 = 25;
			choice2 = 26;
		} else if (x == "7w"){
			choice1 = 27;
			choice2 = 28;
		} else if (x == "7l"){
			choice1 = 29;
			choice2 = 30;
		} else if (x == "8w"){
			choice1 = 31;
			choice2 = 32;
		} else if (x == "8l"){
			choice1 = 33;
			choice2 = 34;
		} else if (x == "9w"){
			choice1 = 35;
			choice2 = 36;
		} else if (x == "9l"){
			choice1 = 37;
			choice2 = 38;
		} else if (x == "0w"){
			choice1 = 39;
			choice2 = 40;
		} else if (x == "0l"){
			choice1 = 41;
			choice2 = 42;
		} 
	}//end else

}

//Generates an attack instance and deduct HP accordingly
function seeIfHits(attacker,move,defender){
	var attackersMove = attacker.Attack[move]
	console.log(attackersMove,defender)
	if(Math.random() <= attackersMove.accuracy) {
		//Deduct attack damage from Opponents's HP
		defender.HP = Math.max(defender.HP - attackersMove.damage,0);
		return "hits for "+attackersMove.damage+" damage"
	} else {
		return "misses "
	}
}

//Randomises opponent's move
function choiceOfMove(){
	//returns 0 or 1
	return Math.round(Math.random());
}

// inBattle function
function inBattle(yourMoveChoice,opponent){



	//After move is selected, see if it hits
	var didIHit = seeIfHits(pokemon[0],whichMove,pokemon[oppIndex])
	//then opponents'choice of move, hit/miss
	hisMove = choiceOfMove();
	var didItHit = seeIfHits(pokemon[oppIndex],hisMove,pokemon[0])
	
	//*clear line for next input (before returning)
	document.querySelector('#input').value = "";
	//Display image of opponent pokemon
	displayOppImage(opp);

	//when either pkmn's HP'reaches zero, end the game
	if(pokemon[0].HP <= 0 || pokemon[oppIndex].HP <= 0){
		//when game ends, change the game state
		state.current = state.transit
		//track no. of battles completed.
		stage--
		//Store previous Pikachu's HP
		var prevHP = pokemon[0].HP;

		if(stage == 0){
			if (pokemon[0].HP > 0 && pokemon[oppIndex].HP <= 0){
				tracker = tracker.concat("w")
			} else {
				tracker = tracker.concat("l")
			}
			
			// return no. of wins and no. of losses 
			return pokemon[0].name+" uses "+pokemon[0].Attack[whichMove].name+"\n It "+didIHit+" ! \n"+pokemon[oppIndex].name+" uses \
	 "+pokemon[oppIndex].Attack[hisMove].name+"\n It "+didItHit+" ! \n"+pokemon[0].name+" HP : \
	 "+pokemon[0].HP+"\n "+ pokemon[oppIndex].name+" HP : "+pokemon[oppIndex].HP+" \n Game Over! "+countWins()+"\n Refresh the page to restart:)"
		}

		if( pokemon[0].HP <= 0 && pokemon[oppIndex].HP > 0){
			tracker = tracker.concat("l");
			generateOpponent();
			pokemon[0].HP = 80;
			displayChoices(choice1,choice2);
			return pokemon[0].name+" uses "+pokemon[0].Attack[whichMove].name+"\n It "+didIHit+" ! \n"+pokemon[oppIndex].name+" uses \
	 "+pokemon[oppIndex].Attack[hisMove].name+"\n It "+didItHit+" ! \n"+pokemon[0].name+" HP : \
	 "+prevHP+"\n "+ pokemon[oppIndex].name+" HP : "+pokemon[oppIndex].HP+" \n \n"+"YOU LOSE! Choose your next opponent : "+pokemon[choice1].name+" or "+pokemon[choice2].name 
	
		} else if (pokemon[0].HP > 0 && pokemon[oppIndex].HP <= 0){
			tracker = tracker.concat("w");
			generateOpponent();
			pokemon[0].HP = 80;
			displayChoices(choice1,choice2);
			return pokemon[0].name+" uses "+pokemon[0].Attack[whichMove].name+"\n It "+didIHit+" ! \n"+pokemon[oppIndex].name+" uses \
	 "+pokemon[oppIndex].Attack[hisMove].name+"\n It "+didItHit+" ! \n"+pokemon[0].name+" HP : \
	 "+prevHP+"\n "+ pokemon[oppIndex].name+" HP : "+pokemon[oppIndex].HP+"\n \n"+"YOU WIN! Choose your next opponent : "+pokemon[choice1].name+" or "+pokemon[choice2].name
	
		} else {
			tracker = tracker.concat("l")
			generateOpponent();
			pokemon[0].HP = 80;
			displayChoices(choice1,choice2);
			return pokemon[0].name+" uses "+pokemon[0].Attack[whichMove].name+"\n It "+didIHit+" ! \n"+pokemon[oppIndex].name+" uses \
	 "+pokemon[oppIndex].Attack[hisMove].name+"\n It "+didItHit+" ! \n"+pokemon[0].name+" HP : \
	 "+prevHP+"\n "+ pokemon[oppIndex].name+" HP : "+pokemon[oppIndex].HP+"\n \n"+"DOUBLE-KO! Choose your next opponent : "+pokemon[choice1].name+" or "+pokemon[choice2].name
	
		}
	}

	//if game didn't end, return your attack chosen, hit/miss and opponents' one as well
	//and current HP
	return pokemon[0].name+" uses "+pokemon[0].Attack[whichMove].name+"\n It "+didIHit+" ! \n"+pokemon[oppIndex].name+" uses \
	 "+pokemon[oppIndex].Attack[hisMove].name+"\n It "+didItHit+" ! \n"+pokemon[0].name+" HP : \
	 "+pokemon[0].HP+"\n "+ pokemon[oppIndex].name+" HP : "+pokemon[oppIndex].HP+"\n Enter your next move."

}

function countWins(){
	if (tracker.length = 0){
		return "This is strange, you have not played any games."
	} else {
		var x = tracker.match(/w/gi).length;
		return "You have won "+x+" out of 3 games"
	}
}


//Create Oringial Pokemon List 

const pokemon = [
	{
	//User Pokemon
	name: "Pikachu",
	HP: 80,
	Attack:[{
		name: "Thunderbolt",
		damage: 35,
		accuracy: 0.7
		},
		{
		name: "Zap",
		damage: 250,
		accuracy: 0.34
		}],
	link: "https://img.pokemondb.net/artwork/large/pikachu.jpg"
	},
	{
	name: "Plusle",
	HP: 70,
	Attack: [{
		name: "Tackle",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Doubleslap",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/plusle.jpg"
	},
	{
	name: "Charizard",
	HP: 125,
	Attack: [{
		name: "Fireblast",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Ember",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/charizard.jpg"
	},
	{
	name: "Blastoise",
	HP: 125,
	Attack: [{
		name: "Hydropump",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Ice Beam",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/blastoise.jpg"
	},
	{
	name: "Rayquaza",
	HP: 150,
	Attack: [{
		name: "Extreme Speed",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Dragon Rage",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/rayquaza.jpg"
	},
	{
	name: "Kyogre",
	HP: 125,
	Attack: [{
		name: "Sheer-Cold",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Dive",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/kyogre.jpg"
	},
	{
	name: "Groundon",
	HP: 125,
	Attack: [{
		name: "Earthquake",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Sandstorm",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/groundon.jpg"
	},
	{
	name: "Lugia",
	HP: 125,
	Attack: [{
		name: "Fly",
		damage: 35,
		accuracy: 0.7
		},
		{
		name: "Blizzard",
		damage: 76,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/lugia.jpg"
	},
	{
	name: "Weedle",
	HP: 55,
	Attack: [{
		name: "Poison Sting",
		damage: 5,
		accuracy: 0.9
		},
		{
		name: "Pound",
		damage: 30,
		accuracy: 0.7
		}],
	link: "https://img.pokemondb.net/artwork/large/weedle.jpg"
	},
	{
	name: "Kakuna",
	HP: 85,
	Attack: [{
		name: "Slam",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Blizzard",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/kakuna.jpg"
	},
	{
	name: "Beedrill",
	HP: 100,
	Attack: [{
		name: "Horn Drill",
		damage: 250,
		accuracy: 0.28
		},
		{
		name: "Poison Sting",
		damage: 29,
		accuracy: 0.9
		}],
	link: "https://img.pokemondb.net/artwork/large/beedrill.jpg"
	},
	{
	name: "Pidgey",
	HP: 75,
	Attack: [{
		name: "Tackle",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Gust",
		damage: 40,
		accuracy: 0.5
		}],
	link: "https://img.pokemondb.net/artwork/large/pidgey.jpg"
	},
	{
	name: "Rattata",
	HP: 125,
	Attack: [{
		name: "Hyperfang",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Pound",
		damage: 70,
		accuracy: 0.5
		}],
	link: "https://img.pokemondb.net/artwork/large/rattata.jpg"
	},
	{
	name: "Raticate",
	HP: 125,
	Attack: [{
		name: "Hyperfang",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Surf",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/raticate.jpg"
	},
	{
	name: "Nidoqueen",
	HP: 125,
	Attack: [{
		name: "Toxic",
		damage: 25,
		accuracy: 0.3
		},
		{
		name: "Slam",
		damage: 70,
		accuracy: 0.45
		}],
	link: "https://img.pokemondb.net/artwork/large/nidoqueen.jpg"
	},
	{
	name: "Clefairy",
	HP: 150,
	Attack: [{
		name: "Pound",
		damage: 15,
		accuracy: 0.99
		},
		{
		name: "Double-edge",
		damage: 78,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/clefairy.jpg"
	},
	{
	name: "Ninetales",
	HP: 100,
	Attack: [{
		name: "Ember",
		damage: 35,
		accuracy: 0.7
		},
		{
		name: "Firespin",
		damage: 60,
		accuracy: 0.5
		}],
	link: "https://img.pokemondb.net/artwork/large/ninetales.jpg"
	},
	{
	name: "Golbat",
	HP: 150,
	Attack: [{
		name: "Fly",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Crunch",
		damage: 4,
		accuracy: 0.99
		}],
	link: "https://img.pokemondb.net/artwork/large/golbat.jpg"
	},
	{
	name: "Dugtrio",
	HP: 150,
	Attack: [{
		name: "Dig",
		damage: 25,
		accuracy: 0.9
		},
		{
		name: "Earthquake",
		damage: 50,
		accuracy: 0.5
		}],
	link: "https://img.pokemondb.net/artwork/large/dugtrio.jpg"
	},
	{
	name: "Venomoth",
	HP: 125,
	Attack: [{
		name: "Gust",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Confusion",
		damage: 35,
		accuracy: 0.6
		}],
	link: "https://img.pokemondb.net/artwork/large/venomoth.jpg"
	},
	{
	name: "Meowth",
	HP: 55,
	Attack: [{
		name: "Payday",
		damage: 25,
		accuracy: 0.9
		},
		{
		name: "Scratch",
		damage: 29,
		accuracy: 0.7
		}],
	link: "https://img.pokemondb.net/artwork/large/meowth.jpg"
	},
	{
	name: "Mankey",
	HP: 150,
	Attack: [{
		name: "Crosschop",
		damage: 75,
		accuracy: 0.3
		},
		{
		name: "One-punch-one-kill",
		damage: 150,
		accuracy: 0.2
		}],
	link: "https://img.pokemondb.net/artwork/large/mankey.jpg"
	},
	{
	name: "Poliwrath",
	HP: 125,
	Attack: [{
		name: "Bubblebeam",
		damage: 35,
		accuracy: 0.7
		},
		{
		name: "Megapunch",
		damage: 70,
		accuracy: 0.5
		}],
	link: "https://img.pokemondb.net/artwork/large/poliwrath.jpg"
	},
	{
	name: "Machamp",
	HP: 175,
	Attack: [{
		name: "Megapunch",
		damage: 74,
		accuracy: 0.7
		},
		{
		name: "Megakick",
		damage: 123,
		accuracy: 0.2
		}],
	link: "https://img.pokemondb.net/artwork/large/machamp.jpg"
	},
	{
	name: "Tentacruel",
	HP: 150,
	Attack: [{
		name: "Surf",
		damage: 70,
		accuracy: 0.7
		},
		{
		name: "Poison-sting",
		damage: 29,
		accuracy: 0.5
		}],
	link: "https://img.pokemondb.net/artwork/large/tentacruel.jpg"
	},
	{
	name: "Golem",
	HP: 175,
	Attack: [{
		name: "Rollout",
		damage: 19,
		accuracy: 0.7
		},
		{
		name: "Blizzard",
		damage: 79,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/golem.jpg"
	},
	{
	name: "Rapidash",
	HP: 125,
	Attack: [{
		name: "Ember",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Extremespeed",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/rapidash.jpg"
	},
	{
	name: "Magneton",
	HP: 125,
	Attack: [{
		name: "Thunder",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Magnet pull",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/magneton.jpg"
	},
	{
	name: "Dodrio",
	HP: 125,
	Attack: [{
		name: "TriAttack",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Doublekick",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/dodrio.jpg"
	},
	{
	name: "Dewgong",
	HP: 125,
	Attack: [{
		name: "Surf",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Icebeam",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/dewgong.jpg"
	},
	{
	name: "Cloyster",
	HP: 125,
	Attack: [{
		name: "Surf",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Blizzard",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/cloyster.jpg"
	},
	{
	name: "Onix",
	HP: 125,
	Attack: [{
		name: "Bide",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Rock Throw",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/onix.jpg"
	},
	{
	name: "Hypno",
	HP: 125,
	Attack: [{
		name: "Psychic",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Confusion",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/hypno.jpg"
	},
	{
	name: "Exeggcute",
	HP: 125,
	Attack: [{
		name: "Seed Bomb",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Solar Beam",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/exeggcute.jpg"
	},
	{
	name: "Hitmonchan",
	HP: 125,
	Attack: [{
		name: "Megapunch",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Icepunch",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/hitmonchan.jpg"
	},
	{
	name: "Lickitung",
	HP: 125,
	Attack: [{
		name: "Lick",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Slam",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/lickitung.jpg"
	},
	{
	name: "Cubone",
	HP: 125,
	Attack: [{
		name: "Boomerang",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Headbutt",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/cubone.jpg"
	},
	{
	name: "Seadra",
	HP: 125,
	Attack: [{
		name: "Surf",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Thunder",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/seadra.jpg"
	},
	{
	name: "Scyther",
	HP: 125,
	Attack: [{
		name: "Slash",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Mega Slash",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/scyther.jpg"
	},
	{
	name: "Gyarados",
	HP: 125,
	Attack: [{
		name: "Fly",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Blizzard",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/gyarados.jpg"
	},
	{
	name: "Eevee",
	HP: 125,
	Attack: [{
		name: "Pound",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Tackle",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/eevee.jpg"
	},
	{
	name: "Omastar",
	HP: 125,
	Attack: [{
		name: "Surf",
		damage: 25,
		accuracy: 0.7
		},
		{
		name: "Blizzard",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/omastar.jpg"
	},
	{
	name: "Snorlax",
	HP: 300,
	Attack: [{
		name: "BodySlam",
		damage: 25, 
		accuracy: 0.7
		},
		{
		name: "Tackle",
		damage: 29,
		accuracy: 0.3
		}],
	link: "https://img.pokemondb.net/artwork/large/snorlax.jpg"  
	}
]

