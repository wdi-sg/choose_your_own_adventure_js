console.log('Game is running!');
// ---------------------------- GLOBAL VARIABLES
let currentLayer = 0;
let scenario = 0;

let userName = '';
let userBar = 0;
let userItems = '-';
let startCounter = '';
// -------------------------  AWAITING USER INPUT --------
let inputHappened = (anInput) => {
    let input = anInput.toUpperCase();

    if (startCounter === 'username') {
        userName = anInput;
        startCounter = 'start';
        startGame();
    } else if (input === 'S') {
        startGame();
    } else if (input === 'R') {
        resetGame();
    }
    if (startCounter === 'start'){
        if (input === 'A' || 'B' || 'C' ){
        checkLayers(input);
        }
    }
    console.log('currentLayer:' + currentLayer)
    console.log('scenario:' + scenario)
    display2(userBar);
    display3(userItems);
    event.target.value = '';
}

// -------------------------  START & RESET GAME -----
let startGame = () => {
    if (currentLayer === 0 && userName) {
        stories.zeroL.oneS.A();
    } else if (currentLayer === 0){
        getUsername();
    }
}
let getUsername = () => {
    display('What is your name?');
    startCounter = 'username';
}
let resetGame = () => {
    currentLayer = 0;
    scenario = 0;
    userName = '';
    startCounter = '';
    display("Game reset. \n Type 's' to play again.");
}
// ----------------  CHECK WHAT LAYER & SCENARIO USER IS IN --
let layerArr = [0,1,2,3,4,5,6,7];
let layerArrAfter = ['zeroL','oneL','twoL','threeL','fourL','fiveL'];
let layerAfter = '';

let scenarioArr = [0,1,2,3,4,5,6,7,8,9,10];
let scenarioArrAfter = ['zeroS','oneS','twoS','threeS','fourS','fiveS','sixS','sevenS','eightS'];
let scenarioAfter = '';

let breakToggle = false;

let checkLayers = (input) => {
    for (let i = 0; i<layerArr.length; i++) {
        if (currentLayer === layerArr[i]){
            layerAfter = layerArrAfter[i];
            for (let j = 0; j<scenarioArr.length; j++) {
                if (breakToggle === true) {
                    break;
                }
                if (scenario === scenarioArr[j]){
                    scenarioAfter = scenarioArrAfter[j];
                    let story = stories[layerAfter][scenarioAfter];
                    if (input === 'A') {
                        story.A();
                    } else if (input === 'B') {
                        story.B();
                    } else if (input === 'C') {
                        story.C();
                    }
                }
            }
        }
    }
    breakToggle = false;
}
// ---------------------  ACTIVATE STORY BASED ON LAYER & SCENARIO --
// let stories = {
//     zeroL: { /////////------------ LAYER 0 --------------///////////
//         oneS: { // -------SCENARIO----------
//             A () { // ------INPUT -----
//                 display(`Hi ${userName}! It's dinner time! \n What should we eat for dinner? \n A. 🍣 \n B. 🍕`);
//                 nextLayer(1);
//             }
//         }
//     },
//     oneL: { /////////------------ LAYER 1 --------------///////////
//         oneS: { // ----SCENARIO ----
//             A () { // ------INPUT -----
//                 display(`Great choice! Where should we eat our sushi?\n \n A. Sushi express \n B. Genki sushi \n C. Go back`);
//                 userBar += 1;
//                 nextLayer(1);
//             },
//             B () {
//                 display('pepperoni, hawaiian, or screw pizza!');
//                 nextLayer(2);
//             }
//         }
//     },
//     twoL: { /////////------------ LAYER 2 --------------///////////
//         oneS: {
//             A () {
//                 display('10 plates or 20 plates?');
//                 nextLayer(1);
//             },
//             B () {
//                 display('lobster ramen it is!');
//                 nextLayer();
//             },
//             C () {
//                 goBack();
//                 stories.zeroL.oneS.A();
//             }
//         },
//         twoS: {
//             A () {
//                 display('pepperoni with or without mushroom?');
//                 nextLayer(2);
//             },
//             B () {
//                 display('hawaiian out of stock, sorry!');
//                 nextLayer();
//             },
//             C () {
//                 display('you have decided to have dessert instead. bubble tea or waffles?');
//                 nextLayer(3);
//             }
//         }
//     },
//     threeL: { /////////------------ LAYER 3 --------------///////////
//         oneS: {
//             A () {
//                 display('total for 10 plates is $91,000. Thanks for eating!');
//                 nextLayer();
//             },
//             B () {
//                 display ("It's your lucky day! Sushi's on the house!");
//                 nextLayer();
//             }
//         },
//         twoS: {
//             A () {
//                 display('pepperoni with mushroom. yum!');
//                 nextLayer();
//             },
//             B () {
//                 display('pepperoni without mushroom... no vege is bad!!');
//                 nextLayer();
//             }
//         },
//         threeS: {
//             A () {
//                 display('all the bubble tea shops are closed!');
//                 nextLayer();
//             },
//             B () {
//                 display('waffles are cheap! only $1.70!');
//                 nextLayer();
//             }
//         }
//     }
// }//  ------------------------- END LAYER
// --------------------- SELECT SCENE ------
let nextLayer = (number) => {
    for (let i = 0; i < scenarioArr.length; i++) {
        if (number === scenarioArr[i]) {
            scenario = scenarioArr[i];
            console.log('value of scenarioArr[i]:' + scenarioArr[i] );
        }
    }
    currentLayer += 1;
    breakToggle = true;
}
let goBack = () => {
    currentLayer -= 2;
}