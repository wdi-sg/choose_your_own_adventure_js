console.log("hello script js");

var name = "";
var year = "";
var futurename = "";
var fan = "";

var inputHappened = function(currentInput){
  console.log( currentInput );

  // logic to store inputs
  if (currentInput != undefined) {
      if (this.name == "")
      this.name = currentInput;
    } else if (this.year == "") {
      this.year = parseInt(currentInput);
    } else if (this.year >=1985 && this.year <=2014) {
        if (this.futurename == "") {
        this.futurename = currentInput;
    } else this.futurename = currentInput;
    } else if (this.year >=1955 && this.year <=1984) {
        if (this.fan == "") {
            this.fan = currentInput;
        } else if (this.fan == "Y") {
            this.fan = currentInput;
        } else if (this.fan == "N") {
            this.fan = currentInput;
        } else {
            this.fan = currentInput;
        }
  }

  // logic to display next question
  var output = "";
  if (this.name == "") {
    output = "what is your name?";
  } else if (this.year == "") {
    output = "Nice to meet you, "+this.name+". What year would you like to go to? (YYYY)";
  } else if (this.year >=1985 && this.year <=2014) {
        if (this.futurename == "") {
        output = "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?";
        }else {
        output = "Welcome to the future, "+this.futurename+".";
        }
  } else if (this.year >=1955 && this.year <=1984) {
        if (this.fan == "") {
        output = "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)";
        }else {
            if(this.fan == "Y"){
            output = "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.";
            } else if (this.fan == "N"){
            output = "Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.";
            } else {
            output = "Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.";
            }
        }
  }
  return output;
};