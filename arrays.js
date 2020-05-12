console.log("hello script js");

var inputHappened = function(currentInput){
  var whatNext = "You're in darkness and there is a light. Do you follow the light or do you go away from the light? Type y to follow the light, type n to go away from the light. Press enter.";
  var options = ["y", "n"]
  if(currentInput = options[0]) {
    whatNext = "You become matter";
    display(whatNext);
  }
  display(whatNext);
};