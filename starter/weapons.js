var weaponObj = {
    "tier1": {
        "sword": {
        "name": "Long Sword",
        "tier": 1,
        "element": "null",
        classmultiplier: function(userClass) {
                if (userChar["Class"].name == "Swordman") {
                    return 1.5;
                } else {
                    return 1;
                }
            }
        },
        "spear": {
            "name": "Halberd",
            "tier": 1,
            "element": "null",
            classmultiplier: function(userClass) {
                if (userChar["Class"].name == "Swordman") {
                    return 2;
                } else {
                    return 1;
                }
            }
        }
    }
}
