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
    day: 0,
    special: ['Grit', 'Give Up']
}

var specials = ['Slack', 'Google','Pseudo-code']
var sleepiness = ["Refreshed", "Normal", "Sleepy", "Tired", "Zombie", "GG"]
var gamePrompt, gameAlert

while (player.day >= 0) {
    //player.day 0
    resetPlayer()
    player.name = prompt('WDI SIMULATOR 16\nWhat is your name?', player.name)
    gamePrompt = prompt(`Hi ${player.name}! It's the day before the start of GA's WDI 16.\nYou have...\n1. Completed all the prework - feeling confident!\n2. Attempted the prework but needed more time :|\n3. What is prework?`, '1, 2, 3')

    switch (parseInt(gamePrompt)) {
        case 1:
            player.exp += 50
            gameAlert = alert(`${statsDisplay(player.status)}Well done ${player.name}. With everything completed, you go to sleep.\n (+40 exp)`)
            player.status--
            player.day++
            break;
        case 2:
            player.exp += 30
            gameAlert = alert(`${statsDisplay(player.status)}Good effort ${player.name}. Don't be disheartened!\n (+30 exp)`)
            player.day++
            break;
        case 3:
            player.exp += 0
            gameAlert = alert(`${statsDisplay(player.status)}Uh oh ${player.name}. We'll see how this goes...\n (+0 exp)`)
            player.day++
            break;
        default:
            gameError()
    }
    //player.day 0.5 or overnighter scenario
    if (player.exp <= 30 && player.day === 1) {
        gamePrompt = parseInt(prompt(`${statsDisplay(player.status)}Would you like to attempt the prework?\n1. Yes\n2. No`, '1, 2'));
        if (gamePrompt === 1) {
            player.status++
            player.exp += 5
            gamePrompt = parseInt(prompt(`${statsDisplay(player.status)}Nothing makes sense and you are hardly making any progress...\n (+5 Exp)\nCarry on through the night?\n1. Sleep is for the weak\n2. Zzz`, '1, 2'))
            if (gamePrompt === 1) {
                player.status++
                player.exp += 5
                alert(`${statsDisplay(player.status)}You managed to understand a few more things but sleep ultimately takes it's toll.\n(+5 Exp)`)
            } else if (gamePrompt === 2) {
                player.status--
                alert(`${statsDisplay(player.status)}Sleep is more important, good call.`)
            } else
                gameError()
        } else if (gamePrompt === 2) {
            player.status--;
            alert(`${statsDisplay(player.status)}You decide it was not worth it and head to bed.`)
        } else
            gameError()
    }

    //player.day 1
    if (player.day === 1) {
        lateCheck(player, specials)
        gamePrompt = prompt(`${statsDisplay(player.status)}After a rather awkward ice-breaking session, the real work begins. It's installfest! There's alot of terminal work to be done. \nYou..\n${displaySpecial(player)}`)
    }

    //ends game loop
    gameEnd()
}