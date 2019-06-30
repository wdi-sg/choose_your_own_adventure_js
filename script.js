//Location Control Variables
var startingLocation = places[0].name;
var currentLocation = startingLocation;
displayLocation(currentLocation);
displayRoutes(currentLocation);

//Travel functions
var locationTravel = function (location){
    currentLocation = location;
    displayLocation(currentLocation);
    displayRoutes(currentLocation);
}

//Quest Control Variables
displayMainQuest();
displaySideQuest1();

var checkTownVillage = function (location) {
    if (location === places[2].name){
        return 2;
    } else if (location === places[13].name){
        return 13;
    }
}

var mainQuest = function (){
    var id = checkTownVillage(currentLocation);
    displayMainQuest(id);
}

var checkSideQuest = function (){
    if (!(places[2].sideQuest.questOne.questAccept && places[2].sideQuest.questTwo.quest && places[13].sideQuest.questOne.quest && places[13].sideQuest.questTwo.quest)){
        return true;
    } else {
        return false;
    }
}

var sideQuest1 = function (){
    if (checkSideQuest()) {
        var id = checkTownVillage (currentLocation);
        places[id].sideQuest.questOne.questAccept = true;
        displaySideQuest1(id);
    }
}

var sideQuest2 = function (){
    if (checkSideQuest()) {
        var id = checkTownVillage (currentLocation);
        places[id].sideQuest.questTwo.questAccept = true;
        displaySideQuest2(id);
    }
}