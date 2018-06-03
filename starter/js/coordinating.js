
var coordinating = function () {
	var hLength = 3;
	var vLength = 3;

	//user makes the first move
	if (side == 'light') {
		choosingHeroU();
		choosingVilC();

		//minus off hLength or vLength everytime either heroes or villains die respectively
		//the actual battle
		while(hLength>0 && vLength>0) {
			var att = choosingAttU('light', chosenH);
			computeImpact('light', chosenH, chosenV, att);
			att = choosingAttC('dark', chosenV);
			computeImpact('dark', chosenV, chosenH, att);

			if (goodGuys[chosenH].hp <= 0 && hLength>0) {
				alert(chosenH + " KO-ed! D:")
				hLength--;
				if(hLength>0){
					choosingHeroU();
				};
			} else if (badGuys[chosenV].hp <= 0 && vLength>0) {
				alert(chosenV + " KO-ed! XD");
				vLength--;
				if(hLength>0){
					choosingVilC();
				};
			};
		};

		//alert if lost or won
		if(hLength == 0) {
			alert('you lost! Sorry!');
			user.losses ++;
		} else {
			alert('you won! Woohoo!');
			user.wins ++;
		};

	} else if (side == 'dark') {
		choosingVilU();
		choosingHeroC();

		//minus off hLength or vLength everytime either heroes or villains die respectively
		//the actual battle
		while(hLength!=0 && vLength!=0) {
			var att = choosingAttU('dark', chosenV);
			computeImpact('dark', chosenV, chosenH, att);
			att = choosingAttC('light', chosenH);
			computeImpact('light', chosenH, chosenV, att);

			if (badGuys[chosenV].hp <= 0 && vLength>0) {
				alert(chosenV + " KO-ed! D:")
				vLength --;
				if(vLength>0){
					choosingVilU();
				};
			} else if (goodGuys[chosenH].hp <= 0 && hLength>0) {
				alert(chosenH + " KO-ed! XD");
				hLength --;
				if(hLength>0){
					choosingHeroC();
				};
			};
		};

		//alert if lost or won
		if(vLength == 0) {
			alert('you lost! Sorry!');
			user.losses ++;
		} else {
			alert('you won! Woohoo!');
			user.wins ++;
		};		


	};

}


coordinating();