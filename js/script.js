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
// --------------------- SELECT SCENE ------
let nextLayer = (scenarioNumber) => {
    for (let i = 0; i < scenarioArr.length; i++) {
        if (scenarioNumber === scenarioArr[i]) {
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
// -------------------- END --------------