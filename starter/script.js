// put code here!
// SAW 60
//enter name
var help = 0
var name = prompt("Enter your name to begin");
alert (" Hi " + name + (" My name is Jigsaw"));
// var points = {

//     totalPoints: 0
// }

// function addTen (quantity){
//     quantity += 10;
//     return quantity
// }

// function minusFive (quantity){
//     quantity -= 5;
//     return quantity
// }

  //asking yes or no
 var asking = prompt(" Would you like to play a game ? [Yes] or [No] " ).toLowerCase();

switch(asking){
    case "yes":
     // points.totalPoints = addTen(totalPoints);
    alert(" We are going to have fun !" );
    break;
    case "no":
    alert(" You DIED ");
    break;
    default:
    alert(" You did not answer my question ")


};


//scene 1
     var first = alert( name + " You woke up sitting on the chair with a bear trap on your face.")
     var first = prompt(" What would you do ? Press [E] to escape or [W] to wait for help ? ").toLowerCase();


    switch(first){
        case "e":{
        alert( " You made a smart choice ");}
        break;
        case "w":{
        alert(" You DIED ");}
        break;
        default:
            alert(" You barely made out alive");
        }



    // help++;

    // while(help === 1){
    //     if(first == "e") {
    //     // points.totalPoints = addTen(points.totalPoints)
    //     alert(" Congratulation You Made A Smart Choice ");}
    // else if(first == "w") {
    //     // points.totalPoints = minusFive(points.totalPoints)
    //     var first =
    //     alert(" You DIED ");}
    // else {
    //     // points.totalPoints = minusFive(points.totalPoints)
    //     alert( " Almost got killed by the bear trap and  found 2 rooms ahead ");

    // };
    // };
    //   first =prompt(" Barely made it out alive");
//to the next rooms
    var rooms = prompt(" Hi " + name + " there is 2 rooms in front of you. One room is Full of Snakes and another is a Room Full Of Shit. [Snakes] or [Shit] ").toLowerCase();
//user must choose shit or snakes
    switch(rooms){
        case "snakes":{
        alert(" Good Choice :D")}
        break;
        case "shit":{
        alert( " You are disgusting");}
        break;
        default:{
            alert( "You went ahead to the snake room");
        }

    }
       if (rooms === "snakes")
        var snake =
       prompt( name + " As you can see there is no snakes in here. But 2 of your best friends. Jake and Malcolm. They are being held in a cell and on top of them are poisonous snakes. One of them has an affair with your wife. You will get the key after you choose ONE to Survive. The other one will be kill by snakes [Jake] or [Malcolm]").toLowerCase();
      if ( snake === "malcolm"){
        alert( "You are right. It is Jake that had an affair with your wife. Jake was kill by poisonous snakes");}
    else if (snake === "jake") {
            alert(" You chose the wrong one. It is not Malcolm. It was Jake. Malcolm is killed by poisonous snakes.");}
           //  if("yes"){
           //      alert(" Jake was kill by" + name " because of what he did");}
           // else if("no"){
           // alert(name + " Jake did not see eye yo eye and left together "); }


 if(rooms === "shit")
    var pool =
    prompt( name + " You are very lucky to choose this room. All you need is to find the key in the pool of shit. [Dive] or [Reach] into the pool ").toLowerCase();
    if(pool === "dive"){
        alert( " Found the key in 5mins ! ");}
    else if(pool === "reach"){
        alert(" Found the key after 25mins")
    }

   // var snake = prompt(" You still can kill him. Use [A] for chainsaw or [B] for rifle );
   var escape = snake && pool
    if (snake) { alert( " You both, there is a hidden door on the floor. You can exit this place out. THANKS FOR PLAYING ! ");}
    // if(snake === "jake"){
    //     alert(name + " killed " + snake " and escape the room alone while grieving for Malcolm. THANKS FOR PLAYING! ")};
  else if (pool) { alert( name + " You really love shit. I am done with you. Below the pool of shit. There is a hidden door. Use the Key and escape this place. THANKS FOR PLAYING ");
}









    //     }

    //   }


    //     }
    // }

    // swicth(rooms){
    //     case "snakes":{
    //        points.totalPoints = addTen(points.totalPoints);
    //        alert(" Smart Choice " + name);
    //        break;
    //     case "shit":{
    //         points.totalPoints = minusFive(points.totalPoints);
    //         alert(" You are disgusting");
    //        break;
    //     default:
    //     alert(" When ahead to the snake room ");
    //     };



    //     }
    // }