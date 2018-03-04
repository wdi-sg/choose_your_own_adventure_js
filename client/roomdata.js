var roomData = [
    // Room 0
    {
        roomInfo: "How did you get here? There's fire in the air, the fumes smell like Mondays and the place looks like it's been wrecked by \
                banshees. You can't recall, but the sick taste in your mouth and dull ache in your head \
                suggest some regrets. You try to ignore it, and presently a dirt path to the north comes into focus. \
                It's not the most inviting of options, but the lava to the east and west looks worse. Or you know, \
                you could stay here and wait for the police. Or the grim reaper, whose home you suspect this to be. You do you.",
        navChoices: {"n": 2, "e": 1, "w": 1},
        visited: false,
        fixedEnemies: [],
        possibleEnemies: [],
        loot: ['short sword', 'soda'],
        currentloot: [],
        actionResponses: {"look": {
                text: "You see a short sword and a soda."
            }
        }
    },
    // Room 1 - Death by lava
    {
        roomInfo: "Feeling particularly game, you hurl yourself into the air with the grace of an Olympic diver, sail majestically through the sulfurous \
                plumes eyes shut, and disappear inconsequentially into the churning lava. It swallows you with nary a grumble. Content with the lava's \
                warm embrace, you do not resurface.",
        navChoices: {},
        visited: false,
        fixedEnemies: [],
        possibleEnemies: [],
        loot: [],
        currentloot: [],
        actionResponses: {},
        onEnter: () => {characters[characterSelected].kill();}
    },
    // Room 3
    {
        roomInfo: "Still feeling groggy, you decide to leave before the possibly hellish denizens of your imagination start noticing you back. \
                The road ahead was long and uneventful, except for the hellish denizens of your imagination clawing at your sanity. Did you \
                imagine their hellishness? Or did they make you you? You start wondering if this is how a philosopher might feel, if they do, \
                but decide that you'd rather stone instead. Speaking of that, the mountain right in front of you is starting to look particularly \
                rock-like. To go or not to go, that is the question. But this isn't the time for ponderous pontification. An old bold kobold emerges \
                from behind a boulder.",
        navChoices: {"n": 3,"s": 0},
        visited: false,
        fixedEnemies: ['kobold', 'rat'],
        possibleEnemies: [],
        clear: false,
        currentEnemies: [],
        loot: [],
        currentloot: [],
        actionResponses: {"look": {
            text: "You see a grim future ahead wrestling with Chrome. Wait..."
            }
        },
        onEnter: () => {
            if (!roomData[2].clear) {
                canMove = false;
                roomData[2].fixedEnemies.forEach(e => {
                    let tmp = new enemy(e);
                    roomData[2].currentEnemies.push(tmp);
                    tmp.attack(characters[characterSelected]);
                });
                gameMessage("A kobold and his pet rat fight you!", "white");
            } else {
                roomData[2].currentEnemies.forEach(e => {
                    e.inSameRoomAsPlayer = true;
                    e.show();
                });
            };
        },
        onExit: () => {roomData[2].currentEnemies.forEach(e => {
            e.inSameRoomAsPlayer = false;
            e.hide();
        })}
    },
    // Room 4
    {
        roomInfo: "You are at the end of your journey. Sacrifice yourself?<br>",
        navChoices: {},
        visited: false,
        fixedEnemies: [],
        possibleEnemies: ['kobold'],
        loot: [],
        currentloot: [],
        actionResponses: {"sacrifice": {
                text: "And so ends you. Well done. The collection of organic material formerly known as you will now serve a greater, non-specific purpose.",
                func: () => {characters[characterSelected].kill()}
            }
        },
    }
]