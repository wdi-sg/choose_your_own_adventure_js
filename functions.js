var userChar = {
    "userFatigue": 0,
    "money": 0,
};

var occupations = [
    {
        "jobTitle": "Pirate",
        "jobDescription": "Arrrr. You're a pirate! Sail across the ocean and collect your favourite gems, treasure chests, & doubloons... or not.",
        "tasks": [
            {"taskDescription":"1. Travel the deep seas in search for new raid locations.",
            "result": "You did not find any new hunting places because of the stormy weather.",
            "fatigue": 20,
            "money": 5,
            },
            {"taskDescription":"2. Fight against nemesis's pirate ship for treasure and glory!",
            "result": "Raid successful! Artifacts from a bygone era collected!",
            "fatigue": 30,
            "money": 20,
            },
            {"taskDescription":"3. Lay down and have some booze.",
            "result": "Your fellow crew dragged your inebriated self back after you dozed off at the dock.",
            "fatigue": 5,
            "money":0,
            }
        ]
    },
    {
        "jobTitle": "Firefighter",
        "jobDescription": "Read your safety equipment, fellow firefighter! Fight blazing fires, drive a red firetruck, save the town, and become a hero... or have ready for some fun.",
        "tasks": [
            {"taskDescription": "1. Put out a forest fire.",
            "result": "Mother nature thank you for your hard work.",
            "fatigue": 30,
            "money": 15,
            },
            {"taskDescription": "2. Save a kitten stuck in a sewer pipe",
            "result": "After half a day of work, you saved the little kitty! Its owner awards you handsomely!",
            "fatigue": 25,
            "money": 30,
            },
            {"taskDescription": "3. Disappears mid-shift to water the fire station garden with your firetruck's hose.",
            "result": "The flowers are blooming, but not your supervisor's face.",
            "fatigue": 10,
            "money": 0,

            }
        ]
    },

]

var fatigueReducers = [
    {
    "name": "Monster Energy",
    "money": -10,
    "fatigue": -15,
    },
    {
    "name": "Comfy Loft",
    "money": -20,
    "fatigue": -25,
    },
    {
    "name": "The Dark Lord",
    "money": -50,
    "fatigue": -40,
    }
]



var playGame = function(obj){
    var question = "";
    alert(obj.jobDescription);

    // refreshes question every loop
    for (var j=0; j<obj.tasks.length; j++){
        question += obj.tasks[j].taskDescription + "\n";
    }

    console.log(question);
    var choice = prompt("What are you going to do today? (Pick 1 / 2 / 3)\n\n" + question);
    choice = parseInt(choice);

    // ensure user enters correct input
    while (choice !== 1 && choice !== 2 && choice !== 3){
        choice = prompt("Please try again. What are you going to do today? (Pick 1 / 2 / 3)\n\n" + question);
        choice =parseInt(choice);
    }

    // print correct index
    choice -= 1;
    alert(obj.tasks[choice].result);

    return obj.tasks[choice];
}


var fatigueCatalogue = function(){
    var catalogueList = "";

    for (var c=0; c<fatigueReducers.length; c++){
        catalogueList += c + ". " + fatigueReducers[c].name + "\nFatigue: " +  fatigueReducers[c].fatigue + "\nCost: " + fatigueReducers[c].money + "\n\n";
    }

    console.log(catalogueList);
}



var calculations = function(choiceOption){
    userChar.money += choiceOption.money;
    parseInt(userChar.money);

    userChar.userFatigue += choiceOption.fatigue;
    parseInt(userChar.userFatigue);
}
