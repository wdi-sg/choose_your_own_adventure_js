interface itemObject {
  name: string;
  description: string;
}
interface roomObject {
  description: string;
  userPrompt: string;
  npc: {
    name: string;
    completed: boolean;
  };
  items: string[];
}
interface npcObject {
  name: string;
  description: string;
  actionCommand: string[];
  actionDescription: string;
  function: string[];
  item: {
    name: string;
    response: string;
    rewardItem: string;
  };
}
let userInput: string = "";
let nameOfNpcInRoom: string = "";
let npcInRoom: npcObject;
let itemsInRoom: string[];
let reload: boolean = false;

let playerModel = {
  position: [1, 1],
  inventory: []
};

//npc functions
function kimJongIll() {
  let userIn: string = prompt("Say something");
  alert("Kim Jong Ill: " + userIn);
}
function eatSashimi() {
  alert(
    "As you ingest slice after slice, you disregard the fact that there's a slight smell to the fish. Your stomach starts to ache, twist and turn. Your head starts to throb terribly. As your vision fades to black, you remember how mother used to say something about sashimi being dangerous and some guy having his brains being eaten by worms..."
  );
  reload = true;
  location.reload(true);
}
function submitSoul() {
  alert(
    "Deep down inside you always wished to be just like Anastasia Steele, plus you like cats. An eternity of feline bdsm awaits you."
  );
  reload = true;
  location.reload(true);
}

let itemsArray: itemObject[] = main.data.items;
//function to use to move user by 1 room in the north/east/south/west direction relative to where user currently is
function moveUser(moveCommand: string) {
  let incrementX = 0;
  let incrementY = 0;
  let positionX = playerModel.position[0];
  let positionY = playerModel.position[1];
  let roomsKeys = Object.keys(main.data.rooms);
  let roomsKeysX = Object.keys(main.data.rooms[positionX]);
  switch (moveCommand) {
    case "n":
      if (positionY === roomsKeysX.length) {
        alert("invalid movement, there is no door");
      } else {
        incrementY = 1;
      }
      break;

    case "e":
      if (positionX === roomsKeys.length) {
        alert("invalid movement, there is no door");
      } else {
        incrementX = 1;
      }
      break;

    case "s":
      if (positionY === 1) {
        alert("invalid movement, there is no door");
      } else {
        incrementY = -1;
      }
      break;

    case "w":
      if (positionX === 1) {
        alert("invalid movement, there is no door");
      } else {
        incrementX = -1;
      }
      break;

    default:
      break;
  }
  //update player model's position in the x-axis
  playerModel.position[0] = positionX + incrementX;
  //update player model's position in the y-axis
  playerModel.position[1] = positionY + incrementY;
  console.log(playerModel);
}
//run enterRoom after user has moved or if user wants to recall status of current room
//enterRoom will read the userPrompt in room, npc description if available and items available to take

function getRoom() {
  let x: number = playerModel.position[0];
  let y: number = playerModel.position[1];
  let room: roomObject = main.data.rooms[x][y];
  return room;
}

function enterRoom() {
  //gets current position of player
  let x: number = playerModel.position[0];
  let y: number = playerModel.position[1];
  let room: roomObject = main.data.rooms[x][y];
  //userPrompt needs to contain information on what actions user can execute in the particular room
  //such as pick up items, iteract with npcs, which directions can be moved in

  //find npc in npcs array
  nameOfNpcInRoom = room.npc.name;
  //iterate through array of npc objects to match name and select npc
  let npcArray: npcObject[] = main.data.npcs;
  //initialise npcInRoom as an emptyRoom
  npcInRoom = npcArray[0];
  for (let i = 0; i < npcArray.length; i++) {
    const npcName: string = npcArray[i].name;
    if (npcName === nameOfNpcInRoom) {
      //if npc found, bind this npc to npcInRoom
      npcInRoom = npcArray[i];
    }
  }
  let npcDescription: string = npcInRoom.description;
  let npcActionDescription: string = npcInRoom.actionDescription;

  itemsInRoom = room.items;
  let itemsInRoomDescription: string =
    "\nItems in the room that can be picked up:";
  //iterate through items in room and create text block of item name followed by item description.
  for (let i = 0; i < itemsInRoom.length; i++) {
    const itemInRoom = itemsInRoom[i];

    for (let j = 0; j < itemsArray.length; j++) {
      const itemNameInArray: string = itemsArray[j].name;
      const itemDescriptionInArray: string = itemsArray[j].description;
      if (itemNameInArray === itemInRoom) {
        itemsInRoomDescription =
          itemsInRoomDescription +
          "\n" +
          itemNameInArray +
          ": " +
          itemDescriptionInArray;
      }
    }
  }
  itemsInRoomDescription =
    itemsInRoomDescription + "\nType the name of the item to pick it up.\n\n";

  //setup movement conditionals to ensure user does not move out of grid
  let roomsKeys = Object.keys(main.data.rooms);
  let roomsKeysX = Object.keys(main.data.rooms[x]);
  let movementMessage: string =
    'Type "n" to move north, "s" to move south, "e" to move east and "w" to move west.';
  if (x === 1) {
    //don't allow movement in the West
    movementMessage = movementMessage + "\nThere is no door to the West";
  } else if (x === roomsKeys.length) {
    //don't allow movement in the East
    movementMessage = movementMessage + "\nThere is no door to the East";
  }
  if (y === 1) {
    //don't allow movement in the South
    movementMessage = movementMessage + "\nThere is no door to the South";
  } else if (y === roomsKeysX.length) {
    //don't allow movement in the North
    movementMessage = movementMessage + "\nThere is no door to the North";
  }

  let inventoryMessage: string = "Your inventory contains: ";
  if (playerModel.inventory.length === 0) {
    inventoryMessage = inventoryMessage + "\nNothing\n\n";
  } else {
    for (let i = 0; i < playerModel.inventory.length; i++) {
      const item = playerModel.inventory[i];
      inventoryMessage = inventoryMessage + "\n" + item;
    }
    inventoryMessage =
      inventoryMessage + "\nType the item name to use it in this room.\n\n";
  }
  //order of userPrompt; 1. description of npc in room, 2. action description to interact with npc in room 3a. items in room 3b. description of items in room that follow with each item 4. Default options: movement options (user cannot move out of map. if at [1,y], no option to move west) 5. List items player has in inventory

  let userPrompt: string =
    nameOfNpcInRoom +
    ", " +
    npcDescription +
    "\n" +
    npcActionDescription +
    itemsInRoomDescription +
    inventoryMessage +
    movementMessage;
  userInput = prompt(userPrompt);
  console.log("You entered " + userInput);
}

function npcFunctions() {
  //identify which room player is in
  let x: number = playerModel.position[0];
  let y: number = playerModel.position[1];
  let room: roomObject = main.data.rooms[x][y];
  //get npc in the room
}

//MAIN function running the game
function gameLoop() {
  //use userInput to execute a function
  //userInput can be nsew which denotes movement,
  //0,1,2,3,4... which denotes interaction with npc
  //an item name, which denotes the user picking up the item
  //"use " + "item_name" which denotes using the item in the room.
  while (
    !((playerModel.inventory.includes("exit")) || (userInput === "quit") ||
    (reload === true))
  ) {
    enterRoom();
    let room: roomObject = getRoom();
    switch (userInput) {
      case "0":
        console.log("user typed 0");
        break;
      case "1":
        //look through NPC object, get NPC object's function name, run that function
        switch (nameOfNpcInRoom) {
          case "Kim Jong Ill":
            kimJongIll();
            break;
          case "sashimi":
            eatSashimi();
            break;
          case "Lord Meow Meow":
            submitSoul();
            break;
          default:
            break;
        }
        console.log("user typed 1");

        break;
      case "n":
        moveUser(userInput);
        console.log("user typed n");

        break;
      case "s":
        moveUser(userInput);
        console.log("user typed s");

        break;
      case "e":
        moveUser(userInput);
        console.log("user typed e");

        break;
      case "w":
        moveUser(userInput);
        console.log("user typed w");

        break;

      default:
        console.log("user did not type any usable input");

        break;
    }
    //create code that only triggers if user has item in inventory.
    if (playerModel.inventory.includes(userInput)) {
      //since item is in inventory, next, check to see if item can be used on this npc.
      if (npcInRoom.item.name === userInput) {
        alert(npcInRoom.item.response);
        let rewardItem: string = npcInRoom.item.rewardItem;
        //use for loop to find position of this item used in player inventory and slice it away
        for (let i = 0; i < playerModel.inventory.length; i++) {
          const item = playerModel.inventory[i];
          if (item === userInput) {
            playerModel.inventory.splice(i, 1);
            //item has been removed from inventory
          }
        }
        //remove npc from room
        room.npc.name = "Empty room";
        let rewardItemDescription: string;
        for (let j = 0; j < itemsArray.length; j++) {
          const itemNameInArray: string = itemsArray[j].name;
          const itemDescriptionInArray: string = itemsArray[j].description;
          if (itemNameInArray === rewardItem) {
            rewardItemDescription =
              "\n" + itemNameInArray + ": " + itemDescriptionInArray;
          }
        }
        //give player the reward item
        playerModel.inventory.push(rewardItem);
        alert("You received " + rewardItemDescription);
      } else {
        alert("You cannot use that item here.");
      }
    }
    //create code that picks up the item if it is in the room
    for (let i = 0; i < itemsInRoom.length; i++) {
      const item = itemsInRoom[i];
      if (userInput === item) {
        //since item is in the room and userInput matches the item, pick it up and put it in the player inventory
        playerModel.inventory.push(item);
        //next, remove the item from the room
        itemsInRoom.splice(i, 1);
        //item has been removed from inventory
      }
    }
    //end of while loop
  }
  alert("Congratulations, you escaped, now you're stuck back in real life.");
}
gameLoop();
