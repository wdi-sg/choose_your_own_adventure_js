var monsters = {
    "null1": {
        "name": "Goblin",
        "element": "null",
        "BattlePoints": 30,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 88; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 12; i++) {
                lootArr.push(weaponObj.tier2);
            }

            return lootArr;
        }
    },

    "null2": {
        "name": "Goblin Archer",
        "element": "null",
        "BattlePoints": 60,
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

    "null3": {
        "name": "Mutated Kobold",
        "element": "null",
        "BattlePoints": 180,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 50; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 38; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 12; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "fire1": {
        "name": "Salamander",
        "element": "fire",
        "BattlePoints": 70,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 80; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 20; i++) {
                lootArr.push(weaponObj.tier2);
            }

            return lootArr;
        }
    },

    "fire2": {
        "name": "Flamehound",
        "element": "fire",
        "BattlePoints": 140,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 67; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 23; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 10; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "fire3": {
        "name": "Red Wyvern",
        "element": "fire",
        "BattlePoints": 440,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 47; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 32; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 21; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "water1": {
        "name": "Slime",
        "element": "water",
        "BattlePoints": 65,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 86; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 14; i++) {
                lootArr.push(weaponObj.tier2);
            }

            return lootArr;
        }
    },

    "water2": {
        "name": "Morphling",
        "element": "water",
        "BattlePoints": 130,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 69; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 20; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 11; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "water3": {
        "name": "Medusa",
        "element": "water",
        "BattlePoints": 420,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 44; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 32; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 24; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "nature1": {
        "name": "Treant",
        "element": "nature",
        "BattlePoints": 80,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 85; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 15; i++) {
                lootArr.push(weaponObj.tier2);
            }

            return lootArr;
        }
    },

    "nature2": {
        "name": "Druid",
        "element": "nature",
        "BattlePoints": 160,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 55; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 30; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 15; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    },

    "nature3": {
        "name": "Yggdrasil",
        "element": "nature",
        "BattlePoints": 500,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 50; i++) {
                lootArr.push(weaponObj.tier1);
            }
            for (i = 0; i < 30; i++) {
                lootArr.push(weaponObj.tier2);
            }
            for (i = 0; i < 20; i++) {
                lootArr.push(weaponObj.tier3);
            }

            return lootArr;
        }
    }
}