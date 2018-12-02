var helperObject = createHelper()
var playerName = getPlayerName()
var player = createNewPlayer(playerName)
var map = createMap()

while(true){
    var descriptionString = getLocationString()
    var userInput = prompt(descriptionString)
    var currentRoom = map[player.xPosition][player.yPosition]

    if (userInput === "exit"){
        break;
    }
    if(playerWantsToMove(userInput)) {
        movePlayer(userInput)
    }
    if(playerWantsToInteract(userInput) && currentRoom.interactableItems.length !==0){
        currentRoom.interactableItems[0].interact(currentRoom)
    }
    if(currentRoom.door && playerWantsToOpenDoor(userInput)){
        currentRoom.door.isOpen = true
        var doorDirection = currentRoom.door.doorDirection
        enableTheExit(currentRoom, doorDirection)
        alert("You opened the door")
    }
}

function playerWantsToMove(userInput){
    if (userInput === "n" || userInput === "north" || userInput === "s" || userInput === "south" || userInput === "e" || userInput === "east" || userInput === "w" || userInput === "west"){
        return true
    }
}

function playerWantsToInteract(userInput){
    if (userInput === "i" || userInput === "I"){
        return true
    }
}

function playerWantsToOpenDoor(userInput){
    if (userInput === "o" || userInput === "O"){
        return true
    }
}