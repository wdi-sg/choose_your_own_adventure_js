var player = newPlayer()
createRoomsAndItems()

alert("You find yourself waking up with a throbbing pain in your head, and no recollection of who you are and what you were last doing. There are bruises on your arms and small cuts over your face. It was as though you had gotten into a fight and passed out...")

while (true){
    var playerInput = prompt(getDescriptionString(player))

    if (playerInput === "exit"){
        break
    } else {
        actOnInput(player, playerInput)
    }
}

// ---------------------------------------------------------------------------------------------

function actOnInput(player, playerInput){
    if(playerWantsToMove(playerInput)) {
        movePlayer(player, playerInput)
    }
    if(playerWantsToInteract(playerInput)){
        interactWithItems(player)
    }
}

function playerWantsToMove(playerInput){
    if (playerInput === "n" || playerInput === "north"|| playerInput === "s" || playerInput === "south" || playerInput === "e" || playerInput === "east" || playerInput === "w" || playerInput === "west"){
        return true
    }
}

function playerWantsToInteract(){
    if (playerInput === "I" || playerInput === "i") {
        return true
    }
}
