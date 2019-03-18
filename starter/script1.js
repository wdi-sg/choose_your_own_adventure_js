var counter = 0;
var output;

var count = function(){
  counter++;
  console.log(counter + ' times.');
    if (counter == 3) {
        clearInterval(oneSecondIntervalReference);
        alert("This is the end of the road")
        var choose1= prompt("Choose 1) Pack your bags and head to the Savage Reservations! \n 2) Pop a Soma and get ready for a new week.  ")
         console.log(choose1);
    }
    output = choose1;
    return  output;
};


var oneSecondIntervalReference = setInterval(count, 1000);

//1. start the game with setInterval function

var testPrompt = alert("This sentence will \n spill over.");



### Rules
* Any path the user goes down must ask them at least **three** questions.
* There must be a minimum of **seven** total destinations the user could arrive at based on their responses.
* For **at least one** of the questions asked, there must be **more than two possible user responses**.
* Your code must make use of **both string and number user inputs**.
* The game should work without the dev tools console open- no `console.log`!
* You can only use `prompt`, `alert`, and `confirm`

1.