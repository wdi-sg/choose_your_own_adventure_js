// ### partOne
//Prompt for player's name
var valueName = prompt('What is your name?');

//function to check if year is numbers and year is 4 digit 
function checkYear(year){
	yearInt = parseInt(year);
	if(Number.isInteger(yearInt) && year.length==4){
		return true;
	}else{
		return false;
	}
}

//Checking that input name is not a number
if(isNaN(valueName)){
	console.log(valueName);
}else{
	var i = 0;// Create a while loop so that if user enters wrong number, it will be prompt again
	while(i<Infinity){
		valueName = prompt('Re-enter your name, invalid character');
		if(isNaN(valueName)){
			console.log(valueName);
			break;
		}else{
			i++;	
		}
	}
}

// Nice to meet you, `Sean`. What year would you like to go to? **(YYYY)*** `>= 2015`
var timeTravel = prompt('Nice to meet you, '+valueName+'. What year would you like to go to ?');
if ( checkYear(timeTravel)===true ) {
	console.log(timeTravel);
}else {
	var i = 0;// Create a while loop so that if user enters wrong number, it will be prompt again
	while(i<Infinity){
		timeTravel = prompt('Re-enter your year, invalid character');
		if( checkYear(timeTravel)===true ){
			console.log(timeTravel);
			break;
		}else{
			i++;
		}
	}
}


//* I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**
//         * `B`iff
//             * Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)**
//                 * `S`tand and fight
//                     * Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.
//                 * `R`un like a coward
//                     * You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.
//         * `G`riff
//             * Griff is asking you if you are in, or out. What do you say? **(I/O)**
//                 * `I`n
//                     * Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.
//                 * `O`ut
//                     * Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.

var character = prompt('I see you`re a fan of Back to the Future 2. Would you rather deal with Biff or Griff? **(B/G)**');
if( character==='B' ){
	var Biff = prompt('Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)**');
	if( Biff==='S' ){
		console.log('Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.');
	}else if( Biff==='R' ){
		console.log('You get away, but your future son Marty Jr. is heckled for the rest of his days for his dads cowardice.');
	}
}else if( character==='G' ){
	var Griff = prompt('Griff is asking you if you are in, or out. What do you say? **(I/O)**');
	if ( Griff==='I' ){
		console.log('Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.');
	}else if( Griff==='O' ){
		console.log('Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.');
	}

}

// * `1985-2014`
//     * Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?
//         * `Calvin Klein`
//             * Welcome to the future, `Calvin Klein`.
// * `1955-1984`
//     * I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? **(Y/N/S)**
//         * `Y`es
//             * Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.
//         * `N`o
//             * Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.
//         * `S`et her up with George
//             * Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.
// * `< 1955`
//     * I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? **(H/M/T)**
//         * `H`orses
//             * Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.
//         * `M`oonshine
//             * You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.
//         * `T`rain
//             * Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? **(T/L)**
//                 * `T`ake her
//                     * Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.
//                 * `L`eave her
//                     * Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.


if(checkYear(timeTravel)>=1985 && checkYear(timeTravel)<=2014){
	var lateYear = prompt('Doc has already destroyed the Time Machine at this point. I guess youll have to wait around until 2015. What name would you like to go by until then?');
	console.log('Welcome to the future' + '`'+lateYear+'`');
}else if(checkYear(timeTravel)>=1955 && checkYear(timeTravel)<=1984){
	var midYear = prompt('I see youre a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? **(Yes/No/Set a meeting)**');
	if(midYear==='Yes'){
		console.log('Creepy. I hope you have some backup plan in place to get out of this. Until then, youre stuck in 1955.');
	}else if(midYear==='No'){
		console.log('Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.');
	}else if(midYear==='Set a meeting'){
		console.log('Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.');
	}
}else if(checkYear(timeTravel)<=1955){
	var earlyYear= prompt('I see youre a fan of Back to the Future 3. Youve run out of gas and cant get back to your own time! How do you power the Time Machine? **(Horses/Moonshine/Train)**');
	if(earlyYear==='Horses'){
		console.log('Good idea, but no. The time machine needs to get to 88mph. 12 horsepower aint gonna cut it.');
	}else if(earlyYear==='Moonshine'){
		console.log('Youd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.');
	}else if(earlyYear==='Train'){
		var clara = prompt('Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? **(Take/Leave)**');
		if(clara = 'Take'){
			console.log('Interesting choice. Unfortunately the Doc cant grab Clara and get back to the car in time. He ends up staying in 1855 with her.');
		}else if(clara = 'Leave'){
			console.log('Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.');
		}
	}
}