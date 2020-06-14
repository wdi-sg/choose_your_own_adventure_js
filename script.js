// UI elements for areas on the page
const question = document.getElementById('question');
const scoreBox = document.getElementById('score');
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
          game.currentScore += 6;
          break;
        case "n":
          next(game.two.no); // endpoint 1
          game.currentScore -= 3;
          break;
        default:
          alert('Please enter a valid answer');
      }
      break;
    case 3: // hold hands? | eat or sleep?
      switch(answer) {
        case "y":
          next(game.two.yes.yes); 
          game.currentScore += 2;
          break;
        case "n":
          next(game.two.yes.no); 
          game.currentScore += 1;
          break;
        case "eat":
          next(game.two.no.eat); 
          game.currentScore += 5;
        break;
      case "sleep":
        next(game.two.no.sleep); 
        game.currentScore += 3;
        break;
      case "back":
        back(game.two); 
        break;
      default:
        alert('Please enter a valid answer');
      }
      break;
    case 4: // hill, field, ocean or leave? | follow or bye? | potato or tomato | hilltop or meadow?
    switch(answer) {
      case "a":
        next(game.two.yes.yes.a); // endpoint 1
        answerBox.innerText = "";
        game.currentScore += 10;
        break;
      case "b":
        next(game.two.yes.yes.b); // endpoint 2
        answerBox.innerText = "";
        game.currentScore += 4;
        break;
      case "c":
        next(game.two.yes.yes.c); // endpoint 3
        answerBox.innerText = "";
        game.currentScore += 7;
        break;
      case "d":
        next(game.two.yes.yes.d); 
        game.currentScore -= 3;
        break;
      case "follow":
        next(game.two.yes.no.follow); // endpoint 4
        answerBox.innerText = "";
        game.currentScore += 3;
        break;
      case "bye":
        next(game.two.yes.no.bye); // endpoint 5
        answerBox.innerText = "";
        game.currentScore -= 10;
        break;
      case "potato":
        next(game.two.no.eat.potato); // endpoint 6
        answerBox.innerText = "";
        game.currentScore -= 5;
        break;
      case "tomato":
        next(game.two.no.eat.tomato); // endpoint 7
        answerBox.innerText = "";
        game.currentScore -= 5;
        break;
      case "hilltop":
        next(game.two.no.sleep.hilltop); // endpoint 8
        answerBox.innerText = "";
        game.currentScore += 2;
        break;
      case "meadow":
        next(game.two.no.sleep.meadow); // endpoint 9
        answerBox.innerText = "";
        game.currentScore += 3;
        break;
      default:
        alert('Please enter a valid answer');
      }
      break;
    case 5: // remember?
      switch(answer) {
        case "y":
          next(game.two.yes.yes.d.yes); // endpoint 10
          answerBox.innerText = "";
          game.currentScore += 8;
          break;
        case "n":
          next(game.two.yes.yes.d.no); 
          game.currentScore -= 8;
          break;
        default:
          alert('Please enter a valid answer');
      }
      break;
    case 6: // run or sorry?
      switch(answer) {
        case "run":
          next(game.two.yes.yes.d.no.run); // endpoint 11
          answerBox.innerText = "";
          game.currentScore -= 100;
          break;
        case "sorry":
          next(game.two.yes.yes.d.no.sorry); // endpoint 12
          answerBox.innerText = "";
          game.currentScore += 12;
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
      text: `That's wonderful, yourname. Will you hold my hand (y/n/back)?\n[p.s. this is your only chance to go back and reset your score!]\n\n`,
      yes: {
        text: `The little bear cub takes yourname's hand and leads you to... \n (a) a clover-covered hill \n (b) a field of sunflowers \n (c) the big blue ocean \n (d) leave\n\n`,
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
          text: `The little bear cub looks up at yourname mournfully. “I want you always to remember me. Will you remember that I existed, and that I stood next to you here like this?” (y/n)
          \n\n`,
          yes: {
            text: `Thank you, yourname. The little bear cub will never forget your kindness.\nʕ๑> ₃ <๑ʔ \n\n`
          },
          no: {
            text: `The little bear cub's eyes turn black with rage. It snarls, revealing its razor-sharp teeth. (run/sorry)\nʕ•ˋ _ ˊ•ʔ\n\n`,
            run: {
              text: `yourname tries to escape, but is eaten by the angry little bear cub.\nʕ๑•̀ㅁ•́๑ʔ \n\n`
            },
            sorry: {
              text: `The little bear cub is kind and gracious. yourname is forgiven and allowed to leave.٩\nʕ๑> ₃ <๑ʔ 
              \n\n`
            }
          }
        }
      },
      no: {
        text: `The little bear cub hangs its head and tumbles away sadly. What will you do? (follow/bye)\n\n`,
        follow: {
          text: `yourname follows the little bear cub, but it's too late. The little bear cub has disappeared into the Norwegian woods.\n\n`
        },
        bye: {
          text: `You really shouldn't have crushed the little bear cub's feelings. The earth beneath your feet splits open and yourname tumbles into oblivion.
          \n\n`
        }
      }
    },
    no: {
      text: `"Okay then. What shall we do instead?" (eat/sleep/back)\n[p.s. this is your only chance to go back and reset your score!]\n\n`,
      eat: {
        text: `"Yay, I love food! What shall we eat?" (potato/tomato)\n\n`,
        potato: {
          text: `yourname and the little bear cub share a red potato. Unfortunately, the little bear cub turns out to be allergic to red potatoes and dies from its allergic reaction. \n\n`
        },
        tomato: {
          text: `yourname and the little bear cub share a green tomato. Unfortunately, you have forgotten that you are allergic to green tomatoes and you die from your allergic reaction. 
          \n\n`
        }
      },
      sleep: {
        text: `"Yay, sleeping is my second-most favourite activity. Where shall we take a nap?" (hilltop/meadow)
        \n\n`,
        hilltop: {
          text: `You reach the hilltop and doze off together. yourname starts to roll down the hill. Luckily, the little bear cub jumps to the rescue and the two of them have the best nap ever, becoming best friends forever. \n ʕ◡ ᴥ ◡ʔ\n\n`
        },
        meadow: {
          text: `yourname and the little bear cub find a peaceful spot in the meadow and doze off. A lion stealthily approaches, but the little bear cub is alert, and manages to fight it off. The two of them have the best nap ever, becoming best friends forever.
          \n ʕ◡ ᴥ ◡ʔ\n\n`
        }
      }
    }
  }
}

// update score
function updateScore() {
  scoreBox.innerText = `Your score is: ${game.currentScore}`
}

// next question function
function next(s) {
  changeText(s.text);
  game.currentRound++;
  updateScore();
}

// go back function
function back(s) {
  changeText(s.text);
  game.currentRound--;
  game.currentScore = 0;
}

// initialise game question 1
next(game.one);