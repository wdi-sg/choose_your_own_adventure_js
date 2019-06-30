//Location Control Variables
var startingLocationId = 0;
var currentLocationId = startingLocationId;
var currentSideQuestLocation = null;


//Travel functions
function locationTravel (id){
    currentLocationId = parseInt(id);
    displayLocation(currentLocationId);
    displayRoutes(currentLocationId);
    displayGameLogs(`You have traveled to ${places[currentLocationId].name}`);

    switch(currentLocationId) {
        case 1:
            displayRestButton();
            break;
        case 2:
            displayQuestButtons();
            break;
        case 4:
            displayAttackButton();
            break;
        case 7:
            displayAttackButton();
            break;
        case 8:
            displayAttackButton();
            break;
        case 11:
            displayAttackButton();
            break;
        case 12:
            displayUpgradeButton();
            break;
        case 13:
            displayQuestButtons();
            break;
        case 14:
            displayAttackButton();
            break;
        case 15:
            displayAttackButton();
            break;
        default:
            defaultActionButtons();
            break;
    }

    if (places[currentLocationId].enemyLocated){
        displayGameLogs(`You have encountered enemy: ${places[currentLocationId].enemy.name}. You can choose to attack or move to another location.`);
    }
}

//GameStart function
var gameStart= function() {
    displayGame()
    locationTravel(currentLocationId);
    displayMainQuest();
    displaySideQuest1();
    defaultActionButtons();
    var weaponChoice = document.getElementById('weapon-input').selectedIndex;
    console.log(weaponChoice);
    user.name = document.getElementById('warrior-name').value;
    if (weaponChoice === 1){
        user.weapon = 'Sword';
        user.attack = 20;
        console.log(user.attack);
    } else if (weaponChoice === 2){
        user.weapon = 'Bow';
        user.attack = 16;
        console.log(user.attack);
    }
    displayUserDetails();
}

//Quest Functions
var mainQuest = function (){
    displayMainQuest(currentLocationId);
}

var checkSideQuest = function (){
    if (!(places[2].sideQuest.questOne.questAccept && places[2].sideQuest.questTwo.quest && places[13].sideQuest.questOne.quest && places[13].sideQuest.questTwo.quest)){
        return true;
    } else {
        return false;
    }
}

var sideQuest1 = function (){
    if(places[currentLocationId].sideQuest.questOne.questComplete === false){
        if (checkSideQuest()) {
            places[currentLocationId].sideQuest.questOne.questAccept = true;
            currentSideQuestLocation=currentLocationId;
            user.sideQuest=true;
            displaySideQuest1(currentLocationId);
        }
    }
}

var sideQuest2 = function (){
    if(places[currentLocationId].sideQuest.questTwo.questComplete === false){
        if (checkSideQuest()) {
            places[currentLocationId].sideQuest.questTwo.questAccept = true;
            currentSideQuestLocation=currentLocationId;
            user.sideQuest=true;
            displaySideQuest2(currentLocationId);
        }
    }
}

var completeSideQuest = function (){
    user.sideQuest = false;
    places[currentSideQuestLocation].sideQuest.questTwo.questAccept = false;
    places[currentSideQuestLocation].sideQuest.questTwo.questComplete = true;
}

//Attack Functions
var attack = function (){
    if (places[currentLocationId].enemy.health>0){
        while (user.currentHealth >0 && places[currentLocationId].enemy.health >0){
            var userAttack = Math.floor(Math.random()*user.attack);
            if (user.weapon === 'Bow') {
                if (Math.floor(Math.random()*3 !== 0)){
                    userAttack *= Math.floor(Math.random()*3);
                }
            }
            var enemyAttack = Math.floor(Math.random()*places[currentLocationId].enemy.attack);
            user.currentHealth-=enemyAttack;
            places[currentLocationId].enemy.health-=userAttack;
            if (user.currentHealth<=0){
                displayGameLogs('You have lost the game');
                user.lose = true;
            }
            if (places[currentLocationId].enemy.health <=0){
                user.gold += places[currentLocationId].enemy.reward;
                displayUserDetails();
                displayGameLogs(`You have won ${places[currentLocationId].enemy.name}. You have earned ${places[currentLocationId].enemy.reward} gold.`);
                if (currentLocationId===15){
                    displayGameLogs('You have won the game');
                }
                if (user.sideQuest===true){
                    completeSideQuest();
                }
            }
        }
    }
}

var upgradeWeapon = function (){
    if (currentLocationId===12){
        places[currentLocationId].upgrade();
        displayUserDetails();
        displayGameLogs('You have successfully upgraded your health and weapon.');
    }
}

var restUser = function (){
    if (currentLocationId===1){
        places[currentLocationId].rest();
        displayGameLogs('You have regained full health.');
        displayUserDetails();
    }
}