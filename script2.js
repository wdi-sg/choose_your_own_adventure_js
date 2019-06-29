var storyline1 = function(){
  prompt('Your pot caught fire, what do you do? \n 1. scream and run \n 2. nah, i made it catch fire \n 3.call the ambulance \n Type 1, 2 or 3');
}

var storyline2 = function(){
  alert('storyline2');
}

var storyline3 = function(){
  alert('storyline3');
}

var response = '';
var money = 0 ;

var response = prompt( `Are you ready for an adventure of a lifetime? Type y/n`);

if (response ==='y'){
  alert('Great! Let\'s begin. ');
} else if (response === 'n'){
  alert('Come on, it will be fun.');
} else {
  alert('Please enter y or n');
}

var name = prompt('What is your name?');

var cookingFreq = prompt(`Hi ${name}, how many times do you cook each week? Enter a number`);

if (cookingFreq <= 2){
  alert('It\'ll be a tough journey.');
  money = money + 1;
} else if (cookingFreq > 2 && cookingFreq <= 5){
  alert('Not too bad. As a saying goes, if Yan can cook, so can you.');
  money = money + 5;
} else if(cookingFreq > 5 ){
  alert('Gordon Ramsay will be proud of you');
  money = money + 10;
}

storyline1();


//ideas
// if yan can cook, so can you

// if cooking skills bad
// this food is so frozen that it started singing let it go
// this lamb is so undercooked, it is following mary to school
// this chicken is so raw, it is still crossing the road


// if cooking skill good
//



// what will you cook with chicken and potatoes
// singapore curry chicken
// rosemary chicken and roasted potatoes
// chicken stew

// join a restaurant as a corporate chef
// buy a food truck
// open a zichar stall
// start a home cook restaurant


// start a youtube channel to teach people cooking
// start a cooking blog

// what type of food are you likely to make
// asian
// western
// desserts
//


// how would you like to start your culinary journey
// take a weekend cooking class
// fly to France and attend Cordon Bleu
// Quit my job and jopin MasterChef

//what if var money = '';
//what ever decision you make will result in money ++ or money --;
//endgame tell you money.

//your restaurant is not doing well , what will you do
//have a promotion
//hire michilin chef
//close it down
//join gordon ramsay kitchen nighmare show

// the pan is on fire, what will you do
// panic and scream
// that's great, it is the wok hei i am looking for
// call the fire engine

// play cooking mama instead, don't poison people
