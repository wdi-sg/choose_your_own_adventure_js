var dialogue = ["Hi, what's your name? You will be tested for your sense of fashion in order to be Lady Gaga's stylist. Pls dress her up in what you think will look best on her.",
 "Choose a top \n [1]glitter top \n [2]blazer \n [3]sports bra",
 "Choose a bottom\n [1]Vege skirt\n [2]Sleep pants [3]Pink skirt",
 "Choose a hair\n [1]Silver Hair\n [2]Bow Hair\n [3]Pink hair",
 "Your score is "
 ];
var state =0;
var score=0;
var outcome=0;
display (dialogue[state]);

var inputHappened = function(currentInput){
if (state==3){
    if (currentInput=="1"||currentInput=="2"||currentInput=="3"){
     state=4;
     document.getElementById("input").value="";
        if (score>0 && score<10){
        return (dialogue[4]+ score+ " and you suck as a stylist")
      }
       else if (score>10 && score<50){
        return (dialogue[4]+ score+ " and you need to work harder")
      }
      else if (score>50){
        return (dialogue[4]+ score+ " so please work for us")
      }}
      }
  else if (state==2){
    if (currentInput=="1"){
     state=3;
     score+=80;
     document.getElementById("input").value="";
     return (dialogue[3]);
    }
    else if (currentInput=="2"){
     state=3;
     score+=50;
     document.getElementById("input").value="";
     return (dialogue[3]);
    }
    else if (currentInput=="3"){
     state=3;
     score+=2;
     document.getElementById("input").value="";
     return (dialogue[3]);
    }
  }
    else if (state==1){
   if (currentInput=="1") {
     state=2;
     score+=5;
     document.getElementById("input").value="";
     return (dialogue[2]);
   }
   else if (currentInput=="2") {
     state=2;
     score+=20;
     document.getElementById("input").value="";
     return (dialogue[2]);
   }
   else if (currentInput=="3") {
     state=2;
     score+=20;
     document.getElementById("input").value="";
     return (dialogue[2]);
   }}
 else if (state==0){
   state=1;
   score=0;
   document.getElementById("input").value="";
   return ("Hi " + currentInput + " "+ dialogue[state]);
 }}


