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


//function to create buttons, set id/class, insert text and push to buttonContainer
var pushBtn1 = function(choice1){
    if (choice1 !== null){
        var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn1");
    createBtn.innerHTML = choice1;
    document.getElementById('btnContainer').appendChild(createBtn);
    }
}

var pushBtn2 = function(choice2){
    if (choice2 !== null){
        var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn2");
    createBtn.innerHTML = choice2;
    document.getElementById('btnContainer').appendChild(createBtn);
    }
}

var pushBtn3 = function(choice3){
    if (choice3 !== null){
        var createBtn = document.createElement('button');
    createBtn.setAttribute("class", "btn");
    createBtn.setAttribute("id", "btn3");
    createBtn.innerHTML = choice3;
    document.getElementById('btnContainer').appendChild(createBtn);
    }
}

// //each call, 3 btns
// // pushBtn1(choice1);
// // pushBtn2(choice2);
// // pushBtn3(choice3);

// // all-in-one pushBtn function
var pushBtns = function(){
    pushBtn1(choice1);
    pushBtn2(choice2);
    pushBtn3(choice3);
}
//call: pushBtns();

//test

var test = function(time){
    console.log(time);
}













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



var beforeSchool = function(){
    storyText = `You stand in front of 79 Anson Road with a tough decision to make. You've had a rough night and ${properTime} is way too early for anything. You haven't had breakfast. You're terrible at coding and you know it. After a minute of indecision, you...`;
    choice1 = "Go to class.";
    choice2 = "Skip over to town"
}

//call: schoolEvent();
beforeSchool();
pushBtns();
// pushMain(storyText);