console.log("hello script js");

//object of paths
var choicesFactor = {
        gameEnded: false,
        msg: "Stranded in the wilderness with no supplies, you decided to...",
        choices: [
        {
            choice :"hunt and forage for food",
            endGame: false,
            msg: "You decided to hunt and forage for food and succeeded. Next, you decided to...",
            choices : [
            {
                choice: "look for materials",
                endGame: false,
                msg: "You decided to look for materials and succeeded. Next, you decided to...",
                choices : [
                {
                    choice:"hunt and forage for food",
                    endGame: true,
                    msg: "With the materials you've gathered you decided to explore the area and occasionally set up a temporary camp while exploring and surviving the wilderness."
                },
                {
                    choice:"look for materials",
                    endGame: true,
                    msg: "You decided to look for more materials. You explored the wilderness while you gathered some materials. However, the food you had ran out."
                },
                {
                    choice:"attempt to escape",
                    endGame: true,
                    msg: "You managed to escape successfully even though most of your food are almost rotten."
                }]
            },
            {
                choice: "hunt and forage for food",
                endGame: true,
                msg:"You spend your time hunting and gathering food while surviving in the wilderness."
            },
            {
                choice:"attempt to escape",
                endGame: true,
                msg:"You attempted to escape and wandered around aimlessly for days and ended up consuming all the food you gathered. Unfortunately, you do not have the needed materials to escape and failed."
            }
            ]
        },
        {
            choice : "look for materials",
            endGame : false,
            msg : "You gathered some materials and build some important stuff. Next, you decided to...",
            choices : [
            {
                choice : "hunt and forage for food",
                endGame: false,
                msg: "You manage to gather some food and store them. Next, you decided to...",
                choices:[
                {
                    choice : "look for materials",
                    endGame : true,
                    msg: "You look for some materials again. You manage to last for a while before you ran out of food."
                },
                {
                    choice : "hunt and forage for food",
                    endGame : true,
                    msg: "You decided to hunt and forage for food again. With the materials you gathered, you managed to set up a camp and survive with the food you have."
                },
                {
                    choice : "attempt to escape",
                    endGame : true,
                    msg: "You managed to escape successfully with more than enough food you collect left."
                }
                ]
            },
            {
                choice : "look for materials",
                endGame: true,
                msg: "You gathered more materials but you do not have any food to last.",
            },
            {
                choice : "attempt to escape",
                endGame : true,
                msg: "You attempted to escape but you do not have any food to last."
            }
            ]
        },
        {
            choice:"attempt to escape",
            endGame: true,
            msg:"You attempted to escape and wandered around aimlessly. Unfortunately, you failed to escape."
        }
        ]
}

//store current path taken by players
var pathTaken = choicesFactor;

//display choices at the starting point
var displayStart = function(){
       var message = document.querySelector('#output');
    message.innerHTML = pathTaken.msg +"<br>";
    var choices =["a","b","c"];
    for(var i = 0;i<pathTaken.choices.length; i++){
          message.innerHTML +=  "<br>"+ choices[i]+". "+pathTaken.choices[i].choice;
    }
    return message.innerHTML;
}
/*var name = "";
var startOfGame = true;*/
//display path players could take
var displayChoices = function(){
    var choices =["a","b","c"];
    var message = "\n";
    for(var i = 0;i<pathTaken.choices.length; i++){
        message += "\n"+ choices[i]+". "+pathTaken.choices[i].choice;
    }
    return message;
}

displayStart();
var inputHappened = function(currentInput){
  console.log( currentInput );
  var message;
  var letter = ["a","b","c"];
  var letterFound = false;
  //if game has already ended
  if(!choicesFactor.gameEnded){
    //display message and update path taken
    for(var i = 0;i<pathTaken.choices.length;i++){
        if(currentInput === letter[i]){
              message = pathTaken.choices[i].msg;
             pathTaken = pathTaken.choices[i];
             letterFound = true;
             break;
        }
    }
    if(!letterFound){
        message = "Invalid input! Please choose a valid letter:";
         message += "\n"+pathTaken.msg;
      }
      //if game ended, ensure coded does not run
      if(pathTaken.endGame){
        choicesFactor.gameEnded = pathTaken.endGame;
      }else{
        //if game has not added, display choices
                 message += displayChoices();
      }
    }else
    {
        /*out put same message no matter what user types in input as game has already ended*/
       message = pathTaken.msg;
    }
  return message;
};



var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};

//display("Please enter your name");