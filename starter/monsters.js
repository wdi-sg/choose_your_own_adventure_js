var monsters = {
    "null1": {
        "name": "Goblin",
        "element": "null",
        "BattlePoints": 90,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 95; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 5; i++) {
                lootArr.push(weaponObj.tier2);
            }

            return lootArr;
        }
    },

    "null2": {
        "name": "Goblin Archer",
        "element": "null",
        "BattlePoints": 120,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 85; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 5; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "null3": {
        "name": "Mutated Kobold",
        "element": "null",
        "BattlePoints": 260,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 70; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 20; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "fire1": {
        "name": "Salamander",
        "element": "fire",
        "BattlePoints": 150,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 95; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 5; i++) {
                lootArr.push(weaponObj.tier2);
            }

            return lootArr;
        }
    },

    "fire2": {
        "name": "Flamehound",
        "element": "fire",
        "BattlePoints": 280,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 85; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 5; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "fire3": {
        "name": "Red Wyvern",
        "element": "fire",
        "BattlePoints": 500,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 70; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 20; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "water1": {
        "name": "Slime",
        "element": "water",
        "BattlePoints": 130,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 95; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 5; i++) {
                lootArr.push(weaponObj.tier2);
            }

            return lootArr;
        }
    },

    "water2": {
        "name": "Morphling",
        "element": "water",
        "BattlePoints": 250,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 85; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 5; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "water3": {
        "name": "Medusa",
        "element": "water",
        "BattlePoints": 550,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 70; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 20; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "nature1": {
        "name": "Treant",
        "element": "nature",
        "BattlePoints": 140,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 95; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 5; i++) {
                lootArr.push(weaponObj.tier2);
            }

            return lootArr;
        }
    },

    "nature2": {
        "name": "Druid",
        "element": "nature",
        "BattlePoints": 300,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 85; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 5; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "nature3": {
        "name": "Yggdrasil",
        "element": "nature",
        "BattlePoints": 600,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 70; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 20; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    }
}