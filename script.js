var question1 = function(name){

  return "Nice to meet you," + name + "What year would you like to go to? (YYYY)";
};

var name=document.getElementById("input").value;

var answer2 = "";
year = 0;
var question2 = function(year){
 if (year >= 2015 ){
    ansuwer2 = "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)";
 }
  else if (year >= 1985 && year < 2015 ){
    ansuwer2 = "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?";
 }
  else if (year >= 1955 && year < 1985 ){
    ansuwer2 = "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)";
 }
  else if (year >= 1 && year < 1955 ){
    ansuwer2 = "I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)";
 }
  else {
    ansuwer2 = "year is undefined and the time machine self-destructived";
 }
  return answer2 ;
}

var question3For2015 = function(letter){
 if (letter == B ){
    ansuwer3 = "Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)";
  if (letter == G ){
    ansuwer3 = "Griff is asking you if you are in, or out. What do you say? (I/O)";
 }

 //need to .upper from user input to ensure letter is uppercase.
 var question4For2015 = function(letter){
 if (letter == S ){
    ansuwer3 = "Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.";
 }
  else if (letter == R ){
    ansuwer3 = "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.";
 }
   else if (letter == I ){
    ansuwer3 = "Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.";
 }
   else if (letter == O ){
    ansuwer3 = "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.";
 }



