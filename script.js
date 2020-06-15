var username = "";
var lives = 5; // current lives
var maxLives = 5; // max lives
var state = {};
var header = document.getElementById("header");
var buttonGroup = document.getElementById("btn-group");
let health = [0x1F970, 0x1F60D, 0x1F63B, 0x1F496, 0x1F498];
var healthBar = document.getElementById("health");

// document.getElementById("inventory").style.visibility = "hidden";
if (document.getElementById("inventory")) {
    document.getElementById("inventory").style.display = "none";
}

if (document.getElementById("lets-play-button")) {
    document.getElementById("lets-play-button").addEventListener('click', function(event) {
    username = document.querySelector("#input").value;
    if (validateInput(username) == "") { // validates name
        header.innerHTML = "Oops! Invalid input, please try again ~";
        document.querySelector("#input").value = "";
    }
    else {
        username = validateInput(username);
        destroyAllButtons();
        document.querySelector("#input").remove();
        // document.getElementById("inventory").style.visibility = "visible";
        document.getElementById("inventory").style.display = "initial";
        startGame();
    }
    });
}

if (document.getElementById("items-game")) {
    // attackMode();
}

function startGame() {
  state = { wand: false, keys: false, book: false };
  displayFullHealth();
  displayQuestion(1);
  displayButton(1);
}

function selectOption(id) {
  if (id == -1) { // reset
    return startGame();
  }
  if (id == 0) { // attack mode
    localStorage.setItem('state', JSON.stringify(state));
    return attackMode();
    console.log("id is " + 0);
  }
  // displayItems();
  displayQuestion(id);
  displayButton(id);
}

// TEXTNODE FUNCTIONS //

function getTextNode(id) {
  for (let i = 0; i < textNodes.length; i++) {
    if (textNodes[i].id === id) {
      return textNodes[i];
    }
  }
}

// BUTTONS FUNCTION //
function destroyAllButtons() {
    let child = buttonGroup.lastElementChild;
    while (child) {
        buttonGroup.removeChild(child);
        child = buttonGroup.lastElementChild;
    }
}

function displayButton(id) {
   destroyAllButtons();
  let randomNumber = getRandomNumber(getTextNode(id).option.length);
  for (let i = 0; i < randomNumber; i++) {
    if (checkState(id, i)) {
        const button = document.createElement("button");
        button.innerHTML = getTextNode(id).option[i].buttonText;

        button.onclick = function() {

          selectOption(getTextNode(id).option[i].nextNode);
          displayHealth(id, i);
          state = Object.assign(state, getTextNode(id).option[i].state);
          console.log(state);
          displayItems("items");
        }
        buttonGroup.append(button);
    }
  }
}

function checkState(id, index) {
    if (getTextNode(id).option[index].hasOwnProperty("requiredStates")) {
        let keys = Object.entries(getTextNode(id).option[index].requiredStates); // states in required states must be true
        // keys is the 2d array of what is required [["keys", true], [keys]]
        console.log(keys);
        for (let i = 0; i < keys.length; i++) {
            console.log("The value of this key in states" + keys[0][i] + " is " + state[keys[i][0]]);
            console.log("The required state is: " + keys[i][1])
            if (state[keys[i][0]] == keys[i][1]) {
                return true;
            }
        }
        return false;
    }
    else {
        return true;
    }
}

// TEXT FUNCTIONS //
function displayQuestion(id) {
  header.innerHTML = username + ", " + getTextNode(id).text;
}

// MISC FUNCTIONS //
function getRandomNumber(arrayLength) {
    if (arrayLength == 1 || arrayLength == 2) {
        return arrayLength;
    }
    let diff = arrayLength - 2;
    let random = 2 + Math.floor(Math.random() * (arrayLength - diff));
    console.log("Random number is: " + random);
    return random;
}

function validateInput(input) {
    var inputArray = [];
    if (isNaN(input) && input != "") {
        inputArray = input.split("");
        inputArray[0] = inputArray[0].toUpperCase();
        for (let i = 1; i < inputArray.length; i++) {
            inputArray[i] = inputArray[i].toLowerCase();
        }
    }
    return inputArray.join("");
}

// ITEMS FUNCTION //
function displayItems(id) {
    let itemsEmoji = [0x1F9D0, 0x1F5DD, 0x1F4DC];
    // wand key book
    console.log("Display item is called");
    const item = document.getElementById(id);
    item.innerHTML = "";
    let entries = Object.entries(state);
    console.log(Object.keys(state).length);
    console.log(item);
    for (let i = 0; i < Object.keys(state).length; i++) {
        if (entries[i][1]) { // if item state is true
            item.innerHTML += String.fromCodePoint(itemsEmoji[i]);
            console.log("Displaying: " + String.fromCodePoint(itemsEmoji[i]));
        }
    }
    console.log("Function ends");
}

// HEALTH FUNCTIONS //
function displayHealth(id, index) {
    // check if the current id and index has hurts, if yes, then
    if (getTextNode(id).option[index].hasOwnProperty("hurts")) {
        // the current selected option hurts the health
        healthBar.innerHTML = ""; // clear out all previous health
        lives--;
        for (let i = 0; i < lives; i++) {
            healthBar.innerHTML += String.fromCodePoint(health[i]); // update the life bar
        } // good health is revealed
        console.log("No. of lives: " + lives);
        for (let j = lives; j < maxLives; j++) {
            console.log("No. of times I run this loop: " + j);
            healthBar.innerHTML += String.fromCodePoint(0x1F494);
        } // updates dead hearts (if any)
        console.log("Maximum live: " + maxLives);
        console.log("Display end: " + lives);
    }
}

function displayFullHealth() {
    lives = maxLives;
    console.log("Display full health - We have full health " + lives);
    healthBar.innerHTML = "";
    for (let i = 0; i < maxLives; i++) {
      healthBar.innerHTML += String.fromCodePoint(health[i]);
      console.log(String.fromCodePoint(health[i]));
    }
}

function attackMode() {
    // optional: display current inventory
    console.log("attack mode called");
    window.location.replace("game.html");
    state = Object.assign(state, JSON.parse(localStorage.getItem('state')));
    console.log("The state is: " + state);
    document.getElementById("user-game").innerHTML = username;
    displayItems("items-game");
    console.log("attack mode called");
}

