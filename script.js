console.log("hello script js");
var name;
var experience = 0;
var playerHealth = 100;
var steps = "lobby_start";
var monster;

const createMonster = (name, health, experience) => {
  return {name, health, experience};
};

var inputHappened = function(currentInput){

  console.log(steps);
  switch(steps){
    case "start":
      experience = 0;
      playerHealth = 100;
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
              steps = "fight";
              monster = createMonster("Skeleton", 80, 50);
              return `You are currently facing:
              \n${monster.name}
              \nHealth: ${monster.health}

              \n\nYour Health: ${playerHealth}
              \n1. Attack
              \n2. Flee`;
            break;
          }else if(rng > 50){
            steps = "fight";
            monster = createMonster("Ghoul", 50, 30);
            return `You are currently facing:
            \n${monster.name}
            \nHealth: ${monster.health}

            \n\nYour health: ${playerHealth}
            \n1. Attack
            \n2. Flee`;
            break;
          }

            case "2":
              steps = "visit_inn";
              return `You are currently in an inn, what would you like to drink?
              \n1. Potion
              \n2. Back`;
              break;

            case "3":
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

        case "fight":
          switch(currentInput){
            case "1":
              var playerDamage = Math.floor(Math.random() * 31);
              var monsterDamage;
              monster.health = monster.health - playerDamage;
              if(monster.health > 0){
                if(monster.name === "Skeleton"){
                  monsterDamage = Math.floor(Math.random() * 11);
                  playerHealth = playerHealth - monsterDamage;;
                }else if(monster.name === "Ghoul"){
                  monsterDamage = Math.floor(Math.random() * 6);
                  playerHealth = playerHealth - monsterDamage;
                }
              }
              if(playerHealth <= 0){
                steps = "start";
                return `You dealt ${playerDamage} to ${monster.name}
                \n${monster.name} dealt ${monsterDamage} to you
                \nYou have been killed, type anything to restart the game
                \n\n${monster.name}
                \nHealth: ${monster.health}

                \n\nYour Health: ${playerHealth}`
              }else if(monster.health <= 0){
                steps = "pre-lobby";
                experience = experience + monster.experience;
                return `You dealt ${playerDamage} to ${monster.name}
                \nYou have killed ${monster.name}! You gained ${experience} experience. Type anything to continue.
                \n\n${monster.name}
                \nHealth: ${monster.health}

                \n\nYour Health: ${playerHealth}`
              }
              return `You dealt ${playerDamage} to ${monster.name}
              \n${monster.name} dealt ${monsterDamage} to you
              \n\n${monster.name}
              \nHealth: ${monster.health}

              \n\nYour Health: ${playerHealth}
              \n1. Attack
              \n2. Flee`;

            break;

            case "2":
              steps = "lobby_selection"
              return `You flee from the battle. What do you like to do today
              \n\n1. Adventure
              \n2. Visit Inn
              \n3. View experience
              \n4. Log out`;
              break;

              default:
                return `Invalid Input
                \n\n${monster.name}
                \nHealth: ${monster.health}

                \n\nYour Health: ${playerHealth}
                \n1. Attack
                \n2. Flee`;
                break;
          }

        case "pre-lobby":
          steps = "lobby_selection";
          return `Welcome back ${name}, What would you like to do today?
          \n1. Adventure
          \n2. Visit Inn
          \n3. View experience
          \n4. Log out`;
          break;

        case "visit_inn":
          switch(currentInput){
            case "1":
              playerHealth = 100;
              return `You drank a potion and you gained back all your health!
              \n1. Potion
              \n2. Back`;
              break;

            case "2":
              steps = "lobby_selection";
              return `You went back outside. What do you like to do today?
              \n1. Adventure
              \n2. Visit Inn
              \n3. View experience
              \n4. Log out`
              break;

              default:
                return `Invalid input, please enter again
                \n1. Potion
                \n2. Back`
          }
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

            default:
              steps = "lobby_selection"
              return `Invalid Input, Please enter again
                \n1. Adventure
                \n2. Visit Inn
                \n3. View experience
                \n4. Log out`
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