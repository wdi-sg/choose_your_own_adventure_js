// Any path the user goes down must ask them at least three questions.

// There must be a minimum of seven total destinations the user could arrive at based on their responses.

// For at least one of the questions asked, there must be more than two possible user responses.

// Your code must contain at least one loop.

// Your code must make use of both string and number user inputs.

var username = prompt("Welcome to DEAD OR ALIVE(DOA), you are a captured prisoner now. Tell us your name.");

var greeting = alert("So you're " + username + "? Complete these 3 tasks and you'll walk out of here alive. Otherwise, imminent death awaits you.");

var firstStepIntro = alert("Choose which of these 3 tasks you want to complete first, prisoner " + username + ".");

var firstStep = prompt("swim, run or jump");

var firstStepAns = alert("Excellent choice, prisoner " + username + ". Now, you have to choose a turn as you're competing with 4 other captives to stay alive.");

var trickQns = prompt("Do you want to go 1st, 2nd, 3rd, 4th or 5th?")

var trickQnsEnd = alert("Wait, I forgot that you're my prisoner now, " + username + ", you have no say when you want to go.")

var randomTurn = function() {
  var num = Math.ceil(Math.random() * 5);
  return num;
};

var turn = alert("You are number " + randomTurn() + " in queue .");

var secondStep = function() {
	if (firstStep == "swim") {
		prompt("Choose one. 1)Swim with the piranhas for 10m. 2)Swim in lava for 10m. 3)Swim in icy water for 30mins.");
	}
	else if (firstStep == "run") {
		prompt("Choose one. a)Run away from the lions for 100m. b)Run on lava for 50m. c)Run on dry ice for 400m.(case sensitive)");
	}
	else {
		prompt("Choose one. A)Jump on crocodiles for 5mins. B)Jump on lava for 10mins. C)Jump on ice picks for 30mins.(case sensitive)")
	}
};

secondStep();

var secondStepEnd = function() {
	if (secondStep == "1" || "a" || "A") {
		alert("The animals may have shown you love, " + username + ", but lady luck won't be on your side forever.");
		alert("Now choose another activity to do.");
	}
	else if (secondStep == "2" || "b" || "B") {
		alert("How did you survive the lava, " + username + ", but lady luck won't be on your side forever.");
		alert("Now choose another activity to do.");
	}
	else {
		alert("I guess you're a cool person, " + username + ", but lady luck won't be on your side forever.");
		alert("Now choose another activity to do.");
	}
};

secondStepEnd();

var thirdStep = function() {
	if (firstStep == "swim") {
		prompt("1)Run or 2)Jump or 3)Suicide");
		}
	else if (firstStep == "run") {
		prompt("a)Swim or b)Jump or c)Suicide (case sensitive)");
	}
	else {
		prompt("A)Run or B)Swim or C)Suicide (case sensitive)");
	}
};

thirdStep();

var thirdStepCont = function() {
	if (thirdStep == "a" || "B") {
		prompt("Choose one. 1)Swim with the piranhas for 10m. 2)Swim in lava for 10m. 3)Swim in icy water for 30mins.");
	}
	else if (thirdStep == "1" || "A") {
		prompt("Choose one. a)Run away from the lions for 100m. b)Run on lava for 50m. c)Run on dry ice for 400m.(case sensitive)");
	}
	else if (thirdStep == "2" || "b") {
		prompt("Choose one. A)Jump on crocodiles for 5mins. B)Jump on lava for 10mins. C)Jump on ice picks for 30mins.(case sensitive)");
	}
	else {
		alert("Thank you for not wasting my time anymore, prisoner " + username + ".");
		alert("You get 1 point.");
	}
};

thirdStepCont();

secondStepEnd();

var fourthStep = function() {
	if (firstStep == "swim" && thirdStep == "1") {
		prompt("1)Jump or 2)Suicide");
		}
	else if (firstStep == "swim" && thirdStep == "2") {
		prompt("01)Run or 02)Suicide");
	}
	else if (firstStep == "run" && thirdStep == "a") {
		prompt("a)Jump or b)Suicide (case sensitive)");
	}
	else if (firstStep == "run" && thirdStep == "b") {
		prompt("ab)swim or ba)Suicide (case sensitive)");
	}
	else if (firstStep == "jump" && thirdstep == "A") {
		prompt("A)Swim or B)Suicide (case sensitive)");
	}
	else if (firstStep == "jump" && thirdstep == "B") {
		prompt("AB)Run or BA)Suicide (case sensitive)");
	}
};

fourthStep();

var fourthStepCont = function() {
	if (fourthStep == "ab" || "A") {
		prompt("Choose one. 1)Swim with the piranhas for 10m. 2)Swim in lava for 10m. 3)Swim in icy water for 30mins.");
	}
	else if (thirdStep == "01" || "AB") {
		prompt("Choose one. a)Run away from the lions for 100m. b)Run on lava for 50m. c)Run on dry ice for 400m.(case sensitive)");
	}
	else if (thirdStep == "a" || "1") {
		prompt("Choose one. A)Jump on crocodiles for 5mins. B)Jump on lava for 10mins. C)Jump on ice picks for 30mins.(case sensitive)");
	}
	else {
		alert("Thank you for not wasting my time anymore, prisoner " + username + ".");
		alert("You get 2 points.")
	}
};

fourthStepCont();

secondStepEnd();





