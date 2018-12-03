//////////      Objects & starting stats

var confidenceLvl = 100;
var endGame = false;


var Raven = {
    talkToAlready: false,
}

//////////      Declaring Functions

// Check if input resembles the answer requirements (exact strings or first letter)
// note to self--- first letter won't work if all three girls have the same first letter name
var checkInput = function(input, requirements) {
    var inputLow = input.toLowerCase();
    var requirementsLow = requirements.toLowerCase();
    if ((inputLow === requirementsLow) || (inputLow.charAt(0) === requirementsLow.charAt(0))) {
        return true;
    } else {
        return false;
    }
};

var fightRaven = function() {
    alert("HEY ASSHOLEEEEEEEEE!!!!!!");
    alert("GET AWAYYYYY FROM MY GURLLLLLLL!!!!!")
    var fightChoice = prompt(`Its Raven. She saw your talking to her gurl from afar and is pissed. She's running towards you. What`)
}





var startGame = function() {
while (confidenceLvl > 0 ) {
        var talkToWho = prompt(`You're at the school hall. Who would you like to talk to, ${playerName}? \n \n [R]aven \n [A]manda - incomplete \n [J]ulia \n \n Confidence: ${confidenceLvl}`);


///////////////// Talking to Raven
        if ((checkInput(talkToWho, 'Raven')) && (Raven.talkToAlready === false))     {
            var ravenFirst = prompt(`"Yes?" says Raven as she stares at you intensely. \n \n [1] "Wanna go to the prom with me?" \n [2] "Hey beautiful, how are you today?" \n [3] "I like your shoes"`);

                if (ravenFirst.includes("1"))       {
                    alert(`Raven: "Have you been living under a rock? I have a girlfriend. Everyone knows that."`);
                    alert(`You left feeling ashamed. How could you not know? \n -25 Confidence`);
                    confidenceLvl -= 25;
                    Raven.talkToAlready = true;
                }


                else if (ravenFirst.includes("2"))  {
                    confidenceLvl -= 20;
                    alert(`Raven: "Guys like you disgust me do you know that. What do you want?" \n (So fierce....-20 Confidence)`);
                    var ravenSecond = prompt(`Raven: "Guys like you disgust me do you know that. What do you want?" \n \n [1] "Wanna go to the prom with me?" \n [2] "Urm nevermind" \n [3] "I'm sorry. Do you plan to go to prom?" \n \n Confidence: ${confidenceLvl}`);
                        if (ravenSecond.includes("1"))      {
                            confidenceLvl -= 30;
                            Raven.talkToAlready = true;
                            alert(`Raven: "Is that a joke? You know I'm a lesbian right. And even if I'm straight, I'll never even be near you."`)
                            alert(`That was embarrasing. Everyone in the hall heard that. \n -30 Confidence`)
                        }
                        else if (ravenSecond.includes("2"))      {
                        }
                        else if (ravenSecond.includes("3"))      {
                            alert(`Raven: "Yea of course, I'll be going there with Amanda. We've been together for the two years dude"`)
                        }
                }


                else if (ravenFirst.includes("3"))  {
                    alert(`Raven: "Urm....sure?. What do you want?"`)
                    var ravenThird = prompt(`Raven: "Urm....sure?. What do you want?" \n \n [1] "Wanna go to the prom with me?" \n [2] "Urm nevermind" \n [3] "Do you plan to go to the prom?" \n \n Confidence: ${confidenceLvl}`);
                        if (ravenThird.includes("1"))       {
                            confidenceLvl -= 20;
                            Raven.talkToAlready = true;
                            alert(`Raven: "What? Dude I have a girlfriend already"`)
                            alert(`Slow it down next time. \n -20 Confidence`)
                        }
                        else if (ravenThird.includes("2"))      {
                        }
                        else if (ravenThird.includes("3"))      {
                            alert(`Raven: "Yea of course, I'll be going there with Amanda. We've been together for the two years dude"`)
                        }
                }
            }

        else if ((checkInput(talkToWho, 'Raven')) && (Raven.talkToAlready === true)) {
            alert(`Raven: "Go away loser!" \n -10 Confidence`)
            confidenceLvl -= 10;
        }



///////////////// Talking to Amanda
        else if (checkInput(talkToWho, 'Amanda'))    {
            var amandaFirst = prompt(`"Oh hello ${playerName}! Is there anything I can help you? \n \n [1] "Wanna go to the prom with me?" \n [2] "Hey beautiful, how about going to prom with me?" \n [3] "I'm fine, how about you?"`)
        }

        //Talking to Julia
        else if (checkInput(talkToWho, 'Julia'))    {
            var juliaFirst = prompt(`Julia looks at your nervously. \n \n [1] "Wanna go to the prom with me?" \n [2] "Hey beautiful, how are you today?" \n [3] "Hey Julia, how are you today?"`);

                if (juliaFirst.includes("1"))       {
                    var juliaSecond = prompt(`"(......)" Julia said something softly and you can't hear it. \n \n [1] "Sorry what did you say" \n [2] "I can't hear you Julia \n [3] "You need to speak louder"`);
                        if (juliaSecond.includes("1"))      {
                            alert(`Julia ran away!`);
                            alert(`You probably scared her. \n -10 Confidence`);
                            confidenceLvl -=10;
                        }
                        else if (juliaSecond.includes("2"))      {
                            alert(`Julia ran away!`);
                            alert(`You probably scared her. \n -10 Confidence`);
                            confidenceLvl -=10;
                        }
                        else if (juliaSecond.includes("3"))      {
                            alert(`Julia ran away!`);
                            alert(`You probably scared her. \n -10 Confidence`);
                            confidenceLvl -=10;
                        }
                }


                else if (juliaFirst.includes("2"))      {
                    alert(`Julia ran away!`);
                    alert(`You probably scared her. \n -10 Confidence`);
                    confidenceLvl -=10;
                }
                else if (juliaFirst.includes("3"))      {
                    alert('Julia nods');
                    alert('An awkward silence follows');
                    var juliaSecond = prompt("Both of you are just standing next to each other in silence")

                }
        }

        else    {
        alert("Try again");
        }
    }
};

var playAgain = function () {
    var answer = prompt("But remember when all you got to keep is strong. Move along, move along like I know you do. And even when your hope is gone. Move along, move along just to make it through. \n \nTry again? [Y]es [N]o");
    if ( answer.includes("Y")) {
        alert("Prom is coming in a month's time. Everyone is rushing to find a partner. Because you've been too focused on your studies, you've neglected your social life and have no one to go with. This is your last chance to make your high school experience worthwhile and not boring");
        confidenceLvl = 100;
        Raven.talkToAlready = false;
        startGame();
    }
    else if (answer.includes("N")) {
        alert("Thank you for playing");
    }
}

/////   Start Game


var playerName = prompt("Welcome to Brooktown High! What's your name?")
alert("Prom is coming in a month's time. Everyone is rushing to find a partner. Because you've been too focused on your studies, you've neglected your social life and have no one to go with. This is your last chance to make your high school experience worthwhile and not boring")

startGame()

if (confidenceLvl <= 0 ) {
    alert("After much rejection, your heart can't take it anymore. These wounds won't seem to heal, this pain is just too real. There's just too much that time cannot erase.")
    playAgain();
}






