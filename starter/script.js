// // put code here! 

//Game of Chance. You are given $100 to play a Game of Chance. 
//If you get a dice with even numbers, you will get a payout of bet amount multiply by die outcome.
//However, if you get a dice with odd numbers, you will lose your bet amount multiply by die outcome.

//Throw a die...

var wallet = 100;
var randomNumberBetween0and6 = 0; 

function playGame(){
	var playGame = prompt("Play a dice game? Y/N")
	var betAmount = prompt("How much to bet? Min $50 bet")

	if (playGame==="N") {
		console.log("You are a loser for not playing!");
	}
	else if (playGame =="Y" && wallet-betAmount<0){
		console.log("Go home, you don't have enough cash!");
	} 
	else if (playGame==="Y" && wallet-betAmount>=0){
		var rand06 = Math.floor(Math.random() * 6);
		var parsedNumber = parseInt(rand06);
		console.log("rand06", rand06);
		
		if (parsedNumber%2!==0){
			wallet = wallet + (-1)*parsedNumber*betAmount;
			// console.log("wallet", wallet) 
			// console.log("parsedNumber*betAmount", parsedNumber, betAmount);
			console.log(wallet);
			outCome();
		} 
		else {wallet = wallet + parsedNumber*betAmount;
			console.log(wallet);
			outCome();}
		}

		else {console.log("something is wrong with the code");}
	}


function outCome() {if (wallet <=0){
	console.log("You are a loser");}
	else if (wallet > 1000000){
		console.log("You'll go missing in a day'");
		playGame();
	}
	else if (wallet > 100000){
		console.log("You are a major winner");
		playGame();
	}
	else if (wallet > 10000){
		console.log("You are a winner");
		playGame();
	}
	else if (wallet > 1000){
		console.log("You are a winner");
		playGame();
	}
	else if (wallet > 50){
		console.log("You are a winner");
		playGame();
	}
	else if (wallet <= 50){
		console.log("You are a winner");
		playGame();
	}
	else {console.log("Error");}
}

playGame();

//IGNORE THE CODE BELOW
// minBet();
	// }
	// else {
	// 	//play game again
	// }

// 	} else if (playGame==="Y" && randomNumberBetween0and6%2===0){
// 		wallet = wallet + parseInt(randomNumberBetween0and6 = Math.floor(Math.random() * 6) * betAmount)
// 		console.log(wallet); 
// 		outCome();
// 	} else if (playGame==="Y" && randomNumberBetween0and6%2!==0){
// 		var rand06 = Math.floor(Math.random() * 6);
// 		console.log("rand06", rand06);
// 		var randomNumberBetween0and6 =  rand06 * betAmount;
// 		console.log( "betamount,"betAmount);
// 		console

// 		var parsedNumber = parseInt(randomNumberBetween0and6);
// 		wallet = wallet - parsedNumber;
// 		console.log(wallet); 
// 		outCome();
// 	}
// 	else {console.log("Something's wrong with the code");}
// }


