var myName = prompt("what's your name?");
var side;
var chooseSide = function() {
	side = prompt('do you want to join the dark or light side?');
};
chooseSide();

//selection of characters for game
if (side == "light") {
	var arrLength = goodArr.length;
	var hero1;
	var hero2;
	var hero3;

	//let the user choose the heroes
	selectHero1();
	function selectHero1 () {
		var h1 = prompt('please choose your first hero.');
		for (var i = 0; i < goodArr.length; i++) {
			if(h1 == goodArr[i]){
				goodArr.splice(i,1);
			};
		};
		if (arrLength == goodArr.length) {
			selectHero1();
		} else {
			arrLength--;
			hero1 = h1;
		};
	};

	selectHero2();
	function selectHero2 () {
		var h2 = prompt('please choose your second hero.');
		for (var i = 0; i < goodArr.length; i++) {
			if(h2 == goodArr[i]){
				goodArr.splice(i,1);
			};
		};
		if (arrLength == goodArr.length) {
			selectHero2();
		} else {
			arrLength--;
			hero2 = h2;
		};
	};
	
	selectHero3();
	function selectHero3 () {
		var h3 = prompt('please choose your third hero.');
		for (var i = 0; i < goodArr.length; i++) {
			if(h3 == goodArr[i]){
				goodArr.splice(i,1);
			};
		};
		if (arrLength == goodArr.length) {
			selectHero3();
		} else {
			arrLength--;
			hero3 = h3;
		};
	};
	
	alert('you have chosen ' + hero1 +' and ' + hero2 + ' and ' + hero3 + '!XD');

	//choose the villans
	var rand1 = Math.floor(Math.random() * badArr.length);
		var vil1 = badArr[rand1];
		badArr.splice(rand1,1);
	var rand2 = Math.floor(Math.random() * badArr.length);
		var vil2 = badArr[rand2];
		badArr.splice(rand2,1);
	var rand3 = Math.floor(Math.random() * badArr.length);
		var vil3 = badArr[rand3];
		badArr.splice(rand3,1);
	alert('Watch out! The dark side has ' + vil1 +' and ' + vil2 + ' and ' + vil3 + '!O:');

} else if (side == "dark") {
	var arrLength = badArr.length;
	var vil1;
	var vil2;
	var vil3;

	//let the user choose the villains
	selectVil1();
	function selectVil1 () {
		var v1 = prompt('please choose your first villain.');
		for (var i = 0; i < badArr.length; i++) {
			if(v1 == badArr[i]){
				badArr.splice(i,1);
			};
		};
		if (arrLength == badArr.length) {
			selectVil1();
		} else {
			arrLength--;
			vil1 = v1;
		};
	};

	selectVil2();
	function selectVil2 () {
		var v2 = prompt('please choose your second villain.');
		for (var i = 0; i < badArr.length; i++) {
			if(v2 == badArr[i]){
				badArr.splice(i,1);
			};
		};
		if (arrLength == badArr.length) {
			selectVil2();
		} else {
			arrLength--;
			vil2 = v2;
		};
	};
	
	selectVil3();
	function selectVil3 () {
		var v3 = prompt('please choose your third villain.');
		for (var i = 0; i < badArr.length; i++) {
			if(v3 == badArr[i]){
				badArr.splice(i,1);
			};
		};
		if (arrLength == badArr.length) {
			selectVil3();
		} else {
			arrLength--;
			vil3 = v3;
		};
	};
	
	alert('you have chosen ' + vil1 +' and ' + vil2 + ' and ' + vil3 + '!XD');


	//choose the heroes
	var rand1 = Math.floor(Math.random() * goodArr.length);
		var hero1 = goodArr[rand1];
		goodArr.splice(rand1,1);
	var rand2 = Math.floor(Math.random() * goodArr.length);
		var hero2 = goodArr[rand2];
		goodArr.splice(rand2,1);
	var rand3 = Math.floor(Math.random() * goodArr.length);
		var hero3 = goodArr[rand3];
		goodArr.splice(rand3,1);
	alert('Darn it! The light side has ' + hero1 +' and ' + hero2 + ' and ' + hero3 + '!O:');
} else {
	//repeat prompt till either light or dark is entered
	chooseSide();
};


var fight = function () {




}