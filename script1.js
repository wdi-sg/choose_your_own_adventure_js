console.log('hello');
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

document.querySelector("#name").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  	document.querySelector(".welcome").style.display = "none";
	containerOne.style.display = "block";

	var userName = event.target.value;
	document.querySelector("#userName").innerHTML = userName;
	}	
})

function chooseAdventure(event){
	
	let inputData = event.target.value.toLowerCase();

	if(inputData.includes ("angry bird")){

		containerOne.style.display = "none";
		containerTwo.style.display = "block";


	} else if (inputData.includes ("tom")){

		containerOne.style.display = "none";
		containerThree.style.display = "block";
		
	} else if (inputData.includes("story")) {

		containerOne.style.display = "none";
		containerFour.style.display = "block";
		

	} else if (inputData.includes("red")) {

		containerTwo.style.display = "none";
		containerFive.style.display = "block";

	} else if (inputData.includes("chuck")) {

		containerTwo.style.display = "none";
		containerSix.style.display = "block";
		
	} else if (inputData.includes("bomb")) {

		containerTwo.style.display = "none";
		containerSeven.style.display = "block";
		
	} else if (inputData.includes("sugar")) {

		containerThree.style.display = "none";
		containerEight.style.display = "block";
		
	} else if (inputData.includes("dot")) {

		containerThree.style.display = "none";
		containerNine.style.display = "block";

	} else if (inputData.includes("squeak")) {

		containerThree.style.display = "none";
		containerTen.style.display = "block";
		
	} else if (inputData.includes("go back")) {

		containerFour.style.display = "none";
		containerEight.style.display = "none";
		containerNive.style.display = "none";
		containerTen.style.display = "none";
		containerOne.style.display = "block";
		

	} else if (inputData.includes("continue")) {

		containerFour.style.display = "none";
		containerEight.style.display = "none";
		containerNive.style.display = "none";
		containerTen.style.display = "none";
		containerEleven.style.display = "block"

	} else if (inputData.includes("woody")) {

		containerFour.style.display = "none";
		containerTwo.style.display = "block";
		
	}

}
