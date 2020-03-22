let rooms = [
  ["kitchen", "living room"],
  ["children's room", "bathroom"]
];

let firstQuestion = function() {
  return ("Welcome to the house of terror, to go out alive you have to find the key that open the exit door. "+
  "Type the complete answer to the questions made. Where do you want to go? 1. kitchen 2. living room 3. Pool");
};
let lobbyOptions = function(roomChoosed) {
  if (roomChoosed === rooms[0][0]) {
    document.getElementById("input").value = "";
    return "You are in the kitchen, there is a dead body in the floor. What do you want to do: 1. Take a knife; 2. See the body; 3. Scream";
  } else if (roomChoosed === "pool") {
    document.getElementById("input").value = "";
    return "Sorry you are dead, Loch Ness monster was hungry and eat you";
  } else {
    document.getElementById("input").value = "";
    return "Sorry, there was a vampire in the room and he drink your blood, you are dead";
  }
};
let kitchenOptions = function(kitchenAnswer) {
  if (kitchenAnswer === "knife") {
    let key = true;
    document.getElementById("input").value = "";
    return "Very well, that body is a zombie, kill it and take the key. where would you like to go now?? 1. bathroom 2. children's room 3. suicide";
  } else if (kitchenAnswer === "see the body") {
    return "Run!!!, the body was a zombie, sorry you are dead";
  } else {
    return "Oh no!!, you alert all the bad spirits...now they will go inside your body and eat you. To save your soul go to your house and punish yourself. Hurt the body to save the spirit.And you are dead";
  }
};
let knifeOptions = function(secondRoomChoosed) {
  if (secondRoomChoosed === "children's room") {
    document.getElementById("input").value = "";
    return "Do you have the key??";
  } else "Take a shower before you die";
};
let childrenRoomOption = function(userAnswerKey) {
  if (userAnswerKey === "yes") {
    document.getElementById("input").value = "";
    return "Congrats!!! you won, just go out of this house of hell, be happy, eat vegetables and wash your hands";
  } else {
    document.getElementById("input").value = "";
    return "sorry man, go to find the key and come back, and do not die";
  }
};

var inputHappened = function(currentInput) {
  if (
    currentInput === rooms[0][0] ||
    currentInput === "pool" ||
    currentInput === "livingroom"
  ) {
    return lobbyOptions(currentInput);
  }
  if (
    currentInput === "knife" ||
    currentInput === "see the body" ||
    currentInput === "scream"
  ) {
    return kitchenOptions(currentInput);
  }
  if (currentInput === "childrens room" || currentInput === "bathroom") {
    currentInput = "childrenRoom";
    return knifeOptions(currentInput);
  }
  if (currentInput === "yes" || currentInput === "no") {
    return childrenRoomOption(currentInput);
  }
};
document.getElementById("output").innerHTML = firstQuestion();
