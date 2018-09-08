// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must contain at least one loop.
// Your code must make use of both string and number user inputs.

var player = {
    name: 'John Doe',
    exp: 0
}

var name
var gamePrompt, gameAlert
var gameState = true

player.name = prompt('What is your name?', 'John Doe')

//day 0
gamePrompt = prompt(`Hi ${player.name}! Its the day before the start of GA's WDI 16.\nYou have...\n(C)ompleted all the prework - feeling confident!\n(A)ttempted the prework but needed more time :|\n(W)hat is prework?`, 'c, a, w')

switch (gamePrompt.toLowerCase()) {
    case 'c':
        player.exp += 40
        gameAlert = alert(`${statsDisplay()}Well done ${player.name}. Your hardwork paid off, keep it up!\n +40 experience`)
        break;
    case 'a':
        player.exp += 30
        gameAlert = alert(`${statsDisplay()}Good effort ${player.name}. Don't be disheartened!\n +30 experience`)
        break;
    case 'w':
        player.exp += 0
        gameAlert = alert(`${statsDisplay()}Uh oh ${player.name}. We'll see how this goes...\n +0 experience`)
        break;
    default:
        gameAlert = alert('Hmm looks like your input broke something. Refresh to start over.')
}