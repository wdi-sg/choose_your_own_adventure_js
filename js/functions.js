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

function earlyBonus (player, specials) {
    for (i in specials) {
        if (player.special[i] !== specials[i]) {
            player.special.push(specials[i])
            return alert(`Arrived Early! You spend your extra time studying and gain a new special: ${player.special[i]}`)
        }
    }
}

function lateCheck(status, player, specials) {
    var modifier = Math.floor((Math.random() * 40) + 10);
    var lateChance
    switch (status) {
        case '0':
            lateChance = 51
            break;
        case '1':
            lateChance = 37
            break;
        case '2':
            lateChance = 32
            break;
        case '3':
            lateChance = 29
            break;
        case '4':
            lateChance = 20
            break;
        default:
            lateChance = 0
    }

    lateChance += modifier

    if (lateChance >= 70) {
        //return alert('You arrive early')
        earlyBonus(player, specials)
    }
    else if (lateChance >= 50) {
        return alert('You arrive at class on time.')
    }
    else {
        player.tardy++
        return alert('Oh no you overslept and arrived late.')
    }
}