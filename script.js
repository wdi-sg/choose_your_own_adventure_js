let start = document.createElement("button");
start.value = "start";
start.innerHTML = "start";
start.class = "start";
document.querySelector(".container").appendChild(start);
//-------------------Function---------------------//

startGame = () => {
  let start = new Room(startMsg, "kitchen", "livingRoom", "DinningRoom");
};


//------------------Event Listener----------------//

document.querySelector(".start").addEventListener("click", startGame())



// ------------------------------ Msgs----------------------//

let startMsg = " You are in the hall of this hunted house, choose the room to which you want to go:"

//----------------------------Constructor-------------------//

class Room {
  constructor(mgs, room1Id, room2Id, room3Id) {
    this.msg = msg;

    this.room1Id = room1Id;
    this.room1Value = room1Id;
    this.label1Text = room1Id;

    this.room2Id = room2Id;
    this.room2Value = room2Id;
    this.label2Text = room2Id;

    this.room3Id = room3Id;
    this.room3Value = room3Id;
    this.label3Text = room3Id;

    this.room1 = document.createElement("input");
    this.room1Label = document.createElement("label");
    this.room1.type = "radio";
    this.room1.id = `${room1Id}`;
    this.room1.value = `${room1Value}`;
    this.room1Label.innerText = `${label1Text}`;
    this.msg = document.createElement("p");
    this.msg.innerHTML = `${this.msg};`;

    document.querySelector(".container").appendChild(this.room1);
    document.querySelector(".container").appendChild(this.room1Label);

    document.querySelector(".msg").appendChild(this.msg);
  }
}
