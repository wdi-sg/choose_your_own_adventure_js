// UI elements for areas on the page
const question = document.getElementById('question');
const reset = document.getElementById('reset');
const resetBtn = document.getElementById('reset-btn');
const answerBox = document.getElementById('answer');
const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');

var name;
var answer;



// submit name function
function submitName() {
  // console.log('user input after restart', userInput.value);
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
          break;
        case "n":
          next(game.two.no); // endpoint 1
          answerBox.innerText = "";
          // showReset()
          break;
        default:
          alert('Please enter a valid answer');
      }
      break;
    case 3: // hold hands?
      switch(answer) {
        case "y":
          next(game.two.yes.yes); 
          // showReset()
          break;
        case "n":
          next(game.two.yes.no); // endpoint 2
          answerBox.innerText = "";
          // showReset();
          break;
        default:
          alert('Please enter a valid answer');
      }
      break;
    case 4: // hill, field, ocean or leave?
    switch(answer) {
      case "a":
        next(game.two.yes.yes.a); // endpoint 3
        // answerBox.innerText = "";
        // showReset()
        break;
      case "b":
        next(game.two.yes.yes.b); // endpoint 4
        answerBox.innerText = "";
        // showReset();
        break;
      case "c":
      next(game.two.yes.yes.c); // endpoint 5
      answerBox.innerText = "";
      // showReset();
      break;
      case "d":
      next(game.two.yes.yes.d); 
      // showReset();
      break;
      default:
        alert('Please enter a valid answer');
      }
      break;
    case 5: // remember?
      switch(answer) {
        case "y":
          next(game.two.yes.yes.d.yes); // endpoint 5
          answerBox.innerText = "";
          // showReset()
          break;
        case "n":
          next(game.two.yes.yes.d.no); 
          // showReset();
          break;
        default:
          alert('Please enter a valid answer');
      }
      break;
    case 6: // run or sorry?
      switch(answer) {
        case "run":
          next(game.two.yes.yes.d.no.run); // endpoint 6
          answerBox.innerText = "";
          // showReset()
          break;
        case "sorry":
          next(game.two.yes.yes.d.no.sorry); // endpoint 7
          answerBox.innerText = "";
          // showReset();
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
  one: {
    text: `You’re walking through a field all by yourself one day in spring, and this sweet little bear cub with velvet fur and shiny little eyes comes walking along. And he says to you, “Hi, there, little human. What's your name?"\n\n`
  },
  two: {
    text: `Hi there, yourname. Want to tumble with me (y/n)?\n\n`,
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
            text: `Thank you, yourname. The little bear will never forget your kindness.\n\n`
          },
          no: {
            text: `The little bear's eyes turn black with rage. It snarls, revealing its razor-sharp teeth. (run/sorry)
            \n\n`,
            run: {
              text: `yourname tries to escape, but is eaten by the angry little bear. \n\n`
            },
            sorry: {
              text: `The little bear is kind and gracious. yourname is forgiven and allowed to leave.
              \n\n`
            }
          }
        }
      },
      no: {
        text: `You really shouldn't have crushed the little bear's hopes. Goodbye, yourname!\n\n`
      }
    },
    no: {
      text: `That's too bad. Goodbye, little yourname!\n\n`
    }
  }
}

// next question function
function next(s) {
  changeText(s.text);
  game.currentRound++;
}

// initialise game question 1
next(game.one);