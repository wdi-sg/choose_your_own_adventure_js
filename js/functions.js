function statsDisplay(playerStatus) {
    return `Day: ${player.day} | ${player.name} | Exp: ${player.exp} | Status: ${sleepiness[playerStatus]}\n\n`
}

function displaySpecial(player) {
    var options = ''
    var index = 1
    for (i in player.special) {
        options += ` ${index}. Use ${player.special[i]}\n`
        index++
    }
    return options
}

function randomNumber(max, min) {
    return Math.floor((Math.random() * max) + min);
}

function resetPlayer() {
    player.exp = 0
    player.tardy = 0
    player.special = ['Grit', 'Give Up']
    player.status = 1
}

function gameError() {
    alert('Hmm looks like your input broke something. Starting over.')
    player.day = 0
}

function gameEnd() {
    player.special.pop()
    alert(`GAME OVER\n You survived to day ${player.day}.\n Skills: ${player.special}\n Learnt: ${player.skills}`)
    player.day = -1
}

function earlyBonus(player, specials) {
    for (i in player.special) {
        var modifier = randomNumber(specials.length, i);
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

    if (lateChance >= 75) {
        //return alert('You arrive early')
        earlyBonus(player, specials)
    } else if (lateChance >= 50) {
        return alert(`It's day ${player.day}. You arrive to class on time.`)
    } else {
        player.tardy++
        if (player.tardy > 2) {
            alert('You were late one too many times...')
            gameEnd()
        }
        return alert(`It's day ${player.day}. Oh no you overslept and arrived late.`)
    }
}

function battleStart(assignment, prompt, player) {
    var sucessChance = 0
    var difficulty = 45
    switch (player.special[prompt - 1]) {
        case 'Grit':
            sucessChance += (randomNumber(40, 1) + player.exp)
            break;
        case 'Google':
            sucessChance += (randomNumber(30, 15) + player.exp)
            break;
        case 'Slack':
            sucessChance += (randomNumber(40, 10) + player.exp)
            break;
        default:
            gameError()
    }

    switch (player.status) {
        case 0:
            difficulty -= 10
            break;
        case 1:
            difficulty -= 5
            break;
        case 2:
            difficulty += 5
            break;
        case 3:
            difficulty += 10
            break;
        case 4:
            difficulty += 15
            break;
        case 5:
            difficulty += 20
            break;
        default:
            gameError()
    }

    if (sucessChance >= difficulty) {
        player.exp += 5
        player.skills.push(assignment)
        alert(`You used ${player.special[prompt - 1]}! Your efforts were not wasted. You have now mastered ${assignment}.`)
    } else {
        player.exp += 2.5
        alert(`You used ${player.special[prompt - 1]}! It was no good, you were left dazed by the ${assignment} assignment.`)
    }
}

function attemptAssignment(assignment, player) {
    var skillLevel
    if (player.exp > 50)
        skillLevel = randomNumber(100, 45)
    else
        skillLevel = randomNumber(100, 20)

    gamePrompt = prompt(`${statsDisplay(player.status)}Would you like to attempt the ${assignment} assignment?\n 1. Yes\n 2. No`, '1, 2');
    if (gamePrompt === '1') {
        player.status++
        player.exp += 5
        if (skillLevel <= 50) {
            gamePrompt = prompt(`${statsDisplay(player.status)}Nothing makes sense and you are hardly making any progress...\n (+5 Exp)\nCarry on through the night?\n 1. Sleep is for the weak\n 2. Zzz`, '1, 2')
            if (gamePrompt === '1') {
                player.status++
                player.exp += 5
                alert(`${statsDisplay(player.status)}You managed to understand a few more things but sleep ultimately takes it's toll.\n(+5 Exp)`)
            } else if (gamePrompt === '2') {
                player.status--
                alert(`${statsDisplay(player.status)}Sleep is more important, good call.`)
            } else
                gameError()
        } else {
            player.status--
            player.exp += 5
            player.skills.push(assignment)
            alert(`${statsDisplay(player.status)}You breezed through the assignment. Mastered ${assignment}!`)
        }
    } else if (gamePrompt === '2') {
        player.status--;
        alert(`${statsDisplay(player.status)}You decide it was not worth it and head to bed.`)
    } else
        gameError()
}