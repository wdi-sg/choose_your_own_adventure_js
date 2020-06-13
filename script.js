var username = "";
var state = {};
var header = document.getElementById("header");
var buttonGroup = document.getElementById("btn-group");

document.getElementById("lets-play-button").addEventListener('click', function(event) {
    username = document.querySelector("#input").value;
    if (validateInput(username) == "") {
        header.innerHTML = "Oops! Invalid input, please try again ~";
        document.querySelector("#input").value = "";
    }
    else {
        username = validateInput(username);
        buttonGroup.lastElementChild.remove();
        document.querySelector("#input").remove();
        startGame();
    }
});

function startGame() {
  state = { wand: false, keys: false, book: false };
  displayQuestion(1);
  displayButton(1);
}

function selectOption(id) {
  if (id == -1) { // reset
    return startGame();
  }
  displayQuestion(id);
  displayButton(id);
}

function getTextNode(id) {
  for (let i = 0; i < textNodes.length; i++) {
    if (textNodes[i].id === id) {
      return textNodes[i];
    }
  }
}

function displayQuestion(id) {
  header.innerHTML = username + ", " + getTextNode(id).text;
}

function displayButton(id) {
  let child = buttonGroup.lastElementChild; // Destroy all previous buttons
  while (child) {
      buttonGroup.removeChild(child);
      child = buttonGroup.lastElementChild;
  }

  let randomNumber = getRandomNumber(getTextNode(id).option.length);
  for (let i = 0; i < randomNumber; i++) {
    if (checkState(id, i)) {
        const button = document.createElement("button");
        button.innerHTML = getTextNode(id).option[i].buttonText;

        button.onclick = function() {
          selectOption(getTextNode(id).option[i].nextNode);
          state = Object.assign(state, getTextNode(id).option[i].state);
          console.log(state);
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