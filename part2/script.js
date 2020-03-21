console.log("hello script js");

var scoreCount = 0;
var hp = 20;
var currentRoom = "at home";
var groceryStore;
var monsters = {
    "granny": 3,
    "Yakuza Boss": 3,
    "Angry Student": 3,
    "Dancing Man": 3,
    "Member Of Parliament": 3,
    "Ninja Warrior": 3,
    "Baby Yoda": 3,
    "Papa Mando": 3,
    "Thomas Shelby": 3
}
var weaponBonus = 0;
var currentMonster;
var fightTurn = "user";

var inputHappened = function(currentInput){
  console.log( currentInput );
  clearInput();
  //Starting up
  if (currentRoom === "at home"){
    username = currentInput;
    currentRoom = "outside";
    return formatText(`Hey ${username}, it's panic buying season! The objective is to defeat the panic-buyers! You get one point per defeated buyer. If you get 5 points, you win! Which grocery store do you want to go to?Cold Storage / FairPrice / Sheng Siong`)
  }

//Choosing a Grocery Store
  if (currentRoom === "outside"){
    groceryStore = currentInput.toLowerCase();
    if (groceryStore.includes("cold storage") || groceryStore.includes("fairprice") || groceryStore.includes("sheng siong")){
        currentRoom = groceryStore;
        return formatText(`Welcome to ${currentInput}! Pick an aisle to get stuff! (1/2/3)`);
    } else {
        return `Please type in Cold Storage / FairPrice / Sheng Siong`;
    }
  }

//Choosing an Aisle
  if (currentRoom === "cold storage" || currentRoom === "fairprice" || currentRoom === "sheng siong"){
    if (currentInput.includes("1") || currentInput.includes("2") || currentInput.includes("3")){
        currentRoom = currentRoom + " aisle " + currentInput;
        currentMonster = getRandomMonster();
        return formatText(`You are now in ${currentRoom}. But wait! You encounter a ${currentMonster}. You can try to fight him, or leave the aisle. (Fight / Leave)`);
    } else {
        return `Please type 1 or 2 or 3, to access an aisle`
    }
  }

//Fight or Leave
  if (currentRoom.includes("aisle")){
    if (currentInput.toLowerCase().includes("fight") && fightTurn === "user"){
        fightTurn = "monster";
        return formatText(hitMonster());
    } else if (currentInput.toLowerCase().includes("fight") && fightTurn === "monster"){
        fightTurn = "user";
        return formatText(monsterAttack());
    } else if(currentInput.toLowerCase().includes("leave")){
        currentRoom = groceryStore;
        return formatText(`You are now back in ${currentRoom}'s main area! Pick an aisle to get stuff! (1/2/3)`);
    } else{
        return formatText(`Sorry, we didn't get that. Type "fight" or "leave" to fight him, or leave the aisle`);
    }
  }

  return "error";

};

//determines if successful at buying item
// var getItem = function(){
//     if (Math.random() > 0.5){
//         scoreCount++;
//         if (scoreCount === 10) {
//             return formatText(`Congratulations! You win! Take home the prize of another ${randomItem()}`)
//         } else {
//             return formatText(`You managed to buy ${randomItem()}!Your current score is ${scoreCount}. You have ${failedAttempts} failed attempts left.Try this aisle again? or another aisle? (Buy / Leave)`);
//         }
//     } else {
//         failedAttempts--;
//         if (failedAttempts === 0){
//             return formatText(`You lose :( . Refresh the page to try this game again.`)
//         } else{
//             return formatText(`They are all sold out! You have ${failedAttempts} failed attempts left. Try this aisle again? or another aisle? (Buy / Leave)`);
//         }
//     }
// }

//gets random item, if successful in buying it
var randomItem = function(){
    var number = Math.floor(Math.random() * 9);
    if (number <= 3) {
        return "toilet paper"
    } else if (number > 7) {
        return "hand sanitizer"
    } else {
        return "flamethrower"
    }
}

//clears input after each entry
var clearInput = function(){
    document.getElementById('input').value = "";
}

//Format Text Function
var formatText = function( text ){
    var formattedText ="";
    for (let char of text){
        if (char === "!" || char === "." || char === "?"){
            char = char + "\n\n";
        }
        formattedText += char;
    }
    return formattedText;
}

//Display Function
var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
}

//Check if any monster still alive
// var allMonstersDead = function(){
//     for (let monster in monsters){
//         if (monsters[monster] <= 0){
//             return false;
//         }
//     }
//     return true;
// }

//Fighting Monster and Buying Item
var hitMonster = function(){
    var num = Math.random();
    if (num < 0.5){
        monsters[currentMonster] -= (weaponBonus + 1);
        if (monsters[currentMonster] <= 0 && scoreCount === 5){
            return `You have defeated 5 enemies and won the game! Congratulations! Celebrate with some ${randomItem}`
        } else if (monsters[currentMonster] <= 0) {
            weaponBonus += 1;
            delete monsters[currentMonster];
            scoreCount++;
            return `You scored a final hit! You have defeated ${currentMonster}. Hooray!You have now procured a ${randomItem()}, which will +1 to your attacks.Your current attack power is ${weaponBonus}.\n Type leave to leave the aisle now`

        } else {
            return `You scored a hit! Your health is now ${hp}. The ${currentMonster}'s hp is now ${monsters[currentMonster]}. Type 'fight' to keep going!`;
        }
    } else {
            return `You missed. Your health is now ${hp}. The ${currentMonster}'s hp is now ${monsters[currentMonster]}. Type 'fight' to keep going!`;
        }
}


var monsterAttack = function(){
    var num = Math.random();
    if (num < 0.5){
        hp--;
        if (hp === 0){
            output = "You have died :(. Try again?"
        } else {
        return `The ${currentMonster} hit you! Your health is now ${hp}. The ${currentMonster}'s hp is now ${monsters[currentMonster]}. Type 'fight' to keep going!`;
        }
    } else {
        return `The ${currentMonster} missed! Your health is now ${hp}. The ${currentMonster}'s hp is now ${monsters[currentMonster]}. Type 'fight' to keep going!`;
    }
}

var getRandomMonster = function(){
    var keys = Object.keys(monsters);
    return keys[Math.floor(Math.random() * keys.length)];

}


//Initial Display
display("What's your name?")