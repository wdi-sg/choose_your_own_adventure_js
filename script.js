var inputHappened = function(currentInput){
    console.log( currentInput );

   const year = currentInput;

     if (year >= 2015) {
         message =  "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff?";
  } else if ( year <= 2014 && year >= 1985) {
         message = "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?";
  } else if (year <= 1984 && year >= 1955) {
         message = "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do?";
  } else if ( year < 1955) {
        message = "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine?"
  }

 return message;


}