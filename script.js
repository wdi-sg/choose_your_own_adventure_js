console.log("hello script js");
// global variables
var name = "";
var score = 0;
var storyCount = 0;
var health = 100;
var output = "";

// win cases
var winEnding = ["you win a", "you win b", "you win c", "you win d", "you win e"];
//lose cases
var deadEnding = ["you're dead a", "you're dead b", "you're dead c", "you're dead d", "you're dead e"];

var inputHappened = function(currentInput){
    if (storyCount === 0){
      output = "what is your name?"
      storyCount ++;
      console.log(storyCount);
    } else if (storyCount === 1) {
      name = currentInput;
      output = "Welcome " + name + ", You wake up in a dark cave. Feeling disorientated, you look around the cave and see three tunnels. Which tunnel will you pick? (L/C/R) \n L eft \n C enter \n R ight";
      storyCount ++;
      console.log(storyCount);
    } else if (storyCount === 2) {
      output = stepA(currentInput);
      console.log(storyCount);
    } else if (storyCount === 3) {
      output = stepB(currentInput);
      console.log(storyCount);
    }
  	return output;
};

var stepA = function(option){
    switch(option) {
      case "L":
        storyCount ++;
        return "story a"
      break;
      case "C":
        storyCount ++;
        return "story b"
      break;
      case "R":
        storyCount ++;
        return "story c"
      break;
      default:
        return output + "\nThis is not an option";
    }
}

var stepB = function(option){
  switch(option) {
    case "A":
      storyCount ++;
      return "story a";
    break;
    case "B":
      storyCount ++;
      return "story b";
    break;
    case "C":
      storyCount ++;
      return "story c";
    break;
    default:
      return output + "\nThis is not an option";
  }
}
// name, world status, score(int), total score(int), health(int), damage(int),

// waking up in the middle of a dungeon, 3 door ways, which do you pick, to get out, give clues along the way
// encounter enemies, friends based on random,  

// function senarios use switch cases, make dynamic scenarios using random number generator

// combat scenarios
// treasure chests when opened give weapons, armor, potions (huge, medium, small)


// npc use objects in array
// call npc with random number generator

// player use objects from chests
// equipments use objects

// loots use chest

// when player attacks enemy and enemy attacks , damage calculator with random number based on percentage of health


var npc = {
  "name": "John Doe",
  "health": "50",
  "items": [ 
    {
      "weapons": {
        "sword": "excalibar",
        "axe": "tree splitter",
        "spear": "gae bolg",
        "bow": "heart seeker"
      },
    },
    {
      "potions": {
          "mana": "mana potions",
          "health": "health potions",
          "stamina": "stamina potions"
      },
    },
    {
      "equipments":{
          "armor": "",
          "pants": "",
          "rings": [],
          "boots": "",
          "gloves": ""
      }
    }
  ]
};

// var x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
