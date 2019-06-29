updateDay(0);
updateTime(9);

// test
// document.getElementById('mainDisplay').innerHTML = "HELLO"

// function to push to mainDisplay
var pushMain = function(input){
    document.getElementById('mainDisplay').innerHTML = input;
}
//call: pushMain(input);

var storyText = null;
var choice1 = null;
var choice2 = null;
var choice3 = null;

//placeholder
var test = function(time){
    console.log(time);
}



// to put choice1 and function test(time) in button 1
// // pushBtn1(choice1 , test, time);

// resetPage();


var chooseSchool = function(){
    resetPage();
    updateTime(4);
}





var beforeSchool = function(){
    storyText = `You stand in front of 79 Anson Road with a tough decision to make. You've had a rough night and ${properTime} is way too early for anything. You haven't had breakfast. You're terrible at coding and you know it. After a minute of indecision, you...`;
    choice1 = "Go to class.";
    choice2 = "Skip over to town"
    pushBtn1(choice1, test, time);
    pushBtn2(choice2, test, time);
}


beforeSchool();
// pushMain(storyText);