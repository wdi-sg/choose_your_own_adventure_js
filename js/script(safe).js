
//CAT , DOGGY, ALPHABET
let guessCat = ['C','A','T'];
let userAnswerCat = [];
let fixedCat = ['C','A','T'];
let guessingCat = ['_','_','_'];

let guessDoggy = ['D','O','G','G','Y'];
let userAnswerDoggy = [];

let fixedDoggy = ['D','O','G','G','Y'];
let guessingDoggy = ['_','_','_','_','_'];

let guessAlphabet = ['A','L','P','H','A','B','E','T'];
let userAnswerAlphabet = [];
let fixedAlphabet = ['A','L','P','H','A','B','E','T'];
let guessingAlphabet = ['_','_','_','_','_','_','_','_'];

// HANGMAN COUNTER & VALIDATION CHECKER
let hangman = ['(','╯','ರ','~','ರ','）','╯','︵','┻','━','┻']
let userHangman = [];
let hangmanCounter = 0;
let validationCheck = false;
let currentQuestion = 0;
let message = '';

// MAIN FUNCTION
let inputHappened = (anInput) => {
    let currentInput = anInput.toUpperCase();
    if (userAnswerCat.length === 3 && userAnswerDoggy.length === 5){
        runAlphabet(currentInput);
    } else if (userAnswerCat.length === 3){
        runDoggy(currentInput);
    } else {
        runCat(currentInput);
    }
    if (validationCheck === false) {
        checkLoss();
    }
    if(currentInput === 'HINT') {
        runHint();
    }
    checkHangman();
    display(message)
    validationCheck = false;
    event.target.value = '';
}

// FUNCTIONS TO ACTIVATE FOR LOOPS HERE
let runCat = (currentInput) => {
    for (let i = 0; i<fixedCat.length; i++){
        if(currentInput === fixedCat[i]){
        guessingCat[i] = currentInput;
        }
    }
    for (let i=0; i<guessCat.length; i++){
        if (currentInput === guessCat[i]) {
            guessCat.splice(i,1);
            userAnswerCat.push(currentInput);
            console.log('did i runCat?')
            addCorrectAnswer();
            checkCatAnswer();
        }
    }
}
let runDoggy = (currentInput) => {
    for (let i = 0; i<fixedDoggy.length; i++){
        if(currentInput === fixedDoggy[i]){
        guessingDoggy[i] = currentInput;
        }
    }
    for (let i=0; i<guessDoggy.length; i++){
        if (currentInput === guessDoggy[i]) {
            guessDoggy.splice(i,1);
            userAnswerDoggy.push(currentInput);
            console.log('did i runDoggy?')
            addCorrectAnswer();
            checkDogAnswer();
        }
    }
}
let runAlphabet = (currentInput) => {
    for (let i = 0; i<fixedAlphabet.length; i++){
        if(currentInput === fixedAlphabet[i]){
        guessingAlphabet[i] = currentInput;
        }
    }
    for (let i=0; i<guessAlphabet.length; i++){
        if (currentInput === guessAlphabet[i]) {
            guessAlphabet.splice(i,1);
            userAnswerAlphabet.push(currentInput);
            console.log('did i runAlphabet?')
            addCorrectAnswer();
            checkAlphabetAnswer();
        }
    }
}
let runHint = () => {
    if (currentQuestion === 0){
        message = '3 Letter Animal';
        hint = guessingCat.join('');
    } else if (currentQuestion === 1){
        message = "Rhymes with 'happy'";
        hint = guessingDoggy.join('');
    } else if(currentQuestion === 2){
        message = 'Letters';
        hint = guessingAlphabet.join('');
    }
}

// FUNCTIONS TO RETURN A MESSAGE TO THE USER
let checkCatAnswer = () => {
    if (userAnswerCat.length === 3){
        message = `Congrats! You guessed CAT! You have 2 words left to guess!`
        currentQuestion +=1;
    } else {
        message = `Nice! You guessed ${userAnswerCat.length} letter(s). ${3-userAnswerCat.length} letter(s) left!`
    }
}
let checkDogAnswer = () => {
    if (userAnswerDoggy.length === 5){
        message = `Congrats! You guessed DOGGY! You have 1 word left to guess!`
        currentQuestion +=1;
    } else {
        message = `Nice! You guessed ${userAnswerDoggy.length} letter(s). ${5-userAnswerDoggy.length} letter(s) left!`
    }
}
let checkAlphabetAnswer = () => {
    if (userAnswerAlphabet.length === 8){
        message = `Congrats! You guessed ALPHABET! You WON!`
    } else {
        message = `Nice! You guessed ${userAnswerAlphabet.length} letter(s). ${8-userAnswerAlphabet.length} letter(s) left!`
    }
}
let checkLoss = () => {
    userHangman.unshift(hangman[hangman.length-1]);
    hangmanCounter = hangman.pop();
    if (hangman.length === 0) {
        message = 'TABLE FLIPPED!!!';
    } else {
        message = `Keep trying!`
    }
}

// FUNCTIONS FOR STICKY COUNTERS & VALIDATION
let checkHangman = () => {
    if (currentQuestion === 0){
        let joined = guessingCat.join('')
        display3(joined);
    } else if (currentQuestion === 1){
        let joined = guessingDoggy.join('')
        display3(joined);
    } else if(currentQuestion === 2){
        let joined = guessingAlphabet.join('')
        display3(joined);
    }
    let tableman = userHangman.join('');
    console.log(tableman);
    display2(tableman);
}


let addCorrectAnswer = () => {
    validationCheck = true;
}
//------------------------CHECK LOGS OF DIFFERENT PARTS
console.log(`userAnswerCat.length: ${userAnswerCat.length}`)
console.log(`userAnswerDoggy.length: ${userAnswerDoggy.length}`)
console.log(`userAnswerDoggy: ${userAnswerDoggy}`)
console.log(`userAnswerAlphabet.length: ${userAnswerAlphabet.length}`)
console.log(`userAnswerAlphabet: ${userAnswerAlphabet}`)