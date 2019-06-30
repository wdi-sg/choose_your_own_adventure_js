console.log('Game is running!');
// ---------------------------- GLOBAL VARIABLES
let currentLayer = 0;
let scenario = 0;

let userName = '';
let userBar = 0;
let extraCounter = '';
// -------------------------  AWAITING USER INPUT --------
let inputHappened = (anInput) => {
    let input = anInput.toUpperCase();
    let message = '';

    if (extraCounter === 'username') {
        userName = anInput;
        extraCounter = '';
        startGame();
    } else if (input === 'S') {
        startGame();
    } else if (input === 'R') {
        resetGame();
    } else if (input === 'A' || 'B' || 'C' ){
        checkLayers(input);
    }
    console.log('currentLayer:' + currentLayer)
    console.log('scenario:' + scenario)
    display2(userBar);
    display3(userBar);
    event.target.value = '';
}

// -------------------------  START & RESET GAME -----
let getUsername = () => {
    display('What is your name?');
    extraCounter = 'username';
}
let startGame = () => {
    if (currentLayer === 0 && userName) {
        stories.storyLayer0();
    } else if (currentLayer === 0){
        getUsername();
    }
}
let goBack = () => {
    currentLayer -= 2;
}
let resetGame = () => {
    currentLayer = 0;
    scenario = 0;
    userName = '';
    display("Game reset. \n Type 's' to play again.");
}
// ----------------  CHECK WHAT LAYER & SCENARIO USER IS IN --
let checkLayers = (input) => {
    if (currentLayer === 3) {
        if (scenario === 1) {
            if (input === 'A') {
                stories.storyLayer3A1();
            } else if (input === 'B') {
                stories.storyLayer3B1();
            }
        } else if (scenario === 3) {
            if (input === 'A') {
                stories.storyLayer3A2();
            } else if (input === 'B') {
                stories.storyLayer3B2();
            }
        }
        else if (scenario === 5) {
            if (input === 'A') {
                stories.storyLayer3A3();
            } else if (input === 'B') {
                stories.storyLayer3B3();
            }
        }
    }
    if (currentLayer === 2) {
        if (scenario === 1) {
            if (input === 'A') {
                stories.storyLayer2A1();
            } else if (input === 'B') {
                stories.storyLayer2B1();
            } else if (input === 'C') {
                goBack();
                stories.storyLayer0();
            }
        } else if (scenario === 2) {
            if (input === 'A') {
                stories.storyLayer2A2();
            } else if (input === 'B') {
                stories.storyLayer2B2();
            } else if (input === 'C') {
                stories.storyLayer2C2();
            }
        }
    }
    if (currentLayer === 1) {
        if (input === 'A') {
            stories.storyLayer1A1();
        } else if (input === 'B') {
            stories.storyLayer1B1();
        }
    }
}
// ---------------------  ACTIVATE STORY BASED ON LAYER & SCENARIO --
let stories = {
//  ------------------------------ LAYER 0
    storyLayer0 () {
        display(`Hi ${userName}! It's dinner time! \n What should we eat for dinner? \n A. 🍣 \n B. 🍕 \n C. 🍜 \n D. 🍚`);
        nextLayer(1);
    },
// -------------------------- LAYER 1
    storyLayer1A1 () {
        display(`Great choice! Where should we eat our sushi?\n \n A. Sushi express \n B. Genki sushi \n C. Go back`);
        nextLayer(1);
    },
    storyLayer1B1 () {
        display('pepperoni, hawaiian, or screw pizza!');
        nextLayer(2);
    },
// ------------------------- LAYER 2
    storyLayer2A1 () {
        display('10 plates or 20 plates?');
        nextLayer(1);
    },
    storyLayer2B1 () {
        display('lobster ramen it is!')
        nextLayer(2)
    },
    storyLayer2A2 () {
        display('pepperoni with or without mushroom?');
        nextLayer(3);
    },
    storyLayer2B2 () {
        display('hawaiian out of stock, sorry!');
        nextLayer(4);
    },
    storyLayer2C2 () {
        display('you have decided to have dessert instead. bubble tea or waffles?');
        nextLayer(5);
    },
// ------------------------- LAYER 3
    storyLayer3A1 () {
        display('total for 10 plates is $91,000. Thanks for eating!');
        nextLayer(1);
    },
    storyLayer3B1 () {
        display ("It's your lucky day! Sushi's on the house!")
        nextLayer(1)
    },
    storyLayer3A2 () {
        display('pepperoni with mushroom. yum!');
        nextLayer(2);
    },
    storyLayer3B2 () {
        display('pepperoni without mushroom... no vege is bad!!');
        nextLayer(2);
    },
    storyLayer3A3 () {
        display('all the bubble tea shops are closed!');
        nextLayer(3);
    },
    storyLayer3B3 () {
        display('waffles are cheap! only $1.70!');
        nextLayer(3);
    }
//  ------------------------- END LAYER
}
// --------------------- ACTIVATE NEXT LAYER & SELECT SCENE --
let nextLayer = (number) => {
    if (number === 1) {
        scenario = 1;
    } else if (number === 2) {
        scenario = 2;
    } else if (number === 3) {
        scenario = 3;
    } else if (number === 4) {
        scenario = 4;
    } else if (number === 5) {
        scenario = 5;
    }
    currentLayer += 1;
}