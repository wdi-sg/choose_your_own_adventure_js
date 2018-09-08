function statsDisplay(status) {
    return `${player.name} | Exp: ${player.exp} | Status: ${player.status[status]}\n\n`
}

function resetPlayer() {
    player.exp = 0
    status = 0
}

function gameError() {
    alert('Hmm looks like your input broke something. Starting over.')
    gameState = 0
    resetPlayer()
}

function lateCheck(status) {
    var modifier = Math.floor((Math.random() * 50) + 10);
    var lateChance
    switch (status) {
        case 'Refreshed':
            lateChance = 51
            break;
        case 'Normal':
            lateChance = 37
            break;
        case 'Sleepy':
            lateChance = 32
            break;
        case 'Tired':
            lateChance = 29
            break;
        case 'Zombie':
            lateChance = 20
            break;
        default:
            lateChance = 0
    }

    latechance += modifier

    if (lateChance >= = 50)
        return alert('You arrive at class on time.')
    else
        return alert('Oh no you overslept and arrived late.')
}