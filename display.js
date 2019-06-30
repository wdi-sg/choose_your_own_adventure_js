var displayGameLogs = function(string) {
    var list = document.createElement("li");
    var node = document.createTextNode(string);
    list.className="logs-details";
    list.appendChild(node);

    document.getElementById('game-logs').appendChild(list);
}

var displayMainQuest = function (id) {
    var display = document.getElementById('main-quest-display');
    if (id === 2 && places[id].mainQuest.questComplete === false){
        display.innerText =`Main Quest: ${places[id].mainQuest.quest}`;
        displayGameLogs(`You have started a Main Quest.`);
    } else if (id === 13){
        places[id].mainQuest.questComplete = true;
        display.innerText = `Main Quest: ${places[id].mainQuest.quest}`;
        displayGameLogs(`You have started a Main Quest.`);
    } else{
        display.innerText = `Main Quest: -`;
    }
}

var displaySideQuest1 = function (id) {
    var display = document.getElementById('side-quest-display');
    if (id === 2 && places[id].sideQuest.questOne.questComplete === false){
        display.innerText = `Current Side Quest: ${places[id].sideQuest.questOne.quest}`;
        displayGameLogs(`You have started a Side Quest.`);
    } else if (id === 13 && places[id].sideQuest.questOne.questComplete === false){
        display.innerText = `Current Side Quest: ${places[id].sideQuest.questOne.quest}`;
        displayGameLogs(`You have started a Side Quest.`);
    } else {
        display.innerText = `Current Side Quest: -`;
    }
}

var displaySideQuest2 = function (id) {
        var display = document.getElementById('side-quest-display');
    if (id === 2 && places[id].sideQuest.questTwo.questComplete === false){
        display.innerText = `Current Side Quest: ${places[id].sideQuest.questTwo.quest}`;
        displayGameLogs(`You have started a Side Quest.`);
    } else if (id === 13 && places[id].sideQuest.questTwo.questComplete === false){
        display.innerText = `Current Side Quest: ${places[id].sideQuest.questTwo.quest}`;
        displayGameLogs(`You have started a Side Quest.`);
    } else {
        display.innerText = `Current Side Quest: -`;
    }
}


var displayLocation = function (id) {
    console.log(id);
    document.getElementById('current-location').innerText=`Current Location: ${places[id].name}`;
}

var displayRoutes = function(id){
    var locationButtons = document.getElementsByClassName('location-buttons');
    for (var i=0;i<locationButtons.length; i++)
    {
        locationButtons[i].style.visibility = 'hidden';
    }
    for (var j=0; j<places.length; j++){
        if (id === places[j].id){
            for (var k=0; k<places[j].adjacentSite.length;k++){
                document.getElementById(places[j].adjacentSite[k]).style.visibility = 'visible';
            }
            break;
        }
    }
}

var displayUserDetails = function () {
    document.getElementById('name').innerText=`Warrior Name: ${user.name}`;
    document.getElementById('weapon').innerText=`Weapon: ${user.weapon}`;
    document.getElementById('attack').innerText=`Attack: ${user.attack}`;
    document.getElementById('health').innerText=`Current Health: ${user.currentHealth}/${user.maxHealth}`;
    document.getElementById('gold').innerText=`Gold: ${user.gold}`;
}

var displayGame = function(){
    var input = document.getElementsByClassName('input-form');
    var gameDisplay = document.getElementsByClassName('game-display');
    var userDetails = document.getElementsByClassName('user-details');
    var location  = document.getElementsByClassName('location');
    var action  = document.getElementsByClassName('action');
    var logs  = document.getElementsByClassName('logs');

    for (var i=0; i < input.length; i++){
        input[i].style.visibility = "hidden" ;
    }
    for (var j=0; j < gameDisplay.length; j++){
        gameDisplay[j].style.visibility = "visible";
    }
    for (var k=0; k < userDetails.length; k++){
        userDetails[k].style.visibility = "visible";
    }
    for (var l=0; l < location.length; l++){
        location[l].style.visibility = "visible";
    }
    for (var m=0; m < action.length; m++){
        action[m].style.visibility = "visible";
    }
    for (var n=0; n < logs.length; n++){
        logs[n].style.visibility = "visible";
    }
}

var defaultActionButtons = function () {
    document.getElementById('main-quest').style.visibility = "hidden";
    document.getElementById('side-quest1').style.visibility = "hidden";
    document.getElementById('side-quest2').style.visibility = "hidden";
    document.getElementById('attackB').style.visibility = "hidden";
    document.getElementById('upgrade').style.visibility = "hidden";
    document.getElementById('rest').style.visibility = "hidden";
}

var displayQuestButtons = function(){
    document.getElementById('main-quest').style.visibility = "visible";
    document.getElementById('side-quest1').style.visibility = "visible";
    document.getElementById('side-quest2').style.visibility = "visible";
    document.getElementById('attackB').style.visibility = "hidden";
    document.getElementById('upgrade').style.visibility = "hidden";
    document.getElementById('rest').style.visibility = "hidden";
}

var displayAttackButton =function(){
    document.getElementById('main-quest').style.visibility = "hidden";
    document.getElementById('side-quest1').style.visibility = "hidden";
    document.getElementById('side-quest2').style.visibility = "hidden";
    document.getElementById('attackB').style.visibility = "visible";
    document.getElementById('upgrade').style.visibility = "hidden";
    document.getElementById('rest').style.visibility = "hidden";
}

var displayUpgradeButton=function(){
    document.getElementById('main-quest').style.visibility = "hidden";
    document.getElementById('side-quest1').style.visibility = "hidden";
    document.getElementById('side-quest2').style.visibility = "hidden";
    document.getElementById('attackB').style.visibility = "hidden";
    document.getElementById('upgrade').style.visibility = "visible";
    document.getElementById('rest').style.visibility = "hidden";
}

var displayRestButton=function(){
    document.getElementById('main-quest').style.visibility = "hidden";
    document.getElementById('side-quest1').style.visibility = "hidden";
    document.getElementById('side-quest2').style.visibility = "hidden";
    document.getElementById('attackB').style.visibility = "hidden";
    document.getElementById('upgrade').style.visibility = "hidden";
    document.getElementById('rest').style.visibility = "visible";
}