console.log("hello script js");

var name;

var inputHappened = function(currentInput){

    console.log(currentInput);

    console.log('name', name);

    console.log(typeof name)

    if(!name){

        name = currentInput;

        var choice1 = `Hey ${name}. I am sorry this is the game of life. Much like your life you do not have much say in if you want to play. Let us skip the easy stuff and into your first real decision. Do you 'A', Further your education or 'B', Start working? `

        console.log("choice1");

        return choice1;
    }

    if (name) {

        if(currentInput === 'A') {
            return `You picked the further your education. ${name} are you serious.The game is rigged. You are neither smart or rich enough to do so. YOU ARE EJECTED FROM THE GAME OF LIFE.`

        }

        if (currentInput === 'B') {
           return `Smart, you could not get into higher education anyway. Okay so now you have got to make a choice. Do you 'WORK HARD', 'WORK SMART' or 'COAST'?`

        } if (name)

            if (currentInput === 'WORK HARD'){

                return `Think you can outplay the system, huh? Well you are not a hard worker. You cannot do something that is against your own nature. YOU ARE EJECTED FROM THE GAME OF LIFE. `

        } if (currentInput === 'WORK SMART') {

            return`Work smart? What does that even mean? It is not a real thing. You cannnot do that. YOU ARE EJECTED FROM THE GAME OF LIFE.`

        } if (currentInput === 'COAST') {

                return `Wow, typical. Hope you are proud of yourself. Well, the system is flawed and you are offered a promotion. Now do you 'A', Accept it or 'B', Quit your job out of fear or 'C', Stay at your current position.`

            } if (name)

                if (currentInput === 'A'){

                   return `lol. Having professional aspirations now are we? Wel you over reached and underperformed. You have been fired. You become homeless and starve. YOU ARE EJECTED FROM THE GAME OF LIFE.`

                } else if (currentInput === 'B'){

                    return `Thats literally the worst thing you could do. I am not even going to validate your choice by letting you continue. YOU ARE EJECTED FROM THE GAME OF LIFE.`

                }else if (currentInput === 'C'){

                    return`Staying the course, thats so you. Maybe you ought to try once in awhile. I will give you a chance to make something of yourself. Do you '1', save up money and venture out to working on your dream startup or '2' continue at this dead end job? `

                }if (currentInput === '1'){

                    return`HAHAHAHAH. This is really not that kind of game. Dreams are for sleeping anyway. YOU ARE EJECTED FROM THE GAME OF LIFE. `
                }if (currentInput === '2'){

                    return `Are you being for real right now? Well you work there till your death. Your orbituary reads "${name} accomplished nothing in particular." and nobody comes to your funeral. At least you managed to reach the end of the game of life. Its not much but every choice you make its meaningless anyway. Turn off the computer and go outside. Loser.`

                }

            }

        }