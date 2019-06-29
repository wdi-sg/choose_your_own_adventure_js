// Gameplay

// type start to begin - pick your difficulty
// easy m hard ------- are you excited?
// yes or hell yeah    - story starts;
// 1. take the red door    2. take the blue door   3. dont take any door - randomly assigns either door
// 1. you are at x         2. you are at y
// 1. decision a/b        2. decision a,b,c
// 1. decision a1,a2,a3 / b1,b2    2. a1,a2 ,c1,c2

// DECLARE VARIABLES
console.log('Game is running!');
let currentLayer = 0;   //               ==> now at 3
let scenario = 0;            //1, 2, 3, 4, 5....    ==> now at 3

console.log('currentLayer:' + currentLayer)
console.log('scenario:' + scenario)

let inputHappened = (anInput) => {        // ==> input is b
    let input = anInput.toUpperCase();

    if (input === 'S') {
        startGame();
    }
    if (input === 'R') {
        console.log('input RESET?')
        resetGame();
    }
    if (input === 'A' || 'B' || 'C' ){
        checkLayers(input);
    }
    event.target.value = '';
}

let startGame = () => {
    if (currentLayer === 0) {
        stories.storyLayer0();
    }
}

let resetGame = () => {
    currentLayer = 0;
    scenario = 0;
    display("Game reset. \n Type 's' to play again.");
}

let checkLayers = (input) => {
    if (currentLayer === 3) {
        console.log('im in currentLayer 3')
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
        console.log('im in currentLayer 2')
        if (scenario === 1) {
            if (input === 'A') {
                stories.storyLayer2A1();
            } else if (input === 'B') {
                stories.storyLayer2B1();
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
        console.log('im in currentLayer 1')
        if (input === 'A') {
            stories.storyLayer1A1();
        } else if (input === 'B') {
            stories.storyLayer1B1();
        }
    }
}

let stories = {
//  ------------------------------ LAYER 0
    storyLayer0 () {
        display('Choose one: \n 🍣 sushi \n 🍕 pizza');
        nextLayer(1);
    },
// ------------------------------ LAYER 1
    storyLayer1A1 () {
        display('Sushi express or santouka?');
        nextLayer(1);
    },
    storyLayer1B1 () {
        display('pepperoni, hawaiian, or screw pizza!');
        nextLayer(2);
    },
// ------------------------------ LAYER 2
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
// ------------------------------ LAYER 3
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
//  ------------------------------ END LAYER
}


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




// ADDITIONAL FEATURES TO INCLUDE

// go back one line
// put input a b c
// show your path of you got there
// good ending or bad ending or normal ending (the last line will tell me which ending i got eg: there are 5 endings you got the 3rd one)

// can maybe make all layerCounts be in an array. for every question,
// if i = layerCount, run that number function..
// story object with all the stories (place in a js file);