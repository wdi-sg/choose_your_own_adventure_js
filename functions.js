//SOME GLOBAL VARS
var mainText = null;
var secText = null;
var choice0 = null;
var choice1 = null;
var choice2 = null;
var choice3 = null;


var lunchStudyDone = false;
var lunchChickenDone = false;
var lunchMeetDone = false;


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
    var choice0 = null;
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
var pushBtn0 = function(choice0, func){
    var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn0");
    createBtn.innerHTML = choice0;
    createBtn.onclick = function(){
        func();
    }
    document.getElementById('btnContainer').appendChild(createBtn);
}

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



















//----------------------------------BEFORE SCHOOL EVENT----------------------
//----------------------------------INITIAL EVENT-----------------
var beforeSchool1 = function(){
    resetPage();
    resetTime();
    updateDay(0); //initial value
    updateTime(9); //initial value
    mainText = `You stand in front of 79 Anson Road with a decision to make.`;
    choice0 = "Next";
    pushMain();
    pushBtn0(choice0, beforeSchool2);
}

var beforeSchool2 = function(){
    resetPage();
    updateTime(0);
    mainText = `You've had a rough night and ${properTime} is way too early for anything. You haven't had breakfast. You're terrible at coding and you know it.`;
    choice0 = "Next";
    pushMain();
    pushBtn0(choice0, beforeSchool3);
}

var beforeSchool3 = function(){
    resetPage();
    updateTime(0);
    mainText = `After a minute of indecision, you...`;
    pushMain();
    choice0 = "Go to class.";
    choice1 = "Skip over to town"
    pushBtn0(choice0, pairWork1);
    pushBtn1(choice1, createTown);

}
//-------------------------------------END SCHOOL EVENT-------------

//------------------------------------------PAIR WORK EVENT----------------
var student = null;
//length = 32
var studentsArray = ["Hafiz", "Alicia", "Yi Xin", "Aqilah", "Axel", "Benny", "Caspian", "Daniel", "Donna", "Elise", "Frederick", "Hilmi", "Keith", "Kenny", "Lien Huong", "Thean Yew", "Hui Yu", "Wei De", "C.K", "Malcolm", "Marcus", "Asshikin", "Nicholas", "Samuel", "Sarah", "Shirley", "Sowyuen", "Boon Hock", "Thea", "Vivien", "Wen Lei", "Wilfried"];
//chooses random student from array
var getStudent = function(){
    var randomIndex = Math.floor((Math.random() * 32) + 1);
    student = studentsArray[randomIndex];
}




var pairWork1 = function(){
    resetPage();
    updateTime(2);
    getStudent();
    mainText = `Pair work has begun. You squint at the groupings Akira has put up on the screen. Your partner is someone you haven't talked to before.`;
    choice0 = "Next";
    pushMain();
    pushBtn0(choice0, pairWork2);
}
var pairWork2 = function(){
    resetPage();
    updateTime(0);
    mainText = `You scan the room without much hope, resigned to having to hold your fingers up to show your group number. Before you can stand up, you hear someone call, \"${player.name}!\"`;
    choice0 = "Next";
    pushMain();
    pushBtn0(choice0, pairWork3);
}
var pairWork3 = function(){
    resetPage();
    updateTime(0);
    mainText = `You turn to find someone walking over to your desk. \"You're ${player.name}, right? I\'m ${student}. Let\s get along!\"`;
    choice0 = "Do pair work";
    pushMain();
    pushBtn0(choice0, pairWorkResults);
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
    choice0 = "Next";
    pushMain();
    pushSec();
    getStudent();
    pushBtn0(choice0, lunchEvent1)

}

//--------------------------------------------END PAIR WORK EVENT-----------------------
//-----------------------------------------------LUNCH EVENT-------------------------


// //for the end of day!!
// var lunchEventReset = function(){
//     lunchStudyDone === false;
//     lunchChickenDone === false;
//     lunchMeetDone === false;
//

var lunchEvent1 = function(){
    resetPage();
    updateTime(0);
    mainText = `Akira lets the class out for lunch break. You glance at your watch - you have about two hours to yourself.`;
    choice0 = "Next";
    pushMain();
    pushBtn0(choice0, lunchEvent2)
}

var lunchEvent2 = function(){
    resetPage();
    updateTime(0);
    mainText = `Mulling over you options, you decide to....`;
    pushMain();
    getStudent();

    if (lunchStudyDone === true){
        choice1 = "Devour a chicken.";
        pushBtn1(choice1, lunchChicken);
        choice2 = `Meet with ${student} for lunch.`;
        pushBtn2(choice2, lunchMeet);
    } else if (lunchChickenDone === true){
        choice2 = `Meet with ${student} for lunch.`;
        pushBtn2(choice2, lunchMeet);
        choice2 = `Meet with ${student} for lunch.`;
        pushBtn2(choice2, lunchMeet);
    } else if (lunchMeetDone === true){
        choice0 = "Study in the lounge.";
        pushBtn0(choice0, lunchStudy);
        choice2 = `Meet with ${student} for lunch.`;
        pushBtn2(choice2, lunchMeet);
    } else {
        choice0 = "Study in the lounge.";
        pushBtn0(choice0, lunchStudy);
        choice1 = "Devour a chicken.";
        pushBtn1(choice1, lunchChicken);
        choice2 = `Meet with ${student} for lunch.`;
        pushBtn2(choice2, lunchMeet);
    }
}


    // if (lunchStudyDone === false){
    //     choice0 = "Study in the lounge.";
    //     pushBtn0(choice0, lunchStudy);
    // }
    // if (lunchChickenDone === false){
    //     choice1 = "Devour a chicken.";
    //     pushBtn1(choice1, lunchChicken);
    // }
    // if (lunchMeetDone === false){
    //     choice2 = `Meet with ${student} for lunch.`;
    //     pushBtn2(choice2, lunchMeet);
    // }


//THIS ISNT WORKINGGGGGG TRIED TOP AS WELL

var lunchStudy = function(){
    resetPage();
    updateTime(1);
    mainText = "You study till you get a headache, and then study some more. It's gonna be a long road ahead.";
    secText = "Intelligence + 1!";
    player.intelligence += 1;
    choice0 = "Finish up.";
    lunchStudyDone === true;
    pushMain();
    pushSec();
    pushBtn0(choice0, afterLunch);
    if (time <= 13){
        choice1 = "Go back to the classroom while there's still time."
        pushBtn1(choice1, lunchEvent2);
        console.log("Is Lunch Study done? :" + lunchStudyDone);
    }
}
var lunchChicken = function(){
    resetPage();
    updateTime(1);
    getStudent();
    mainText = `You wolf down your lunch without a care in the world. Out of the corner of your eye, you see ${student} point and whisper something to a friend. It doesn't faze you.`
    secText = "Guts + 1!"
    player.guts += 1;
    choice0 = "Om nom nom.";
    lunchChickenDone === true;
    pushMain();
    pushSec();
    pushBtn0(choice0, afterLunch);
    if (time <= 13){
        choice1 = "Go back to the classroom while there's still time."
        pushBtn1(choice1, lunchEvent2);
    }
}

var lunchMeet = function(){
    resetPage();
    updateTime(1);
    mainText = `${student} turned out to be great company. Let's do this again.`;
    secText = "Charm + 1!"
    player.charm += 1;
    choice0 = "\"You HAVE to try Persona 5!\"";
    lunchMeetDone === true;
    pushMain();
    pushSec();
    pushBtn0(choice0, afterLunch);
    if (time <= 13){
        choice1 = "Go back to the classroom while there's still time."
        pushBtn1(choice1, lunchEvent2);
    }
}

var afterLunch = function(){
    resetPage();
    updateTime(3);
    mainText = "Class resumes. As the clock ticks closer to five, you find yourself struggling to stay awake...";
    choice0 = "School's out!"
    pushMain();
    pushSec();
    pushBtn0(choice0, createTown);
}