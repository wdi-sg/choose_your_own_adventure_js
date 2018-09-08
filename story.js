////////////////////////////////start of story////////////////////////////////////////

alert("Instructions:\nEnter one of the options at each dilemma\nEg: ........?(B/G)\nYour score at the end of the game would be the sum of your gold and hp.");

alert("After living in the village for 10 years. You decided to vanture out of your village and see the world. However, your village is surrounded by a dense forest with all sorts of creatures. In order for you to see the rest of the world, you have to first make it out of the woods alive.");

player.name = messages("I'm sorry but what is your name, young adventurer?");

alert("Alright " + player.name + " now that we're ready, lets enter the forest and begin our adventure.\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

var first = messages("Would you like to enter the forest from the north, east or west?(N/E/W)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

while ( first !== "n" && first !== "e" && first !== "w") {

    first = messages("Would you like to enter the forest from the north, east or west?(N/E/W)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
}

if (first === "n") {

    var second1 = messages("As you enter the forest from the north, you notice an axe stuck on a tree stump, do you want to pick it up?(Y/N)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

    while (second1 !== "y" && second1 !== "n") {

        second1 = messages("As you enter the forest from the north, you notice an axe stuck on a tree stump, do you want to pick it up?(Y/N)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
    }

    if (second1 === "y") {

        player.itemInBag.weapon.push({ name: "axe", damage: 20 });
        var enemy1 = enemies[randomEncounter()];
        var third1 = messages("You picked up the axe and continue making your way deeper into the woods. The path you are on leads to a tunnel. You enter tunnel and continue walking towards the light at the end of the tunnel. All of a sudden a " + enemy1.name + " appeared in front of you. Dou you want to run or fight?(R/F)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        while (third1 !== "r" && third1 !== "f") {

            third1 = messages("You picked up the axe and continue making your way deeper into the woods. The path you are on leads to a tunnel. You enter tunnel and continue walking towards the light at the end of the tunnel. All of a sudden a " + enemy1.name + " appeared in front of you. Dou you want to run or fight?(R/F)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        }

        if (third1 === "r") {

            var fourth1 = messages("You tried to run, however, the " + enemy1.name + " was able to block your exit. You have no choice but to fight it. Do you want to fight with your fists, pocket knife or axe?(F/P/A)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

            while (fourth1 !== "f" && fourth1 !== "p" && fourth1 !== "a") {

                fourth1 = messages("You tried to run, however, the " + enemy1.name + " was able to block your exit. You have no choice but to fight it. Do you want to fight with your fists, pocket knife or axe?(F/P/A)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

            }


        } else if (third1 === "f") {

            var fourth1 = messages("Do you want to fight with your fists, pocket knife or axe?(F/P/A)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

            while (fourth1 !== "f" && fourth1 !== "p" && fourth1 !== "a") {

                fourth1 = messages("Do you want to fight with your fists, pocket knife or axe?(F/P/A)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

            }

        }

        if (fourth1 === "f") {

            battle(player.damageFist, enemy1);

        } else if (fourth1 === "p") {

            battle(player.itemInBag.weapon[0].damage, enemy1);

        } else if (fourth1 === "a") {

            battle(player.itemInBag.weapon[1].damage, enemy1);

        }

        northRouteEnding();

    } else if (second1 === "n") {

        var enemy1 = enemies[randomEncounter()];
        var third2 = messages("You ignore the axe and continue making your way deeper into the woods. The path you are on leads to a tunnel. You enter tunnel and continue walking towards the light at the end of the tunnel. All of a sudden a " + enemy1.name + " appeared in front of you. Dou you want to run or fight?(R/F)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        while (third2 !== "r" && third2 !== "f") {

            third2 = messages("You ignore the axe and continue making your way deeper into the woods. The path you are on leads to a tunnel. You enter tunnel and continue walking towards the light at the end of the tunnel. All of a sudden a " + enemy1.name + " appeared in front of you. Dou you want to run or fight?(R/F)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        }

        if (third2 === "r") {

            var fourth3 = messages("You tried to run, however, the " + enemy1.name + " was able to block your exit. You have no choice but to fight it. Do you want to fight with your fists or pocket knife or axe?(F/P)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

            while (fourth3 !== "f" && fourth3 !== "p") {

                fourth3 = messages("You tried to run, however, the " + enemy1.name + " was able to block your exit. You have no choice but to fight it. Do you want to fight with your fists or pocket knife?(F/P)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

            }

        } else if (third2 === "f") {

            var fourth3 = messages("Do you want to fight with your fists or pocket knife?(F/P)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

            while (fourth3 !== "f" && fourth3 !== "p" ) {

                fourth3 = messages("Do you want to fight with your fists or pocket knife?(F/P)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

            }

        }

        if (fourth3 === "f") {

            battle(player.damageFist, enemy1);

        } else if (fourth3 === "p") {

            battle(player.itemInBag.weapon[0].damage, enemy1);

        }

        northRouteEnding();

    }

} else if (first === "e") {

    var second2 = messages("You entered the forest from the east. This part of the forest seems to be soo densed that very little light was able to pass through. As you continue deeper into the forest, you reached a crossroad with 3 paths. Its too dark to see where the paths lead to. Which path do u want to take.(1/2/3) \n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

    while(second2 !== 1 && second2 !== 2 && second2 !== 3) {

        second2 = messages("You entered the forest from the east. This part of the forest seems to be soo densed that very little light was able to pass through. As you continue deeper into the forest, you reached a crossroad with 3 paths. Its too dark to see where the paths lead to. Which path do u want to take.(1/2/3) \n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

    }

    if (second2 === 1) {

        var bushDamage = randomizer();
        player.hp -= bushDamage;
        var third21 = alert("The path seems to be littered thorned bushes poking on your flesh as you walk through it. You lost " + bushDamage + "hp. But luckily for you, thats all you had to go through because...\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
        win();

    } else if (second2 === 2) {

        var third22 = messages("As you continue down this path, you found a large stick that looks like it cound be a better weapon than the pocket knife in your bag. Do you want to pick it up?(Y/N)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        while (third22 !== "y" && third22 !== "n") {

            third22 = messages("As you continue down this path, you found a large stick that looks like it cound be a better weapon than the pocket knife in your bag. Do you want to pick it up?(Y/N)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        }

        if (third22 === "y") {

            //pick up stick

        } else if (third22 === "n") {

            //dont pick up stick
        }

        //path is foggy end up at back at the crossroad

    } else if (second2 === 3) {


        //enter a cave with a random enemy after defeating enemy find out that cave is a dead end and have to go back


    }


} else if (first === "w") {

    var second3 = messages("As you make your way deeper into the woods, u met amysterious old man.\nMysterious Old Man: Hi stranger, can you spare me some gold coins? If you help me I will reward you with something that can help you in your journey. As you make your way deeper into the woods, you will soon encountr a dragon and the only way out of the woods is to get past that dragon.\nDo you wis to donate gold coins to the old man?(Y/N)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

    while (second3 !== "y" && second3 !== "n") {

        second3 = messages("As you make your way deeper into the woods, u met amysterious old man.\nMysterious Old Man: Hi stranger, can you spare me some gold coins? If you help me I will reward you with something that can help you in your journey. As you make your way deeper into the woods, you will soon encountr a dragon and the only way out of the woods is to get past that dragon.\nDo you wis to donate gold coins to the old man?(Y/N)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

    }

    if (second3 === "y") {

        var donation = messages("How much gold do you want to donate?\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        while(isNaN(donation) || donation > 20) {

            donation = messages("Please enter a valid donation\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
        }

        if (donation <= 10 && donation > 0) {

            player.itemInBag.weapon.push({name: sword, damage: 33});
            alert("Mysterious Old Man: Thank you so much young adventurer. Here is my reward: a sword.\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        } else {

            player.itemInBag.weapon.push({name: sword, damage: 33});
            player.hp += 100;
            alert("Mysterious Old Man: Wow, you're very generous young adventurer. Here is my reward: a sword, 100HP.\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
        }

        var third31 = messages("After the encounter with the mysterious old man, you countinue walking deeper into the woods and soon enough encountered the dragon. You can see the exit is just behind it, you have to fight it so that you can leave. Do you want to use ur fists, pocket knife or sword to fight the dragon?(F/P/S)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        while (third31 !== "f" && third31 !== "p" && third31 !== "s") {

            third31 = messages("After the encounter with the mysterious old man, you countinue walking deeper into the woods and soon enough encountered the dragon. You can see the exit is just behind it, you have to fight it so that you can leave. Do you want to use ur fists, pocket knife or sword to fight the dragon?(F/P/S)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        }

        if (third31 === "f") {

            battle(player.damageFist, dragon);

        } else if (third31 === "p") {

            battle(player.itemInBag.weapon[0].damage, dragon);

        } else if (third31 === "s") {

            battle(player.itemInBag.weapon[1].damage, dragon);

        }


    } else if (second3 === "n") {

        var third32 = messages("You ignore the mysterious old man and venture deeper into the forest and soon enough you see the exit to the forest. However, the only thing standing between you and the exit is a freaking huge dragon. You have no choice but to fight it. Do you want to do so using your fists or your pocket knife?(F/P)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        while (third32 !== "f" && third32 !== "p") {

            third32 = messages("You ignore the mysterious old man and venture deeper into the forest and soon enough you see the exit to the forest. However, the only thing standing between you and the exit is a freaking huge dragon. You have no choice but to fight it. Do you want to do so using your fists or your pocket knife?(F/P)\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());

        }

        if (third32 === "f") {

            battle(player.damageFist, dragon);

        } else if (third32 === "p") {

            battle(player.itemInBag.weapon[0].damage, dragon);

        }
    }

    if (player.hp <= 0) {

        gameover();

    } else {

        alert("Not bad, " + player.name + ".You manage to defeat the dragon!\n\nHP: " + player.hp + "\nItems in Bag: " + displayItems());
        win();

}












