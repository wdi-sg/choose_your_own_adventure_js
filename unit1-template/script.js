console.log("hello script js");


var enterName = function(name){
  alert(`Hello, ${name}. Let's get the game started!`);
};

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = ;
  return output;
};

var display = function( data ){
  var displayElement = document.querySelector('#output');
  //Begin game: Enter name

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

