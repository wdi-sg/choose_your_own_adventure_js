let state = {};
var header = document.getElementById("header");
var buttonGroup = document.getElementById("btn-group");

function startGame() {
  state = {};
  displayQuestion(1);
  displayButton(1);
}

function selectOption(id) {
  if (id == -1) {
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
  let child = buttonGroup.lastElementChild;
  while (child) {
      buttonGroup.removeChild(child);
      child = buttonGroup.lastElementChild;
  }

  for (let i = 0; i < getTextNode(id).option.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = getTextNode(id).option[i].buttonText;

    button.onclick = function() {
      selectOption(getTextNode(id).option[i].nextNode);
      console.log(getTextNode(id).option[i].nextNode);
    }

    buttonGroup.append(button);
  }
}

