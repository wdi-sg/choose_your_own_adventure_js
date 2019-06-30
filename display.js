var displayMainQuest = function (id) {
    var display = document.getElementById('main-quest-display');
    if (id === 2 && places[id].mainQuest.questComplete === false){
        display.innerText =`Main Quest: ${places[id].mainQuest.quest}`;
    } else if (id === 13){
        places[id].mainQuest.questComplete = true;
        display.innerText = `Main Quest: ${places[id].mainQuest.quest}`;
    } else{
        display.innerText = `Main Quest: -`;
    }
}

var displaySideQuest1 = function (id) {
    var display = document.getElementById('side-quest-display');
    if (id === 2 && places[id].sideQuest.questOne.questComplete === false){
        display.innerText = `Current Side Quest: ${places[id].sideQuest.questOne.quest}`;
    } else if (id === 13 && places[id].sideQuest.questOne.questComplete === false){
        display.innerText = `Current Side Quest: ${places[id].sideQuest.questOne.quest}`;
    } else {
        display.innerText = `Current Side Quest: -`;
    }
}

var displaySideQuest2 = function (location) {
        var display = document.getElementById('side-quest-display');
    if (id === 2 && places[id].sideQuest.questTwo.questComplete === false){
        display.innerText = `Current Side Quest: ${places[id].sideQuest.questTwo.quest}`;
    } else if (id === 13 && places[id].sideQuest.questTwo.questComplete === false){
        display.innerText = `Current Side Quest: ${places[id].sideQuest.questTwo.quest}`;
    } else {
        display.innerText = `Current Side Quest: -`;
    }
}


var displayLocation = function (location) {
    console.log(location);
    document.getElementById('current-location').innerText=`Current Location: ${location}`;
}

var displayRoutes = function(location){
    var locationButtons = document.getElementsByClassName('location-buttons');
    console.log(locationButtons.length);
    for (var i=0;i<locationButtons.length; i++)
    {
        locationButtons[i].style.visibility = 'hidden';
    }
    for (var j=0; j<places.length; j++){
        if (location === places[j].name){
            for (var k=0; k<places[j].adjacentSite.length;k++){
                document.getElementById(places[j].adjacentSite[k]).style.visibility = 'visible';
            }
            break;
        }
    }
}