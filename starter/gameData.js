/*
What is your name?
* `James`

Nice to meet you, `James`. What year would you like to go to? **(YYYY)**
* `>= 2015`
    * I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? **(B/G)**
        * `B`iff
            * Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? **(S/R)**
                * `S`tand and fight
                    * Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.
                * `R`un like a coward
                    * You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.
        * `G`riff
            * Griff is asking you if you are in, or out. What do you say? **(I/O)**
                * `I`n
                    * Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.
                * `O`ut
                    * Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.
* `1985-2014`
    * Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?
        * `Calvin Klein`
            * Welcome to the future, `Calvin Klein`.
* `1955-1984`
    * I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? **(Y/N/S)**
        * `Y`es
            * Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.
        * `N`o
            * Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.
        * `S`et her up with George
            * Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.
* `< 1955`
    * I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? **(H/M/T)**
        * `H`orses
            * Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.
        * `M`oonshine
            * You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.
        * `T`rain
            * Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? **(T/L)**
                * `T`ake her
                    * Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.
                * `L`eave her
                    * Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.
*/

/*

var gameObject = { // too many sub arrays and objects. should focus on one character and plot line.......
            details: {
                name:"John",
                age:"mid-twenties",
                sex:"Male",
                type:"outsider",
                startStats: [100,5,10,] //starting sanity points strength towards outside drugs/alcohol, knowledge accumulated   [sp,dp,ip]
            },
            plot:{ //array structure to access events and modifiers
                talk:[
                [["early action fight"],["early outcome fight"],[[50],[1],[-10]]],
                [["early action run"],["early outcome run"],[[50],[1],[-10]]],
                [["early action dis"],["early outcome dis"],[[50],[1],[-10]]]
                ],
                middle:[
                [["middle action fight"],["middle outcome fight"],[[50],[1],[-10]]],
                [["middle action run"],["middle outcome run"],[[50],[1],[-10]]],
                [["middle action dis"],["middle outcome dis"],[[50],[1],[-10]]]
                ],
                end:[
                [["end action fight"],["end outcome fight"],[[50],[1],[-10]]],
                [["end action run"],["end outcome run"],[[50],[1],[-10]]],
                [["end action dis"],["end outcome dis"],[[50],[1],[-10]]]
                ],
                closing: [
                [["closing action fight"],["closing outcome fight"],[[50],[1],[-10]]],
                [["closing action run"],["closing outcome run"],[[50],[1],[-10]]],
                [["closing action dis"],["closing outcome dis"],[[50],[1],[-10]]]
                ]
            }
        }

*/
//1. User starts.code enters plot.early.
//2. User chooses to Fight, Run or Discourse
//3. User is shown what action he took
//4. User is shown the outcome.
//5. user starts next plot (middle)
//6..... repeat till closing
//7.

//the savage
//You start as a man who does not wear a much, other than a rag around your waist. No one really likes you nor do you have friends in this village. There is a village ritual happening. You proceed to check it out.
//You see a short and strangely clothed man. You approach him  He appears puzzled yet intrigued by your appearance. He starts talking to you in english, which you understand. What do you do? (Talk? Beat him up for looking like you? Walk away to disassociate yourself?)
   /*
    *1.0 Talk
        -   1.1 The man is named Benito. The conversation is lively and he takes an immediate likely to you. He asks if you'd like to accompany him back to his civilized world. (accept / decline)
            *1.1.1 accept
                He takes you on board his flying contraption to his world. You arrive. The people of this world looks at you with amusement, like you are a freak. How do you react? (Pounce on the nearest living soul and beat them?/ Hide in the flying car?/ Pronouce your name to all? )
            *1.12 decline
                You stay and forgo the opportunty to a whole new world.---end
    *2.0 Beat him
        -   2.1 Groaning in pain and confused. He pleads for you to stop. (stop/contiune)
            *2.1.1 stop
                He gets up. Staggers away from you. ----end

            *2.1.2 contiune
                He pleads repeatedly. He offers a journey to his world. (contiune/listen)

                * 2.1.2.1 contiune
                He dies in your senseless violence. You die in your savage land. ---end

                *2.1.2.2 listen
                He stands up and offers to bring you back to his civilized world. (accept/decline)

                    *2.1.2.2.1 accept
                    He takes you on board his flying contraption to his world. You arrive. The people of this world looks at you with amusement, like you are a freak. How do you react? (Pounce on the nearest living soul and beat them?/ Hide in the flying car?/ Pronouce your name to all? )
                    *2.1.2.2.2 decline
                     You stay and forgo the opportunty to a whole new world.---end

    * 3.0 Walk away
        -  3.1 As you walk away, the short man grabs your shoulder. (stay/brush him aside?)

            *3.1.2 stay
            His name is Benito. He takes an immediate likely to you. He asks if you'd like to accompany him back to his civilized world. (accept / decline)
                *accept
                He takes you on board his flying contraption to his world. You arrive. The people of this world looks at you with amusement, like you are a freak. How do you react? (Pounce on the nearest living soul and beat them?/ Hide in the flying car?/ Pronouce your name to all? )
                *decline
                You stay and forgo the opportunty to a whole new world.---end

            *3.1.1 brush him aside
                *You stay and forgo the opportunty to a whole new world.---end

*/


var gameObject = {
    start:["Enter your desired character name.", " does not wear much, other than pieces of rags around the body.\nNo one really likes you here nor do you have friends in this village.", "There is a village event happening. You proceed to check it out.", "You see a short and strangely clothed man. You approach him. \nHe appears puzzled yet intrigued by your appearance. He starts talking to you in english, which you understand. \nWhat do you do? \n(Talk? Beat him up for looking like you? Walk away to disassociate yourself?)"],

    opening: {
        talk: ["The man is named Benito. He eagerly talks to you and takes an immediate likely to you. He asks if you'd like to accompany him back to his civilized world. (accept / decline)",["You stay and forgo the opportunity to a whole new world.---end","He takes you on board his flying contraption to his world. \nYou arrive. The people of this world looks at you with amusement, like you are a freak. \nWhat do you do? \n(Pounce on the nearest living soul and beat them?/ Hide in the flying car?/ Pronounce your name to all?)"]],
        beat:["Groaning in pain and confused. \nHe pleads for you to stop. (stop/continue)",["He gets up. Staggers away from you. ----end",["He pleads repeatedly. He offers a journey to his world. (continue/listen)",["He dies in your senseless violence. You die in your savage lands. ---end","He stands up and begins talking again."/*go back to talk?*/]] ]],
        walk:["As you walk away, the short man grabs your shoulder. (stay/brush him aside?)",["You stay and forgo the opportunity to a whole new world.---end","He begins talking to you again."]]
    }


}