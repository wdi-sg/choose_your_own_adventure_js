console.log("hello script js");
// global variables
var name = "";
var score = 0;
var storyCount = 0;
var health = 100;
var output = "";
//character object to store data
var yourWeapon = ;
var randomNum = 0;
var randomNPC = 0; 
var randomWeapon = 0;

var npcDescriptionMale = [
  "This composed man has almond-shaped brown eyes that are like two patches of dried blood. His luxurious, curly, milky-white hair is worn in a style that reminds you of a cascading waterfall. He is very tall and has a masculine build. His skin is chocolate-brown. He has a wide forehead. His wardrobe is businesslike and utilitarian, with a mostly gray color scheme.", 

  "This guy puts you in mind of an inhuman statue. He has hooded brown eyes that are like two splotches of mud. His fine, wavy, long hair is the color of fine gold, and is worn in a handsome style. He is very tall and has a boyish build. His skin is white. He has a small nose and long-fingered hands. His wardrobe is sexy and practical, with a lot of green and yellow.",
  
  "This gentleman puts you in mind of a prowling panther. He has round eyes the color of varnished wood. His luxurious, curly, black hair is short and is worn in an artistic style. He is tall and has a thin build. His skin is dark. He has thin eyebrows. His wardrobe is sexy and flattering, with a completely brown color scheme.", 

  "This gentleman makes you think of a proud lion. He has wide black eyes that are like two spheres of night-black marble.. His silky, curly, short hair is the color of varnished wood, and is worn in a dignified, utilitarian style. He has a masculine build. His skin is chocolate-brown. He has a crooked nose. His wardrobe is no-nonsense, with a lot of blue.", 

  "This gentleman makes you think of a billowing sandstorm. He has narrow coffee-colored eyes. His silky, straight, chestnut hair is waist-length and is worn in a complex style. He is tall and has a slender build. His skin is ruddy. He has hollow cheeks and delicate ears. His wardrobe is tight, and is mostly yellow and blue.", 

  "This contemplative guy has deep-set brown eyes that are like two discs of wood. His silky, straight, plum-colored hair is worn in a style that reminds you of a cobra's hood. He is short and has a broad-shouldered build. His skin is dark. He has bushy eyebrows. His wardrobe is classy and unusual, with a lot of gray and orange.",

  "This thoughtful guy has slanted orange eyes that are like two chunks of amber. His silky, curly, red hair is worn in a style that reminds you of a peacock's tail. He has a feminine build. His skin is light-colored. He has small ears and long-fingered hands. His wardrobe is risque.",

  "This innocent gentleman has slanted gray eyes. His silky, curly, aquamarine hair is worn in a style that reminds you of a fluttering flag. He has a lean build. His skin is light-colored. He has thick eyebrows. His wardrobe is strange.",

  "This wily man has narrow white eyes. His thick, straight, medium-length hair is the color of fresh peaches, and is worn in a bizarre, carefully-crafted style. He is very tall and has a wide-chested build. His skin is black. He has full lips. His wardrobe is bizarre.",

  "This guy reminds you of a clock that can't keep proper time. He has deep-set green eyes that are like two emeralds. His fine, curly, cream-colored hair is neck-length and is worn in an utilitarian style. He is short and has a broad-shouldered build. His skin is china-white. He has a hooked nose and prominent cheekbones. His wardrobe is dignified and uncomplicated, with a lot of red and gray.",

  "This guy makes you think of a cobra waiting to strike. He has slanted brown eyes that are like two discs of wood. His silky, curly, white hair is worn in a style that reminds you of a lionfish's spines. He is short and has a graceful build. His skin is cream-colored. He has thin eyebrows and a large mouth. His wardrobe is flattering, and is completely brown."
];

var npcDescriptionFemale = [
  "This lady reminds you of an impenetrable fortress. She has hooded blue eyes that are like two lagoons. Her silky, wavy, medium-length hair is the color of bleached bone, and is worn in a simple style. She is very tall and has a wide-hipped build. Her skin is black. She has a small mouth. Her wardrobe is businesslike and flattering, with a mostly brown and yellow color scheme.", 

  "This woman puts you in mind of a dangerous spider. She has droopy gray eyes that are like two windows looking out on an overcast sky. Her fine, straight, medium-length hair is the color of black coffee, and is worn in a weird, elegant style. She is very tall and has an hourglass build. Her skin is black. She has hollow cheeks and wide feet. Her wardrobe is classy, with a lot of violet and white.", 

  "This girl makes you think of a dignified swan. She has deep-set eyes the color of the midnight sky. Her fine, wavy, orange hair is worn in a style that reminds you of a flowing stream. She is very short and has a slender build. Her skin is china-white. She has nearly-nonexistent eyebrows and long-fingered hands. Her wardrobe is revealing and simple, with a lot of black and gray. ", 

  "This sinful girl has narrow red eyes that are like two rubies. Her thick, curly, neck-length hair is the color of fine china, and is worn in an uncomplicated style. She is very short and has a lean build. Her skin is cream-colored. She has delicate ears and full lips. Her wardrobe is tight and simple, with a lot of green and violet.", 

  "This noble girl has almond-shaped ash-gray eyes. Her luxurious, wavy, medium-length hair is the color of fine gold, and is worn in an utilitarian style. She has a voluptuous build. Her skin is pale. She has prominent cheekbones. Her wardrobe is revealing, with a lot of blue.",

  "This woman puts you in mind of a randy demon. She has beady violet eyes that are like two drops of wine. Her thick, curly, brick-red hair is medium-length and is worn in a severe, uncomplicated style. She is tall and has a graceful build. Her skin is tanned. She has a hooked nose and delicate ears. Her wardrobe is classy, with a lot of yellow and orange.",

  "This lady puts you in mind of an elegant piece of art.. She has round plum-colored eyes. Her thick, straight, sky-blue hair is worn in a style that reminds you of a bird's wing. She is very short and has a plump build. Her skin is nut-brown. She has wide feet. Her wardrobe is tight.",

  "This woman puts you in mind of a vicious barracuda. She has droopy charcoal-colored eyes. Her luxurious, straight, brown hair is worn in a style that reminds you of a porcupine's quills. She is very tall and has an amazonian build. Her skin is tanned. She has a domed forehead and a weak chin. Her wardrobe is artistic, with a lot of blue.",

  "This lady puts you in mind of a brilliant inventor. She has hooded gray eyes that are like two pools of mercury. Her thick, straight, violet hair is worn in a style that reminds you of the rays of the sun. She has a busty build. Her skin is brown. She has thick eyebrows and large feet. Her wardrobe is unusual, with a lot of blue.",

  "This harried woman has almond-shaped white eyes that are like two bleached skulls. Her silky, curly, black hair is very long and is worn in an exotic, carefully-crafted style. She is very tall and has a feminine build. Her skin is deeply-tanned. She has nearly-nonexistent eyebrows. Her wardrobe is risque and elegant, with a lot of red and white."
];

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
      output = partA(currentInput);
      console.log(storyCount);
    } else if (storyCount === 3) {
      output = partB(currentInput);
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
  var randomNum = Math.floor(Math.random() * 10); 
  var randomNPC = Math.floor(Math.random() * 10);
  if (randomNum > 5){
      if (option === "A") {
        output = "You enter the room and see " + npcDescriptionMale[randomNPC] + "\n What ";
        storyCount ++;
      } else if (option === "B"){
        output = "You enter the room and see " + npcDescriptionMale[randomNPC] + "\n What ";
        storyCount ++;
      } else {
        output + "\nThis is not an option";
      }
  } else 
    if (option === "A") {
      output = "You enter the room and see " + npcDescriptionFemale[randomNPC] + "\n What ";
      storyCount ++;
    } else if (option === "B"){
      output = "You enter the room and see " + npcDescriptionFemale[randomNPC] + "\n What ";
      storyCount ++;
    } else {
      output = output + "\nThis is not an option";
    }
  }
  return output;
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



// var storyTemplateFriend = [
  
// ]

// var npc = [
//   {
//     "race": "elf",
//     "health": "50",
//     "weapon": [blade,

//     ]
//       },
//     },
//     {
//       "potions": {
//           "mana": "mana potions",
//           "health": "health potions",
//           "stamina": "stamina potions"
//       },
//     },
//     {
//       "equipments":{
//           "armor": "",
//           "pants": "",
//           "rings": [],
//           "boots": "",
//           "gloves": ""
//       }
//     }
//   ]
// };

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
