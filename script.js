const game = {
  choices: {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    counter: 0,
    increaseCount: function () {
      this.counter++
    },
    firstChoice: "",
    secondChoice: ""
  },

  playerName: "",
  score: 0,
  increaseScore: function (score) {
    this.score = this.score + score
  },

  resetInput: function () {
    document.querySelector('#input').value = ""
  },

  gameOver: function () {
    document.querySelector('#input').placeholder = "Type retry!"
    this.resetInput()
  },

  retry: function () {
    this.choices.counter = 0
    document.querySelector('#input').value = ""
    document.querySelector('#input').placeholder = "Type here"
    document.querySelector("#text").innerText = ""
    this.choices.firstChoice = ""
    this.choices.secondChoice = ""
    this.playerName = ""
    this.score = 0
  },

  setText: function (text) {
    document.querySelector("#text").innerHTML = text
  }
}

// Input function
var inputHappened = function (currentInput) {
  // input name
  if (game.choices.counter === 0 && game.playerName === "") {
    if (currentInput.length < 3 || currentInput === "retry") {
      game.resetInput()
      return `Please type a valid name with at least 3 characters!`
    }
    game.playerName = currentInput
    game.resetInput()
    return `A - Sneak through the tall grass\nB - Enter the forest\nC - Explore the Lake`
  }
  // reset game
  if (currentInput.toLowerCase() === "retry") {
    game.retry()
    return `Please type a name!`
  }
  // A 
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 0) {
    game.resetInput()
    game.choices.firstChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    game.setText("A Wild Bulbasaur appears!!!")
    return `A - Attack!\nB - Pokeball\nC - Run`
  }
  // B 
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 0) {
    game.setText(`${ game.playerName } come across a three-way junction. The right path eminates a mysterious light in the distance .....`)
    game.resetInput()
    game.choices.firstChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return `A - Go Left\nB - Go Straight\nC - Go Right\nD - Go back`
  }
  // C 
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 0) {
    game.setText(`As ${game.playerName} comes across the lake, he wonders what to do next...`)
    game.resetInput()
    game.choices.firstChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    return `A - Go for a swim\nB - Try to fish\nC - Take a walk around the lake\nD - Go back`
  }

  return gameLogic(currentInput)
};

const gameLogic = function (currentInput) {
  switch (game.choices.firstChoice) {
    case game.choices.a:
      return aTree(currentInput)
    case game.choices.b:
      return bTree(currentInput)
    case game.choices.c:
      return cTree(currentInput)
  }
}

const aTree = function (currentInput) {
  // Full A Tree
  // A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.setText(`Pikachu uses Thunder! 5 Damage! Bulbasaur 2 HP left!\nBulbasaur uses Tackle! 2 Damage! Pikachu has 8 HP left!`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    game.increaseScore(5)
    return "A - Attack\nB - Pokeball\nC - Run"
  }
  // A -> A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a) {
    game.setText(`Pikachu uses Lightning Bolt! Pikachu's attack missed!\nBulbasaur uses Tackle! Critical Hit! 10 Damage! Pikachu fainted!`)
    game.gameOver()
    game.increaseScore(1)
    return `Game over! - Total score: ${game.score}`
  }
  // A -> A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a) {
    game.setText(`${game.playerName} throws a POKEBALL!. . . ${game.playerName} caught a Bulbasaur!!!`)
    game.increaseScore(10)
    game.gameOver()
    return `To be continued....`
  }

  // A -> A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.a) {
    game.setText(`${game.playerName} is running into the deep forest......a wild MEWTWO APPEARS and uses PSY ATTACK! ${game.playerName} loses his mind and slowly fades away.....`)
    game.gameOver()
    game.increaseScore(1)
    return `Game over! - Total score: ${game.score}`
  }
  // A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.setText(`${game.playerName} throws a POKEBALL!. . . Bulbasaur escaped! Bulbasaur uses Razor leaf! 6 Damage! Pikachu has 4 HP left!`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    game.increaseScore(3)
    return "A - Attack\nB - Pokeball\nC - Run"
  }
  // A -> B -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b) {
    game.setText(`Pikachu uses Thunder! 5 Damage! Bulbasaur has 2 HP left! Bulbasaur uses Solar Beam! 20 Damage! Overkill! Pikachu fainted!`)
    game.gameOver()
    game.increaseScore(1)
    return `Game over! - Total score: ${game.score}`
  }
  // A -> B -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b) {
    game.setText(`${game.playerName} throws a POKEBALL!. . . Bulbasaur escaped! Bulbasaur uses Razor leaf! 6 Damage! Pikachu fainted!`)
    game.gameOver()
    game.increaseScore(1)
    return `Game over! - Total score: ${game.score}`
  }
  // A -> B -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.a && game.choices.secondChoice === game.choices.b) {
    game.setText(`${game.playerName} is running into the deep forest......a wild MEWTWO APPEARS and uses PSY ATTACK! ${game.playerName} loses his mind and slowly fade.....`)
    game.gameOver()
    game.increaseScore(1)
    return `Game over! - Total score: ${game.score}`
  }
  // A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 1 && game.choices.firstChoice === game.choices.a) {
    game.setText(`${game.playerName} is running into the deep forest......a wild MEWTWO APPEARS and uses PSY ATTACK! ${game.playerName} loses his mind and slowly fade.....`)
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    game.increaseScore(1)
    game.gameOver()
    return `Game over! - Total score: ${game.score}`
  }
}

const bTree = function (currentInput) {
  // Full B Tree
  // B -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 1 && game.choices.firstChoice === game.choices.b) {
    game.setText(`Prepare for Trouble! And make it double! To protect the world from devastation! To unite all people within our nation! To denounce the evils of truth and love! To extend our reach to the stars above!\n
    JESSIE!\n
    JAMES!\n
    Team Rocket blasts off at the speed of light! Surrender now, or prepare to fight!\n
    Meowth! That's right!`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    game.increaseScore(5)
    return "A - Pikachu Thunder\nB - Hand over Pokemon\nC - Steal their Pokemon"
  }
  // B -> A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.a) {
    game.setText(`Team Rocket's blasting off again!`)
    game.increaseScore(5)
    game.gameOver()
    return `Game over! - Total score: ${game.score}`
  }
  // B -> A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.a) {
    game.setText(`Team Rocket: "Oh...that is very nice of you, thanks!!!"`)
    game.increaseScore(3)
    game.gameOver()
    return `Game over! - Total score: ${game.score}`
  }

  // B -> A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.b && game.choices.secondChoice === game.choices.a) {
    game.setText(`Giovanni, Team Rocket's Boss appears\nGiovanni: "${game.playerName}, you have Talent...I have a offer you can't refuse. . .`)
    game.increaseScore(1)
    game.gameOver()
    return `Game over! - Total score: ${game.score}`
  }
  // B -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 1 && game.choices.firstChoice === game.choices.b) {
    game.setText(`As ${game.playerName} go straight, ${game.playerName} finds himself in a thick jungle, making turns, trying to find his way through. . . hours pass, a day passes, and ${game.playerName} slowly feels weak after having used up all resources . . .he finds a spot to rest and slowly falls to the temptation to close his eyes - ${game.playerName} never wakes up...`)
    game.choices.secondChoice = currentInput.toLowerCase()
    game.increaseScore(1)
    game.gameOver()
    return "Game over! - Total score: ${game.score}"
  }
  // B -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 1 && game.choices.firstChoice === game.choices.b) {
    game.setText(`${game.playerName} slowly approaches the mysterious light.....suddenly a wild MEWTWO APPEARS and uses PSY ATTACK! ${game.playerName} loses his mind and slowly fade.....`)
    game.gameOver()
    game.increaseScore(1)
    return "Game over! - Total score: ${game.score}"
  }
  // B -> D
  if (currentInput.toLowerCase() === game.choices.d && game.choices.counter === 1 && game.choices.firstChoice === game.choices.b) {
    game.choices.counter--
    game.resetInput()
    game.setText(`You return to the start of your journey`)
    return `A - Sneak through the tall grass\nB - Enter the forest\nC - Explore the Lake`
  }
}

const cTree = function (currentInput) {
  // Full C Tree

  // C -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 1 && game.choices.firstChoice === game.choices.c) {
    game.setText(`As ${game.playerName} makes some laps in the Lake....A Wild Magikarp appears!`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    game.increaseScore(3)
    return "A - Attack\nB - Pokeball\nC - Run"
  }
  // C -> A -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.a) {
    game.setText(`Pikachu uses Thunder! It is very effective! 30 Damage! Magikarp fainted!\nPikachu gains 25 XP! Level Up! Pikachu learns Swift!`)
    game.gameOver()
    game.increaseScore(5)
    return `Game over! - Total score: ${game.score}`
  }
  // C -> A -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.a) {
    game.setText(`${game.playerName} throws a POKEBALL!!! . . Magikarp escapes! Magikarp gains 1 XP!<br><br>MAGIKARP IS EVOLVING . . . <br><br>The Gyarados uses Dragon Breath! ${game.playerName} gets engulfed in the light and lose consciousness...`)
    game.increaseScore(1)
    game.gameOver()
    return `Game over! - Total score: ${game.score}`
  }

  // C -> A -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.a) {
    game.setText(`People at the lake see ${game.playerName} run from away a Magikarp and start laughing...<br><br>Heartbroken ${game.playerName} leaves the lake, goes home, covers himself in his blanket and never steps out to catch Pokemon again - full of shame!`)
    game.increaseScore(1)
    game.gameOver()
    return `Game over! - Total score: ${game.score}`
  }
  // C -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 1 && game.choices.firstChoice === game.choices.c) {
    game.setText(`After a while without a catch, suddenly the string on ${game.playerName}'s fishing rod tightens and pulls hard!<br><br>${game.playerName} gives it his all, until the fish is almost to the surface...<br><br>A WILD GYARADOS APPEARS!!!`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    game.increaseScore(5)
    return "A - Attack\nB - Pokeball\nC - Run"
  }
  // C -> B -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.b) {
    game.setText(`Pikachu is charging his Thunder...but Gyarados is faster!<br><br>Gyarados uses Dragon Breath! ${game.playerName} gets engulfed in the light and lose consciousness...`)
    game.gameOver()
    game.increaseScore(1)
    return `Game over! - Total score: ${game.score}`
  }
  // C -> B -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.b) {
    game.setText(`${game.playerName} throws a POKEBALL!!! . . . SUCCESS(???????)! ${game.playerName} caught a Gyarados!`)
    game.gameOver()
    game.increaseScore(10)
    return `Game over! - Total score: ${game.score}`
  }
  // C -> B -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.b) {
    game.setText(`${game.playerName} and Pikachu run away as fast as they can, but Gyarados can fly and soon catches up to them! It swoops down, and uses Dragon Breath! ${game.playerName} gets engulfed in the light and loses consciousness...`)
    game.gameOver()
    game.increaseScore(3)
    return `Game over! - Total score: ${game.score}`
  }
  // C -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 1 && game.choices.firstChoice === game.choices.c) {
    game.setText(`As ${game.playerName} walks around the lake, there is this weird guy staring at him. ${game.playerName} makes eye contact<br><br>Oily Bodybuilder appears: "See my power! GO Psyduck!`)
    game.resetInput()
    game.choices.secondChoice = currentInput.toLowerCase()
    game.choices.increaseCount()
    game.increaseScore(3)
    return "A - Attack\nB - Pokeball\nC - Run"
  }
  // C -> C -> A
  if (currentInput.toLowerCase() === game.choices.a && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.c) {
    game.setText(`Pikachu uses Thunder! It is very effective! ${game.playerName}'s dinner is Peking Duck!`)
    game.gameOver()
    game.increaseScore(5)
    return `Game over! - Total score: ${game.score}`
  }
  // C -> C -> B
  if (currentInput.toLowerCase() === game.choices.b && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.c) {
    game.setText(`Giovanni, Team Rocket's Boss appears\nGiovanni: "${game.playerName}, you have Talent...I have a offer you can't refuse. . .`)
    game.gameOver()
    game.increaseScore(1)
    return `Game over! - Total score: ${game.score}`
  }
  // C -> C -> C
  if (currentInput.toLowerCase() === game.choices.c && game.choices.counter === 2 && game.choices.firstChoice === game.choices.c && game.choices.secondChoice === game.choices.c) {
    game.setText(`Oily Bodybuilder: "I won't let you escape!<br><br>He proceeds to give ${game.playerName} an oily, naked bear hug and ${game.playerName} sees himself eventually falling in love with the Oily Bodybuilder, spending the rest of his days in his strong, and constantly, heavily oiled arms`)
    game.gameOver()
    game.increaseScore(100)
    return `Game over! - Total score: 100`
  }
  // C -> D
  if (currentInput.toLowerCase() === game.choices.d && game.choices.counter === 1 && game.choices.firstChoice === game.choices.c) {
    game.choices.counter--
    game.resetInput()
    game.setText(`You return to the start of your journey`)
    return `A - Sneak through the tall grass\nB - Enter the forest\nC - Explore the Lake`
  }
}