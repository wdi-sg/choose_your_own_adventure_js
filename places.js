var places = [
    {
        id: 0,
        name: 'Warrior Village',
        visitCount:0,
        adjacentSite: ['warrior-home', 'village-chief-house','sun-highway', 'flower-field', 'ice-cave'],
    },

    {
        id: 1,
        name: 'Warrior Home',
        visitCount:0,
        adjacentSite: ['warrior-village'],
        rest() {
            user.currentHealth = user.maxHealth;
        }
    },

    {
        id: 2,
        name: 'Village Chief House',
        visitCount: 0,
        adjacentSite: ['warrior-village'],
        NPC: {
            name: 'Chief Drew',
        },
        mainQuest: {
            quest: 'Visit Middle Town to investigate a disturbance: Check with Mayor of the Town',
            questAccept: false,
            questComplete: false
        },
        sideQuest: {
            questOne: {
                quest: "Help protect our village fields: Defeat enemies somewhere in Flower Field.",
                questAccept: false,
                questComplete: false
            },
            questTwo: {
                quest: "Explore Ice Cave (Inner): Defeat the troll and get a block of ice for the weekend party!",
                questAccept: false,
                questComplete: false
            }
        }
    },

    {
        id: 3,
        name: 'Flower Field',
        visitCount:0,
        adjacentSite: ['warrior-village', 'flower-field-left', 'flower-field-right'],
    },

    {
        id: 4,
        name: 'Flower Field Left',
        visitCount:0,
        adjacentSite: ['flower-field'],
        enemyLocated: true,
        enemy: {
            name: 'Rabid Wolf',
            type: 'Ground',
            health:100,
            attack:7,
            reward: 100,
        }
    },

    {
        id: 5,
        name: 'Flower Field Right',
        visitCount:0,
        adjacentSite: ['flower-field'],
    },

    {
        id: 6,
        name: 'Ice Cave',
        visitCount:0,
        adjacentSite: ['warrior-village', 'inner-ice-cave'],
    },

    {
        id: 7,
        name: 'Ice Cave (Inner)',
        visitCount:0,
        adjacentSite: ['ice-cave'],
        enemyLocated: true,
        enemy: {
            name: 'Ice Troll',
            type: 'Ground',
            health:200,
            attack:9,
            reward: 150,
        }
    },

    {
        id: 8,
        name: 'Sun Highway',
        visitCount:0,
        adjacentSite: ['warrior-village','middle-town'],
        enemyLocated: true,
        enemy: {
            name: 'Helicoopter',
            type: 'Flying',
            health:250,
            attack:9,
            reward: 150,
        }
    },

    {
        id: 9,
        name: 'Middle Town',
        visitCount:0,
        adjacentSite: ['sun-highway','ancient-ruins', 'high-tower', 'majestic-castle', 'middle-town-blacksmith', 'middle-town-mayor-house'],
    },

    {
        id: 10,
        name: 'High Tower',
        visitCount:0,
        adjacentSite: ['middle-town','high-tower-top']
    },

    {
        id: 11,
        name: 'High Tower (Top)',
        visitCount:0,
        adjacentSite: ['high-tower'],
        enemyLocated: true,
        enemy: {
            name: 'Mystical Wizard',
            type: 'Ground',
            health: 400,
            attack: 13,
            reward: 200,
        }
    },

    {
        id: 12,
        name: 'Middle Town Blacksmith',
        visitCount:0,
        adjacentSite: ['middle-town'],
        upgrade() {
            if (user.gold <50) {
                return;
            }
            user.maxHealth+=50;
            user.attack+=3;
            user.gold-=50;
        }
    },

    {
        id: 13,
        name: 'Middle Town Mayor House',
        visitCount:0,
        adjacentSite: ['middle-town'],
                NPC: {
            name: 'Mayor Kindle',
        },
        mainQuest: {
            quest: 'Someone is controlling the King in the castle: Defeat the Hypnotic Robot',
            questAccept: false,
            questComplete: false
        },
        sideQuest: {
            questOne: {
                quest: "Help put the Undead to rest: Defeat the Undead Flying Skeleton at the Ancient Ruins.",
                questAccept: false,
                questComplete: false
            },
            questTwo: {
                quest: "Stop the Charm: Defeat the Mystical Wizard at the High Tower.",
                questAccept: false,
                questComplete: false
            }
        }
    },

    {
        id: 14,
        name: 'Ancient Ruins',
        visitCount:0,
        adjacentSite: ['middle-town'],
        enemyLocated: true,
        enemy: {
            name: 'Undead Flying Skeleton',
            type: 'Flying',
            health: 350,
            attack: 15,
            reward: 200
        }
    },

    {
        id: 15,
        name: 'Majestic Castle',
        visitCount:0,
        adjacentSite: ['majestic-castle'],
        enemyLocated: true,
        enemy: {
            name: 'Hypnotic Robot',
            type: 'Neutral',
            health: 800,
            attack: 30
        }
    }
]