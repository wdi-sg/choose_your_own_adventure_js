// any path must ask at least 2 questions
// there must be at least 6 total destinations
// at least one of the questions there must be more than two possible user responses
let userName = "";

const coverStory = "This is year 1423, the lands the witcher has found its peace again, " +
  " after Geralt of Rivia, Ciri Yennefer of Vengerberg together melted away the wild hunt's pollution." +
  " Just when families were happily enjoying their McSpicy double while watching Star Wars on Netflix, a " +
  "new crisis has appeared...\n" +
  "An unknown spaceship has landed on earth and brought alone an hostile species called Cov17. " +
  "The only way to defeat them, is to collect 5 dragon balls scattered across the lands." +
  "You, a witcher, is hired by the government to collect 5 dragon balls and defeat the evil cov19.<hr>" +
  "<em>To begin your quest, sign the contract by entering your name.</em>";

const setIntro = (userName) => {
  return `<div style="background-color: antiquewhite; color:#343229; display: inline-block; padding:30px" >
      <h0 style="text-align: center">Work Release</h1>
      <div style="text-align: left">
        <p>Temple of Meltitele</p>
        <p>Ellander, Temeria</p>
        <p>Date: May 11 1432</p>
        <p>This document is to certify that they are to accompany <b>${userName}</b>, Ravix of Popcorn, Butcher of McSpicy Double,
        on a most dangerous contract to track down the 7 Dragons Balls.</p>
      </div>
      <div style="float:left">
        <p>Signed:</p>
        <p><em>${userName}</em></p>
        <p>Bucher of McSpicy Double</p>
      </div>
      <div style="float: right">
        <p>Signed:</p>
        <p><em>Mendenek</em></p>
        <p>Preistess of Melitele</p>
      </div>
    </div>`;
};


// a random number will be generated from lower and upper
// window is located in the middle, if the random number fits in the window return true
// the larger the window, the higher the chance of hitting window
const clearInput = () => document.getElementById("input").value = "";
const setPrompt = text => document.getElementById("input").setAttribute("placeholder", text);
const chanceMaker = (lowerLimit, upperLimit, windowSize) => {
  let randomNum = genRandomNum(lowerLimit, upperLimit);
  let middle = upperLimit/2;
  let leftWindowLimit = middle - windowSize;
  let rightWindowLimit = middle + windowSize;
  return randomNum > leftWindowLimit && randomNum < rightWindowLimit;
};

let nextPlot = null;
let nextStory = null;
let currPlot = null;
let currStory = null;
let currChoices = [];
let currChoicesStr = null;
let nextChoicesStr = null;
let nextChoices = null;
let gameHasStarted = false;
let round = 0;
let plots = null;
let ballsCollected = 0;
document.getElementById("output").innerHTML = coverStory;
const setHtml = (html) => document.getElementById("out").innerHTML = html;
const getChoicesStr = (plots, choices) => {
  let choiceStr = "";
  for (let i = 0; i < choices.length; i++) {
    // first one is always fixed choice
    if (i === 0) {
      choiceStr += `${i}. ${choices[i].get('choice')}<br> `
    }else {
      choiceStr+= `${i}. ${plots.getPlotById(choices[i][1]).choice}<br>`;
    }
  }
  return choiceStr;
};
const inputHappened = function (currentInput) {
  if (!gameHasStarted) {
    userName = currentInput;
    gameHasStarted = true;
    round++;
    plots = new Plots(allPlots);
    plots.shufflePlots();
  }
  if (gameHasStarted && round === 1) {
    setPrompt("Press enter any key to continue ...");
    round++;
    nextPlot = plots.getRandomPlot();
    nextChoices = nextPlot.getAllChoices();
    clearInput();
    return setIntro(userName);
  }

  currPlot = nextPlot;
  currChoices = nextChoices;
  currStory= currPlot.story;
  currChoicesStr = getChoicesStr(plots, currChoices);
  // // set next story to be
  // if (parseInt(currentInput) === 0) {
  //   // currPlot remains the same
  //   // next plot depends on urser input
  //   currStory = currPlot.story;
  //   currChoices = currPlot.getAllChoices();
  //   nextStory = `${currStory} <br> ${currChoices[0].get('response')}`;
  // }
  round++;
  clearInput();
  return `${currStory} <br><hr>\n ${currChoicesStr}`;

};


