var scene = 1;
var enemy;

function showScene(number){
  return scenarios[number].text;
  }

function reset(){
  scene = 1;
  enemy = null;
  trainee.hp = 8;
  user.outfit = null;
  if (user.moves.length > 2) {
    user.moves.pop();
  }
}

function battle(move, enemy) {
  var userMoves = `Choose your moves: ${user.showMoves()}.`;
  var randomNo = getRandomInt(0,1)
  var userResults = user.attack(move, enemy);
  var enemyResults = enemy.attack(randomNo, user);
  if (enemy.hp <=0) {
    scene = 4;
    return showScene(4);
  } else if (user.hp <=0) {
    scene =3;
    return showScene(3);
  }

  return `${userResults} ${p} ${enemyResults} ${p} Your HP: ${user.hp} ${br} ${enemy.name} HP: ${enemy.hp} ${p} ${userMoves}`;
}

document.getElementById("output").innerText = scenarios[1].text

var inputHappened = function(currentInput){
  //Clear all inputs.
  clearInput();

  //Make sure input is a number for all scenes apart from 8, where user should input their name.
  if (scene!==8){
  currentInput = parseInt(currentInput);
}

  //Make default error message.
  var error = `Sorry, that was not a valid input. Please try again. \n\n ${showScene(scene)}`

switch (scene) {
  case 1:
    if (currentInput===0) {
      user.moves.push({key: 2, name: "Flip Flop Attack", power: 3})
      user.outfit="flipflop";
      scene++;
    } else if (currentInput===1) {
      user.outfit="classy";
      scene++;
    } else if (currentInput===2) {
      user.outfit="casual";
      scene++;
    } else {
      return error
    }
  break;

  case 2:
    if (currentInput===0) {
      scene = "battle";
      enemy = trainee;
      battleMode = true;
      return `You are now facing ${enemy.name}. Please choose your moves: ${user.showMoves()}.`
    } else {
      return error
    }
    break;
  case "battle":
    return battle(currentInput, enemy);
  break;

  case 3:
  if (currentInput) {
    reset();
  };
  break;

  case 4:
  if (currentInput===0) {
    if (user.outfit==="flipflop") {
      scene = 5;
    } else {
      scene = 8
    }
  } else {
    return error;
  }
  break;
  case 5:
  if (currentInput===0) {
    scene = 7;
  } else if (currentInput===1) {
    scene = 6
  } else {
    return error
  };
  break;
  case 6:
  if (currentInput===0) {
    user.outfit==="classy"
  } else if (currentInput===1) {
    user.outfit==="casual"
  } else {
    return error
  }
  break;
  case 7:
  if (currentInput) {
    reset();
  };
  break;
  case 8:
  user.name = currentInput;
  scene ++;
  break;

  default: return error;

}

  console.log( currentInput );
  return showScene(scene);
};
