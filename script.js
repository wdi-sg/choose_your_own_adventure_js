var username;
var options = ["x", "y", "z"];
var selectedOption;
var secondOption;
var thirdOption;

var inputHappened = function (currentInput) {

  username = currentInput.toString();
  console.log(username);
  var beginning = "Welcome to Hogwarts School Of Witchcraft and Wizardry!\n What would you like to do today? \nX: Participate in a quidditch match \nY: Go to the chamber of secrets\nZ: Go to Hagrid's House\n(Input X, Y or Z)";
  var intro = "Nice to meet you " + username + "!\n" + beginning;
  var adventureOptions = "You have arrived at a quidditch match. \nDo you (X) want a Nimbus 2000 broomstick or,\n(Y) a firebolt broomstick\n(Input X or Y)";
  var adventureOptionX = "Your broomstick malfunction halfway throughout the game and your team lost.\nThe End!";
  var adventureOptionY = "You played well and scored several goals. \nThe End!";
  var chamberOptions = "You have arrived at the Chamber of secrets. \nDo you want to(X) stab the diary with the basilisk fang or,\n(Y) use your wand to defeat riddle\n(Input X or Y)";
  var chamberX = "You managed to kill riddle.\nThe End!";
  var chamberY = "Riddle killed you.\nThe End!";
  var hagridOptions = "You arrived at Hagrid's house.\nDo you (X) Follow Hagrid into the forest. or \n(Y) Explore Hagrid's house?\n(Input X or Y)";
  var hagridX = "You came across a group of spiders and ran away.\nThe End!";
  var hagridY = "You broke something and made Hagrid sad.\n

  // selectedOption = currentInput.toString();
  currentInput = currentInput.toLowerCase();
  selectedOption = currentInput;
  console.log(selectedOption);

  if (selectedOption === 'x') {
    selectedOption = "";
    console.log(selectedOption);

    if (secondOption == 'x') {
      console.log(adventureOptionX);
      return adventureOptionX;
    }

    if (selectedOption == 'y') {
      console.log(adventureOptionY);
      return adventureOptionY;
    };

    console.log(adventureOptions);
    return adventureOptions;
  }

  if (selectedOption === 'y') {
    console.log(chamberOptions);
    return chamberOptions;
    if (selectedOption === 'x') {
      console.log(chamberX);
      return chamberA;
    } else if (selectedOption === 'y') {
      console.log(chamberY);
      return chamberY;
    };
  }

  if (selectedOption === 'z') {
    console.log(hagridOptions);
    return hagridOptions;
    if (selectedOption === 'x') {
      console.log(hagridX);
      return hagridX;
    } else if (selectedOption === 'y') {
      console.log(hagridY);
      return hagridY;
  };
  console.log(intro);
  return intro;
};