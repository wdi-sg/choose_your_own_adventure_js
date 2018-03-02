//INITIALING........
//prompt player for name
var playerName = prompt("Hey there, what is your name?");

//Greet player and ask for the year
var yearStr = prompt(`Hi ${playerName}, nice to meet you. What year would you like to go to, from 1958? (format of year: YYYY)`);

//switch string to integer
var year = parseInt(yearStr);
console.log(year);
//variable for no. of retry
var i = 0;

// //variable to keep track of score
var score = 0;

var ready = false;
var q1AnsInput = "";
var q2AnsInput = "";
var q3AnsInput = "";

//START OF GAME!!

//set the conditions for the different year (total of 7 path)
//function selectYear(year){
	if (year >= 2018){
		ready = confirm(`${playerName} Welcome to The Tower of God. This is the entry test. Are you READY?`);
		if (ready === true){
			console.log(ready);
			yearQ1(q1AnsInput);
		}
		else {
			console.log(ready);
			exit();
		}
	}
	else if (year < 2018 && year >= 2008){
		ready = confirm(`${playerName} Welcome to The Abssy. This is the entry test. Are you READY?`);
		if (ready === true){
			console.log(ready);
			yearQ1(q1AnsInput);
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 2008 && year >= 1998){
		ready = confirm(`${playerName} Welcome to The Zombie Land. This is the entry test. Are you READY?`);
		if (ready === true){
			console.log(ready);
			yearQ1(q1AnsInput);
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 1998 && year >= 1988){
		ready = confirm(`${playerName} Welcome to The Great Labyrinth. This is the entry test. Are you READY?`);
		if (ready === true){
			console.log(ready);
			yearQ1(q1AnsInput);
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 1988 && year >= 1978){
		ready = confirm(`${playerName} Welcome to The Space Dungeon. This is the entry test. Are you READY?`);
		if (ready === true){
			console.log(ready);
			yearQ1(q1AnsInput);
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 1978 && year >= 1968){
		ready = confirm(`${playerName} Welcome to The Cave Dungeon. This is the entry test. Are you READY?`);
		if (ready === true){
			console.log(ready);
			yearQ1(q1AnsInput);
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 1968 && year >= 1958){
		ready = confirm(`${playerName} Welcome to The Lavar Dungeon. This is the entry test. Are you READY?`);
		if (ready === true){
			console.log(ready);
			yearQ1(q1AnsInput);
		}
		else {
			console.log(ready);
			exit();
		}
	}
	else{
		for (var i = 3; i <= 0; i--) {
			prompt(`${playerName}, the year you have chosen is out of range. Kindly select a year from 1958 onwards. You have ${retry} try left. (format of year: ${boldYYYY})`);
			selectYear(year);
		}
		//alert(`You have keyed the wrong input too many times. You have to restart the game.`);
	}
//}

function exit(){
	alert(`Awww... It's so sad to see you go. Do come back soon! Your Score is ${score}`);
}

function yearQ1(q1AnsInput){
	q1AnsInput = prompt(`There is a huge hungry monster in an enclosed cage. Beside the huge hungry monster, there is a black ball. You are to go into the cage and pop the ball without being eaten up by the monster. Are you afraid? (Y / N)`);
	var q1Ans = q1AnsInput.toLowerCase();
	console.log(q1Ans);

	function q1(q1Ans){
		if (q1Ans === "y"){
			score = score - 10;
			console.log(score);
			yearQ2(q2AnsInput);
		}
		else if (q1Ans === "n") {
			score = score + 10;
			console.log(score);
			yearQ2(q2AnsInput);
		}
		else {
			for (var retry = 3; retry <= 0; retry--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${retry} try left.`);
				q1(q1Ans);
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}
}

function yearQ2(q2AnsInput){
	q2AnsInput = prompt(`${playerName}, are you going to fight the monster? (Y / N)`);
	var q2Ans = q2AnsInput.toLowerCase();
	console.log(q2Ans);

	function q2(q2Ans){
		if (q2Ans === "y"){
			score = score + 10;
			console.log(score);
			yearQ3(q3AnsInput);
		}
		else if (q2Ans === "n") {
			score = score - 10;
			console.log(score);
			yearQ3(q3AnsInput);
		}
		else {
			for (var retry = 3; retry <= 0; retry--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${retry} try left.`);
				q2(q2Ans);
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}

}

function yearQ3(q3AnsInput){
	q3AnsInput = prompt(`${playerName},you are now in the enclosed cage. Will you kill the huge hungry monster? (Y / N)`);
	var q3Ans = q3AnsInput.toLowerCase();
	console.log(q3Ans);

	function q3(q3Ans){
		if (q3Ans === "y"){
			score = score + 10;
			alert(`CONGRATULATIONS! You have killed the monster! Your total score is ${score}`);
		}
		else if (q3Ans === "n") {
			score = score - 10;
			alert(`ON NO!! ${playerName}, you have been eaten by the huge hungry monster. Your total score is ${score}`);
		}
		else {
			for (var retry = 3; retry <= 0; retry--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${retry} try left.`);
				q3(q3Ans);
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}
}