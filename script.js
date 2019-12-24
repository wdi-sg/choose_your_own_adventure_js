// Global Variables:
var startGame = false;
var pathArray = [];
var choiceMade = pathArray[0];

	console.log("Hello this is the start of the game. Please key in how much money do you wish make in a month? ");
	display();

//////////////////////////////////////////////////
// Trigger function from index.html input field //
//////////////////////////////////////////////////
var inputHappened = function(currentInput){

//Game Starts
	if (currentInput === "0") {
		console.log("You have decided to start with 0 dollars.");

	var makeChoice = function(currentInput){

		for(var i = 0; i < path.length; i++){

			if (currentInput === path[i]) {
			pathArray.push(path[i]);
			console.log(path[i]);

				}			
			}

		return pathArray;
		}

	makeChoice(currentInput)
	console.log("Choice made", makeChoice(currentInput));
	}


	else if (currentInput > 0 && currentInput <= 100000) {
		console.log("You have chosen to have a decent income. I didnt make game choices here yet. Please try starting with 0");
	}

	else if (currentInput > 100000) {
		console.log("You have chosen to earn more than a millionare. I didnt make game choices here yet. Please try starting with 0");
	}

	else {
		console.log("Please key in a number from 0 to 10000 instead.");
	};
};

// var getItemsByBrand = function(items, brand) {
//   var itemArray = [];
//   var itemLength = items.length;

//   for (i = 0; i < itemLength; i++){
//     var brandFound = items[i].product.brand;
//     if (brand === brandFound) {
//       itemArray.push(items[i]);

//     } // end of checking
//   } // end of for loop
//   return itemArray;
// } // end of function

// var brand = "Sony";
// console.log("2 Question: ", getItemsByBrand(items,brand));