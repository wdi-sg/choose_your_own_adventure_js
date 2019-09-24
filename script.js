console.log('new console')
var name;

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
  var output = "WOW SOMETHING HAPPENED";
  var message = getMessage(currentInput)
  console.log("message");
  console.log(message);
  return message;
};
//This var store the player name.

var getMessage = function (currentInput){
    console.log(currentInput);
    console.log('name', name);
    console.log(typeof name)
    if(!name){
        name = currentInput;
        var choice1 = `Hi ${name} !. Do you want to play a game? Find your way out of the murder house. You woke up in a dark room and ahead of you, you see a torchlight and a lamp with a matchbox beside it. Do you 'A', Choose the torchlight or 'B', choose the lamp and light it? `
        console.log("choice1");
        console.log(choice1);
        return choice1;
    }

    if (name) {

        if(currentInput === 'A') {
            return `You picked the torchlight. Sorry ${name}.The torchlight is rigged. YOU ARE ELECTROCUTED TO DEATH`

        }

        if (currentInput === 'B') {
           return `You light the lamp and see a door in front of you.You enter the room. In the room,there is a timer with 5 mins remaining and 2 buttons, RED, BLUE or NOTHING`


            if (currentInput === "RED"){
                return `You triggered a trapdoor beneath you and fell into a hole filled with poisonous snakes.Bye`

        }else if (currentInput === "NOTHING") {
            return`The timer counts down to zero and you exploded. REST IN PIECES`

        }else if (currentInput === "BLUE") {
                return `You pressed the BLUE button and a door in front of you opens!, You enter the room and in the room, there are two huge tanks filled with liquid. At the bottom of each tank lies a key. One of the tank contains the right key to the next door. Which tank do you want to dive into? A or B or Neither`
                if (currentInput === 'A'){
                   return `You dive head first into the tank filled with acid. YOU ARE DEAD!`
                }else if (currentInput === 'Neither'){
                    return `You chose not to dive into either tanks but walked around the room and found a secret entrance.You enter it and escaped the murder house.YOU ARE A SURVIVOR `
                }else if (currentInput === 'B'){
                    return`You dived into the tank and picked up the correct key to unlock the door. Upon entering the other room, you noticed the writings on a wall, It says this is the final test and if you pass it, you will be set free. In front of you, there are two buttons. One of them is the correct button to unlock the final door. which button do you press. 1 or 2? `
                }if (currentInput === '1'){
                    return`You pressed the wrong button and the room is suddenly filled with water.YOU DROWNED TO DEATH `
                }if (currentInput === '2'){
                    return `You pressed the button but nothing happened. Suddenly,a speaker somewhere in the room plays this. "You have choose the correct button ${name}. But unfortunately, no matter what you do, You are never going to escape this place forever.HAHAHAHAH"`
                }

            }
        }
    }

}