function statsDisplay(status) {
    return `${player.name} | Exp: ${player.exp} | Status: ${player.status[status]}\n\n`
}

function resetPlayer() {
    player.exp = 0
    player.tardy = 0
    status = 1
}

function gameError() {
    alert('Hmm looks like your input broke something. Starting over.')
    gameState = 0
    resetPlayer()
}

function gameEnd() {
    gameState = -1
}

function lateCheck(status) {
    var modifier = Math.floor((Math.random() * 40) + 10);
    var lateChance
    switch (status) {
        case '0':
            lateChance = 51
            console.log(lateChance);
            break;
        case '1':
            lateChance = 37
            console.log(lateChance);
            break;
        case '2':
            lateChance = 32
            console.log(lateChance);
            break;
        case '3':
            lateChance = 29
            console.log(lateChance);
            break;
        case '4':
            lateChance = 20
            console.log(lateChance);
            break;
        default:
            lateChance = 0
            console.log(lateChance)
    }

    lateChance += modifier

    if (lateChance >= 70) {
        return alert('You arrive early')
    }
    else if (lateChance >= 50) {
        return alert('You arrive at class on time.')
    }
    else {
        player.tardy++
        return alert('Oh no you overslept and arrived late.')
    }
}