// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must contain at least one loop.
// Your code must make use of both string and number user inputs.

var player = {
    name: 'John Doe',
    experience: 0
}

var name
var gamePrompt
var gameState = true

player.name = prompt('What is your name?', 'John Doe')
gamePrompt = prompt(`Hi ${player.name}! Its the day before the start of GA's WDI 16.\nYou have...\n(1) Completed all the prework - feeling confident!\n(2) Attempted the prework but needed more time :|\n(3) What is prework?`, '1 / 2 / 3')