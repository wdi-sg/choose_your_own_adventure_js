var ans = "";
var counter = 0;

var inputHappened = function(currentInput){
    console.log(counter);
  if (counter == 0) {
    if (currentInput.toUpperCase() == "Y" || currentInput.toUpperCase() == "N" ){
        ans += (currentInput.toUpperCase());
        display("Do you prefer Western or Asian food? (W/A)")
        counter += 1;
    } else {
        display("Please type Y or N. Are you in a rush?");
    }
  } else if (counter == 1){
    if (currentInput.toUpperCase() == "W" || currentInput.toUpperCase() == "A" ){
        ans +=(currentInput.toUpperCase());
        display("Do you prefer healthy food? (Y/N)")
        counter += 1;
    } else {
        display("Please type W or A. Do you prefer Western or Asian food?");
    }
  } else{
    if (currentInput.toUpperCase() == "Y" || currentInput.toUpperCase() == "N" ){
        ans +=(currentInput.toUpperCase());
        console.log(ans);
        if (ans == "YWY"){
            display("Subway");
        } else if (ans == "YWN"){
            display("Macdonald");
        } else if (ans == "YAY"){
            display("Fish soup");
        } else if (ans == "YAN"){
            display("Chicken rice");
        } else if (ans == "NWY"){
            display("Salad");
        } else if (ans == "NWN"){
            display("BBQ");
        } else if (ans == "NAY"){
            display("Herbal soup");
        } else if (ans == "NAN"){
            display("Zi Char");
        }
    } else {
        display("Please type Y or N. Do you prefer healthy food?")
    }
  }




};