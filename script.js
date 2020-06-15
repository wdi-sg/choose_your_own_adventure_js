var text = document.getElementById("text")
var input = document.getElementById("input")
var button = document.getElementById("button")
var userName;

input.onkeypress = function(event){
  console.log(input.value);
  if (event.keyCode == 13) {
    userName = input.value;
    input.parentNode.removeChild(input);
    advanceTo(scenario.two)
  }
}

//changing the user name in the scenerio
var changeText = function(words){
  text.innerHTML = words.replace("The User Name", userName)
}

//set the number of options and create buttons
var changeButtons = function(buttonList) {
  button.innerHTML = "";
  for (var i = 0; i <buttonList.length; i++ ) {
    button.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
}

//this is what moves the game along
var advanceTo = function(s){
  changeText(s.text);
  changeButtons(s.buttons);
}


var scenario = {
  one: {
    text: "Welcome to Vaxxin Dungeon. In the year 2020, the world is fighting against the Covid19 virus. Legend had it that there's a Vaccine hidden in the main room of this Dungeon but remember you need to find number combination to open the door. Please enter your name if you want to save the world.",
    },
  two: {
    text: "The User Name is standing infront of the dungeon. What do you want to do?",
    buttons: [["Turn and Run","advanceTo(scenario.three)"],["Enter the Dungeon","advanceTo(scenario.four)"]]
  },
  three: {
    text: "Covid19 continue to spread around the world without any vaccine found",
    buttons: [["Okay okay, I want to find the vaccine","advanceTo(scenario.four)"]]
  },
  four: {
    text: "The User Name entered the dungeon. There is a crossroad infront of you. Which way would you like to go?",
    buttons: [["Left","advanceTo(scenario.five)"],["Go Straight","advanceTo(scenario.eleven)"],["Right","advanceTo(scenario.nine)"]]
  },
  five: {
    text: "2 doors appeared infront of you. Which door would you like to open?",
    buttons: [["Left Door","advanceTo(scenario.six)"],["Right Door","advanceTo(scenario.seven)"]]
  },
  six: {
    text:"A three-headed hound is sleeping. You saw a shiny object under his tail. You can cut off his tail or tickle the hound to retrieve the object",
    buttons: [["Cut His Tail","advanceTo(scenario.twenty)"],["Tickle His Belly","advanceTo(scenario.eight)"]]
  },
  eight: {
    text: "The hound laugh and flip over to the other side and continue sleeping. You picked up the object and 847 is written on the object",
    buttons: [["Go Back To The Crossroad","advanceTo(scenario.four)"],["Kill The Hound For Food","advanceTo(scenario.twenty)"]]
  },
  nine: {
    text: "There's a door on the left side of The User Name and a golden chest on the floor. What would you like to do?",
    buttons: [["Open The Door On The Left","advanceTo(scenario.twenty)"],["Open The Golden Chest","advanceTo(scenario.ten)"]]
  },
  ten: {
    text: "A note floats up right infront of you. 382 is written on the note",
    buttons: [["Go Back To The Crossroad","advanceTo(scenario.four)"]]
  },
  eleven: {
    text: "A ladder appear infront of you leading up to an even darker area of the dungeon. A straight road leading you deeper into the dungeon. Where would you like to go?",
    buttons: [["Climb Up The Ladder","advanceTo(scenario.twelve)"],["Go Straight","advanceTo(scenario.thirteen)"]]
  },
  twelve: {
    text: "902 is engraved on the wall",
    buttons: [["Go Back Down The Ladder","advanceTo(scenario.eleven)"]]
  },
  thirteen: {
    text: "Another crossroad appears infront of The User Name. Which way would you like to go?",
    buttons: [["Left","advanceTo(scenario.fourteen)"],["Go Straight","advanceTo(scenario.fifteen)"],["Right","advanceTo(scenario.sixteen)"]]
  },
  fourteen: {
    text: "A bright light is coming out from the wall. The User Name walked towards it. It's golden chest. Your opened the chest and a snake jumps out and bite you on the neck",
    buttons: [["Open The Chest","advanceTo(scenario.eighteen)"],["Go Back To The Second Crossroad","advanceTo(scenario.thirteen)"]]
  },
  fifteen: {
    text: "It's a dead end",
    buttons: [["Go Back To The Second Crossroad","advanceTo(scenario.thirteen)"],["Sit Down And Rest In A Corner","advanceTo(scenario.twenty)"]]
  },
  sixteen: {
    text: "The User Name is standing infront of A Big Red Door. Looking closer, there are 5 number combination for you to press. Unlock the door by choosing the correct combination",
    buttons: [["934 327 439","advanceTo(scenario.twenty)"],["492 572 440","advanceTo(scenario.twenty)"],["501 429 572","advanceTo(scenario.twenty)"],["241 593 274","advanceTo(scenario.twenty)"],["847 382 902","advanceTo(scenario.seventeen)"],["Go Back To The First Crossroad","advanceTo(scenario.four)"]]
  },
  seventeen: {
    text: "A blue bottle labeled Covid19 vaccine! Congratulations, you obtain the virtual Covid19 vaccine, which have nothing to do in the real world. Stay Safe.",
    buttons: [["Play Again","advanceTo(scenario.two)"]]
  },
  eighteen: {
    text: "You opened the chest and a snake jumps out and bite you on the neck",
    buttons: [["Pulled The Snake Away","advanceTo(scenario.twenty)"]]
  },
  twenty: {
    text:"For some reason The User Name is dead. Thank you for your effort. Please press below to try again.",
    buttons: [["Below" , "advanceTo(scenario.two)"]]
  }
};

//This is to start the game
advanceTo(scenario.one)

