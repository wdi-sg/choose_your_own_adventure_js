var regionObj = {
    "null": {
        "map1": {
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
        "map2": {
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
        }
    }
}