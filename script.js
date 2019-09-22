/*
global ascii input zork navigation information
transferPossessions manipulate combat specialty
unknown commands
 */

const output = document.getElementById("output-container");
const name = document.getElementById("name");
const currentLocation = document.getElementById("location");
const score = document.getElementById("score");
const moves = document.getElementById("moves");
let id = 0;
let removeId = 0;
let setSettings = false;
let madeChoice = false;

const naviArr = Object.keys(navigation);
const infoArr = Object.keys(information);
const transferPossArr = Object.keys(transferPossessions);
const manipulateArr = Object.keys(manipulate);
const combatArr = Object.keys(combat);
const specialtyArr = Object.keys(specialty);
const unknownArr = Object.keys(unknown);

function addOutput(text) {
  const p = document.createElement("P");
  p.setAttribute("id", `output${id}`);
  p.style.position = "absolute";
  p.style.paddingLeft = "20px";
  p.style.bottom = "0px";
  p.style.margin = "0";
  p.style.overflowWrap = "break-word";
  p.style.fontFamily = "monaco,Consolas,Lucida Console,monospace";
  p.style.width = window.innerWidth - 40;
  p.innerHTML = text;
  output.appendChild(p);
  input.value = "";
  const position = p.getBoundingClientRect().top;
  const pHeight = p.getBoundingClientRect().bottom - position;
  shiftPosition(pHeight);
  id += 1;
}

function shiftPosition(pHeight) {
  for (let i = removeId; i < id; i++) {
    const newP = document.getElementById(`output${i}`);
    const currentTop = newP.getBoundingClientRect().top;
    const newTop = currentTop - pHeight;
    newP.style.top = `${newTop}px`;
    if (newTop < 0) {
      newP.parentNode.removeChild(newP);
      removeId += 1;
    }
  }
}

function displayText(array) {
  if (!Array.isArray(array)) {
    array = [array];
  }
  for (let i = 0; i < array.length; i++) {
    addOutput(array[i]);
  }
}


const inputHappened = function(currentInput) {
  const originalInput = currentInput;
  currentInput = currentInput.toLowerCase();
  input.value = "";
  switch (setSettings) {
    case false:
      if (currentInput === "y") {
        addOutput(originalInput);
        addOutput("");
        displayText("Enter Player name:"); // get player name
        setSettings = true;
      } else {
        addOutput("Too bad");
      }
      break;
    case true:
      name.textContent = originalInput; // add player name to status
      addOutput(originalInput); // output player name
      displayText(["", "", "-----------GAME START-----------"]);
      setSettings = undefined;
      currentLocation.textContent = zork["start"].location;
      displayText(zork["start"].message);
      break;
    default:
      moves.textContent = Number(moves.textContent) + 1;
      if (madeChoice) {
        addOutput(originalInput);
        addOutput("");
        action(currentInput);
      } else {
        madeChoice = true;
        addOutput(originalInput);
        addOutput("");
        action(currentInput);
      }
      break;
  }
};

function action(currentInput) {
  let msg;
  let scoreOff = false;
  const location = currentLocation.textContent;
  if (naviArr.includes(currentInput)) {
    if (navigation[currentInput].length === 0) {
      return displayText(`"${currentInput}" option is no long available`);
    }
    const current = navigation[currentInput].shift();
    currentLocation.textContent = current.location;
    msg = current.message;
  } else if (infoArr.includes(currentInput)) {
    if (information[currentInput][location] === undefined) {
      scoreOff = true;
      msg = [`Cannot do "${currentInput}" at ${location}`];
    } else msg = information[currentInput][location];
    msg = information[currentInput][location];
  } else if (transferPossArr.includes(currentInput)) {
    if (transferPossessions[currentInput][location] === undefined) {
      scoreOff = true;
      msg = [`Cannot do "${currentInput}" at ${location}`];
    } else msg = transferPossessions[currentInput][location];
    msg = transferPossessions[currentInput][location];
  } else if (manipulateArr.includes(currentInput)) {
    if (manipulate[currentInput].length === 0) {
      return displayText(`"${currentInput}" option is no long available`);
    }
    if (manipulate[currentInput][0][location] === undefined) {
      scoreOff = true;
      msg = [`Cannot do "${currentInput}" at ${location}`];
    } else msg = manipulate[currentInput].shift()[location];
  } else if (combatArr.includes(currentInput)) {
    if (combat[currentInput].length === 0) {
      return displayText(`"${currentInput}" option is no long available`);
    }
    if (combat[currentInput][0][location] === undefined) {
      scoreOff = true;
      msg = [`Cannot do "${currentInput}" at ${location}`];
    } else msg = combat[currentInput].shift()[location];
  } else if (specialtyArr.includes(currentInput)) {
    if (specialty[currentInput].length === 0) {
      return displayText(`"${currentInput}" option is no long available`);
    }
    if (specialty[currentInput][0][location] === undefined) {
      scoreOff = true;
      msg = [`Cannot do "${currentInput}" at ${location}`];
    } else msg = specialty[currentInput].shift()[location];
  } else if (unknownArr.includes(currentInput)) {
    if (unknown[currentInput][location] === undefined) {
      scoreOff = true;
      msg = [`Cannot do "${currentInput}" at ${location}`];
    } else msg = unknown[currentInput][location];
  } else if (currentInput === "help") {
    const helpMenu = [
      "navi help",
      "info help",
      "item help",
      "combat help",
      "speciality help",
      "unknown help",
      "restart"
    ];
    msg = helpMenu;
  } else if (currentInput === "navi help") {
    msg = naviArr;
    scoreOff = true;
  } else if (currentInput === "info help") {
    msg = infoArr;
    scoreOff = true;
  } else if (currentInput === "item help") {
    const itemMenu = transferPossArr.join(", ");
    msg = itemMenu;
    scoreOff = true;
  } else if (currentInput === "action help") {
    msg = manipulateArr;
    scoreOff = true;
  } else if (currentInput === "combat help") {
    msg = combatArr;
    scoreOff = true;
  } else if (currentInput === "speciality help") {
    msg = specialtyArr;
    scoreOff = true;
  } else if (currentInput === "unknown help") {
    msg = unknownArr;
    scoreOff = true;
  } else if (currentInput === "restart") {
    return window.location.reload();
  } else {
    return displayText(`I don't know the word "${currentInput}"`);
  }
  if (!scoreOff) {
    if (currentInput === commands[0]) {
      commands.shift();
      score.textContent = Number(score.textContent) + 1;
    } else {
      if (Number(score.textContent) > 0) {
        score.textContent = Number(score.textContent) - 1;
      }
    }
  }
  displayText(msg);
}

displayText(ascii);
displayText(zork["introduction"]);
