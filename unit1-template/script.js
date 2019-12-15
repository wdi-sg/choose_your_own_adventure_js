console.log("hello script js");
  //Begin game: Enter name

//store the different paths and sub paths (questions)

//store the different final outcomes
// var outcome ={
//     hideOutcome:`Oh no! He sees you and locks you in a room...forever.`, //path 1
//     runOutcome: `Close call! You're able to escape the owner and run to safety.`, //path 1
//     sleepOutcome: `You were woken up by a bear who got in the cabin. Bear hug!`, //path 1
//     exploreOutcome: `There is nothing special here and you leave.`, //path 1
//     wiggle:`You have awaken an angry spider! Mmmm, dinner is served.`, //path2
//     knifeTell: `People call you crazy. Meanwhile, there are news of mysterious disappearances in the area of the cabin.`,//path2
//     knifeQuiet:`You live to never tell this tale.`, //path2
//     lightup: `Quickly escape the burning web and run...together with the thousands of baby spiders trailing behind you.`,//path2
//     wine: `Oooh it's a wine cellar! Have some wine and get warm before leaving through another door.`, //path3
//     wolves: `There are wild wolves inside! You can't outrun them!`,//path3
//     boring: `No adventure for today.`, //path3
//     trap: `Ouch! You got caught in a booby trap while attempting to leave.` //path3
// };
// console.log(outcome.trap);

var level = 0;
var inputHappened = function(currentInput){
currentInput = currentInput.toUpperCase();
console.log( currentInput );
level ++;
console.log(level);
    if (level === 1){
    var name = currentInput;
    output = `Hello, ${name}! Let's start the game. \n You come across a huge cabin in a cold night with three doors. Which one do you enter - door A, B or C?`;
    console.log(output);
    return output;
    }
    else if (level === 2){
        switch (currentInput){
        case `A`:
        output = `text a`;
        return output;
        break;
        case `B`:
        output = `text B`;
        return output;
        break;
        case `C`:
        output = `text C`;
        return output;
        };
    }
    else if (level === 3){
        switch(currentInput){
        case `U`:
        output = `text u`;
        return output;
        break;
        case `D`:
        output = `text d`;
        return output;
        };
    }
}


// var path ={
//     a:{
//     scene: `The cabin seems to be empty. Would you rather check upstairs or downstairs? U/D.`,
//     upstairs: `The creaky wooden floors woke up the crazy owner. Do you want to hide or run? H/R.`,
//     downstairs:`You see a cozy nook with a fireplace. Do you want to sleep or continue exploring? S/E`
//     },
//     b: {
//     scene: `Ahhh! You got caught in a giant spider's web! What do you do -wiggle out or stay put? W/S.`,
//     stay: `The spider did not notice you and leave to hunt outside. How do you get out? Take out your swiss army knife you always bring with you or light the web up? K/L`,
//     knife: `Phew! That was close! you run away. Do you tell others of this cabin? Y/N.`
//     },
//     c:{
//     scene:`There are another 2 doors! Go left or right or leave? L / R / LV.`,
//     rightDoor: `It leads to a basement - Go down or not? D/N.`,
//     }
// };
//     console.log(path.c.scene);

// Any path the user goes down must ask them at least three questions
    //Choose 1st path: Hi (name). You come across a huge cabin in a cold night with 3 doors. Which one do you enter?

//A. Door 1
    //Q1.The cabin seems to be empty. Would you rather check upstairs or downstairs?
        //Upstairs
            // if upstairs - the creaky wooden floors woke up the crazy owner. hide or run?
                //if hide - he sees you and locks you in a room.End game (outcome)
                //else run -escape owner and run to safety.End game (outcome)
        //Downstairs
            // you see a cozy nook with a fireplace.- Sleep or continue exploring?
                //if sleep - you were woken up by a bear who got in the cabin.End game(outcome)
                //else continue exploring - there's nothing special here. Leave.End game(outcome)

//B.Door 2
    //Q4 Ahhh! you got caught in a giant spider's web! What do you do? Wiggle out / Stay put
        //If wiggle out
            //You have awaken the spider  - You die.End game(outcome)
        //else Stay put
            // the spider did not notice you and leave to hunt outside. How do you get out? Take out your swiss army knife you always take out with you or light the web up?
                //If Knife
                    // Phew! That was close! you run away. Do you tell others of this cabin? Y/N
                        //Y - People call you crazy.Meanwhile, there are news of mysterious disappearances in the area of the cabin.End game(outcome)
                        //N - You live to never tell this tale.End game(outcome)
                //else Light up
                    // Quickly escape the burning web and run..together with the thousands of baby spiders trailing behind you.End game(outcome)

//C.Door 3
        //There are another 2 doors! Go left or right or leave?
            //if left - ooh it's a wine cellar! have some wine and get warm before leaving through another door.end game(outcome)
            //else if right - it leads to a basement-go down or not?
                //if down - There are wild wolves inside! Sorry .End game (outcome)
                //else if not - No adventure for today. End game(outcome)
            //else - Oops! you got caught in a booby trap while attempting to leave. End game(outcome)


