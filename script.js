var bolognese = document.getElementById("bolognese"); 
var baked = document.getElementById("baked");  
// var avocado = document.getElementById("avocado");  
// var roasted = document.getElementById("roasted");  
// var half = document.getElementById("half");  
// var mushroom = document.getElementById("mushroom");  
// var aglio = document.getElementById("aglio"); 
// var sumatran = document.getElementById("sumatran"); 
// var ginger = document.getElementById("ginger"); 
// var random = document.getElementById("random"); 


// bolognese.addEventListener("click", start1()); 
// baked.addEventListener("click", start2());  
// avocado.addEventListener("click", start3());  
// roasted.addEventListener("click", start4());  
// half.addEventListener("click", start5());  
// mushroom.addEventListener("click", start6());  
// aglio.addEventListener("click", start7()); 
// sumatran.addEventListener("click", start8());  
// ginger.addEventListener("click", start9());  
// random.addEventListener("click", start10());  

 var output = document.querySelector('#output');   
 var results  = document.querySelector('#results');  
 
 function displayI(xx){
   output.innerText = xx ;
}
 function displayR(xx){
   results.innerText = xx ;
}
// display(currentInput);              // ------ display current input

// function start1(){
//     show.innerText = (
//     "
//     )}
    
// function start2(){
//   show.innerText = (
//   )}

var state = 0
var invalid = "Input Invalid, choose dish again"
var bolog = "choose ingredients.. \n tomatoes / ginger / minced meat / salt / butter / fettuccine"
var baked = "choose ingredients.. \n salmon / lemon / minced meat / ginger /  / pepper / salt / butter"
var avocado = "choose ingredients.. \n milk / avocado / tomatoes / minced meat / sugar"
var roasted = "choose ingredients.. \n cashew nuts / salt / rocks / minced meat / cumin / salt"
var half = "choose ingredients.. \n water / salt / rocks / eggs / sugar / salt  "
var mushroom = "choose ingredients.. \n water / glutinous rice / couscous / eggs / mushroom / pessimon "
var aglio = "choose ingredients.. \n water / glutinous rice / spaghetti / eggs / garlic / red pepper flakes "
var sumatran = "choose ingredients.. \n beef / lime leaves / galangal / rempah / chilli  "
var ginger = "choose ingredients.. \n seasame oil / garlic / pork / beehoon / chilli / ginger "
var correct = "Congrats, you are a master chef! or so you think.."
// console.log("choose 5 ingredients..\nmacaroni/lemon/tomatoes/ginger/minced meat/pepper/salt")  

// document.querySelector('bolognese').addEventListener('click', function(event){
//   console
// })

var input2 = document.querySelector('#input2').value
//    console.log(input2)
document.querySelector('#input2').addEventListener('change', function(event){
  if(input2 === "Bolognese"){
    var currentInput = event.target.value;
    if(currentInput === "fettuccine"||"tomatoes"||"minced meat"||"salt"||"pepper"){
      displayR(correct)            
    }
    else{console.log("hi")
    }
  }
  else if(input2 === "Baked"){
    if(currentInput === "fettuccine"||"tomatoes"||"minced meat"||"salt"||"pepper"){
      displayR(correct)                
    }
    else{console.log("hi")
    }
  }
  else{
    displayR("are you sure")
  }
})

document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;
  //-------------------------------------------------------------------------------------BOLOG
  if(state === 0 ){
        if(currentInput === "Bolognese"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
   //-------------------------------------------------------------------------------------BAKED
        else if(currentInput === "Baked"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
  //-------------------------------------------------------------------------------------AVOCADO
        else if(currentInput === "Avocado"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
  //-------------------------------------------------------------------------------------ROASTED
        else if(currentInput === "Roasted"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
    //-------------------------------------------------------------------------------------HALF
        else if(currentInput === "Half"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
    //-------------------------------------------------------------------------------------MUSHROOM
        else if(currentInput === "Mushroom"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
    //-------------------------------------------------------------------------------------AGLIO
        else if(currentInput === "Aglio"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
    //-------------------------------------------------------------------------------------SUMATRAN
        else if(currentInput === "Sumatran"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
    //-------------------------------------------------------------------------------------GINGER
        else if(currentInput === "Ginger"){
            displayI("choose..fettuccine/tomatoes/minced meat/salt/pepper")
        }
        else{displayI(invalid)
        }
  }
  else{displayI(invalid)
  }
})


// -------------------- function confirm() {
//   var x = document.getElementById("baked");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// ------------------(Math.random()*1) for select one randomly

   