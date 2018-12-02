// put code here!\\
var array = [0,0,0,0];
var house = "";
var score = 0;

function deadMessage(){
    alert("The Troll deflects your pitiful magic and swings his large bat on your body. You fly across the room and crash through the wall of the dungeon. You squirm and lay lifeless and bloodied on the cold hard ground of the dungeon. The Troll walks towards your body prepares another swing on your body. You have met your end.");
}

function whatIsYourName(){
    do{var userName = prompt ("What is your name?");
}while(userName==="");
return userName;
}

//why do i need to use break for the loop conditions to work?
function question1(){
do{
var choice1 = prompt ("Sorting Hat: Hi " + userName +", Welcome to Hogwarts!\n What is your favourite colour amongst these colours? Red/Blue/Green/Yellow " );
choice1 = choice1.toLowerCase().charAt(0);
if( choice1 === "r"){
array[0]++;
break;
}
else if(choice1 ==="b"){
    array[1]++;
    break;
}
else if(choice1==="g"){
    array[2]++;
    break;
}
else if(choice1==="y"){
    array[3]++;
    break;
}
} while(choice1!="r"||"b"||"g"||"y");
// while(choice1!=="r" || choice1!== "b"|| choice1!=="g"|| choice1!=="y");
}

//why does my array not update with question 2
function question2(){
    //does prompt auto converts numbers to strings?
do{    var choice2 = prompt ("You see an old lady crossing the road and you are late for school\nDo you 1.) Push Ahead 2.)Help her cross the road");
if (choice2 == 1){
    array[0]++;
    array[3]++;
    break;
}else if(choice2 == 2){
    array[1]++;
    array[2]++;
    break;
}
}while(choice2!=1||2);
}

function question3(){
do{ var choice3 = prompt ("What do you seek?\n1.)Fame & Glory, 2.)Wealth & Riches, 3.) Knowledge")
if(choice3 == 1){
    array[0]++;
    array[2]++;
    break;
}
if(choice3 == 2){
    array[1]++
    array[3]++
    break;
}
if(choice3 == 3){
    array[3]++
    break;
}
}while(choice3!=1||2||3);
}


function question4(){
    do{var choice4 = prompt("Do you like chaos or order?");
    choice4 = choice4.toLowerCase().charAt(0);
if(choice4 === "c"){
    array[2]++;
    array[3]++;
    break;
} else if(choice4 === "o"){
    array[0]++;
    array[1]++;
    break;
}
    }while(choice4!=="c"||"o");
}

function sortingResults(){
var largest = 0;
for(var i = 0 ; i<array.length; i++){
if (array[i]>array[largest]){
    largest = i;
}
}
if(largest===0){
    house = "Gryffindor";
}else if(largest===1){
    house = "Ravenclaw";
}else if(largest===2){
    house = "Slytherin";
}else if(largest===3){
    house = "Hufflepuff";
}
}

function event1(){
 var day1 = prompt("Day 1 of Hogwarts, you are beginning magic class. Neville the class joker has forgotten to bring his wand to class.\nDo you\n1.)Laugh at him\n2.)Lend him your wand for practice\n3.)Snitch to the professor about it")
        if(day1==1){
            if(house==="Ravenclaw"||"Slytherin"){
                score=score+2;
            }
}else{score--;}

if(day1==2){
    if(house==="Gryffindor"||"Hufflepuff"){
        score = score + 2;
    }
}else{
    score--;
}

if(day1==3){
    if(house==="Ravenclaw"||"Hufflepuff"){
        score++
    }
}
}

function event2(){
var day2 = prompt("Day 2: You inspected a glowing tile in " + house +"'s bathroom. The air is dark and dusty, you have entered a secret dungeon hidden in Hogwarts. You feel a large presence behind you.\n1.)Turn behind \n2.)Leave")
if(day2==1){
    alert("You are face to face with a large troll")
    var fight = prompt("What do you do?\n1.)Try to cast magic you have learnt from day1\n2.)Stick your wand up the troll's nostril")
} if (fight == 1){
    deadMessage();
} else if (fight ==2){
    alert("You have found the weak spot of the Troll, the Troll crashes to the ground and lay lifeless.");
    score = score+3;
}

}


//Main Story Line And Running Questions
alert("Welcome to Hogwarts Adventures!")

var userName = whatIsYourName();

alert ("You are a young wizard named " + userName + " and this is your first day at the school of magic, Hogwarts. You slowly approach the sorting hat");

alert("The sorting hat will help you to sort you into your new house for your journey in Hogwarts by asking you 4 questions.");

question1();
console.log(array);

question2();
console.log(array);

question3();
console.log(array);

question4();
console.log(array);

sortingResults();

alert ("Hmmmmm, this is a very difficult decision " + userName + ", your house is " + house + "!");

event1();

event2();

//Game over message
alert("Game Over, Thanks for Playing! your total score is " + score);