let userNameFull = "";
let scoreCount = 0;
let currentQuestion = 0;
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
resetButton.style.visibility = "hidden";

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
      "Hi, " +
      userNameFull +
      ". Welcome to the simple ingredient choosing game. Please choose your first ingredient - (1. Yellow Noodle, 2. Bucatini, 3. Macaroni)"
    );
  }

  //Question 2
  if (currentQuestion === 1) {
    if (parseInt(currentInput) === 1) {
      currentQuestion++;
      scoreCount += 1;
      clearinput();
      return "Please choose your second ingredient(Meat) - (1. Ham, 2. Smoked Bacon, 3. Guanciale)";
    } else if (parseInt(currentInput) === 2) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
      return "Please choose your second ingredient(Meat) - (1. Ham, 2. Smoked Bacon, 3. Guanciale)";
    } else if (parseInt(currentInput) === 3) {
      currentQuestion++;
      clearinput();
      return "Please choose your second ingredient(Meat) - (1. Ham, 2. Smoked Bacon, 3. Guanciale)";
    } else {
      clearinput();
      return "Please select 1,2 or 3 - (1. Yellow Noodle, 2. Bucatini, 3. Macaroni))";
    }
  }

  //Question 3
  if (currentQuestion === 2) {
    if (parseInt(currentInput) === 1) {
      currentQuestion++;
      clearinput();
      return "Please choose your third ingredient(Cheese) - (1. Ricotta, 2. Pecorino Romano, 3. Parmesan)";
    } else if (parseInt(currentInput) === 2) {
      currentQuestion++;
      scoreCount += 1;
      clearinput();
      return "Please choose your third ingredient(Cheese) - (1. Ricotta, 2. Pecorino Romano, 3. Parmesan)";
    } else if (parseInt(currentInput) === 3) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
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
      return "Please choose your fourth ingredient to create sauce - (1. Egg, 2. Cream, 3. Mixture of Egg and Cream)";
    } else if (parseInt(currentInput) === 2) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
      return "Please choose your fourth ingredient to create sauce - (1. Egg, 2. Cream, 3. Mixture of Egg and Cream)";
    } else if (parseInt(currentInput) === 3) {
      currentQuestion++;
      scoreCount += 2;
      clearinput();
      return "Please choose your fourth ingredient to create sauce - (1. Egg, 2. Cream, 3. Mixture of Egg and Cream)";
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
      return "Please choose your seasoning - (1. Black Pepper, 2. Cayenne, 3. White Pepper)";
    } else if (parseInt(currentInput) === 2) {
      currentQuestion++;
      scoreCount += 1;
      clearinput();
      return "Please choose your seasoning - (1. Black Pepper, 2. Cayenne, 3. White Pepper)";
    } else if (parseInt(currentInput) === 3) {
      currentQuestion++;
      scoreCount += 1;
      clearinput();
      return "Please choose your seasoning - (1. Black Pepper, 2. Cayenne, 3. White Pepper)";
    } else {
      clearinput();
      return "Please select 1,2 or 3 - (1. Egg, 2. Cream, 3. Mixture of Egg and Cream)";
    }
  }

  //Tally Score
  if (currentQuestion === 5) {
    if (parseInt(currentInput) === 1) {
      scoreCount += 2;
      clearinput();
      currentQuestion++;
    } else if (parseInt(currentInput) === 2) {
      clearinput();
      currentQuestion++;
    } else if (parseInt(currentInput) === 3) {
      clearinput();
      currentQuestion++;
    } else {
      clearinput();
      return "Please select 1,2 or 3 - (1. Black Pepper, 2. Cayenne, 3. White Pepper)";
    }
  }

  //Result
  if (currentQuestion === 6) {
    document.getElementById("input").style.visibility = "hidden";
    document.querySelector("h3").style.visibility = "hidden";
    resetButton.style.visibility = "visible";
    if (scoreCount === 10) {
      return "Dear " + userNameFull + ", " + outcomes.perfect;
    } else if (scoreCount < 10 && scoreCount > 7) {
      return "Dear " + userNameFull + ", " + outcomes.highScore;
    } else if (scoreCount < 8 && scoreCount > 5) {
      console.log(scoreCount);
      return "Dear " + userNameFull + ", " + outcomes.normal;
    } else {
      console.log(scoreCount);
      return "Dear " + userNameFull + ", " + outcomes.low;
    }
  }
};

//Restart the game
resetButton.addEventListener("click", function () {
  document.getElementById("input").style.visibility = "visible";
  document.querySelector("h3").style.visibility = "visible";
  resetButton.style.visibility = "hidden";
  scoreCount = 0;
  currentQuestion = 0;
  document.querySelector("h3").innerHTML = "Type Your Name";
  document.querySelector("#output").innerHTML = "";
});

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
