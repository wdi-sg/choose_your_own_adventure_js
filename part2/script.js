// console.log("hello script js");

//Game state management
var input = document.getElementById("input");
input.setAttribute("maxlength", "1");

var daysLeft = 7;
var hoursCounter = 0;

    //User character
var jakePeralta = {
    stamina: 100,
    dexterity: 10,
}

var gameScore = 0;
var scoreBoard = document.createElement("div");
scoreBoard.innerText = `Score: ${gameScore}\nStamina: ${jakePeralta.stamina}\n Dexterity: ${jakePeralta.dexterity}`
scoreBoard.style["width"] = "7rem";
scoreBoard.style["height"] = "4rem";
scoreBoard.style["border"] = "3px solid red";
scoreBoard.style["margin-left"] = "40px";
scoreBoard.style["position"] = "fixed";
scoreBoard.style["top"] = "20px";
scoreBoard.style["right"] = "10px";
scoreBoard.style["text-align"] = "center";
scoreBoard.style["padding-top"] = "4px";
document.body.appendChild(scoreBoard);

var gameStarted = false;
var isAtActions = false;
var isWithCoworker = false;
var isWithPerp = false;
var finishedInt = false;
var displayOutput = "";
var characterIndex;
var characterInPlay;
var dexterityStatus;
var intIndex;
var currentInt;

var regex = RegExp(/[a-c]/i);

var displayActions = () => {
    isAtActions = true;
    input.style["display"] = "inline";
    displayOutput = `What would you like to do?\n(a) Go to the office \n(b) Hang out at the bar (Shaw's) \n(c) Work a case (catch some perps!)\n\n(Please select and enter a, b or c)`;
    display(displayOutput);
}

var newGameReset = () => {
    gameScore = 0;
    jakePeralta.stamina = 100;
    jakePeralta.dexterity = 10;
    displayOutput = "Welcome to this game. You are Jake Peralta, a talented but exceedingly immature detective in the NYPD. Interact with your fellow detectives and coworkers to gain stat boosts, or go out to the field and catch some perps!";
    var startButton = document.createElement("button");
    startButton.innerText = "Start!"
    startButton.style["margin-left"] = "40px";
    startButton.style["font-size"] = "4rem";
    startButton.addEventListener("click", () => {
        gameStarted = true;
        document.body.removeChild(startButton);
        displayActions();
    })
    document.body.appendChild(startButton);
    input.style["display"] = "none";
    return displayOutput;
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
var amyOptionsOne = createOptions("Loud Amy", "Lonely and Sad Amy", "Pervert Amy");
var charlesOptionsOne = createOptions("Me, Jake Peralta", "Scully", "Gina");
var ginaOptionsOne = createOptions("The Fairy Goddesses", "Pixie Lemons", "Floor-Gasm");
var raymondOptionsOne = createOptions("Black coffee without sugar or milk and a bowl of plain low-fat yoghurt", "Orange juice with pulp and oatmeal", "Room-temperature water and one hard-boiled egg yolk");
var hitchcockOptionsOne = createOptions("My stepsister painting her house", "My cousin licking my face", "My mother stroking my head");
var scullyOptionsOne = createOptions("Over 20 Nigerian scams", "A beautiful Nigerian lady", "Prank by me, Jake Peralta, involving fake hot dogs");
var terryOptionsOne = createOptions("Full fat Greek yoghurt with a touch of honey", "Full fat Greek yoghurt with a single strawberry", "Full fat Greek yoghurt with a sprinkle of coconut flakes");
var rosaOptionsOne = createOptions("Parkour", "Picking locks", "Throwing Ninja stars");

//Question Two Options
var amyOptionsTwo = createOptions("Cats", "Dogs", "Hitchcock");
var charlesOptionsTwo = createOptions("A great sense of rhythm", "Perfect pitch", "A flat ass");
var ginaOptionsTwo = createOptions("Slept with Charles", "Owned a spandex suit", "Had my phone on airplane mode");
var raymondOptionsTwo = createOptions("Jogging on the treadmill", "Oak barrels", "Gambling");
var hitchcockOptionsTwo = createOptions("Herbalife", "Nutriboom", "Madoff Ponzi");
var scullyOptionsTwo = createOptions("You have been electrocuted many times", "You stuck your hand into a barbecue once to rescue a burning steak", "You chew on your fingertips regularly");
var terryOptionsTwo = createOptions("A tight-fitting shirt", "A striped bow-tie", "Suspenders");
var rosaOptionsTwo = createOptions("Smash glass bottles", "Yoga", "Kick brick walls");

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
var createInteractions = (question, options, correctAnswer, scoreBonus) => {
    return {question, options, correctAnswer, scoreBonus};
}

//Interaction One
var amyIntOne = createInteractions(amyQnOne, amyOptionsOne, amyCorrectAnsOne, 3);
var charlesIntOne = createInteractions(charlesQnOne, charlesOptionsOne, charlesCorrectAnsOne, 3);
var ginaIntOne = createInteractions(ginaQnOne, ginaOptionsOne, ginaCorrectAnsOne, 3);
var raymondIntOne = createInteractions(raymondQnOne, raymondOptionsOne, raymondCorrectAnsOne, 5);
var hitchcockIntOne = createInteractions(hitchcockQnOne, hitchcockOptionsOne, hitchcockCorrectAnsOne, 5);
var scullyIntOne = createInteractions(scullyQnOne, scullyOptionsOne, scullyCorrectAnsOne, 5);
var terryIntOne = createInteractions(terryQnOne, terryOptionsOne, terryCorrectAnsOne, 3);
var rosaIntOne = createInteractions(rosaQnOne, rosaOptionsOne, rosaCorrectAnsOne, 3);

//Interaction Two
var amyIntTwo = createInteractions(amyQnTwo, amyOptionsTwo, amyCorrectAnsTwo, 3);
var charlesIntTwo = createInteractions(charlesQnTwo, charlesOptionsTwo, charlesCorrectAnsTwo, 3);
var ginaIntTwo = createInteractions(ginaQnTwo, ginaOptionsTwo, ginaCorrectAnsTwo, 3);
var raymondIntTwo = createInteractions(raymondQnTwo, raymondOptionsTwo, raymondCorrectAnsTwo, 5);
var hitchcockIntTwo = createInteractions(hitchcockQnTwo, hitchcockOptionsTwo, hitchcockCorrectAnsTwo, 5);
var scullyIntTwo = createInteractions(scullyQnTwo, scullyOptionsTwo, scullyCorrectAnsTwo, 5);
var terryIntTwo = createInteractions(terryQnTwo, terryOptionsTwo, terryCorrectAnsTwo, 3);
var rosaIntTwo = createInteractions(rosaQnTwo, rosaOptionsTwo, rosaCorrectAnsTwo, 3);

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

var amy = createCoworker('Amy', amyInts);
var charles = createCoworker('Charles', charlesInts);
var gina = createCoworker('Gina', ginaInts);
var raymond = createCoworker('Captain Holt', raymondInts);
var hitchcock = createCoworker('Hitchcock', hitchcockInts);
var scully = createCoworker('Scully', scullyInts);
var terry = createCoworker('Terry', terryInts);
var rosa = createCoworker('Rosa', rosaInts);

coworkers.push(amy, charles, gina, terry, rosa, raymond, hitchcock, scully);

//Characters:- perps
    var randomPerp = {
        stamina: 0,
        dexterity: 0
    }

//Game mechanics:
var loadHandler = () => {
    display(newGameReset());
}

var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};

var inputHappened = function(currentInput){

    var goToOffice = () => {
        hoursCounter = hoursCounter + 4
        characterIndex = Math.ceil(Math.random() * 8) - 1;
        characterInPlay = coworkers[characterIndex]
        return `You decide to spend some time in the office. \nYou bump into ${coworkers[characterIndex].name}! \n `
    }

    var hangOutAtBar = () => {
        hoursCounter = hoursCounter + 3
        characterIndex = Math.ceil(Math.random() * 5) - 1;
        characterInPlay = coworkers[characterIndex]
        return`Let's get a drink at Shaw's. \nYou meet ${characterInPlay.name}! \n `
    }

    var workACase = () => {
        hoursCounter = hoursCounter + 2
        return `Alright! Let's go stake out some perps... \nYou wait patiently in your car some distance away... \nAlas, the perp sees you! \n\nWhat do you do?\n(a) Run away!\n(b) Chase after him!\n(c) Slowly approach him...`
    }

    var actionsPath = () => {
        var proceedButton = document.createElement("button");
        proceedButton.innerText = "proceed"
        proceedButton.style["margin-left"] = "40px";
        proceedButton.style["padding"] = "6px";
        proceedButton.style["font-size"] = "1.6rem";
        proceedButton.addEventListener("click", () => {
            document.body.removeChild(proceedButton);
            input.style["display"] = "inline";
            if (isWithCoworker) {
                display(coworkerPath());
            } else if (isWithPerp) {
                return perpPath();
            }
        })

        input.style["display"] = "none";
        document.body.appendChild(proceedButton);

        switch (currentInput.toLowerCase()) {
            case 'a':
                isWithCoworker = true;
                return goToOffice();
                break;
            case 'b':
                isWithCoworker = true;
                return hangOutAtBar();
                break;
            case 'c':
                input.style["display"] = "inline";
                document.body.removeChild(proceedButton);
                isWithPerp = true;
                return workACase();
                break;
        }
    }

    var coworkerPath = () => {
        intIndex = Math.ceil(Math.random() * 2) - 1;
        currentInt = characterInPlay.interactions[intIndex]
        return `${currentInt.question}\n\n(a) ${currentInt.options.optionA}\n\n(b) ${currentInt.options.optionB}\n\n(c) ${currentInt.options.optionC}`;
    }

    var interactionsPath = () => {
        var continueButton = document.createElement("button");
        continueButton.innerText = "Continue"
        continueButton.style["margin-left"] = "40px";
        continueButton.style["font-size"] = "1.6rem";
        continueButton.addEventListener("click", () => {
            document.body.removeChild(continueButton);
            displayActions();
        })
        input.style["display"] = "none";
        document.body.appendChild(continueButton);

        finishedInt = true;

        switch (currentInput.toLowerCase()) {
            case currentInt.correctAnswer:
                gameScore = gameScore + currentInt.scoreBonus;
                scoreBoard.innerText = `Score: ${gameScore}`
                return `"You are correct!" \nJake receives ${currentInt.scoreBonus} points.`
                break;
            default:
                gameScore = gameScore - currentInt.scoreBonus;
                scoreBoard.innerText = `Score: ${gameScore}`
                return `"That's obviously wrong. What were you thinking? \nJake loses ${currentInt.scoreBonus} points"`
                break;
        }
    }

    var perpPath = () => {
        finishedInt = true;
        var backButton = document.createElement("button");
        backButton.innerText = "go back!"
        backButton.style["margin-left"] = "40px";
        backButton.style["font-size"] = "1.6rem";
        backButton.addEventListener("click", () => {
            document.body.removeChild(backButton);
            displayActions();
        })
        document.body.appendChild(backButton);
        input.style["display"] = "none";

        var runAway = () => {
            displayActions();
        }

        var chaseAfter = () => {

        }

        var slowlyApproach = () => {
            dexterityStatus = jakePeralta.dexterity *(Math.ceil(Math.random() * 10) - 1);
            if (dexterityStatus > 40){
                jakePeralta.stamina = jakePeralta.stamina - 1;
                gameScore = gameScore + 20;
                scoreBoard.innerText = `Score: ${gameScore}\nStamina: ${jakePeralta.stamina}\n Dexterity: ${jakePeralta.dexterity}`
                return `You slowly approach the perp. You are dexterous enough to apprehend him even as he struggles. Well done!`
            } else {
                jakePeralta.stamina = jakePeralta.stamina - 10;
                scoreBoard.innerText = `Score: ${gameScore}\nStamina: ${jakePeralta.stamina}\n Dexterity: ${jakePeralta.dexterity}`
                return `You slowly approach the perp. Unfortunately, he gets the better of you and escapes!`
            }
        }

        switch (currentInput.toLowerCase()) {
            case 'a':
                return runAway();
                break;
            case 'b':
                isWithCoworker = true;
                return chaseAfter();
                break;
            case 'c':
                isWithPerp = true;
                console.log("test");
                return slowlyApproach();
                break;
        }
    }

    if (gameStarted === false) {
            return newGameReset();
        } else if (isAtActions) {
            isAtActions = false;
            return actionsPath();
        } else if (isWithCoworker) {
            isWithCoworker = false;
            return interactionsPath();
        } else if (isWithPerp) {
            isWithPerp = false;
            return perpPath();
        }
};

loadHandler();