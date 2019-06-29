//initialize weapon objects
var fists = {
  damage: 11,
}
var hammer = {
  damage: 21,
}
var blade = {
  damage: 31,
}
var gun = {
  damage: 41,
}
var weaponArray = [
  hammer = {
    damage: 21,
  },
  blade = {
    damage: 31,
  },
  gun = {
    damage: 41,
  }
]

function weaponPicked(){
  return weaponArray[Math.floor(Math.random()*weaponArray.length)];
}

//initialize player info and set default weapon to fists
var player = {
  health:100,
  weapon: fists,
  target: null,
  settarget: function(enemy){
    this.target = enemy;
  },
  fight: function(){
    var damage = Math.floor(Math.random()*this.weapon.damage);
    console.log(`player did ${damage} damage!`);
    this.target.health -= damage;
    console.log(`enemy has ${this.target.health} health left!`);
  },
  pickUpWeapon: function (item){
    this.weapon = item;
  }
}

//initialize enemies for game
var enemyGoon = {
  health:100,
  fight: function(){
    var damage = Math.floor(Math.random()*11);
    console.log(`enemy did ${damage} damage!`);
    player.health -= damage;
    console.log(`player has ${player.health} health left!`);
  },
}

var enemyBoss = {
  health:120,
  fight: function(){
    var damage = Math.floor(Math.random()*21);
    console.log(`enemy boss did ${damage} damage!`);
    player.health -= damage;
    console.log(`player has ${player.health} health left!`);
  },
}
//set enemies to array for scenario base adventure //
var enemyArray = [enemyGoon, enemyBoss];

//initialize battle proceedings
function battleOutcome (){
  //assign enemy to fight
  var enemy = null;
  var i = 0

  while (enemyArray[0] != undefined){
    enemy = enemyArray[0];
    player.settarget(enemy);
    while (player.health > 0 && enemy.health > 0){
      if (player.health > 0){
        player.fight();
      }
      if (enemy.health > 0){
        enemy.fight();
      }
    }
    if (player.health > enemy.health){
      console.log("player wins!")
      enemyArray.shift();
      enemy.health = 100;
    }else{
      console.log("enemy wins!")
      break;
    }
  }
}

//initialize scenario objects and array
var scenario = [
  // {
  //   story: "You find yourself in a room with a painting of a butterfly on the wall. There are two doors to your left and right. What do you do?",
  //   option: [
  //     {interact: "Spit at the painting because you hate butterflies.",
  //     response: "alert(`You are a terrible person!`)"},
  //     {traverse: "Take the left door.",
  //     response: "response()"},
  //     {traverse: "Take the right door.",
  //     response: "response()"},
  //   ]
  //
  // },
  {
    story: "You feel hot in the room. The room is rapidly heating up. What do you do?",
    option:[
      {interact: "Do a sexy dance in the hope that a genie will appear.",
      response: "response()"},
      {interact: "Take a swig of water left suspiciously in the middle of the room.",
      response: "response()"},
      {traverse: "Exit a door that is on the left of the room",
      response: "response()"},
    ]
  },
  {
    story: "Bam! You feel your head getting smacked by something.",
    option:[
      {fight: "Fight the enemy!",
      response: "response()"},
      {traverse: "Use the door on your left.",
      response: "response()"},
    ]
  },
  {
    story: "There's a weapon on the shelf that is in the middle of two doors! I'd suggest you take it first!",
    option: [
      {interact: "Take weapon.",
      response: "player.pickUpWeapon(weaponPicked())"},
      {traverse: "Take the left door.",
      response: "response()"},
      {traverse: "Take the right door.",
      response: "response()"},
    ]
  },
  {
    story: "You see fairy dust floating around as you enter the room. In the middle of a room lies a glowing orb with a sign that says Do Not Touch. What do you do?",
    option:[
      {interact: "Touch the orb.",
      response: "response()"},
      {interact: "Try to catch some fairy dust.",
      response: "response()"},
      {traverse: "Go through a door on the other side of the room.",
      response: "response()"},
    ]
  },
  {
    story: "You are in a room filled with books. The place looks dusty and it looks like someone left their burrito lying in the corner of the room.",
    option:[
      {interact: "Taste the burrito.",
      response: "response()"},
      {interact: "Eat the burrito.",
      response: "response()"},
      {interact: "Read one of the books.",
      response: "response()"},
      {traverse: "Step over the stale burrito and into a small door",
      response: "response()"},
    ]
  },
  {
    story: "There are several flies hovering around the body that you see lying in the middle of the room.",
    option:[
      {interact: "Search the body.",
      response: "response()"},
      {interact: "Smell the body.",
      response: "response()"},
      {traverse: "Take the door across the room.",
      response: "response()"},
    ]
  },
  {
    story: "You find yourself in danger as someone... or something tries to get at you.",
    option:[
      {fight: "Fight the enemy.",
      response: "response()"},
      {traverse: "Use the door across the room.",
      response: "response()"},
    ]
  },
  {
    story: "This room is strange. You must wonder what is a well doing in the middle of the room.",
    option:[
      {interact: "Throw a coin down the well.",
      response: "response()"},
      {interact: "Draw some water from the well and drink it.",
      response: "response()"},
      {interact: "Relieve yourself into the well.",
      response: "response()"},
      {traverse: "Use the trap door located conveniently next to the sign that says trap door",
      response: "response()"},
    ]
  }
];

var backPedal = [];
var storySelect = null;
var battleStatus = 0;
var optionNode = document.getElementById("optionbox");
var storyNode = document.getElementById("storycontainer");
document.getElementById("startadventure").style.visibility = "hidden";
//initialize game
function setName(){
  var input = document.getElementById("setname").value;
  document.getElementById("nameinput").style.visibility = "hidden";
  document.getElementById("storytext").innerHTML = `${input}!!! This adventure is fraught with perils. Press start to commence your adventure of a life time!`;
  document.getElementById("startadventure").style.visibility = "visible";
}

function startAdventure(){
  loadPlayer();
  loadStory();
  document.getElementById("startadventure").style.visibility = "hidden";

}

function loadPlayer(){
  var health = player.health;
  var healthInfo = document.createElement("p");
  healthInfo.textContent = `Your health level is: ${health}`;
  document.getElementById("statbox").appendChild(healthInfo);
  //var weapon = player.weapon;
  // //console.log(weapon);
  // // var weaponInfo = document.createElement("p");
  // // weaponInfo.textContent = weapon;
  // // var weaponStr = "Your current weapon is: "+ weapon;

  // // document.getElementById("statbox").appendChild(weapon);
}

//function to load random player story and option choices
function loadStory(){
  storySelect = Math.floor(Math.random()*scenario.length);
  document.getElementById("storycontainer").textContent = scenario[storySelect]["story"];
  //creating interact, fight and traverse options
  for (var i = 0; i < scenario[storySelect]["option"].length; i++){
    var btn = document.createElement("button");
    var para = document.createElement("p");

    if (hasOwnProperty.call(scenario[storySelect]["option"][i], "fight")){
      btn.setAttribute("onClick","fight()");
      btn.setAttribute("display", "block");
      btn.setAttribute("class", "options");
      btn.setAttribute("id", "fightbtn");
      btn.textContent = "Fight!";
      document.getElementById("optionbox").appendChild(btn);
      battleStatus = 1;
      break;
    }else if (hasOwnProperty.call(scenario[storySelect]["option"][i], "interact")){
      btn.setAttribute("onClick",scenario[storySelect]["option"][i]["response"]);
      btn.setAttribute("display", "block");
      btn.setAttribute("class", "options");
      btn.textContent = "Interact!";
      para.setAttribute("class", "options");
      para.textContent = scenario[storySelect]["option"][i]["interact"];
      document.getElementById("optionbox").appendChild(btn);
      document.getElementById("optionbox").appendChild(para);
    } else if (hasOwnProperty.call(scenario[storySelect]["option"][i], "traverse")){
      btn.setAttribute("onClick", "travel()");
      btn.setAttribute("display", "block");
      btn.setAttribute("class", "options");
      btn.textContent = "Travel!";
      para.setAttribute("class", "options");
      para.textContent = scenario[storySelect]["option"][i]["traverse"];
      document.getElementById("optionbox").appendChild(btn);
      document.getElementById("optionbox").appendChild(para);
    }
  }
  if (backPedal[backPedal.length-1] != undefined && battleStatus === 0){
    var backbtn = document.createElement("button");
    backbtn.setAttribute("onClick","goBack()");
    backbtn.setAttribute("display", "block");
    backbtn.setAttribute("class", "options");
    backbtn.textContent = "Go back!";
    document.getElementById("optionbox").appendChild(backbtn);
  }
  console.log(backPedal);
}
//fight function whenever user encounters a battle, go back button is disabled to prevent escape
function fight(){
  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  var fightbtn = document.createElement("button");
  fightbtn.textContent = "Attack!";
  fightbtn.setAttribute("onClick", "battle()");
  document.getElementById("optionbox").appendChild(fightbtn);
}

function battle(){
  enemy = enemyArray[0];
  player.settarget(enemy);
  if (player.health > 0){
    player.fight();
    updateEnemyHealth();
  }
  if (enemy.health > 0){
    enemy.fight();
    updatePlayerHealth();
  }
  if (player.health < 0){
    console.log("enemy wins!")
  }else if (enemy.health < 0){
    enemyArray.shift();
    enemy.health = 100;
    console.log("player wins!")
  }
}



//function to allow user to go back to previous room
function goBack(){
  console.log("goBack function called")
  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  while (storyNode.firstChild) {
    storyNode.removeChild(storyNode.firstChild);
  };
  document.getElementById("storycontainer").textContent = backPedal[backPedal.length-1]["story"];
  if (backPedal[backPedal.length-1] != undefined){
    for (var i = 0; i < backPedal[backPedal.length-1]["option"].length; i++){
      var btn = document.createElement("button");
      var para = document.createElement("p");

      if (hasOwnProperty.call(backPedal[backPedal.length-1]["option"][i], "fight")){
        btn.setAttribute("onClick","fight()");
        btn.setAttribute("display", "block");
        btn.setAttribute("class", "options");
        btn.textContent = "Fight!";
        document.getElementById("optionbox").appendChild(btn);
        break;
      }else if (hasOwnProperty.call(backPedal[backPedal.length-1]["option"][i], "interact")){
        btn.setAttribute("onClick",backPedal[backPedal.length-1]["option"][i]["response"]);
        btn.setAttribute("display", "block");
        btn.setAttribute("class", "options");
        btn.textContent = "Interact!";
        para.setAttribute("class", "options");
        para.textContent = backPedal[backPedal.length-1]["option"][i]["interact"];
        document.getElementById("optionbox").appendChild(btn);
        document.getElementById("optionbox").appendChild(para);
      } else if (hasOwnProperty.call(backPedal[backPedal.length-1]["option"][i], "traverse")){
        btn.setAttribute("onClick", "travel()");
        btn.setAttribute("display", "block");
        btn.setAttribute("class", "options");
        btn.textContent = "Travel!";
        para.setAttribute("class", "options");
        para.textContent = backPedal[backPedal.length-1]["option"][i]["traverse"];
        document.getElementById("optionbox").appendChild(btn);
        document.getElementById("optionbox").appendChild(para);
      }
    }
  }
  backPedal.pop();
}

function travel(){
  while (optionNode.firstChild) {
    optionNode.removeChild(optionNode.firstChild);
  };
  while (storyNode.firstChild) {
    storyNode.removeChild(storyNode.firstChild);
  };
  backPedal = scenario.splice([storySelect], 1);
  loadStory();
}


// function loadMain(){
//     if (hasOwnProperty.call(scenario[storySelect]["option"][i], "interact")){
//       btn.setAttribute("onClick",scenario[storySelect]["option"][i]["response"]);
//       btn.setAttribute("display", "block");
//       btn.setAttribute("class", "options");
//       btn.textContent = "Interact!";
//       para.setAttribute("class", "options");
//       para.textContent = scenario[storySelect]["option"][i]["interact"];
//       document.getElementById("optionbox").appendChild(btn);
//       document.getElementById("optionbox").appendChild(para);
//     } else if (hasOwnProperty.call(scenario[storySelect]["option"][i], "traverse")){
//       btn.setAttribute("onClick","travel()");
//       btn.setAttribute("display", "block");
//       btn.setAttribute("class", "options");
//       btn.textContent = "Travel!";
//       para.setAttribute("class", "options");
//       para.textContent = scenario[storySelect]["option"][i]["traverse"];
//       document.getElementById("optionbox").appendChild(btn);
//       document.getElementById("optionbox").appendChild(para);
//     }
// }







function response (){
  console.log("response function called")
}
