// console.log("Let the adventures begin!");

var Me = prompt("What is your name?");
// console.log(Me);

var q0 = prompt("Give me the names of 4 friends, only the first 4 characters of their names please each separated by a space.");
var friends = [];
var friends = q0.split(" ");

// console.log(friends);

var randomIndex = Math.floor(Math.random()*friends.length);
var dead = friends[randomIndex];

// console.log(randomIndex);

friends.splice(randomIndex,1);

var killer0 = friends.pop();
var killer = killer0.toLowerCase();

// console.log(killer);

var killer1 = killer.toUpperCase();
var killer1 = killer1.split("");

// console.log(killer1);


alert("Your friend "+ dead +" is dead. All of you should go to their house.");

var q1 = prompt("Should you '(C)all the Police or (G)o to the house yourself?");

if (q1 === "G") {
    alert("Lets get going to "+ dead+"'s" + " house. Let the adventure begin!");
} else if (q1 === "C") {
    alert("What if its a prank!");
    var q2 = prompt("Lets try again - Should you (C)all the Police or (G)o to the house yourself?");
} else {
    alert("Lets get going to "+ dead+"'s" + " house. Let the adventure begin!");
}

if (q2 === "C") {
    alert("You really have no sense of adventure! Best you Call the police and lock yourself at home. You could be next! Bye!!");
    exit();
} else {
    alert("Lets get going to "+ dead+"'s" + " house. Let the adventure begin!");
};

alert("Let's begin the adventure!" + " You are going to have to help solve a few challenges to get clues to solve the death of " + dead + ". Get ready won't be easy!");

var q3 = prompt("What always ends Everything?");

var q31 = q3.toLowerCase();

if (q31 === "g") {
    alert("Well done! Take this as your signal that you really have to think outside the box to solve these riddles. You might not be dealing with the concept of 'everything', but rather the word 'everything'.");
    alert("Keep this alphabet in mind for later: "+killer1[2]);
} else {
    alert("Time to give up " + Me + ". It's just not your day!");
    exit();
};

alert("Time to move on to the next level");

var age = prompt("What is your age?");

// console.log(age);

if (age <= 30) {
    var q5 = prompt("Jack is looking at Anne, but Anne is looking at George. Jack is married, but George is not. Is a married person looking at an unmarried person?" + " - Yes / No / Cannot determine");
} else if (age >30) {
    var q5 = prompt("A slippery sloth climbs six feet up a utility pole during the day, then slides back down five feet during the night. If the pole is 30 feet high and the sloth starts from the ground (zero feet), how many days does it take the sloth to reach the top of the pole?");
}

// console.log(q5);

var nextLevel;

if (q5.toLowerCase() === "yes") {
    alert("Well done, you are on a role.");
    alert("Keep this alphabet in mind for later: "+killer1[3]);
    var nextLevel = "yes";
} else if (q5 === "25") {
    alert("Well done, you are on a role.");
    alert("Keep this alphabet in mind for later: "+killer1[3]);
    var nextLevel = "yes";
} else {
    alert("Thought you were better than this!");
    alert("Looks like " + dead +"s death will go unsolved, bye!");
    var nextLevel = "no";
    exit();
};

// console.log(nextLevel);

alert("Moving along just fine, let's see what the next level holds!");

var q6;
var q7;

if (nextLevel === "yes" && age <= 30) {
    var q6 = prompt("I have keys but no locks. I have a space but no room. You can enter, but can't go outside. What am I?");
} else if (nextLevel === "yes" && age >30) {
    var q7 = prompt("If you have me, you will want to share me. If you share me, you will no longer have me. What am I?");
};

if (q6 == "keyboard") {
    alert("Well done " + Me + " You are almost there.");
    alert("Keep this alphabet in mind for later: "+killer1[1]);
    var nextLevel1 = "yes";
} else if (q7 == "secret") {
    alert("Well done " + Me + " You are almost there.");
    alert("Keep this alphabet in mind for later: "+killer1[1]);
    var nextLevel1 = "yes";
} else {
    alert("That is a shame!");
    alert("May " + dead +"'s soul rest in peace, bye!");
    var nextLevel1 = "no";
    exit();
};

// console.log(nextLevel1);

alert("Solving a mystery was never going to be easy, you have done well. Let's see what the last hurdle holds");

var q8;
var q9;

if (nextLevel1 === "yes" && age <= 30) {
    var q8 = prompt("If 3 cats can kill 3 rats in 3 minutes, how long will it take 100 cats to kill 100 rats? (just the number will do");
} else if (nextLevel1 === "yes" && age >30) {
    var q9 = prompt("I had a wad of money in my pocket. I gave half away and of what remained, I spent half. Then, I lost five dollars. That left me with just five bucks. How much money did I start with? (just the number will do");
};

if (q8 === "3") {
    alert("Well done " + Me +"!");
    alert("Keep this alphabet in mind for later: "+killer1[0]);
    var nextLevel2 = "yes";
} else if (q9 === "40") {
    alert("Well done    " + Me +"!");
    alert("Keep this alphabet in mind for later: "+killer1[0]);
    var nextLevel2 = "yes";
} else {
    alert("oh no!, too bad but you came this far kudos to you!");
    alert(dead +"'s gone, its time you handed this over to the professionals");
    var nextLevel2 = "no";
    exit();
};

// console.log(nextLevel2);

alert("I hope you were smart enough to call the police by now!.");

var q10 = prompt("Who do you think killed " + dead + "?");
if (q10 === killer) {
    alert("You are a genius! You might want to consider filling in for Sherlock Holmes, Scotland Yard has been desperate for someone like you!");
} else {
    alert("You tried, you can't win it all, but do pass on the alphabets to the police!");
}