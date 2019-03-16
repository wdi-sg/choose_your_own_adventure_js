var gameObject = { // too many sub arrays and objects. should focus on one character and plot line.......
    storyLine: {
        cast_one:{
            details: {
                name:"John",
                age:"mid-twenties",
                sex:"Male",
                type:"outsider",
                startStats: [100,5,10,] //starting sanity points strength towards outside drugs/alcohol, knowledge accumulated   [sp,dp,ip]
            },
            plotAction:{ //array structure to access events and modifiers
                /*scene_one:{
                    fight: {
                        action: "name charges forward",
                        outcome:"Being outnumbered 5 to 1, the village boys give you a good beating into pulp.",
                        modifiers: {
                            sanity: [50],
                            substance: [1],
                            int: [-10]
                        }},
                    run:{
                        action: "name takes flight, hurrying into his house, closing the door behind him",
                        outcome: "Name wallows up and breaks down into tears. Seeking LINDA for comfort. \n She tell /name that he is a stupid boy. ",
                        modifiers: {
                            sanity: [-40],
                            substance: [4],
                            int: [-10]
                        }},
                    discourse:{
                        action: "This is not the first time /name has encountered such an instance. NAME remains calm and collected.",
                        outcome: "The village boys ignore /name's attempt to defuse their angry. /name gets a good beating into pulp",
                        modifiers: {
                            sanity: [20],
                            substance: [0],
                            int: [30]
                        } }
                },*/

                /*
                Game works by advancing through each scenes. one to .... end.
                In each scene, there are 3 possible options(fight, run, discourse), users are prompted to choose an option (selecting array).
                Once user has chosen an option for the scene, they will be alerted on the scripted action taken, outcome of the action(selecting array). Lastly there is a modifier array which will modify base STARTSTATS (selecting array).

                1. users choose option
                2.
                */

                scene_two:[


                [["actionfight"],["outcomefight"],[[50],[1],[-10]]],
                [["actionrun"],["outcomerun"],[[50],[1],[-10]]],
                [["actiondis"],["outcomedis"],[[50],[1],[-10]]]
                ],
                scene_three:[
                [["actionfight"],["outcomefight"],[[50],[1],[-10]]],
                [["actionrun"],["outcomerun"],[[50],[1],[-10]]],
                [["actiondis"],["outcomedis"],[[50],[1],[-10]]]
                ],
                scene_four:[
                [["actionfight"],["outcomefight"],[[50],[1],[-10]]],
                [["actionrun"],["outcomerun"],[[50],[1],[-10]]],
                [["actiondis"],["outcomedis"],[[50],[1],[-10]]]
                ]
            }
        },
        // cast_two:{},
        // cast_three:{},
        // cast_four:{}
    }
}