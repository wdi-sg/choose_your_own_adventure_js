var score= 0;

alert ("Welcome to the 1st game design by Adrian!");

function getConfirmation(){
    var instructions = confirm("To win this game, you have to choose the best answer and total score will be presented at the end of the game. Are you ready ?");
    if( instructions == true ){
        alert ("Let go!");
        return true;
     }
    else{
        alert ("Thank for playing");
      }
}

getConfirmation();

var name = prompt("what is your name ?");
         if (name == null) {
        alert("Thank for playing ! ")
    }
    else if (name == "") {
    name = "User";
};

var start =  prompt("Hi " + name + " , which kingdom will you like to join? Wu? Shu? Wei?  ");
var smallStart = start.toLowerCase();
if (smallStart === "wu"){
    alert("You will now follow Sun Quan instructions");
    var wuGame1 = prompt("Shu Jian have died during the war at age of 37, now they are looking for successor, would you Take Over(1)/Let Shu Ce Take Over(2)/ Can't decide just kill yourself(3) ");
}
else if (smallStart === "shu")
    alert("You will now follow Liu Bei instructions");
else if (smallStart ===  "wei")
    alert("You will now follow Cao Cao instructions");
else
    alert("You have entered an invalid input");

if (wuGame1 === "1" ){
    alert("Good luck. " + name + " From now on you have to work hard to make things right.");
     score += 1;
    var wuGame2  = prompt("Zhuge Liang from Shu has proposed that Shu and Wu combine forces during Chibi, and strike with fire arrows to destroy Cao Cao , would you reject and do your own things (1)/ attack Shu (2)/ attack Cao Cao because he is evil (3)?");
}
else if (wuGame1 === "2" ){
    alert("Well done. You have make the right chose");
     score += 2;
    var wuGame2  = prompt("Zhuge Liang from Shu has proposed that Shu and Wu combine forces during Chibi, and strike with fire arrows to destroy Cao Cao , would you reject and do your own things(1)/ attack Shu(2)/ attack Cao Cao because he is evil(3)?");
}
else if (wuGame1 === "3" ){
    alert("Well... I respect your decision, See you again!");
}
else
     alert("You have entered an invalid input");


if (wuGame2 === "1" ){
    alert("Your dynasty sustain another few more years and get destroy by Cao Cao. Wei have win the war");
     score += 1;
}
else if (wuGame2 === "2" ){
    alert("Zhou Yu have lost to Zhuge Liang in term of strategies as the result, your dynasty get destroy first, you end your time in history earlier");
    score -= 1
}
else if (wuGame2 === "3" ){
    alert("Well done, you have win the war and Wu have conquer the world. History have been rewrite.");
    score += 2;
}
else
     alert("You have entered an invalid input");





alert(name + " end of game with the score " + score);