console.log('hello script js')

// Check to see if the user is ready
window.confirm("The TARDIS materialized right before you eyes and the door creaked open. Which Doctor will it be this time? 11th, 12th or 13th?")


var output;
var stage = 0; // set the game play level: choose doctor is stage 0; choose planet is stage 1, monster stage 2, tool stage 3
var inputHappened = function (currentInput) {
  var doctorChoice = [11, 12, 13];
  var planetChoice = ["S", "M", "E"];
  var monsterChoice = ["D", "C", "MS"];
  var toolChoice = ["S", "B", "G"];

switch (stage) {
  case 0:
    switch (parseInt(currentInput)) {

      case doctorChoice[0]:
        output = "Want some fish fingers and custard? Pick a planet - Skaros(S), Mondas(M), or Earth(E)?";
        stage += 1;
        break;
      case doctorChoice[1]:
        output = "You picked me for my eyebrows. Now pick a planet - Skaros(S), Mondas(M), or Earth(E)?";
        stage += 1;  
        break;
      case doctorChoice[2]:
        output = "Reverse the polarity! Pick a planet - Skaros(S), Mondas(M), or Earth(E)?";
        stage += 1;
        break;
      }
      break;
  case 1:
    switch (currentInput) {
      case planetChoice[0]:
        output = "You are an ambitious one! There will be danger. They come in so many forms. You get to pick. Daleks(D), Cybermen(C), or Mutant Spiders(MS)?";
        stage += 1;
        break;
      case planetChoice[1]: 
      stage += 1;  
      output = "You are brave! There will be danger. They come in so many forms. You get to pick. Daleks(D), Cybermen(C), or Mutant Spiders(MS)?";
      break;  
      case planetChoice[2]: 
      output = "Earth is defended! Let's fight some Monsters. There are so many, you get to pick. Daleks(D), Cybermen(C), or Mutant Spiders(MS)?";
      stage += 1;
      break;
      }
      break;
  case 2:
    switch (currentInput) {
      
      case monsterChoice[0]: 
        output = "We'll need some tools! Sonic Screwdriver(S), Boombox(B) or Gun(G)?";
        stage += 1;
        break;
      case monsterChoice[1]: 
      output = "They delete people like you! Pick a Tool: Sonic Screwdriver(S), Boombox(B) or Gun(G)?";
      stage += 1;
      break;  
      case monsterChoice[2]: 
        output = "Big and hairy! Which tool is best: Sonic Screwdriver(S), Boombox(B) or Gun(G)?";
        stage += 1;
        break;
      }
     break;    

  case 3:
    switch (currentInput) {

      case toolChoice[0]:
        output = "Yes! You saved the day!";
        break;
      case toolChoice[1]: 
        output = "Interesting choice but it's not strong enough!";
        break;  
      case toolChoice[2]: 
        output = "You know I don't use guns! Get off my TARDIS!";
        break;
      }
      break;  
    
    }
return output;
    
}//closes function


