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

var show = document.getElementById("show");                    // show outcome in box

bolognese.addEventListener("click", start1()); 
baked.addEventListener("click", start2());  
// avocado.addEventListener("click", start3());  
// roasted.addEventListener("click", start4());  
// half.addEventListener("click", start5());  
// mushroom.addEventListener("click", start6());  
// aglio.addEventListener("click", start7()); 
// sumatran.addEventListener("click", start8());  
// ginger.addEventListener("click", start9());  
// random.addEventListener("click", start10());  

addEventListener('change', function(){})

function start1(){
    show.innerText = (
    "choose 5 ingredients.. macaroni/lemon/tomatoes/ginger/minced meat/pepper/salt"
    )}
    
function start2(){
  show.innerText = (
    "choose 3 ingredients.. salmon/lemon/tomatoes/ginger/minced meat/pepper/salt/butter/garlic"
    )}

function confirm() {
  var x = document.getElementById("baked");
  if (display()) {
     console.log("yes") ;
  } else {
    console.log("no") ;
  }
 }
  

// -------------------- function confirm() {
//   var x = document.getElementById("baked");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// ------------------(Math.random()*1) for select one randomly

// ------------------- EVENT LISTENERS 
// document.querySelector('#input').addEventListener('change', function(event)
// {
//   var currentInput = event.target.value;
//   var output = currentInput ;
//   display(output);
//   if(currentInput === "1"){
//     console.log("yes")  
//     }
//   else{
//     console.log("no")
//     }
// });

   


var inputHappened = function(currentInput){
  if(inputHappened === "1"){
    console.log('hi')
  }
  else{
    console.log('bye')
  };    
  return "SOMETHING HAPPENED";
}
console.log("hello script js");


 var display = function( data ){
        var displayElement = document.querySelector('#output');
        // get rid of the entire contents
        displayElement.innerHTML = "";
        // put the data into the div
        output.innerText = data;
      };

      document.querySelector('#input').addEventListener('change', function(event){
        var currentInput = event.target.value;
        var result = inputHappened(currentInput)
        display( result );
      })