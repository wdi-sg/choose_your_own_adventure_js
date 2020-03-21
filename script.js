console.log("hello script js");
var name;
var path;
var steps = 0;


var inputHappened = function(currentInput){

  console.log(steps);
  switch(steps){
    case 0:
      steps++;
      return "Welcome adventurer, please enter your name";
      break;

    case 1:
      if(currentInput.match(/^[a-z]+$/i)){
        name = currentInput;
        steps++;
        return name;
        break;
      }else{
        return "Special characters are not allowed in name. Please reenter a new name."
        break;
      }
  }

};

      var display = function( data ){
        var displayElement = document.querySelector('#output');

        // get rid of the entire contents
        displayElement.innerHTML = "";

        // put the data into the div
        output.innerText = data;
      };