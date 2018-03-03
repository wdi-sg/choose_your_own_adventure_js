// put code here!
var map = [
		[".", ".", "."], 
		[".", ".", "."], 
		[".", ".", "."]
	];

var statusQuestion = ["Homework assignment!" + "\n" + "Do you stay and complete or hide til class is over?" + "\n" + "(Input stay or hide)",
						"Lab work!" + "\n" + "Do you stay and complete or hide til class is over?" + "\n" + "(Input stay or hide)", 
						"Lecture!" + "\n" + "Do you stay and complete or hide til class is over?" + "\n" + "(Input stay or hide)"];
var fightQuestion = ["You have encountered Akira!" + "\n" + "Do you fight or run away?" + "\n" + "(Input fight or run)", 
						"You have encountered Nick!" + "\n" + "Do you fight or run away?" + "\n" + "(Input fight or run)", 
						"You have encountered Ray!" + "\n" + "Do you fight or run away?" + "\n" + "(Input fight or run)"];
var moveQuestion = ["Which direction would you like to move?" + "\n" + "(Input n, s, e or w)"];

function buildMap() {
	var mapOutput = "";
	for (i = 0; i < map[0].length; i++) {
		mapOutput = mapOutput + map[i].join("") + "\n";
	}
	console.log(mapOutput);
}


function gameStart() {
	var initialText = "Welcome to Classes & Teachers! Make sure to type in your inputs accurately!" + "\n" + 
					"To begin, type in your name!";
	console.log(initialText);
	window.playerName = prompt("Enter name here!");
	window.currentPlayerRow = 0;
	window.currentPlayerCol = 0;
	map[currentPlayerRow][currentPlayerCol] = "X";
	window.gameStarted = true;
	window.playerStatus = {
		boredom: 0,
		laziness: 0,
		health: 10,
		fright: 0
	}
	buildMap();
}

function newRoom() {
	var statusError = true;
		while (statusError) {
			switch(prompt(statusQuestion[Math.floor(Math.random() * 3)])) {
				case "stay":
					playerStatus["boredom"] = playerStatus["boredom"] + 1;
					console.log("Your boredom has increased by 1");
					statusError = false;
					break;
				case "hide":
					playerStatus["laziness"] = playerStatus["laziness"] + 1;
					console.log("Your laziness has increased by 1");
					statusError = false;
					break;
				default:
					console.log("Enter a valid input!");
			}
		}
	var fightError = true;
		while (fightError) {
			switch(prompt(fightQuestion[Math.floor(Math.random() * 3)])) {
				case "fight":
					playerStatus["health"] = playerStatus["health"] + 1;
					console.log("Your health has decreased by 1");
					fightError = false;
					break;
				case "run":
					playerStatus["fright"] = playerStatus["fright"] + 1;
					console.log("Your fright has increased by 1");
					fightError = false;
					break;
				default:
					console.log("Enter a valid input!");
			}
	}
	var moveError = true;
		while (moveError) {
			 switch(prompt(moveQuestion[0])) {
				case "n":
					if (currentPlayerRow === 0) {
						console.log("Can't move there!");
						break;
					} else {
						map[currentPlayerRow][currentPlayerCol] = ".";
						currentPlayerRow = currentPlayerRow - 1;
						console.log(map[currentPlayerRow][currentPlayerCol]);
						moveError = false;
						break;
						}
				case "s":
					if (currentPlayerRow === map.length - 1) {
						console.log("Can't move there!");
						break;
					} else {
						map[currentPlayerRow][currentPlayerCol] = ".";
						currentPlayerRow = currentPlayerRow + 1;
						moveError = false;
						break;
						}
				case "e":
					if (currentPlayerCol === map[0].length - 1) {
						console.log("Can't move there!");
						break;
					} else {
						map[currentPlayerRow][currentPlayerCol] = ".";
						currentPlayerCol = currentPlayerCol + 1;
						console.log(map[currentPlayerRow][currentPlayerCol])
						moveError = false;
						break;
						}	
				case "w":
					if (currentPlayerCol === 0) {
						console.log("Can't move there!");
						break;
					} else {
						map[currentPlayerRow][currentPlayerCol] = ".";
						currentPlayerCol = currentPlayerCol - 1;
						moveError = false;
						break;
						}
				default:
					console.log("Enter a valid input!");
			}
		} 
		console.log(map[currentPlayerRow][currentPlayerCol]);
		map[currentPlayerRow][currentPlayerCol] = "X";
		buildMap();
}
gameStart();
while(gameStarted) {
	newRoom();
}