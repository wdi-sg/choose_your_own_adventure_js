//prompt player for name
var playerName = prompt("Hey there, what is your name?");

//Greet player and ask for the year
var yyyy = "YYYY";
var boldYYYY = document.write(yyyy.bold());
var yearStr = prompt(`Hi ${playerName}, nice to meet you. What year would you like to go to, from 1958? (format of year: ${boldYYYY})`);

// //switch string to integer
var year = parseInt(yearStr);


//variable to keep track of score
var score = 0;

//set the conditions for the different year (total of 7 path)
function selectYear(){
	switch (year) {

		case (year >= 2018):
		var entry = confirm(`${playerName} Welcome to The Tower of God. This is the entry test. Are you READY?`);
		if (entry === true){
			yearQ1();
		}
		else {
			exit();
		}

		break;

		case (year < 2018 && year >= 2008):
		var entry = confirm(`${playerName} Welcome to The Abssy. This is the entry test. Are you READY?`);
		if (entry === true){
			yearQ1();
		}
		else {
			exit();
		}
		break;

		case (year < 2008 && year >= 1998):
		var entry = confirm(`${playerName} Welcome to The Zombie Land. This is the entry test. Are you READY?`);
		if (entry === true){
			yearQ1();
		}
		else {
			exit();
		}
		break;

		case (year < 1998 && year >= 1988):
		var entry = confirm(`${playerName} Welcome to The Great Labyrinth. This is the entry test. Are you READY?`);
		if (entry === true){
			yearQ1();
		}
		else {
			exit();
		}
		break;

		case (year < 1988 && year >= 1978):
		var entry = confirm(`${playerName} Welcome to The Space Dungeon. This is the entry test. Are you READY?`);
		if (entry === true){
			yearQ1();
		}
		else {
			exit();
		}


		case (year < 1978 && year >= 1968):
		var entry = confirm(`${playerName} Welcome to The Cave Dungeon. This is the entry test. Are you READY?`);
		if (entry === true){
			yearQ1();
		}
		else {
			exit();
		}

		case (year < 1968 && year >= 1958):
		var entry = confirm(`${playerName} Welcome to The Lavar Dungeon. This is the entry test. Are you READY?`);
		if (entry === true){
			yearQ1();
		}
		else {
			exit();
		}

		default:
		for (var try = 3; try <= 0; try--) {
			prompt(`${playerName}, the year you have chosen is out of range. Kindly select a year from 1958 onwards. You have ${try} try left. (format of year: ${boldYYYY})`);
			selectYear();
		}
		alert(`You have keyed the wrong input too many times. You have to restart the game.`);
	}
}

function exit(){
	alert(`Awww... It's so sad to see you go. Do come back soon! Your Score is ${score}`);
}

function yearQ1(){
	var q1AnsInput = prompt(`There is a huge hungry monster in an enclosed cage. Beside the huge hungry monster, there is a black ball. You are to go into the cage and pop the ball without being eaten up by the monster. Are you afraid? (Y / N)`);
	var q1Ans = q1AnsInput.toLowerCase();
	function q1(){
		if (q1Ans === "Y"){
			score = score - 10;
			console.log(score);
			yearQ2();
		}
		else if (q1Ans === "N") {
			score = score + 10;
			console.log(score);
			yearQ2();
		}
		else {
			for (var try = 3; try <= 0; try--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${try} try left.`);
				q1();
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}
}

function yearQ2(){
	var q2AnsInput = prompt(`${playerName}, are you going to fight the monster? (Y / N)`);
	var q2Ans = q2AnsInput.toLowerCase();
	function q2(){
		if (q2Ans === "Y"){
			score = score + 10;
			console.log(score);
			yearQ3();
		}
		else if (q2Ans === "N") {
			score = score - 10;
			console.log(score);
			yearQ3();
		}
		else {
			for (var try = 3; try <= 0; try--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${try} try left.`);
				q2();
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}

}

function yearQ3(){
	var q3AnsInput = prompt(`${playerName},you are now in the enclosed cage. Will you kill the huge hungry monster? (Y / N)`);
	var q3Ans = q3AnsInput.toLowerCase();
	function q3(){
		if (q3Ans === "Y"){
			score = score + 10;
			alert(`CONGRATULATIONS! You have killed the monster! Your total score is ${score}`);
		}
		else if (q3Ans === "N") {
			score = score - 10;
			alert(`ON NO!! ${playerName}, you have been eaten by the huge hungry monster. Your total score is ${score}`);
		}
		else {
			for (var try = 3; try <= 0; try--) {
				prompt(`Input is invalid. Kindly input Y / N. You have ${try} try left.`);
				q3();
			}
			alert(`You have keyed the wrong input too many times. You have to restart the game.`);
		}
	}
}