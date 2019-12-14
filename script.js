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
  }
}

// Input function
var inputHappened = function(currentInput){
  // Full A Tree
  // A 
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 0) {
    game.resetInput()
    game.choices.firstChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return `A`
  }
  // A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "A - A"
  }
  // A -> A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a ) {
    game.gameOver()
    return `A - A - A`
  }
  // A -> A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a) {
    return `A - A - B`
  }

  // A -> A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a) {
    return `A - A - C`
  }
  // A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "A - B"
  }
  // A -> B -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `A - B - A`
  }
  // A -> B -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `A - B - B`
  }
  // A -> B -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b ) {
    game.gameOver()
    return `A - B - C`
  }
  // A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "A - C"
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

  // Full B Tree
  // B 
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 0) {
    game.resetInput()
    game.choices.firstChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return `B`
  }
  // A -> A
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
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return "B - C"
  }
  // B -> C -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `B - C - A`
  }
  // B -> C -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `B - C - B`
  }
  // B -> C -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.c ) {
    game.gameOver()
    return `B - C - C`
  }

  // Full C Tree
  // C 
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 0) {
    game.resetInput()
    game.choices.firstChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return `C`
  }
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
};