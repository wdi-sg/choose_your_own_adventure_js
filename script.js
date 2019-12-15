console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   var output = "WOW SOMETHING HAPPENED";
//   return output;
// };

// 1. What is your name?
// 2. input name
// 3. Nice to meet you ${name}. What year would you like to go to? (YYYY)
// 4. >= 2015
//     I see you're a fan of Back to the Future 2. Would you rather deal with Biff or Griff? (B/G)
//     'B'iff -- Hmm interesting. Biff is angry and has a cane. Do you stand and fight or run away like a coward? (S/R)
//         'S'tand and fight -- Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.
//         'R'un like a coward -- You get away but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.
//     'G'riff -- Griff is asking you if you are in or out. What do you say? (I/O)
//         'I'n -- Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.
//         'O'ut -- Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of maure.
// 5. 1985-2014
//     Doc has already destroyed the Time machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?
//     Calvin Klein
//         Welcome to the future, Calvin Klein.
// 6. 1955-1984
//     I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment under the sea dance. What do you do? (Y/N/S)
//         'Y'es -- Creepy. I hope you have some backup plan in place to get out of this. Until then you're stuck in 1955.
//         'N'o -- Honorable. But this also means that your future Dad will never meet you Mom, and therefore you cannot exist.
//         'S'et her up with George -- Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.
// 7. < 1955
//     I see you're a fan of Back to the Future 3. You/ve run of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)
//         'H'orses -- Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.
//         'M'oonshine -- You'd better off drinking moonshine. Do not pass Go, do not collect $200. Stuck in 1855.
//         'T'rain -- Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)
//             'T'ake her -- Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.
//             'L'eave her -- Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.
var inputHappened = function(input) {};
var name = prompt("What is your name, adventurer?")

var yearChose = prompt("Good to meet you, ${name} What year would you like to go to? YYYY)");

if (Number(yearChose) >= 2015) {
    var BifforGriff = prompt("I see you're a fan of Back to the 'Future 2, would you rather deal with Biff or Griff? (B/G)");
};
if (BorG.toLowerCase() === "b") {
    var SorR = prompt("Hmm interesting. Biff is angry and has a cane. Do you stand and fight or run away like a coward? (S/R)");
};
if (SorR.toLowerCase() === "s") {
    var goodChoice1 = alert("Good Choice! Biff is old and feeble at this point. You push him over and he falls over a pile of manure.");
} else if(SorR.toLowerCase() === "r") {
    var badChoice1 = alert("You get away, but your future son Marty.Jr is heckled for the rest of his days for his dad's cowardice.");
} else if (BorG.toLowerCase() === "g") {
    var IorO = prompt("Griff is asking if you are in or out? (I/O)");
};
if (IorO.toLowerCase() === "i") {
    alert (
        "Bad call. Griff and his cronies rob the Valley Hill bank and frame you for it. No more time travel for you.");
} else if (IorO.toLowerCase() === "o") {
    alert(
        "Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.");
} else if (Number(yearChose) >= 1985 && Number(yearChose) <= 2014) {
    var CK1 = prompt(
        "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you want to go by till that time?");
};
if (CK1 === "Calvin Klein") {
    alert("Welcome to the future, Calvin Klein.");

} else { alert("${CK1} is a rather peculiar name, but it should do.");
} else if (Number(yearChose) >= 1955 && Number(yearChose) <= 1984) {
    var seaOption1 = prompt(
        "I see you're a fan of Back to the Future 1. Your future mom has just asked you to the Enchantment under the sea. (y/n)");

}
if (seaOption1.toLowerCase() === "y") {
    alert(
        "Creepy. I hope you have some backup plan in place to get you out of this. Until then you are stuck in 1955.");

} else if (seaOption1.toLowerCase() === "n") {
    alert(
        "Honorable. But this also means your future dad will not be able to meet your future mom, and therefore you cannot exist.")
} else if (seaOption1.toLowerCase() === "s") {
    alert(
        "Interesting. you set up an elaborate plan for your future dad to surprise your mom for beating you up");
} else {
    prompt("The game ends and you need to start over.");
} else if (Number(yearChose) < 1955) {
    var wildWildWest = prompt(
        "I see you are a fan of Back to the Future 3. You've run out of gas and can't get back to your own time. How do you choose your mode of transport? (Horse/Moonshine/Train)");
}
if (wildWildWest === "h") {
    alert (
        "Good idea but no. The time machine needs to get to 88 mph, 12 horse power ain't gonna cut it.");
} else if (wildWildWest = "m") {
    alert(
        "You'd be better off drinking the moonshine. Do not pass Go. Do not collect $200. Stuck in 1855.");
} else if (wildWildWest = "t") {
    var Clara = prompt(
        "Good call! This plan seems to be working. But wait. Clara wants to go back to the future you at the last moment. What do you do? (take her/leave her");
}
if (Clara.toLowerCase === "t") {
    alert(
        "Interesting choice. Unfortunately the Doc cannot grab clara and get back to the car in time. He ends up stayin with her in 1855.");
} else if (Clara.toLowerCase === "l") {
    alert(
        "Smart choice. Unfortunately the Doc is in love with Clara, and when he gets back to 1985, he becomes very depressed and commit suicide. Game Over! Please try again");
}