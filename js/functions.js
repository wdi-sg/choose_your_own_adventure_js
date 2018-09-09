function statsDisplay(playerStatus) {
    return `Day: ${player.day} | ${player.name} | Exp: ${player.exp} | Status: ${sleepiness[playerStatus]}\n\n`
}

function displaySpecial(player) {
    var options = ''
    var index = 1
    for (i in player.special) {
        options += `${index}. Use ${player.special[i]}\n`
        index++
    }
    return options
}

function resetPlayer() {
    player.exp = 0
    player.tardy = 0
    player.special = ['Grit', 'Give Up']
    player.status = 1
}

function gameError() {
    alert('Hmm looks like your input broke something. Starting over.')
    player.day--
}

function gameEnd() {
    player.day = -1
}

function earlyBonus (player, specials) {
    for (i in player.special) {
        var modifier = Math.floor((Math.random() * specials.length) + 0);
        if (player.special[i] !== specials[modifier]) {
            player.special.pop()
            player.special.push(specials[modifier])
            player.special.push('Give Up')
            return alert(`It's day ${player.day}. Arrived Early! You spend your extra time studying and gain a new special: ${specials[modifier]}`)
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
        return alert(`It's day ${player.day}. You arrive to class on time.`)
    }
    else {
        player.tardy++
        return alert(`It's day ${player.day}. Oh no you overslept and arrived late.`)
    }
}