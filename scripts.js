console.log('hello');
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  	document.querySelector(".welcome").style.display = "none";
		document.querySelector("#containerOne").style.display = "block";
	}	
})
document.querySelector('.input').addEventListener('change', function(event){
        var currentInput = event.target.value;
        
      });

function chooseAdventure(event){
	 let currentInput = event.target.value;
	let inputData = currentInput.toLowerCase();
	if(inputData.includes ("angry bird")){

		document.querySelector("#containerOne").style.display = "none";
		
		document.querySelector("#containerTwo").style.display = "block";
		
	} else if (inputData.includes ("tom")){
		document.querySelector("#containerOne").style.display = "none";
		document.querySelector("#containerThree").style.display = "block";
	} else if (inputData.includes("story")) {
		document.querySelector("#containerOne").style.display = "none";
		document.querySelector("#containerFour").style.display = "block";
	}
}



// document.querySelector("#one").addEventListener("click", function() {
// 	document.querySelector("#containerOne").style.display = "none";
// 		document.querySelector("#containerTwo").style.display = "block";
		
// })

// document.querySelector("#two").addEventListener("click", function() {
// 	document.querySelector("#containerOne").style.display = "none";
// 		document.querySelector("#containerThree").style.display = "block";
		
// })

// document.querySelector("#three").addEventListener("click", function() {
// 	document.querySelector("#containerOne").style.display = "none";
// 		document.querySelector("#containerFour").style.display = "block";
		
// })


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






