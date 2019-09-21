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
            fire_path: [{
                            "fire path 1": ["human path", "beast path", "god path"]
                        }, {
                            "fire path 2": ["god path", "human path", "beast path"]
                        }, {
                            "fire path 3": ["beast path", "beast path", "human path"]
                        }]
        },
        {
            water_path: [{
                            "water path 1": ["beast path", "beast path", "human path"]
                        }, {
                            "water path 2": ["beast path", "human path", "god path"]
                        }, {
                            "water path 3": ["human path", "god path", "beast path"]
                        }]
        },
        {
            earth_path: [{
                            "earth path 1": ["human path", "god path", "beast path"]
                        }, {
                            "earth path 2": ["god path", "human path", "beast path"]
                        }, {
                            "earth path 3": ["beast path", "beast path", "human path"]
                        }]
        },
        {
            wind_path: [{
                            "wind path 1": ["beast path", "beast path", "human path"]
                        }, {
                            "wind path 2": ["beast path", "human path", "god path"]
                        }, {
                            "wind path 3": ["human path", "beast path", "god path"]
                        }]
        },
]