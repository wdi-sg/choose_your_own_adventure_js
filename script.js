//---------------global var declaration------------------//
const totalRooms = {};
console.log(totalRooms);

//----------------Start Button---------------------------//

const startButton = document.createElement("button");
startButton.value = "start";
startButton.innerHTML = "start";
startButton.className = "startButton";
document.querySelector(".container").appendChild(startButton);
const outputMsgElement = document.querySelector(".output");

// ------------------------------ RoomMsgs----------------------//

const hallMsg =
  " An homicide ocurred here long ago. A poor 14 years old girl was forced to marry an evil monk eager of power. Her soul is still in this house. Solve the mistery to go out of this house of hell.";
const kitchenMsg =
  "Look there is the purse in the floor, click and find a clue to destroy the evil";

const livingroomMsg = "There are a lot of things here, click to find the clue";
const bathroomMsg = "what is the secret word";
const diningroomMsg =
  "oh no!!!!, you are in the vampires room, try to kill them before they let you dry as a raising";
const atticMsg =
  "spiders!!!!, try to kill them before they poison you, find the clue to get out of here";
const principalroomMsg=
  "Here the murder happened!!!, be careful the soul of the death wife is still in this room, and the soul of the assasin too, send him to hell to save the poor woman";
const studio =
  "This room have good vives, drink the bottle to gain live and figth against the evil";

//----------------------ClueMsgs-------------------------------//

const purseMsgKitchen =
  "My parents died when I was 14 years old and my evil uncle force me to marry his friend so they can get my heritage. As I never sign the money transfer document he kill me and now I have to be in this house until someone find that document and burn it, please help me. The first clue is R";



  //-------------------Function---------------------//

const startGame = (e) => {
  outputMsgElement.innerHTML = `${hallMsg}`;
  totalRooms["kitchen"] = new Room("kitchen");
  totalRooms["livingroom"] = new Room("livingroom");
  totalRooms["bathroom"] = new Room("bathroom");

  document.querySelector(".startButton").remove();
  totalRooms.kitchen.roomElement.addEventListener("change", chooseKitchen);
  totalRooms.livingroom.roomElement.addEventListener(
    "change",
    chooseLivingroom
  );
  totalRooms.bathroom.roomElement.addEventListener("change", chooseBathroom);
};

chooseKitchen = () => {
  outputMsgElement.innerHTML = `${kitchenMsg}`;
  document.querySelector(".roomContainer").remove();
  totalRooms["diningroom"] = new Room("diningroom");
  totalRooms["attic"] = new Room("attic");
  totalRooms.livingroom.roomElement.addEventListener(
    "change",
    chooseLivingroom
  );
  totalRooms.diningroom.roomElement.addEventListener(
    "change",
    chooseDiningroom
  );
  totalRooms.attic.roomElement.addEventListener(
    "change",
    chooseAttic
  );
};

chooseLivingroom = () => {
  outputMsgElement.innerHTML = `${livingroomMsg}`;
};
chooseAttic = () => {
  outputMsgElement.innerHTML = `${atticMsg}`;
};

chooseBathroom = () => {
  outputMsgElement.innerHTML = `${bathroomMsg}`;
};
choosePrincipalroom= () =>{
  outputMsgElement.innerHTML = `${principalroomMsg}`;
  document.querySelector(".roomContainer").remove();
  totalRooms["livingroom"] = new Room("livingroom");
  totalRooms["diningroom"] = new Room("diningroom");
  totalRooms.livingroom.roomElement.addEventListener(
    "change",
    chooseLivingroom
  );
  totalRooms.diningroom.roomElement.addEventListener(
    "change",
    chooseDiningroom
  );

  }

chooseDiningroom = () => {
  outputMsgElement.innerHTML = `${diningroomMsg}`;
  document.querySelector(".roomContainer").remove();
  totalRooms["kitchen"] = new Room("kitchen");
  totalRooms["principalroom"] = new Room("principal");
  totalRooms.kitchen.roomElement.addEventListener(
    "change",
    chooseKitchen
  );
  totalRooms.principalroom.roomElement.addEventListener(
    "change",
    choosePrincipalroom
  );
  
  
  
  
};

//------------------Event Listener----------------//

startButton.addEventListener("click", startGame);

//----------------------------Constructor-------------------//

class Room {
  constructor(roomId) {
    this.roomId = roomId;
    this.roomValue = roomId;
    this.labelText = roomId;

    this.roomContainerElement = document.createElement("div");
    this.roomContainerElement.className = "roomContainer";
    document.querySelector(".container").appendChild(this.roomContainerElement);

    this.roomElement = document.createElement("input");
    this.roomLabelElement = document.createElement("label");
    this.roomElement.name = "room";
    this.roomElement.type = "radio";
    this.roomElement.id = `${this.roomId}`;
    this.roomElement.value = `${this.roomValue}`;
    this.roomLabelElement.innerText = `${this.labelText}`;
    document.querySelector(".roomContainer").appendChild(this.roomElement);
    document.querySelector(".roomContainer").appendChild(this.roomLabelElement);
  }
}

class clues {
  constructor(clueMsg, x, y, img) {
    this.clueMsg = clueMsg;
    this.x = x;
    this.y = y;
    this.img = img;

    this.clueContainerElement = document.createElement("div");
    this.clueContainerElement.className = "clueContainer";
    document.querySelector(".container").appendChild(this.clueContainerElement);
    this.clueElement = document.createElement("div");
    this.clueElement.className = "clue";
    this.clueContainerElement.appendChild(this.clueElement);

    this.clueElement.addEventListener("click", clueClicked);
  }
  clueClicked = () => {
    this.clueContainerElement.innerText = this.clueMsg;
  };
}
