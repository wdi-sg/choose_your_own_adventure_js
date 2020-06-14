var playerScore = 0;
var playerName = prompt("PLease enter your name", "McNaught");
var timeLeft = 10;
var optimism = 5;
var currentLocation = 'Deck';



//-------------------------------------- DOM -----------------------------------------

let input = document.getElementById('input');
let output = document.getElementById('output');
let runningText = document.getElementById('running-text');


input.addEventListener('keypress', function(x) {
    if (x.key === 'Enter') {

      //legwork for navigate()
      let arr = places[currentLocation][0].Navigation; 
      let initialsOfRooms = arr.map(x => x.match(/[A-Z]/g).join('').toLowerCase());
      
      // legwork for action()
      let arr2 = places[currentLocation][0].Actions[0]; //shows Actions {}
      let keyActions = null; //shows props []
      if (arr2) {
        keyActions = Object.keys(arr2);
      }

      if (input.value === 'navigate') {
        navigationCheck();
      }
      else if (initialsOfRooms.includes(input.value)) { //when navigating to another room
        navigate(input.value);
      }
      else if (keyActions !== null && keyActions.includes(input.value)) {
        action(input.value);
      }
      else if (input.value === 'status') {
        status();
      }
      else if (input.value === 'help') {
        help();
      }
      input.value = '';
    }
});


//------------------------------------- FUNCTIONS -------------------------------------

let places = {
  'Deck': [{
    'Navigation': ['Engineering Bay', 'Commander\'s Office', 'Kitchen', 'Command Center'],
    'Outcomes': [
      `You could stare out of the great oval port, while the heavens crawl slowly around you and the ship turns over and over with a residual spin the engineers had never bothered to correct.`,
      `Time is ticking. The ship will make its leap soon. Where you should you go next?`,
      `What in Neptune's name is this stupid 'off-og'! Perhaps you should go to the kitchen to ask Blanchard as Harold told you to.`
    ],
    'Outcomes2': [],
    'Outcomes3': [],
    'Actions': [],
    'History': []
  }],

  'Engineering Bay': [{
    'Navigation': ['Deck', 'Engine Room'],
    'Outcomes': [
      `The technicians are hard at work; preparing the machine for the timeleap. With patches of soot on their overalls and face, they glance up to see who it is. You see Harold over at the photo-nuclear lightbomb machine -- you've spoken to him once over lunch. Perhaps you can ask him about the off-og. Type "ask". Or, you could do some snooping around on your own. Type "search".`
    ],
    'Outcomes2': [],
    'Outcomes3': [],
    'Actions': [{
      'ask': [`Harold notices you approaching him and looks up. "${playerName} right?", he pulls up his visor. You ask him about the 'off-og' and he tells you that the French chef Blanchard may know a thing or two.`, 'optimism++'],
      'search': [`It\'s too dangerous to be snooping around here`]
    }],
    'History': []
  }],

  'Kitchen': [{
    'Navigation': ['Deck', 'Crew Quarters'],
    'Outcomes': [
      `Everyone in the kitchen is busy preparing meals for before the timeleap. The leap itself, though quick, can make you feel quite hungry afterwards.`
    ],
    'Outcomes2': [
      `You see Blanchard ordering people around. Type "ask" to ask him about the off-og.`
    ],
    'Outcomes3': [
      `"Nom d'un chien!" ejaculated Blanchard, waving his arms around. "I tell you ten t'ousand time zere is no offog. Zere never was an offog. Escoffier heemself could not find zee offog of vich zere is none. Am I a magician perhaps?"`,
      `"I signed for nossings called offog," Blanchard denied. "In the cuisine zere is no such sing."`,
      `Blanchard looked and sniffed disdainfully. "I have here zee electronic oven, one of. I have jacketed boilers, graduated capacities, one set. I have bain marie pans, seex of. But no offog. Never heard of heem. I do not know of heem."`
    ],
    'Actions': [{
      'ask': [`You ask the chef Blanchard if he knows what an offog is. "I signed for nossings called offog," Blanchard denied. "In the cuisine zere is no such sing."`, 'optimism--']
    }],
    'History': []
  }], 

  'Command Center': [{
    'Navigation': ['Deck'],
    'Outcomes': [],
    'Outcomes2': [],
    'Outcomes3': [],
    'Actions': [],
    'History': []
  }], 

  'Crew Quarters': [{
    'Navigation': ['Kitchen'],
    'Outcomes': [],
    'Outcomes2': [],
    'Outcomes3': [],
    'Actions': [],
    'History': []
  }], 

  'Engine Room': [{
    'Navigation': ['Engineering Bay'],
    'Outcomes': [],
    'Outcomes2': [],
    'Outcomes3': [],
    'Actions': [],
    'History': []
  }], 

  'Commander\'s Office': [{
    'Navigation': ['Deck'],
    'Outcomes': [],
    'Outcomes2': [],
    'Outcomes3': [],
    'Actions': [],
    'History': []
  }]
}



function navigationCheck() {
  let placeTemp = places[currentLocation][0].Navigation;
  newPara(`> NAVIGATE: ${placeTemp.map(x => ' ' + x)}  ||  You are at: ${currentLocation}`)
}



function navigate(x) {
  let arr = places[currentLocation][0].Navigation;
  let initialsOfRooms = arr
    .map(x => x.match(/[A-Z]/g)
    .join('')
    .toLowerCase());
  currentLocation = arr[initialsOfRooms.indexOf(x)];

  if (currentLocation === 'Kitchen' && places.Kitchen[0].History.includes('ask')) {
    newPara(`> ${currentLocation}: ${places[currentLocation][0].Outcomes3[Math.floor(Math.random()*places[currentLocation][0].Outcomes3.length)]}`);
  }
  else if (currentLocation === 'Kitchen' && places['Engineering Bay'][0].History.includes('ask')) {
    newPara(`> ${currentLocation}: ${places[currentLocation][0].Outcomes2[Math.floor(Math.random()*places[currentLocation][0].Outcomes2.length)]}`);
  }
  else {
    newPara(`> ${currentLocation}: ${places[currentLocation][0].Outcomes[Math.floor(Math.random()*places[currentLocation][0].Outcomes.length)]}`);
  }
  timeLeft--;
  showTimeLeft();
}

places['Engineering Bay'][0].History.push('hi')
console.log(places['Engineering Bay'][0].History);


function showTimeLeft() {
  if (timeLeft == 5) {
    return newPara(`WARNING: Only 5 hours remain. Better hurry and report back to the inspector!`)
  }
  if (timeLeft == 0) {
    input.remove();
    function alertLose() {
      alert('Whoops. You ran out of time.'); 
    }
    setTimeout(alertLose, 1000);
  }
}


function action(x) {
  places[currentLocation][0].History.push(x);
  if (places[currentLocation][0].Actions[0][x][1] === 'optimism++') optimism++;
  else if (places[currentLocation][0].Actions[0][x][1] === 'optimism--') optimism--;
  newPara(`> ${places[currentLocation][0].Actions[0][x][0]}`);
}


function help() {
  newPara(`> HELP: To see where you can go, type "navigate" and to go to a room, type the initials. For example, to go to the Engineering Bay, type: "eb". Also remember to check on the hours left with "status".`)
}


function status() {
  newPara(`> STATUS: Time left: ${timeLeft} hours, Optimism: ${optimism}`);
}


function newPara(x) {
  var newPara = document.createElement('p');
  newPara.innerText = x;
  runningText.appendChild(newPara);
}


