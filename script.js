console.log("hello script js");

var userName;
var options = ["a", "b", "c"];
var selectedOption;

var inputHappened = function (currentInput) {

  userName = currentInput;
  console.log(userName);
  var firstOption = "Welcome to Paradise Island!\nWhat would you like to do today? \nA: Go for a swim at Shark Reef \nB: Go for a drive at Minacious Ravine\nC: Trek at Murderous Mountain\n(Input A, B or C)";
  var intro = "Nice to meet you " + userName + "!\n" + firstOption;
  var sharkReefOptions = "You have arrived at Shark Reef. \nDo you (A) Join up with a tour to get a good look around or,\n(B) Venture on your own to the corals\n(Input A or B)";
  var sharkReefOptionA = "The tour guide ushers you onto the speed boat. As it starts to sail off, you notice how disorientated the boat captain looks. \nYou sit helplessly and hold on to dear life as the drunk captain tries to navigate through the sudden choppy waves. The boat capsizes and sinks, no one survives. \nThe End!";
  var sharkReefOptionB = "You venture to the lagoon nearby. It is relatively deep. \nThe allure of the colourful corals overwhelm you. You take a dive. \nAs you swim back up to the surface, you feel intense pain, only to realise the water has turned red. It's called Shark Reef for a reason. \nThe End!";
  var ravineOptions = "You have arrived at the breathtaking view of Minacious Ravine. \nDo you (A) Carpool in a 4WD with random strangers or,\n(B) Rent a Dirtbike to bring yourself around for the views\n(Input A or B)";
  var ravineA = "You met interesting Russian friends on a post-grad trip. They cordially invite you to join them on their 4WD.\nYou hop on the backseat next to the biggest guy amongst them. After some time you notice that they went of track.\nThey pull over at an unknown location and torture you for all your valuables. After which, they beat you up and leave you for dead\nThe End!";
  var ravineB = "You rented a DirtBike from a booth nearby. They inform you of the routes that are still safe to travel by.\nOn your journey, you stumble across an old shortcut that locals fabled about.\nAs you're travelling through that route, an unexpected boulder tumbles down and smashes through the road. you fail to stop on time.\nThe End!";
  var mountainsOptions = "You arrived at the basecamp of Murderous Mountains\nDo you (A) Follow the recommended trekking route or \n(B) Explore an off-trail track?\n(Input A or B)";
  var mountainsA = "You took the scenic trekking routh that goes along the base of the mountain and gives you tremendous views.\nUnfortunately, it starts to rain, and the forecast didn't mention any rain. \nSoon, a flood ensues, trapping you in quicksand. you scream for help only to hear your own echoes.\nThe End!";
  var mountainsB = "You notice a little bunny off track.\nDo you (A) Approach it or \n(B) Ignore it?\n(Input A or B)";
  var mountainsB1 = "The bunny doesn't fret away from you. In fact it is attracted to your scent. You are able to pet it.\nDo you (A)Feed it or \n(B) Go back to the track?\n(Input A or B)";
  var mountainsB1A = "To unlock further levels, please make full purchase at the respective authorised dealer.";



  console.log(intro);
  // selectedOption = currentInput.toString();
  currentInput = currentInput.toLowerCase();
  return intro;

  if (currentInput === 'a') {
    console.log(selectedOption);
    return sharkReefOptions;
    console.log(sharkReefOptions);
    if (selectedOption === 'a') {
      return sharkReefOptionA;
      console.log(sharkReefOptionA);
    } else if (selectedOption === 'b') {
      return sharkReefOptionB;
      console.log(sharkReefOptionB);
    };
  };
  if (selectedOption === 'b') {
    return ravineOptions;
    console.log(ravineOptions);
    if (selectedOption === 'a') {
      return ravineA;
      console.log(ravineA);
    } else if (selectedOption === 'b') {
      return ravineB;
      console.log(ravineB);
    };
  };
  if (selectedOption === 'c') {
    return mountainsOptions;
    console.log(mountainsOptions);
    if (selectedOption === 'a') {
      return mountainsA;
      console.log(mountainsA);
    } else if (selectedOption === 'b') {
      return mountainsB;
      console.log(mountainsB);
      if (selectedOption === 'a') {
        return mountainsB1;
        console.log(mountainsB1);
      } else if (selectedOption === 'b') {
        return mountainsB2;
        console.log(mountainsB2);
      };
    };
  };
};
}

