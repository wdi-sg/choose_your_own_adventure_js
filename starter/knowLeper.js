var score = 0;
var questionNumber = 0;
var gameRunning = true;
var knowLeperQnA = [
       {"question": "What is Mr.Leper's age?",
        "choices": [
                    "a: 300",
                    "b: 400", 
                    "c: 500",
                    "d: 1000"
                   ],
        "answer": "a",
        "comment": {"correct": "Spot on!",
                    "wrong": "Wrong! A leprechaun only lives for 300 years on average!"
                   }
       },
       {"question": "Is Mr.Leper's married?",
        "choices": ["a: Yes", "b: No"],
        "answer": "b",
        "comment": {"correct": "Bingo!",
                    "wrong": "Unfortunately, there are no female leprechauns."
                   }
       },
       {"question": "What does Mr.Leper do for a living?",
        "choices": ["a: Gold Hunter",
                    "b: Partake in Mischief",
                    "c: Mend Shoes",
                    "d: Slacker"
                   ],
        "answer": "c",
        "comment": {"correct": "That's right!",
                    "wrong": "Contrary to popular belief, leprechauns do actually work."
                   }
       }
      ]

function composeQuestion(questionNumber) {
  var questionObject = knowLeperQnA[questionNumber]
  var questionHTML = ""
  questionHTML += "<p>" + questionObject.question + "</p>"
  questionObject.choices.forEach(function(choice) {
    questionHTML += "<p>" + choice + "</p>"
  })
  gameResultsElement.innerHTML += questionHTML;
}

function nextQuestion(questionNumber, score) {
  if (questionNumber == 0 || (questionNumber == 1 && score > 0)) {
    return [true, ''];
  } else if ((questionNumber == 2 && score < 2) ||(questionNumber == 1 && score == 0)) {
    return [false, 'lost'];
  } else {
    return [false, 'win'];
  }
}

function knowLeper() {
  gameIntroElement.innerHTML = "<p>Play a game of Do-You-Know-Mr.Leper? Get at least 2 out of 3 questions right to proceed! </p>";
  composeQuestion(questionNumber);
  knowLeperElement.style.display = 'block'
}

function checkAnswerKnowLeper() {
  var questionObject = knowLeperQnA[questionNumber];
  if (userInputKLElement.value == questionObject.answer) {
    score++;
    gameResultsElement.innerHTML += "<p>" + questionObject.comment.correct + "</p>"
  } else {
    gameResultsElement.innerHTML += "<p>" + questionObject.comment.wrong + "</p>"
  }
  var results = nextQuestion(questionNumber, score);
  console.log(questionNumber + " " + score);
  console.log(results);
  gameRunning = results[0];
  resultsMessage = results[1];
  if (gameRunning) {
    questionNumber++;
    userInputKLElement.value = ""
    composeQuestion(questionNumber);
  } else if (resultsMessage == 'lost') {
    gameResultsElement.innerHTML += "<p>You sure know nothing about leprechauns, no gold for you</p>";
    userInputKLElement.style.display = "none";
    userInputKLElement.value = ""
    gameResetElement.style.display = "block";
  } else {
    gameResultsElement.innerHTML += "<p>Wow, were you a leprechaun your past life?! Congrats, one step closer to the other side of the rainbow!</p>";
    currentState++;
    knowLeperElement.style.display = "none";
    userInputKLElement.value = ""
    moveOnElement.style.display = "block";
  }
}