// put code here!

// ## Question and Answer Generation and Score Calculation
// - Questions
//     - Random 1-2 digit number, Random operator (+,-,*,% only), Random 1-2 digit number
//     - 1 correct answer, other 2 use random number 30% away from correct answer, rounded away from answer to avoid same answers
//     - Score from 1-10. 
//         - If negative, abs(ans) first
//         - If abs(ans) > 10, mod the value
//         - If value is not integer, ceil to next int

// input: difficulty [string]
// output: object {"question": [String]}
//                 "answer": [Number]
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