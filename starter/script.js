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
}
checkFighterChosen();

console.log(chooseFighter);
console.log(typeof(chooseFighter));

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
console.log("end of switch function");



// if (chooseFighter === 1 ){
//   alert("You have woken up as a gecko pecko! 'Pick PICK!''");
// }else{
//   alert("We come back later...");
//   console.log("We come back later...");
// }
