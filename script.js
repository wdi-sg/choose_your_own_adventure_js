// UI elements for areas on the page
const question = document.getElementById('question');
const scoreBox = document.getElementById('score');
const reset = document.getElementById('reset');
const resetBtn = document.getElementById('reset-btn');
const answerBox = document.getElementById('answer');
const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');

var name;
var answer;

// submit name function
function submitName() {
  if (userInput.value !== "") {
    name = userInput.value;
    next(game.two);
    userInput.value = "";
    changeBtn();
  } else {
    alert('The little bear cub wants to know your name');
  }
}

// change name button to answer button
function changeBtn() {
  submitBtn.removeAttribute("onclick", "submitName()");
  submitBtn.setAttribute("onclick", "submitAnswer()");
}

// submit answer function
function submitAnswer() {
  answer = userInput.value;
  userInput.value = "";
  switch(game.currentRound) {
    case 2: // tumble?
      switch(answer) {
        case "y":
          next(game.two.yes);
          game.currentScore += 1;
          break;
        case "n":
          next(game.two.no); // endpoint 1
          break;
        default:
          alert('Please enter a valid answer');
      }
      break;
    case 3: // hold hands? | eat or sleep?
      switch(answer) {
        case "y":
          next(game.two.yes.yes); 
          game.currentScore += 1;
          break;
        case "n":
          next(game.two.yes.no); 
          break;
        case "eat":
        next(game.two.no.eat); 
        break;
      case "sleep":
        next(game.two.no.sleep); 
        game.currentScore += 1;
        break;
        default:
          alert('Please enter a valid answer');
      }
      break;
    case 4: // hill, field, ocean or leave? | follow or bye | potato or tomato | hilltop or meadow
    switch(answer) {
      case "a":
        next(game.two.yes.yes.a); 
        answerBox.innerText = "";
        game.currentScore += 2;
        break;
      case "b":
        next(game.two.yes.yes.b); // endpoint 1
        answerBox.innerText = "";
        game.currentScore += 1;
        break;
      case "c":
        next(game.two.yes.yes.c); // endpoint 2
        answerBox.innerText = "";
        game.currentScore += 1;
        break;
      case "d":
        next(game.two.yes.yes.d); 
        break;
      case "follow":
        next(game.two.yes.no.follow); // endpoint 3
        answerBox.innerText = "";
        game.currentScore += 1;
        break;
      case "bye":
        next(game.two.yes.no.bye); // endpoint 4
        answerBox.innerText = "";
        break;
      case "potato":
        next(game.two.no.eat.potato); // endpoint 5
        // answerBox.innerText = "";
        break;
      case "tomato":
        next(game.two.no.eat.tomato); // endpoint 6
        answerBox.innerText = "";
        break;
      case "hilltop":
        next(game.two.no.sleep.hilltop); // endpoint 7
        answerBox.innerText = "";
        break;
      case "meadow":
        next(game.two.no.sleep.meadow); // endpoint 8
        answerBox.innerText = "";
        break;
      default:
        alert('Please enter a valid answer');
      }
      break;
    case 5: // remember?
      switch(answer) {
        case "y":
          next(game.two.yes.yes.d.yes); // endpoint 9
          answerBox.innerText = "";
          break;
        case "n":
          next(game.two.yes.yes.d.no); 
          break;
        default:
          alert('Please enter a valid answer');
      }
      break;
    case 6: // run or sorry?
      switch(answer) {
        case "run":
          next(game.two.yes.yes.d.no.run); // endpoint 10
          answerBox.innerText = "";
          break;
        case "sorry":
          next(game.two.yes.yes.d.no.sorry); // endpoint 12
          answerBox.innerText = "";
          break;
        default:
          alert('Please enter a valid answer');
      }
    break;
  }
}

// change text function
function changeText(words) {
  question.innerText = words.replace("yourname", name);
}

// game object
const game = {
  currentRound: 0,
  currentScore: 0,
  one: {
    text: `You’re walking through a field all by yourself one day in spring, and this sweet little bear cub with velvet fur and shiny little eyes comes walking along.  And he says to you, “Hi, there, little human. What's your name?"\n ʕ◕ ᴥ ◕ʔ \n\n`
  },
  two: {
    text: `Hi there, yourname. Want to tumble with me (y/n)? \n┏ʕ ◕ ᴥ◕ ʔ┛\n\n`,
    yes: {
      text: `That's wonderful, yourname. Will you hold my hand (y/n)?\n\n`,
      yes: {
        text: `The little bear takes yourname's hand and leads ${name} to... \n (a) a clover-covered hill \n (b) a field of sunflowers \n (c) the big blue ocean \n (d) leave\n\n`,
        a: {
          text: `So yourname and the bear cub spend the whole day in each other’s arms, tumbling down this clover-covered hill.\n\n`
        },
        b: {
          text: `So yourname and the bear cub spend the whole day in each other’s arms, tumbling through a field of sunflowers.\n\n`
        },
        c: {
          text: `So yourname and the bear cub spend the whole day in each other’s arms, tumbling down a sandy beach and into the big blue ocean.\n\n`
        },
        d: {
          text: `The little bear looks up at yourname mournfully. “I want you always to remember me. Will you remember that I existed, and that I stood next to you here like this?” (y/n)
          \n\n`,
          yes: {
            text: `Thank you, yourname. The little bear will never forget your kindness.\nʕ๑> ₃ <๑ʔ \n\n`
          },
          no: {
            text: `The little bear's eyes turn black with rage. It snarls, revealing its razor-sharp teeth. (run/sorry)\nʕ•ˋ _ ˊ•ʔ\n\n`,
            run: {
              text: `yourname tries to escape, but is eaten by the angry little bear.\nʕ๑•̀ㅁ•́๑ʔ \n\n`
            },
            sorry: {
              text: `The little bear is kind and gracious. yourname is forgiven and allowed to leave.٩\nʕ๑> ₃ <๑ʔ 
              \n\n`
            }
          }
        }
      },
      no: {
        text: `The little bear hangs its head and tumbles away sadly. What will you do? (follow/bye)\n\n`,
        follow: {
          text: `yourname follows the little bear, but it's too late. The little bear has disappeared into the Norwegian woods.\n\n`
        },
        bye: {
          text: `You really shouldn't have crushed the little bear's feelings. The earth beneath your feet splits open and yourname tumbles into oblivion.
          \n\n`
        }
      }
    },
    no: {
      text: `"Okay then. What shall we do instead?" (eat/sleep)\n\n`,
      eat: {
        text: `"Yay, I love food! What shall we eat?" (potato/tomato)\n\n`,
        potato: {
          text: `yourname and the little bear share a red potato. Unfortunately, the little bear turns out to be allergic to red potatoes and dies from its allergic reaction. \n\n`
        },
        tomato: {
          text: `yourname and the little bear share a green tomato. Unfortunately, you have forgotten that you are allergic to green tomatoes and you die from your allergic reaction. 
          \n\n`
        }
      },
      sleep: {
        text: `"Yay, sleeping is my second-most favourite activity. Where shall we take a nap?" (hilltop/meadow)
        \n\n`,
        hilltop: {
          text: `yourname and the little bear reach the hilltop and doze off. ${name} starts to roll down the hill. Luckily, the little bear rescues ${name} and the two of them have the best nap ever, becoming best friends forever. \n ʕ◡ ᴥ ◡ʔ\n\n`
        },
        meadow: {
          text: `yourname and the little bear find a peaceful spot in the meadow and doze off. A lion stealthily approaches, but the little bear is alert, and manages to fight it off. ${name} and the two of them have the best nap ever, becoming best friends forever.
          \n ʕ◡ ᴥ ◡ʔ\n\n`
        }
      }
    }
  }
}

// update score
function updateScore() {
  scoreBox.innerText = `Your current score is: ${game.currentScore}`
}

// next question function
function next(s) {
  changeText(s.text);
  game.currentRound++;
  updateScore();
}

// initialise game question 1
next(game.one);