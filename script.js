console.log("hello script js");
var name;
var lobbySelect;
var experience = 0;
var steps = "lobby_start";
var playerHealth = 100;
var monster;

var ghoul = {
  health: 50,
  attack: Math.floor(Math.random() * 11)
};

var skeleton = {
    health: 80,
    attack: Math.floor(Math.random() * 6)
}





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
            var rng = Math.floor(Math.random() * 100);
            if(rng < 50){
              steps = "skeleton";
              monster = skeleton;
              return `You are currently facing:
              \nSkeleton
              \nHealth: ${monster.health}
              \n\n1. Attack
              \n2. Flee`;
            break;
          }else if(rng > 50){
            steps = "ghoul";
            monster = ghoul;
            return `You are currently facing:
            \nGhoul
            \nHealth: ${monster.health}
            \n\n1. Attack
            \n2. Flee`;
            break;
          }

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

        case "skeleton":
          return `success`;
          break;

        case "ghoul":
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