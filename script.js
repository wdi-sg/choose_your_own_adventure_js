
//event when user clicks on start
function hideIntro(){
    var intro = document.querySelector('#gameIntro');
    if (intro.style.display == "block") {
        intro.style.display = "none";
    } else {
        intro.style.display = "block";
    }
}

function showFirstQuestion() {
    var firstQuestion = document.querySelector('#firstqns');
    if (firstQuestion.style.display == "none") {
        firstQuestion.style.display = "block";
    } else {
        firstQuestion.style.display = "none";
    }
}

//display username from input field
function getName(){
    var userName = document.querySelector('#input-name').value;
    document.querySelector('.user-name').innerText = userName;
}
getName();

//second question
function hideFirstQuestion(){
    var firstQuestion = document.querySelector('#firstqns');
    if (firstQuestion.style.display = "block") {
        firstQuestion.style.display = "none";
    } else {
        firstQuestion.style.display = "block";
    }
}

function showSecondQuestion(){
    var secondQuestion = document.querySelector('#secondqns');
    if (secondQuestion.style.display = "none") {
        secondQuestion.style.display = "block";
    } else {
        secondQuestion.style.display = "none";
    }
}

//ditch the interview
function hideSecondQuestion(){
    var secondQuestion = document.querySelector('#secondqns');
    if (secondQuestion.style.display = "block") {
        secondQuestion.style.display = "none";
    } else {
        secondQuestion.style.display = "block";
    }
}

function showDitch() {
    var ditchInterview = document.querySelector('#ditch');
    if (ditchInterview.style.display = "none") {
        ditchInterview.style.display = "block";
    } else {
        ditchInterview.style.display = "none";
    }
}

//take the bus
function showTakeBus() {
    var takeBus = document.querySelector('#takebus');
    if (takeBus.style.display = "none") {
        takeBus.style.display = "block";
    } else {
        takeBus.style.display = "none";
    }
}

//third question
function hideTakeBus(){
    var takeBus = document.querySelector('#takebus');
    if (takeBus.style.display = "block") {
        takeBus.style.display = "none";
    } else {
        takeBus.style.display = "block";
    }
}

function showThirdQuestion() {
    var thirdQuestion = document.querySelector('#enterbuilding');
    if (thirdQuestion.style.display = "none") {
        thirdQuestion.style.display = "block";
    } else {
        thirdQuestion.style.display = "none";
    }
}

function hideThirdQuestion() {
    var thirdQuestion = document.querySelector('#enterbuilding');
    if (thirdQuestion.style.display = "block") {
        thirdQuestion.style.display = "none";
    } else {
        thirdQuestion.style.display = "block";
    }
}