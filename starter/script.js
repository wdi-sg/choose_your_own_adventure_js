// put code here!
console.log("So it begins...");
var userName = 'randon player';
var askUserForName = function(){
  userName = prompt('What is your name?','random player');
  userName = userName.toString();
  console.log(userName);
  return userName;
}
//NOTE: if userName is left empty, console will say that userName.toString() cannot accept null property...

console.log('end of ask for user name');

askUserForName();
//insert a confirm prompt here:
if (isUserNameTrue = confirm('You are '+userName+".")){
  console.log(userName);
}else{
  askUserForName();
}

console.log('Log the value of stored userName')
console.log(userName);
var chooseFigther = prompt('WhAt hAvE yOu beCoMe??!\n 1. gecko pecko\n 2. black menace\n 3. pointy boi\n 4. stabo the crabo\n 5. monky bizness\n 6. rhino threat\n 7. cock with a glock\n 8. siege\n 9. hopper with a chopper\n 10. cat with a gat');
