console.log("hello script js");

//START
var welcomeMsg = "What is your name?";
display(welcomeMsg);

//User details
var userName;

//INITIALIZE SCENE VARIABLES
var startScene = {
    id:"start", //identifier
    action: "[W]ake up", //action verb to select this scene
    keyword: "W", //user input that directs user to this scene
    next: [],   //array of next possible scenes
    getMessage: function(p){    //message to display when user enters this scene
        var str = "Good Morning ";
        str+=p;
        str+=". It's 7 April 2020. You're in Singapore. What would you like to do?"
        // for(var i = 0; i < this.next.length; i++){
        //     str+="\n - "+this.next[i].action
        // }
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    }
};

var workoutScene = {
    id:"workout",
    action:"[W]orkout",
    keyword: "W",
    next: [],
    get keyword() {
        return this.action.match(/\[([A-Z])\]/)[1];
    },
    getMessage: function(p){
        return "Yeah you should really work out. What would you like to do?"
    }
};

var coffeeScene = {
    id:"coffee",
    next: [],
    action: "[D]rink coffee",
    get keyword() {
        return this.action.match(/\[([A-Z])\]/)[1];
    },
    getMessage: function(p){
        return "Nice. What kind of coffee would you like?"
    }
};

var sleepScene = {
    id:"sleep",
    next: [],
    action: "Go back to [S]leep",
    get keyword() {
        return this.action.match(/\[([A-Z])\]/)[1];
    },
    getMessage: function(p){
        return "Wow. Don't you have more productive things to do? Ok then. Sweet dreams."
    }
    };

//LINK SCENES TOGETHER
startScene.next.push("workout");
startScene.next.push("coffee");
startScene.next.push("sleep");


//CREATE ALL SCENES ARRAY
var allScenes = [];
allScenes.push(startScene);
allScenes.push(workoutScene);
allScenes.push(coffeeScene);
allScenes.push(sleepScene);

//USER INTERACTION
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
  } else {  //in other scenes
    //validate that input is correct
    //set currScene
     nextSceneId = getNextSceneId(currSceneId,currentInput);
     outputMsg = getScene(nextSceneId).getMessage();
  }


  return outputMsg;
};


//Return scene object using sceneId
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

var getNextSceneId = function(currSceneId, keyword){
    //loop thru array of objects of next in curr scene
    //if keyword matches the objects
    //return next scene id
    var currScene = getScene(currSceneId);
    var selectedSceneId = null;
    currScene.next.forEach( e => {
        var scene = getScene(e);
        if(keyword.toUpperCase()==scene.keyword)
            selectedSceneId = scene.id;
    } );
    return selectedSceneId;
}