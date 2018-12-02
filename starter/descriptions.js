var testVariable = 1
var roomDescription = {
    hallway: "You are standing in a long hallway. It is adorned with portraits of old men and women, but you are not sure who they are.\n\n",
    bedroom: "You are in a small but cozy bedroom. The windows are almost floor-to-ceiling in length, and the regal blue curtains are half-drawn. A single bed lies in the corner of the bedroom, next to a mahagony-colored study desk.\n\n",
    greathallCorner: "You find yourself standing the in the corner of a magnificent great hall. The room is enormous, supported by pillars that are adorned with marble, handcarved cherubs... but many of them look damaged, and some of them even look like they have been deliberately destroyed. \n\nIncomplete suits of armor line the edges of the room. Some of them are dented and rusted. \n\nSunlight barely peers through the stained glass windows, which are covered in a layer of what looks like grime... and blood... You sense something is very wrong here.\n\n",
    greathall: "You notice that in the northern section of the great hall - on the throne - sits an old man with a crown on his head. You can hear him coughing viciously from time to time. He sounds very ill.\n\n"
}

var interactableItemObjects = {
    studyDesk: {
        description: "The mahagony-colored desk is in this part of the room.\n",
        interact: function(currentRoom){
            player.HP += 5;
            alert(this.interactionDescription)
            currentRoom.interactableItems.pop()
        },
        interactionDescription: "There was a tiny health potion in one of the desk drawers. You take it and immediately drink it. Some of your flesh wounds heal before your eyes (HP +5)."
    }
}