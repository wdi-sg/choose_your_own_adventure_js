console.log("hello script js");

//START
var welcomeMsg = "What is your name?";

display(welcomeMsg);

//User details
var userName;
var hitPoints = 10;

//MANAGE USER INTERACTION
var counter=0;
var currSceneId = "";
var inputHappened = function(currentInput){
  console.log( currentInput );
  console.log("counter: "+ counter);
  //initialize variables;
  var outputMsg="";
  var nextSceneId = null;
  //increase counter for every input
  counter++;
  //First input (after user name)
  if(counter===1){
    currSceneId = "start"
    outputMsg = startScene.getMessage(currentInput);
    userName = currentInput;
  } else {  //in other scenes
    //validate that input is correct
    //set currScene
     nextSceneId = getNextSceneId(currSceneId,currentInput);
     outputMsg = getScene(nextSceneId).getMessage(userName);
     currSceneId = nextSceneId;
  }
  return outputMsg;
};

//Return scene object given sceneId
var getScene = function(sceneId){
    //search allscenes array and return the scene object
    var res = null;
    allScenes.forEach(e => {
        if(e.id==sceneId){
            res = e;
        }
    });
    if(res==null){
        // console.log("scene not found.");
        return
    } else {
    return res;
    }
}

//Return next scene id given current scene id and user input
var getNextSceneId = function(currSceneId, keyword){
    var selectedSceneId = null;
    getScene(currSceneId).next.forEach( e => {
        var scene = getScene(e);
        if(keyword.toUpperCase()==scene.keyword.toUpperCase())
            selectedSceneId = scene.id;
    } );
    return selectedSceneId;
}

//Checks if user input is valid