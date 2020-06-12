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

startGame();

// HELP FUNCTIONS //
function getTextNode(id) {
  for (let i = 0; i < textNodes.length; i++) {
    if (textNodes[i].id === id) {
      return textNodes[i];
    }
  }
}

function displayQuestion(id) {
  header.innerHTML = getTextNode(id).text;
}

function displayButton(id) {
  let child = buttonGroup.lastElementChild; // Destroy all previous buttons
  while (child) {
      buttonGroup.removeChild(child);
      child = buttonGroup.lastElementChild;
  }

  for (let i = 0; i < getTextNode(id).option.length; i++) {
    if (checkState(id, i)) { //
        const button = document.createElement("button");
        button.innerHTML = getTextNode(id).option[i].buttonText;

        button.onclick = function() {
          selectOption(getTextNode(id).option[i].nextNode);
          state = getTextNode(id).option[i].state; // make it to new state
          console.log(state);
        }

        buttonGroup.append(button);
    }
  }
}

function checkState(id, index) {
    if (getTextNode(id).option[index].hasOwnProperty("requiredStates")) {
        let keys = Object.keys(getTextNode(id).option[index].requiredStates); // states in required states must be true
        keys.forEach(key => {
            if (state[key] == true) {
                return true;
            }
        });
        return false;
    }
    else {
        return true; // required state does not exist, this is a normal text button
    }
}

// function checkState(id) {
//     // check if the current state contains the required state
//     // or there is no required state for this id
//     // if yes, then display the button
//     // if no, then do not display the button, and change to the next option
//     for (let i = 0; i < getTextNode(id).length; i++) {
//         // the current selected button's one of the option requires a state (bottom)
//         if (getTextNode{id}.option[i].hasOwnProperty("requiredStates")) {
//             // check if your current state has this property a not
//             let keys = Object.keys(getTextNode{id}.option[i].requiredStates);
//             for (let j = 0; j < states.length; i++) {
//                 keys.forEach( key => {
//                     if (states[key] == getTextNode{id}.option[i][key]) {
//                         return true;
//                     }
//                 })
//             }
//         }
//     }
//     return false;
// }