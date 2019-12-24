console.log("Story of a Mexican Walnut");

//characters
var user = 'Walnut';
var withKid = 'kid';
var lostToy = 'orphan';
var makeKidHappy = 'kid pick me up';


 console.log('Welcome home' + ' ' + user + ',' + ' ' + 'congratulations on crossing the border!')

 display('You are in a desert. What would you like to do:' '\n' + 'A. Get picked up.' + '\n' + 'B. Ignored and keep walking' + '\n' 'C. Get abducted by aliens')

//questions to move to the next scene(objects)
//Question 1
var desert = {
    scene1 : 'picked up',
display('You were picked up. Choose your next move:' '\n' 'A. Brought home and join the rest of the peanut family' '\n' 'B. Picked up and turned into a Taco toppings.')
}

//Questions for scene2(Ignored)
var homeAlone = {
    scene2 : 'ignored',
display('You are all by yourself. Choose your next move:' '\n' 'A. Wondered off and join the Mexican GodFather' '\n' 'B. Got lost in a desert and cooked alive')
}

//Questions for scene3
var toppings = {
    scene3 : 'abduction',
display('You were beamed up by Thanos\'s gang as they were kidnapping Dr Strange. What is your next plan:' '\n' 'A. Rescue Dr Strange by sacrificing yourself as the enemies were allergic to nuts' '\n' 'B. Help Thanos by getting inside Ironman\'s suit and choke him')
}

var inputHappened = function(currentInput){
    if(currentInput === 'desert'){
        display(desert.scene1);
    } else if (currentInput === homeAlone){
        display(desert.scene2)
    } else {
        display(scene3)
    }
}







// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };