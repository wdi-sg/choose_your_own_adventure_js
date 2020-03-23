let lobby = {
  kitchen: {
    place: "kitchen",
    question:
      "You are in the kitchen, there is a dead body in the floor. What do you want to do: 1. Take a knife (type knife); 2. See the body (type body); 3. scream",
    knife: {
      place: "knife",
      question:
        "Very well, that body is a zombie, you have unloked the password key (caca). Where do you want to go now?? a. children's room b. bathroom c. suicide cabinet",
      children: {
        question: "what is the password? ",
        place: "children's room"
      },
      bathroom: {
        question: "Take a shower before you die",
        place: "bathroom"
      },
      suicide: {
        place: "suicide",
        question: "Coward"
      }
    },

    body: {
      place: "body",
      question: "The body was a zombie, you are dead"
    },
    scream: {
      place: "scream",
      question:
        "Oh no!!, you alert all the bad spirits...now they will go inside your body and eat you. To save your soul go to your house and punish yourself. Hurt the body to save the spirit. And also you are dead"
    }
  },

  livingroom: {
    place: "living room",
    question:
      "Sorry, there was a vampire in the room and he drink your blood, you are dead"
  },
  pool: {
    place: "pool",
    question:
      "Sorry, there was a vampire in the room and he drink your blood, you are dead"
  }
};

let userLocation;
console.log(userLocation);

var inputHappened = function(currentInput) {
  if (!userLocation) {
    document.getElementById("input").value = "";
    userLocation = currentInput;
    return lobby[currentInput].question;
  } else if (
    userLocation === lobby.kitchen.place &&
    currentInput === lobby.kitchen.knife.place
  ) {
    document.getElementById("input").value = "";
    userLocation = currentInput;
    return lobby.kitchen.knife.question;
  } else if (currentInput === lobby.livingroom.place) {
    userLocation = currentInput;
    return lobby.livingroom.question;
  } else if (
    userLocation === lobby.kitchen.knife.place &&
    currentInput === lobby.kitchen.knife.children.place
  ) {
    document.getElementById("input").value = "";
    userLocation = currentInput;
    return lobby.kitchen.knife.children.question;
  } else if (currentInput === lobby.kitchen.body.place) {
    document.getElementById("input").value = "";
    userLocation = currentInput;
    return lobby.kitchen.body.question;
  } else if (currentInput === lobby.kitchen.scream.place) {
    document.getElementById("input").value = "";
    userLocation = currentInput;
    return lobby.kitchen.scream.question;
  } else if (
    userLocation === lobby.kitchen.knife.children.place &&
    currentInput === "caca"
  ) {
    document.getElementById("input").value = "";
    return "Congrats!!! you won, just go out of this house of hell, be happy, eat vegetables and wash your hands";
  } else if (currentInput === lobby.kitchen.knife.bathroom.place) {
    document.getElementById("input").value = "";
    userLocation = currentInput;
    return lobby.kitchen.knife.bathroom.question;
  } else if (currentInput === lobby.kitchen.knife.suicide.place) {
    document.getElementById("input").value = "";
    userLocation = currentInput;
    return lobby.kitchen.knife.suicide.question;
  } else if (currentInput === lobby.pool.place) {
    document.getElementById("input").value = "";
    userLocation = currentInput;
    return lobby.pool.question;
  }
  return lobby[userLocation][currentInput];
};

document.getElementById("output").innerHTML =
  "Welcome to the house of terror, to go out alive you have to find the password that open the exit door. " +
  "Type the complete answer to the questions made. Where do you want to go? 1. kitchen 2. living room(type livingroom) 3. pool";
  document.getElementById("output").innerHTML = firstQuestion();
  createBoard();
  
  function flipDoor() {
    const doorId = this.getAttribute("data-id");
    this.setAttribute("src", rooms[doordId].doorImage);
  
    checkForMatch();
  }
  function createBoard() {
    for (let i = 0; i < 3; i++) {
      const doorElement = document.createElement("img");
      doorElement.setAttribute("src", "images/kitchendoor.jpg");
      doorElement.setAttribute("data-id", i);
      doorElement.addEventListener("click", flipDoor);
      document.getElementById("gameBoard").appendChild(doorElement);
    }
  }
  function resetCards() {
    for (let j = 0; j < 3; j++) {
      const kitchenLivingroomDoor = document.getElementsByTagName("img")[j];
      kitchenLivingroomDoor.setAttribute("src", "images/kitchendoor.jpg");
    }
  }
  