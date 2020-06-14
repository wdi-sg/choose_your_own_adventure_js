console.log("hello script js");

//misc. function
let name;

//display message in h4 which id="message"
function displayName(name){
    document.getElementById("message").innerHTML = "Hi " + name + ", key your option below: ";
}

//display start message in the output box
function startMessage(message){
    output.innerText = message;
}

//reset input box
function inputReset() {
    document.getElementById("input").value = "";
  }

//initial start question
function initialQuestion() {
    name = prompt("Key in your name");

    displayName(name);
    startMessage("Nice to meet you, " + name + ". What year would you like to go to? (YYYY)");
}

initialQuestion();



//main function
let game = {
    greaterThanEqual2015: {
        question: "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)",
        B: {
            question: "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)",
            S: {
                end: "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure."
            },
            R: {
                end: "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."
            }
        },
        G: {
            question: "Griff is asking you if you are in, or out. What do you say? (I/O)",
            I: {
                end: "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you."
            },
            O: {
                end: "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure."
            }
        }
    },
    lessThanEqual2014: {
        question: "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?",
        calvinKlein: {
            end: "Welcome to the future, `Calvin Klein`."
        }
    },
    lessThanEqual1984: {
        question: "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)",
        Y: {
            question: "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.........\n\n Do you wish to go back to previous option for a second chance? (YES/NO)",
            yNo: {
                end: "You shall be stuck in 1955 forever!"
            }
        },
        N: {
            end: "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist."
        },
        S: {
            end: "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time."
        }
    },
    lessThan1955: {
        question: "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)",
        H: {
            end: "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it."
        },
        M: {
            question: "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.........\n\n Do you wish to go back to previous option for a second chance? (YES/NO)",
            mNo: {
                end: "You shall be stuck in 1855 forever!"
            }
        },
        T: {
            question: "Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (R/L)",
            R: {
                end: "Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her."
            },
            L: {
                end: "Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed."
            }    
        }
    }
};

let step = '1';
let score = 0;
let selectedOption;

function inputHappened(currentInput) {

    inputReset();

    selectedOption = currentInput.toUpperCase();

    if (step === '1') {
        if (selectedOption >= 2015) {
            step = '1A';
            score++;
            return game.greaterThanEqual2015.question;
        } else if (selectedOption >= 1985) {
            step = '1B';
            score++;
            return game.lessThanEqual2014.question;
        } else if (selectedOption >= 1955) {
            step = '1C';
            score++;
            return game.lessThanEqual1984.question;
        } else if (selectedOption < 1955) {
            step = '1D';
            score++;
            return game.lessThan1955.question;
        }
    }

    if (step === '1A') {
        if (selectedOption === 'B') {
            step = '1AB';
            score++;
            return game.greaterThanEqual2015.B.question;
        } else if (selectedOption === 'G') {
            step = '1AG';
            score++;
            return game.greaterThanEqual2015.G.question;
        }
        else {
            alert("Key in the correct input!");
            return game.greaterThanEqual2015.question;
        }
    }

    if (step === '1AB') {
        if (selectedOption === 'S') {
            step = '1ABS';
            score++;
            return game.greaterThanEqual2015.B.S.end + " \n\nTotal Score: " + score;
        } else if (selectedOption === 'R') {
            step = '1ABR';
            score--;
            return game.greaterThanEqual2015.B.R.end + " \n\nTotal Score: " + score;
        }
        else {
            alert("Key in the correct input!");
            return game.greaterThanEqual2015.B.question;
        }
    }

    if (step === '1AG') {
        if (selectedOption === 'I') {
            step = '1AGI';
            score--;
            return game.greaterThanEqual2015.G.I.end + " \n\nTotal Score: " + score;
        } else if (selectedOption === 'O') {
            step = '1AGO';
            score++;
            return game.greaterThanEqual2015.G.O.end + " \n\nTotal Score: " + score;
        }
        else {
            alert("Key in the correct input!");
            return game.greaterThanEqual2015.G.question;
        }
    }

    if (step === '1B') {
        if (selectedOption === 'CALVIN KLEIN') {
            step = '1BCK';
            score++;
            return game.lessThanEqual2014.calvinKlein.end + " \n\nTotal Score: " + score;
        } else {
            alert("Key in the correct input! Think of the brand name: CK");
            return game.lessThanEqual2014.question;
        }
    }

    if (step === '1C') {
        if (selectedOption === 'Y') {
            step = '1CY';
            score -= 2;
            return game.lessThanEqual1984.Y.question;
        } else if (selectedOption === 'N') {
            step = '1CN';
            score--;
            return game.lessThanEqual1984.N.end + " \n\nTotal Score: " + score;
        } else if (selectedOption === 'S') {
            step = '1CS';
            score++;
            return game.lessThanEqual1984.S.end + " \n\nTotal Score: " + score;
        } else {
            alert("Key in the correct input!");
            return game.lessThanEqual1984.question;
        }
    }

    if (step === '1CY') {
        if (selectedOption === 'YES') {
            step = '1C';
            score += 2;
            return game.lessThanEqual1984.question;
        } else if (selectedOption === 'NO') {
            step = '1CNO';
            score -= 2;
            return game.lessThanEqual1984.Y.yNo.end + " \n\nTotal Score: " + score;
        } else {
            alert ("This is your last chance!")
            return game.lessThanEqual1984.Y.end;
        }
    }

    if (step === '1D') {
        if (selectedOption === 'H') {
            step = '1DH';
            score--;
            return game.lessThan1955.H.end + " \n\nTotal Score: " + score;
        } else if (selectedOption === 'M') {
            step = '1DM';
            score -= 2;
            return game.lessThan1955.M.question ;
        } else if (selectedOption === 'T') {
            step = '1DT';
            score++;
            return game.lessThan1955.T.question;
        } else {
            alert("Key in the correct input!");
            return game.lessThan1955.question;
        }
    }

    if (step === '1DM') {
        if (selectedOption === 'YES') {
            step = '1D';
            score += 2;
            return game.lessThan1955.question;
        } else if (selectedOption === 'NO') {
            step = '1DNO';
            score -= 2;
            return game.lessThan1955.M.mNo.end + " \n\nTotal Score: " + score;
        } else {
            alert ("This is your last chance!")
            return game.lessThan1955.M.end;
        }
    }

    if (step === '1DT') {
        if (selectedOption === 'R') {
            step = '1DTG';
            score++;
            return game.lessThan1955.T.R.end + " \n\nTotal Score: " + score;
        } else if (selectedOption === 'L') {
            step = '1DTL';
            score++;
            return game.lessThan1955.T.L.end + " \n\nTotal Score: " + score;
        } else {
            alert("Key in the correct input!");
            return game.lessThan1955.T.question;
        }
    }
}
