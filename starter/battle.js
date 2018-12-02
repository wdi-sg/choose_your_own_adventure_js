const generateEnemies = (num) => {
    for (i = 0; i < ranN(num); i++) {
        enemyList.push(new _enemy(`${enemyNameList[ranN(10)-1]}`, 1000, 100, 100, 20, document.createElement("div")));
    }
}
const displayBattle = () => {
    fightContainer.style.display = "block";
    for (enemy in enemyList) {
        enemyList[enemy].displayEnemy();
    };
}

const startBattle = () => {
    generateEnemies(player.level);
    displayBattle();
};

const battleLoop = () => {
    let enemyTotalHealth = 0;
    for (enemy in enemyList) {
        if (enemyList[enemy].health > 0) {
            switch (ranN(2)) {
                case 1:
                    alert(`${enemyList[enemy].name} tried to hit you but miss!`);
                    break;
                case 2:
                    alert(`${enemyList[enemy].name} hit you for ${enemyList[enemy].damage} damage!`);
                    player.health -= enemyList[enemy].damage;
                    player.updatePlayer();
            };
            enemyTotalHealth += enemyList[enemy].health;
            console.log(enemyTotalHealth);
        };
    };
    if (enemyTotalHealth == 0) {

        endBattle();
    }
}

const endBattle = () => {
    let goldObtained = 0;
    let expObtained = 0;
    for (enemy in enemyList) {
        goldObtained += enemyList[enemy].gold;
        expObtained += enemyList[enemy].experience;
        enemyList[enemy].removeEnemy();
    };
    alert(`You plundered ${goldObtained} gold and earned ${expObtained} experience.`);
    player.gold += goldObtained;
    player.experience += expObtained;
    player.updatePlayer();
    enemyList = [];
 //   fightContainer.innerHTML = "";
    fightContainer.style.display='none';
    eventContainer.innerHTML = 'Dead enemies lies in your midst.';
}