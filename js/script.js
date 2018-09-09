// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must contain at least one loop.
// Your code must make use of both string and number user inputs.

var player = {
    name: 'John Doe',
    exp: 0, //score, stat use to determine success in events
    tardy: 0, //tracking for lateness, >3 = gameover
    status: 1, //tracking for sleepiness
    day: 0, //tracking for game progress
    skills: ['Grit', 'Give Up'], //skills that can be used when tackling day assignments
    knowledge: [] //achievements when completing day or night assignments
}

var specials = ['Slack', 'Google']
var sleepiness = ['Refreshed', 'Normal', 'Sleepy', 'Tired', 'Zombie', 'GG']
var gamePrompt, gameAlert

//game loops as long gameEnd() has not been triggered
while (player.day >= 0) {
    //player.day 0
    resetPlayer()
    player.name = prompt('WDI SIMULATOR 16\nWhat is your name?', player.name)
    gamePrompt = prompt(`Hi ${player.name}! It's the day before the start of GA's WDI 16.\nYou have...\n 1. Completed all the prework - feeling confident!\n 2. Attempted the prework but needed more time :|\n 3. What is prework?`, '1, 2, 3')

    switch (gamePrompt) {
        case '1':
            player.exp += 40
            gameAlert = alert(`${statsDisplay(player.status)}Well done ${player.name}. With everything completed, you go to sleep.\n (+40 exp)`)
            player.knowledge.push('Prework')
            player.status--
            player.day++
            break;
        case '2':
            player.exp += 30
            gameAlert = alert(`${statsDisplay(player.status)}Good effort ${player.name}. Don't be disheartened!\n (+30 exp)`)
            player.day++
            break;
        case '3':
            player.exp += 0
            gameAlert = alert(`${statsDisplay(player.status)}Uh oh ${player.name}. We'll see how this goes...\n (+0 exp)`)
            player.day++
            break;
        default:
            gameError()
    }
    //player.day 0.5 or overnighter scenario
    if (player.exp <= 30)
        attemptAssignment('Prework', player)

    //player.day 1
    if (player.day === 1) {
        lateCheck(player, specials)
        gamePrompt = prompt(`${statsDisplay(player.status)}After a rather awkward ice-breaking session, the real work begins. It's installfest! A wild terminal assignment appears! \nYou..\n${displaySpecial(player)}`)
        battleStart('Terminal', gamePrompt, player)
        player.status++
        if (player.day === 1) { //interim bug fix for selecting give up
            alert(`${statsDisplay(player.status)}Woah that was tough. It is now time for javascript. The first assignment begins with conditionals.`)
            attemptAssignment('Conditionals', player)
            player.day++
        }
    }

    if (player.day == 2) {
        lateCheck(player, specials)
        alert('Day 2 to be continued?')
    }

    //ends game loop
    if (player.day > 0)
        gameEnd()
}