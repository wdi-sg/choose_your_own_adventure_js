var gameEnd = false;

//What is your name?
while (gameEnd === false){
  var name = prompt('What is your name?');

  var chooseYear = prompt(`Nice to meet you, ${name}. What year would you like to go to? (YYYY)`);

  if (Number(chooseYear) >= 2015){

    var biffGiff = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? \nB for Biff \nG for Griff");
      if ( biffGiff.toUpperCase() === "B"){

        var standOrRun = prompt ('Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? \nS for Stand and fight \nR for Run');

          if( standOrRun.toUpperCase() === "S" ){
            alert('Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.');
            gameEnd = true;
          } else if( standOrRun.toUpperCase() === "R" ){
            alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
            gameEnd = true;
          }

      } else if ( biffGiff.toUpperCase() === "G" ){

        var inOrOut = prompt('Griff is asking you if you are in, or out. What do you say? \nI for In \nO for Out ');

        if( inOrOut.toUpperCase() === "I" ){
          alert('Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.');
          gameEnd = true;
        } else if( inOrOut.toUpperCase() === "O" ){
          alert('Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.');
          gameEnd = true;
        }
      }

  } else if ( Number(chooseYear) >= 1985 &&  Number(chooseYear) <= 2014 ){

    var nameToGoBy = prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?");

    if (nameToGoBy === "Calvin Klein"){
      alert('Welcome to the future, Calvin Klein.');
      gameEnd = true;
    }  else {
      alert( `${nameToGoBy} is a cool name.`);
      gameEnd = true;
    }

  } else if ( Number(chooseYear) >= 1955 &&  Number(chooseYear) <= 1984 ){

      var danceEnchantment = prompt ("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? \nY for Yes \nN for No \nS for set her up with George, your future dad");

        if ( danceEnchantment.toUpperCase() === "Y" ){
          alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
          gameEnd = true;
        } else if ( danceEnchantment.toUpperCase() === "N" ){
          alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
          gameEnd = true;
        } else if ( danceEnchantment.toUpperCase() === "S" ){
          alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
          gameEnd = true;
        } else {
          prompt("Please enter a valid response.");
          gameEnd = true;
          // go back to danceEnchantment

        }

  } else if ( Number(chooseYear) < 1955){

    var powerTimeMachine =  prompt ("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? \nH for horses \nM for Moonshine \nT for Train");

    if ( powerTimeMachine.toUpperCase() === "H" ){
      alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
      gameEnd = true;
    } else if ( powerTimeMachine.toUpperCase() === "M" ){
      alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.");
      gameEnd = true;
    } else if ( powerTimeMachine.toUpperCase() === "T" ){

      var takeClara = prompt('Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? \nT for Take her \nL for Leave her');

      if( takeClara.toUpperCase() === "T" ){
        alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.");
        gameEnd = true;
      } else if( takeClara.toUpperCase() === "L" ){
        alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
        gameEnd = true;
      } else {
        prompt("Please enter a valid response.");
        gameEnd = true;
        // go back to takeClara;
      }

    } else {
      prompt("Please enter a valid response.");
      gameEnd = true;
      // go back to powerTimeMachine
    }

  } else {
    alert ('Please enter a valid year.');
    gameEnd = true;
    // go back to game start;
  }

  playerContinue = prompt("Do you want to continue playing? \nY for Yes \nN for No");

  if (playerContinue.toUpperCase() === "y") {
      gameEnd = false;
  } else {
      gameEnd = true;
  }
}
