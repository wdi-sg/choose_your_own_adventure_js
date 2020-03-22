console.log("hello script js");
var output;
var output1;
var output3;
var output4;
var output5;
var wonMessage = "Congrats!! You won and saved Jumanji!! You're a superstar";
var errorMessage = "You failed to save Jumanji. You lost!!";
var level = 0;
var name = null;
var ready = null;
var quest = null;
var decide = null;
var fight = null;

var inputHappened = function(currentInput){
    //console.log(currentInput);
    if (level === 0){
       name = currentInput;
       output1 = "Hello " +  name + " Welcome to Jumanji. Would you like to play the game? Y:yes and N:no."
       //(A) A starter or (B) An entree or (C) A dessert";
       level++;
       return output1;
    }
    else if(level === 1){
        ready = currentInput;
        if(ready === "Y"){
            output2 = "Your quest is to find the foundation stone and save Jumanji. Do you want to travel by sea(S) or land(L)?";
            level++;
            return output2;
        }
        else{
            return errorMessage;
        }

    }
    else if(level === 2){
        quest = currentInput;
        if(quest === "L"){
            output3 = "Do you want to climb mountain(M) or cross bridge(B)?";
            level++;
            return output3;
        }
        else if(quest === "S"){
            output3 = "Do you want to swim(s) or use a boat(b)?";
            level++;
            return output3;

        }
        else{
            return errorMessage;
        }
    }
    else if(level === 3){
        decide = currentInput;
        if(decide === "M"){
            output4 = "Do you want to fight the lion(F) or flight(f)?";
            level++;
            return output4;
        }
        else if(decide === "B"){
            output4 = "Do you want to fight the Apes(A) or run(R)?";
            level++;
            return output4;
        }
        else if(decide === "s"){
            output4 = "Do you want to fight the shark(H) or get eaten(E)?";
            level++;
            return output4;
        }
        else if(decide === "b"){
            output4 = "Do you want to kill the crocodile(C) or jump into the water(J)?";
            level++;
            return output4;
        }
        else{
            return errorMessage;
        }
    }
    else if(level === 4){
        fight = currentInput;
        if(fight === "F"){
            return wonMessage;
        }
        else if(fight === "f"){
            return errorMessage;
        }
        else if(fight === "A"){
            return wonMessage;
        }
        else if(fight === "R"){
            return errorMessage;
        }
        else if(fight === "H"){
            return wonMessage;
        }
        else if(fight === "E"){
            return errorMessage;
        }
        else if(fight === "C"){
            return wonMessage;
        }
        else if(fight === "J"){
            return errorMessage;
        }
    }
    else{
        return errorMessage;

    }
  //return "SOMETHING HAPPENED";


};
/*var firstLevel = function(){
    if(ready === "Y"){
        output2 = "Your quest is to find the foundation stone and save Jumanji. do you want to travel by sea(S) or land(L)?";
        return output1;
    }
    else{
        return errorMessage;
    }
}*/