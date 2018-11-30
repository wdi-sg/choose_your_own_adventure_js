/*
var name;
var yourScore = {};
var choice_2015;

var gameTime = function () {
    name = prompt("Please enter your name: ");
  //  console.log("Nice to meet you, " + name + ". What year would you like to go to? (YYYY): ");

    var year = parseInt(prompt("Nice to meet you, " + name + ". What year would you like to go to? (YYYY): "), 10);
    if (year >= '2015') { // start IF loop 2015
        choice_2015 = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G): ");
        choice_2015 = choice_2015.toLowerCase();
        if (choice_2015 === 'b') { // user chooses B
            choice_2015 = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R): ");
            choice_2015 = choice_2015.toLowerCase();
            if (choice_2015 === 's')
                prompt("Good choice. Biff is old and feeble at this point. You push him over and he falls into a pile of manure.");
            else if(choice_2015 === 'r')
                prompt("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
        }
        else if (choice_2015 === 'g') { // user chooses G
            choice_2015 = prompt("Griff is asking if you are in, or out. What do you say? (I/O): ");
            choice_2015 = choice_2015.toLowerCase();
            if (choice_2015 === 'i')
                prompt("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.")
            else if (choice_2015 === 'o')
                prompt("Good call. You deck Griff in the jaw and run. He gives chase on his hoverboard and ends up in a pile of manure.");
        }
    } // end IF loop 2015
    else if (year >= '1985' && year <= '2014') { // start if loop 1985

    }

};

gameTime();
*/



/*var getPC = function () {
	var name = prompt("Please enter your name: ");

	return function annoyingQuestions(name) {
		var questions = parseInt(prompt("Nice to meet you " + name + "! What year would you like to go to? (YYYY): "));
	};
};

const setUpStuff = getPC();
setUpStuff();
*/


var getPC = function (callMeBack) {
	var name = prompt("Please enter your name: ");

	//var ff = callMeBack(name);
    //debugger;
    callMeBack(name);
};

var gamerQuestions = function(name) {
	var question = parseInt(prompt("Nice to meet you " + name + "! What year would you like to go to? (YYYY): "));

	 function gameTime(question) {
		if(question >= 2015)
			year_2015();
		/*else if (question >= 1985 && question <= 2014)
			year_1985();
		else if(question >= 1955 && year <= 1984)
			year_1955();*/
		else if (question < 1955)
			year_1955();
	}
	return gameTime(question);
};


var year_2015 = function(){
	var choice_2015 = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G): ");
    choice_2015 = choice_2015.toLowerCase();
	if (choice_2015 === 'b') { // user chooses B
		choice_2015 = prompt("Biff. Hmm, interesting. Biff is angry and has a cane. Do you Stand and fight, or Run away like a coward? (S/R): ");
		choice_2015 = choice_2015.toLowerCase();
		if (choice_2015 === 's')
			alert("Stand and Fight. Good choice. Biff is old and feeble at this point. You push him over and he falls into a pile of manure.");
		else if(choice_2015 === 'r')
			alert("Run away like a coward. You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
	} // end B loop path
	else if (choice_2015 === 'g') { // user chooses G
		choice_2015 = prompt("Griff. Griff is asking if you are In, or Out. What do you say? (I/O): ");
		choice_2015 = choice_2015.toLowerCase();
		if (choice_2015 === 'i')
			alert("In. Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.")
		else if (choice_2015 === 'o')
			alert("Out. Good call. You deck Griff in the jaw and run. He gives chase on his hoverboard and ends up in a pile of manure.");
	} // end G loop path
};

var year_1955 = function(){
	var choice_1955 = prompt("you are Grey Woof, the last of the Xianti. You have been trained in the secret magi arts of the Xianti. You are on a quest of great inconvenience to recover the Moonstone and use its power to slander Shredder, benevolent dictator of Lion City. you are in a boat and wish to use some magic to aid your voyage. (Y/N)");
		choice_1955 = choice_1955.toLowerCase();
		year_1955_2(choice_1955);
};

// from year_1955 (Y/N)
var year_1955_2 = function(choice) {
	var choice_1955;
	if (choice === 'y')
		choice_1955 = prompt("You easily enter the required trance state after a few moments of concentration, and all forms of wind elementals and air sprites respond to your call, propelling the boat forward with great force and consuming your magic force. Boat enters the harbour and eager hands help to secure the boat. A crowd gathers and begins to desperately shout \"Who but a god could cross the Sea of Disasters. Save us, Lord! Destroy the evil witch king!\". You see two armed soldiers running towards you with their swords drawn. Do you do as the crowd suggests? (Attack as crowd suggests/Escape with aid of magic/Run): ");
	else if(choice === 'n')
		choice_1955 = prompt("Sails fills up and you prepare for a long journey, during which you have very little sleep and lose energy due to constantly checking boat stays on course. Boat enters the harbour and eager hands help to secure the boat. A crowd gathers and begins to desperately shout \"Who but a god could cross the Sea of Disasters. Save us, Lord! Destroy the evil witch king!\". You see two armed soldiers running towards you with their swords drawn. Do you do as the crowd suggests? (Attack as crowd suggests/Escape with aid of magic/Run): ");

		choice_1955 = choice_1955.toLowerCase();
		year_1955_3(choice_1955);
}

// from year_1955_2 (Attack/Escape/Run)
var year_1955_3 = function (choice) {
	var choice_1955;
	if (choice === 'a')
		choice_1955 = prompt("You grab your wizard's staff in desperation and unleash a brilliantly coloured lightning bolt which smashes into one of the warriors, who instantly turns into a smoking, charred corpse. The other warrior is then attacked by the crowd with shouts of delight. Do you wish to Drop to the ground and stay out of sight or Leave from the nearest street? (Drop/Leave): ");
	else if(choice ==='e')
		choice_1955 = prompt("you force yourself to concentrate but the noise of the crowd and lack of sleep affects you. To your horror, you see the warriors hacking a bloody path through the crowd towards you. Do you continue tyring to Cast the spell or go to the Aid of the helpless crowd. (Cast/Aid): ");
	else if(choice ==='r')
		alert("you lift yourself up to stand on a table and the crowd lets out a cheer that peters into silence as you dive into a mass of people packed tightly behind you. You manage to escape but lose your way amongst the maze of alleys lined with houses. A thief steals your staff and you're helpless when facing a gang of robbers who leave after giving you a slit throat. Game Over");

		choice_1955 = choice_1955.toLowerCase();
		year_1955_4(choice_1955);
};

// from year_1955_3(D/L) (C/A)
var year_1955_4 = function(choice) {
	var choice_1955;
	if (choice === 'd')
		alert("you drop to the ground and end up being trampled by the berserk crowd. End of adventure.");
	else if (choice === 'l')
		alert("you leave from the nearest street and find a place to hide. You start to enjoy life, getting drunk on mead and forget about the mission, spending the rest of your days as a drunkard.");

	if (choice ==='c')
		alert("The tiredness overcomes you and you barely notice as the two warriors reach your side and begin to hack at you fervently with their swords. The town sweeper grumbles the next morning as he clears up what's left of the bloody mess.");
	else if(choice ==='a')
		alert("You force yourself to focus and manage to unleash a cracking bolt of lightning which pulverizes the two warriors into misshapen blackened figures. Other adventurers hear of your heroic deed and seek you out to form a group, and you sucessfully complete the mission.");
		//year_1955_5(choice_1955);
};


getPC(gamerQuestions);





