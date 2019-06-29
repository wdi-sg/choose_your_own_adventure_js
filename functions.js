//SOME GLOBAL VARS
var mainText = null;
var secText = null;
var choice1 = null;
var choice2 = null;
var choice3 = null;

//-------------------------------------------------------------------NAME FUNCTION-----------------
//                NOTE: CHANGE THIS FROM INPUT TO PROMPT!

var player = {
    name: "Jonathan",
    intelligence: 0,
    guts: 0,
    charm: 0
};

//function to set playerName
//no need to call, inserts on input
var inputHappened = function(currentInput){
  playerName = currentInput;
}





//------------------------------------------------------------------TIME FUNCTIONS------------------

var time = 0; //we will add to this
var properTime = 0; //proper time eg. 00:00 will be pushed here

//clockify the time
var getProperTime = function(time){
    properTime = time + ":00";
}

//create and show clock on screen
var displayTime = function(properTime){
    document.getElementById('timeBox').innerHTML = properTime;
}

//changes the time
var addTime = function(passedTime){
    time = time + passedTime;
}

//functions to change the time
// addTime(passedTime); where passedTime is whatever you want to add
// getProperTime(time);
// displayTime(properTime);

//all-in-one function to update time
var updateTime = function(passedTime){
    addTime(passedTime);
    getProperTime(time);
    displayTime(properTime);
}
//call = updateTime(time to add); eg updateTime(5);

var resetTime = function(){
    time = 0;
}
//call: resetTime();



//--------------------------------------------------------------------DAY FUNCTIONS-----------------
var dayNumber = 0; //0 to start on Monday
var day = null; //placeholder for the current day
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//function to add to the day index number (0 - 6)
var addDay = function(daysPassed){
    dayNumber = dayNumber + daysPassed;
}


//function to retrieve day using index dayNumber
var properDay = function(dayNumber){
    day = days[dayNumber];
}


//function to create and push the day
var displayDay = function(day){
    document.getElementById('dayBox').innerHTML = day;
}

//functions to add, set and push over the day
// addDay(daysPassed);
// properDay(dayNumber);
// displayDay(day);

var newWeek = function(dayNumber){
    if (dayNumber >= 7) {
        dayNumber = 0;
    }
}
// all-in-one function to update and push the day, where daysPassed = day you wanna add. dayPassed = 0 to show Monday
var updateDay = function(daysPassed){
    addDay(daysPassed);
    newWeek(dayNumber);
    properDay(dayNumber);
    displayDay(day);
}


//----------------------------------------------------------------------RESET PAGE FUNCTION-----------------
var resetPage = function(){
    var choice1 = null;
    var choice2 = null;
    var choice3 = null;
    mainText = null;
    secText = null;
    document.getElementById('mainDisplay').innerHTML = null;
    document.getElementById('secDisplay').innerHTML = null;
    document.getElementById('btnContainer').innerHTML = null;
    document.getElementById('timeBox').innerHTML = null;
}





//---------------------------------------------------------------------CREATE BUTTONS---------------

//function to create buttons, set id/class, insert text, insert function and  push to buttonContainer

// to put choice1 and function test(time) in button 1
//call: pushBtn1(choice1 , test, time);

//NOTE: ASK WHY onclick needs to contain the function within another function. Why doesn't setAttribute or addEventListener achieve the same thing?
//you can insert param if you need
var pushBtn1 = function(choice1, func){
     var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn1");
    createBtn.innerHTML = choice1;
    createBtn.onclick = function(){
        func();
    }
    document.getElementById('btnContainer').appendChild(createBtn);
}

var pushBtn2 = function(choice2, func){
    var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn2");
    createBtn.innerHTML = choice2;
    createBtn.onclick = function(){
        func();
    }
    document.getElementById('btnContainer').appendChild(createBtn);
}

var pushBtn3 = function(choice3, func){
    var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn3");
    createBtn.innerHTML = choice3;
    createBtn.onclick = function(){
        func();
    }
    document.getElementById('btnContainer').appendChild(createBtn);

}


//------------------------------------------------------------------------------PUSH TEXT--------------------------------
//---------------------------------------------------------------------MAIN/SEC DISPLAY----------------------
// function to push to mainDisplay
var pushMain = function(){
    document.getElementById('mainDisplay').innerHTML = mainText;
}
//call: pushMain(input);
var pushSec = function(){
    document.getElementById('secDisplay').innerHTML = secText;
}


//------------------------------------------------------------------------PAIR WORK EVENT----------------
var student = null;
//length = 32
var studentsArray = ["Hafiz", "Alicia", "Yi Xin", "Aqilah", "Axel", "Benny", "Caspian", "Daniel", "Donna", "Elise", "Frederick", "Hilmi", "Keith", "Kenny", "Lien Huong", "Thean Yew", "Hui Yu", "Wei De", "C.K", "Malcolm", "Marcus", "Asshikin", "Nicholas", "Samuel", "Sarah", "Shirley", "Sowyuen", "Boon Hock", "Thea", "Vivien", "Wen Lei", "Wilfriend"];
//chooses random student from array
var getStudent = function(){
    var randomIndex = Math.floor((Math.random() * 32) + 1);
    student = studentsArray[randomIndex];
}




var pairWork = function(){
    resetPage();
    updateTime(2);
    getStudent();
    mainText = `Pair work has begun. You squint at the groupings Akira has put up on the screen. Your partner is someone you haven't talked to before. You scan the room without much hope, resigned to having to hold your fingers up to show your group number. Before you can stand up, you hear someone call, \"${player.name}!\" You turn to find someone walking over to your desk. \"You're ${player.name}, right? I\'m ${student}. Let\s get along!\"`
    choice1 = "Do pair work";
    pushMain();
    pushBtn1(choice1, pairWorkResults);
}

var pairWorkResults = function(){
    resetPage();
    updateTime(1);
    var successRate = Math.floor((Math.random() * 100) + 1);
    if (successRate >= 80) {
        mainText = `Completion rate: ${successRate}. <br /> The two of you aced the assignment!`
        secText = "Intelligence + 2!";
        player.intelligence += 2;
    } else if (successRate >= 30) {
        mainText = `Completion rate: ${successRate}. <br /> The two of you muddled through the assignment.`
        secText = "Intelligence + 1!";
        player.intelligence += 1;
    } else {
        mainText = `Completion rate: ${successRate}. <br /> It was an absolute nightmare.`
        secText = "Intelligence did not increase."
    }
    getStudent();
    choice1 = "Study in the lounge."
    choice2 = "Rush to a boxing class."
    choice3 = `Meet with ${student} for lunch.`
    pushMain();
    pushSec();
    pushBtn1(choice1, lunchStudy);
    pushBtn2(choice2, lunchBoxing);
    pushBtn3(choice3, lunchMeet);
}

//--------------------------------------------END PAIR WORK EVENT-----------------------