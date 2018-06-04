alert("Welcome to the kingdom of Erebor!");

// choose characters
var start;

// for the hobbit
var fightOrHome;

// for the dwarf
var honorOrTreasure;

// for the elf
var daleOrMirkwood;

// how many times player loses gandalf game
var loseCounter = 0;

// to restart the game
	var playAgain = function() {

	var restart = prompt("Would you like to play again? (Yes/No)").toLowerCase();
	if (restart == "yes") {
		characterType();
	} else {
		alert("Thank You for playing!");
	}
	};

// spare gandalf function
var town = function() {
	alert("Let the Battle of Five Armies begin!");
	alert("You're in Dale and see the army of orcs marching towards the town. Gandalf wants to see if you have what is takes to triumph in the field of battle!");

	var gandalf = prompt("Do you wish to 'spar' with Gandalf or decide that there is no victory against the orc army and to 'run' away with Alfred?");

	switch(gandalf){
		case "run":
			alert("You've managed sneak onboard a ship for the women and children with the pathetic Alfred.");
			alert("The woman and children can't believe you and Alfred have deserted your fellow men.");
			alert("They throw both of you overboard, the fate of you is uncertain.");
			playAgain();
			break;
// spar stats
		case "spar":
			alert("It will take five damage points to disarm Gandalf but if Gandalf does five damage points to you first, you can always try again!");
			var charDmg = 0;
			var gandalfDmg = 0;
			var charAttack;
			var gandalfAttack;
			
			// generating attacks and misses
			while(charDmg < 5 && gandalfDmg< 5 && loseCounter <= 3){
			    charAttack = Math.floor(Math.random()*5);
			    gandalfAttack = Math.floor(Math.random()*5);
			    if (charAttack > 0){
			        alert ("You've managed to attack Gandalf with " + charAttack + " damage points!");
			        gandalfDmg += charAttack;
			        if(gandalfDmg >= 5){
			            break;
			        }
			    } else {
			        alert("You tried an attack but it missed Gandalf!");
			    }
			    
			    if (gandalfAttack > 0){
			        alert ("Gandalf conjures lightning Strikes that hits you with " + gandalfAttack + " damage points!");
				    charDmg += gandalfAttack;
			    } else {
			        alert("Gandalf hits the ground with his staff but nothing happens.");
			    }
			}
			// outcomes of gandalf battle
			if (charDmg < gandalfDmg && loseCounter<= 3){
			    alert ("Congratulations! You have proven yourself worthy!");
			    if (start == "hobbit") {
			    	alert("Impressed by your skill in battle, Gandalf bestows upon you the Elven blade 'Sting', and with it, you proceed to the battlefields of Dale.");
			    	alert("With the bellowing of Azog The Defiler's War Horn, the Orc Army emerges from the depths, increasing their advance against the city of Dale");
			    	alert("Orcs penetrate the city wall and swords begin to clash. From the corner of your eye, you see a rabid Orc soldier launching himself onto you!");
			    	randomOrc();
			    } else if (start == "elf") {
			    	alert("Impressed by your skill in battle, Gandalf bestows upon you the Bow of the Galadhrim and with it, you proceed to the battlefields of Dale.");
			    	alert("As you fight off orc after orc, you see Bolg knocking Bilbo unconscious and then proceeds to overpower Tauriel");
			    	alert("You're overcome with tremendous RAGE and you lunge towards Bolg!");
			    	bolg();
			    } else if (start == "dwarf") {
			    	alert("Impressed by your skill in battle, Gandalf bestows upon you Thror's Regal Sword 'Orcist', you proceed to the battlefields of Dale.");
			    	azog();
			    }
			}	else {
			    alert ("You need more practice, Try again!");
			    loseCounter += 1;
			    if (loseCounter > 2) {
			    	alert("You have lost too many times in practice. Perhaps this class is not meant for you!");
			    	characterType();
			    } else {
			    town();
				}
			}
			break;


		default:
		alert("That's not a valid choice.");
		town();
	}
};


// hobbit decisions
var hobbitDec = function() {

	switch(fightOrHome) {
		case "home":
			alert("Bilbo makes the long journey back to The Shire. He lives out his days at Bag End where he can read as many books and eat as much salted pork as he desires!");
			alert("But wait!!! He still possess the ring. The power of One Ring will soon be risen! TBC...");
			playAgain();
			break;

		case "fight":
			alert("What a brave little Hobbit you are! Onward to Dale!");
			alert("WITH HASTE!!!");
			town();

			break;

		default:
			alert("That's not a valid choice.");
			theCharacter();

	}
};

// dwarf decisions
var dwarfDec = function() {

	switch(honorOrTreasure) {
		case "treasure":
			alert("Thorin refuses to part with a single coin as he watches his cousin Dain and his dwarf army get slained! This turns his 'Dragon Sickness' into a full blown one!");
			alert("He suffers traumatic hallucinations and loses all sanity while he rots away in his hold, continously chanting 'The Arkenstone! The Arkenstone! The Arkenstone!...'");
			playAgain();
			break;

		case "honor":
			alert("Thorin breaks free from his 'Dragon Sickness' and regains his sanity!");
			alert("He leads his company to join the others.");
			alert("For Honor and Glory!");
			town();
			break;

		default:
			alert("That's not a valid choice.");
			theCharacter();
	}
};


// elf decisions
var elfDec = function() {

	switch(daleOrMirkwood) {
		case "mirkwood":
			alert("Legolas tells Tauriel that the elves must be protected and heads back to Mirkwood");
			alert("A hundred years is a mere blink in the life of an elf. Legolas is patient and he can wait");
			alert("With the power that has risen in the East...Who knows what lies ahead for Middle-earth.");
			playAgain();
			break;

		case "dale":
			alert("Despite the fact Legolas thinks Dwarves are scum and that his father tells him to leave her");
			alert("He can't bear to leave Tauriel to face the forces of evil alone. No one commands his heart, not even his King!")
			town();
			break;

		default:
			alert("That's not a valid choice.");
			theCharacter();
	}
};

// choosing class
var characterType = function() {
	start = prompt("Please choose one your class: 'Hobbit', 'Dwarf', 'Elf'").toLowerCase();
	theCharacter();
};



// confirm character, choose to fight or not
var theCharacter = function() {
	switch(start) {
		case "hobbit":
			var hobbit = prompt("You've selected Bilbo Bagggins. A comfortable middle aged hobbit hired as a burglar! Do you wish to continue as Bilbo? Yes or No.").toLowerCase();

			if (hobbit === "yes") {
				alert("Hi Bilbo, you're currently in The Lonely Mountain where Thorin has just discovered that you stole The Arkenstone!");
				alert("Thorin has threated to throw you from the rampart!");
				alert("You've managed to escape before Thorin grabs you. You start comtemplating if helping the Dwarves is even worth it.");
				fightOrHome = prompt("Do you wish to 'fight' for Middle-earth or return 'home' to the Shire?");
				hobbitDec();
			} else {
				characterType();
			}
			break;

		case "dwarf":
			var dwarf = prompt("You've selected Thorin Oakenshield. Son of Thrain, son of Thror and King under the Mountain! Do you wish to continue as Thorin? Yes or No.").toLowerCase();

			if (dwarf === "yes") {
				alert("Hi Thorin, you're currently in the halls of Erebor where you sit on your throne, struck with 'Dragon Sickness'. You hear the news of a second orc army marching towards Dale");
				honorOrTreasure = prompt("Do you wish to fight along side your sister's sons with 'honor' or to seal off the entrance of Erebor to protect your vast 'treasure'?");
				dwarfDec();
			} else {
				characterType();
			}
			break;

		case "elf":
			var elf = prompt("You've selected Legolas Greenleaf. Son of Thranduil, King of the Woodland Realm of Northern Mirkwood! Do you wish to continue as Legolas? Yes or No.").toLowerCase();

			if (elf === "yes") {
				alert("Hi Legolas, you're currently in Mount Gundabad with Tauriel! You see Bolg summoning a second army.");
				alert("You and Tauriel witness the march of Bolg's army, bolstered by Orc berserkers and gaint bats");
				alert("Tauriel says, 'we have to help them Legolas!' but you hate Dwarves!");
				daleOrMirkwood = prompt("Do you wish to follow Tauriel to 'Dale' or head back to 'Mirkwood'?").toLowerCase();
				elfDec();
			} else {
				characterType();
			}
			break;

		default:
			alert("Invaild option, please select again!");
			characterType();

	}
};

// start game
characterType();


// boss battle function

//  chance to hit or miss
function bossHitOrMiss() {
  // get either 0 or 1
  var hmScore = Math.round(Math.random());

  if (hmScore == 1) {
    return true;
  }
  else {
    return false;
  }
};

// damage multiplier
function randomDmgMul(charDmgAmt) {
  
// get random number
  var random = ((Math.random() * 4) + 1).toFixed(1);

// character damage dealt
  return charDmgAmt * random;
};


function bossBattle(charHealth, bossHealth, charAttack, bossAttack, bossName) {
 
// player always goes first
// if both play has health loop will continue
  var playerTurn = 1;
 
  while(charHealth > 0 && bossHealth > 0) {
    alert("Your health = " + charHealth + ". " + bossName + " Health = " + bossHealth);

  
    if (playerTurn % 2 === 1) {
      var charHit = randomDmgMul(charAttack);
      alert("You strike the " + bossName + " for: " + charHit);

      bossHealth -= charHit;
      alert("The " + bossName + " has " + bossHealth + " Health left.");

    } else {
       var hitOrMiss = bossHitOrMiss();

      if (hitOrMiss) {
        alert(bossName + " has hit you!");
        alert("You've taken " + bossAttack + " in damage!");

        charHealth -= bossAttack;
        alert("You have " + charHealth + " Health left.");

      } else {
        alert("You've dodged " + bossName + "'s attack");
      };
    };

    playerTurn += 1;
  };

  if (charHealth > 0) {
    alert("You have defeated " + bossName + "!");

  } else {
    alert("You have been overpowered by " + bossName + "...");
  };

  return charHealth;
};

function bolg() {
  var charHealth = 100;
  var blogHealth = 100;
  var charAttack = 10;
  var blogAttack = 25;
  var bossName = "Bolg"

  charHealth = bossBattle(charHealth, blogHealth, charAttack, blogAttack, bossName);

  if (charHealth > 0) {
  	alert("You drive a dagger through Bolg's head and let the giant Gundabad orc fall down the mountain where he is crushed by a boulder.");
  	alert("The orcs are finally defeated and you check on Tauriel");
  	alert("You tell your father that you must leave, and he advises you to seek out a Dunedain ranger in the north who goes by the name of 'Strider'.");
  	alert("Thranduil and Legoalas acknowledges their love for one another.....Legolas then leaves.");
  } else {
  	alert("Bolg picks Legolas' body up and smashes the elf's body onto the rock, ending his life.");
  	alert("He then walks over to Tauriel and stabs her in the back. That kinda sucks.");
  };
  	playAgain();
};

function randomOrc() {
  var charHealth = 100;
  var randomOrcHealth = 50;
  var charAttack = 10;
  var randomOrcAttack = 25;
  var bossName = "The random Orc"

  charHealth = bossBattle(charHealth, randomOrcHealth, charAttack, randomOrcAttack, bossName);

  if (charHealth > 0) {
  	alert("You managed you jump the orc from behind and drive Sting through his black heart.");
  	alert("You run over to a fatally wounded Thorin where you and him make peace.");
  	alert("As he lays dying in your arms he thanks you, 'If more people valued home above gold...this world would be a merry place'.");
  	alert("After the battle, you bid farewell to the remaining member of Thorin's company and journey home to The Shire with Gandalf");
  } else {
  	alert("As your eyes darken, you begin to recall the amazing things in The Shire");
  	alert("The orchards in blosson, the birds will be nesting, the summer barley in the lower fields and eating the first of the strawberries with cream....");
  };
  	playAgain();
};

function azog() {
  var charHealth = 150;
  var azogHealth = 200;
  var charAttack = 10;
  var azogAttack = 50;
  var bossName = "Azog the Defiler"

  alert("Steeled by battle, you head up the mountain Ravenhill to face the Orc Champion Azog The Defiler.");
  alert("Alongside you are your dwarven brethren Balin, Fili and Kili.");
  alert("Unbekwonst to you, Azog strikes from the dark, targeting Balin.")
  var defendFirst = prompt("Do you 'evade' or 'protect' Balin from the Orc? Protecting him will risk your safety!").toLowerCase();

  if (defendFirst == "evade") {
  	alert("You leap to the side, but your action has cost Balin his life. He is slain in battle by Azog The Defiler!");
  } else {
  	alert("You launch your blade between Azog and Balin, saving his life. However, this allows Azog to catch you off-guard, and you take 20 health of damage instead!")
  	charHealth -= 20;
  };

  alert("Azog then raises his sword, and with another swing of his blade, takes aim at Kili's throat!");
  var defendSecond = prompt("You have another chance to parry Azog's strike! Do you 'evade' or 'protect' Kili from Azog's swing? Protecting him will risk your safety!").toLowerCase();

  if (defendSecond == "evade") {
  	alert("You choose to evade from Azog's attack. As a result, a mighty swing from Azog severs Kili from the neck up, and you lose your brother!");
  } else {
  	alert("With strength, you intercept and circle Azog's blade, parrying his blow away from Kili. Azog slams his hilt across your torso, and you lose 20 Health instead!")
  	charHealth -= 20;
  };

  alert("Azog the Defiler is enraged. Tightening his grip around his blade, he circles his broadsword, with the blade fast approaching Fili's chest!");
  var defendThird = prompt("You are weary but have a last chance to save Fili from Azog's blow. Do you 'evade' or 'protect' him? Protecting him will risk your safety!").toLowerCase();

  if (defendThird == "evade") {
  	alert("You stay your blade. Your actions protect you but Filli loses his life. That's the last of your sister's sons!");
  } else {
  	alert("With your last bout of strength, you throw yourself at Azog, causing him to lose aim. Both Azog and yourself roll to the ground, and you take damage instead!");
  	charHealth -= 20;
  };

  charHealth = bossBattle(charHealth, azogHealth, charAttack, azogAttack, bossName);
   if (charHealth > 0) {
  	alert("While being pinned down, you stab the defiler in the heart with Orcrist, you then filp him over and impale him again!");
  	alert("You then push your sword even deeper into his torso. You look into the eyes of you greatest foe while he dies.");
  	alert("Thorin survives long enough to be found by Bilbo and says a final farewell before succumbing to his wounds.");
  } else {
  	alert("Azog fatally wounds you and stares into your eyes at the light leaves your body");
  	alert("He wants you his face to be the last thing you see before you die.");
  	alert("The surviving member of Thorin's company later kneel by his body as a mark of respect. One of the finest of Durin's folk!");
  };
 	playAgain();
};




