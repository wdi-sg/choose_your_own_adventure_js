interface itemObject {
    description: string;
    userPrompt: string;
    //npc that this item has an interaction with
    npc: {
        name: string;
        completed: boolean;
    }
    item: []
}
interface roomObject {
    description: string;
    userPrompt: string;
    npc: {
        name: string;
        completed: boolean;
    }
    item: []
}
interface npcObject {
    name: string,
    description: string,
    actionCommand: string[],
    actionDescription: string,
    function: string[],
    item: {
        name: string,
        response: string,
        rewardItem: string
    }
}
let playerModel = {
    position: [ 1, 1 ],
    inventory: []
}
function moveUser( moveCommand: string ) {
    let incrementX = 0;
    let incrementY = 0;

    switch (moveCommand) {
        case "n":
            incrementY = 1;
            break;
    
        case "e":
            incrementX = 1;
            break;
    
        case "s":
            incrementY = -1;
            break;
    
        case "w":
            incrementX = -1;
            break;
    
        default:
            break;
    }
    //update player model's position in the x-axis
    playerModel.position[0] = playerModel.position[0] + incrementX;
    //update player model's position in the y-axis
    playerModel.position[1] = playerModel.position[1] + incrementY;
}
//run enterRoom after user has moved or if user wants to recall status of current room
//enterRoom will read the userPrompt in room, npc description if available and items available to take
function enterRoom( x: number, y: number ) {
    let room: roomObject = main.data.rooms.x.y;
    //userPrompt needs to contain information on what actions user can execute in the particular room
    //such as pick up items, iteract with npcs, which directions can be moved in

    //find npc in npcs array
    let nameOfNpcInRoom: string = room.npc.name;
    //iterate through array of npc objects to match name and select npc
    let npcArray: npcObject[] = main.data.npcs;
    let npcInRoom: npcObject;
    for (let i = 0; i < npcArray.length; i++) {
        const npcName: string = npcArray[i].name;
        if (npcName === nameOfNpcInRoom) {
            //npc found, bind this npc to npcInRoom var
            npcInRoom = npcArray[i];
        }
    }

    let userPrompt: string = room.userPrompt + "\n";
    let userInput: string = prompt(userPrompt);
}