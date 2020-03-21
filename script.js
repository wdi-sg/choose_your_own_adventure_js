console.log("hello script js");
var name;
var lobbySelect;
var steps = "start";



var inputHappened = function(currentInput){

  console.log(steps);
  switch(steps){
    case "start":
      steps = "lobby_start";
      return `Welcome adventurer, please enter your name`;
      break;

    case "lobby_start":
      if(currentInput.match(/^[a-z]+$/i)){
        name = currentInput;
        steps = "lobby_selection";
        return `Welcome ${name}, What would you like to do today?\n1. Adventure\n 2. Visit Shop\n 3. Log out`;
        break;
      }else{
        return `Special characters are not allowed in name. Please reenter a new name.`
        break;
      }

      case "lobby_selection":
        switch(currentInput){
          case "1":
            return "succes";
            break;

            case "2":
              return "success";
              break;

            case "3":
              return "success";
              break;
        }

        break;
  }

};

      var display = function( data ){
        var displayElement = document.querySelector('#output');

        // get rid of the entire contents
        displayElement.innerHTML = "";

        // put the data into the div
        output.innerText = data;
      };