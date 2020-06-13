var username = "";
var state = {};
var header = document.getElementById("header");
var buttonGroup = document.getElementById("btn-group");

document.getElementById("lets-play-button").addEventListener('click', function(event) {
    username = document.querySelector("#input").value;
    buttonGroup.lastElementChild.remove();// Destroy all previous buttons
    document.querySelector("#input").remove();
    startGame();
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

// HELP FUNCTIONS //
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

  for (let i = 0; i < getTextNode(id).option.length; i++) {
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