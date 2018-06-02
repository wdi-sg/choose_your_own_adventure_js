var userPoints;

var runScene = function (sceneId) {
    userPoints = 0;
    switch (sceneId) {
        case "ren":
            renaissance();
            break;
        case "belle":
            belleEpoque();
            break;
        case "twen":
            twenties();
            break;
        case "fut":
            future();
            break;
        default:
            alert("Error: Unknown scene!");
    }
    return userPoints;
}

var fightHemingway = function(useHelmet) {
    var hemingwayHP = 50;
    var userHP = 50;
    var fightOutcome = "";
    var ratio = 1;

    if (useHelmet) {
        ratio = 0.5;
    }

    do {
        hemingwayHP -= Math.floor(Math.random() * 15) + 1 ;
        userHP -= (Math.floor(Math.random() * 10) + 1) * ratio;
    } while (userHP > 0 && hemingwayHP > 0)

    if (userHP <= 0 && hemingwayHP <= 0) {
        alert("Wow, you have a draw with Hemingway!");
        fightOutcome = "draw";
    } else if (userHP <= 0) {
        alert("You've lost to Hemingway :(");
        fightOutcome = "lost";
    } else if (hemingwayHP <= 0) {
        alert("You've beaten Hemingway up pretty badly! Good sport!");
        fightOutcome = "won";
    }
    return fightOutcome;
}

var renaissance = function() {
    var cultureType = prompt("Rebirth and rise of modern world! Would you like to speak with an artist (A) or an architect (B)?");
    if (cultureType === "A") {
        userPoints += 10;
        var artType = prompt("Are you a fan of Leonardo Da Vinci (A) or Hugo van der Goes (B)?");
        if (artType === "A") {
            userPoints += 10;
            alert("Do you know light and shadow techniques were derived from Leonardo's human anatomy? Pretty cool stuff!");
        } else if (artType === "B") {
            userPoints += 5;
            alert("Naturalism in representation! Do you know that he introduced oil painting and canvas? Amazing!");
        } else {
            alert("You don't know how to play a game, eh?");
        }
    } else if (cultureType === "B") {
        userPoints += 5;
        var architectType = prompt("Structures, Pillars, Columns! Care to speak to Filippo (A) or Donato (B)?");
        if (architectType === "A") {
            userPoints += 1;
            alert("Good choice! He built the dome of Florence Cathedral with his formulated Renaissance style of improved classical forms. Breathtaking eh?");
        } else if (architectType === "B") {
            userPoints += 1;
            alert("His outstanding architectural work of the High Renaissance was the rebuilding of St. Peter's Basilica, super dope!");
        } else {
            alert("You don't know how to play a game, eh?");
        }
    } else {
        alert("You don't know how to play a game, eh?");
    }
}

var belleEpoque = function() {
    var fashionType = prompt("The real Golden Age! Would you like to speak with a fashion designer (A) or an impressionist (B)?");
    if (fashionType === "A") {
        userPoints += 20;
        var designerType = prompt("Would you like to speak with Coco Chanel (A) or Elsa Schiaparelli (B)?");
        if (designerType === "A") {
            userPoints += 5;
            alert("You must love hats! Do you know that she was called Coco because she threw the most fabulous cocaine parties in Paris? Oops!");
        } else if (designerType === "B") {
            userPoints += 10;
            alert("You must be playful to resonate with her style that incorporate much references to Surrealism!");
        } else {
            alert("You don't know how to play a game, eh?");
        }
    } else if (fashionType === "B") {
        userPoints += 10;
        var impressionistType = prompt("Would you like to speak with Monet (A) or Lord Leighton (B)?");
        if (impressionistType === "A") {
            userPoints += 5;
            alert("Monet's series of Haystacks had been considered the artistic avant-garde in the 1860s! Wheew!");
        } else if (impressionistType === "B") {
            userPoints += 10;
            alert("Absolutely adore the idyllic Roman scenes! Do you know that he was one who inspired a generation of esthetic-minded 'Souls'");
        } else {
            alert("You don't know how to play a game, eh?");
        }
    } else {
        alert("You don't know how to play a game, eh?");
    }
}

var twenties = function() {
    var artistType = prompt("My favourite era too! Are you into music (A) or literature (B)?");
    if (artistType === "A") {
        userPoints += 50;
        var likeColePorter = confirm("I could never play as good as Cole Porter! Do you like him? Yes (Y) or No (N)?");
        if (likeColePorter) {
            userPoints += 10;
            alert("Great minds think alike! Isn't him an amazing musician?");
        } else {
            userPoints -= 10;
            alert("I knew I don't like you! How can one NOT like Cole Porter?");
        }
    } else if (artistType === "B") {
        var poetType = prompt("Oh your two favourite poets are here! Who would you like to meet?\nErnest Hemingway (A) or Scott Fitzgerald (B)?");
        userPoints += 10;
        if (poetType === "A") {
            userPoints += 10;
            alert("Yes! And, he won't read your work, because if he likes it, he'll hate it! Either way, he won't read your work!");
            var confirmFight = confirm("Hemingway wants to box with you in a \"friendly\" sparring match, are you up for it?");
            if (confirmFight) {
                var useHelmet = confirm("You see a helmet! Wanna use it?\n");
                if (useHelmet) {
                    userPoints -= 10;
                    alert("Hemingway trashes you:\n\"A real man does not use a helmet, but nevermind, let's fight!\"");
                } else if (!useHelmet) {
                    userPoints += 10;
                    alert("Hemingway praises you:\n\"A real man fights, and in the real man's way!\"");
                }
                var resultOfFight = fightHemingway(useHelmet);
                if (resultOfFight === "won") {
                    alert("Hemingway says:\n\"You're the real man!\"\nHe then introduced you to Picasso.");
                } else if (resultOfFight === "draw") {
                    alert("Hemingway says:\n\"A real man must fight, and you did!\"\nHe then buys you a drink.");
                } else if (resultOfFight === "lost") {
                    alert("Hemingway says:\n\"At least you fought honourably!\"\nHe made you buy him a drink.");
                }
            } else {
                alert("Hemingway calls you a chicken!");
                userPoints -= 5;
            }
        } else if (poetType === "B") {
            userPoints += 30;
            alert("He's totally not weird! Because he is Tom Hiddleston.... ahem, I meant Fitzgerald!");
        } else {
            alert("You don't know how to play a game, eh?");
        }
    } else {
        alert("You don't know how to play a game, eh?");
    }
}

var future = function() {
    var futureType = prompt("You think that the unforeseen will be the golden age? Why?\n I can make it happen! (A)\n Aliens might rescue us! (B)");
    if (futureType === "A") {
        userPoints += 10;
        var confidentType = prompt("You really think you could change the future?\nFor better (A) or for worse (B)?");
        if (confidentType === "A") {
            userPoints += 10;
            alert("Confident! I hope you see to it though!");
        } else if (confidentType === "B") {
            userPoints += 20;
            alert("Ok, all hail to the king / queen!");
        } else {
            alert("You don't know how to play a game, eh?");
        }
    } else if (futureType === "B") {
        userPoints += 20;
        var alienExist = prompt("Do you believe that aliens are among us?\nYes (Y) or No (N)");
        if (alienExist === "Y") {
            userPoints += 20;
            alert("Woot! I believe it too!\nMaybe it's just too many episodes of Stargates?");
        } else if (alienExist === "N") {
            userPoints -= 5;
            alert("You are ridiculous, look around you more often!");
        } else {
            alert("You don't know how to play a game, eh?");
        }
    } else {
        alert("You don't know how to play a game, eh?");
    }
}