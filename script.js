// put code here!


function getAnswer(question, possibleAnswer) {

    while (true) {

        var ans = prompt(question);

        if (ans === null) {
            return 'Q'
        } else {
            ans = ans.toUpperCase();

            if (possibleAnswer.includes(ans)) {
                return ans
            } else {
                alert("Please enter " + possibleAnswer);
            }
        }

    }

}

function sayGoodBye() {
    alert("Sad to see you go but no Worries, hope to see you soon")
}

var scores = 0;


var userName = prompt("Welcome, may I know your name please : ");

if (userName === null) {
    sayGoodBye();
} else {
    var continueGame = confirm("Welcome " + userName + ". Are you sure you want to go back to future ? ");

    if (!continueGame) {
        sayGoodBye()
    } else {
        while (true) {

            var yearToGo = prompt(userName.toUpperCase() + ', which year would you like to go to ? ');

            if (yearToGo === null) {
                sayGoodBye();
                break;
            }

            if (!confirm(userName + ", you have chosen to go back to " + yearToGo + '. Is this correct ?')) {
                continue
            }

            yearToGo = parseInt(yearToGo);

            if (yearToGo >= 2015) {
                var ans = getAnswer('I see you are a fan of Back to the Future 2. \n Would you rather deal with Biff, or Griff ? (Choose B or G)', ['B', 'G']);
                if (ans === 'B') {
                    ans = getAnswer('Hmm, interesting. Biff is angry and has a cane. \nDo you stand and fight, or run away like a coward? **(S/R)', ['S', 'R']);
                    if (ans === 'S') {
                        scores += 1;
                        alert('Good choice. Biff is old and feeble at this point. \nYou push him over and he falls in a pile of manure.')
                    } else if (ans == 'R') {
                        scores -= 1;
                        alert('You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad\'s cowardice.');
                    } else {
                        sayGoodBye()
                        break;
                    }
                } else if (ans === 'G') {
                    ans = getAnswer('Griff is asking you if you are in, or out. \nWhat do you say? **(I/O)**', ['I', 'O']);
                    if (ans === 'I') {
                        scores -= 1;
                        alert('Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.')
                    } else if (ans === 'O') {
                        scores += 1;
                        alert('Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.');
                    } else {
                        sayGoodBye()
                        break;
                    }
                } else {
                    sayGoodBye()
                    break;
                }

            } else if (yearToGo >= 1985 && yearToGo <= 2014) {
                userName = prompt('Doc has already destroyed the Time Machine at this point. \nI guess you\'ll have to wait around until 2015. \nWhat name would you like to go by until then?');
                alert('Welcome to the future, ' + userName.toUpperCase());
            } else if (yearToGo >= 1955 && yearToGo <= 1984) {
                var ans = getAnswer('I see you\'re a fan of Back to the Future 1. \nYour future Mom has just asked you to the Enchantment Under the Sea dance. \nWhat do you do? **(Y/N/S)**', ['Y', 'N', 'S']);
                if (ans === 'Y') {
                    scores -= 1;
                    alert('Creepy. I hope you have some backup plan in place to get out of this. \nUntil then, you\'re stuck in 1955.');
                    // break;
                } else if (ans === 'N') {
                    scores - +1;
                    alert('Honorable. But this also means that your future Dad \nwill never meet your Mom, and therefore you cannot exist.');
                    // break;
                } else if (ans === 'S') {
                    scores += 1;
                    alert('Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. \nDespite going horribly awry, the plan ultimately works. \nYou may go back to your own time.');
                    // break;
                } else {
                    sayGoodBye()
                    break;
                }
            } else {
                var ans = getAnswer('I see you\'re a fan of Back to the Future 3. \nYou\'ve run out of gas and can\'t get back to your own time! \nHow do you power the Time Machine? **(H/M/T)**', ['H', 'M', 'T']);
                if (ans === 'H') {
                    scores - +1;
                    alert('Good idea, but no. \nThe time machine needs to get to 88mph. \n12 horsepower ain\'t gonna cut it.')
                } else if (ans === 'M') {
                    scores -= 1;
                    alert('You\'d be better off drinking the moonshine. \nDo not pass Go, do not collect $200. Stuck in 1855.');
                } else if (ans === 'T') {
                    var ans = getAnswer('Good call! This plan seems to be working. \nBut wait! Clara wants to go Back to the Future with you at the last moment. \nWhat do you do? **(T/L)**', ['T', 'L']);
                    if (ans === 'T') {
                        scores -= 1;
                        alert('Interesting choice. \nUnfortunately the Doc can\'t grab Clara and get back to the car in time. \nHe ends up staying in 1855 with her.');
                    } else if (ans === 'L') {
                        scores -= 1;
                        alert('Smart choice. Unfortunately the Doc was deeply in love with Clara, \nand when he gets back to 1985 he becomes very depressed.')
                    } else {
                        sayGoodBye()
                        break;
                    }
                } else {
                    sayGoodBye()
                    break;
                }
            }

        }

    }
}