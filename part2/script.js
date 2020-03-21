console.log("hello script js");

var scoreCount = 0;
var failedAttempts = 20;
var currentRoom = "at home";
var groceryStore;

var inputHappened = function(currentInput){
  console.log( currentInput );
  clearInput();
  //Starting up
  if (currentRoom === "at home"){
    username = currentInput;
    currentRoom = "outside";
    return `Hey ${username}, it's panic buying season! The objective is to buy 10 items. You can only failed 20 times!\n\n Which grocery store do you want to go to?\n\nCold Storage / FairPrice / Sheng Siong`
  }

//Choosing a Grocery Store
  if (currentRoom === "outside"){
    groceryStore = currentInput.toLowerCase();
    if (groceryStore.includes("cold storage") || groceryStore.includes("fairprice") || groceryStore.includes("sheng siong")){
        currentRoom = groceryStore;
        return `Welcome to ${currentInput}! Pick an aisle to get stuff! (1/2/3)`;
    } else {
        return `Please type in Cold Storage / FairPrice / Sheng Siong`;
    }
  }

//Choosing an Aisle
  if (currentRoom === "cold storage" || currentRoom === "fairprice" || currentRoom === "sheng siong"){
    if (currentInput.includes("1") || currentInput.includes("2") || currentInput.includes("3")){
        currentRoom = currentRoom + " aisle " + currentInput;
        return `You are now in ${currentRoom}. You can try to buy something, or leave the aisle. (Buy / Leave)`
    } else {
        return `Please type 1 or 2 or 3, to access an aisle`
    }
  }

//Buy or Leave
  if (currentRoom.includes("aisle")){
    if (currentInput.toLowerCase().includes("buy")){
        return getItem();
    } else if(currentInput.toLowerCase().includes("leave")){
        currentRoom = groceryStore;
        return `You are now back in ${currentRoom}'s main area! Pick an aisle to get stuff! (1/2/3)`;
    } else{
        return `Sorry, we didn't get that. Type "buy" or "leave" to buy something, or leave the aisle`;
    }
  }

  // if (currentRoom === "cold storage aisle 1"){
  //   return aisleFunction();
  // }

  // if (currentRoom === "cold storage aisle 2"){
  // }

  // if (currentRoom === "cold storage aisle 3"){
  // }

  // if (currentRoom === "fairprice aisle 1"){
  // }

  // if (currentRoom === "fairprice aisle 2"){
  // }

  // if (currentRoom === "fairprice aisle 3"){
  // }

  // if (currentRoom === "sheng siong aisle 1"){
  // }

  // if (currentRoom === "sheng siong aisle 2"){
  // }

  // if (currentRoom === "sheng siong aisle 3"){
  // }



  return "error";
};

//determines if successful at buying item
var getItem = function(){
    if (Math.random() > 0.5){
        scoreCount++;
        if (scoreCount === 10) {
            return `Congratulations! You win! Take home the prize of another ${randomItem()}`
        } else {
            return `You managed to buy ${randomItem()}!\n\nYour current score is ${scoreCount}. You have ${failedAttempts} failed attempts left.\n\n Try this aisle again? or another aisle? (Buy / Leave)`;
        }
    } else {
        failedAttempts--;
        if (failedAttempts === 0){
            return `You lose :( Refresh the page to try this game again.`
        } else{
            return `They are all sold out! You have ${failedAttempts} failed attempts left.\n\nTry this aisle again? or another aisle? (Buy / Leave)`;
        }
    }
}

//gets random item, if successful in buying it
var randomItem = function(){
    var number = Math.floor(Math.random() * 9);
    if (number <= 3) {
        return "toilet paper"
    } else if (number > 7) {
        return "hand sanitizer"
    } else {
        return "canned food"
    }
}

//clears input after each entry
var clearInput = function(){
    document.getElementById('input').value = "";
}



var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};

display("What's your name?")