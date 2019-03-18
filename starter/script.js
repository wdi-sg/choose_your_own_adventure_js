// put code here!
console.log("So it begins...");
var userName;
var askUserForName = function(){
  //userName = ''
  userName = prompt('What is your name?','random player')//.toString();
  //userName = userName.toString();
  console.log(userName);
  checkUserName();
  //return userName;
}
//NOTE: if userName is left empty, console will say that userName.toString() cannot read property toString() of null
askUserForName();
console.log('end of ask for user name');


//Confirm prompt here is a function that is defined at parse-time, so we can call the function wherever we'd like. hint: I call this function above so that a loop happens.
function checkUserName(){
if (isUserNameTrue = confirm('You are '+userName+".")){
  console.log(userName);
}else{
  askUserForName();
  }
}
checkUserName();
console.log(isUserNameTrue); // this should return a true value...


console.log('Log the value of stored userName')
console.log(userName);
var chooseFighter = 0;
console.log(chooseFighter);
console.log(typeof(chooseFighter));
//include the parseInt method within the prompt method:

var checkFighterChosen = function(){
  chooseFighter = parseInt(prompt('WhAt hAvE yOu beCoMe??!\n 1. gecko pecko\n 2. black menace\n 3. pointy boi\n 4. stabo the crabo\n 5. monky bizness\n 6. rhino threat\n 7. cock with a glock\n 8. siege\n 9. hopper with a chopper\n 10. cat with a gat'));
  switch1();
  openYourEyes();
}
checkFighterChosen();

console.log(chooseFighter);
console.log(typeof(chooseFighter));

function switch1(){
switch(chooseFighter){
  case 1:
    alert(`You have woken up as ${userName} the gecko pecko! 'Pick PICK!''`);
    break;
  case 2:
    alert(`You have woken up as ${userName} the black menace! 'Crow CROW!'`);
    break;
  case 3:
    alert(`You have woken up as ${userName} the pointy boi! 'woof WOOF!'`);
    break;
  case 4:
    alert(`You have woken up as ${userName} the stabo crabo! 'stab STAB!'`);
    break;
  case 5:
    alert(`You have woken up as ${userName} the monky bizness! 'bling BLING!'`);
    break;
  case 6:
    alert(`You have woken up as ${userName} the rhino threat! 'chop CHOP!'`);
    break;
  case 7:
    alert(`You have woken up as ${userName} the cock with a glock! 'cluck CLUCK!'`);
    break;
  case 8:
    alert(`You have woken up as ${userName} the siege! 'poke...'`);
    break;
  case 9:
    alert(`You have woken up as ${userName} the hooper with a chopper! 'ribbit RIBBIT!'`);
    break;
  case 10:
    alert(`You have woken up as ${userName} the cat with a gat! 'meow MEOW!'`);
    break;
  default:
    alert(`You must wake up as SOMETHING???`);
    checkFighterChosen();
  }
}
switch1();

console.log("end of choose fighter switch function");
//end of choosing fighter.
function openYourEyes(){
if (chooseFighter == 1){
  var geckoFloorOrCeiling = prompt('You look around. There is a crack on the floor, and you can just about make out something shiny... On the other hand, there seems to be a glimmer of light coming from the ceiling above. Lucky for you, you have sticky feet and can eh... stick to surfaces.\nDo you check out the crack on the (f)loor or check out the (c)eiling?').toLowerCase();
  if (geckoFloorOrCeiling == 'f'){
    alert('You check out the shiny object in the crack of the floor...');
    console.log(geckoFloorOrCeiling);
    //return (geckoFloorOrCeiling);
  }else if (geckoFloorOrCeiling == 'c'){
    alert('You attempt to crawl your way up the wall and towards the gleamer of light coming from that ceiling. The pin is a lil\' heavy though...');
    console.log(geckoFloorOrCeiling);
    //return (geckoFloorOrCeiling);
  }else{
    alert('please choose something');
    console.log(geckoFloorOrCeiling);
    //return (geckoFloorOrCeiling);
  }
}else if (chooseFighter == 2){
  var blackCeilingOrSurvey = prompt('The room is really dark... From where you are, you can only see a glimmer of light from the ceiling. But it is much too small to fit through.\nDo you check the (c)eiling out anyway? Or do you contiune flapping around and (s)urvey the area?');
  if (blackCeilingOrSurvey == 'c'){
    alert('You attempt to fly towards the ceiling with knife still in your beak...');
    console.log(blackCeilingOrSurvey);
    //return(blackCeilingOrSurvey);
  }else if (blackCeilingOrSurvey == 's'){
    alert('You flap around and survey for a while...');
    console.log(blackCeilingOrSurvey);
    //return(blackCeilingOrSurvey);
  }else{
    alert('please choose something');
    console.log(geckoFloorOrCeiling);
    //return (geckoFloorOrCeiling);
  }
}else if (chooseFighter == 3){
  var pointyHomeRoom = prompt('The room is dark. You have this knife in your in your hands. The same knife that you tell your pet doggo not to ever touch. You look closer... It is the exact same knife that you use for poking things around in the toilet! Could this be your (h)ome and that you åre now in the body of your pet doggo??? No it can\'t be right. This is just a bad dream and you have never seen this (r)oom before');
  if (pointyHomeRoom == 'h'){
    alert('This IS your HOME! No wonder it has the familiar timber-oak smell. You reckon it is attic. You bark and hear footsteps up the attic...');
    console.log(pointyHomeRoom);
  }else if (pointyHomeRoom == 'r'){
    alert('No, you have never been to this dark room ever...');
    console.log(pointyHomeRoom);
}else {
  alert('please choose something');
  console.log(pointyHomeRoom);
  }
}else if (chooseFighter == 4){
  alert('Just as you open your eyes, and as bubbles form in your mouth.\nA bright light from the top emerges and something reachs out and trys to grab you!');
  var stabOrNot = prompt('Do you pick up the knife and try to (s)tab it? Or do you (l)eave the knife behind?');
}else if (chooseFighter ==5){
  alert('Opps. Have not created paths for this character yet');
}else if (chooseFighter == 6){
  alert('Opps. Have not created paths for this character yet');
}else if (chooseFighter ==7){
  alert('Opps. Have not created paths for this character yet');
}else if (chooseFighter == 8){
  var siegeSurveyHibernate = prompt('A miserable tortoise you are... What are the chances you can make it out alive? Do you want to start (o)ver? Or continue to (s)urvey this dark room? Or just (h)ibernate?');
  if (siegeSurveyHibernate == 's'){
    alert('You inch your way around, albeit REALLY slowly; plus the fork is heavy...');
    console.log(siegeSurveyHibernate);
  }else if (siegeSurveyHibernate == 'o'){
    console.log(siegeSurveyHibernate);
    checkFighterChosen();
  }else if (siegeSurveyHibernate == 'h'){
    alert('It is that time of the year. You can\'t help it. You are tough as h*ll, and your metabolism is low, you can afford to idle. And so.. zzzZ.');
    console.log(siegeSurveyHibernate);
  }else{
    alert('please choose something');
    console.log(siegeSurveyHibernate);
  }
}else if (chooseFighter == 9){
  alert('Opps. Have not created paths for this character yet');
}else if (chooseFighter == 10){
  alert('A cat! PUURRRfect! You have night vision! Though this room is dark, you can actually see... wait a minute. You don\'t just have night vision... You have x-ray vision! You can see... just make out a shape of a woman undressing two rooms ahead of where you are sitted. She lets her blouse drop of to the ... (insert NSFW content here). Phew, that was steamy! Now we know why cats love to stare off blankly into the distance! I wish I were a cat too!');
  var catDoorSmell = prompt('Anyway, there is a (d)oor with a wooden handle. But wait, you (s)mell something.');
}else {
  alert("Let's come back to this later");
  console.log('Last else statement printed')
}
}

//openYourEyes();

console.log('choose fighter conditional statement has finished running');
//console.log(geckoFloorOrCeiling);
//console.log(blackCeilingOrSurvey);


//create boss character called 'Big Chungus', will auto lose to siege since the tortoise runs faster than the hare...

// if (chooseFighter === 1 ){
//   alert("You have woken up as a gecko pecko! 'Pick PICK!''");
// }else{
//   alert("We come back later...");
//   console.log("We come back later...");
// }
