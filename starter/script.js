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
	return area.toLowerCase();
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
	return choices.toLowerCase();
}

function battle(attacker,defender,defenderHp,dp){
	var chanceToHit = Math.floor(Math.random() * dp);
	if (chanceToHit > 1){
		defenderHp = defenderHp - 1;
		alert(attacker + "'s attack hits!");
		alert(defender + "'s Hp left :" + defenderHp);
	}else{
		alert(attacker + "'s' attack missed!")
		alert(defender + "'s Hp left :" + defenderHp);
	}
	return defenderHp;
}



var start = confirm("Are you ready to dive into a new world?")
while (start === true) {
	var name = playersName();
	var confirmName = confirm("Your name is " + name + "?");
		while (confirmName === true){
			alert("Welcome " + name + "!! (๑>ᴗ<๑)");
			alert("First select your class!");
			var job = classSelection()
			var confirmClass = confirm("You have selected " + job + ". Is this your choice?");
			while (confirmClass === true){
				alert("You have selected " + job + "!!");
				alert("In this world, you will encounter many oppenent & monsters.");
				alert("Each victory over them will grant you 1pt. Defeating a boss will grant you 3pts.");
				alert("You have 3 playerLife. Once your playerLife reaches 0 the game ends.");
				alert("Plan your route carefully!");
				alert("It's time for you to start your adventure!");
				var score = 0;
				var playerLife = 3;
				while (playerLife > 0) {
					alert("Where would you like to head to?");
					var stage = areaSelection();
					if (stage == "forest"){
						alert("You have entered 'THE FOREST'")
						alert("As you approach the sparse forest you notice a dark figure coming out of the forest.")
						alert("As it comes into the sunlight, it reveals itself!")
						alert("A wild Goblin has appeared before you.")
						alert("At this point, what would you do?")
						var choices = choiceMaking("Fight","Run");
						if (choices === "fight"){
							var goblinHp = 1;
							alert("You get to go 1st!");
						while(goblinHp > 0) {
							goblinHp = battle(name,"Goblin",goblinHp,5);
							playerLife = battle("Goblin",name,playerLife,1);
						}
							alert("You manage to defeat the Goblin!");
							alert("Score + 1!");
							score = score + 1;
							alert("Current Score " + score);
							alert("After you entered the foreset, you continue deep into the forest.");
							alert("Halfway through your walk, a Forest Fairy appears");
							alert("At this point what would you do?");
							var choices2 = choiceMaking("Fight", "Run");
							if (choices2 === "fight"){
								var fairyHp = 2;
								alert("You get to go 1st!");
							while(fairyHp > 0) {
								fairyHp = battle(name,"Forest Fairy",fairyHp,5);
								playerLife = battle("Forest Fairy",name,playerLife,1);
							}
								alert("You manage to defeat the Forest Fairy!");
								alert("Score + 1!");
								score = score + 1;
								alert("Current Score " + score);
								alert("As you're approaching the center of the forest, you felt the floor rumble.");
								alert("At this point what would you do?");
								var choices3 = choiceMaking("Continue","Run");
								if (choices3 === "continue"){
									alert("As you approach the source of the rumbling, a giant large shadow appears before you.");
									alert("The GOBLIN KING approaches before you.");
									alert("At this point what would you do?");
									var choices4 = choiceMaking("Fight","Run");
									if (choices4 === "fight"){
										var goblinKingHp = 3;
										alert("You get to go 1st!");
									while(goblinKingHp > 0) {
										goblinKingHp = battle(name,"GOBLIN KING",goblinKingHp,5);
										playerLife = battle("GOBLIN KING",name,playerLife,3);
									}
										alert("You manage to defeat the GOBLIN KING!");
										alert("Score + 1!");
										score = score + 3;
										alert("Current Score " + score);
									}else{
										alert("You did not escape successfully.");
										alert("The Goblin King smashed you onto the ground with his giant club.");
										alert("You took 3 damage.");
										playerLife = playerLife - 3;
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
					}else if(stage == "city"){
						alert("still under renovations");
					}else if(stage == "arena"){
						alert("still under renovations");
					}else{
						alert("Please Select a location!");
					}					

				}
				alert("You have ran out of playerLife!");
				alert("G.A.M.E O.V.E.R");
				alert("Final Score " + score);
				Exit();


  		}	
	}
}




