
var gameObject = {

    charStats: {
        san: [100],
        drugTol: [100],
        int: [100]


    },

    inputTips: ["Please key your choice by entering the first word (i.e talk) or first letter of your choice (i.e talk would be t)."],

    start:["Enter your desired character name.", " does not wear much, other than pieces of rags around the body.\nNo one really likes you here nor do you have friends in this village.", "There is a village event happening. You proceed to check it out.", "You see a short and strangely clothed man. You approach him. \nHe appears puzzled yet intrigued by your appearance. He starts talking to you in english, which you understand. \nWhat do you do? \n(Talk? Beat him up for looking like you? Walk away to disassociate yourself?)"],

    opening: {
        talk: ["The man is named Benito. He eagerly talks to you and takes an immediate likely to you. He asks if you'd like to accompany him back to his civilized world. (accept / decline)",["You stay and forgo the opportunity to a whole new world.---end","He takes you on board his flying contraption to his world. \nYou arrive. The people of this world looks at you with amusement, like you are a freak. \nWhat do you do? \n(Pounce on the nearest living soul and beat them?/ Hide in the flying car?/ Pronounce your name to all?)"]],

        beat:["Groaning in pain and confused. \nHe pleads for you to stop. (stop/continue)",["He gets up. Staggers away from you. ----end",["He pleads repeatedly. He offers a journey to his world. (continue/listen)",["He dies in your senseless violence. You die in your savage lands. ---end","He stands up and begins talking again."/*go back to talk?*/]] ]],

        walk:["As you walk away, the short man grabs your shoulder. (stay/brush him aside?)",["You stay and forgo the opportunity to a whole new world.---end","He begins talking to you again."]]
    },

    chapterTwo: {

        sectionOne:[]



    },

    Mobs: {
        trash: [[-5,5,"A group of young schooling kids surrounds you, they giggle and make jokes about your mother."],[5,4,5],[6,4,3]],
        boss: [-30, 20,"A Beta-born person approaches. He mocks you and makes snide remarks at your pathetic attempt at civility."],
    },

    gravitas:{},

    regen: {
        outdoors:[10,15, "The trip to the countryside felt good."]
    },

    actions:{
        talk: [[["The multitudinous seas incarnadine!",10],["Mother, monogamy, romance!",14],["I’ll teach you. I’ll make you be free whether you want to or not.",12]],["Blasted","Roared", "Proclaimed"]],
        beat: [[["Whoopsh!", 10],["KKKKRRARRANG!", 12],["Brmkyqwe!",10]],["Swung","Threw","Engaged"]],
        walk: [[["You hold your head high and walk away.", 10],["This is none of my concern.", 12],["I do not understand your mockery of me.", 8]],["Breathed","Whispered","Shrugs"]]
    },

    thingsHappen: {
        improve: ["feels more empowered.", "senses an inner growth.", "makes gains."],
        reduce: ["feels like a lesser being."]
    },


    inProgressDisclaimer: ["Thank you for participating till this point, we are currently working on additional content. Stick around to find out more!"]




}


//1 to take in more input options for same outcome
//2. next part of the story