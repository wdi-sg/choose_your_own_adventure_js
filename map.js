console.log("Map working")
var narration = null;
var enterToContinue = false
//Display message on the board
function display(text){
    var outputText = document.getElementById("outputText");
    outputText.innerText = text;

}

//Take input
document.querySelector('#input').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        var input = event.target.value;
        event.target.value =""
        switch(enterToContinue){
            case true:
                enterToContinue = false;
                game();
                break;
        }

        switch(currentPath){
            case 1:
                if(input === "left"){
                    currentRoom = "room2";
                    currentPath = 2;
                    enterToContinue = true;
                    narration = "You have chosen to move left. Press enter to continue"
                    display(narration);
                    break;
                }
        }
    }
})

var path = {
    visited: {
        room1: false,
        room2: false,
        room3: false,
    },
    room:{
        room1: "Entrance",
        room2: "Pantry",
        room3: "Lounge"
    }
}

var gameStart = true
var currentPath = 1;
var currentRoom = "room1";



function game(input){
    switch(currentPath){
        case 1:
            narration = `You are now in ${path["room"][currentRoom]}. You see two doors- left or right`;
            if(path["visited"][currentRoom] === true){
                narration = `${narration}\nYou have been here before.`;
            }
            narration = `${narration}\n\nChoose:\nleft\nright`;
            path["visited"][currentRoom] = true;
            display(narration);
            break;

        case 2:
            narration = `You are now in ${path["room"][currentRoom]}. You see two doors- left or right`;
            display(narration)
    }
}

if (gameStart === true){
    gameStart = false;
    game()
}