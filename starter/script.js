// put code here!
var aircraftA;
var aircraftB;
var aircraftC;


var aircraftChoices = [
{
	a: "Aircraft A",
	healPointA: 50,
	mainCannonA: "Main Cannon", 
	wingCannonA: "Wing Cannon",

	aircraftaMainCannon: function(){
		return "PEEEEW";
	},
	aircraftaWingCannon: function(){
		return "PEW PEEEEW";
	}
},

{
	b: "Aircraft B",
	healPointB: 70,
	mainCannonB: "Main Cannon",
	homingMissileB: "Homing Missile",

	aircraftbMainCannon: function(){
		return "PEEEEW"; 
	},
	aircraftbHomingMissile: function(){
		return "POW POw POOOOOW";
	}
},

{
	c: "Aircraft C",
	healPointC: 100,
	mainCannonC: "Main Cannon",
	kamiKazeC: "Kamikaze",

	aircraftcMainCannon: function(){
		return "PEEEEW";
	},
	aircraftcKamiKaze: function(){
		return "KaaAAPoOoOWwW";
	}
}
];

var getUserName = function(name){
	return userName;		
};
getUserName(userName);
var userName = prompt("Enter Player Name: ");


var userAircraft = prompt("Choose your Aircraft: A/B/C");
if (userAircraft.toUpperCase() === "A"){
	alert("You've selected " +aircraftChoices[0].a+ ". Weapons: " +aircraftChoices[0].mainCannonA+ " & " +aircraftChoices[0].wingCannonA);
}

else if (userAircraft.toUpperCase() === "B") {
	alert("You've selected " +aircraftChoices[1].b+ ". Weapons: " +aircraftChoices[1].mainCannonB+ " & " +aircraftChoices[1].homingMissileB);
}

else if (userAircraft.toUpperCase() === "C") {
	alert("You've selected " +aircraftChoices[2].c+ ". Weapons: " +aircraftChoices[2].mainCannonC+ " & " +aircraftChoices[2].kamiKazeC);
}

else {
	userAircraft = prompt("Choose your Aircraft: A/B/C");
}

aircraftA = function(attkButtn){
	if (parseInt(attkButtn) === 1 ){
	alert("~"+aircraftChoices[0].aircraftaMainCannon()+"~! Enemy " +stageNum+ " down!");
	points++;
	return points;
}
	else if (parseInt(attkButtn) === 2){
	alert("~"+aircraftChoices[0].aircraftaWingCannon()+"~! Enemy " +stageNum+ " down!");
	points++;
	return points;
}
};


aircraftB = function(attkButtn){
	if (parseInt(attkButtn) === 1 ){
	alert("~"+aircraftChoices[1].aircraftbMainCannon()+"~! Enemy " +stageNum+ " down!");
	points++;
	return points;
}
	else if (parseInt(attkButtn) === 2){
	alert("~"+aircraftChoices[1].aircraftbHomingMissile()+"~! Enemy " +stageNum+" down!");
	points++;
	return points;
}
};

aircraftC = function(attkButtn){
	if (parseInt(attkButtn) === 1){
	alert("~"+aircraftChoices[2].aircraftcMainCannon()+"~! Enemy " +stageNum+ " down!");
	points++;
	return points;
}
	else if (parseInt(attkButtn) === 2){
	alert("~"+aircraftChoices[2].aircraftcKamiKaze()+"~! Enemy" +stageDifficulty+ " down!");
	points++;
	return points;
}
};

var stageAndAircraft = function(stage){
	var points = 0;
	var userInput = prompt("You've selected " +stage+ ". Advance? Y or N");
		if ((userInput.toUpperCase()) === "Y"){ 
		var attkButtn = prompt("YOU ENCOUNTER ENEMY " +stage+ " ! USE MAIN CANNON,PRESS 1 OR WING CANNON, PRESS 2");
		aircraftA(attkButtn);
		}
	}
// var stage1AircraftB = function(){
// 	var points = 0;
// 	var userInput = prompt("You've selected stage 1. Advance? Y or N");
// 		if (userInput.toUpperCase() === "Y" ){
// 		var attkButtn = prompt("YOU ENCOUNTER ENEMY 1! USE MAIN CANNON,PRESS 1 OR HOMING MISSILE, PRESS 2");
// 		aircraftB(attkButtn);
// 		}
// 	}	
// var stage1AircraftC = function(){
// 	var points = 0;
// 	var userInput = prompt("You've selected stage 1. Advance? Y or N");
// 		if (userInput.toUpperCase() === "Y"){
// 			var attkButtn = prompt("YOU ENCOUNTER ENEMY 1! USE MAIN CANNON,PRESS 1 OR KAMIKAZE, PRESS 2");
// 			aircraftC(attkButtn);
// 			}
// 		}

// var stage2AircraftA = function(){
// 	var points = 0;
// 	var userInput = prompt("You've selected stage 2. Advance? Y or N");
// 		if (userInput.toUpperCase() === "Y"){
// 		var attkButtn = prompt("YOU ENCOUNTER ENEMY 2! USE MAIN CANNON,PRESS 1 OR WING CANNON, PRESS 2");
// 		aircraftA(attkButtn);
// 		}
// 	}
// var stage2AircraftB = function(){
// 	var points = 0;
// 	var userInput = prompt("You've selected stage 2. Advance? Y or N");
// 		if (userInput.toUpperCase() === "Y"){
// 		var attkButtn = prompt("YOU ENCOUNTER ENEMY 2! USE MAIN CANNON,PRESS 1 OR HOMING MISSILE, PRESS 2");
// 		aircraftB(attkButtn);
// 		}
// 	}
// var stage2AircraftC = function(){
// 	var points = 0;
// 	var userInput = prompt("You've selected stage 2. Advance? Y or N");
// 		if (userInput.toUpperCase() === "Y"){
// 		var attkButtn = prompt("YOU ENCOUNTER ENEMY 2! USE MAIN CANNON,PRESS 1 OR KAMIKAZE, PRESS 2");
// 		aircraftC(attkButtn);
// 		}
// 	}

// var stage3AircraftA = function(){
// 	var points = 0;
// 	var userInput = prompt("You've selected stage 3. Advance? Y or N");
// 		if (userInput.toUpperCase() === "Y"){
// 		var attkButtn = prompt("YOU ENCOUNTER ENEMY 3! USE MAIN CANNON,PRESS 1 OR WING CANNON, PRESS 2");
// 		aircraftA(attkButtn);
// 		}
// 	}
// var stage3AircraftB = function(){
// 	var points = 0;
// 	var userInput = prompt("You've selected stage 3. Advance? Y or N");
// 		if (userInput.toUpperCase() === "Y") {
// 		var attkButtn = prompt("YOU ENCOUNTER ENEMY 3! USE MAIN CANNON,PRESS 1 OR HOMING MISSILE, PRESS 2");
// 			aircraftB(attkButtn);
// 		}
// 		}
// var stage3AircraftC = function(){
// 	var points = 0;
// 	var userInput = prompt("You've selected stage 3. Advance? Y or N");
// 		if (userInput.toUpperCase() === "Y"){
// 		var attkButtn = prompt("YOU ENCOUNTER ENEMY 3! USE MAIN CANNON,PRESS 1 OR KAMIKAZE, PRESS 2");
// 			aircraftC(attkButtn);
// 		}
// 		}

var stageNum = prompt("Select stage: 1, 2, 3");

if ((parseInt(stageNum) === 1) && (userAircraft.toUpperCase() === "A"))
	stageAndAircraft(stageNum);

else if ((parseInt(stageNum) === 1) && (userAircraft.toUpperCase() === "B"))
	stageAndAircraft(stageNum);

else if ((parseInt(stageNum) === 1) && (userAircraft.toUpperCase() === "C"))
	stageAndAircraft(stageNum);

else if ((parseInt(stageNum) === 2) && (userAircraft.toUpperCase() === "A"))
	stageAndAircraft(stageNum);

else if ((parseInt(stageNum) === 2) && (userAircraft.toUpperCase() === "B"))
	stageAndAircraft(stageNum);

else if ((parseInt(stageNum) === 2) && (userAircraft.toUpperCase() === "C"))
	stageAndAircraft(stageNum);

else if ((parseInt(stageNum) === 3) && (userAircraft.toUpperCase() === "A"))
	stageAndAircraft(stageNum);

else if ((parseInt(stageNum) === 3) && (userAircraft.toUpperCase() === "B"))
	stageAndAircraft(stageNum);

else if ((parseInt(stageNum) === 3) && (userAircraft.toUpperCase() === "C"))
	stageAndAircraft(stageNum);
 

