// Game is about fixed gear bicycles and putting togethether a customised bicycle before testing one's skills on a crit lap.
// Start by getting the player's name. 

var userName = prompt("Welcome to Bespoke Bicycle Build. A game that revolves around building your own virtual bicycle. Please enter your name to start playing!");
// console.log(userName);

// "Thanks for entering your name. Please confirm it is " + userName + ".");

// function eventHandler (confirm) {
// 	if (confirm.type === "Yes") {
// 		alert("Thanks!");
// 	} else (confirm.type !== "Yes"); {
// 		prompt("Please edit your name.");
// 		}
// }

if (confirm("Thanks for entering your name. Please confirm it is " + userName + ".") == true) {
	var userNameResponse = "Great, time to move on!";
} else {
	var userNameRedo = prompt("Please enter your name again");
}

// Now let the user choose what type of riding they want to do. They can choose between Road, Track and Fixie riding.

// var riding = prompt("Now you get to choose what kind of cycling you'd like to do! You can choose road cycling, track cycling and fixed gear (fixie) riding.");
// function chooseRidingType (riding) {
	// var riding = ["road", "track", "fixed"];
// for (r=0; r < riding.length; r++) {
	// var riding = ["road", "track", "fixed"];
	// 	if (riding === "road cycling" || riding === "road") {
	// 		riding = alert("Great! Hope you're excited to get on the road.");
	// 	} else if (riding === "track cycling" || riding === "track") {
	// 		riding = alert("Great! Hope you're ready to get on the velodrome.");
	// 	} else if (riding === "fixed gear cycling" || riding === "fixed" || riding === "fixie") {
	// 		riding = alert("Great! Hope you're ready to get on the track.");
	// 	} else {
	// 		riding = prompt("Please choose one from road cycling, track cycling and fixed gear (fixie) riding.");
	// 	} 
// var text;
// var riding = prompt("Now you get to choose what kind of cycling you'd like to do! You can choose road cycling, track cycling or fixed gear (fixie) riding.");
// switch(riding) {
// 	case ("road" || "road cycling" || "roadie"):
// 		text = alert("Great! Hope you're excited to get on the road.");
// 		break;
// 	case ("track" || "track cycling"):
// 		text = alert("Great! Hope you're ready to ride in the velodrome.");
// 		break;
// 	case ("fixed gear" || "fixie" || "fixed gear cycling"):
// 		text = alert("Daredevil... Hope you know how to skid!");
// 		break;
//   	default:
//   		text = prompt("Please choose from road cycling, track cycling and fixed gear (fixie) riding.");
//   		break;
// }

// To begin, let the user choose their size of bicycle. Options are XS, S, M, or L.

var frameSize = prompt("Begin by choosing a size for your bicycle. Choose between XS, S, M or L.");
// console.log(frameSize);

if (confirm("You have chosen size " + frameSize + ".") == true) {
	frameSize = alert("Awesome! Now to customize your new bike!");
} else {
	frameSize = prompt("Let's choose that bike size again.");
}

// Time to choose a color for the frame of the bike!!

// var frameColor = prompt("The fun part begins. Choose a color."); 

// if (confirm("You have chosen color " + frameColor + ".") == true) {
// 	frameColor = alert("Great choice! Let's move on to choosing the other bits of the bike.");
// } else {
// 	frameColor = prompt("Sorry, please choose a color.");
// }

// Next, choose a groupset for your bike. 

// var groupsetChoice = prompt("Onto the technical part. Choose a groupset for your bike from the choice of Shimano, SRAM or Campagnolo.");
// var groupset = ["Shimano", "SRAM", "Campagnolo"];

// if (groupsetChoice === groupset) {
// 	groupsetChoice = alert("Sweet choice!"); 
// } else {
// 	groupsetChoice = prompt("Sorry, we don't have availability for that. Please choose from Shimano, SRAM or Campagnolo.");
// }

// Now to choose a bunch of things at once. Need to create a list of objects/ arrays that will basically go down different paths depending on the user's selection. 
// 1) What sort of riding would you like to do? 
// => 3 choices: road, track, fixie
// 2) What frame brand would you like?
// 3) What type of material would you like your bike to be made of? 
// 4) What color(s) would you like for your frame ?
// 5) What groupset would you like to put on the bike?

var cycling = [{
	"kind": "road",
	"frameBrand": ["Cannondale", "Canyon", "Specialized", "Trek"],
	"frameMaterial": ["alumnium", "carbon", "steel", "titanium"],
	"frameColor": [],
	"groupsetChoice": ["Shimano 105", "Shimano Ultegra", "Shimano Dura Ace", "SRAM Rival 22", "Sram Red"],
},
{	"kind": "cyclocross",
	"frameBrand": ["Cannondale", "Cinelli", "Specialized", "Look"],
	"frameMaterial": ["alumnium", "carbon", "steel"],
	"frameColor": [],
	"groupsetChoice": ["Shimano Dura Ace", "SRAM Force 1", "Sram Rival 1"],
},
{	"kind": "track",
	"frameBrand": ["8 bar", "Cinelli", "Specialized", "Look"],
	"frameMaterial": ["alumnium", "steel", "titanium"],
	"frameColor":[],
	"groupsetChoice": ["Aventon Push", "Campagnolo Pista"],
}]

//console.log(cycling); // Check array works!!

// Now that array of objects is made. Can move onto figuring out how to code this and make the game interative and dynamic.

var userFinalBike = [];

var userKind = prompt(userName + ", choose your style of riding from road, cyclocross or track.");
if (userKind === "road") {
var userRoadBrand = prompt("Choose a frame brand from Cannondale, Canyon, Specialized or Trek.");
} else if (userKind === "cyclocross") {
var userXBrand = prompt("Choose a frame brand from Cannondale, Cinelli, Specialized or Look.");
} else if (userKind === "track") {
var userTrackBrand = prompt("Choose a frame brand from 8 bar, Cinelli, Specialized or Look.");
} else {
var defaultKind = prompt("Please choose a style of riding from road, cyclocross or track.");
}

console.log(userKind);

var userBrand = console.log(userKind);
if (userBrand === userRoadBrand) {
var userRoadMaterial = prompt("Choose a frame material from alumnium, carbon, steel or titanium.");
} else if (userBrand === userXBrand) {
var userXMaterial = prompt("Choose a frame material from alumnium, carbon or steel.");
} else if (userBrand === userTrackBrand) {
var userTrackMaterial = prompt("Choose a frame material from alumnium, steel or titanium.")
} else {
var defaultMaterial = prompt("Please choose a frame material.")
}
		// if (userKind === cycling[userRoadMaterial]["material"]) {
		// var userRoadColor = prompt("Choose any color(s).");
		// } else if (userKind === cycling[userXMaterial]["material"]) {
		// var userXColor = prompt("Choose any color(s).");
		// } else if (userKind === cycling[userTrackMaterial]["material"]) {
		// var userTrackColor = prompt("Choose any color(s).");
		// } else {
		// var defaultColor = prompt("Choose any color(s).");
		// }
		// 	if (userRoadColor === cycling["frameColor"]) {
		// 	var userRoadGroupset = prompt("Choose from Shimano 105, Shimano Ultegra, Shimano Dura Ace, SRAM Rival 22 or SRAM Red.");
		// 		if (userRoadGroupset === cycling["groupsetChoice"]) {
		// 			userFinalBike.push(userKind, userRoadBrand, userRoadMaterial, userRoadColor, userRoadGroupset);
		// 			}
		// 		}
// 			}
		
	

// 	alert(userFinalBike);
// }



// var userChoice = function (style, brand, material, color, groupset) {

// 	for (var i=0; i < cycling.length; i++) {
// 		if (userKind === "road") {
// 			prompt(userName + ", choose the brand for your bike frame from Cannondale, Canyon, Specialzied or Trek."); 
// 		} else 
			
// 	// 	if (userChoice["brand"] === "Cannondale" || userChoice["brand"] === "Canyon" || userChoice["brand"] === "Specialzied" || userChoice["brand"] === "Trek") {
// 	// 	 userFinalBike


// 	 // userFinalBike.push(cycling["kind"]);
// 		}
// 	} 
// 	return userFinalBike;
// }



