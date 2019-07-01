//Paths
//path = 

var path = {

    "start": {
        "description": "You are lost in the notorious 'Tenderloin'. Its cold and youre hungry but under the dim street light,\
            you see a homeless man sleeping a cardboard box, with a glimmer of light shining on his leather coin purse clasp.\
            Do you want to <b>steal</b> the wallet or <b>continue</b> on walking or just <b>stay</b> put",
        "choices": {
            "continue": "alley",
            "homeless": "steal",
            "stay": "end1"
        }
    },

    "alley": {
        "description": "You continue walking down the alley until you arrive at a Mcdonalds. Do you ask the <b>staff</b> for food,\
            or <b>wait</b> for people to leave their trays to eat their leftovers?",
        "choices": {
            "staff": "end2",
            "wait": "end3"
        }
    },

    "homeless": {
        "description": "You walk up towards him and slowly reach out for the purse without making a sound. Inside you find a $10 dollar note\
            and a polaroid of him with his arm gently resting on a little girl's shoulder. They look like they are posing for the photo.\
            Do you <b>return</b> the purse or <b>walk</b> away with it?",
        "choices": {
            "return": "good",
            "walk": "bad"
        }
    },

    "good": {
        "description": "As you walk away huge gust of wind blows by leaving a puff of $1000 dollar bills swirling in the air.\
            There isnt anyone else here to take it. Do you <b>take</b> the bills or <b>leave</b> it, since all this seems like a bad trip.",
        "choices": {
            "take": "end4",
            "leave": "end5"
        }
    },

    "bad": {
        "description": "You decide to walk away but you got caught by some bad people. They ask if you have any money.\
            Do you <b>give</b> the purse, or <b>run</b> away",
        "choices": {
            "give": "end6",
            "run": "end7"
        }
    },

//Endings
    "end1": {
        "description": "You stay put doing nothing. Time passes you by until you decide to do something... Ending 1."
        },

    "end2": {
        "description": "The staff looks at you up and down and sympathetically decline. Their hands are tied they say.\
            They offered you a paper cup of water instead. At least you have some respite from the unforgiving streets... Ending 2."
        },

    "end3": {
        "description": "You awkwardly stare at a customer who is slowly munching on their fries. Your piercing glare got them to take up and leave\
            the tray with a half eaten burger and some fries. You quickly walk over and wolf down the food. Youre contented, at least you\
            dont have to worry about food for a while... Ending 3."
        },

    "end4": {
        "description": "You manically grasp every dollar bill you can get, only to get robbed a few hours later... Ending 4."
        },

    "end5": {
        "description": "You leave the swirling bills, but as you walked away, a large group went over fighting for the money. Youre glad at least you\
            avoided all that... Ending 5"
        },

    "end6": {
        "description": "You give them the purse. But they were not happy with that. They asked you for 'all' your money. Now you dont even have\
            that nice wallet your mother to you on your birthday... Ending 6"
        },  

    "end7": {
        "description": "You decided to make a run for it. What you didnt know was they had their goons all over the streets. You got caught up in a mere\
        2 minute chase. Now you have to suffer their consequences... Ending 7"
        }    
}
