var storyTextOutput = [
  [
    "You come across a strange house before you. Do you want to go in?",
    "You open the door and step in.",
    "You don't go into the cabin. Well ... That's all Folks. The End."
  ],
  [
    "You walk into the cabin and see a lovely kitchen. On the table there are three bowls of porridge. Do you try 1, 2 or 3 ? ",
    "The porridge is too hot! The End.",
    "The porridge is too cold! The End.",
    "This porridge is just right!"
  ],
  [
    "You walk into the living room and see three chairs. Do you choose chair 1, 2 or 3? ",
    "The chair is way too big! The End!",
    "The chair is kind of too big. The End.",
    "This chair is just right . . . "
  ],
  [
    "You walk into the next room over and see three beds. Do you choose bed 1, 2 or 3?",
    "It's too hard and you can't sleep. The End!",
    "It's too soft and you can't sleep. The End!",
    "It's just right and you fall into a deep slumber."
  ],
  [
    "You wake up to see three bears looking at you. What Do you do? 1. Flee, 2. Apologise, 3. Fight",
    "",
    "",
    ""
  ]
];

function playGame() {
  var enterCabin = confirm(storyTextOutput[0][0]);

  if (enterCabin == true) {
    alert(storyTextOutput[0][1]);
    //We enter the cabin
    var porridgeChoice = prompt(storyTextOutput[1][0]);

    if (porridgeChoice == 1) {
      //We choose porridge #1
      alert(storyTextOutput[1][1]);
    } else if (porridgeChoice == 2) {
      //We choose porridge #2
      alert(storyTextOutput[1][2]);
    } else {
      //If the choice is not 1 or 2, it must be porridge #3
      alert(storyTextOutput[1][3]);

      //If we eat the 'just right' porridge we want to go sit in some chairs!
      var chairChoice = prompt(storyTextOutput[2][0]);
      if (chairChoice == 1) {
        alert(storyTextOutput[2][1]);
      } else if (chairChoice == 2) {
        alert(storyTextOutput[2][2]);
      } else {
        alert(storyTextOutput[2][3]);
        var bedChoice = prompt(storyTextOutput[3][0]);
        if (bedChoice == 1) {
          alert(storyTextOutput[3][1]);
        } else if (bedChoice == 2) {
          alert(storyTextOutput[3][2]);
        } else {
          alert(storyTextOutput[3][3]);
          alert(storyTextOutput[4][0]);
          //alert("Shocked you get up and run away never to return again.");
        }
      }
    }
  } else {
    //we don't enter the cabin (enterCabin is false)
    alert(storyTextOutput[0][2]);
  }
  var playAgain = confirm("Do you want to play again?");
  if (playAgain == true) {
    playGame();
  }
}

playGame();
