/* global input */

const output = document.getElementById("output-container");
const outputHeight = document.getElementById("output-container").offsetHeight;
let id = 0;
let removeId = 0;

function addOutput(text) {
  const p = document.createElement("P");
  p.setAttribute("id", `output${id}`);
  p.style.position = "absolute";
  p.style.paddingLeft = "20px";
  p.style.bottom = "0px";
  p.style.margin = "0";
  p.style.overflowWrap = "break-word";
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
  for (let i=removeId; i<id; i++) {
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

const inputHappened = function(currentInput) {
  addOutput(currentInput);
};
