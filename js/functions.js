function statsDisplay(playerStatus) {
    return `Day: ${day} | ${player.name} | Exp: ${player.exp} | Status: ${sleepiness[playerStatus]}\n\n`
}

function resetPlayer() {
    player.exp = 0
    player.tardy = 0
    player.special = ['Luck']
    player.status = 1
}

function gameError() {
    alert('Hmm looks like your input broke something. Starting over.')
    day = 0
    resetPlayer()
}

function gameEnd() {
    day = -1
}

function earlyBonus (player, specials) {
    for (i in player.special) {
        var modifier = Math.floor((Math.random() * specials.length) + 0);
        if (player.special[i] !== specials[modifier]) {
            player.special.push(specials[modifier])
            i++ //to fix wierd addition bug
            return alert(`Arrived Early! You spend your extra time studying and gain a new special: ${player.special[i]}`)
        }
    }
}

function lateCheck(player, specials) {
    var modifier = Math.floor((Math.random() * 40) + 10);
    var lateChance
    switch (player.status) {
        case 0:
            lateChance = 51
            break;
        case 1:
            lateChance = 37
            break;
        case 2:
            lateChance = 32
            break;
        case 3:
            lateChance = 29
            break;
        case 4:
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