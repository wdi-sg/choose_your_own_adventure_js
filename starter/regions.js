var regionObj = {
    "null": [{
                "name": "World of Nothings - Entrance",
                monsters: function() {
                    var monsterArr = [];
                    for (var i = 0; i < 70; i++) {
                        monsterArr.push(monsters.null1);
                    }
                    for (var i = 0; i < 30; i++) {
                        monsterArr.push(monsters.null2);
                    }
                    return monsterArr;
                }
            },
            {
                "name": "World of Nothings",
                monsters: function() {
                    var monsterArr = [];
                    for (var i = 0; i < 40; i++) {
                        monsterArr.push(monsters.null1);
                    }
                    for (var i = 0; i < 35; i++) {
                        monsterArr.push(monsters.null2);
                    }
                    for (var i = 0; i < 25; i++) {
                        monsterArr.push(monsters.null3);
                    }
                    return monsterArr;
                }
            }],
    "fire": [{
                "name": "World of Flames - Entrance",
                monsters: function() {
                    var monsterArr = [];
                    for (var i = 0; i < 70; i++) {
                        monsterArr.push(monsters.fire1);
                    }
                    for (var i = 0; i < 30; i++) {
                        monsterArr.push(monsters.fire2);
                    }
                    return monsterArr;
                }
            },
            {
                "name": "World of Flames",
                monsters: function() {
                    var monsterArr = [];
                    for (var i = 0; i < 40; i++) {
                        monsterArr.push(monsters.fire1);
                    }
                    for (var i = 0; i < 35; i++) {
                        monsterArr.push(monsters.fire2);
                    }
                    for (var i = 0; i < 25; i++) {
                        monsterArr.push(monsters.fire3);
                    }
                    return monsterArr;
                }
            }],
    "nature": [{
                "name": "World of Woods - Entrance",
                monsters: function() {
                    var monsterArr = [];
                    for (var i = 0; i < 70; i++) {
                        monsterArr.push(monsters.nature1);
                    }
                    for (var i = 0; i < 30; i++) {
                        monsterArr.push(monsters.nature2);
                    }
                    return monsterArr;
                }
            },
            {
                "name": "World of Woods",
                monsters: function() {
                    var monsterArr = [];
                    for (var i = 0; i < 40; i++) {
                        monsterArr.push(monsters.nature1);
                    }
                    for (var i = 0; i < 35; i++) {
                        monsterArr.push(monsters.nature2);
                    }
                    for (var i = 0; i < 25; i++) {
                        monsterArr.push(monsters.nature3);
                    }
                    return monsterArr;
                }
            }],
    "water": [{
                "name": "World of Seas - Entrance",
                monsters: function() {
                    var monsterArr = [];
                    for (var i = 0; i < 70; i++) {
                        monsterArr.push(monsters.water1);
                    }
                    for (var i = 0; i < 30; i++) {
                        monsterArr.push(monsters.water2);
                    }
                    return monsterArr;
                }
            },
            {
                "name": "World of Seas",
                monsters: function() {
                    var monsterArr = [];
                    for (var i = 0; i < 40; i++) {
                        monsterArr.push(monsters.water1);
                    }
                    for (var i = 0; i < 35; i++) {
                        monsterArr.push(monsters.water2);
                    }
                    for (var i = 0; i < 25; i++) {
                        monsterArr.push(monsters.water3);
                    }
                    return monsterArr;
                }
            }]
}