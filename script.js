var username = "";
var state = {};
var header = document.getElementById("header");
var buttonGroup = document.getElementById("btn-group");

function startGame() {
  state = {};
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

//startGame();

document.getElementById("lets-play-button").addEventListener('click', function(event) {
    username = document.querySelector("#input").value;
    buttonGroup.lastElementChild.remove();// Destroy all previous buttons
    document.querySelector("#input").remove();
    startGame();
});

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
    console.log("Are we going to create button for: " + getTextNode(id).option[i].buttonText);
    if (checkState(id, i)) { //
        console.log("Going to create button for " + getTextNode(id).option[i].buttonText);
        const button = document.createElement("button");
        button.innerHTML = getTextNode(id).option[i].buttonText;

        button.onclick = function() {
          selectOption(getTextNode(id).option[i].nextNode);
          // state = getTextNode(id).option[i].state; // make it to new state
          state = Object.assign(state, getTextNode(id).option[i].state);
          console.log(state);
        }

        buttonGroup.append(button);
    }
  }
}

function checkState(id, index) {
    if (getTextNode(id).option[index].hasOwnProperty("requiredStates")) {console.log("This is a required state");
        let keys = Object.keys(getTextNode(id).option[index].requiredStates); // states in required states must be true
        console.log("The keys in the required state are: " + keys);

        for (let i = 0; i < keys.length; i++) {
           console.log("For " + keys + " there is " + state[keys[i]]);
            if (state[keys[i]]) {
                console.log("Returning true..");
                return true;
            }
        }
        return false;
    }
    else {
        return true;
    }
}