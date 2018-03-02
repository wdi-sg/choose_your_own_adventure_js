var userName = prompt("Your name:")

alert("Welcome "+ userName + ". You are trapped in a maze that will self destruct after some time. Try to find your way out!")

var finalScore = 0

//survival paths:  FRRL BLRR LLLL 
var description = {
	//stepZero
	"start": ". Around you there are 4 hallways. Front: F, Back: B, Left: L, Right: R. Which way will you go?(F/B/L/R)",

	//stepOne
	"F": "You have reached F. You see FL and FR to the left and right of you respectively. Which way will you go?(L/R)",
	"B": "You have reached B. You see BL and BR to the left and right of you respectively. Which way will you go?(L/R)",
	"L": "You have reached L. You see LL and LR to the left and right of you respectively. Which way will you go?(L/R)",
	"R": "You died!",

	//stepTwo
	"FL": "You died!",
	"FR": "You have reached FR. You see FRL and FRR to the left and right of you respectively. Which way will you go?(L/R)",
	"BL": "You have reached BL. You see BLL and BLR to the left and right of you respectively. Which way will you go?(L/R)",
	"BR": "You died!",
	"LL": "You have reached LL. You see LLL and LLR to the left and right of you respectively. Which way will you go?(L/R)",
	"LR": "You died!",

	//stepThree
	"FRL": "You died",
	"FRR": "You have reached FRR. You see FRRL and FRRR to the left and right of you respectively. Which way will you go?(L/R)",
	"BLR": "You have reached BLR. You see BLRL and BLRR to the left and right of you respectively. Which way will you go?(L/R)",
	"BLL": "You died",
	"LLL": "You have reached LLL. You see LLLL and LLLR to the left and right of you respectively. Which way will you go?(L/R)",
	"LLR": "You died",

	//stepFour
	"FRRL": "You reached the final door!",
	"FRRR": "You died!",
	"BLRL": "You died!",
	"BLRR": "You reached the final door!",
	"LLLL": "You reached the final door!",
	"LLLR": "You died!",

	//Riddle
	"riddleOne": "A hunter leaves his cabin early in the morning and walks one mile due south. Here he sees a bear and starts chasing it for one mile due east before he is able to shoot the bear. After shooting the bear, he drags it one mile due north back to his cabin where he started that morning. What color is the bear?\n1) Black \n2) Brown \n3) White \n4) grey\n(type 1/2/3/4)",

	//Winning
	"won": "You escaped from the maze! Well done!",

	//Riddlelost
	"riddleLost": "Wrong answer! You died!",

	//Score
	"score": "Your score is "
}

function finalGame(riddle) {
	var gameAnswer = prompt(description.riddleOne)
	if (gameAnswer === "3") {
		alert(description.won);
		finalScore = finalScore + 3
		alert(description.score + finalScore)
		running = false;
	}

	else {
		alert(description.riddleLost);
		running = false;
	}
}


var running = true;

while(running){

	var stepOne = prompt(userName + description.start)


	if (stepOne === "f") {
		var stepTwo = prompt(description.F)
		stepTwo = stepTwo.toLowerCase();
		finalScore++

		if (stepTwo === "l") {
		alert(description.FL);							//Dead@S2	
		alert(description.score + finalScore);
		running = false;	  					
	}

	if (stepTwo === "r") {
		var stepThree = prompt(description.FR)
		stepThree = stepThree.toLowerCase();
		finalScore++

		if (stepThree === "l") {
			alert(description.FRL);
			alert(description.score + finalScore);
			running = false;							//Dead@S3
		}

		if (stepThree === "r") {
			var stepFour = prompt(description.FRR);
			stepFour = stepFour.toLowerCase();
			finalScore++

			if (stepFour === "l"){
				alert(description.FRRL);
				finalScore++
				finalGame()
				running=false;
				
			}

			if (stepFour === "r"){
				alert(description.FRRR);			//Dead@S4
				alert(description.score + finalScore);
				running = false;
			}
		}
	}
}

if (stepOne === "b") {
	var stepTwo = prompt(description.B)
	stepTwo = stepTwo.toLowerCase();
	finalScore++

	if (stepTwo === "l") {
		var stepThree = prompt(description.BL)
		stepThree = stepThree.toLowerCase();
		finalScore++

		if (stepThree === "l") {
			alert(description.BLL)					//Dead@S3
			alert(description.score + finalScore);
			running = false;
		}

		if (stepThree === "r") {
			var stepFour = prompt(description.BLR)
			stepFour = stepFour.toLowerCase();
			finalScore++

			if (stepFour === "l") {
				alert(description.BLRL);			//Dead@S4
				alert(description.score + finalScore);
				running = false;
			}

			if (stepFour === "r") {
				alert(description.BLRR);
				finalScore++
				finalGame()
				running= false;
			}
		}
	}

	if (stepTwo === "r") {
		alert(description.BR)						//Dead@S2
		alert(description.score + finalScore);
		running = false;
	}
}

if (stepOne === "l") {
	var stepTwo = prompt(description.L)
	stepTwo = stepTwo.toLowerCase();
	finalScore++

	if (stepTwo === "l") {
		var stepThree = prompt(description.LL)
		stepThree = stepThree.toLowerCase()
		finalScore++

		if (stepThree === "l") {
			var stepFour = prompt(description.LLL);
			stepFour = stepFour.toLowerCase();
			finalScore++

			if (stepFour === "l") {
				alert(description.LLLL);
				finalScore++
				finalGame()
				running=false;
			}

			if (stepFour === "r") {
				alert(description.LLLR);			//Dead@S4
				alert(description.score + finalScore);
				running = false;
			}
		}

		if (stepThree === "r") {
			alert(description.LLR);
			alert(description.score + finalScore);
			running = false;							//Dead@S3
		}
	}

	if (stepTwo === "r") {
		alert(description.LR)						//Dead@S2
		alert(description.score + finalScore);
	}
}

if (stepOne === "r") {
	alert(description.R)							//Dead@S1
	alert(description.score + finalScore);
	running = false;
}
running = false;
}
















