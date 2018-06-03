///*
function playersName(){
	var username = prompt("What is your name?");
	while (username === ""){
		alert("Please type a name in the field!");
		var username = prompt("What is your name?");
	}while (username === null){
		exit();
	}
	return username;
}

function classSelection(){
	var job = prompt("Swordsman, Gunner, Magician");
	while (job === ""){
		alert("Please select a class!");
		var job = prompt("Swordsman, Gunner, Magician");
	}while (job === null){
		exit();
	}
	return job;
}


function areaSelection(){
	var area = prompt("Forest, City, Arena");
	while (area === ""){
		alert("Please select an area!");
		var area = prompt("Forest, City, Arena");
	}while (area === null){
		alert("G.A.M.E O.V.E.R");
		alert("Final Score " + score)
		exit();
	}
	return area;
}

function choiceMaking(option1, option2){
	var choices = prompt(option1 + " or " + option2);
	while (choices === ""){
		alert("Please make your choice!");
		var choices = prompt(option1 + " or " + option2);
	}while (choices === null){
		alert("G.A.M.E O.V.E.R");
		alert("Final Score " + score)
		exit();
	}
	return choices;
}

function enemies(hp){
	var life = hp;
}



var start = confirm("Are you ready to dive into a new world?")
while (start === true) {
	var name = playersName();
	var confirmName = confirm("Your name is " + name + "? (゜-゜)");
		while (confirmName === true){
			alert("Welcome " + name + "!! (๑>ᴗ<๑)");
			alert("First select your class!");
			var job = classSelection()
			var confirmClass = confirm("You have selected " + job + ". Is this your choice?");
			while (confirmClass === true){
				alert("You have selected " + job + "!!");
				alert("In this world, you will encounter many oppenent & monsters.");
				alert("Each victory over them will grant you 1pt. Defeating a boss will grant you 3pts.");
				alert("You have 3 life. Once your life reaches 0 the game ends.");
				alert("Plan your route carefully!");
				alert("It's time for you to start your adventure!");
				var score = 0;
				var life = 3;
				while (life > 0) {
					alert("Where would you like to head to?");
					var stage = areaSelection();
					if (stage = "Forest"){
						alert("You have entered 'THE FOREST'")
						alert("As you approach the sparse forest you notice a dark figure coming out of the forest.")
						alert("As it comes into the sunlight, it reveals itself!")
						alert("A wild Goblin has appeared before you.")
						alert("At this point, what would you do?")
						var choices = choiceMaking("Fight","Run");
						if (choices === "Fight"){
							life = life - 1;
							score = score + 1;
							alert("You manage to defeat the Goblin!");
							alert("Score + 1!");
							alert("Current Score " + score);
							alert("As you entered the forest, a forest fairy appeared.");
							alert("At this point what would you do?");
							var choices2 = choiceMaking("Fight", "Run");
							if (choices2 === "Fight"){
								score = score + 1;
								alert("You manage to defeat the forest fairy!");
								alert("Score + 1!");
								alert("Current Score " + score);
								alert("As you entered deeper into forest, you felt the floor rumble.");
								alert("At this point what would you do?");
								var choices3 = choiceMaking("Continue","Run");
								if (choices3 === "Continue"){
									alert("As you approach the source of the rumbling, a giant large shadow appears before you.");
									alert("The Goblin King approaches before you.");
									alert("At this point what would you do?");
									var choices4 = choiceMaking("Fight","Run");
									if (choices4 === "Fight"){
										life = life - 1;
									    score = score + 2;
									alert("You manage to defeat the Goblin King");
									alert("Score + 2!");
									alert("Current Score " + score);
									}else{
										alert("You did not escape successfully.");
										alert("The Goblin King smashed you onto the ground with his giant club.");
										alert("You took 3 damage.");
										life = life - 3;
									}
								}else{
									alert("You escaped!");
								}
							}else{
								alert("You escaped!");
							}
						}else{
							alert("You escaped!");
						}
					}else if(stage = "City"){

					}else if(stage = "Arena"){

					}else{

					}					

				}
				alert("You have ran out of life!")
				alert("G.A.M.E O.V.E.R");
				alert("Final Score " + score)
				Exit();


  		}	
	}
}





