function statsDisplay(status) {
    return `${player.name} | Exp: ${player.exp} | Status: ${player.status[status]}\n\n`
}

function gameError() {
    alert('Hmm looks like your input broke something. Refresh to start over.')
    gameState = 0
}

function resetPlayer() {
    player.exp = 0
    status = 0
}