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
var currentLevel;

var levelName = ["Dungeon", "Ground", "Tower"]

var getLevel = function (level) {
    return levelName[level];
}

const hogwartsCastle = [
    [
        { location: "Hufflepuff House",
          level: 0,
          professor: "Sprout"
        },
        { location: "Potions Classroom",
          level: 0,
          professor: "Snape"
        },
        { location: "Slytherin House",
          level: 0,
          professor: "Snape"
        },
    ],
    [
        { location: "Great Hall",
          level: 1,
          professor: "Dumbledore"
        },
        { location: "Transfiguration Classroom",
          level: 1,
          professor: "McGonagall"
        },
        { location: "Herbology Classroom",
          level: 1,
          professor: "Sprout"
        }
    ],
    [
        { location: "Gryffindor House",
          level: 2,
          professor: "McGonagall"
        },
        { location: "Ravenclaw House",
          level: 2,
          professor: "Filtwick"
        },
        { location: "Charms Classroom",
          level: 2,
          professor: "Filtwick"
        }
    ]
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
  switch (gameProgress[gameCounter]) {

    //get name of player
    case "getName":

        //store player name in Upper Case for easy reading
        player = currentInput.toUpperCase();
        console.log( "Player: " + player );

//move gameProgress to display function

        input.value = "";
        lastInput = "Enter House";
        input.placeholder = lastInput;
        lastOutput = `Hi, ${player}. What House are you in?\n1) Gryffindor\n2) Hufflepuff\n3) Ravenclaw\n4) Slytherin`;
        return lastOutput;
        break;

  //get House of player
    case "getHouse":

        //check if currentInput is valid selection
        if (Number(currentInput) > 0 && Number(currentInput) < 5) {
            //store player house
            house = housesOfHogwarts[ Number(currentInput) - 1 ];
            console.log(house);

//move gameProgress to display function

            //set target to find
            target = house.head;
            console.log("Finding: Professor " + target);

            //set default location to Great Hall
            currentLocation = hogwartsCastle[1][0];
            console.log(currentLocation);
            currentLevel = currentLocation.level;

            // console.log("Currently at: " + currentLocation.location);
            // console.log("Current Professor: " + currentLocation.professor);

            input.value = "";
            lastInput = "Exit Great Hall? (Y/N)";
            input.placeholder = lastInput;
            lastOutput = `Please report to Professor ${house.head} of ${house.name} House.\nYou are now in the Great Hall.`;
            return lastOutput;

        //repeat if invalid
        } else {
            input.value = "";
            input.placeholder = lastInput;
            return lastOutput;
        }
        break;

  //see where player wants to go
    case "findProfessor":
        console.log("Finding Professor");

        //check if target is found
        if  ( target !== currentLocation.professor ) {

        //if player did not choose to change level
        if (Number(currentInput) !== 0) {

            //if player replies NO to exiting current location
            if (currentInput.toUpperCase() === "N") {
                input.value = "";
                input.placeholder = "Exit? (Y/N)";
                return `You are looking for Professor ${target}\n You are now in ${currentLocation.location}.`;

            //if player replies YES to exiting current location
            } else if (currentInput.toUpperCase() === "Y") {

                input.value = "";
                lastInput = "Choose destination.";
                input.placeholder = lastInput;

                //inform current level available locations
                lastOutput = `You are now at level ${currentLevel}.\n You can choose to go to:\n1) Go to another level.\n2) ${hogwartsCastle[currentLevel][0].location}\n3) ${hogwartsCastle[currentLevel][1].location}\n4) ${hogwartsCastle[currentLevel][2].location}.`;
                return lastOutput;

            }
        }
        }
/*
        //if player choose to change level
        } else if (Number(currentInput) === 0) {

            //inform currentLevel
            //ask which level

        //if player choose a destination
        } else if (Number(currentInput) > 0 && Number(currentInput) < 5){

            //update currentLocation
            //check if target = currentLcoation.professor
                //if target is found
                } else if ( target === currentLocation.professor ) {
                    input.value = "";
                    input.placeholder = "Mission Accomplished!";
                    return `You have successfully reported to Professor ${target}.`;
                //else
                // inform currentLocation
                // ask if to Exit(Y/N)

        //if invalid entry
        } else



*/
        break;

    // default:
    //     return "Something went wrong!";


  }

}

  // var output = "WOW SOMETHING HAPPENED";
  // input.value = "clear";
  // return output;


//part 2 display

var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;

  switch (gameProgress[gameCounter]) {

    case "getName":

        //increment game progress
        progressGame();

        var welcomeMsg = function() {
            var img = document.createElement("img");
            //img.setAttribute("id", "nowShowing");
            img.src = "../image/hogwartscrest.jpeg";
            displayElement.appendChild( img );
        }
        welcomeMsg();
        break;

    case "getHouse":

        //increment game progress
        progressGame();

        var houseMsg = function() {

//doesn't work, because img is not within a div
//            document.getElementById("nowShowing").innerHTML = "";

            var p = document.createElement("p");
            p.setAttribute("id", "nowShowing");
            p.innerHTML = `Do you know who is the founder of ${house.name}?`;
            document.body.appendChild(p);
        }
        houseMsg();
        break;

  }
}