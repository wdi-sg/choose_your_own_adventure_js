console.log("hello script js");

//this creates a function called inputHappened
var inputHappened = function(currentInput){



  console.log( currentInput );

  if(currentInput === "Left"){
    //the first question
    return "There is now a path";
        if(currentInput === "Left"){
            return "You found a hidden room";
        }
  }
    //the second question
  if(currentInput === "Right"){
    return "That was the wrong way";
        if(currentInput === "Left"){

        }

  }
  return "That is not a choice!";


  //returns value at the end of the function
  return "SOMETHING HAPPENED";

};