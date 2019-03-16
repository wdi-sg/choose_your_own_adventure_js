 //function to rstart page
 var reloadPage = function(place){
     location.reload(place)
     return reloadPage
 }



//Function for score
 var yourScore = function(score){
     alert(score);
     throw new Error("Game over! But Baltimore is screwed either way!");
 return yourScore;
 }


 //Function when cop does smooth-talk

 var smoothTalk = function(restart){
     alert("Great job McNulty you made him squeal");
     reloadPage();
     return smoothTalk;
 }

 //Function when cop does bang-bang

 var bangBang = function(restart){
     alert("Wow look at those guns go! Omar's kaput! You've got a mean streak McNulty");
     reloadPage();
     return bangBang;
 }


//Function when dealer chooses not to steal

 var nahMan= function(restart){
     alert("Great job McNulty you made him squeal");
     reloadPage();
     return nahMan;
 }

 //Function when dealer agrees to steal

 var sweetRevenge= function(restart){
     alert("Omar you too good at this man! Quick let's go before the cops come.");
     reloadPage();
     return sweetRevenge;
 }








