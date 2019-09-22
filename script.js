console.log("hello script js");

/*
Choose Your Own Adventure

Ask player which House to be sorted into, after which player needs to find the House Head within Hogwarts Castle.
*/

//for easy update of display message
const input = document.getElementById("input");

//to track progress of game
var gameCounter = 0;

var progressGame = function() {
    gameCounter ++;
    console.log( "Game counter: " + gameCounter);
    input.value = "";
}

var gameProgress = ["getName", "getHouse"];



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
    { name: "Hogwarts",
      head: "Dumbledore"
    }
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

  //check if is new game
  if (gameProgress[gameCounter] === "getName") {

    //store player name in Upper Case for easy reading
    player = currentInput.toUpperCase();
    console.log( "Player: " + player );

    //increment game progress
    progressGame();

    input.placeholder = "Enter House";
    return `Hi, ${player}. What House are you in?\n1) Gryffindor\n2) Hufflepuff\n3) Ravenclaw\n4) Slytherin`;

  //get House of player
  } else if (gameProgress[gameCounter] === "getHouse") {

    //store player house
    house = housesOfHogwarts[ Number(currentInput) - 1 ];
    console.log(house);

    //increment game progress
    progressGame();

    //set target to find
    target = house.head;
    console.log(target);

    //set default location to Great Hall
    currentLocation = hogwartsCastle[1].side[1].rooms[0].location;
    console.log(currentLocation);

    input.placeholder = "Exit Great Hall? (Y/N)";
    return `Please report to Professor ${house.head} in ${house.name} House.\nYou are now in the Great Hall.`;

  //see where player wants to go
  }




  // var output = "WOW SOMETHING HAPPENED";
  // input.value = "clear";
  // return output;

};