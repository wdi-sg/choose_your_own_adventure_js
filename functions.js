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
        "jobDescription": "Ready your safety equipment, fellow firefighter! Fight blazing fires, drive a red firetruck, save the town, and become a hero... or have ready for some fun.",
        "tasks": [
            {"taskDescription": "1. Put out a forest fire.",
            "result": "Mother nature thank you for your hard work.",
            "fatigue": 30,
            "money": 15,
            },
            {"taskDescription": "2. Save a kitten stuck in a sewer pipe",
            "result": "After half a day of work, you saved the little kitty! Its owner awards you handsomely!",
            "fatigue": 25,
            "money": 35,
            },
            {"taskDescription": "3. Disappears mid-shift to water the fire station garden with your firetruck's hose.",
            "result": "The flowers are blooming, but not your supervisor's face.",
            "fatigue": 10,
            "money": 0,
            }
        ]
    },
    {
        "jobTitle": "Surgeon",
        "jobDescription":"You are in the chief surgeon in general  surgical team from the most prestigious hospital in the area. Ready your white robe to save some lives... or not",
        "tasks": [
            {"taskDescription": "1. Perform a heart transplant on a 6 year old.",
            "result": "Although, there were many complications in the midst of the 16 hours operation, your team and you managed to give the child a new heart.",
            "fatigue": 30,
            "money": 30,
            },
            {"taskDescription": "2. Conduct a hospital tour for the external board of directors.",
            "result": "Not everyone was satisfied with your tour. Your boss is slightly unhappy but gave you a pat on your back for your efforts.",
            "fatigue": 15,
            "money": 20,
            },
            {"taskDescription": "3. A day without a nap is like a cupcake without frosting! Sneak into the on-call room and get a snooze.",
            "result": "No work is done. Your patients conducted a hospital-wide search in their hospital PJs and IV stands for you. Your supervisor gave you a double shift because of this havoc.",
            "fatigue": 25,
            "money": 5,
            }
        ]
    },
    {
        "jobTitle": "Astronaut",
        "jobDescription": "Astronaut, the space traveler! Pilot the newest NASA spaceship into the cosmic graveyard, exploring the unknowns.. or not.",
        "tasks": [
            {"taskDescription": "1. Collect data on the sun.",
            "result": "You fell asleep because you thought it was too mundane.",
            "fatigue": 5,
            "money": 10,
            },
            {"taskDescription": "2. Fire a missile at an unavoidable nebula.",
            "result": "Your machine calculations were inaccurate, causing the fragments of the nebula to destroy a nearby satellite.",
            "fatigue": 20,
            "money": 5,
            },
            {"taskDescription": "3. Travel into the black hole out of curiosity.",
            "result": "After centuries of traveling and almost nearing death, you have arrived in an alternate universe.",
            "fatigue": 35,
            "money": 50,
            }
        ]
    },
    {
        "jobTitle": "Burglar",
        "jobDescription": "Find the safe, crack and empty it, and escape! Burglar or modern-day Robin Hood, your pick.",
        "tasks": [
            {"taskDescription": "1. Rob a bakery!",
            "result": "You managed to steal a truck of bread, which you later left at the nearby charitable organisation.",
            "fatigue":15,
            "money": 20,
            },
            {"taskDescription": "2. Rob a bank!",
            "result": "Security's tight, you didn't even manage to get into the vicinity of the protected area. Though mission failed, you managed to pickpocket a bank's client.",
            "fatigue": 20,
            "money": 10,
            },
            {"taskDescription": "3. Rob a billionaire's house.",
            "result": "You were caught in the midst of burglary. The billionaire recognised your moves and skills and offered you a position to be his personal spy.",
            "fatigue": 20,
            "money": 50,
            }
        ]
    },
    {
        "jobTitle": "Baby-sitter",
        "jobDescription": "If there's anything that puts your time management skills to the test, it's managing an entire household. A nanny. Are you up for the job?",
        "tasks": [
            {"taskDescription": "1. Complete the household chores.",
            "result": "Almost done until toddler Jack thought that the walls needed a touch of abstract art.",
            "fatigue": 30,
            "money": 35,
            },
            {"taskDescription": "2. Take care of baby Timmy",
            "result": "Baby Timmy was unexpectedly a really quiet baby. All his needs were easily taken care of.",
            "fatigue": 10,
            "money": 25,
            },
            {"taskDescription": "3. Teaching Jane her algebra homework.",
            "result": "Apparently the methods have changed over the years, leaving you wrecking your brain for the entire afternoon.",
            "fatigue":25,
            "money": 20,
            }
        ]
    }
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
    "name": "R.N. Jesus (You won't get what you see. Do you want to bet with the odds? xD)",
    "money": (Math.floor(Math.random() * Math.floor(50))) * (-1),
    "fatigue": (Math.floor(Math.random() * Math.floor(50))) * (-1),
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
        catalogueList += (c+1) + ". " + fatigueReducers[c].name + "\nFatigue: " +  fatigueReducers[c].fatigue + "\nCost: " + fatigueReducers[c].money + "\n\n";
    }

    alert(catalogueList);
    return catalogueList;
}



var calculations = function(choiceOption){
    userChar.money += choiceOption.money;
    parseInt(userChar.money);

    userChar.userFatigue += choiceOption.fatigue;
    parseInt(userChar.userFatigue);

    alert("Your current fatigue level: " + userChar.userFatigue + "\n\nYour current coins: " + userChar.money);
}


var reset = function(){
    alert("Your final fatigue level: " + userChar.userFatigue + "\n\nYour final coins: " + userChar.money);
    var resetQns = prompt("Do you want to play again? (yes/no)");
    resetQns = resetQns.toLowerCase();

    if (resetQns==="yes"){
        userChar.money = 0;
        userChar.userFatigue = 0;
        var currentGame = occupations;
        var stageCount = 0;
        var stageContinue = true;

        alert("Oh so you're ready for another round, " + userChar.name + "? Let's go!");
    } else if (resetQns === "no"){
        var stageContinue = false;
        alert("Hope you had fun! Goodbye!");
    }
}