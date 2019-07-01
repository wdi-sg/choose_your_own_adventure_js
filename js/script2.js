
// ---------------------  ACTIVATE STORY BASED ON LAYER & SCENARIO --

let stories = {
    zeroL: { /////////------------ LAYER 0 --------------///////////
        oneS: { // -------SCENARIO----------
            A () { // ------INPUT -----
                displayStory(`Hi ${userName}! \n Your secret mission is about to begin... \n This game is based around making decisions. \n These decisions will determine what ending you will arrive at. \n \nTo make a decision, enter A, B or C in the text box when given a choice to make.`)
                display(`A. Continue`);
                nextLayer(1);
            }
        }
    },
    oneL: { /////////------------ LAYER 1 --------------///////////
        oneS: { // ----SCENARIO ----
            A () { // ------INPUT -----
                displayStory(`You are a spy and you are onboard Thanos' ship, Sanctuary 2. \n Your mission is to steal the Infinity Gauntlet while he's asleep. \n You need to get to the control room to determine the Gaunlet's location. \n As you approach the entrance of the control room, you see a guard. You: `)
                display(`A. Turn on your invisible suit and sneak past the guard \n B. Shoot the guard with your gun \n C. Find the Gauntlet another way `);
                nextLayer(1);
            }
        }
    },
    twoL: { /////////------------ LAYER 2 --------------///////////
        oneS: {
            A () {
                displayStory(`You sneak into the control room undetected. \n You try to access the map but a password-protected riddle is prompted. \n Riddle: 'The more ____ you take, the more you leave behind. What am I?' \n `)
                display('A. Money \n B. Footsteps \n C. Knowledge');
                nextLayer(1);
            },
            B () {
                displayStory(`You shoot the alien guard and kill it. The sound of your blaster alerts other guards in the area. You:`)
                display(`A. Run to the control room \n B. Find cover and hide`);
                nextLayer(2);
            },
            C () {
                displayStory(`You decide not to waste your energy and try finding your own way to the Gauntlet. You go:`);
                display(`A. Onto the main deck to get a better idea of where you are \n B. Break in to the pipes sytem and stay sneaky \n C. These options look bad. I'm going back to the control room `);
                nextLayer(3);
            }
        }
    },
    threeL: {
        oneS: {
            A () {
                displayStory(`Wrong! The machine zaps you and you lose a heart`)
                display(`A. Try again \n B. Destroy the machine`)
                nextLayer(1);
            },
            B () {
                displayStory(`Success! The computer unlocks and displays the Gauntlet's location. \n Location: "U R D L R" \n You go:`)
                display(`A. Straight down the hallway \n B. Right, down the staircase \n C. I'm not going anywhere`)
                nextLayer(2);
            },
            C () {
                displayStory(`Wrong! The machine zaps you and you lose a heart`)
                display(`A. Try again \n B. Destroy the machine`)
                nextLayer(1);
            }
        },
        twoS: {
            A () {
                displayStory(`You decide to make a run for the control room. You sprint as fast as you can and see the door opening. As you are about to enter, a sniper shoots you in the back.`)
                display(`You DIED \n Bad ending 1a (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer();// GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            },
            B () {
                displayStory(`You decide not to risk it and hide. The aliens enter the control room and sound the alarms. The whole place is on alert. \n You overhear the location of the Gauntlet. \n Alien: "U R D L R" You go:`)
                display(`A. Straight down the hallway \n B. Right, down the staircase \n C. I'm not going anywhere`)
                nextLayer(2);
            }
        },
        threeS: {
            A () {
                displayStory(`You get to the main deck to get a better sense of your bearings. You see an alien holding a map walking down a hangar. You:`)
                display(`A. Follow it \n B. Shoot it`)
                nextLayer(3);
            },
            B () {
                displayStory(`You break into the piping system and see a narrow corridor full of pipes. You:`)
                display(`A. Squeeze through the pipes \n B. Back out and try to find another way`)
                nextLayer(4);
            },
            C () {
                goBack();
                stories.oneL.oneS.A();
            }
        }
    },
    fourL: {
        oneS: {
            A () {
                goBack();
                stories.twoL.oneS.A();
            },
            B () {
                displayStory(`The machine explodes and you're happy. But it also causes a shutdown in the entire ship. The aliens figure out where you are and you are trapped! You get caught and are now one of the prisoners onboard Sanctuary 2.`)
                display(`You got CAUGHT \n Bad ending 2a (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer(); // GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        },
        twoS: {
            A () {
                displayStory(`You rush down the hallway only to realize an army of aliens waiting for you. You try to shoot and kill each one but are overwhelmed. They pin you down and execute you.`)
                display(`You DIED \n Bad ending 1b (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer(); // GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            },
            B (){
                displayStory(`You run down the staircase and into the chamber. You open the heavy doors and the Gauntlet is right infront of you. As you take a step closer, you hear heavy breathing behind you. \n Thanos: 'I knew you'd come here. Prepare to meet your doom.' \n You:`)
                display(`A. Shoot Thanos while he's off guard \n B. Talk`)
                nextLayer(1);
            },
            C () {
                displayStory(`You decide that waiting is the best course of aciton. You think of a plan while you wait... \n And wait... \n And wait...`)
                display(`GAME OVER! You WAITED too long! \n Bad ending 3 (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer(); // GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        },
        threeS: {
            A () {
                displayStory(`You follow the alien, thinking it is a good idea. The alien leads you in to a trap and you are surrounded.`)
                display(`You got CAUGHT \n Bad ending 2b (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer();
            },
            B () {
                displayStory(`You shoot the alien using your silencer and it drops the map. You pick up the map and it shows you... \n Map: Secret Entrace to Chamber. R D L U L U You go:`)
                display(`A. Left, up the narrow vent \n B. Right, down the ladder`)
                nextLayer(2);
            }
        },
        fourS: {
            A () {
                displayStory(`You squeeze through the pipes. The pipes scorch you and you barely make it out alive. You make it to a medic room to heal up. You're running out of time, so you:`)
                display(`A. Heal up (Full HP) \n B. Take potions (Max potions x3)`)
                nextLayer(3);
            },
            B () {
                displayStory(`The pipes seem like a bad idea and you back out. As you turn around you see a group of aliens looking at you. You try to fight your way but get outnumbered by the hundereds of aliens.`)
                display(`You DIED \n Bad ending 1c (x) \n Good ending ( ) \n Great ending ( ) `) // GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                nextLayer();
            }
        }
    },
    fiveL: { /////////------------ LAYER 5 --------------///////////
        oneS: {
            A () {
                displayStory(`You shoot Thanos while he's off guard. He is lightly wounded but is angry. He knocks you back with his fist before you can do anything. He picks up the Gauntlet and puts it on.`)
                display(`GAME OVER! \n Bad ending 4a (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer(); // GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            },
            B () {
                displayStory(`You: "I'm here to talk." \n Thanos: "${userName}, there's no need for that." \n You: "We can figure things out. \n You try to stall your time while you inch closer and closer to the Gauntlet. You: `)
                display(`A. Grab the Gauntlet and shoot Thanos \n B. Shoot out the lights`)
                nextLayer(1);
            }
        },
        twoS: {
            A () {
                displayStory(`You make it to the Secret Chamber. You see Thanos sleeping and the Gauntlet is in sight. You:`)
                display(`A. Silently drop down from the vent and take the Gauntlet \n B. Break open the vent and go in guns blazing! \n C. Take a surveillance shot, and think of a plan `)
                nextLayer(2);
            },
            B () {
                displayStory(`You go down the ladder but slip and fall unconscious. When you wake up, you realize that the aliens have captured you. You are now a prisoner onboard Sanctuary 2.`)
                display(`You got CAUGHT! \n Bad ending 2c (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer(); // GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        },
        threeS: {
            A () {
                displayStory(`You heal up and go up a nearby vent. It leads you to the Secret Chamber. You see Thanos sleeping and the Gauntlet is in sight. You:`)
                display(`A. Silently drop down from the vent and take the Gauntlet \n B. Break open the vent and go in guns blazing! \n C. Take a surveillance shot, and think of a plan `)
                nextLayer(2);
            },
            B () {
                displayStory(`You take the potions and go up a nearby vent. It leads you to the Secret Chamber. You see Thanos sleeping and the Gauntlet is in sight. You:`)
                display(`A. Silently drop down from the vent and take the Gauntlet \n B. Break open the vent and go in guns blazing! \n C. Take a surveillance shot, and think of a plan `)
                nextLayer(2);
            }
        }
    },
    sixL: {
        oneS: {
            A () {
                displayStory(`Thanos notices your movements and smashes the floor. You lose your balance and Thanos attacks you, inflicting heavy damage. You use up your energy to damage Thanos but is not enough to kill him. The Gauntlet falls right next to Thanos and he picks it up. `)
                display(`You LOSE \n Bad ending 4b (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer();// GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            },
            B () {
                displayStory(`You shoot out the lights and everything goes dark. You turn on your nightvision and pick up the Gauntlet. As you run away, you hear Thanos' voice shouting '${userName.toUpperCase()}!!!' loudly behind you. To be continued...`)
                display(`Congratulations! You stole the Gauntlet! \n Bad ending ( ) \n Good ending (x) \n Great ending ( ) `)
                nextLayer();// GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        },
        twoS: {
            A () {
                displayStory(`You silently unloose the vent screws. The old vent doesn't hold up and you come crashing down onto the chamber floors. Thanos wakes up and you both rush to the Gauntlet. Thanos gets a hold of it first.`)
                display(`GAME OVER! \n Bad ending 4c (x) \n Good ending ( ) \n Great ending ( ) `)
                nextLayer();// GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            },
            B () {
                displayStory(`Your guns blazing approach works and Thanos is heavily wounded. He tries to pick up the Gauntlet but you snatch it before he can do anything. The alarm sounds go off and you make a run for it. As you run away, you hear Thanos' voice shouting '${userName.toUpperCase()}!!!' loudly behind you. To be continued...`)
                display(`Congratulations! You stole the Gauntlet! \n Bad ending ( ) \n Good ending (x) \n Great ending ( ) `)
                nextLayer();// GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            },
            C () {
                displayStory(`You call Captain Marvel... \n Captain Marvel: 'Thanks for sending me the coordinates. Great job ${userName}.' \n After a few minutes, you hear a loud screeching sound. Captain Marvel breaks in to the chamber and a fight with Thanos ensues. Amidst the chaos, you run in and snatch the Gauntlet. You race to the escape pod and eject yourself from Sanctuary 2.`)
                display(`Congratulations! You escaped with the Gauntlet! \n Bad ending ( ) \n Good ending ( ) \n Great ending (x) `)
                nextLayer(0); // GAME OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        }
    }
}