//INITIALIZE SCENE VARIABLES
var startScene = {
    id:"start", //identifier
    action: "[W]ake up", //action verb to select this scene
    keyword: "W", //user input that directs user to this scene
    next: [],   //array of next possible scenes
    getMessage: function(p){    //message to display when user enters this scene
        return this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        var str = "Good Morning ";
        str+=p;
        str+=". It's 7 April 2020. You're in Singapore. What would you like to do?"
        return str;
    },
    getOptionMessage: function(p){
        var str="";
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
    getMessage: function(p){    //message to display when user enters this scene
        return this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "Yeah you should really work out. What would you like to do?"
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    }
};

var coffeeScene = {
    id:"coffee",
    next: [],
    action: "Drink [C]offee",
    get keyword() {
        return this.action.match(/\[([A-Z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "Nice. What kind of coffee would you like?"
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    }
};

var sleepScene = {
    id:"sleep",
    next: [],
    action: "Go back to [S]leep",
    get keyword() {
        return this.action.match(/\[([A-Z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "You start running.";
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    }
};

var runScene = {
    id:"run",
    next: [],
    action: "Go for a [R]un",
    get keyword() {
        return this.action.match(/\[([A-Z])\]/)[1];
    },
    getMessage: function(p){
        return "You start running."
    }
    };


//LINK SCENES TOGETHER
startScene.next.push("workout");
startScene.next.push("coffee");
startScene.next.push("sleep");

workoutScene.next.push("run")

//CREATE ALL SCENES ARRAY
var allScenes = [];
allScenes.push(startScene);
allScenes.push(workoutScene);
allScenes.push(coffeeScene);
allScenes.push(sleepScene);
allScenes.push(runScene);