function createRoomsAndItems(){
    mapManager.setRooms("bedroom", 0,0,1,1)
    mapManager.setRooms("hallway", 2,1,4,1)
    mapManager.setRooms("greathall", 4,2,5,4)

    setRoomDescription(1,0, "bedroom2")
    setRoomDescription(0,1, "bedroom3")
    setRoomDescription(1,1, "bedroom4")
    setRoomDescription(3,1, "hallway2")
    setRoomDescription(4,1, "hallway3")

    mapManager.map[1][0].interactableItems.push(studyDesk)
    mapManager.map[1][1].interactableItems.push(lockedDoor)
    mapManager.map[4][1].interactableItems.push(normalDoor)
}

function setRoomDescription(x,y, description){
    mapManager.map[x][y].description = stringManager.roomDescriptions[description]
}

function newPlayer(){
    while(true){
        var playerNameInput = prompt("Welcome to the game! Please key in a name to continue.")
        if (playerNameInput !== null){
            break
        } else {
             alert("Error! You must key in a name to continue.")
        }
    }
    return mapManager.createPlayer(playerNameInput)
}

function getDescriptionString(player){
    var descriptionString = ""
    var currentRoom = mapManager.map[player.xPosition][player.yPosition]

    //First display the room's description
    descriptionString += currentRoom.description
    descriptionString += "\n"

    //Second display the interactable items' descriptions
    if (currentRoom.interactableItems.length !== 0){
        var items = currentRoom.interactableItems
        for (var item in items){
            descriptionString += items[item].description
        }
    }
    descriptionString += "\n"

    //Third display text asking user what they want to do
    descriptionString += "What do you want to do?\n"

    //Fourth display the text for movement and interaction
    if (currentRoom.interactableItems.length !== 0){
        descriptionString += "[I]nteract with items here\n"
    }
    descriptionString += getMovementOptions(currentRoom)
    return descriptionString
}

function getMovementOptions(room){
    var exitStrings = "Move "
    if (room.exits.north === true){
        exitStrings += "[n]orth "
    }
    if (room.exits.south === true){
        exitStrings += "[s]outh "
    }
    if (room.exits.east === true){
        exitStrings += "[e]ast "
    }
    if (room.exits.west === true){
        exitStrings += "[w]est "
    }
    return exitStrings
}

function movePlayer(player, playerInput){
    var currentRoom = mapManager.map[player.xPosition][player.yPosition]
    if ((playerInput === "n" || playerInput == "north") && currentRoom.exits.north){
        player.yPosition++
    } else if ((playerInput === "e" || playerInput == "east") && currentRoom.exits.east){
        player.xPosition++
    } else if ((playerInput === "s" || playerInput == "south") && currentRoom.exits.south){
        player.yPosition--
    } else if ((playerInput === "w" || playerInput == "west") && currentRoom.exits.west){
        player.xPosition--
    } else {
        alert("You can't move that way!")
    }
}

function interactWithItems(player){
    var currentRoom = mapManager.map[player.xPosition][player.yPosition]
    var item = currentRoom.interactableItems[0]
    item.interact(player)
}