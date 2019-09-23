var gameStart = true;
var score = 0;

var inputHappened = function(input) {};

while (gameStart === true) {
  // Name
  var name = prompt("What is your name?");

  // Select Year
  var yearSelect = prompt(
    `Nice to meet you, ${name}. What year would you like to go to? (YYYY)`
  );

  // 2015 and beyond
  if (parseInt(yearSelect) >= 2015) {
    var BorG = prompt(
      "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
    );
    if (BorG.toUpperCase() === "B") {
      var stayOrRun = prompt(
        "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)"
      );

      if (stayOrRun.toUpperCase() === "S") {
        score += 1;
        alert(
          `Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.
          
          Final Score : ${score}`
        );
      } else if (stayOrRun.toUpperCase() === "R") {
        score -= 1;
        alert(
          ` You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.
         
         Final Score: ${score}`
        );
      }
    } else if (BorG.toUpperCase() === "G") {
      var inOrOut = prompt(
        "Griff is asking you if you are in, or out. What do you say? (I/O)"
      );

      if (inOrOut.toUpperCase() === "I") {
        score -= 1;
        alert(
          `Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.
          Final Score: ${score}
          `
        );
      } else if (inOrOut.toUpperCase() === "O") {
        score += 1;
        alert(
          `Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.
          Final Score: ${score}`
        );
      }
    }
    // 1985 - 2014
  } else if (Number(yearSelect) >= 1985 && Number(yearSelect) <= 2014) {
    var newName = prompt(
      "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?"
    );

    if (newName === "Calvin Klein") {
      alert("Welcome to the future, Calvin Klein.");
    } else {
      alert(`${newName} ...really?`);
    }
  } else if (Number(yearSelect) >= 1955 && Number(yearSelect) <= 1984) {
    var danceOption = prompt(
      "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? Say yes, no or do something else (Y/N/S)"
    );

    if (danceOption.toUpperCase() === "Y") {
      score -= 1;
      alert(
        `Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.
        Final Score: ${score}`
      );
    } else if (danceOption.toUpperCase() === "N") {
      score -= 1;
      alert(
        `Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.
        
        Final Score: ${score}`
      );
    } else if (danceOption.toUpperCase() === "S") {
      score += 1;
      alert(
        `Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.
        Final Score: ${score}`
      );
    } else {
      prompt("That is not a valid response, please try again");
    }
    // Below 1955
  } else if (Number(yearSelect) < 1955) {
    var timeMachine = prompt(
      "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)"
    );

    if (timeMachine.toUpperCase() === "H") {
      score -= 1;
      alert(
        `Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.
        Final Score: ${score}`
      );
    } else if (timeMachine.toUpperCase() === "M") {
      score -= 1;
      alert(
        `You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.
        Final Score: ${score}`
      );
    } else if (timeMachine.toUpperCase() === "T") {
      score += 1;
      var clara = prompt(
        `Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)
       Score: ${score}`
      );

      if (clara.toUpperCase() === "T") {
        score += 1;
        alert(
          `Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.
          Final Score: ${score}`
        );
      } else if (clara.toUpperCase() === "L") {
        score -= 1;
        alert(
          `Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.
          Final Score: ${score}`
        );
      } else {
        prompt("That is not a valid response, please try again");
      }
    } else {
      prompt("That is not a valid response, please try again");
    }
  } else {
    alert("Please enter a valid year.");
  }
}
