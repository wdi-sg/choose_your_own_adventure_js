var weaponObj = {
    "tier1": {
        "sword": {
        "name": "Long Sword",
        "tier": 1,
        "element": "null",
        classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 1.4;
                    case "Archer":
                        return 0.6;
                    case "Magician":
                        return 0.4;
                    case "Assassin":
                        return 0.8
                }
            }
        },
        "spear": {
            "name": "Halberd",
            "tier": 1,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 1.7;
                    case "Archer":
                        return 0.3;
                    case "Magician":
                        return 0.3;
                    case "Assassin":
                        return 0.5
                }
            }
        },
        "bow": {
            "name": "Wooden Bow",
            "tier": 1,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.3;
                    case "Archer":
                        return 1.7;
                    case "Magician":
                        return 0.3;
                    case "Assassin":
                        return 0.5
                }
            }
        },
        "staff": {
            "name": "Wand",
            "tier": 1,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.3;
                    case "Archer":
                        return 0.3;
                    case "Magician":
                        return 1.7;
                    case "Assassin":
                        return 0.5
                }
            }
        },
        "dagger": {
            "name": "Sharp Knift",
            "tier": 1,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.8;
                    case "Archer":
                        return 0.6;
                    case "Magician":
                        return 0.4;
                    case "Assassin":
                        return 1.4
                }
            }
        },
        "spear": {
            "name": "Halberd",
            "tier": 1,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.3;
                    case "Archer":
                        return 0.5;
                    case "Magician":
                        return 0.3;
                    case "Assassin":
                        return 1.7
                }
            }
        }




    }
}
