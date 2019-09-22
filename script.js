console.log("hello script js");

/*
Choose Your Own Adventure

Ask player which House to be sorted into, after which player needs to find the House Head within Hogwarts Castle.
*/

//for easy update of display message
const input = document.getElementById("input");

//to store last messages displayed in case of invalid input
var lastInput;
var lastOutput;

//to track progress of game
var gameCounter = 0;

var progressGame = function() {
    gameCounter ++;
    console.log( "Game counter: " + gameCounter);
}

var gameProgress = ["getName", "getHouse", "findProfessor"];



//to store player name
var player;

//to store player house
var house;

const housesOfHogwarts = [
    { name: "Gryffindor",
      head: "McGonagall",
      founder: "Godric",
      ghost: "Nearly Headless Nick"
    },
    { name: "Hufflepuff",
      head: "Sprout",
      founder: "Helga",
      ghost: "Fat Friar"
    },
    { name: "Ravenclaw",
      head: "Filtwick",
      founder: "Rowena",
      ghost: "Grey Lady"
    },
    { name: "Slytherin",
      head: "Snape",
      founder: "Salazar",
      ghost: "Bloody Baron"
    },
];

//to store target
var target;

//to store player location
var currentLocation;

const hogwartsCastle = [
    { level: "Dungeons",
      side: [
        { part: "Main",
          rooms: [
            { location: "Hufflepuff House",
              professor: "Sprout"
            },
            { location: "Slytherin House",
              professor: "Snape"
            },
            { location: "Potions Classroom",
              professor: "Snape"
            }
        ]}
      ]
    },
    { level: "Ground",
      side: [
        { part: "East",
          rooms: [
            { location: "Transfiguration Classroom",
              professor: "McGonagall"
            },
            { location: "Herbology Classroom",
              professor: "Sprout"
            }]
        },
        { part: "West",
          rooms: [
            { location: "Great Hall",
              professor: "Dumbledore"
            }],
        }
      ]
    }
]


//start game by requesting player's name
alert("Welcome to Hogwarts. What's your name?");
input.placeholder = "Enter name";

var inputHappened = function(currentInput){
  console.log( currentInput );

/*
    //check if input is undefined
    if (!isNaN(Number(currentInput))) {
    input.value = "";
    input.placeholder = lastInput;
    return lastOutput;
    }
*/

  //check if is new game
  if (gameProgress[gameCounter] === "getName") {

    //store player name in Upper Case for easy reading
    player = currentInput.toUpperCase();
    console.log( "Player: " + player );

    //increment game progress
    progressGame();

    input.value = "";
    lastInput = "Enter House";
    input.placeholder = lastInput;
    lastOutput = `Hi, ${player}. What House are you in?\n1) Gryffindor\n2) Hufflepuff\n3) Ravenclaw\n4) Slytherin`;
    return lastOutput;

  //get House of player
  } else if (gameProgress[gameCounter] === "getHouse") {

if (Number(currentInput) > 0 && Number(currentInput) < 5) {
    //store player house
    house = housesOfHogwarts[ Number(currentInput) - 1 ];
    console.log(house);

    //increment game progress
    progressGame();

    //set target to find
    target = house.head;
    console.log(target);

    //set default location to Great Hall
    currentLocation = hogwartsCastle[1].side[1].rooms[0];
    console.log(currentLocation);

    input.value = "";
    lastInput = "Exit Great Hall? (Y/N)";
    input.placeholder = lastInput;
    lastOutput = `Please report to Professor ${house.head} of ${house.name} House.\nYou are now in the Great Hall.`;
    return lastOutput;
} else {
    input.value = "";
    input.placeholder = lastInput;
    return lastOutput;
}


  //see where player wants to go
  } else if (gameProgress[gameCounter] === "findProfessor") {

    //check if target is found
    while ( target !== currentLocation.professor ) {
        //if player replies NO to exiting current location
        if (currentInput.toUpperCase === "N") {
            input.value = "";
            input.placeholder = "Exit? (Y/N)";
            return `You are looking for Professor ${target}\n You are now in ${currentLocation.location}.`;
        }

    }

  }


}




  // var output = "WOW SOMETHING HAPPENED";
  // input.value = "clear";
  // return output;