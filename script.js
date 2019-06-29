
var name;
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
var pokemonDuty = ["Gym Battle", "Fashion Contest","Pokemon Collector"];
var pokemonFacility = ["Pokemon Gym", "Fashion Dome" , "Evil Hideout"];
var pokemonCity = [
{   city: "Mahogany",
    forestEnemy: 3,
    expFight: 180,
    expRun: 30
},
{   city: "Ever Grande",
    forestEnemy: 4,
    expFight: 240,
    expRun: 40
},
{   city: "Blackthorn",
    forestEnemy: 2,
    expFight: 120,
    expRun: 20
},
{   city: "Cerulean",
    forestEnemy: 4,
    expFight: 120,
    expRun: 10
},
{   city: "Celadon",
    forestEnemy: 2,
    expFIght: 50,
    expRun: 10,
    enemy: "Team Rocket"
},
{   city: "Veilstone",
    forestEnemy: 5,
    expFight: 300,
    expRun: 50,
    enemy: "Team Galatic"
}];

var i = 0;
var word = false;

var name;
var playerName = function(userInput){
    name = userInput;
    stage += 1
    console.log("Hello " + name + ". Welcome to Pokemon Text Game.");
}

var selectPokemon = function(userInput){
    console.log("Welcome to Pokemon text game. There are three pokemons that are available in my lab. They are Torchic, Mudkip and Treecko. Pick one.")
        if (userInput === pokemon[0].name){
            console.log("You receive "+ pokemon[0].name + " from Prof ...")
            stage += 1;
            userPokemon.push(pokemon[0]);
            console.log("What are you doing to do with it? From what I know, there are three career path you can dive in. Pokemon Master, Fashion Elites and Pokemon Collector. So... which career are you interested in?")

        }
        else if(userInput === pokemon[1].name){
            console.log("You receive "+ pokemon[1].name + " from you a Prof ...")
            stage += 1;
            userPokemon.push(pokemon[0]);
            console.log("What are you doing to do with it? From what I know, there are three career path you can dive in. Pokemon Master, Fashion Elites and Pokemon Collector. So... which career are you interested in?")

        }
        else if(userInput === pokemon[2].name){
            console.log("You receive "+ pokemon[2].name + " from you Prof ...")
            stage += 1;
            userPokemon.push(pokemon[0]);
            console.log("What are you doing to do with it? From what I know, there are three career path you can dive in. Pokemon Master, Fashion Elites and Pokemon Collector. So... which career are you interested in?")

        }
        else{
            console.log("The rest of the pokemon was released recently. Please pick either one of the three pokemons");
        }
}

var destiny = function(userInput){
        if(userInput === pokemonGoal[0]){
            stage += 1;
            console.log("I have been thinking to become a " + pokemonGoal[0] + ".");
            console.log("WOW. You are muscle brain type of person I see. HAHAHAHA. In that case, you should head to Blackthorn , Veilstone or Ever Grande city for " + pokemonDuty[0] + " to be " + pokemonGoal[0] + ". Which city do you want to go?");

        }
        else if(userInput === pokemonGoal[1]){
            stage += 1;
            console.log("I want to become a " + pokemonGoal[1] + ".");
            console.log("Woah. I see  a strong conviction in your answer. You should head to Veilstone, Blackthorn or Cerulean city for " + pokemonDuty[1] + " to be " + pokemonGoal[1] + ". Which city you want to go?");

        }
        else if(userInput === pokemonGoal[2]){
            stage += 1;
            console.log("Just between you and me. I want to down the path of " + pokemonGoal[2]+ ".");
            console.log("Oh my. I at loss of words here. I shouldn't recommended that but if you are all set to be " + pokemonGoal[2] + ", I shall not stop you then. You can make use of Team Rocket, Team Galatic and Team Aqua. They are professionals in this field. They can be found in Celadon, Veilstone and Mahogany city respectively. Which city do you want to go?")

        }
        else{
            console.log("HAHAHAHA. You should really think of your choices. Make a choice.");
        }
}

//console.log(pokemonCity.length);
var i = 0;
var walkingInForest = function(userInput){
    for( i = 0; i < pokemonCity.length; i += 1){
        console.log("The value of " + i);
        if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers. Do you want to fight or run?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers. Do you want to fight or run?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers. Do you want to fight or run?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("While walking towards " + pokemonCity[i].city + " city, you   encounter " + pokemonCity[i].forestEnemy + " trainers. Do you want to fight or run?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers. Do you want to fight or run?");
            break;
        }
        else if(userInput === pokemonCity[i].city){
            stage += 1;
            console.log("While walking towards " + pokemonCity[i].city + " city, you encounter " + pokemonCity[i].forestEnemy + " trainers. Do you want to fight or run?");
            break;
        }
    }
}

var action = function (userInput){
    if(userInput === "fight"){
        stage += 1;
        console.log("You win the battles. You have gained " + pokemonCity[i].expFight + " exp.");
        console.log("Welcome to " + pokemonCity[i] + ". Please enjoy your stay." )
        console.log("Hmm.... Should which facilities should I visit first? Pokemon Gym, Fashion Dome or Evil hideout?")

    }
    else if(userInput === "run"){
        stage += 1;
        console.log("You successfully evade the battle. You gain " + pokemonCity[i].expRun + " exp.");
        console.log("Welcome to " + pokemonCity[i].city + ". Please enjoy your stay." )
        console.log("Hmm.... Should which facilities should I visit first? Pokemon Gym, Fashion Dome or Evil hideout?");

    }
    else{
        console.log("Please select 'fight' or 'run' only");
    }
}


var useFacilities = function(userInput){
    if(userInput === pokemonFacility[0]){
        stage += 1;
        console.log("Woah. They are too strong for me. I still need to train. Mada made dane.")
    }
    else if(userInput === pokemonFacility[1]){
        stage += 1;
        console.log("Sorry. There is an ongoing contest. Please watch the contest or come back later to enter the contest.");
    }
    else if(userInput === pokemonFacility[2]){
        stage += 1;
        console.log("Sorry. You are too weak to be a villain. Come back when you are stronger.")
    }
    else{
        console.log("While walking around the city, you accidentally enter a portal which leads you to a faraway land.");
    }
}


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
        walkingInForest(userInput);
    }
    else if(stage === 4){
        action(userInput);
    }
    else if(stage === 5){
        useFacilities(userInput);
    }
    else{
        console.log("I give up");
    }
}