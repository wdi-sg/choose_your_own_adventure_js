var weaponObj = {
    "tier1": {
        "sword": {
        "name": "Long Sword",
        "tier": 1,
        "element": "null",
        classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 1.2;
                    case "Archer":
                        return 0.7;
                    case "Magician":
                        return 0.6;
                    case "Assassin":
                        return 0.8;
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
                        return 1.5;
                    case "Archer":
                        return 0.6;
                    case "Magician":
                        return 0.6;
                    case "Assassin":
                        return 0.7;
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
                        return 0.5;
                    case "Archer":
                        return 1.5;
                    case "Magician":
                        return 0.6;
                    case "Assassin":
                        return 0.7;
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
                        return 0.6;
                    case "Archer":
                        return 0.5;
                    case "Magician":
                        return 1.5;
                    case "Assassin":
                        return 0.6;
                }
            }
        },
        "dagger": {
            "name": "Letter Cutter",
            "tier": 1,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.9;
                    case "Archer":
                        return 0.8;
                    case "Magician":
                        return 0.8;
                    case "Assassin":
                        return 1.3;
                }
            }
        },
        "shuriken": {
            "name": "Throwing Knifes",
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
                        return 1.5;
                }
            }
        }
    },

    "tier2": {
        "sword": {
        "name": "Firebrand",
        "tier": 2,
        "element": "fire",
        classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 1.6;
                    case "Archer":
                        return 0.8;
                    case "Magician":
                        return 1.8;
                    case "Assassin":
                        return 0.9;
                }
            }
        },
        "spear": {
            "name": "Trident",
            "tier": 2,
            "element": "water",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 2;
                    case "Archer":
                        return 0.7;
                    case "Magician":
                        return 1.4;
                    case "Assassin":
                        return 0.7;
                }
            }
        },
        "bow": {
            "name": "Crossbow",
            "tier": 2,
            "element": "nature",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.9;
                    case "Archer":
                        return 1.8;
                    case "Magician":
                        return 0.5;
                    case "Assassin":
                        return 1.6;
                }
            }
        },
        "staff": {
            "name": "Reaper",
            "tier": 2,
            "element": "fire",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 1.2;
                    case "Archer":
                        return 0.6;
                    case "Magician":
                        return 1.8;
                    case "Assassin":
                        return 1.5;
                }
            }
        },
        "dagger": {
            "name": "Stiletto",
            "tier": 2,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.8;
                    case "Archer":
                        return 0.8;
                    case "Magician":
                        return 0.9;
                    case "Assassin":
                        return 1.8;
                }
            }
        },
        "shuriken": {
            "name": "Ninja Star",
            "tier": 2,
            "element": "nature",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.6;
                    case "Archer":
                        return 0.8;
                    case "Magician":
                        return 0.7;
                    case "Assassin":
                        return 1.9;
                }
            }
        }
    },

    "tier3": {
        "sword": {
        "name": "Excalibur",
        "tier": 3,
        "element": "null",
        classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 2.2;
                    case "Archer":
                        return 0.9;
                    case "Magician":
                        return 0.9;
                    case "Assassin":
                        return 1.4;
                }
            }
        },
        "spear": {
            "name": "Griffin's Spear",
            "tier": 3,
            "element": "nature",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 2.4;
                    case "Archer":
                        return 0.9;
                    case "Magician":
                        return 1.2;
                    case "Assassin":
                        return 1.5;
                }
            }
        },
        "bow": {
            "name": "Athena's Harp",
            "tier": 3,
            "element": "fire",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 1.2;
                    case "Archer":
                        return 2.5;
                    case "Magician":
                        return 1.2;
                    case "Assassin":
                        return 1.6;
                }
            }
        },
        "staff": {
            "name": "Prophet's Branch",
            "tier": 3,
            "element": "nature",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 1.2;
                    case "Archer":
                        return 0.6;
                    case "Magician":
                        return 1.8;
                    case "Assassin":
                        return 1.5;
                }
            }
        },
        "dagger": {
            "name": "Arthur's Pocket Knife",
            "tier": 3,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 0.9;
                    case "Archer":
                        return 1.6;
                    case "Magician":
                        return 1.2;
                    case "Assassin":
                        return 2.5;
                }
            }
        },
        "shuriken": {
            "name": "Silenced Pistol",
            "tier": 3,
            "element": "null",
            classmultiplier: function(userClass) {
                switch (userClass) {
                    case "Swordman":
                        return 1.2;
                    case "Archer":
                        return 1.6;
                    case "Magician":
                        return 1.2;
                    case "Assassin":
                        return 2.6;
                }
            }
        }
    }
}