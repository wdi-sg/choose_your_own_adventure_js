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

// var food = document.getElementById('food').value;
// var dishh;
// if(food =='Fixed Rate'){
//     rate_value = document.getElementById('avocado').value;
// }else if(rates =='Variable Rate'){
//     rate_value = document.getElementById('roasted').value;
// }else if(rates =='Multi Rate'){
//     rate_value = document.getElementById('r3').value;
// }  
// document.getElementById('results').innerHTML = rate_value;
 
 var output = document.querySelector('#output');   
 var results  = document.querySelector('#results');  
 
 function displayI(xx){
   output.innerText = xx ;
}
 function displayR(xx){
   results.innerText = xx ;
}

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
var sure = "Are you sure"

// console.log("choose 5 ingredients..\nmacaroni/lemon/tomatoes/ginger/minced meat/pepper/salt")  
// document.querySelector('bolognese').addEventListener('click', function(event){
//   console
// })


// "milk"||"avocado"||"tomatoes"||"minced meat"||"sugar"
// "cashew nuts"||"salt"||"rocks"||"minced meat"||"cumin"||"salt"
// "water"||"salt"||"rocks"||"eggs"||"sugar"||"salt  "
// "glutinous rice"||"water"||"couscous"||"eggs"||"mushroom"||"pessimon "
// "water"||"glutinous rice"||"spaghetti"||"eggs"||"garlic"||"red pepper flakes "
// "beef"||"lime leaves"||"galangal"||"rempah"||"chilli"
// "seasame oil"||"garlic"||"pork"||"beehoon"||"chilli"||"ginger "

 
// var input2 = document.querySelector('#input2').value
// console.log(input2)

document.querySelector('#input2').addEventListener('change', function(event){
  if(state==1){
    var currentInput = event.target.value;
    console.log(currentInput)
    if(currentInput === "tomatoes"||"ginger"||"minced meat"||"salt"||"butter"||"fettuccine"){
        displayR(correct)
    }
    else if(currentInput === "salmon"||"lemon"||"minced meat"||"ginger"||"pepper"||"salt"||"butter"){
        displayR(baked)
    }
    else if(currentInput === "Avocado"){
        displayR(avocado)
    }
    else if(currentInput === "Roasted"){
        displayR(roasted )
    }
    else if(currentInput === "Half"){
        displayR(half)
    }
    else if(currentInput === "Mushroom"){
        displayR(mushroom)
    }
    else if(currentInput === "Aglio"){
        displayR(aglio)
    }
    else if(currentInput === "Sumatran"){
        displayR(sumatran)
    }
    else if(currentInput === "Ginger"){
        displayR(ginger)
    }
    else{
        displayR("are you sure")
    }
  }
  else{
  displayR(invalid)  
  }
})

document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;
  //-------------------------------------------------------------------------------------BOLOG
  if(state === 0 ){
        if(currentInput === "Bolognese"){
            displayI(bolog)
            state = 1
        }
   //-------------------------------------------------------------------------------------BAKED
        else if(currentInput === "Baked"){
            displayI(baked)
            state = 1
        }
  //-------------------------------------------------------------------------------------AVOCADO
        else if(currentInput === "Avocado"){
            displayI(avocado)
            state = 1
        }
  //-------------------------------------------------------------------------------------ROASTED
        else if(currentInput === "Roasted"){
            displayI(roasted)
            state = 1
        }
    //-------------------------------------------------------------------------------------HALF
        else if(currentInput === "Half"){
            displayI(half)
            state = 1
        }
    //-------------------------------------------------------------------------------------MUSHROOM
        else if(currentInput === "Mushroom"){
            displayI(mushroom)
            state = 1
        }
    //-------------------------------------------------------------------------------------AGLIO
        else if(currentInput === "Aglio"){
            displayI(aglio)
            state = 1
        }
    //-------------------------------------------------------------------------------------SUMATRAN
        else if(currentInput === "Sumatran"){
            displayI(sumatran)
            state = 1
        }
    //-------------------------------------------------------------------------------------GINGER
        else if(currentInput === "Ginger"){
            displayI(ginger)
            state = 1
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

   