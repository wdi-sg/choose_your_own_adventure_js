let rooms = [
  ["kitchen", "livingroom"],
  ["childrens room", "bathroom"]
];

let firstQuestion = function() {
  return "Where do you want to go? 1. kitchen 2. livingroom";
};
let lobbyOptions = function(roomChoosed) {
  if (roomChoosed === rooms[0][0]) {
    document.getElementById("input").value = "";
    return "You are in the kitchen, there is a dead body in the flor. What do you want to do: 1. Take a knife; 2. See the body; 3. Scream";
  } else {
    return "Sorry, there was a vampire in the room and he drink your blood, you are dead";
  }
};
let kitchenOptions = function(kitchenAnswer) {
  if (kitchenAnswer === "knife") {
    let key = true;
    document.getElementById("input").value = "";
    return "Very well, that body is a zombie, kill it and take the key. where would you like to go now?? 1. bathroom 2. childrensRoom";
  } else if (kitchenAnswer === "seeTheBody") {
    return "Run!!!, the body was a zombie, sorry you are dead";
  } else {
    return "oh no!!, you alert all the bad spirits...now they will go inside your body and eat your. To save your soul go to your house and punish yoursel. Hurt the body to save the spirit.And you are dead";
  }
};
let knifeOptions = function(secondRoomChoosed) {
  if (secondRoomChoosed === "childrenRoom") {
    document.getElementById("input").value = "";
    return "Do you have the key??";
  } else "Take a shower before die";
};
let childrenRoomOption = function(userAnswerKey) {
  if (userAnswerKey === "yes") {
    document.getElementById("input").value = "";
    return "Congrats!!! you won, just go out of this house of hell, be happy, eat vegetables and wash your hands";
  } else {
    return "sorry man, go to find the key and come back, and do not die";
  }
};

var inputHappened = function(currentInput) {
  if (currentInput === rooms[0][0]) {
    return lobbyOptions(currentInput);
  }
  if (currentInput === "knife") {
    return kitchenOptions(currentInput);
  }
  if (currentInput === "childrenRoom") {
    return knifeOptions(currentInput);
  }
  if (currentInput === "yes") {
    return childrenRoomOption(currentInput);
  }
};
document.getElementById("output").innerHTML = firstQuestion();
