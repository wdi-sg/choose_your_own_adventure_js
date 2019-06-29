console.log('hello');
document.querySelector("#name").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  	document.querySelector(".welcome").style.display = "none";
		document.querySelector("#containerOne").style.display = "block";

		var userName = event.target.value;
		document.querySelector("#userName").innerHTML = userName;
	}	
})
var containerOne = document.querySelector("#containerOne");
var containerTwo = document.querySelector("#containerTwo");
var containerThree = document.querySelector("#containerThree");
var containerFour = document.querySelector("#containerFour");
var containerFive = document.querySelector("#containerFive");
var containerSix = document.querySelector("#containerSix");
var containerSeven = document.querySelector("#containerSeven");
var containerEight = document.querySelector("#containerEight");
var containerNine = document.querySelector("#containerNine");
var containerTen = document.querySelector("#containerTen");
var containerEleven = document.querySelector("#containerEleven");
var containerTwele = document.querySelector("#containerTwele");
var containerThirteen = document.querySelector("#containerThirteen");
var timeLeft = 30;
document.querySelector("#timeLeft").innerHTML = timeLeft;

function chooseAdventure(event){
	let currentInput = event.target.value;
	let inputData = currentInput.toLowerCase();
	if(inputData.includes ("angry bird")){

		containerOne.style.display = "none";
		containerTwo.style.display = "block";


	} else if (inputData.includes ("tom")){

		containerOne.style.display = "none";
		containerThree.style.display = "block";
		timeLeft -= 5;
		document.querySelector("#timeLeft_1").innerHTML = timeLeft;

	} else if (inputData.includes("story")) {

		containerOne.style.display = "none";
		containerFour.style.display = "block";
		timeLeft -=10;
		document.querySelector("#timeLeft_2").innerHTML = timeLeft;

	


	} else if (inputData.includes("red")) {

		containerTwo.style.display = "none";
		containerFive.style.display = "block";

	} else if (inputData.includes("chuck")) {

		containerTwo.style.display = "none";
		containerSix.style.display = "block";
		timeLeft -=5;
		document.querySelector("#timeLeft_3").innerHTML = timeLeft;


	} else if (inputData.includes("bomb")) {

		containerTwo.style.display = "none";
		containerSeven.style.display = "block";
		timeLeft -=10;
		document.querySelector("#timeLeft_4").innerHTML = timeLeft;

	} else if (inputData.includes("sugar")) {

		containerThree.style.display = "none";
		containerEight.style.display = "block";
		timeLeft -= 10;
		document.querySelector("#timeLeft_5").innerHTML = timeLeft;


	} else if (inputData.includes("dot")) {

		containerThree.style.display = "none";
		containerNine.style.display = "block";

	} else if (inputData.includes("squeak")) {

		containerThree.style.display = "none";
		containerTen.style.display = "block";
		timeLeft -= 5;
		document.querySelector("#timeLeft_6").innerHTML = timeLeft;


	} else if (inputData.includes("forky")) {

		containerFour.style.display = "none";
		containerEleven.style.display = "block";
		timeLeft -=10
		document.querySelector("#timeLeft_7").innerHTML = timeLeft;


	} else if (inputData.includes("woody")) {

		containerFour.style.display = "none";
		containerTwele.style.display = "block";

	} else if (inputData.includes("jessie")) {

		containerFour.style.display = "none";
		containerThirteen.style.display = "block";
		timeLeft -= 5;
		document.querySelector("#timeLeft_8").innerHTML = timeLeft;

		
	}

}





// document.querySelector("#oneOne").addEventListener("click", function() {
// 	document.querySelector("#containerTwo").style.display = "none";
// 		document.querySelector("#containerFive").style.display = "block";
		
// })

// document.querySelector("#oneTwo").addEventListener("click", function() {
// 	document.querySelector("#containerTwo").style.display = "none";
// 		document.querySelector("#containerSix").style.display = "block";
		
// })

// document.querySelector("#oneThree").addEventListener("click", function() {
// 	document.querySelector("#containerTwo").style.display = "none";
// 		document.querySelector("#containerSeven").style.display = "block";
		
// })


// document.querySelector("#twoOne").addEventListener("click", function() {
// 	document.querySelector("#containerThree").style.display = "none";
// 		document.querySelector("#containerEight").style.display = "block";
		
// })


// document.querySelector("#twoTwo").addEventListener("click", function() {
// 	document.querySelector("#containerThree").style.display = "none";
// 		document.querySelector("#containerNie").style.display = "block";
		
// })


// document.querySelector("#twoThree").addEventListener("click", function() {
// 	document.querySelector("#containerThree").style.display = "none";
// 		document.querySelector("#containerTen").style.display = "block";
		
// })


// document.querySelector("#threeOne").addEventListener("click", function() {
// 	document.querySelector("#containerFour").style.display = "none";
// 		document.querySelector("#containerEleven").style.display = "block";
		
// })


// document.querySelector("#threeTwo").addEventListener("click", function() {
// 	document.querySelector("#containerFour").style.display = "none";
// 		document.querySelector("#containerTwele").style.display = "block";
		
// })


// document.querySelector("#threeThree").addEventListener("click", function() {
// 	document.querySelector("#containerFour").style.display = "none";
// 		document.querySelector("#containerThirteen").style.display = "block";
		
// })






