function createHelper(){
    var helperObject = {
        printObject: function(object){
            var keys = []
            for (var key in object){
                console.log(key + ": " + object[key])
            }
        }
    }
    return helperObject
}

function createNewPlayer(playerName){
    var playerObject = {
        name: playerName,
        hp: 45,
        mana: 20,
        weapon: null,
        turnsTaken: 0,
        xPosition: 0,
        yPosition: 0
    }
    return playerObject
}

function createDoor(direction){
    var door = {
        doorDirection: direction,
        isOpen: false
    }
    return door
}

function createRoom(roomType){
    var room = {
        description: roomDescription[roomType],
        interactableItems: [],
        people: null,
        northExit: false,
        southExit: false,
        eastExit: false,
        westExit: false,
        door: null,
        setDoor: function(direction){
            if(direction === "north"){
                this.door = createDoor("north")
            }else if (direction === "south"){
                this.door = createDoor("south")
            }else if (direction === "east"){
                this.door = createDoor("east")
            }else if (direction === "west"){
                this.door = createDoor("west")
            }
        }
    }
    return room
}



function createMap(){
    var map = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
    ]
    setRoom(map, "bedroom", 0,0,1,1)
    map[0][1].interactableItems.push(interactableItemObjects.studyDesk)
    map[1][1].setDoor("east")

    setRoom(map, "hallway", 2,1,4,1)
    map[2][1].setDoor("west")
    map[4][1].setDoor("north")

    setRoom(map, "greathall", 4,2,6,5)
    map[4][2].description = roomDescription.greathallCorner
    map[4][2].setDoor("south")
    return map
}

function setRoom(map, roomType, xStart, yStart, xEnd, yEnd){
    for (var i = xStart; i < xEnd + 1; i++){
        for(var j = yStart; j < yEnd + 1; j++){
            var room = createRoom(roomType)
             if (i !== xEnd){
                room.eastExit = true
             }
             if (i !== xStart){
                room.westExit = true
             }
             if (j !== yStart){
                room.southExit = true
             }
             if (j !== yEnd){
                room.northExit = true
             }
            map[i][j] = room
        }
    }
}

function getPlayerName(){
    while(true){
        var playerNameInput = prompt("Welcome to the game! Please key in a name to continue.")
        if (playerNameInput !== null){
            return playerNameInput
        } else {
             alert("Error! You must key in a name to continue.")
        }
    }
}

function getLocationString(){
    var locationString = ""
    var room = map[player.xPosition][player.yPosition]
    locationString += room.description
    if (room.door){
        locationString += "There seems to be a door towards the " + room.door.doorDirection + " here.\n\n"
    }
    locationString += getInteractableString(room)
    locationString += "What do you want to do?\n"
    if (room.interactableItems.length !== 0){
        locationString += "[I]nteract with items here\n"
    }
    if (room.door && !room.door.isOpen){
        locationString += "[O]pen the door here\n"
    }
    locationString += getMovementOptions(room)
    return locationString
}

function getInteractableString(room){
    if (room.interactableItems.length === 0){
        return ""
    }
    var string = ""
    var items = room.interactableItems
    for(var item in items){
        string += items[item].description
    }
    return string+"\n"
}

function getMovementOptions(room){
    var exitStrings = "Move "
    if (room.northExit === true){
        exitStrings += "[n]orth "
    }
    if (room.southExit === true){
        exitStrings += "[s]outh "
    }
    if (room.eastExit === true){
        exitStrings += "[e]ast "
    }
    if (room.westExit === true){
        exitStrings += "[w]est "
    }
    return exitStrings
}

function movePlayer(direction){
    var currentLocation = map[player.xPosition][player.yPosition]
    if (direction === "n" || direction === "north"){
        if (currentLocation.northExit === true){
            player.yPosition++
        } else {
            alert("You ran into something. Ouch! That was quite silly.")
        }
    } else if (direction === "s" || direction === "south"){
        if (currentLocation.southExit === true){
            player.yPosition--
        } else {
            alert("You ran into something. Ouch! That was quite silly.")
        }
    } else if (direction === "e" || direction === "east"){
        if (currentLocation.eastExit === true){
            player.xPosition++
        } else {
            alert("You ran into something. Ouch! That was quite silly.")
        }
    } else if (direction === "w" || direction === "west"){
        if (currentLocation.westExit === true){
            player.xPosition--
        } else {
            alert("You ran into something. Ouch! That was quite silly.")
        }
    } else {
        alert("That is not a valid input!")
    }
}
