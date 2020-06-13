const startButton = document.createElement("button");
startButton.value = "start";
startButton.innerHTML = "start";
startButton.className = "startButton";
document.querySelector(".container").appendChild(startButton);

// ------------------------------ Msgs----------------------//

const hallMsg = " You are in the hall of this hunted house, choose the room to which you want to go:"


//-------------------Function---------------------//

const startGame = (e) => {
  const hall = new Room(hallMsg, "kitchen", "livingRoom", "DinningRoom");
  document.querySelector('.startButton').remove();
};


//------------------Event Listener----------------//

startButton.addEventListener("click", startGame)

//----------------------------Constructor-------------------//

class Room {
  constructor(msg, room1Id, room2Id, room3Id) {
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
    this.room1.id = `${this.room1Id}`;
    this.room1.value = `${this.room1Value}`;
    this.room1Label.innerText = `${this.label1Text}`;
    document.querySelector(".container").appendChild(this.room1);
    document.querySelector(".container").appendChild(this.room1Label);


    this.room2 = document.createElement("input");
    this.room2Label = document.createElement("label");
    this.room2.type = "radio";
    this.room2.id = `${this.room2Id}`;
    this.room2.value = `${this.room2Value}`;
    this.room2Label.innerText = `${this.label2Text}`;
    document.querySelector(".container").appendChild(this.room2);
    document.querySelector(".container").appendChild(this.room2Label);


    this.room3 = document.createElement("input");
    this.room3Label = document.createElement("label");
    this.room3.type = "radio";
    this.room3.id = `${this.room3Id}`;
    this.room3.value = `${this.room3Value}`;
    this.room3Label.innerText = `${this.label3Text}`;
    document.querySelector(".container").appendChild(this.room3);
    document.querySelector(".container").appendChild(this.room3Label);

    document.querySelector('.output').innerHTML = `${this.msg}`   
  }
}
