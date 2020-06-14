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
        str+=". You wake up and it's 7 April 2020, day 1 of Circuit Breaker in Singapore. What would you like to do?"
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
        return this.action.match(/\[([A-Za-z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "Yeah you should really work out. What sort of workout do you want to try today?"
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
        return this.action.match(/\[([A-Za-z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.art+this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "Of course. You have a nice 3-D coffee machine that you copied from asciiart.com a few days ago but haven't had a chance to use it. You stroll over to the machine and realize you're out of coffee beans!"
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    },
    art:""
};

var sleepScene = {
    id:"sleep",
    next: [],
    action: "Go back to [S]leep",
    get keyword() {
        return this.action.match(/\[([A-Za-z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "Are you sure? Don't you have more productive things to do like your SEI assignment? Alright, enjoy your nap "+p+".";
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
        return this.action.match(/\[([A-Za-z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.art+this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "You start running at the neighbourhood park. From a distance you notice someone who looks like your childhood sweetheart. You also notice a really cute kitten nearby. What do you do?"
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    },
    art:""
};

var abScene = {
    id:"ab",
    next: [],
    action: "Do Chloe Ting [A]bs Workout",
    get keyword() {
        return this.action.match(/\[([A-Za-z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.art+this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "You start doing the abs workout that you've been doing daily for the past two weeks knowing that there will be no results. After two minutes, you give up."
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    },
    art:""
    };


var catScene = {
    id:"cat",
    next: [],
    action: "Pet the [c]at",
    get keyword() {
        return this.action.match(/\[([A-Za-z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.art+this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "You say meow. The cat meows back while you gently stroke her head. From the corner of your eye you notice your friend walking towards you."
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    },
    art:""
    };

var outScene = {
    id:"out",
    next: [],
    action: "Head [o]ut to get some beans.",
    get keyword() {
        return this.action.match(/\[([A-Za-z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.art+this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "You head towards your usual hipster cafe where you get your overpriced coffee beans. As you walk, you notice someone familiar in the distance. You also see the neighbourhood cat stretching its legs nearby."
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    },
    art:""
    };

var hiScene = {
    id:"hi",
    next: [],
    action: "Say [h]i to your friend",
    get keyword() {
        return this.action.match(/\[([A-Za-z])\]/)[1];
    },
    getMessage: function(p){    //message to display when user enters this scene
        return this.art+this.getBaseMessage(p)+this.getOptionMessage();
    },
    getBaseMessage: function(p){
        return "You smile at him. And he notices your smile. \nAs he approaches, you realise that he's not your friend but a Safe Distancing Ambassador. He also notices your smile because YOU'RE NOT WEARING A MASK."
    },
    getOptionMessage: function(p){
        var str="";
        for(var i = 0; i < this.next.length; i++){
            str+="\n - "+ getScene(this.next[i]).action
        }
        return str;
    },
    art:""
    };

//ADD ALL SCENES MASTER ARRAY
var allScenes = [];
allScenes.push(startScene);
allScenes.push(workoutScene);
allScenes.push(coffeeScene);
allScenes.push(sleepScene);
allScenes.push(runScene);
allScenes.push(abScene);
allScenes.push(catScene);
allScenes.push(outScene);
allScenes.push(hiScene);

//LINK SCENES TOGETHER
startScene.next.push("workout");
startScene.next.push("coffee");
startScene.next.push("sleep");

workoutScene.next.push("run");
workoutScene.next.push("ab");

abScene.next.push('coffee');
abScene.next.push('sleep');

coffeeScene.next.push('sleep');
coffeeScene.next.push('out');

runScene.next.push('cat');
runScene.next.push('hi');

outScene.next.push('cat');
outScene.next.push('hi');

catScene.next.push('hi');

sleepScene.next.push('start');

//ADD ASCII ART
abScene.art = absArt;
runScene.art = runArt;
coffeeScene.art = coffeeArt;
catScene.art = catArt;

//BATTLE LOOP
//if currentscene is hi scene
    //if first time entering scene
    //show available responses

    //if not the first time
    //capture the response, and reply accordingly
        //if response is 1 to 4
        //remove response from array
        //generate random damage
        //reduce hp by damage amount
        //show corresponding ambassdor reply

//1claim you're a sovereign  and that you're "We the people"
//2claim insanity
//3claim that the safe distancing ambassador is racist
//4start doing jumping jacks and claim you're warming up for a run
//5cover your eyes


//lol, that won't work, we've had someone else tried that already.
//yeah, given your affinity with cats i wouldn't be surprised. but still, no.
//please don't bring race into this. besides we are of the same race
//oh who are you kidding? you don't even look like you workout.

//IT WORKED