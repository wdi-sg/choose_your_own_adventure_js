console.log("hello script js");

//store all user inputs
var inputRecord = [];

//collect name upon user clicking start game
var gameStart = function(){
  document.getElementById("output").innerHTML = "First of all, please enter your name.";
};

//generate random comp number
var divideRNumber = Math.floor(Math.random() * 500);
console.log(`Stress Monster's number is: ${divideRNumber}`);

//generate random GA staff names
var staff = ['akira', 'khai', 'herda', 'anthony', 'aurelia'];
var randomStaff= staff[Math.floor(Math.random()*5)];
console.log(`The GA staff is: ${randomStaff}`);


//Game logic
var inputHappened = function(currentInput){
    //all current inputs to be stored into an array for ref
    inputRecord.push(currentInput);
    //to confirm inputs are stored
  console.log(inputRecord);
  //q1
  display( `Welcome unhappy ${inputRecord[0].toUpperCase()}!\nYour current state is just temporary, let's go change it up with some dose of endorphins! \n\nEnter 1 to collect happy points in the House of Happiness\nEnter 2 to exit the game` );

  //q1 - choice 1/2: points
  if (parseInt(inputRecord[1]) === 1 ){
    display(`You step into the House of Happiness and in front of you are three staircases - a rainbow marshmellow staircase, a diamond staircase, a normal staircase.\n\nChoose the staircase you want to go up to.\n\nA: The rainbow marshmellow staircase\nB: The diamond staircase\nC: The normal staircase`);

  //q1-choice 1/2:points - choice 1/3:rainbow staircase
        if ((inputRecord[2].toLowerCase())==="a" ){
            display(`At the top of the rainbow marshmellow staircase, there is a room. To open its door, you must engage in a number-guessing game with the Stress Monster.\n\n Guess a number - from 2 or 11.\n If Stress Monster's number is divisible by your number, you win.\nIf not, you lose to your Stress Monster.`);

  //q1-choice 1/2:points - choice 1/3:rainbow staircase - Outcome 1/2
            if (divideRNumber%(parseInt(inputRecord[3]))===0){
                display(`YOU WON!\n\n Stress Monster's number is: ${divideRNumber}, you have successfully divided your Stress Monster!\nThe fluffiest puppies attack you with tummy rubs and kisses!`);
            }
  //q1-choice 1/2:points - choice 1/3:rainbow staircase - Outcome 2/2 - Game Over
            else if (divideRNumber%(parseInt(inputRecord[3]))>0){
                display(`Sorry, the stress monster has won.\nGo back to drowning in your assignments.`);
            }
        }
  }
//q1-choice 1/2:points - choice 2/3:diamond staircase
        if ((inputRecord[2].toLowerCase())==="b" ){
            display(`At the top of the diamond staircase, you found all the GA assignments on the table. Beyond the table, it's Hawaii.\nTo get over to Hawaii now, you must crush the assignments by guessing the correct passcode to blow them up. \n\n Type your answer below.\nHint: It's a person's name and this person is crucial in your GA journey.`);

  //q1-choice 1/2:points - choice 2/3:diamond staircase - Outcome 1/2
            if ((inputRecord[3]).toLowerCase()===randomStaff){
                display(`You have survived SEI!\n ${randomStaff.toUpperCase()} has helped you greatly in your GA journey and now you are given an one-way ticket to Hawaii!\n\n ALOHA BEACHES!`);
            }
  //q1-choice 1/2:points - choice 2/3:diamond staircase - Outcome 2/2 - Game Over
            else if ((inputRecord[3]).toLowerCase()!==randomStaff){
                display(`Sorry, you didn't approach the right person for help!\nLooks like you will have to be stuck here until you finished all the assignments!`);
            }
        }
//q1-choice 1/2:points - choice 3/3:normal staircase - Game Over
        if ((inputRecord[2].toLowerCase())==="c" ){
            display(`At the top of the normal staircase is the entrance to 79 Anson Rd Lvl 20.\n\n Stress Monster smiles at you and says, "Time for morning exercise, ${inputRecord[0].toUpperCase()}!"`);
        }

  //q1 - choice 2/3 - Game over
  else if (parseInt(inputRecord[1])=== 2 ){
    display(`Seems like you didn't need anymore happiness, ${inputRecord[0].toUpperCase()}!\nGood to see you so happy, goodbye!`)
  }
};