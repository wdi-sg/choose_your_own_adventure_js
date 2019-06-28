//initialize weapon objects
var fists = {
  damage: 10,
}
var hammer = {
  damage: 21,
}
var blade = {
  damage: 41,
}
var gun = {
  damage: 81,
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
function fightBattle (){
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
  {
    story: "You find yourself in a room with a painting of a butterfly on the wall. There are two doors to your left and right. What do you do?",
    option: [
      {option: "Spit at the painting because you hate butterflies.",
      response: "alert(`You are a terrible person!`)"},
      {option: "Take the left door.",
      response: "response()"},
      {option: "Take the right door.",
      response: "response()"},
      {option: "Go back.",
      response: "goBack()"},
    ]

  },
  // {
  //   story: "You feel hot as you enter the room. The room is rapidly heating up. What do you do?",
  //   option:[
  //     {option: "Do a sexy dance in the hope that a genie will appear.",
  //     response: "response()"},
  //     {option: "Take a swig of water left suspiciously in the middle of the room.",
  //     response: "response()"},
  //     {option: "Go back.",
  //     response: "goBack()"},
  //   ]
  // },
  // {
  //   story: "Bam! You feel your head getting smacked by something.",
  //   option:[
  //     {option: "Fight the enemy!",
  //     response: "response()"},
  //     {option: "Use the door on your left.",
  //     response: "response()"},
  //     {option: "Go back.",
  //     response: "goBack()"},
  //   ]
  // },
  // {
  //   story: "There's a weapon on the shelf that is in the middle of two doors! I'd suggest you take it first!",
  //   option: [
  //     {option: "Take weapon.",
  //     response: "response()"},
  //     {option: "Take the left door.",
  //     response: "response()"},
  //     {option: "Take the right door.",
  //     response: "response()"},
  //     {option: "Go back.",
  //     response: "goBack()"},
  //   ]
  // },
  // {
  //   story: "You see fairy dust floating around as you enter the room. In the middle of a room lies a glowing orb with a sign that says Do Not Touch. What do you do?",
  //   option:[
  //     {option: "Touch the orb.",
  //     response: "response()"},
  //     {option: "Try to catch some fairy dust.",
  //     response: "response()"},
  //     {option: "Go through a door that suddenly appeared on the other side of the room. The door behind you has disappeared.",
  //     response: "response()"},
  //   ]
  // },
  // {
  //   story: "You come to a room filled with books. The place looks dusty and it looks like someone left their burrito lying in the corner of the room.",
  //   option:[
  //     {option: "Taste the burrito.",
  //     response: "response()"},
  //     {option: "Eat the burrito.",
  //     response: "response()"},
  //     {option: "Read one of the books.",
  //     response: "response()"},
  //     {option: "Go back.",
  //     response: "goBack()"},
  //   ]
  // },
  // {
  //   story: "There are several flies hovering around the body that you see lying in the middle of the room.",
  //   option:[
  //     {option: "Search the body.",
  //     response: "response()"},
  //     {option: "Smell the body.",
  //     response: "response()"},
  //     {option: "Take the door across the room.",
  //     response: "response()"},
  //     {option: "Go back.",
  //     response: "goBack()"},
  //   ]
  // },
  // {
  //   story: "You find yourself falling down as someone... or something tried to get at you.",
  //   option:[
  //     {option: "Fight the enemy.",
  //     response: "response()"},
  //     {option: "Use the door across the room.",
  //     response: "response()"},
  //     {option: "Go back.",
  //     response: "goBack()"},
  //   ]
  // },
  // {
  //   story: "This room is strange. You must wonder what is a well doing in the middle of the room.",
  //   option:[
  //     {option: "Throw a coin down the well.",
  //     response: "response()"},
  //     {option: "Draw some water from the well and drink it.",
  //     response: "response()"},
  //     {option: "Relieve yourself into the well.",
  //     response: "response()"},
  //     {option: "Go back.",
  //     response: "goBack()"},
  //   ]
  // }
];

var backPedal = [];
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

function loadStory(){
  var storySelect = Math.floor(Math.random()*scenario.length);
  document.getElementById("storytext").textContent = scenario[storySelect]["story"];
  for (var i = 0; i < scenario[storySelect]["option"].length; i++){
    var btn = document.createElement("button");
    btn.setAttribute("onClick",scenario[storySelect]["option"][i]["response"]);
    btn.setAttribute("height", "100px");
    btn.setAttribute("width", "100px");
    btn.setAttribute("display", "block");
    btn.setAttribute("class", "options");
    btn.textContent = "Choose Me!";
    var para = document.createElement("p");
    para.setAttribute("class", "options");
    para.textContent = scenario[storySelect]["option"][i]["option"];
    document.getElementById("optionbox").appendChild(para);
    document.getElementById("optionbox").appendChild(btn);
  };
  backPedal.push(scenario[storySelect]);
  console.log(backPedal);
  console.log(scenario[storySelect])
}

function goBack(){
  if (backPedal[0] != undefined){
    
  }
}

function response (){
  console.log("response function called")
}
function goBack (){
  console.log("goBack function called")
}
