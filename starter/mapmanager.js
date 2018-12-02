var mapManager = {
    map: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
        ],
    createRoom: function(roomType){
        var room ={
            description: stringManager.roomDescriptions[roomType],
            interactableItems: [],
            people: [],
            exits: {
                north: false,
                east: false,
                south: false,
                west: false
            }
        }
        return room
    },
    createPlayer: function(playerName){
        var player = {
            name: playerName,
            hp: 45,
            mana: 20,
            weapon: null,
            turnsTaken: 0,
            xPosition: 0,
            yPosition: 0,
            inventory: []
        }
        return player
    },
    setRooms: function(roomType, xStart, yStart, xEnd, yEnd){
        for (var i = xStart; i < xEnd + 1; i++){
            for(var j = yStart; j < yEnd + 1; j++){
                var room = this.createRoom(roomType)
                if (i !== xStart){
                    room.exits.west = true
                }
                if (i !== xEnd){
                    room.exits.east = true
                }
                if (j !== yStart) {
                    room.exits.south = true
                }
                if (j !== yEnd){
                    room.exits.north = true
                }
                this.map[i][j] = room
            }
        }
    }
}