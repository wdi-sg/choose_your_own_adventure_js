// put code here!

//console.log("hello");

// There must be a minimum of seven total destinations the user could arrive at based on their responses.

// For at least one of the questions asked, there must be more than two possible user responses.

// Your code must contain at least one loop.

var score = [];

var playerAge = prompt('What year were you born YYYY?');
if (playerAge > 2005) {
    alert('You must be over 13 years old to play this game.');
}
else if (playerAge < 2005) {
    var playerName = prompt('What is your name?');
    alert('Welcome ' + playerName);
    var rapper = prompt('Choose a rapper: (a) Biggie (b) Tupac');
}

// Any path the user goes down must ask them at least three questions.

// Biggie

if (rapper === 'a') {
    var party = prompt(playerName + ', do you want to throw a party? (a) Yes (b) No');
}

if (party === 'b') {
    alert('Parties are just a distration, lets go to the studio and put in work');
    score.push(1);

} else if (party === 'a') {
    var invite = prompt('Lets get crunk. Tupac is in town should we invite him? (a) Yes (b) No');
    score.push(2);
}

// Biggie Part II

if (invite === 'b') {
    alert('Tupac has been acting paranoid, its best to keep our party on the DL');
    score.push(1);

} else if (invite === 'a') {
    alert('Tupac is a homie, we have to be careful not to invite his enemies');
    score.push(2);
}

// Biggie Part III

if (invite === ('a' || 'b') ) {
    var gunShots = prompt('Gun shots fire! What do you do? (a) Run (b) Call 911 (c) Fight back');
}
if (gunShots === 'a') {
    alert('Lets run! Oh no! Tupac is shot and he thinks its us! The saga continues...');
    score.push(1);

} else if (gunShots === 'b') {
    alert('Oh no! Tupac is shot. Popo is here and theyll sort it out.');
    score.push(2);

} else if (gunShots === 'c') {
    alert('Oh no! Tupac is shot. Lets fight back, Tupac will surely know it wasnt us.');
    score.push(3);
}

// Tupac

if (rapper === 'b') {
    var newYork = prompt(playerName + ', my manager wants me to get more exposure on the east coast, should I fly to NYC? (a) Yes or (b) No');
}

if (newYork === 'b') {
    alert('Why go to NYC? When California knows how to party');
    score.push(1);

} else if (newYork === 'a') {
    var hitUp = prompt('Should we hit up Biggie and see whats going on? (a) Yes (b) No');
    score.push(2);
}

// Tupac Part II

if (hitUp === 'b') {
    alert('We need to stay focus, hanging out with Biggie will only bring me trouble');
    score.push(1);

} else if (hitUp === 'a') {
    alert('As they say, work hard, play hard. Best believe Im hitting up Biggie!');
    score.push(2);
}

// Tupac Part III

if (hitUp === ('a' || 'b') ) {
    var shot = prompt('Gun shots fire! Oh no, Ive been hit. Who was behind it? (a) Random robbery (b) Biggie Paid someone (c) One of my enemies');
}
if (shot === 'a') {
    alert('I guess its expected in NYC, I should be less flashy with my chains');
    score.push(1);

} else if (shot === 'b') {
    alert('This means war!');
    score.push(2);

} else if (shot === 'c') {
    alert('Biggie and Puffy will handle them, they run NYC.');
    score.push(3);
}

// Score

for (i = 0; i < score.length; i++) {
    alert('Score: ' + score.length);
}

// Your code must make use of both string and number user inputs.