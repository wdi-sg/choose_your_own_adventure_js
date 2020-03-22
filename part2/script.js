// console.log("hello script js");

//Game states
var gameStarted = false;
var gameScore = 0;

//User character
var jakePeralta = {
    stamina: 100,
    dexterity: 10,
}

//Questions
var createQuestion = question => `\n${question}\n`;

//Question One
var amyQnOne = createQuestion("What am I like after four drinks?");
var charlesQnOne = createQuestion("Who is my best friend?");
var ginaQnOne = createQuestion("What was the name of my dance group?");
var raymondQnOne = createQuestion("What is my regular breakfast?");
var hitchcockQnOne = createQuestion("What do my dreams always start with?");
var scullyQnOne = createQuestion("What have I fallen for?");
var terryQnOne = createQuestion("I keep a close watch on my diet. What is my once-a-week treat?");
var rosaQnOne = createQuestion("What am I good at?")

//Question Two
var amyQnTwo = createQuestion("What animal am I allergic to?");
var charlesQnTwo = createQuestion("All Boyle men are blessed with...?");
var ginaQnTwo = createQuestion("I have never ever...");
var raymondQnTwo = createQuestion("What was I previously addicted to?");
var hitchcockQnTwo = createQuestion("I was a victim of a scheme awhile back. Which scheme was this?");
var scullyQnTwo = createQuestion("Touch screens do not respond to  my fingers properly because...");
var terryQnTwo = createQuestion("What is my favorite sartorial feature?");
var rosaQnTwo = createQuestion("What do I do to keep myself centered?")

//Options
var createOptions = (optionA, optionB, optionC) => {
    return {optionA, optionB, optionC};
}

//Question One Options
var amyOptionsOne = ("Loud Amy", "Lonely and Sad Amy", "Pervert Amy");
var charlesOptionsOne = ("Me, Jake Peralta", "Scully", "Gina");
var ginaOptionsOne = ("The Fairy Goddesses", "Pixie Lemons", "Floor-Gasm");
var raymondOptionsOne = ("Black coffee without sugar or milk and a bowl of plain low-fat yoghurt", "Orange juice with pulp and oatmeal", "Room-temperature water and one hard-boiled egg yolk");
var hitchcockOptionsOne = ("My stepsister painting her house", "My cousin licking my face", "My mother stroking my head");
var scullyOptionsOne = ("Over 20 Nigerian scams", "A beautiful Nigerian lady", "Prank by me, Jake Peralta, involving fake hot dogs");
var terryOptionsOne = ("Full fat Greek yoghurt with a touch of honey", "Full fat Greek yoghurt with a single strawberry", "Full fat Greek yoghurt with a sprinkle of coconut flakes");
var rosaOptionsOne = ("Parkour", "Picking locks", "Throwing Ninja stars");

//Question Two Options
var amyOptionsTwo = ("Cats", "Dogs", "Hitchcock");
var charlesOptionsTwo = ("A great sense of rhythm", "Perfect pitch", "A flat ass");
var ginaOptionsTwo = ("Slept with Charles", "Owned a spandex suit", "Had my phone on airplane mode");
var raymondOptionsTwo = ("Jogging on the treadmill", "Oak barrels", "Gambling");
var hitchcockOptionsTwo = ("Herbalife", "Nutriboom", "Madoff Ponzi");
var scullyOptionsTwo = ("You have been electrocuted many times", "You stuck your hand into a barbecue once to rescue a burning steak", "You chew on your fingertips regularly");
var terryOptionsTwo = ("A tight-fitting shirt", "A striped bow-tie", "Suspenders");
var rosaOptionsTwo = ("Smash glass bottles", "Yoga", "Kick brick walls");

//Correct Answer One
var amyCorrectAnsOne = ("c");
var charlesCorrectAnsOne = ("a");
var ginaCorrectAnsOne = ("c");
var raymondCorrectAnsOne = ("c");
var hitchcockCorrectAnsOne = ("a");
var scullyCorrectAnsOne = ("a");
var terryCorrectAnsOne = ("a");
var rosaCorrectAnsOne = ("b");

//Correct Answer Two
var amyCorrectAnsTwo = ("b");
var charlesCorrectAnsTwo = ("c");
var ginaCorrectAnsTwo = ("c");
var raymondCorrectAnsTwo = ("a");
var hitchcockCorrectAnsTwo = ("b");
var scullyCorrectAnsTwo = ("a");
var terryCorrectAnsTwo = ("c");
var rosaCorrectAnsTwo = ("b");

//Interactions
var createInteractions = (question, options, correctAnswer) => {
    return {question, options, correctAnswer};
}

//Interaction One
var amyIntOne = createInteractions(amyQnOne, amyOptionsOne, amyCorrectAnsOne);
var charlesIntOne = createInteractions(charlesQnOne, charlesOptionsOne, charlesCorrectAnsOne);
var ginaIntOne = createInteractions(ginaQnOne, ginaOptionsOne, ginaCorrectAnsOne);
var raymondIntOne = createInteractions(raymondQnOne, raymondOptionsOne, raymondCorrectAnsOne);
var hitchcockIntOne = createInteractions(hitchcockQnOne, hitchcockOptionsOne, hitchcockCorrectAnsOne);
var scullyIntOne = createInteractions(scullyQnOne, scullyOptionsOne, scullyCorrectAnsOne);
var terryIntOne = createInteractions(terryQnOne, terryOptionsOne, terryCorrectAnsOne);
var rosaIntOne = createInteractions(rosaQnOne, rosaOptionsOne, rosaCorrectAnsOne);

//Interaction Two
var amyIntTwo = createInteractions(amyQnTwo, amyOptionsTwo, amyCorrectAnsTwo);
var charlesIntTwo = createInteractions(charlesQnTwo, charlesOptionsTwo, charlesCorrectAnsTwo);
var ginaIntTwo = createInteractions(ginaQnTwo, ginaOptionsTwo, ginaCorrectAnsTwo);
var raymondIntTwo = createInteractions(raymondQnTwo, raymondOptionsTwo, raymondCorrectAnsTwo);
var hitchcockIntTwo = createInteractions(hitchcockQnTwo, hitchcockOptionsTwo, hitchcockCorrectAnsTwo);
var scullyIntTwo = createInteractions(scullyQnTwo, scullyOptionsTwo, scullyCorrectAnsTwo);
var terryIntTwo = createInteractions(terryQnTwo, scullyOptionsTwo, scullyCorrectAnsTwo);
var rosaIntTwo = createInteractions(rosaQnTwo, rosaOptionsTwo, rosaCorrectAnsTwo);

//Interactions Arrays
var amyInts = [amyIntOne, amyIntTwo];
var charlesInts = [charlesIntOne, charlesIntTwo];
var ginaInts = [ginaIntOne, ginaIntTwo];
var raymondInts = [raymondIntOne, raymondIntTwo];
var hitchcockInts = [hitchcockIntOne, hitchcockIntTwo];
var scullyInts = [scullyIntOne, scullyIntTwo];
var terryInts = [terryIntOne, terryIntTwo];
var rosaInts = [rosaIntOne, rosaIntTwo];

//Characters:- coworkers
var coworkers = [];

var createCoworker = (name, interactions) => {
    return {name, interactions};
};

var amy = createCoworker('Amy Santiago', amyInts);
var charles = createCoworker('Charles Boyle', charlesInts);
var gina = createCoworker('Gina Linetti', ginaInts);
var raymond = createCoworker('Captain Holt', raymondInts);
var hitchcock = createCoworker('Hitchcock', hitchcockInts);
var scully = createCoworker('Scully', scullyInts);
var terry = createCoworker('Terry Jeffords', terryInts);
var rosa = createCoworker('Rosa Diaz', rosaInts);

coworkers.push(amy, charles, gina, raymond, hitchcock, scully, terry, rosa);

//Characters:- perps
    var randomPerp = {
        stamina: 0,
        dexterity: 0
    }

//Game mechanics:


var inputHappened = function(currentInput){
    if (gameStarted = false) {

    }
  console.log( currentInput );
  return "SOMETHING HAPPENED";
};

var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};