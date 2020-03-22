console.log("Choose your own adventure!");

// Global variable

var name = "";

// create the object to store the layer and responses

var storyA = {
    layer1: "You have chosen movies! What would you like to watch? A. Horror B. Comedy C. Action",
    layer2: {
        A: "Horror works! Date will go out with you again",
        B: "Comedy movie was a terrible idea!",
        C: "Action is great! Will go out with you for the next date"
    }
};

var storyB = {
    layer1: "You have chosen dinner! Where would you like to do? A. Japanese B. Chinese C. Fusion",
    layer2: {
        A: "Sushi was a great idea! Will go out with you again",
        B: "Chinese was bad! Will not go out with you again",
        C: "Fusion was awesome! Will go out with you again"
    }
};

var storyC = {
    layer1: "You have chosen night market! What would you like to do? A. Play arcade games B. Go on a roller coaster",
    layer2: {
        A: "You won a prize! Will go out with you again",
        B: "Scary! Will not go out with you again"
    }
};

// create the function to loop through the layers(stages) and responses

var storyLayer = ["layer1", "layer2", "layer3"];
var storyOption = ["A", "B", "C"];
var layer = 0;
var option = "";

var storySelection = function(input){
     if (layer === 2){
        if (input === "A"){
            option = input;
            return storyA[storyLayer[0]];
        } else if (input === "B"){
            option = input;
            return storyB[storyLayer[0]];
        } else if (input === "C"){
            option = input;
            return storyC[storyLayer[0]];
        }
    } else if (layer === 3){
        if(option === "A"){
            if (input === "A"){
            return storyA[storyLayer[1]][storyOption[0]]
            } else if (input === "B"){
                return storyA[storyLayer[1]][storyOption[1]]
            } else if (input === "C"){
                return storyA[storyLayer[1]][storyOption[2]]
            }
        } else if(option === "B"){
            if (input === "A"){
                return storyB[storyLayer[1]][storyOption[0]]
            } else if (input === "B"){
                return storyB[storyLayer[1]][storyOption[1]]
            } else if (input === "C"){
                return storyB[storyLayer[1]][storyOption[2]]
            }
        } else if(option === "C"){
            if (input === "A"){
                return storyC[storyLayer[1]][storyOption[0]]
            } else if (input === "B"){
                return storyC[storyLayer[1]][storyOption[1]]
            }
        }
    }
}

var inputHappened = function(currentInput){
    name = currentInput;
    if (layer === 0){
        layer++;
        return "Hi! " + name + " choose your option: A. Movies B. Dinner C. Night Market"
    } else if (layer === 1){
        layer++;
        return storySelection(currentInput);
    } else if (layer === 2){
        layer++
        return storySelection(currentInput);
    }
};

var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};