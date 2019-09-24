// var gameStart = true;

var sequence = 0;
const input = document.getElementById("input");
input.placeholder = "Please enter your name";
var name = "";
const outputholder = document.getElementById("output");
const imgHolder = document.getElementById("insImg");

var helloPic = function() {
  imgHolder.src = "welcome.jpg";
};

var carPic = function() {
  imgHolder.src = "delorean.jpeg";
  imgHolder.style.height = "50rem";
  imgHolder.style.width = "100%";
};

var destroyed = function() {
  imgHolder.src = "destroyed.jpg";
};

var biff = function() {
  imgHolder.src = "biff.png";
};

var inputHappened = function(currentInput) {
  if (sequence === 0) {
    name = input.value;
    helloPic();
    sequence++;
    display(`Nice to meet you ${name} What year would you like to go to?`);
    console.log(sequence);
  }

  // YEAR SELECT
  var yearSelected = parseInt(currentInput);
  if (sequence === 1 && yearSelected >= 2015) {
    carPic();
    sequence++;
    display(
      "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
    );
  } else if (sequence === 1 && yearSelected >= 1985 && yearSelected <= 2014) {
    destroyed();
    sequence += 3;
    console.log(sequence);
    display(
      "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. "
    );
  } else if (sequence === 1 && yearSelected >= 1955 && yearSelected <= 1984) {
    sequence++;
    display(
      "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? Say yes, no or do something else (Y/N/S)"
    );
  } else if (sequence === 1 && yearSelected < 1955) {
    sequence++;
    display(
      "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/O)"
    );
  }

  // More than 2015
  let BorG = currentInput;
  if (sequence === 2 && BorG.toUpperCase() === "B") {
    biff();
    sequence++;
    display(
      "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)"
    );
  } else if (sequence === 2 && BorG.toUpperCase() === "G") {
    sequence++;
    display(
      "Griff is asking you if you are in, or out. What do you say? (I/O)"
    );
  }

  // Biff
  let stayOrRun = currentInput;
  if (sequence === 3 && stayOrRun.toUpperCase() === "S") {
    display(
      `Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.`
    );
  } else if (sequence === 3 && stayOrRun.toUpperCase() === "R") {
    display(
      ` You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.`
    );
  }

  // Griff
  let inOrOut = currentInput;
  if (sequence === 3 && inOrOut.toUpperCase() === "I") {
    display(
      `Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.`
    );
  } else if (sequence === 3 && inOrOut.toUpperCase() === "O") {
    display(
      `Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.`
    );
  }
  // Calvin Klein

  // var newName = currentInput;
  // if(sequence === 4 && newName.toUpperCase() === "Calvin Klein" ){

  //   display("Welcome to the future, Calvin Klein.")
  // } else if(sequence === 4 ) {

  //   display(`${newName} okay?`)
  // }

  // Dance
  let danceOption = currentInput;
  if (sequence === 2 && danceOption.toUpperCase() === "Y") {
    display(
      `Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.`
    );
  } else if (sequence === 2 && danceOption.toUpperCase() === "N") {
    display(
      `Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.`
    );
  } else if (sequence === 2 && danceOption.toUpperCase() === "S") {
    display(
      `Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.`
    );
  }

  // time machine
  let timeMachine = currentInput;
  if (sequence === 2 && timeMachine.toUpperCase() === "H") {
    display(
      `Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.`
    );
  } else if (sequence === 2 && timeMachine.toUpperCase() === "M") {
    display(
      `You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.`
    );
  } else if (sequence === 2 && timeMachine.toUpperCase() === "O") {
    sequence++;
    display(
      `Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)`
    );
  }

  let clara = currentInput;
  if (sequence === 3 && clara.toUpperCase() === "T") {
    display(
      `Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.`
    );
  } else if (sequence === 3 && clara.toUpperCase() === "L")
    display(
      `Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.`
    );
};

//           `Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.
//           Final Score: ${score}`
//         );
//       } else {
//         prompt("That is not a valid response, please try again");
//       }
//     } else {
//       prompt("That is not a valid response, please try again");
//     }
//   } else {
//     alert("Please enter a valid year.");
//   }
// }
