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
                quest: "Help protect our village fields: Defeat enemies at Flower Field Left and Flower Field Right.",
                questAccept: false,
                questComplete: false
            },
            questTwo: {
                quest: "Explore Ice Cave (Inner): Get a block of ice for the weekend party!",
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
        enemy: {
            name: 'Rabid Wolf',
            type: 'Ground',
            health:1,
            attack:1,
            defeat: false
        }
    },

    {
        id: 5,
        name: 'Flower Field Right',
        visitCount:0,
        adjacentSite: ['flower-field'],
        enemy: {
            name: 'Ferocious Harpy',
            type: 'Flying',
            health:1,
            attack:1,
            defeat: false
        }
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
        enemy: {
            name: 'Ice Troll',
            type: 'Ground',
            health:1,
            attack:1,
            defeat: false
        }
    },

    {
        id: 8,
        name: 'Sun Highway',
        visitCount:0,
        adjacentSite: ['warrior-village','middle-town'],
        enemy: {
            name: 'Helicoopter',
            type: 'Flying',
            health:1,
            attack:1,
            defeat: false
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
        enemy: {
            name: 'Mystical Wizard',
            type: 'Ground',
            health:1,
            attack:1,
            defeat: false
        }
    },

    {
        id: 12,
        name: 'Middle Town Blacksmith',
        visitCount:0,
        adjacentSite: ['middle-town']
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
                quest: "Help protect our village fields: Defeat enemies at Flower Field Left and Flower Field Right.",
                questAccept: false,
                questComplete: false
            },
            questTwo: {
                quest: "Explore Ice Cave (Inner): Get a block of ice for the weekend party!",
                questAccept: false,
                questComplete: false
            }
        }
    },

    {
        id: 14,
        name: 'Ancient Ruins',
        visitCount:0,
        adjacentSite: ['middle-town']
    },

    {
        id: 15,
        name: 'MajesticCastle',
        visitCount:0,
        adjacentSite: ['majestic-castle']
    }
]