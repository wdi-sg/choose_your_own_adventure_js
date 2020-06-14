let userNameFull = "";
let scoreCount = 0;
let currentQuestion = 0;
let array = [];
let outcomes = {
  perfect:
    "You had selected the perfect ingredients for the most authentic italian carbonara!",
  highScore:
    "Well done, it's almost the same as the authentic italian carbonara!",
  normal: "Not bad. You might have made one or two mistake...",
  low:
    "You couldn't make carbonara with these ingredient, it will become another type of pasta dish!",
};

let resetButton = document.querySelector(".btn-success");
// resetButton.style.visibility = "hidden";

let inputHappened = function (currentInput) {
  //Type userName & Question 1
  if (currentQuestion === 0) {
    currentQuestion++;
    let userNameFirstLetter = currentInput.slice(0, 1);
    userNameFirstLetter = userNameFirstLetter.toUpperCase();
    let userNameLast = currentInput.slice(1);
    userNameLast = userNameLast.toLowerCase();
    userNameFull = userNameFirstLetter + userNameLast;
    clearinput();
    document.querySelector("h3").innerHTML =
      "Type in only number <em>1/2/3</em>";
    return (
      "Hi, Chef " +
      userNameFull +
      ". Welcome to the simple ingredient choosing game. Do guess what kind of italian dish you will be making while picking the ingredient one by one. Please choose your first ingredient - (1. Yellow Noodle, 2. Bucatini, 3. Fusilli)"
    );
  }

  //Question 2
  if (currentQuestion === 1) {
    if (parseInt(currentInput) === 1) {
      currentQuestion++;
      scoreCount += 1;
      clearinput();
      array.push("Yellow Noodle");
      return "Please choose your second ingredient(Meat) - (1. Ham, 2. Smoked Bacon, 3. Guanciale)";
    } else if (parseInt(currentInput) === 2) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
      array.push("Bucatini");
      return "Please choose your second ingredient(Meat) - (1. Ham, 2. Smoked Bacon, 3. Guanciale)";
    } else if (parseInt(currentInput) === 3) {
      currentQuestion++;
      clearinput();
      array.push("Fusilli");
      return "Please choose your second ingredient(Meat) - (1. Ham, 2. Smoked Bacon, 3. Guanciale)";
    } else {
      clearinput();
      return "Please select 1,2 or 3 - (1. Yellow Noodle, 2. Bucatini, 3. Fusilli))";
    }
  }

  //Question 3
  if (currentQuestion === 2) {
    if (parseInt(currentInput) === 1) {
      currentQuestion++;
      clearinput();
      array.push("Ham");
      return "Please choose your third ingredient(Cheese) - (1. Ricotta, 2. Pecorino Romano, 3. Parmesan)";
    } else if (parseInt(currentInput) === 2) {
      currentQuestion++;
      scoreCount += 1;
      clearinput();
      array.push("Smoked Bacon");
      return "Please choose your third ingredient(Cheese) - (1. Ricotta, 2. Pecorino Romano, 3. Parmesan)";
    } else if (parseInt(currentInput) === 3) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
      array.push("Guanciale");
      return "Please choose your third ingredient(Cheese) - (1. Ricotta, 2. Pecorino Romano, 3. Parmesan)";
    } else {
      clearinput();
      return "Please select 1,2 or 3 - (1. Ham, 2. Smoked Bacon, 3. Guanciale)";
    }
  }

  //Question 4
  if (currentQuestion === 3) {
    if (parseInt(currentInput) === 1) {
      currentQuestion++;
      clearinput();
      array.push("Ricotta");
      return "Please choose your fourth ingredient to create sauce - (1. Eggs, 2. Cream, 3. Mixture of Eggs and Cream)";
    } else if (parseInt(currentInput) === 2) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
      array.push("Pecorino Romano");
      return "Please choose your fourth ingredient to create sauce - (1. Eggs, 2. Cream, 3. Mixture of Eggs and Cream)";
    } else if (parseInt(currentInput) === 3) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
      array.push("Parmesan");
      return "Please choose your fourth ingredient to create sauce - (1. Eggs, 2. Cream, 3. Mixture of Eggs and Cream)";
    } else {
      clearinput();
      return "Please select 1,2 or 3 - (1. Ricotta, 2. Pecorino Romano, 3. Parmesan)";
    }
  }

  //Question 5
  if (currentQuestion === 4) {
    if (parseInt(currentInput) === 1) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
      array.push("Eggs");
      return "Please choose your seasoning - (1. Black Pepper, 2. Cayenne, 3. White Pepper)";
    } else if (parseInt(currentInput) === 2) {
      currentQuestion++;
      scoreCount += 1;
      clearinput();
      array.push("Cream");
      return "Please choose your seasoning - (1. Black Pepper, 2. Cayenne, 3. White Pepper)";
    } else if (parseInt(currentInput) === 3) {
      currentQuestion++;
      scoreCount += 1;
      clearinput();
      array.push("Mixture of Eggs and Cream");
      return "Please choose your seasoning - (1. Black Pepper, 2. Cayenne, 3. White Pepper)";
    } else {
      clearinput();
      return "Please select 1,2 or 3 - (1. Eggs, 2. Cream, 3. Mixture of Eggs and Cream)";
    }
  }

  //Tally Score
  if (currentQuestion === 5) {
    if (parseInt(currentInput) === 1) {
      scoreCount += 2;
      clearinput();
      array.push("Black Pepper");
      currentQuestion++;
    } else if (parseInt(currentInput) === 2) {
      clearinput();
      array.push("Cayenne");
      currentQuestion++;
    } else if (parseInt(currentInput) === 3) {
      clearinput();
      array.push("White Pepper");
      currentQuestion++;
    } else {
      clearinput();
      return "Please select 1,2 or 3 - (1. Black Pepper, 2. Cayenne, 3. White Pepper)";
    }
  }

  //Result
  if (currentQuestion === 6) {
    document.querySelector("h1").innerHTML = "<strong>Chef Adventure Game:</strong> Picking the right ingredients for <strong>Carbonara!</strong>";
    document.getElementById("input").style.visibility = "hidden";
    document.querySelector("h3").style.visibility = "hidden";
    document.querySelector("h2").innerHTML =
      "Ingredient Selected: " + array[0] + ", " + array[1] + ", " + array[2] + ", " + array[3] + " and " + array[4] ;
    //resetButton.style.visibility = "visible";
    console.log(array);
    if (scoreCount === 10) {
      return "Chef " + userNameFull + ", " + outcomes.perfect;
    } else if (scoreCount < 10 && scoreCount > 7) {
      return "Chef " + userNameFull + ", " + outcomes.highScore;
    } else if (scoreCount < 8 && scoreCount > 5) {
      console.log(scoreCount);
      return "Chef " + userNameFull + ", " + outcomes.normal;
    } else {
      console.log(scoreCount);
      return "Chef " + userNameFull + ", " + outcomes.low;
    }
  }
};

//Restart the game
// resetButton.addEventListener("click", function () {
//   document.getElementById("input").style.visibility = "visible";
//   document.querySelector("h3").style.visibility = "visible";
//   resetButton.style.visibility = "hidden";
//   scoreCount = 0;
//   currentQuestion = 0;
//   document.querySelector("h3").innerHTML = "Type Your Name";
//   document.querySelector("#output").innerHTML = "";
// });

let display = function (data) {
  let displayElement = document.querySelector("#output");
  // get rid of the entire contents
  displayElement.innerHTML = "";
  // put the data into the div
  output.innerText = data;
};

document.querySelector("#input").addEventListener("change", function (event) {
  let currentInput = event.target.value;
  display(inputHappened(currentInput));
});

function clearinput() {
  document.querySelector("#input").value = "";
}
