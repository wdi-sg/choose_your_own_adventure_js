//------------------TIME FUNCTIONS------------------

var time = 0; //we will add to this
var properTime = 0; //proper time eg. 00:00 will be pushed here

//clockify the time
var getProperTime = function(time){
    properTime = time + ":00";
}

//show clock on screen
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



//-------------------DAY FUNCTIONS-----------------
var dayNumber = 0; //0 to start on Monday
var day = ""; //placeholder for the current day
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//function to add to the day index number (0 - 6)
var addDay = function(daysPassed){
    dayNumber = dayNumber + daysPassed;
}


//function to retrieve day using index dayNumber
var properDay = function(dayNumber){
    day = days[dayNumber];
}


//function to set the day, where dayNumber corresponds to day, eg. days[0]; gives Monday
var displayDay = function(day){
    document.getElementById('dayBox').innerHTML = day;
}

//functions to add, set and push over the day
// addDay(daysPassed);
// properDay(dayNumber);
// displayDay(day);

// all-in-one function to update and display day, where daysPassed = day you wanna add. dayPassed = 0 to show Monday
var updateDay = function(daysPassed){
    addDay(daysPassed);
    properDay(dayNumber);
    displayDay(day);
}


//----------NAME FUNCTION-----------------
//                NOTE: CHANGE THIS FROM INPUT TO PROMPT!

var playerName = null;

//function to set playerName
//no need to call, inserts on input
var inputHappened = function(currentInput){
  playerName = currentInput;
}

//----------------------RESET PAGE FUNCTION-----------------
var resetPage = function(){

    storyText = null;
    var choice1 = null;
    var choice2 = null;
    var choice3 = null;
    document.getElementById('btnContainer').innerHTML = null;
    document.getElementById('mainDisplay').innerHTML = null;
}

//----------------------------CREATE BUTTONS---------------

//function to create buttons, set id/class, insert text, insert function and  push to buttonContainer

// to put choice1 and function test(time) in button 1
//call: pushBtn1(choice1 , test, time);

//NOTE: ASK WHY onclick needs to contain the function within another function. Why doesn't setAttribute or addEventListener achieve the same thing?
var pushBtn1 = function(choice1, func, param){
     var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn1");
    createBtn.innerHTML = choice1;
    createBtn.onclick = function(){
        func(param);
    }
    document.getElementById('btnContainer').appendChild(createBtn);
}

var pushBtn2 = function(choice2, func, param){
    var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn2");
    createBtn.innerHTML = choice2;
    createBtn.onclick = function(){
        func(param);
    }
    document.getElementById('btnContainer').appendChild(createBtn);
}

var pushBtn3 = function(choice3, func, param){
    var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn3");
    createBtn.innerHTML = choice3;
    createBtn.onclick = function(){
        func(param);
    }
    document.getElementById('btnContainer').appendChild(createBtn);

}