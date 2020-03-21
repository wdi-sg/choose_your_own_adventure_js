//output variables
const classmate = "classmate";
const senpai = "unrivalled super hottie senior";
const CCAmate = "CCA-mate";
const pickItUp = "pick it up";
const ignore = "ignore";
const walkAway = "walk away";
const talkToHer = "talk to her";
const correctWork = "correct her work, then return her ID";
const tellOk = "compliment her work, then return her ID";
const offerSeat = "offer the elderly lady your seat";
const continueTalking =
  "continue the exciting conversation and return your eyecandy's ID";
const yes = "yes";
const no = "no";
const useLuckyItem = "useluckyitem";
const dropID =
  "It is lunch time at school! You spy your eyecandy headed to the canteen with her friends. As she fishes her phone out from her skirt pocket, you notice a blue card fall out. Neither her friends nor her appear to have noticed this. You call out to her but she does not hear you. Upon closer inspection, you realize that the dropped item is actually her student ID!";
const projWk =
  "You are one lucky ducky! It is pair-assignment time and you just so happened to be paired up with eyecandy. This is your big chance to return her ID and make a good first impression! \n \n After approximately half-an-hour of work, you notice that the part she has been working on is a complete mess. Being the OCD straight-A student that you are, you can't help but want and know how to fix it.";
const train =
  "School is over and you are seated on the train home minding your own business. To your surprise, your eyecandy suddenly boards the train and takes the empty seat next to you. DAYUUUM~ This is your big chance to return her ID and make a good first impression! You muster up your courage and begin talking to her. \n \n Several minutes pass - the conversation is going great and the train is now packed with people. You will be alighting in two stops and have yet to return your eyecandy's ID! You don't want to interrupt her because she is talking about her family. The train reaches the next stop and you notice an elderly lady shuffling onto the train.";
const CCABattle = "CCA battle scenario.";
const crying = "Crying on bench scenario.";

//other variables
let playerName = false;
let classmateState = 0;
let senpaiState = 0;
let CCAmateState = 0;
let points = 0;
let luckyItemStatus = false;

//functions
const assignName = currentInput => {
  if (isNaN(currentInput) === true) {
    playerName = currentInput;
    return (
      "Hello " +
      playerName +
      ". To begin attracting your eyecandy's attention, please choose your character. \n \n Input either: '" +
      classmate +
      "' OR '" +
      senpai +
      "' OR '" +
      CCAmate +
      "'."
    );
  } else {
    return "You have entered an invalid name. Please try again.";
  }
};

const ifClassmate = currentInput => {
  points += 5;
  classmateState += 1;
  return (
    dropID +
    "\n \n Please select and input either: '" +
    pickItUp +
    "' OR '" +
    ignore +
    "'."
  );
};

const ifSenpai = currentInput => {
  points += 7;
  senpaiState += 1;
  return (
    dropID +
    "\n \n Please select and input either: '" +
    pickItUp +
    "' OR '" +
    ignore +
    "'."
  );
};

const ifCCAmate = currentInput => {
  points += 4;
  CCAmateState += 1;
  return (
    dropID +
    "\n \n Please select and input either: '" +
    pickItUp +
    "' OR '" +
    ignore +
    "'."
  );
};

const luckyItemDrop = () => {
  let luckyNum = Math.floor(Math.random() * 10);
  console.log(luckyNum);
  if (luckyNum % 2 === 0) {
    luckyItemStatus = true;
    return "You have picked up a one-time use lucky item called: Charisma and Humour. You must use it now or never. To activate, input '" +
      useLuckyItem +
      "'. Good luck! \n \n"
  } else {
    return "";
  }
};

const ifUseLuckyItem = currentInput => {
  if (luckyItemStatus === true) {
    points += 5;
    luckyItemStatus = false;
    console.log(points);
    return "Lucky item activated. Please proceed with your previously selected input.";
  } else {
    return "You have exceeded your lucky item usage times. Please proceed with your previously selected input.";
  }
};

const evalWinCondition = () => {
  console.log(points);
  if (points > 15) {
    return "This is the end of the game! \n \n Congratulations " + playerName + "! Through sheer force of personality, you have gotten your eyecandy to notice you. \n \n Thank you for playing! Refresh page to play again."
  }
  else {
    return "This is the end of the game! \n \n Awww man. Despite your heartfelt attempts, you have still not gotten on your eyecandy's radar. \n \n Thank you for playing! Refresh page to play again."
  }
}

const simulBattle = () => {
  let yourScore = Math.floor(Math.random() * 10);
  let opponentScore = Math.floor(Math.random() * 10);
  console.log(yourScore);
  console.log(opponentScore);
  if (yourScore === opponentScore) {
    yourScore--;
    points += 2;
    return "You lost the match with a score of " + yourScore + " : " + opponentScore + ". \n \n"
  }
  else if (yourScore > opponentScore) {
    points += 5;
    return "You won the match with a score of " + yourScore + " : " + opponentScore + "! \n \n"
  }
  else {
    return "You lost the match with a score of " + yourScore + " : " + opponentScore + ". \n \n"
  }
}

var inputHappened = function(currentInput) {
  if (playerName === false) {
    return assignName(currentInput);
  } else if (playerName !== false && currentInput === classmate) {
    return ifClassmate(currentInput);
  } else if (playerName !== false && currentInput === senpai) {
    return ifSenpai(currentInput);
  } else if (playerName !== false && currentInput === CCAmate) {
    return ifCCAmate(currentInput);
  } else if (classmateState === 1 && currentInput === pickItUp) {
    points += 5;
    return (
      projWk +
      "\n \n Please select and input either: '" +
      correctWork +
      "' OR '" +
      tellOk +
      "'."
    );
  } else if (senpaiState === 1 && currentInput === pickItUp) {
    points += 5;
    return (
      train +
      "\n \n Please select and input either: '" +
      offerSeat +
      "' OR '" +
      continueTalking +
      "'."
    );
  } else if (CCAmateState === 1 && currentInput === pickItUp) {
    points += 5;
    return (
      CCABattle +
      "\n \n Please select and input either: '" +
      yes +
      "' OR '" +
      no +
      "'."
    );
  } else if (playerName !== false && currentInput === ignore) {
    points += 1;
    let dropResult = luckyItemDrop();
    return (
      dropResult +
      crying +
      "\n \n Please select and input either: '" +
      walkAway +
      "' OR '" +
      talkToHer +
      "'."
    );
  } else if (currentInput === walkAway) {
    points += 1;
    return evalWinCondition();
  } else if (currentInput === useLuckyItem) {
    return ifUseLuckyItem(currentInput);
  } else if (currentInput === talkToHer) {
    points += 5;
    return evalWinCondition();
  } else if (currentInput === correctWork) {
    points += 3;
    return evalWinCondition();
  } else if (currentInput === tellOk) {
    points += 6; 
    return evalWinCondition();
  } else if (currentInput === offerSeat) {
    points += 5;
    return evalWinCondition();
  } else if (currentInput === continueTalking) {
    points += 3; 
    return evalWinCondition();
  } else if (currentInput === yes) {
    points += 5; 
    let battleResult = simulBattle();
    let winResult = evalWinCondition ();
    return battleResult + winResult;
  } else if (currentInput === no) {
    points += 3; 
    return evalWinCondition();
  } else {
    return "You have entered an invalid input. Please try again or refresh the page to play from the beginning."
  }
}
