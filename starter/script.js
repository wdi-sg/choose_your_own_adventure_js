
// input: String
// output: {"question": String,
//          "answer": Number}
function generateQuestionAndAnswer(difficulty="normal") {
    // get random number from 1-99
    let numRand1 = Math.floor(Math.random() * 99) + 1;
    let numRand2 = Math.floor(Math.random() * 99) + 1;
    let opRand = ["+","-","*","%"][Math.floor(Math.random() * 4)];
    let question = "" + numRand1.toString() + " " + opRand + " " + numRand2.toString();

    let answer = 0;
    if (opRand === "+") {
        answer = numRand1 + numRand2;
    }
    else if (opRand === "-") {
        answer = numRand1 - numRand2;
    }
    else if (opRand === "*") {
        answer = numRand1 * numRand2;
    }
    else if (opRand === "%") {
        answer = numRand1 % numRand2;
    }
    console.log(question, "=", answer);

    return {"question": question,
            "answer": answer}
}

// input: Number
// output: [Number,Number]
function generateWrongAnswers(answer) {
    const errorPercent = 30/100;
    let errorRange = Math.ceil(answer*errorPercent);
    const numberWrongAnswers = 2;
    let wrongAns = [0,0];
    for (let i = 0; i < numberWrongAnswers; i++) {
        let offsetSign = Math.floor(Math.random() * 2);
        if (offsetSign === 0) {
            wrongAns[i] = answer - Math.floor(Math.random() * errorRange);
            if (wrongAns[i] === answer) {
                wrongAns[i]--;
            }
        }
        else if (offsetSign === 1) {
            wrongAns[i] = answer + Math.floor(Math.random() * errorRange);
            if (wrongAns[i] === answer) {
                wrongAns[i]++;
            }
        }

    }
    console.log(wrongAns);
}

// input: Number
// output: Number
// generates an integer score betwee 1-10 (inclusive)
function generateScore(answer) {
    answer = Math.abs(answer);
    while (10 <= answer) {
        answer /= 10;
    }
    console.log(Math.ceil(answer));
    return Math.ceil(answer); 
}

generateWrongAnswers(50);