var studyDesk = {
    description: stringManager.itemDescriptions.studyDesk,
    interact: function(player){
        player.inventory.push("key")
        alert(stringManager.itemDescriptions.key)
        mapManager.map[player.xPosition][player.yPosition].interactableItems.pop()
    }
}

var lockedDoor = {
    description: stringManager.itemDescriptions.lockedDoor,
    direction: "east",
    interact: function(player){
        if (player.inventory.length !== 0){
            for (var item in player.inventory){
                if (player.inventory[item].includes("key")){
                    var door = mapManager.map[player.xPosition][player.yPosition].interactableItems[0]
                    alert("The lock clicks, and the door seems to be open.")
                    mapManager.map[player.xPosition][player.yPosition].exits[door.direction] = true
                    mapManager.map[player.xPosition + 1][player.yPosition].exits["west"] = true
                    mapManager.map[player.xPosition][player.yPosition].interactableItems.pop()
                } else {
                    alert("You fumble around with your pockets but you can't seem to find a key.")
                }
            }
        } else {
            alert("You will probably need a key to unlock this door.")
        }
    }
}

var normalDoor = {
    description: stringManager.itemDescriptions.door,
    direction: "north",
    interact: function(player){
        var door = mapManager.map[player.xPosition][player.yPosition].interactableItems[0]
        alert("The ornate door groans and creaks as it swings open slowly and ominously.")
        mapManager.map[player.xPosition][player.yPosition].exits[door.direction] = true
        mapManager.map[player.xPosition][player.yPosition+1].exits["south"] = true
        mapManager.map[player.xPosition][player.yPosition].interactableItems.pop()
    }
}