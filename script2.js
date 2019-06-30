console.log("hello script js");


var parsedInput = null;
//var inputValue = "";
var hStoryCount = 0;

display("Welcome to the Chamber of Stories. Please select the type of adventure that you would like to embark on.\n    Choose from: \n    Horror \n    Fantasy");

document.getElementById('javascriptButton').onclick = function interpretAnswer() {
  var inputResults = document.getElementById('input').value;
  console.log("input value: " + inputResults);
  parsedInput = inputResults.toLowerCase();
  console.log("Parsed input value: " + parsedInput);
  checkAnswer();
};


var horrorStory = function(){
    if (hStoryCount < 1) {
            console.log('Entering Horror');
        hStoryCount++;
        output = "This is horror pt 1 choose stay or leave";
        console.log(hStoryCount);
        display(output);
    } else if (parsedInput === "stay" && hStoryCount === 1) {
            output = "Chose route 1 stay";
            display(output);
            hStoryCount++;
            console.log(hStoryCount + output);
        } else if (parsedInput === "leave" && hStoryCount === 1) {
            output = "Chose route 1 leave";
            display(output);
            hStoryCount++;
            console.log(hStoryCount + output);
        } else if (parsedInput === "stay" && hStoryCount === 2) {
            output = "Chose route 2 stay";
            display(output);
            hStoryCount++;
            console.log(hStoryCount + output);
        }
};


function checkAnswer() {
    if (parsedInput === "horror" || hStoryCount > 0) {
        horrorStory();
    }
};