// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must contain at least one loop.
// Your code must make use of both string and number user inputs.

var player = {
    name: 'John Doe',
    exp: 0,
    tardy: 0,
    status: 1,
    special: ['Luck']
}

var specials = ['Slack', 'Google','Pseudo-code']
var sleepiness = ["Refreshed", "Normal", "Sleepy", "Tired", "Zombie", "GG"]
var gamePrompt, gameAlert
var gameState = 0;

while (gameState >= 0) {
    //day 0
    resetPlayer()
    player.name = prompt('What is your name?', player.name)
    gamePrompt = prompt(`Hi ${player.name}! Its the day before the start of GA's WDI 16.\nYou have...\n(C)ompleted all the prework - feeling confident!\n(A)ttempted the prework but needed more time :|\n(W)hat is prework?`, 'C, A, W').toLowerCase()

    switch (gamePrompt) {
        case 'c':
            player.exp += 50
            gameAlert = alert(`${statsDisplay(player.status)}Well done ${player.name}. With everything completed, you go to sleep.\n (+40 exp)`)
            player.status--
            gameState++
            break;
        case 'a':
            player.exp += 30
            gameAlert = alert(`${statsDisplay(player.status)}Good effort ${player.name}. Don't be disheartened!\n (+30 exp)`)
            gameState++
            break;
        case 'w':
            player.exp += 0
            gameAlert = alert(`${statsDisplay(player.status)}Uh oh ${player.name}. We'll see how this goes...\n (+0 exp)`)
            gameState++
            break;
        default:
            gameError()
    }
    //day 0.5 or overnighter scenario
    if (player.exp <= 30 && gameState === 1) {
        gamePrompt = prompt(`${statsDisplay(player.status)}Would you like to attempt the prework?\n(Y)es\n(N)o`, 'Y, N').toLowerCase();
        if (gamePrompt === 'y') {
            player.status++
            player.exp += 5
            gamePrompt = prompt(`${statsDisplay(player.status)}Nothing makes sense and you are hardly making any progress...\n (+5 Exp)\nCarry on through the night?\n(S)leep is for the weak\n(Z)zz`, 'S, Z').toLowerCase()
            if (gamePrompt === 's') {
                player.status++
                player.exp += 5
                alert(`${statsDisplay(player.status)}You managed to understand a few more things but sleep ultimately takes it's toll.\n(+5 Exp)`)
            } else if (gamePrompt === 'z') {
                player.status--
                alert(`${statsDisplay(player.status)}Sleep is more important, good call.`)
            } else
                gameError()
        } else if (gamePrompt === 'n') {
            player.status--;
            alert(`${statsDisplay(player.status)}You decide it was not worth it and head to bed`)
        } else
            gameError()
    }

    //day 1
    if (gameState === 1) {
        lateCheck(player, specials)
        gamePrompt = prompt(`${statsDisplay(player.status)}`)
    }

    //ends game loop
    gameEnd()
}