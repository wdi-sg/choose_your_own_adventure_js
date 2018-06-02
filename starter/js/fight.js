var chosenH;
var chosenV;

//User choosing a hero
var choosingHeroU = function () {
	chosenH = prompt("who do you want launch the first/next attack?");

	//checking whether the hero chosen is the ones previous chosen
	var yes;
	for (var i = 0; i < heroes.length; i++) {
		if (chosenH == heroes[i]) {
			yes = true;
			heroes.splice(i,1);
		}
	}
	if (!yes) {
		choosingHeroU();
	};
};


//User choosing a villain
var choosingVilU = function () {
	chosenV = prompt("who do you want launch the first/next attack?");

	//checking whether the vil chosen is the ones previous chosen
	var yes;
	for (var i = 0; i < villains.length; i++) {
		if (chosenV == villains[i]) {
			yes = true;
			villains.splice(i,1);
		};
	};
	if (!yes) {
		choosingVilU();
	};
};


//Com choosing a hero
var choosingHeroC = function () {
	var rand1 = Math.floor(Math.random() * heroes.length);
	chosenH = heroes[rand1];
	heroes.splice(rand1,1);
	alert('computer chose ' + chosenH + "!");
};


//Com choosing a villain
var choosingVilC = function () {
	var rand1 = Math.floor(Math.random() * villains.length);
	chosenV = villains[rand1];
	villains.splice(rand1,1);
	alert('computer chose ' + chosenV + "!");
};















//user choosing attack 
var choosingAttU = function (side, player) {

	if (side == 'light') {
		var yes;

		//ask for attack and if not available, ask again
		while (yes != true) {
			var att = prompt('what attack would you like to use?');
			//making player's attacks an array
			var playerAtt = Object.keys(goodGuys[player].attacks);

			for (var i = 0; i < playerAtt.length; i++) {
				if (att == playerAtt[i]) {
					yes = true;
					return att;
				};
			};
		};

	} else if (side == 'dark') {
		var yes;

		//ask for attack and if not available, ask again
		while (yes != true) {
			var att = prompt('what attack would you like to use?');
			//making player's attacks an array
			var playerAtt = Object.keys(badGuys[player].attacks);

			for (var i = 0; i < playerAtt.length; i++) {
				if (att == playerAtt[i]) {
					yes = true;
					return att;
				};
			};
		};
	};
	

}


//com choosing attack
var choosingAttC = function (side, player) {

	if (side == 'light') {
		//making player's attacks an array
		var playerAtt = Object.keys(goodGuys[player].attacks);
		var att;

		var rand1 = Math.floor(Math.random() * playerAtt.length);
		att = playerAtt[rand1];

		alert(player+' has chosen ' + att + "!");
		return att;

	} else if (side == 'dark') {
		//making player's attacks an array
		var playerAtt = Object.keys(badGuys[player].attacks);
		var att;

		var rand1 = Math.floor(Math.random() * playerAtt.length);
		att = playerAtt[rand1];

		alert(player+' has chosen ' + att + "!");
		return att;
	};

};

//calculate impact and deduct from hp 
var computeImpact = function (sideOfAtt, attacker, defense, attack) {
	var rand =  Math.floor(Math.random() * 10);

	if (sideOfAtt == "light") {

		var prob = goodGuys[attacker].luckStat*10;
		var attStrength = goodGuys[attacker].attacks[attack].strength;

		//get weakness
		var attSpec = goodGuys[attacker].attacks[attack].specs;
		var defSpec = badGuys[defense].specs;
		var weakness = 1;
		for (var i=0; i<defSpec.length; i++) {
			if(weakness >= specialities[attSpec][defSpec[i]]) {
				weakness = specialities[attSpec][defSpec[i]];
			}
		}

		console.log(prob);
		console.log(rand);


		//if luckStat returns true, then deduct from villain's hp
		if (rand <= prob) {
			var impact = attStrength * weakness;
			badGuys[defense].hp -= impact;
			alert('It hit! Impact of ' + impact + ' dealt to ' + defense); 
		} else {
			alert("aww, it didn't hit!");
		};

	} else if (sideOfAtt == "dark") {

		var prob = badGuys[attacker].luckStat*10;
		var attStrength = badGuys[attacker].attacks[attack].strength;

		//get weakness
		var attSpec = badGuys[attacker].attacks[attack].specs;
		var defSpec = goodGuys[defense].specs;
		var weakness = 1;
		for (var i=0; i<defSpec.length; i++) {
			if(weakness >= specialities[attSpec][defSpec[i]]) {
				weakness = specialities[attSpec][defSpec[i]];
			}
		}

		console.log(prob);
		console.log(rand);


		//if luckStat returns true, then deduct from heroes' hp
		if (rand <= prob) {
			var impact = attStrength * weakness;
			goodGuys[defense].hp -= impact;
			alert('It hit! Impact of ' + impact + ' dealt to ' + defense); 
		} else {
			alert("aww, it didn't hit!");
		};

	};
	

};






