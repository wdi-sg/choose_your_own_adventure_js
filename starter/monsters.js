var monsters = {
    "null1": {
        "name": "Goblin",
        "element": "null",
        "BattlePoints": 60,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 75; i++) {
                lootArr.push(weaponObj.tier1);
            }

            return lootArr;
        }
    },

    "null2": {
        "name": "Goblin Archer",
        "element": "null",
        "BattlePoints": 55,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 75; i++) {
                lootArr.push(weaponObj.tier1);
            }

            return lootArr;
        }
    },



    "fire1": {
        "name": "Wyvern",
        "element": "fire",
        "BattlePoints": 70,
        loot: function() {
            var lootArr = [];
            for (i = 0; i < 75; i++) {
                lootArr.push(weaponObj.tier1);
            }

            return lootArr;
        }
    }
}