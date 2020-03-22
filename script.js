console.log("hello script js");

var userInput;
var lvl2 = lvl3 = control = choose = shortcut = final = false;
var random5;
var newInput;
var choice;
var name;
var start = false;

document.querySelector('#output').innerText ='Hi! Please enter your name to begin.';

var random = Math.floor(Math.random() * 5);

var inputHappened = function(currentInput){
  if(final){
    newInput = parseInt(currentInput);
    random5 = random + 1;
    console.log(random5);
    if(newInput >= 1 && newInput <=5){
      if(newInput == random5){
        final = false;
        return 'Congratulations! You have reached the end. I hope you had fun! Goodbye~';
      }
      else{
        control = true;
        final = false;
        return 'Great choice! Now all you have to do is start all over again. Yes, you died. Have fun!';
      }
    }
    else{
      control = true;
      final = false;
      return 'All the way to the final but it was a pity you cant follow instructions.'
    }
  }
  if(lvl2){
    newInput = parseInt(currentInput);
    if(newInput <= 100 && newInput >= 1){
      if(newInput % 8 == 1){
        //(1,9,17,25,33,41,49,57,65,73,81,89,97)
        lvl2 = false;
        lvl3 = true;
        return 'Woohoo! Onward to round 3! Choose between 1 and 50!';
      }
      else{
        control = true;
        lvl2 = false;
        return 'You slipped on a slipper and broke your neck. Good luck next time!';
      }
    }
    else{
      control = true;
      lvl2 = false;
      return 'You died because you couldnt follow instructions. Better luck next time!'
    }
  }
  if(lvl3){
    newInput=ParseInt(currentInput);
    if(newInput <= 50 && newInput >= 1){
      if(newInput % 6 === 0){
        //(6,12,18,24,30,36,42,48)
        lvl3 = false;
        final = true;
        return 'Congratulations! You made it to the last stage! Now just choose between 1 and 2!'
      }
      else{
        control = true;
        lvl3 = false;
        return 'Ah... You let out a deep breath not knowing it was your last.'
      }
    }
    else{
      control = true;
      lvl3 = false;
      return 'You died because you couldnt follow instructions. Better luck next time!'
    }
  }
  if(choose){
    choice = parseInt(currentInput);
    if(choice === 1){
    choose = false;
    shortcut = true;
    return 'Choose a number from 1 to 10.'
    }
    else if (choice === 2){
      choose = false;
      lvl2 = true;
      return 'Welcome to Level 2! \n Please enter a number from 1 to 100.'
    }
  }
  if(shortcut){
    console.log('shortcut');
    choice = parseInt(userInput);
    newInput = parseInt(currentInput);
    if(newInput <= 10 && newInput >= 1){
      if(newInput % 2 === 1 && newInput > 2){
        //(3,5,7,9)
        console.log('shortcut2');
        shortcut = false;
        final = true;
        return 'So close yet so far. \n Just kidding you guessed correct! \n Only one left! Choose between 1 and 2.'
      }
      else if(newInput % 2 == 0 || newInput < 3){
        //(1,2,4,6,8,10)
        shortcut=false;
        control = true;
        return 'Unfortunately all was for naught, you choked while drinking water and died.'
      }
      else{
          control = true;
          shortcut = false;
          return 'You died because you couldnt follow instructions. Better luck next time!'
        }
      }
      else{
        control = true;
        shortcut = false;
        return 'Try harder next time to follow instructions!'
      }
  }
  if(!start){
  name = currentInput;
  console.log(name);
  start = true;
  return 'Welcome ' + name + '! For the first level, simply pick a number between 1 to 100';
  }
  if(start)
  {
    userInput = parseInt(currentInput);
    console.log( userInput );
    if(!control){
      if(userInput !== 0){
        if(userInput <= 100 && userInput >= 1){
          if(userInput === 1 || userInput === 100){
            control = true;
            console.log('1/100')
            return data = 'Splat! The table headbanged you and you died. Thanks for playing!';
          }
          else if(userInput % 5 === 2){
            //(2,7,12,17,22,27,32,37,42,47,52,57,62,67,72,77,82,87,92,97)
            console.log('%5=2');
            console.log(currentInput + 'first input');
            control = true;
            lvl2 = true;
            return " Congrats on making it to level 2! \n Now choose a number from 1 to 100 again.";
          }
          else if((userInput % 21) === 2){
            //(23,44,65,86)
            choose = true;
            control = true;
            return 'Congratulations! You have found a shortcut! \n Choose whether you want to (1) continue to next level normally or (2) enter the shortcut.';
            }
            else{
              control = true;
              return 'Seems like you got unlucky, good luck trying to fix that!';
            }
        }
        else if(userInput < 1 || userInput > 100 ) {
          console.log('invalid');
          control = true;
          return 'You have entered an invalid character and it killed you.';
        }
        else{
          control = true;
          return 'Unfortunately you didnt make the cut, so yeah. You died.';
        }
      }
      else{
        control = true;
        return 'That was not an allowed number so you are now disqualified.';
      }
    }
  }
  if(control){
    if(parseInt(currentInput) === 0){
      control = false;
      start = false;
      console.log('reset');
      return 'Hi! Please enter your name to begin.'
    }
    else{
      console.log('reset2')
      return 'Please enter 0 to restart the game.'
    }
  };
};
