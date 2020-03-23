

console.log("hello script js");



var gameStatus = 'active';



var step = 0;
var reset = function() {
    return document.querySelector("#input").value = '';
}


var inputHappened = function(input){
  console.log( input );

  if (gameStatus === 'active'){
    if(step === 0) {
        step++;
        reset();
        return "Hello there! Congratulations on turning 10! Its now time to start your pokemon journey to become the true pokemon master. Pokemon trainers usually begin their journey with a starter pokemon. There are 3 options to choose from (B)Bulbasaur the grass pokemon, (S)Squirtle the water pokemon and (C)Charmander the fire pokemon, your starter is extremely important so please choose wisely.--------Please key in one of these alphabets (B/S/C)";

    }


    ///////starter pokemon choice////

    if(step === 1) {
        if(input === "B") {
            step++;
            reset();
            return "So u will pick Bulbasaur the grass pokemon?----(Please key either (Yes) or (No)";

        } else if (input === "S") {
            step++;
            reset();
            return "So u will pick Squirtle the water pokemon?----(Please key either (Yes) or (No)";
        } else if (input === "C") {
            step++;
            reset();
            return "So u will pick Charmander the fire pokemon?----(Please key either (Yes) or (No)";

        } else if (input =! "B" || input != "S" || input != "C" {
            reset();
            return "Please key in one of these alphabets. (B/S/C)";
        }


///////Confirmation of choice


 } else if (step === 2) {

    if(input === "Yes") {
        gameStatus = 'All the best';
        reset();
        return "Thats a great choice, from now on you guys will become partners and will go through thick and thin together.All the best! ";

    } else if (input === "No") {
        gameStatus = "All the best";
        reset();
        return step===1 "Do choose wisely, your starter pokemon is pivotal in your journey.";}



    } else if (input =! "Yes" || input != "No" {

        gameStatus = "All the best";
        reset();
    return "Please kindly confirm again (Yes/No)";

}