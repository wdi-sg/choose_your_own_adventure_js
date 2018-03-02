var name=prompt("Hi There, What is your name?")
var enterGame = function(){
	var enterGameRes = prompt("Hi "+name+", You are going to play a dangerous game. Your responses will determine your survival. If you are ready, enter 'Yes'; If you are a coward, enter 'No'");
	if (enterGameRes.toLowerCase()=="yes"){
		return true;
	}else {
		alert("Bye coward!");
		return false;
	}
}
var gameBoard = ["s1","s2"]

var selectSituation = function(){
		var situationRes = parseInt(prompt("Welcome to the game! Select which situational room you would like to enter. Enter number 1 or 2\n 1: A Jungle Adventure\n 2: A Love Affair"));
		return situationRes;
	}
	
	//if (situationRes == 1){
	//	return 1;
	//}else {
	//	return 2;
	//}

gameBoard[0] = {q1: "You are in front of a lion which has not eaten in weeks. What will you do? Enter number 1,2,3 or 4\n 1: Turn & run for your life\n 2:Become a tree rooted to the ground\n 3: Find a weapon\n 4:Slowly back away but facing the lion",
				a1: "Good luck, hope you can run faster than Usain Bolt!",
				a2: "Try to enjoy your last few seconds as much as you can. It was nice knowing   you!",
				a3: "Bravo, you are born to be a warrior. Even if you lose, you will die a warrior.",
				a4: "You are a smart one. This is your best bet of surviving. Pray to God while you back away!"
}

gameBoard[1] = {q1: "You see the love of your life in front of you. You might not get a chance to see here again. What will you do? Enter number 1,2,3 or 4\n 1: Do nothing and hope he/she talks to me\n 2: Go up to him/her and drop a fancy pick-up line\n 3: Freak out and run away",
				a1: "Oh come on, do something instead of leaving it up to fate!",
				a2: "Nice, you got game. Now, go show him/her your moves. All the best!",
				a3: "You need to get therapy to remove this fear!"
}

var gameStart = function(param1,param2){
	if (param1()==true){
		var param2Result = param2();
		if (param2Result==1){
			var r1=parseInt(prompt(gameBoard[0].q1));
			switch(r1){
				case 1:
				alert(gameBoard[0].a1)
				break;
				case 2:
				alert(gameBoard[0].a2)
				break;
				case 3: 
				alert(gameBoard[0].a3)
				break;
				case 4:
				alert(gameBoard[0].a4)
			}
		}else if(param2Result==2){
			var r1=parseInt(prompt(gameBoard[1].q1))
			switch(r1){
				case 1:
				alert(gameBoard[1].a1)
				break;
				case 2:
				alert(gameBoard[1].a2)
				break;
				case 3:
				alert(gameBoard[1].a3)
			}
		}
	}	
}

gameStart(enterGame,selectSituation);