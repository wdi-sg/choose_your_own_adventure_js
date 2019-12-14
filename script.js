const game = {
  choices: {
    a: "a",
    b: "b",
    c: "c",
    counter: 0,
    increaseCount: function(){
      this.counter++
    },
    firstChoice: "",
    secondChoice: ""
  },
  resetInput: function(){
    document.querySelector('#input').value = ""
  },
  gameOver: function(){
    document.querySelector('#input').value = "Type restart!"
  },
  retry: function(){
    this.choices.counter = 0
    document.querySelector('#input').value = ""
    this.choices.firstChoice = ""
    this.choices.secondChoice = ""
  },
  setText: function(text){
    document.querySelector("#text").innerHTML = text
  }
}

// Input function
var inputHappened = function(currentInput){
  // reset game
  if (currentInput.toLowerCase() === "retry"){
    game.retry()
    return `New game!`
  }
  // A 
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 0) {
    game.resetInput()
    game.choices.firstChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    document.querySelector("#text").innerHTML = "A Wild Bulbasaur appears!!!"
    return `A - Attack!\nB - Pokeball\nC - Run`
  }
  // B 
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 0) {
      game.resetInput()
      game.choices.firstChoice = currentInput.toLowerCase()
      game.choices.increaseCount()
      return `B`
    }
  // C 
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 0) {
    game.resetInput()
    game.choices.firstChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return `C`
  }

  return gameLogic(currentInput)
};

const gameLogic = function(currentInput){
  switch(game.choices.firstChoice){
    case game.choices.a: return aTree(currentInput)
    case game.choices.b: return bTree(currentInput)
    case game.choices.c: return cTree(currentInput)
  }
}

const aTree = function(currentInput) {
  // Full A Tree
  // A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.setText(`Pikachu uses Thunder! 5 Damage! Bulbasaur 2 HP left!\nBulbasaur uses Tackle! 2 Damage! Pikachu has 8 HP left!`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "A - Attack\nB - Pokeball\nC - Run"
  }
  // A -> A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a ) {
    game.setText(`Pikachu uses Lightning Bolt! Pikachu's attack missed!\nBulbasaur uses Tackle! Critical Hit! 10 Damage! Pikachu fainted!`)
    game.gameOver()
    return `Game over!`
  }
  // A -> A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a) {
    game.setText(`You throw a POKEBALL!. . . You caught a Bulbasaur!!!`)
    return `To be continued....`
  }

  // A -> A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a) {
    game.setText(`You are running into the deep forest......a wild MEWTWO APPEARS and uses PSY ATTACK! You lose your mind and slowly fade.....`)
    return `Game over!`
  }
  // A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.setText(`You throw a POKEBALL!. . . Bulbasaur escaped! Bulbasaur uses Razor leaf! 6 Damage! Pikachu has 4 HP left!`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "A - Attack\nB - Pokeball\nC - Run"
  }
  // A -> B -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b ) {
    game.setText(`Pikachu uses Thunder! 5 Damage! Bulbasaur has 2 HP left! Bulbasaur uses Solar Beam! 20 Damage! Overkill! Pikachu fainted!`)
    game.gameOver()
    return `Game over!`
  }
  // A -> B -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b ) {
    game.setText(`You throw a POKEBALL!. . . Bulbasaur escaped! Bulbasaur uses Razor leaf! 6 Damage! Pikachu fainted!`)
    game.gameOver()
    return `Game over!`
  }
  // A -> B -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b ) {
    game.setText(`You are running into the deep forest......a wild MEWTWO APPEARS and uses PSY ATTACK! You lose your mind and slowly fade.....`)
    game.gameOver()
    return `Game over!`
  }
  // A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.setText(`You are running into the deep forest......a wild MEWTWO APPEARS and uses PSY ATTACK! You lose your mind and slowly fade.....`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "Game Over"
  }
  // A -> C -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `A - C - A`
  }
  // A -> C -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `A - C - B`
  }
  // A -> C -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `A - C - C`
  }
}

const bTree = function(currentInput){
  // Full B Tree
  // B -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 1 && game.choices.firstChoice === game.choices.b) {
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "B - A"
  }
  // B -> A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.a ) {
    game.gameOver()
    return `B - A - A`
  }
  // B -> A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.a) {
    return `B - A - B`
  }

  // B -> A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.a) {
    return `B - A - C`
  }
  // B -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 1 && game.choices.firstChoice === game.choices.b) {
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "B - B"
  }
  // B -> B -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `B - B - A`
  }
  // B -> B -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `B - B - B`
  }
  // B -> B -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `B - B - C`
  }
  // B -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 1 && game.choices.firstChoice === game.choices.b) {
    game.setText(`You are running into the deep forest......a wild MEWTWO APPEARS and uses PSY ATTACK! You lose your mind and slowly fade.....`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "Game over!"
  }
}

const cTree = function(currentInput){
  // Full C Tree

  // C -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 1 && game.choices.firstChoice === game.choices.c) {
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "C - A"
  }
  // C -> A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.a ) {
    game.gameOver()
    return `C - A - A`
  }
  // C -> A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.a) {
    return `C - A - B`
  }

  // C -> A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.a) {
    return `C - A - C`
  }
  // C -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 1 && game.choices.firstChoice === game.choices.c) {
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "C - B"
  }
  // C -> B -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `C - B - A`
  }
  // C -> B -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `C - B - B`
  }
  // C -> B -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `C - B - C`
  }
  // C -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 1 && game.choices.firstChoice === game.choices.c) {
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "C - C"
  }
  // C -> C -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `C - C - A`
  }
  // C -> C -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `C - C - B`
  }
  // C -> C -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `C - C - C`
  }
}