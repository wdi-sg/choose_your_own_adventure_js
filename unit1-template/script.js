console.log("hello script js");

var level = 0; //counter for switch statements
var lv1Choice; // store user choice for lv1
var lv2Choice;// store user choice for lv2
var output;
var previousOutput; //to store previous output and display together with invalid msg

//Begin game: Enter name
var inputHappened = function(currentInput){
currentInput = currentInput.toUpperCase();
console.log(currentInput);
var invalidMsg= `Invalid option. `;
level ++;
console.log(level);
    if (level === 1){
    var name = currentInput;
    output = `Hello, ${name}! Let's start the game. \n You come across a huge cabin in a cold night with three doors. Which one do you enter - door A, B or C?`;
    console.log(output);
    return output;
    lv1Choice = currentInput;
    }
    console.log(lv1Choice);
    previousOutput = output;
debugger;
    if (level === 2){
        lv2Choice = currentInput;
        console.log(lv2Choice);
        switch (currentInput){
        case `A`:
        output = path.pathA.level2.scene;
        return output;
        break;
        case `B`:
        output = path.pathB.level2.scene;
        return output;
        break;
        case `C`:
        output = path.pathC.level2.scene;
        return output;
        break;
        default:
        level --;
        output = invalidMsg + previousOutput;
        return output;
        };
    }
    if (level === 3 && lv2Choice === `A`){
        switch(currentInput){
        case `U`:
        output = path.pathA.level3.U;
        return output;
        break;
        case `D`:
        output = path.pathA.level3.D;
        return output;
        break;
        default:
        level --;
        output = invalidMsg + previousOutput;
        return output;
        };
    }
    if (level === 3 && lv2Choice === `B`){
        switch(currentInput){
        case `W`:
        output = path.pathB.level3.W;
        return output;
        break;
        case `S`:
        output = path.pathB.level3.S;
        return output;
        break;
        default:
        level --;
        output = invalidMsg + previousOutput;
        return output;
        };
    }
    if (level === 3 && lv2Choice === `C`){
        switch(currentInput){
        case `L`:
        output = path.pathC.level3.L;
        return output;
        break;
        case `R`:
        output = path.pathC.level3.R;
        console.log(output);
        return output;
        case `LV`:
        output = path.pathC.level3.LV;
        return output;
        break;
        default:
        level --;
        output = invalidMsg + previousOutput;
        return output
        };
    }
debugger;
    if (level === 4 && lv2Choice === `A`){
            switch(currentInput){
            case `H`:
            output = path.pathA.level4.H;
            return output;
            break;
            case `R`:
            output = path.pathA.level4.R;
            return output;
            break;
            case `S`:
            output = path.pathA.level4.S;
            return output;
            break;
            case `E`:
            output = path.pathA.level4.E;
            return output;
            break;
            default:
            level --;
            output = invalidMsg + previousOutput;
            return output;
            };
    }
    if (level === 4 && lv2Choice === `B`){
            switch(currentInput){
            case `K`:
            output = path.pathB.level4.K;
            return output;
            break;
            case `LU`:
            output = path.pathB.level4.LU;
            return output;
            break;
            default:
            level --;
            output = invalidMsg + previousOutput;
            return output
            };
    }
    if (level === 4 && lv2Choice === `C`){
            switch(currentInput){
            case `D`:
            output = path.pathC.level4.D;
            return output;
            break;
            case `N`:
            output = path.pathC.level4.N;
            return output;
            break;
            default:
            level --;
            output = invalidMsg + previousOutput;
            return output;
            };
    }
    if (level === 5 && lv2Choice === `B`){
            switch(currentInput){
            case `Y`:
            output = path.pathB.level5.Y;
            return output;
            break;
            case `N`:
            output = path.pathB.level5.N;
            return output;
            break;
            default:
            level --;
            output = invalidMsg + previousOutput;
            return output;
            };
    }
}

//store the different paths and sub paths (questions)
path = {
  pathA: {
    level2:{
    scene: `The cabin seems to be empty. Would you rather check upstairs or downstairs? U/D.`
    },
    level3: {
      U:`The creaky wooden floors woke up the crazy owner. Do you want to hide or run? H/R.`,
      D:`You see a cozy nook with a fireplace. Do you want to sleep or continue exploring? S/E.`
    },
    level4:{
    H:`Oh no! He sees you and locks you in a room...forever.`,
    R: `Close call! You're able to escape the owner and run to safety.`,
    S: `You were woken up by a bear who got in the cabin. Bear hug!`,
    E: `There is nothing special here and you leave.`
    }
  },

  pathB: {
    level2:{
    scene:`Ahhh! You got caught in a giant spider's web! What do you do - wiggle out or stay put? W/S.`
    },
    level3: {
    W:`You have awaken an angry spider! Mmmm, dinner is served.`,
    S: `The spider did not notice you and leave to hunt outside. How do you get out? Take out your swiss army knife you always bring with you or light the web up? K/LU`
    },
    level4: {
    K: `Phew! That was close! you run away. Do you tell others of this cabin? Y/N.`,
    LU:`Quickly escape the burning web and run...together with the thousands of baby spiders trailing behind you.`
    },
    level5:{
        Y: `People call you crazy. Meanwhile, there are news of mysterious disappearances in the area of the cabin.`,
        N:`You live to never tell this tale.`
    }
  },

  pathC: {
    level2: {
    scene: `There are another 2 doors! Go left or right or leave? L / R / LV.`
    },
    level3: {
    L:`Oooh it's a wine cellar! Have some wine and get warm before leaving through another door.`,
    R: `It leads to a basement - Go down or not? D/N`,
    LV:`Ouch! You got caught in a booby trap while attempting to leave.`
    },
    level4: {
    D: `There are wild wolves inside! You can't outrun them!`,
    N: `No adventure for today.`
    }
  }
};
console.log(path.pathA.level3.D);

//
// // Any path the user goes down must ask them at least three questions
//     //Choose 1st path: Hi (name). You come across a huge cabin in a cold night with 3 doors. Which one do you enter?

// //A. Door 1
//     //Q1.The cabin seems to be empty. Would you rather check upstairs or downstairs?
//         //Upstairs
//             // if upstairs - the creaky wooden floors woke up the crazy owner. hide or run?
//                 //if hide - he sees you and locks you in a room.End game (outcome)
//                 //else run -escape owner and run to safety.End game (outcome)
//         //Downstairs
//             // you see a cozy nook with a fireplace.- Sleep or continue exploring?
//                 //if sleep - you were woken up by a bear who got in the cabin.End game(outcome)
//                 //else continue exploring - there's nothing special here. Leave.End game(outcome)

// //B.Door 2
//     //Q4 Ahhh! you got caught in a giant spider's web! What do you do? Wiggle out / Stay put
//         //If wiggle out
//             //You have awaken the spider  - You die.End game(outcome)
//         //else Stay put
//             // the spider did not notice you and leave to hunt outside. How do you get out? Take out your swiss army knife you always bring with you or light the web up?
//                 //If Knife
//                     // Phew! That was close! you run away. Do you tell others of this cabin? Y/N
//                         //Y - People call you crazy.Meanwhile, there are news of mysterious disappearances in the area of the cabin.End game(outcome)
//                         //N - You live to never tell this tale.End game(outcome)
//                 //else Light up
//                     // Quickly escape the burning web and run..together with the thousands of baby spiders trailing behind you.End game(outcome)

// //C.Door 3
//         //There are another 2 doors! Go left or right or leave?
//             //if left - ooh it's a wine cellar! have some wine and get warm before leaving through another door.end game(outcome)
//             //else if right - it leads to a basement-go down or not?
//                 //if down - There are wild wolves inside! Sorry .End game (outcome)
//                 //else if not - No adventure for today. End game(outcome)
//             //else - Oops! you got caught in a booby trap while attempting to leave. End game(outcome)