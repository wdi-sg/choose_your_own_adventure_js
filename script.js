console.log("hello script js");
var name;
var lobbySelect;
var experience = 0;
var steps = "lobby_start";



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
        return `Welcome ${name}, What would you like to do today?
        \n1. Adventure
        \n2. Visit Inn
        \n3. View experience
        \n4. Log out`;
        break;
      }else{
        return `Special characters are not allowed in name. Please reenter a new name.`
        break;
      }

      case "lobby_selection":
        switch(currentInput){
          case "1":
            steps = "adventure";
            return `You have decided to go on an adventure, which monster would you like to fight?
            \n1. Orc
            \n2. Skeleton
            \n3. Back`;
            break;

            case "2":
              steps = "visit_inn";
              return `You are currently in an inn, what would you like to drink?
              \n1. Beer
              \n2. Soda
              \n3. Plain ol' water
              \n4. Back`;
              break;

            case"3":
            return `Current experience is ${experience}
              \n1. Adventure
              \n2. Visit Inn
              \n3. View experience
              \n4. Log out`
              break;

            case "4":
              steps = "logout_confirmation"
              return `Are you sure you want to log out? (Y/N)`;
              break;

              default:
                return `Invalid Input, Please enter again
                \n1. Adventure
                \n2. Visit Inn
                \n3. View experience
                \n4. Log out`
        }
        break;

        case "adventure":
          return `success`;
          break;

        case "visit_inn":
          return `success`;
          break;

        case "logout_confirmation":
          switch(currentInput.toUpperCase()){
            case "Y":
              steps = "lobby_start";
              return `Welcome adventurer, please enter your name`;
              break;

            case "N":
              steps = "lobby_selection"
              return `Welcome ${name}, What would you like to do today?
              \n1. Adventure
              \n2. Visit Inn
              \n3. View experience
              \n4. Log out`;
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