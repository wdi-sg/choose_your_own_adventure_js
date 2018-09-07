// put code here!
var aircraftA;
var aircraftB;
var aircraftC;


var userAircrafts = [
{
	name: "Aircraft 1",
	healPointA: 50,
	firstWpn: "Main Cannon", 
	secondWpn: "Wing Cannon",

	aircraftInfo: function(){
		return "Weapons: " +this.firstWpn+ " & " +this.secondWpn
	},

	// aircraftaMainCannon: function(){
	// 	return "PEEEEW";
	// },
	// aircraftaWingCannon: function(){
	// 	return "PEW PEEEEW";
	// }
		skills: function(attkButtn){
		if(attkButtn === "1"){
			return "PEEEEW"
		} else if (attkButtn === "2"){
			return "PEW PeEeeWwW"
		}
	}
},

{
	name: "Aircraft 2",
	healPointB: 70,
	firstWpn: "Main Cannon",
	secondWpn: "Homing Missile",

	aircraftInfo: function(){
		return "Weapons: " +this.firstWpn+ " & " +this.secondWpn
	},

	skills: function(attkButtn){
		if(attkButtn === "1"){
			return "PEEEEW"
		} else if (attkButtn === "2"){
			return "POW POW POoOoWwW"
		}
	}
},

{
	name: "Aircraft 3",
	healPointC: 100,
	firstWpn: "Main Cannon",
	secondWpn: "Kamikaze",

	aircraftInfo: function(){
		return "Weapons: " +this.firstWpn+ " & " +this.secondWpn
	},

	// aircraftcMainCannon: function(){
	// 	return "PEEEEW";
	// },
	// aircraftcKamiKaze: function(){
	// 	return "KaaAAPoOoOWwW";
	// }
		skills: function(attkButtn){
		if(attkButtn === "1"){
			return "PEEEEW"
		} else if (attkButtn === "2"){
			return "KaaAAPoOoOWwW"
		}
	}
}
];

var getUserName = function(name){
	return userName;		
};
getUserName(userName);
var userName = prompt("Enter Player Name: ");


var aircraftChoices = prompt("Choose your Aircraft: 1/2/3");
if ((parseInt(aircraftChoices) > 0) && (parseInt(aircraftChoices) <= 3)){
	alert("You've selected " +userAircrafts[parseInt(aircraftChoices)-1].name+ "-" +userAircrafts[parseInt(aircraftChoices)-1].aircraftInfo());
}

else {
	aircraftChoices = prompt("Choose your Aircraft: A/B/C");
}

aircraft = function(userAircrafts, attkButtn){
	if (parseInt(attkButtn) === 1 ){
	alert("~"+userAircrafts[parseInt(aircraftChoices)-1].skills(attkButtn)+"~! Enemy " +stageNum+ " down!");
	points++;
	return points;
}
	else if (parseInt(attkButtn) === 2){
	alert("~"+userAircrafts[parseInt(aircraftChoices)-1].skills(attkButtn)+"~! Enemy " +stageNum+ " down!");
	points++;
	return points;
}
};


// aircraftB = function(attkButtn){
// 	if (parseInt(attkButtn) === 1 ){
// 	alert("~"+userAircrafts[parseInt(aircraftChoices)-1].skills(attkButtn)+"~! Enemy " +stageNum+ " down!");
// 	points++;
// 	return points;
// }
// 	else if (parseInt(attkButtn) === 2){
// 	alert("~"+userAircrafts[parseInt(aircraftChoices)-1].skills(attkButtn)+"~! Enemy " +stageNum+" down!");
// 	points++;
// 	return points;
// }
// };

// aircraftC = function(attkButtn){
// 	if (parseInt(attkButtn) === 1){
// 	alert("~"+userAircrafts[parseInt(aircraftChoices)-1].skills(attkButtn)+"~! Enemy " +stageNum+ " down!");
// 	points++;
// 	return points;
// }
// 	else if (parseInt(attkButtn) === 2){
// 	alert("~"+userAircrafts[parseInt(aircraftChoices)-1].skills(attkButtn)+"~! Enemy" +stageNum+ " down!");
// 	points++;
// 	return points;
// }
// };

var stageAndAircraft = function(userAircrafts, stage){
	var points = 0;
	var userInput = prompt("You've selected stage " +stage+ ". Advance? Y or N");
		if ((userInput.toUpperCase()) === "Y"){ 
		var attkButtn = prompt("YOU ENCOUNTER ENEMY " +stage+ " ! USE  " +userAircrafts[parseInt(aircraftChoices)-1].firstWpn+ ", PRESS 1 OR " +userAircrafts[parseInt(aircraftChoices-1)].secondWpn+ " PRESS 2");
		aircraft(userAircrafts, attkButtn);
		return userInput;
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

if(((parseInt(stageNum) >= 1) && (parseInt(stageNum) <= 3)) && ((aircraftChoices >= "1") && (aircraftChoices <= "3")))
stageAndAircraft(userAircrafts, stageNum);


// if ((parseInt(stageNum) === 1) && (aircraftChoices === "1"))
// 	stageAndAircraft(userAircrafts, stageNum);

// else if ((parseInt(stageNum) === 1) && (aircraftChoices === "2"))
// 	stageAndAircraft(userAircrafts, stageNum);

// else if ((parseInt(stageNum) === 1) && (aircraftChoices === "3"))
// 	stageAndAircraft(userAircrafts, stageNum);

// else if ((parseInt(stageNum) === 2) && (aircraftChoices === "1"))
// 	stageAndAircraft(userAircrafts, stageNum);

// else if ((parseInt(stageNum) === 2) && (aircraftChoices === "2"))
// 	stageAndAircraft(userAircrafts, stageNum);

// else if ((parseInt(stageNum) === 2) && (aircraftChoices === "3"))
// 	stageAndAircraft(userAircrafts, stageNum);

// else if ((parseInt(stageNum) === 3) && (aircraftChoices === "1"))
// 	stageAndAircraft(userAircrafts, stageNum);

// else if ((parseInt(stageNum) === 3) && (aircraftChoices === "2"))
// 	stageAndAircraft(userAircrafts, stageNum);

// else if ((parseInt(stageNum) === 3) && (aircraftChoices === "3"))
// 	stageAndAircraft(userAircrafts, stageNum);
 

