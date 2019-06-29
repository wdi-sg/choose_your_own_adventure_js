console.log("hello script js");

//declare 5 choices user has to choose from
var year = [2015, 2020, 2025, 1995, 3005];
var yearChose = [];


display("What is your name");

var inputHappened = function(currentInput){
    //when user enters name, give 5 choices of year to go to
    display(`Welcome ${currentInput}! \nWhich year would you like to travel to? \n1. 2015 \n2.2020`);
    document.getElementById('input').value='';
    // var question2 = true;
    // //loop through year array to check user input
    // if (question2 = true) {
        if (currentInput === 2015) {
            display(`You are in the year ${currentInput}`);
        } else if (currentInput < 2014 || currentInput >= 1985) {
            display(`moving back to ${currentInput}`)
        } else {
            return;
        }
    // }











    // for (i=0; i < year.length; i++) {
    //     if (parseInt(currentInput) === year[i]) {
    //         console.log("year chose is" + year)
    //         yearChose.push(year[i]);
    //         console.log("year chose is" + year);
    //     }
    // return;
    // }

    //if user chooses 1, give two choices of characters to deal wth














};