console.log("hello script js");

/*var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};
*/

var parsedInput = null;
//var inputValue = "";
var hStoryCount = 0;

display("Welcome to the Chamber of Stories. Please select the type of adventure that you would like to embark on.\n    Select: \n    Horror \n    Fantasy");

document.getElementById('javascriptButton').onclick = function interpretAnswer() {
  var inputResults = document.getElementById('input').value;
  console.log("input value: " + inputResults);
  parsedInput = inputResults.toLowerCase();
  checkAnswer();
};

/*var inputHappened = function(currentInput) {
    if (typeof(currentInput) === 'string'){
        var parsedInput = currentInput.toLowerCase();
    }
   var inputType = typeof parsedInput;
    console.log( parsedInput + "is a " + inputType );

    //Create counter to find out if in horror/fantasy/etc story, and horror++ to see which step of story you are in.

//    horrorStory(currentInput);

    if (parsedInput === "horror" || hStoryCount > 0) {
        horrorStory();
    }
};*/

/*    if (inputHappened === "horror" || inputHappened === "Horror") {
        horrorStory();
    }
*/



var horrorStory = function(){
    if (hStoryCount < 1) {
            console.log('Entering Horror');
        hStoryCount++;
        output = "This is horror pt 1 choose stay or leave";
        console.log(hStoryCount);
        display(output);
    }
};


function checkAnswer() {
    if (parsedInput === "horror" || parsedInput === "Horror") {
        horrorStory();
};

//    if (inputHappened === "horror" || inputHappened === "Horror") {
        /*if (hStoryCount < 1) {
            console.log('Entering Horror');
        hStoryCount++;
        output = "This is horror pt 1 choose stay or leave";
        console.log(hStoryCount);
        display(output);
        } else if (parsedInput === "stay" || hStoryCount = 1) {
            display("Route 1");
            output = "Chose route 1"
            hStoryCount++;
            console.log(hStoryCount + output); }*/