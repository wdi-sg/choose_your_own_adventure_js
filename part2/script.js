console.log("hello script js");
var status = "getting name";
var username;

var outcomes = {
    coldStorage: {
        beginning: "You have chosen to go to Cold Storage. You see that half the aisles are empty...\n\n But wait! There it is! The most incredible item of all...the creme de la creme of panic bought goods - A whole bundle of toilet paper. What do you do?\n\n Do you: Sprint over? Or walk over calmly? (Please type - Sprint / Walk)",
        secondStage: {
            "gets to toilet paper in time": "You got there in time! Beating out a frail old lady. She seems really sad though. Do you: Give her the toilet paper? Walk away triumphantly? Or do a happy dance in front of her (Please type - Give / Walk Away / Dance)",
            "fails to get to toilet paper": "Your calmness has not paid off. A vivacious old woman steals in front of you at the last second and grabs the bundle for herself. You walk away with sadness in your eyes, vowing to yourself that next time, the very next time you see a beautiful bundle of toilet paper, you will not hold back.\n\nThe End."
        },
        thirdStage: {
            give: "The old lady beams with joy as you put the toilet paper in her hands. Meanwhile, Prime Minister Lee Hsien Loong was nearby and had witnessed your incredible act of charity. He wishes to commend you publicly. \n\nThe next day, you appear on TV for the first time. You are hailed as a national hero, a Singapore icon.\n\nThe End.",
            "walk away": "As you walk away with a charismatic swagger, head held high, disaster strikes! You slip on a puddle of (hopefully not mucus), and fall on your backside! The toilet paper bundle flies high up in the air.\n\nAt this moment, you realise the frail old lady has suddenly begun sprinting towards you. Her crooked posture and frail bones seem to have been suddenly replaced with Usain Bolt-like muscles. Once in range, the old lady manages to leap incredibly into the air, plucking the toilet paper out of the sky, looking like Michael Jordan in 1996.\n\nBefore you realise, she has landed effortlessly in front of you with all the poise of a gymnastic swan. She quickly flashes you a grin and returns to old lady mode, toddling off towards the cashier. You are left on the floor, sad and beaten.\n\nThe End.",
            dance: "Your dance has infuriated the old lady. Her anger is mirrored in the mob that has begun to gather around her. Everybody wants what you have - the toilet paper bundle. One-by-one, like crazed zombies, they rush towards you, diving towards your prized possession.\n\n Within seconds you find yourself grappling with an evil horde of shoppers. Their collective body odour has begun to overpower your senses. You collapse to the floor.\n\n...\n\nYou wake up hours later in the same aisle you were in. Except that you have lost your pride, your dignity, and certainly your toilet paper. This was not a good day.\n\nThe End."
        }
    },
    fairPrice: {
        beginning: "You have chosen to go to the local FairPrice...and things are absolutely crazy over here. Masses of humans are crawling everywhere, scrambling for all sorts of items. You feel yourself getting caught up in the frenzy, and have decided that you MUST buy something. \n\nWhat do you get? (Please type - Toilet Paper / Hand Sanitizer / Canned Food)",
        secondStage: {
            "toilet paper": "They have run out of toilet paper. The staff at fairPrice saw that you were going to try and get some, and they give you disapproving, judgy looks. You walk away shamefully, not least because you remembered you have plenty of toilet paper at home.\n\nThe End.",
            "hand sanitizer" : "There are a few bottles left! You gleefully grab as many as you can, checking your left and right to see if you have any competition. As you walk to the checkout counter though, you see that the queue is super long. Do you give up, or patiently wait in queue? (Please type - Give up / Wait)",
            "canned food" : "There is plenty of canned food left. For some reason, people don't seem to be buying that much of it. You get a few cans calmly. As you walk to the checkout counter though, you see that the queue is super long. Do you give up, or patiently wait in queue? (Please type - Give up / Wait)"
        },
        thirdStage: {
            "give up": "You sigh with frustration and walk away from the queue. This whole trip has been a giant waste of time. You go home disappointed.\n\nThe End.",
            wait: "You decide to patiently wait. After many hours...\n\nYou reach the front of the queue! You happily pay for your stuff, and go home a successful panic-buyer.\n\nThe End."
        }
    },
    shengSiong: {
        beginning: "You have chosen to go to your local Sheng Siong...to your surprise, the shoppers here are beautifully calm. The look like a paragon of peacefulness, going about their shopping in an unaffected, almost bored way. You begin to calm down yourself, and decide to go check out the shelves. \n\nDo you go to the Meat and Dairy Aisle? Or the Vegetable aisle? (Please type - Meat and Dairy / Vegetable)",
        secondStage: {
            "meat and dairy": "You get to the meat and dairy aisle and you find the most gorgeous cut of wagyu beef, as well as a litre of your favourite milk. However, you witness an argument between a shopper and a Sheng Siong employee - it seems the shopper isn't being terribly nice. Do you step in and stand up for the employee? or just ignore the situation? (Please type - Step In / Ignore)",
            "vegetable": "Great choice. You amble down to the vegetable aisle and find a beautiful bak choy. As you are about to leave though, a Yakuza-looking dude spots your lump of bok choy and asks if he can buy it off you for $100,000. He says its a very special piece to him. What do you do? Do you sell it? or Keep it for yourself (Please type - Sell / Keep)"
        },
        thirdStage: {
            "step in": "You heroically step in and stand up for the employee, telling off the rude shopper. 10 seconds into your lecture on the importance of politeness, you see an even better cut of wagyu beef behind him...\n\nYou abruptly end the conversation with 'and thats why you should be nice!'. In one smooth motion, you quickly pick up the superior cut of wagyu behind Mr. Rude Shopper, and walk off in a huff. Secretly, you are awfully pleased with yourself for getting a better cut of beef :D.\n\nThe End.",
            "ignore" : "You quickly avert your eyes from the situation and walk away slowly. Minutes later, you see the employee sitting on the floor and sobbing. You feel ashamed of your actions, and go up to try and comfort the employee. You talk to her for a bit, and somehow the conversation leads to you getting her number. You have a date this weekend! You leave the Sheng Siong a happy dude. \n\nThe End.",
            "sell" : "You agree to sell and within minutes, you get a notification on your phone that a $100,000 has been deposited in. You go home, bok choy-less but pleased with all dat money. \n\nTwo days later, you see the Yakuza-looking dude on TV. He shows off the bok choy you sold him, except that it was no ordinary vegetable. It was a rare species that grew once every 1000 years, and people were offering him upwards of $10m to take it off his hands. Bewildered, you could do nothing but sit in silence and be sad.\n\nThe End.",
            "keep": "You refuse to sell, suspecting it might be worth more than the 100k he was offering you. You decide to quickly buy the vegetable and bring it to your scientist friends to take a look...\n\nUnfortunately, they tell you, it is just a normal bok choy. You get sad and start looking at your bank account's balance, wondering how it would have looked like with an extra 100k in it.\n\nThe End."
        }
    }
};

//input checking function
var inputMatch = function(input, match){
    if (input.toLowerCase().includes(match)){
        return true;
    } else {
        return false;
    }
}

//clears input after each entry
var clearInput = function(){
    document.getElementById('input').value = "";
}


//Main function
var inputHappened = function(currentInput){
  console.log( currentInput );
  clearInput();
  //name getting
  if (status === "getting name"){
    username = currentInput;
    status = "beginning";
    return `Hey ${username}, it's panic buying season! Get stuff before it runs out!\n\n Which grocery store do you want to go to?\n\nCold Storage / FairPrice / Sheng Siong`
  }


  //Cold Storage Beginning
  if (status === "beginning" && inputMatch(currentInput, "cold storage")){
    status = "coldStorage secondStage";
    return outcomes.coldStorage.beginning;
  }
  //Cold Storage Second Stage
  if (status === "coldStorage secondStage" && inputMatch(currentInput, "sprint")){
    status = "coldStorage thirdStage - gets toilet paper"
    return outcomes.coldStorage.secondStage["gets to toilet paper in time"];
  }
  if (status === "coldStorage secondStage" && inputMatch(currentInput, "walk")){
    status = "game end"
    return outcomes.coldStorage.secondStage["fails to get to toilet paper"]
  }
  //Cold Storage Third Stage
  if (status === "coldStorage thirdStage - gets toilet paper" && inputMatch(currentInput, "give")){
    status = "game end"
    return outcomes.coldStorage.thirdStage.give;
  }
  if (status === "coldStorage thirdStage - gets toilet paper" && inputMatch(currentInput, "walk away")){
    status = "game end"
    return outcomes.coldStorage.thirdStage["walk away"];
  }
  if (status === "coldStorage thirdStage - gets toilet paper" && inputMatch(currentInput, "dance")){
    status = "game end"
    return outcomes.coldStorage.thirdStage.dance;
  }


  //Fair Price Beginning
  if (status === "beginning" && inputMatch(currentInput, "fairprice")){
    status = "fairPrice secondStage";
    return outcomes.fairPrice.beginning;
  }
  //Fair Price Second Stage
  if (status ==="fairPrice secondStage" && inputMatch(currentInput, "toilet paper")){
    status = "game end";
    return outcomes.fairPrice.secondStage["toilet paper"];
  }
  if (status ==="fairPrice secondStage" && inputMatch(currentInput, "hand sanitizer")){
    status = "fairPrice thirdStage - hand sanitizer";
    return outcomes.fairPrice.secondStage["hand sanitizer"];
  }
  if (status ==="fairPrice secondStage" && inputMatch(currentInput, "canned food")){
    status = "fairPrice thirdStage - canned food";
    return outcomes.fairPrice.secondStage["canned food"];
  }
  //Fair Price Third Stage
  if ((status === "fairPrice thirdStage - hand sanitizer" || status ==="fairPrice thirdStage - canned food") &&
        inputMatch(currentInput, "give up")){
    status = "game end";
    return outcomes.fairPrice.thirdStage["give up"];
  }
  if ((status === "fairPrice thirdStage - hand sanitizer" || status ==="fairPrice thirdStage - canned food") &&
        inputMatch(currentInput, "wait")){
    status = "game end";
    return outcomes.fairPrice.thirdStage.wait;
  }


  //Sheng Siong Beginning
  if (status === "beginning" && inputMatch(currentInput, "sheng siong")){
    status = "shengSiong secondStage";
    return outcomes.shengSiong.beginning;
  }
  if (status === "shengSiong secondStage" && inputMatch(currentInput, "meat and dairy")){
    status = "shengSiong thirdStage - meat and dairy";
    return outcomes.shengSiong.secondStage["meat and dairy"];
  }
  if (status === "shengSiong secondStage" && inputMatch(currentInput, "vegetable")){
    status = "shengSiong thirdStage - vegetable";
    return outcomes.shengSiong.secondStage["vegetable"];
  }
  if (status === "shengSiong thirdStage - meat and dairy" && inputMatch(currentInput, "step in")){
    status = "game end";
    return outcomes.shengSiong.thirdStage["step in"];
  }
  if (status === "shengSiong thirdStage - meat and dairy" && inputMatch(currentInput, "ignore")){
    status = "game end";
    return outcomes.shengSiong.thirdStage["ignore"];
  }
  if (status === "shengSiong thirdStage - vegetable" && inputMatch(currentInput, "keep")){
    status = "game end";
    return outcomes.shengSiong.thirdStage["keep"];
  }
  if (status === "shengSiong thirdStage - vegetable" && inputMatch(currentInput, "sell")){
    status = "game end";
    return outcomes.shengSiong.thirdStage["sell"];
  }
};

//Display function
var display = function( data ){
  var displayElement = document.querySelector('#output');

  // get rid of the entire contents
  displayElement.innerHTML = "";

  // put the data into the div
  output.innerText = data;
};

//Initial Display
display("What's your name?");

//thinking futher down the line, for dynamism, you can create a supermarkets object, etc. Then you can randomise the outcomes