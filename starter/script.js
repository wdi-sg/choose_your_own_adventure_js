

var sanityPoints;
var substancePoints;
var intellectualPoints;
var modifier;
var currentScene;
var cast;
// var sceneTwo = gameObject.storyLine
// var sceneThree =

var charDetails = function() {

    sanityPoints = gameObject.storyLine.cast_one.details.startStats[0];
    substancePoints = gameObject.storyLine.cast_one.details.startStats[1];
    intellectualPoints = gameObject.storyLine.cast_one.details.startStats[2];

}

var optionSelector = function(input/*input 1,2,3 */) {//player chooses what to do (0 = fight, 1= run, 2= discourse)
    var x = input
    var option = gameObject.storyLine.cast_one.plotAction.scene_four[input]; /// need to choose scene function
    // var action = alert(option[]);
    var action = alert(option[0]);
    var outcome = alert(option[1]);
    modifier = option[2];

    cbangeMod(x);

}



/*var changeMod = function(input/*needs to have option number) {


    sanityPoints = sanityPoints - gameObject.storyLine.cast_one.plotAction.scene_four[2][2][0]
    substancePoints = substancePoints - gameObject.storyLine.
    // intellectualPoints =
}
*/

var charToPlay = function(select){
    if(select == 0) {
        console.log(gameObject.storyLine.cast_one);
        cast = gameObject.storyLine.cast_one;
    } else if (select == 3) {
        console.log("do Nothing");
    }
}


// var whichscene = function() {

//     currentScene

// }





























/*
console.log(gameObject);

var questionSelector = function(input) {

    if(input == 1) {
        return alert(gameObject.firstScene.first_three);
    } else if (input == 2) {
        return alert(gameObject.secondScene.second_one);
    }

}

var promptSelector = function(input) {

    if(input == 1) {
        return alert(gameObject.firstScene.first_three)
    } else if (input == 2) {
        return alert(gameObject.secondScene.second_one);
    }
}

var gameLogic = function(input) {
    if(input == 1) {
    questionSelector(promptSelector(input));
    ;
}
}
// var counter = 0;
var gameStart = function(input) {
    for(var i = 0; i < 5; i++) {
    // if (counter < 5) {
        gameLogic(input);
        console.log(i);

    }
}
// stepSelector(userInput);
// promptSelector(userInput);
*/