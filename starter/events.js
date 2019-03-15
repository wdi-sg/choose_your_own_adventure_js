const treesEvent = () => {
    switch ((3)) {
        case 1:
            eventContainer.innerHTML = 'You looted a cabin in the woods. Plundered 50 gold.';
            player.gold += 50;
            break;
        case 2:
            eventContainer.innerHTML = 'Stumble trip stumble trip. Lost 25 health.';
            player.health -= 25;
            break;
        case 3:
            startBattle();
            if (enemyList.length > 1) {
                eventContainer.innerHTML = 'Some enemies spring up from behind the trees.';
            } else {
                eventContainer.innerHTML = `${enemyList[0].name} sneak up on you from behind the trees.`;
            }
            break;
    }
};
const grassEvent = () => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'good';
            break;
        case 2:
            eventContainer.innerHTML = 'bad';
            break;
        case 3:
            eventContainer.innerHTML = 'battle';
            break;
    }
};
const lakeEvent = () => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'good';
            break;
        case 2:
            eventContainer.innerHTML = 'bad';
            break;
        case 3:
            eventContainer.innerHTML = 'battle';
            break;
    }
};
const hillEvent = () => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'good';
            break;
        case 2:
            eventContainer.innerHTML = 'bad';
            break;
        case 3:
            eventContainer.innerHTML = 'battle';
            break;
    }
};
const mountainEvent = () => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'good';
            break;
        case 2:
            eventContainer.innerHTML = 'bad';
            break;
        case 3:
            eventContainer.innerHTML = 'battle';
            break;
    }
};
const abandonedBuildingEvent = () => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'good';
            break;
        case 2:
            eventContainer.innerHTML = 'bad';
            break;
        case 3:
            eventContainer.innerHTML = 'battle';
            break;
    }
};
const townEvent = () => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'good';
            break;
        case 2:
            eventContainer.innerHTML = 'bad';
            break;
        case 3:
            eventContainer.innerHTML = 'battle';
            break;
    }
};