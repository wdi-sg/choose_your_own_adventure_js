var pokemon = [
{   name: "Torchic",
    Hp: 50,
    Exp:0
},
{   name:"Mudkip",
    Hp: 60,
    Exp:0
},
{   name:"Treecko",
    Hp:40,
    Exp:0
}];
var userPokemon = [];
var pokemonGoal = ["Pokemon Master", "Fashion Elites", "Pokemon Tycoon"];
var userPokemonGoal = [];
var pokemonDuty = ["Gym Battle", "Fashion Contest","Pokemon Collector"];
var pokemonFacility = ["Pokemon Gym", "Fashion Dome" , "Evil Hideout" , "Pokemon Centre", "PokeMart"];
var pokemonCity = [
{   city: "Blackthorn",
    forestEnemy: 2,
    expFight: 120,
    expRun: 20,
    gymLeader: {
        name: "Winona",
        type: "Flying",
        pokemon:"Altaria"
    },
    fashionLeader: {
        name: "Sun Lee",
        type: "Fire",
        pokemon: "Infernape"
    },
    evilLeader:{
        name: "Maxi",
        team: "Team Aqua",
        type: "Water",
        pokemon: "Carvahna"
    }
},
{   city: "Cerulean",
    forestEnemy: 4,
    expFight: 120,
    expRun: 10,
    gymLeader: {
        name: "Drake",
        type: "Dragon",
        pokemon: "Salamence"
    },
    fashionLeader: {
        name: "Misty",
        type: "Water",
        pokemon: "Lapras"
    },
    evilLeader:{
        name: "Osama",
        team: "Team Explosion",
        type: "Flare",
        pokemon: "Golem"
    }
},
{   city: "Celadon",
    forestEnemy: 2,
    expFIght: 50,
    expRun: 10,
    enemy: "Team Rocket",
    gymLeader: {
        name: "Giovanni",
        type: "Ground",
        pokemon:"Hippodawn"
    },
    fashionLeader: {
        name: "Grace",
        type: "Grass",
        pokemon: "Bellossom"
    },
    evilLeader:{
        name: "Trump",
        team: "Team Money",
        type: "Normal",
        pokemon: "Persian"
    }
},
{   city: "Veilstone",
    forestEnemy: 5,
    expFight: 300,
    expRun: 50,
    gymLeader: {
        name: "Psycho",
        type: "Psychic",
        pokemon:"Alakazam"
    },
    fashionLeader: {
        name: "Fatana",
        type: "Normal",
        pokemon: "JigglyPuff"
    },
    evilLeader: {
        name: "Giovanni",
        type: "Fairy",
        team: "Team Rocket",
        pokemon: "Gardevior"
    }
}];

var i = 0;
var word = false;
var userName;
var stage = 0;

//Player input their name
//stage 0
console.log("Enter your name to start the game.")
var playerName = function(userInput){
    userName = userInput;
    stage += 1;
    console.log("");
    console.log("Hello " + userName + ". Welcome to Pokemon text game. There are three pokemons that are available here. They are Torchic, Mudkip and Treecko. Pick one.Welcome to Pokemon Text Game.");
    console.log("Select either 'Torchic', 'Mudkip' and 'Treecko'.");
}

//Player select their pokemon(selectPokemon)
//stage 1
var selectPokemon = function(userInput){
        if (userInput === pokemon[0].name){
            console.log("You receive "+ pokemon[0].name + " from Prof ...")
            stage += 1;
//            userPokemon.push(pokemon[0]);
//            console.log(userPokemon);
            console.log("");
            console.log("Well " + userName + ". What are you doing to do with it? From what I know, there are three career path you can dive in. Pokemon Master, Fashion Elites and Pokemon Tycoon. So... which career are you interested in?")
            console.log("Select either 'Pokemon Master', 'Fashion Elites' or 'Pokemon Tycoon'.");

        }
        else if(userInput === pokemon[1].name){
            console.log("You receive "+ pokemon[1].name + " from you a Prof ...")
            stage += 1;
            userPokemon.push(pokemon[0]);
            console.log("");
            console.log("Well " + userName + ". What are you doing to do with it? From what I know, there are three career path you can dive in. Pokemon Master, Fashion Elites and Pokemon Tycoon. So... which career are you interested in?")
            console.log("Select either 'Pokemon Master', 'Fashion Elites' or 'Pokemon Tycoon'.");

        }
        else if(userInput === pokemon[2].name){
            console.log("You receive "+ pokemon[2].name + " from you Prof ...")
            stage += 1;
            userPokemon.push(pokemon[0]);
            console.log("");
            console.log("Well " + userName + ". What are you doing to do with it? From what I know, there are three career path you can dive in. Pokemon Master, Fashion Elites and Pokemon Tycoon. So... which career are you interested in?")
            console.log("Select either 'Pokemon Master', 'Fashion Elites' or 'Pokemon Tycoon'.");

        }
        else{
            console.log("");
            console.log("The rest of the pokemon was released recently. Please pick either one of the three pokemons");
            console.log("Select either 'Torchic', 'Mudkip' and 'Treecko'.");
        }
}

//What player wants to do with their pokemon.
//stage 2
var destiny = function(userInput){
        if(userInput === pokemonGoal[0]){
            stage += 1;
            console.log("I have been thinking to become a " + pokemonGoal[0] + ".");
            console.log("WOW. You are muscle brain type of person I see. There are a couple of city of achieve that dream. Which city do you want to go?");
            console.log("Select either 'Blackthorn', 'Cerulean', 'Celadon', Veilstone'")

        }
        else if(userInput === pokemonGoal[1]){
            stage += 1;
            console.log("I want to become a " + pokemonGoal[1] + ".");
            console.log("Woah. I see  a strong conviction in your answer. There are a couple of city of achieve that dream. Which city do you want to go?");
            console.log("Select either 'Blackthorn', 'Cerulean', 'Celadon', Veilstone'")

        }
        else if(userInput === pokemonGoal[2]){
            stage += 1;
            console.log("Just between you and me. I want to go down the path of " + pokemonGoal[2]+ ".");
            console.log("Oh my. I at loss of words here. I shouldn't recommended but if you are all set, there are a couple of city of achieve that dream. Which city do you want to go?");
            console.log("Select either 'Blackthorn', 'Cerulean', 'Celadon', Veilstone'")
        }
        else{
            console.log("");
            console.log("");
            console.log("You should really think of your choices. Make a choice.");
        }
}

//walking to any city
//stage 3
var i = 0;
var walkingTowardCity = function(userInput){
    for( i = 0; i < pokemonCity.length; i += 1){
        console.log("The value of " + i);
        if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("");
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers.");
            console.log("Do you want to 'fight' or 'run'?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("");
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers.");
            console.log("Do you want to 'fight' or 'run'?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("");
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers. Do you want to fight or run?");
            console.log("Do you want to 'fight' or 'run'?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("");
            console.log("While walking towards " + pokemonCity[i].city + " city, you   encounter " + pokemonCity[i].forestEnemy + " trainers. Do you want to fight or run?");
            console.log("Do you want to 'fight' or 'run'?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("");
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers.");
            console.log("Do you want to 'fight' or 'run'?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("");
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers.");
            console.log("Do you want to 'fight' or 'run'?");
            break;
        }
        else{
            console.log("Please one of the cities.");
            console.log("Select either 'Blackthorn', 'Cerulean', 'Celadon', Veilstone'");
        }
    }
}

//trainers when enroute to city
//stage 4
var trainersEncouter = function (userInput){
    if(userInput === "fight"){
        stage += 1
        console.log("");
        console.log("You win the battles. You have gained " + pokemonCity[i].expFight + " exp.");
        console.log("Do you want to proceed to city?" );
    }
    else if(userInput === "run"){
        stage += 1;
        console.log("");
        console.log("You successfully evaded the battle. You gain " + pokemonCity[i].expRun + " exp.");
        console.log("Do you want to proceed to city?" );
    }
    else{
        console.log("");
        console.log("");
        console.log("Please select 'fight' or 'run' only");
    }
}

//after trainer battle/run options
//stage 5
var proceedToCity = function(userInput){
    if(userInput === "Yes"){
        stage += 1;
        console.log("");
        console.log("You have reach the " + pokemonCity[i].city + ". Where do you want to go? ");
        console.log("Select one of the option 'Pokemon Gym', 'Fashion Dome' , 'Evil Hideout'");
    }
    else if(userInput ==="No"){
        console.log("");
        console.log("Do you want to fight trainers again?");
        console.log("Please select 'Yes' or 'No'");
    }
    else{
        console.log("");
        console.log("");
        console.log("Please select 'Yes' or 'No' only")
    }
}

//stage 6
var useFacilities = function(userInput){
    if(userInput === pokemonFacility[0] && stage === 6){
        stage += 1;
        console.log("");
        console.log("You enter the " + pokemonFacility[0] + ". Do you want to challenge " + pokemonCity[i].city + ", " + pokemonCity[i].gymLeader.name + "?");
        console.log("Select one option: 'Yes' or 'No'");
    }
    else if(userInput === pokemonFacility[1] && stage === 6){
        stage += 1;
        console.log("");
        console.log("You enter the " + pokemonFacility[0] + ". Do you want to enter the Fashion Contest?");
        console.log("Select one option: 'Yes' or 'No'");
    }
    else if(userInput === pokemonFacility[2] && stage === 6 ){
        stage += 1;
        console.log("");
        console.log("You enter the " + pokemonFacility[2] + ". Do you want join our team?")
        console.log("Select one option: 'Yes' or 'No'");
    }
    else{
        console.log("");
        console.log("Invalid choice. Please reselect your option.");
        console.log("Select one of the option 'Pokemon Gym', 'Fashion Dome' , 'Evil Hideout' , 'Pokemon Centre', 'PokeMart', 'Next town'");
    }
}

//City gym battle (Proceed to next stage you have to clear either the gym, fashion or evil)
//stage 7
var gymBattle = function(userInput){
    if(userInput === "Yes"){
        stage += 1;
        console.log("");
        console.log("Your challenge the " + pokemonCity[i].city + " gym leader, " + pokemonCity[i].gymLeader.name + ". You defeat " + pokemonCity[i].gymLeader.name + ". You exited the gym. Where do you want to go?") ;
        console.log("Select one of the option 'Pokemon Centre', 'PokeMart' or 'Next town'");
    }
    else if(userInput === "No"){
        console.log("");
        console.log("You exited the gym. Where do you want to go?")
        console.log("Select one of the option 'Pokemon Gym', 'Fashion Dome' , 'Evil Hideout'");
    }
    else{
        console.log("");
        console.log("Invalid choice.");
        console.log("Select one option: 'Yes' or 'No'");
    }
}

//Player fashion contest
var fashionContest = function(userInput){
    if(userInput === "Yes"){
        stage += 1;
        console.log("");
        console.log("You enter the contest and beat " + pokemonCity[i].fashionLeader.name + " and won first place. You exited the gym. Where do you want to go?");
        console.log("Select one of the option 'Pokemon Centre', 'PokeMart' or 'Next town'");
    }
    else if(userInput === "No"){
        console.log("");
        console.log("You exited the dome. Where do you want to go?");
        console.log("Select one of the option 'Pokemon Gym', 'Fashion Dome' , 'Evil Hideout'");
    }
    else{
        console.log("");
        console.log("Invalid choice. Please reselect your option.");
        console.log("Select one option: 'Yes' or 'No'");
    }
}

//Player to be pokemon tycoon
var evilHideout = function (userInput){
    if(userInput === "Yes"){
        stage += 1;
        console.log("");
        console.log("You have been tested for loyalty by team leader " + pokemonCity[i].evilLeader.name + " from " + pokemonCity[i].evilLeader.team + " and pass the entrance test. You exited the hideout. Where do you want to go?");
        console.log("Select one of the option 'Pokemon Centre', 'PokeMart' or 'Next town'");
    }
    else if(userInput === "No"){
        console.log("");
        console.log("You have exited the Evil Hideout. Where do you want to go?");
        console.log("Select one of the option 'Pokemon Gym', 'Fashion Dome' , 'Evil Hideout'");
    }
    else{
        console.log("");
        console.log("Invalid choice. Please reselect your option.");
        console.log("Select one option: 'Yes' or 'No'");
    }
}

//player to heal their pokemon
var pokemonCentre = function(userInput){
    if(userInput === "Heal"){
        stage += 1
        console.log("");
        console.log("I have healed your pokemon to full health. Please come again. Thank you. Proceed to next city?");
        console.log("Select one option: 'Yes' or 'No'");
    }
    else if(userInput === "Leave"){
        console.log("");
        console.log("You have leave the Pokemon Centre. Proceed to next city?");
        console.log("Select one option: 'Yes' or 'No'");
    }
    else{
        console.log("");
        console.log("Invalid choice. Please reselect your option.");
        console.log("Select one option: 'Heal' or 'Leave'");
    }
}

//player to buy their items
var pokeMart = function(userInput){
    stage += 1
    console.log("Hi. Welcome PokeMart. Do you want to 'Buy' items or 'Leave'?");
    if(userInput === "Buy"){
        console.log("");
        console.log("You successfully purchase your items. Please come again. Proceed to next city?");
        console.log("Select one option: 'Yes' or 'No'");
    }
    else if(userInput === "Leave"){
        console.log("");
        console.log("You have leave the PokeMart. Proceed to next city?")
        console.log("Select one option: 'Yes' or 'No'");
    }
    else{
        console.log("");
        console.log("Invalid choice. Please reselect your option.");
        console.log("Select one option: 'Buy' or 'Leave'");
    }
}

var nextCity = function(userInput){
    if (userInput === "Yes"){
        console.log("Off to next adventure");
    }
    else if(userInput === "No"){
        console.log("Sorry. Your visa has expired. You have to leave the city now. Thanks for visiting.")
    }
    else{
        console.log("Select one option: 'Yes' or 'No'")
    }
}

//start of the whole game (the flow of the game is by clearing the stages.)
var stage = 0;

var inputHappened = function(userInput){
    if(stage === 0){
        playerName(userInput);
    }
    else if(stage === 1){
        selectPokemon(userInput);
    }
    else if(stage === 2){
        destiny(userInput);
    }
    else if(stage === 3){
        walkingTowardCity(userInput);
    }
    else if(stage === 4){
        trainersEncouter(userInput);
    }
    else if(stage === 5){
        proceedToCity(userInput);
    }
    else if(stage === 6){
        useFacilities(userInput);
    }
    else if(stage === 7){
        gymBattle(userInput);
    }
    else if(stage === 7){
        fashionContest(userInput);
    }
    else if(stage === 7){
        evilHideout(userInput);
    }
    else if (stage === 8){
        console.log("Hello Welcome to the Pokemon Centre. Do you want to 'Heal' or 'Leave'?");
        pokemonCentre(userInput);
    }
    else if (stage === 8){
        console.log("Hello Welcome to the PokeMart. Do you want to 'Buy' items or 'Leave'?");
        pokeMart(userInput);
    }
    else if (stage === 9){
        nextCity(userInput);
    }
    else{
        console.log("I give up");
    }
}

//For testing purposes
/*
var inputHappened = function(userInput){
    if(stage === 0 ){
        useFacilities(userInput);
    }
    else if(stage === 1){
        gymBattle(userInput);
    }
    else{
        console.log("You suck")
    }
}
*/