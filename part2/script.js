console.log('Game is running');

//--------Global Var ----------------
var user= '';
var userName = [];
var currentLayer = 0;
var choice = [];
var choiceskeyed = choice.toString().toLowerCase();
var message = '';


var storyFolder = [
//---------- Choose Place-----------
{
    zeroL:{
        places: [
        "Forest",
        "Mountain",
        "City"],
    },

},
//----------  Forest Storyline ---------------------
{
       oneF: {
            story: "you have chosen to go to the forest! you crashed into a remote forest ",
                stay: {
                    name: "decided to stay and wait",
                    result:"you dead of starvation",
                },
                search: {
                    name : "decided to search for help",
                    result: "You followed a small trail of water and found a river, Across the river you spotted  indigenous people holding spears and wearing bones around their necks",
                        badEnding: {
                            name: "decided to shout for help",
                            result: "They decided to eat you",
                        },
                        goodEnding: {
                            name: "decided to follow the river.",
                            result: "you continued to stay close to the river and follow its stream While walking you heard the sounds of a motor coming closer towards you",
                        }
                }
    }
},
//---------- Mountain storyline ---------------------
{
        oneM: {
            story: "you have chosen to go to the Mountain! you were hiking in the mountains you feel as if you are being watched ",
                stay: {
                    name: " Decide to rest ",
                    result:" you fell asleep and a mountain lion got you ",
                },
                search: {
                    name : "Take out your pepper spray",
                    result: "You took out your pepper spray and was prepared for any dangers ahead and out of a sudden a mountain lion pounces at you. you immediately use your pepper spray ",
                        badEnding: {
                            name: "You run away",
                            result: "The pepper spray slowed the mountain lion down but while running in the mountains you tripped and fell."
                        },
                        goodEnding: {
                            name: "Stay and make loud noises and lift your arms as high as possible",
                            result: "You defended yourself from the mountain lion!",
                        }
                    }
    }
},
//----------  City story line ---------------------
{
        oneC: {
            story: "you have chosen to go to the City! you got off the metro, walked up the stairs",
                stay: {
                    name: " decided to go home ",
                    result:"you go home take a nice shower and sleep",
                    },
                search: {
                    name : " decided to go to the bar ",
                    result: "You entered the bar, and a bunch of your friends were already there drinking. They invite you over to sit with them and they started to offer you drinks",
                        badEnding: {
                            name: " accept ",
                            result: "You ended up getting wasted and your friends had to carry you home",
                        },
                        goodEnding: {
                            name: " decline ",
                            result: "You ended up getting wasted and your friends had to carry you home, well cause you know close friends do that"
                        }
                    }
        }
}
]

var inputHappened = function(currentInput){
    user = currentInput.toUpperCase();
    userName.push(currentInput)
    if(currentLayer === 0){
        currentLayer ++;
        message = "Hello " + userName[0] + " you will be going on an adventure here are your choices" + "\n" + "a. " + storyFolder[0].zeroL["places"][0] + "\n" + "b. " + storyFolder[0].zeroL["places"][1] + "\n" + "c. " +storyFolder[0].zeroL["places"][2];
        document.querySelector("#input").value = "";
        return message;
    }else if(currentLayer === 1){
        if(currentInput === 'a'){
            console.log("selected forest");
            currentLayer++;
            message = storyFolder[1].oneF["story"] + "you have 2 choice " + "\n" + "a." + storyFolder[1].oneF["stay"].name + "\n" + "b. " + storyFolder[1].oneF["search"].name;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (currentInput === 'b'){
            console.log("selected Mountain");
            currentLayer++;
            message = storyFolder[2].oneM["story"] + "you have 2 choice " + "\n" + "a." + storyFolder[2].oneM["stay"].name + "\n" + "b. " + storyFolder[2].oneM["search"].name;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (currentInput === 'c'){
            console.log("selected City");
            currentLayer++;
            message = storyFolder[3].oneC["story"] + "you have 2 choice " + "\n" + "a. " + storyFolder[3].oneC["stay"].name + "\n" + "b. " + storyFolder[3].oneC["search"].name;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        }
//----------Layer 2 questions and storyline ----------
    } else if(currentLayer === 2){
        if(choice[0]=== 'a' && currentInput === 'a'){
            console.log("you dead");
            currentLayer+= 4;
            message = "You made a bad choice " + storyFolder[1].oneF["stay"].result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] === 'a' & currentInput === 'b') {
            console.log("you alive");
            currentLayer++;
            message = storyFolder[1].oneF["search"].result + "\n" + "a." + storyFolder[1].oneF["search"].badEnding.name + "\n" + "b. " + storyFolder[1].oneF["search"].goodEnding.name
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] === 'b' & currentInput === 'a') {
            console.log("you dead");
            currentLayer+= 3;
            message = "You made a bad choice " + storyFolder[2].oneM["stay"].result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] === 'b' & currentInput === 'b') {
            console.log("you alive");
            currentLayer++;
            message = storyFolder[2].oneM["search"].result + "\n" + "a." + storyFolder[2].oneM["search"].badEnding.name + "\n" + "b. " + storyFolder[2].oneM["search"].goodEnding.name
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] === 'c' & currentInput === 'a') {
            console.log("you home");
            currentLayer+= 3;
            message = "You made a good choice " + storyFolder[3].oneC["stay"].result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] === 'c' & currentInput === 'b') {
            console.log("you drunk");
            currentLayer++;
            message = storyFolder[3].oneC["search"].result + "\n" + "a." + storyFolder[3].oneC["search"].badEnding.name + "\n" + "b. " + storyFolder[3].oneC["search"].goodEnding.name
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        }
//-------------Layer 3 questions and storyline----------
 } else if (currentLayer === 3){
        if(choice[0] === 'a' && choice[1] === 'b' && currentInput === 'a'){
            console.log("you dead");
            currentLayer++;
            message = "You made a bad choice " + storyFolder[1].oneF["search"].badEnding.result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] ==='a' && choice[1] === 'b' && currentInput === 'b'){
            console.log("you alive");
            currentLayer++;
            message = "You survived " + storyFolder[1].oneF["search"].goodEnding.result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] === 'b' && choice[1] === 'b' && currentInput === 'a'){
            console.log("you alive");
            currentLayer++;
            message = "You survived " + storyFolder[2].oneM["search"].goodEnding.result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] ==='b' && choice[1] === 'b' && currentInput === 'b'){
            console.log("you dead");
            currentLayer++;
            message = "You made a bad choice " + storyFolder[2].oneM["search"].badEnding.result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] ==='c' && choice[1] === 'b' && currentInput === 'a'){
            console.log("you drunk");
            currentLayer++;
            message = "You made a bad choice " + storyFolder[3].oneC["search"].badEnding.result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        } else if (choice[0] === 'c' && choice[1] === 'b' && currentInput === 'b'){
            console.log("you drunk");
            currentLayer++;
            message = "You survived but you still drunk  " + storyFolder[3].oneC["search"].goodEnding.result;
            choiceskeyed = choiceskeyed + choice.push(currentInput);
            document.querySelector("#input").value = "";
            return message;
        }
    } else {
        message = "The story had ended, please enter a userName again";
        currentLayer = 0;
        user = '';
        choice = [];
    return message;
    }
}


var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};




//----------  Layer 1 ---------------------
        // oneS : {
        //     oneFor: `${userName} Lets go on an advanture! You have 3 choices A. Forest B. Mountain C. City `
        // },
//---------------------------------------------
/*
     Check user has input his/her name.
    if user has input name

     Check the current layer. and display message. 3 choices

    else
    display "input a Name"

----------  Layer 1 ---------------------
    Display message with 3 choices
     A.Forest
     B....
     C....

     If input === "A"
    Display message "Username", you have crashed in to a remote forest
    you have 2 options
    A. Stay
    B. Search for help

----------  Layer 2 ---------------------

    if input === "A"
    Display message you dead of starvation


    if input === "B"
    Display message You followed a small trail of water and found.a river
    Across the river you spotted the indigenous people holding spears and wearing bones around their necks
    you have 2 options
    A. Shout for their help
    B. Continue to Follow the river

----------  Layer 2 ---------------------

if input === "A"
    Display message They ate you.


    if input === "B"
    Display message you continued to stay close to the river and follow it's stream, While walking you heard the sounds of a motor coming closer towards you.
*/

// tried making a loop

//--------Check User Input-----------
// function checkStory(choices){
// var layerArr = [0,1,2,3];
// var layerArrAfter = ['zeroL','oneL','twoL','threeL'];
// var layerAfter = '';
// var sceneArr =[0,1,2,3];
// var sceneArrAfter = ['zeroFor','oneFor','twoFor','threeFor','zeroMon','oneMon','twoMon','threeMon','zeroCity','oneCity','twoCity','threeCity'];
// var sceneAfter = '';

// for (var i = 0; i < layerArr.length; i++) {
//     if(currentLayer === layerArr[i]){
//     layerAfter = layerArrAfter[i];
//     }
//     for (var j = 0; j < sceneArr.length; j++) {
//         if(currentStory === sceneArr[j]){
//             sceneAfter = sceneArrAfter[j]
//             let story = storyFolder[layerAfter][sceneAfter];
//         if(userInput === 'A'){
//             console.log(storyFolder.zeroL.zeroFor.A);
//         }else if(userInput === 'B'){
//             console.log(startStory.zeroL.zeroFor.B);
//         }else if(userInput === 'C'){
//             console.log(startStory.zeroL.zeroFor.B);
//             }
//         }
//     }
// }