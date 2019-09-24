console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   var output = "WOW SOMETHING HAPPENED";
//   return output;
// };
// var name = prompt("What is your name?")

var trackcounter = 0;

var inputHappened = function(currentInput){
    var parseInput = parseInt(currentInput)
    if(trackcounter === 3 && parseInput === 9){
        var output = "You ate the apple and you died ! Game Over Man!!!";
        return output;
    }
    else if(trackcounter === 3 && parseInput === 7){
        trackcounter ++;
        var output = " You ran away ! What a coward!! You proceeded down the path and came across small child crying. Talk to her(15) Ignore her(16)";
        return output;
    }
    else if(trackcounter === 3 && parseInput === 8){
        trackcounter ++;
        var output = "You went to help her but a huge pack of werewolves came out of nowhere and devoured you and the old lady! Game Over Man!!!";
        // if(currentInput === "reload"){
        //     location.reload();
        // }
        return output;
    }
    else if(trackcounter === 2 && parseInput === 5){
        trackcounter ++;
        var output = " You attacked him and he died in 1 stroke? Seriously? You proceeded down the road and see a treasure chest!! Do you choose to open it? Yes?(11) No(12) ";
    }
    else if(trackcounter ===2 && parseInput === 6){
        trackcounter ++;
        var output = "You talked to him and found out that he was ill. You just happened to have a potion that can heal him. Do you want to give it to him? Yes?(13) No?(14)";
        return output;
    }
    else if(trackcounter === 2 && parseInput ===3){
        trackcounter ++;
        var output = "You decided to run pass her and suddenly a werewolf came out of the forest and attacked her! What will you do?!! Run away yourself(7), Help her!!(8)";
        return output;
    }else if(trackcounter === 2 && parseInput === 4){
        trackcounter ++;
        var output = "You talked to her and she gave you an apple. Do you want to eat it? Yes(9) or No(10) ";
        return output;
    }
    else if(trackcounter === 1 && parseInput === 1){
        trackcounter ++;
        var output = "You meet an old lady on the road. What do you do? Run pass her(3) , Talk to her(4)";
        return output;
    }else if(trackcounter === 1 && parseInput === 2){
        trackcounter ++;
        var output = "You gotten a sword!!!! You proceed further down the road and see a vampire! What do you choose? Fight(5), talk to him(6)";
        return output;
    }else{
    trackcounter === 0;
    trackcounter ++;
    console.log (trackcounter);
    var output = "You are at a crossroad, which way do you choose? Left(1) or Right(2)";
    return output;
}
}