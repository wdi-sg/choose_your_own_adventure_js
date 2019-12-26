console.log('hello script js')

// Check to see if the user is ready
setTimeout(function () {
  window.confirm("The TARDIS materialized right before you eyes and the door creaked open. Which Doctor will it be this time? 11th, 12th or 13th?")
}, 1000)
var output;
var inputHappened = function (currentInput) {
  var doctorChoice = [11, 12, 13];
  var planetChoice = ["Skaros", "Mondas", "Earth"];
  var monsterChoice = ["Daleks", "Cybermen", "Mutant Spiders"];
  var toolChoice = ["Sonic Screwdriver", "Boombox", "Gun"];

  if (currentInput == doctorChoice[0]) {
          output = "Want some fish fingers and custard? Pick a planet - Skaros, Mondas, or Earth?"
        console.log(output);{
          if (currentInput == planetChoice[0]) {
            output = "You are an ambitious one! There will be danger. They come in so many forms. You get to pick. Daleks. Cybermen, or Mutant Spiders?" 
            console.log(output);
            if (currentInput == monsterChoice[0]) {
              output = "Bow ties are cool, but we'll need some tools! Sonic Screwdriver, a boombox or a gun?"
              console.log(output)
                      if (currentInput == toolChoice[0]) {
                output = 'Yes! You saved the day!'
                console.log(output)
              }//closes doctorChoice1 to planet1 to monster1 to Tool1
              else if (currentInput == toolChoice[1]) {
                output = "Interesting Choice but it's not strong enough!"
                console.log(output)
              }//closes doctorChoice1 to planet1 to monster1 to Tool2
              else { currentInput == toolChoice[2];// tool choice is gun
                output = "You know I don't use guns! Get off my TARDIS!"
              }//closes doctorChoice1 to planet1 to monster1 to Tool3
           }//closes doctorChoice1 to planet1 to monster 1 
      else if (currentInput == monsterChoice[1]) {
        output = "They delete people like you! Pick a Tool: Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice1 to planet1 to monster2 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice1 to planet1 to monster2 to Tool2
        else {// tool choice is gun
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice1 to planet1 to monster2 to Tool3
      }// closes doctorChoice 1 to planet1 to monster 2
      else {// Monster Choice = Mutant Spiders
        output = "Big and hairy! Which tool is best: Sonic Screwdriver, a boombox or a gun?"
        if (currentInput== 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice1 to planet1 to monster3 to Tool1
        else if (currentInput== 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice1 to planet1 to monster3 to Tool2
        else {// tool choice is gun
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice1 to planet1 to monster3 to Tool3
      }//closes doctorChoice 1 to planet1 to monster3
    } //closes doctorChoice 1 to planet1
    else if (planetChoice == 'Skaros') {
      output = "You are brave! There will be danger. They come in so many forms. You get to pick. Daleks. Cybermen, or Mutant Spiders?"
      if (monsterChoice == monsterChoice[0]) {
        output = "Eeew! We need some tools!Pick a Tool: Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == toolChoice[0]) {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 1 to planet2 to monster1 to Tool1
        else if (currentInput == toolChoice[1]) {
          output = "Interesting Choice but it is not strong enough!"
        }//closes doctorChoice 1 to planet2 to monster1 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 1 to planet2 to monster1 to Tool3
      }//closes doctorChoice 1 to planet2 to monster1
      else if (monsterChoice == monsterChoice[1]) {
        output = "Eeew! We need some tools!Pick a Tool: Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == toolChoice[0]) {
          output = 'Yes! You saved the day!'
        }//closes currentInput == "toolChoice[1]") {
        output = 'Interesting Choice but it is not strong enough!'
      }//closes doctorChoice 1 to planet2 to monster2 to Tool2
      else {
        output = 'You know I will never touch a gun! Get off my TARDIS!'
      }//closes doctorChoice 1 to planet2 to monster2 to Tool3
      //closes doctorChoice 1 to planet 2 to monster2
    } else {// monster choice 3
      output = "Eeew! We need some tools! Sonic Screwdriver, a boombox or a gun?"
      if (currentInput == toolChoice[0]) {
        output = "Interesting Choice but it makes them angry! We're caught in a web!"
      }//closes doctorChoice 1 to planet2 to monster3 to Tool1
      else if (currentInput == toolChoice[1]) {
        output = 'Yes! You saved the day!'
      }//closes doctorChoice 1 to planet2 to monster3 to Tool2
      else { currentInput == toolChoice[2];
        output = "You know I will never touch a gun! Get off my TARDIS!"
      }//closes doctorChoice 1 to planet2 to monster3 to Tool3
    }//closes doctorChoice 1 to planet2 to monster3
  }//closes doctorChoice 1 to planet2

  if (currentInput == planetChoice[3]){// planet choice = Earth
    output = "Earth is defended! Let's fight some Monsters. There are so many, you get to pick. Daleks. Cybermen, or Mutant Spiders?"
    if (currentInput== monsterChoice[0]) {
      output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
      if (currentInput == toolChoice[0]) {
        output = 'Yes! You saved the day!'
      }//closes doctorChoice 1 to planet3 to monster1 to Tool1
      else if (currentInput == toolChoice[1]) {
        output = 'Interesting Choice but it is not strong enough!'
      }//closes doctorChoice 1 to planet3 to monster1 to Tool2
      else {
        output = 'You know I will never touch a gun! Get off my TARDIS!'
      }//closes doctorChoice 1 to planet3 to monster1 to Tool3
    }//closes doctorChoice 1 to planet3 to monster1
    else if (currentInput== monsterChoice[1]) {
      output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
      if (currentInput == toolChoice[0]) {
        output = 'Yes! You saved the day!'
      }//closes doctorChoice 1 to planet3 to monster2 to Tool1
      else if (currentInput == toolChoice[1]) {
        output = 'Interesting Choice but it is not strong enough!'
      }//closes doctorChoice 1 to planet3 to monster2 to Tool2
      else {
        output = 'You know I will never touch a gun! Get off my TARDIS!'
      }//closes doctorChoice 1 to planet3 to monster2 to Tool3
    }//closes doctorChoice 1 to planet3 to monster2
    else {//monsterChoice3
      output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
      if (currentInput == toolChoice[0]) {
        output = "Yes! You saved the day!"
      }//closes doctorChoice 1 to planet3 to monster3 to Tool1
      else if (currentInput == toolChoice[1]) {
        output = "Interesting Choice but it is not strong enough!"
      }//closes doctorChoice 1 to planet3 to monster3 to Tool2
      else {
        output = "You know I will never touch a gun! Get off my TARDIS!"
      }//closes doctorChoice 1 to planet3 to monster3 to Tool3
    } //closes doctorChoice1 to planet 3 to monster 3
  }//closes doctorChoice1 to planet 3
}

  if (currentInput == doctorChoice[1]) {
    output = "You picked me for my eyebrows. Now pick a planet - Skaros, Mondas, or Earth?"
    if (planetChoice == "Earth") {
      output = "Great Choice! We need to fight some Monsters. There are so many, you get to pick. Daleks. Cybermen, or Mutant Spiders?"
      if (currentInput== "monsterChoice[0]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice2 to planet1 to monster 1 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice2 to planet1 to monster1 to Tool2
        else {// tool choice is gun
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice2 to planet1 to monster1 to Tool3
      }//closes doctorChoice2 to planet1 to monster 1
      else if (currentInput== "monsterChoice[1]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice2 to planet1 to monster2 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice2 to planet1 to monster2 to Tool2
        else {// tool choice is gun
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice2 to planet1 to monster2 to Tool3
      }// closes doctorChoice 2 to planet1 to monster 2
      else {// Monster Choice = The Master
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice2 to planet1 to monster3 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice2 to planet1 to monster3 to Tool2
        else {// tool choice is gun
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice2 to planet1 to monster3 to Tool3
      }//closes doctorChoice 2 to planet1 to monster3
    } //closes doctorChoice 2 to planet1
    else if (planetChoice == "Skaros") {
      output = "Really?! We need to fight some Monsters. There are so many, you get to pick. Daleks. Cybermen, or Mutant Spiders?"
      if (currentInput== "monsterChoice[0]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 2 to planet2 to monster1 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 2 to planet2 to monster1 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 2 to planet2 to monster1 to Tool3

      }//closes doctorChoice 2 to planet2 to monster1
      else if (currentInput== "monsterChoice[1]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 2 to planet2 to monster2 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 2 to planet2 to monster2 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 2 to planet2 to monster2 to Tool3
      } else {// monster choice The Master
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 2 to planet2 to monster3 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 1 to planet2 to monster3 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 2 to planet2 to monster3 to Tool3
      }//closes doctorChoice 2 to planet2 to monster3
    }//closes doctorChoice 2 to planet2
    else {// planet choice = Tyop
      output = "Really?! We need to fight some Monsters. There are so many, you get to pick. Daleks. Cybermen, or Mutant Spiders?"
      if (currentInput== "monsterChoice[0]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 2 to planet3 to monster1 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 2 to planet3 to monster1 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 2 to planet3 to monster1 to Tool3

      }//closes doctorChoice 2 to planet3 to monster1
      else if (currentInput== "monsterChoice[1]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 2 to planet3 to monster2 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 2 to planet3 to monster2 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 2 to planet3 to monster2 to Tool3
      }//closes doctorChoice 2 to planet3 to monster2
      else {//currentInput= The Master
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 2 to planet3 to monster3 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 2 to planet3 to monster3 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 2 to planet3 to monster3 to Tool3
      }//closes doctorChoice 2 to planet 3 to monster3
    } //closes doctorChoice2 to planet 3

  } //closes doctorChoice2
// doctorChoice3
  if (currentInput == doctorChoice[2]) {
    output = "Reverse the polarity! Pick a planet - Skaros, Mondas, or Earth?"
    if (planetChoice == "Earth") {
      output = "Really?! We need to fight some Monsters. There are so many, you get to pick. Daleks. Cybermen, or Mutant Spiders?"
      if (currentInput== "monsterChoice[0]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice3 to planet1 to monster 1 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice3 to planet1 to monster1 to Tool2
        else {// tool choice is gun
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice3 to planet1 to monster1 to Tool3
      }//closes doctorChoice3 to planet1 to monster 1
      else if (currentInput== "monsterChoice[1]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice3 to planet1 to monster2 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice3 to planet1 to monster2 to Tool2
        else {// tool choice is gun
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice3 to planet1 to monster2 to Tool3
      }// closes doctorChoice 3 to planet1 to monster 2
      else {// Monster Choice = The Master
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice3 to planet1 to monster3 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice3 to planet1 to monster3 to Tool2
        else {// tool choice is gun
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice3 to planet1 to monster3 to Tool3
      }//closes doctorChoice 3 to planet1 to monster3
    } //closes doctorChoice 3 to planet1
    else if (planetChoice == "Skaros") {
      output = "Really?! We need to fight some Monsters. There are so many, you get to pick. Daleks. Cybermen, or Mutant Spiders?"
      if (currentInput== "monsterChoice[0]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 3 to planet2 to monster1 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 3 to planet2 to monster1 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 3 to planet2 to monster1 to Tool3

      }//closes doctorChoice 3 to planet2 to monster1
      else if (currentInput== "monsterChoice[1]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 3 to planet2 to monster2 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 3 to planet2 to monster2 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 3 to planet2 to monster2 to Tool3
      } else {// monster choice The Master
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 3 to planet2 to monster3 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 3 to planet2 to monster3 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 3 to planet2 to monster3 to Tool3
      }//closes doctorChoice 3 to planet2 to monster3
    }//closes doctorChoice 3 to planet2
    else {// planet choice = Tyop
      output = "Really?! We need to fight some Monsters. There are so many, you get to pick. Daleks. Cybermen, or Mutant Spiders?"
      if (currentInput== "monsterChoice[0]") {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 3 to planet3 to monster1 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 3 to planet3 to monster1 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 3 to planet3 to monster1 to Tool3

      }//closes doctorChoice 3 to planet3 to monster1
      else if (currentInput== 'monsterChoice[1]') {
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 3 to planet3 to monster2 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 3 to planet3 to monster2 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 3 to planet3 to monster2 to Tool3
      }//closes doctorChoice 3 to planet3 to monster2
      else {//currentInput= The Master
        output = "Eeew! We need some tools! We need some tools! Sonic Screwdriver, a boombox or a gun?"
        if (currentInput == 'toolChoice[0]') {
          output = 'Yes! You saved the day!'
        }//closes doctorChoice 3 to planet3 to monster3 to Tool1
        else if (currentInput == 'toolChoice[1]') {
          output = 'Interesting Choice but it\'s not strong enough!'
        }//closes doctorChoice 3 to planet3 to monster3 to Tool2
        else {
          output = 'You know I will never touch a gun! Get off my TARDIS!'
        }//closes doctorChoice 3 to planet3 to monster3 to Tool3
      }//closes doctorChoice 3 to planet 3 to monster3
    } //closes doctorChoice3 to planet 3
    //closes doctorChoice3

      } //closes doctorChoice3
}  //closes function