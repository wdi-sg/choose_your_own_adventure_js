//3 class of characters, with different values of stats, haven't add in skills yet.
var character = {
    warrior: {
                stats: {
                            hp: 90,
                            power: 70,
                            speed: 40
                       },
             },
    mage: {
                stats: {
                            hp: 40,
                            power: 90,
                            speed: 50
                        }
        },
    ranger: {
                stats: {
                            hp: 60,
                            power: 50,
                            speed: 90
                        }
            }
}

//Fight 4 demons for now, maybe can add more later
var demon = [{
                "fire demon": {
                                stats: {
                                            hp: 20,
                                            power: 50,
                                            speed: 30,
                                     }
                             }
            },
            {
                "water demon": {
                                stats: {
                                            hp: 30,
                                            power: 30,
                                            speed: 40
                                     }
                             }
            },
            {
                "earth demon": {
                                stats: {
                                            hp: 60,
                                            power: 30,
                                            speed: 10,
                                     }
                             }
            },
            {
                "wind demon": {
                                stats: {
                                            hp: 20,
                                            power: 40,
                                            speed: 40
                                     }
                             }
            }]


//4 paths to choose from, there after each destination is determined by random, will merge paths by using exact same object keys and values.
var path =[
        {
            fire_path: [
                            ["Fire Path 1", "Fire Path 2", "Fire Path 3"],
                            ["Human Path", "Human Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]
                     ]
        },
        {
            water_path: [
                            ["Water Path 1", "Water Path 2", "Water Path 3"],
                            ["Human Path", "Human Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]
                     ]
        },
        {
            earth_path: [
                            ["Water Path 1", "Water Path 2", "Water Path 3"],
                            ["Human Path", "Human Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]
                     ]
        },
        {
            wind_path: [
                            ["Water Path 1", "Water Path 2", "Water Path 3"],
                            ["Human Path", "Human Path", "Human Path"],
                            ["Human Path", "God Path", "Beast Path"]
                     ]
        },
]