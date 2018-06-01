
//count number of good guys
var countGood = function () {
	var count = 0;

	for (var guys in goodGuys) {
		count++;
	};

	return count;
}

//make goodGuys an array
var goodArr = Object.keys(goodGuys);

//make badGuys an array
var badArr = Object.keys(badGuys);


//count number of bad guys
var countBad = function () {
	var count = 0;

	for (var guys in badGuys) {
		count++;
	};

	return count;
}

