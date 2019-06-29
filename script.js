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


//NOTE: btn 3 can be hid but btns 1 and 2 cannot!
// function to take text in choice and display it in button
var pushBtn1 = function(choice1){
    if (choice1 !== null) {
        document.getElementById('btn1').innerHTML = choice1;
    } else {
        document.getElementById('btn1').style.display = "none";
    }
}
var pushBtn2 = function(choice2){
    if (choice2 !== null) {
        document.getElementById('btn2').innerHTML = choice2;
    } else {
        document.getElementById('btn2').style.display = "none";
    }
}
//pushBtn3 has and if/else to hide button 3 if there is no choice 3
var pushBtn3 = function(choice3){
    if (choice3 !== null) {
        document.getElementById('btn3').innerHTML = choice3;
    } else {
        document.getElementById('btn3').style.display = "none";
    }
}

//each call, 3 btns
// pushBtn1(choice1);
// pushBtn2(choice2);
// pushBtn3(choice3);

// all-in-one pushBtn function
var pushBtns = function(){
    pushBtn1(choice1);
    pushBtn2(choice2);
    pushBtn3(choice3);
}
//call: pushBtns();

var resetPage = function(){
    storyText = null;
    var choice1 = null;
    var choice2 = null;
    var choice3 = null;
    document.getElementById('btn1').innerHTML = null;
    document.getElementById('btn2').innerHTML = null;
    document.getElementById('btn3').innerHTML = null;
    document.getElementById('mainDisplay').innerHTML = null;
}


//test

var test = function(time){
    console.log(time);
}






var beforeSchool = function(){
    storyText = `You stand in front of 79 Anson Road with a tough decision to make. You've had a rough night and ${properTime} is way too early for anything. You haven't had breakfast. You're terrible at coding and you know it. After a minute of indecision, you...`;
    choice1 = "Go to class.";
    choice2 = "Skip over to town"
}

//call: schoolEvent();
beforeSchool();
pushBtns();
pushMain(storyText);