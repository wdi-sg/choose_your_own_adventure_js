//INITIALING........
//prompt player for name
var playerName = prompt("Hey there, what is your name?");

//Greet player and ask for the year
var year = prompt(`Hi ${playerName}, nice to meet you. What year would you like to go to, from 1958? (format of year: YYYY)`);

//switch string to integer
year = parseInt(year);
console.log(year);

//variable to keep track of score
var score = 0;

//START OF GAME!!

//set the conditions for the different year (total of 7 path)
function selectYear(year) {
	if (year >= 2018){
		var ready = confirm(`${playerName} Welcome to The Tower of God. This is the entry test. Are you READY?`);
		if (ready){
			console.log(ready);
			yearQ1();
		}
		else {
			console.log(ready);
			exit();
		}
	}
	else if (year < 2018 && year >= 2008){
		var ready = confirm(`${playerName} Welcome to The Abssy. This is the entry test. Are you READY?`);
		if (ready){
			console.log(ready);
			yearQ1();
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 2008 && year >= 1998){
		var ready = confirm(`${playerName} Welcome to The Zombie Land. This is the entry test. Are you READY?`);
		if (ready){
			console.log(ready);
			yearQ1();
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 1998 && year >= 1988){
		var ready = confirm(`${playerName} Welcome to The Great Labyrinth. This is the entry test. Are you READY?`);
		if (ready){
			console.log(ready);
			yearQ1();
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 1988 && year >= 1978){
		var ready = confirm(`${playerName} Welcome to The Space Dungeon. This is the entry test. Are you READY?`);
		if (ready){
			console.log(ready);
			yearQ1();
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 1978 && year >= 1968){
		var ready = confirm(`${playerName} Welcome to The Cave Dungeon. This is the entry test. Are you READY?`);
		if (ready){
			console.log(ready);
			yearQ1();
		}
		else {
			console.log(ready);
			exit();
		}
	}

	else if (year < 1968 && year >= 1958){
		var ready = confirm(`${playerName} Welcome to The Lavar Dungeon. This is the entry test. Are you READY?`);
		if (ready){
			console.log(ready);
			yearQ1();
		}
		else {
			console.log(ready);
			exit();
		}
	}
	else{
		for (var retry = 3; retry < 0; i--) {
			prompt(`${playerName}, the year you have chosen is out of range. Kindly select a year from 1958 onwards. You have ${retry} try left. (format of year: YYYY)`);
			selectYear(year);
		}
		alert(`You have keyed the wrong input too many times. You have to restart the game.`);
	}
}

selectYear(year);

function exit(){
	alert(`Awww... It's so sad to see you go. Do come back soon! Your Score is ${score}`);
}

function yearQ1(){
	var q1Ans = prompt(`There is a huge hungry monster in an enclosed cage. Beside the huge hungry monster, there is a black ball. You are to go into the cage and pop the ball without being eaten up by the monster. Are you afraid? (Y / N)`);
	q1Ans = q1Ans.toLowerCase();
	console.log(q1Ans);
	q1(q1Ans);

	function q1(q1Ans){
		if (q1Ans === "y"){
			score -= 10;
			console.log(score);
			yearQ2();
		}
		else if (q1Ans === "n") {
			score += 10;
			console.log(score);
			yearQ2();
		}
		else {
			for (var retry = 3; retry < 0; retry--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${retry} try left.`);
				q1(q1Ans);
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}
}

function yearQ2(){
	var q2Ans = prompt(`${playerName}, are you going to fight the monster? (Y / N)`);
	q2Ans = q2Ans.toLowerCase();
	console.log(q2Ans);
	q2(q2Ans);

	function q2(q2Ans){
		if (q2Ans === "y"){
			score += 10;
			console.log(score);
			yearQ3();
		}
		else if (q2Ans === "n") {
			score -= 10;
			console.log(score);
			yearQ3();
		}
		else {
			for (var retry = 3; retry < 0; retry--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${retry} try left.`);
				q2(q2Ans);
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}

}

function yearQ3(){
	var q3Ans = prompt(`${playerName},you are now in the enclosed cage. Will you kill the huge hungry monster? (Y / N)`);
	q3Ans = q3Ans.toLowerCase();
	console.log(q3Ans);
	q3(q3Ans);

	function q3(q3Ans){
		if (q3Ans === "y"){
			score += 10;
			alert(`CONGRATULATIONS! You have killed the monster! Your total score is ${score}`);
		}
		else if (q3Ans === "n") {
			score -= 10;
			alert(`ON NO!! ${playerName}, you have been eaten by the huge hungry monster. Your total score is ${score}`);
		}
		else {
			for (var retry = 3; retry < 0; retry--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${retry} try left.`);
				q3(q3Ans);
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}
}