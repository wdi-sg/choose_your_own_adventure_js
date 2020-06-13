const totalRooms = {};

const startButton = document.createElement("button");
startButton.value = "start";
startButton.innerHTML = "start";
startButton.className = "startButton";
document.querySelector(".container").appendChild(startButton);
const outputMsg = document.querySelector(".output");

// ------------------------------ Msgs----------------------//

const hallMsg =
  " You are in the hall of this hunted house, choose the room to which you want to go:";

//-------------------Function---------------------//

const startGame = (e) => {
  outputMsg.innerHTML = `${hallMsg}`;
  const kitchen = new Room("Kitchen");
  const livingroom = new Room("livingroom");
  const bathroom = new Room("bathroom");

  totalRooms["kitchen"] = kitchen;
  totalRooms["livingroom"] = livingroom;
  totalRooms["bathroom"] = bathroom;

  console.log(totalRooms);

  document.querySelector(".startButton").remove();
};

const chooseRoom = (e) => {
outputMsg.innerHTML = `${kitchenMsg}`;

};

//------------------Event Listener----------------//

startButton.addEventListener("click", startGame);
kitchen.addEventListener("onchange", chooseRoom);

//----------------------------Constructor-------------------//

class Room {
  constructor(roomId) {
    this.roomId = roomId;
    this.roomValue = roomId;
    this.labelText = roomId;

    this.room = document.createElement("input");
    this.roomLabel = document.createElement("label");
    this.room.type = "radio";
    this.room.id = `${this.roomId}`;
    this.room.value = `${this.roomValue}`;
    this.roomLabel.innerText = `${this.labelText}`;
    document.querySelector(".container").appendChild(this.room);
    document.querySelector(".container").appendChild(this.roomLabel);
  }
}
