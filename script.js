var inputholder = document.getElementById('input');



var userInput = [1, 2, 3, 4, 5];

var inputHappened = function (currentInput) {
  switch (userInput) {
    case 1: 
    name = currentInput;
    nameOption(name);
    userInput = userInput[0];
  }
 }






  // Greeting and year options

var nameOption = function(name) {
    var output = `Hi ${name} Nice to meet you, where would you like to go`
    if(typeof name === 'string' ) {
      return output;
    } else {
      return `Please enter a name`
    }
 
}


var yearOption = function(year) {
  userInput.push(year)
  if(year >= 2015) {
    return `I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)`
  } else if (year <= 2014 && year >= 1985) {
    return `Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?`
  } else if(year >= 1955 && year <=1984) {
    return `I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)`
  } else if(year < 1955) {
    return `I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)`
  }
}

var biffOrGriff = function(ans) {
  if (ans === 'B') {
    return `Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)`
  } else if (ans === 'G') {
    return `Griff is asking you if you are in, or out. What do you say? (I/O)`
  }
}
