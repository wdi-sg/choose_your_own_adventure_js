//------------------TIME FUNCTIONS------------------

var time = 10; //we will add to this
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