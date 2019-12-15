console.log("Choose your own adventure!");

// Pseudo-code
/*

// What I need to do is to not complicate things and focus on the first small few steps

step 1 : i need to have my user input his/her name. counter will be 0
step 2 : after use enters,  displays the message that he needs to choose the options
step 3 : counter will be 1 now. I need to make user enter a/b/c and enter the scenario
step 4 : after entering a scenario, user needs to choose the options on where to go
step 5 : user will get the desired response

// Scenario stages explanation
Scenario have to go from layers to layers to layers.
Scenario 0
user will have to input the name
Scenario 1
user choosing where to bring the date.
if user chooses movie goes to scenario 2
Scenario 2
user will have two options.
if user chooses horror
Scenario 3
the outcome of the date will happened i.e scare
*/

// Global variable

var name = "";

// create the object to store the layer and responses

var storyStages = [
{
    stage0: {
        stageA: `Hello and welcome ${name}! Choose option A, B, C`
    }
},
{
    stage1: {
        stageA: "movies",
        stageB: "dinner",
        stageC: "market"
    }
},
{
    stage2: {
        stageA: {
            optionA: "horror!",
            optionB: "comedy!",
            optionC: "action!"
        },
        stageB: {
            optionA: "chinese!",
            optionB: "western!",
            optionC: "japanese!"
        },
        stageC: {
            optionA: "games!",
            optionB: "theme park!"
        }
    }
},
{
    stage3: {
        stageA: {
            optionA: "Like it!",
            optionB: "Average show!",
            optionC: "Love it!"
        },
        stageB: {
            optionA: "Love it!",
            optionB: "Hate it!",
            optionC: "Average food!"
        },
        stageC: {
            optionA: "Love games!",
            optionB: "It's fine!"
        }
    }
}];

// create the function to loop through the layers(stages) and responses

var storySelect = ["stage0", "stage1", "stage2", "stage3"];
var storyStage = ["stageA", "stageB", "stageC"];
var storyOption = ["optionA", "optionB", "optionC"];
var layer = 0;

var story = function(input){
    name = input;
    console.log(name);
    for (var i = 0; i < storyStages.length; i++){
        var mainStorer = storyStages[i];
        for (var j = 0; j < storySelect.length; j++){
            var stageStorer = mainStorer[storySelect[j]];
            for (var k = 0; k < storyStage.length; k++){
                var finalStory = stageStorer[storyStage[k]];
                if(layer === 0){
                    layer++;
                    return finalStory;
                    break;
                }
            }
            break;
        }
        break;
    }
};

var inputHappened = function(currentInput){

    console.log(layer);
    return story(currentInput);

};

var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};