///////////////////////Defining the characters in the story///////////////////////////

//List of enemies that player may encounter
var enemies = [

    {
        name: "dire wolf",
        hp: 40,
        damage: 10

    },

    {
        name: "ogre",
        hp: 60,
        damage: 20
    },

    {
        name: "stranger",
        hp: 50,
        damage: 15

    },

    {
        name: "snake",
        hp:20,
        damage: 5
    }

];

//Characteristics of the player
var player = {

    name: "",
    hp: 100,
    damageFist: 10,
    itemInBag: {

        gold: 20,
        weapon: [

            {
                name: "pocket knife",
                damage: 15
            }

        ]

    }
};

var dragon = {

    name: "dragon",
    hp: 100,
    damage: 30

};

///////////////////Actions that can be executed throughout story/////////////////////

var messages = function(message) {

    var input = prompt(message);

    if (isNaN(input)) {

        var inputEdited = input.toLowerCase();

    } else {

        var inputEdited = parseInt(input);
    }

    return inputEdited;

};

var displayItems = function() {

    var list = "";

    for (var i = 0; i < player.itemInBag.weapon.length; i++) {

         list = list + player.itemInBag.weapon[i].name + ", ";
    }

    return list + player.itemInBag.gold + "gold";
};


var randomizer = function() {

    return Math.round(Math.random() * 40);

};

var randomEncounter = function() {

    return Math.floor(Math.random() * enemies.length);
};

var enemyAttack = function(en) {

    var enemyRandom = randomizer();

    if (enemyRandom % 2 === 0 || enemyRandom > 34) {

        player.hp -= en.damage;
        alert("The " + en.name + " dealt " + en.damage + " to you. \n Your HP: " + player.hp);

    } else {

        alert(en.name + " attacked but missed!");

    }

};

var playerAttack = function(damage, en) {

    var playerRandom = randomizer();

    if ( playerRandom % 2 === 0 || playerRandom > 30) {

        en.hp -= damage;
        alert("You dealt " + damage + ". \n enemy's HP: " + en.hp);

    } else {

        alert("You attacked but missed");

    }

};

var battle = function(damage, en) {

    while( player.hp > 0 && en.hp > 0) {

        playerAttack(damage, en);

        if (en.hp > 0) {

            enemyAttack(en);

        }

    }

};


var calculateScore = function(hp, gold) {

    return hp + gold;
};

var gameover = function() {

    var lose = messages("Game over!\nWould you like to restart the game?(R)")

    if (lose === "r") {

        location.reload();
    }

};

var win = function() {

    alert("Congratulations " + player.name + " you have succesfully made your way out of the forest alive and reached the next village.\n\nYour score is: " + calculateScore(player.hp, player.itemInBag.gold));

};

var northRouteEnding = function() {

    if (player.hp <= 0) {

        gameover();

    } else {

        var fith1 = messages("Phew...That was a close one. Now lets get out of here " + player.name + ". As you make your way out of the tunnel and continue northwards, you come across a bush filled with berries. Do you want to try the berries?(Y/N)\nIt could be poisonous or could also heal you.\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        while (fith1 !== "y" && fith1 !== "n") {

            fith1 = messages("Phew...That was a close one. Now lets get out of here " + player.name + ". As you make your way out of the tunnel and continue northwards, you come across a bush filled with berries. Do you want to try the berries?(Y/N)\nIt could be poisonous or could also heal you.\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        }

        if (fith1 === "y") {

            var randomBerries = randomizer();

            if ( randomBerries % 2 === 0) {

                player.hp += 20;
                alert("Ahhh... that was rejuvenating. Now lets continue north and make our way out of the forest.\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
                win();

            } else {

                player.hp -= 20;

                if (player.hp <= 0) {

                    gameover();

                } else {

                    alert("Ughhh!!!!!\nthose things were poisonous. Lets just keep heading north and get out of this forest as fast as possible.\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
                    win();
                }

            }

        } else if ( fith1 === "n" ) {

            alert("That's fine...\nLets hope we dont bump into any more creatures. For now lets continue heading north.\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
            win();

        }
    }

};


//\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems()


