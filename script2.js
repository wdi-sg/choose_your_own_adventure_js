const totalRooms = {
  hall: {
    name: "hall",
    msg:
      " An homicide ocurred here long ago. A poor 14 years old girl was forced to marry an evil monk eager of power. Her soul is still in this house. Solve the mistery to go out of this house of hell.",
    connectingRooms: ["kitchen", "living", "bath"],
    enemy: {
      number: 0,
    },
  },
  kitchen: {
    name: "kitchen",
    msg:
      "Look there is the purse in the floor, click and find a clue to destroy the evil, the clue is C",
    connectingRooms: ["hall", "dining", "living"],
    enemy: {
      number: 2,
    },
  },
  living: {
    name: "living",
    msg: "There are a lot of things here, the clue is A",
    connectingRooms: ["kitchen", "hall", "studio", "principal"],
    enemy: {
      number: 3,
    },
  },
  dining: {
    name: "dining",
    msg:
      "oh no!!!!, you are in the vampires room, try to kill them before they let you dry as a raising, the clue is L",
    connectingRooms: ["kitchen", "attic", "studio"],
    enemy: {
      number: 5,
    },
  },
  studio: {
    name: "studio",
    msg:
      "This room have good vives, drink the bottle to gain live and figth against the evil, the clue is E",
    connectingRooms: ["living", "principal", "dining"],
    enemy: {
      number: 7,
    },
  },
  principal: {
    name: "principal",
    msg:
      "Here the murder happened!!!, be careful the soul of the death wife is still in this room, and the soul of the assasin too, send him to hell to save the poor woman, the clue is H",
    connectingRooms: ["living", "studio", "attic"],
    enemy: {
      number: 6,
    },
  },
  attic: {
    name: "attic",
    msg:
      "You are almost there. Try to find the secret word, is the name of the poor child, the last clue is R",
    connectingRooms: ["dining", "principal", "bath"],
    enemy: {
      number: 3,
    },
  },
  bath: {
    name: "bath",
    msg: "What is the password???",
    connectingRooms: ["attic", "hall"],
    enemy: {
      number: 0,
    },
  },
};

class Room {
  constructor(connectingRoomsArr, roomMsg, numEnemies) {
    this.connectingRoomsArr = connectingRoomsArr;
    this.roomMsg = roomMsg;
    this.roomOptEl = [];
    this.roomOptLabel = [];
    console.log(this.roomMsg);

    this.roomMsgEl = document.createElement("p");
    this.roomMsgEl.innerText = this.roomMsg;
    document.querySelector(".output").appendChild(this.roomMsgEl);

    this.roomContainerEl = document.createElement("div");
    this.roomContainerEl.className = "roomContainer";
    document.querySelector("body").appendChild(this.roomContainerEl);

    this.numEnemies = numEnemies;
    this.enemyX = 0;
    this.enemyY = 0;
    this.enemyContainer = document.createElement("div");
    this.enemyContainer.className = "enemyContainer";
    document.querySelector("body").appendChild(this.enemyContainer);

    this.creatingRoomsButtons();
    //setInterval(this.movingEnemies, 2000);
  }
  creatingRoomsButtons() {
    for (let i = 0; i < this.connectingRoomsArr.length; i++) {
      this.roomOptEl[i] = document.createElement("input");
      this.roomOptEl[i].type = "radio";
      this.roomOptEl[i].id = this.connectingRoomsArr[i];
      this.roomOptEl[i].value = this.connectingRoomsArr[i];
      this.roomOptEl[i].name = "roomOptions";
      this.roomContainerEl.appendChild(this.roomOptEl[i]);

      this.roomOptLabel[i] = document.createElement("label");
      this.roomOptLabel[i].innerText = this.connectingRoomsArr[i];
      this.roomContainerEl.appendChild(this.roomOptLabel[i]);

      this.roomOptEl[i].addEventListener("change", this.controllingRooms);
    }
  }

  controllingRooms = (e) => {
    document.querySelector(".output").innerText = "";
    this.roomContainerEl.remove();
    this.roomMsgEl.remove();
    this.enemyContainer.remove();
    new Room(
      totalRooms[e.target.value].connectingRooms,
      totalRooms[e.target.value].msg,
      totalRooms[e.target.value].enemy.number
    );
  };
}

const hall = new Room(totalRooms.hall.connectingRooms, totalRooms.hall.msg);

class Enemy {
  constructor() {
    this.x = x;
    this.y = y;



    enemyEl.addEventListener("click", this.shootingEnemies);
  }
  creatingEnemies() {
    if (this.numEnemies !== 0) {
      for (let i = 0; i <= this.numEnemies; i++) {
        this.enemyEl = document.createElement("div");
        this.enemyEl.id = `enemy[${i}]`;
        this.enemyEl.className = "enemies";
        this.enemyContainer.appendChild(enemyEl);
      }
    }
  }

  movingEnemies() {
    console.log("hello");
    this.enemyX = this.enemyX + 1;
    this.enemyEl.style.left = this.enemyX;
    this.enemyY = Math.sin(this.enemyX);
    this.enemyEl.style.top = this.enemyY;
  }
}
