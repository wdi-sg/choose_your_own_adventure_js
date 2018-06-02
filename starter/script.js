// put code here!
var choiceOne = prompt("Door, Window, Floor")

if (choiceOne === "Door") {
	// console.log("Door")
	var choiceDoor = prompt("Force, Pick Lock")
		
		if (choiceDoor === "Force") {
			var choiceForce = prompt("Arms, Legs")
				if (choiceForce === "Arms") {
					console.log("Arms");

				} else if (choiceForce === "Legs"){
					console.log("Legs");
				
				} else {
					alert("Not valid input");
					choiceForce;

				};

		} else if (choiceDoor === "Pick Lock") {
			var choicePickLock = prompt("Search, Force")
				if (choicePickLock === "Search") {
					console.log("Search");

				} else if (choicePickLock === "Force"){
					alert("you changed your mind")
					
				} else {
					console.log("Not valid input")
				};


		} else {
			console.log("Not valid input")
		}



} else if (choiceOne === "Window") {
	// console.log("Window") 






} else if (choiceOne === "Floor") {
	// console.log("Floor")







} else {
	console.log("Not valid input")
}