const place = {
	"s": "What year would you like to go to; 2015, 1985, 1955 or 1855?",
	"soptions":["2015", "1985", "1955","1855"],
	"s-2015":"I see you're a fan of Back to the Future 2. Type 'Biff' if you'd rather deal with Biff or type 'Griff' if you'd rather deal with Griff. Type 'back' to go back.",
	"s-2015options":["Biff","Griff"],
	"s-2015-Biff":"Hmm, interesting. Biff is angry and has a cane. Type 'fight' to stand and fight or type 'run' to run away like a coward. Type 'back' to go back.",
	"s-2015-Biffoptions":["fight","run"],
	"s-2015-Biff-fight":"Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure. YOU WIN! GAME OVER! Type 'back' to go back.",
	"s-2015-Biff-run":"You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice. BAD ENDING! GAME OVER! Type 'back' to go back.",
	"s-2015-Griff":"Griff is asking you if you are in, or out. What do you say? Type 'in' or 'out'. Type 'back' to go back.",
	"s-2015-Griffoptions":["in","out"],
	"s-2015-Griff-in":"Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you. BAD ENDING! GAME OVER! Type 'back' to go back.",
	"s-2015-Griff-out":"Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure. YOU WIN! GAME OVER! Type 'back' to go back.",
	"s-1985":"Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. You can call yourself Calvin Klein. BAD ENDING! GAME OVER! Type 'back' to go back.",
	"s-1955":"I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? Type 'Yes', 'No' or 'set her up with George'. Type 'back' to go back.",
	"s-1955options":["Yes","No","set her up with George"],
	"s-1955-Yes":"Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955. BAD ENDING! GAME OVER! Type 'back' to go back.",
	"s-1955-No":"Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist. BAD ENDING! GAME OVER! Type 'back' to go back.",
	"s-1955-set her up with George":"Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time. YOU WIN! GAME OVER! Type 'back' to go back.",
	"s-1855":"I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? Type 'Horses', 'Moonshine' or 'Train. Type 'back' to go back.",
	"s-1855options":["Horses","Moonshine","Train"],
	"s-1855-Horses":"Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it. BAD ENDING! GAME OVER! Type 'back' to go back.",
	"s-1855-Moonshine":"You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855. BAD ENDING! GAME OVER! Type 'back' to go back.",
	"s-1855-Train":"Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? Type 'Take her', or 'Leave her'. Type 'back' to go back.",
	"s-1855-Trainoptions":["Take her","Leave her"],
	"s-1855-Train-Take her":"Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her. You return to your time and the Doc visits you with a new time machine. YOU WIN! GAME OVER! Type 'back' to go back.",
	"s-1855-Train-Leave her":"Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed. BAD ENDING! GAME OVER! Type 'back' to go back.",
};
var count = 0;
var node ="s";
var options = place[node+"options"];
var result = place[node];
var prevNode = "s";
var inputHappened = function(currentInput){
	if (count == 0) {
		count++;
		result = "Nice to meet you, "+ currentInput +". What year would you like to go to; 2015, 1985, 1955 or 1855?";
		document.querySelector('#input').value="";
		return result;
  	} else if (currentInput=="back") {
  		node = node.split("-"+prevNode)[0];
  		options=place[node+"options"];
  		result = place[node];
  		document.querySelector('#input').value="";
  		return result;
	} else if (options.includes(currentInput)) {
  		node=node+"-"+currentInput;
  		options=place[node+"options"];
  		result = place[node];
  		prevNode = currentInput;
  		document.querySelector('#input').value="";
  		return result;
  	} else {
  		return "You entered an invalid input. Pls try again. " + result;
  	}
  	document.querySelector('#input').value="";
};
var display = function( data ){
  var displayElement = document.querySelector('#output');
  displayElement.innerHTML = "";
  output.innerText = data;
};