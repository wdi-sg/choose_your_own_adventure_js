function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function clearInput() {
    document.getElementById("input").value = "";
}

var p = `\n\n`
var br = `\n`

var user = {
    name: "",
    setName: function(name) {this.name = name;},
    hp: 15,
    outfit: "",
    moves: [{
            key: 0,
            name: "Punch",
            power: 2
        },
        {
            key: 1,
            name: "Kick",
            power: 2
        }
    ],
    attack: function(input, enemy) {
        if (getRandomInt(0, 10) > 3) {
            enemy.hp -= this.moves[input].power;
            return `You used ${this.moves[input].name}! It hit for ${this.moves[input].power} damage.`;
        } else {
            return `You tried to use ${this.moves[input].name} but missed!`
        }

    },
    approval: 0,
    showMoves: function() {
        var movesArray = [];
        for (var i = 0; i < this.moves.length; i++) {
            movesArray.push(`${i}) ${this.moves[i].name}`);
        }
        return `${movesArray.join(", ")}`
    }
}

var trainee = {
    name: "Hitman Trainee",
    hp: 8,
    moves: [{
            key: 0,
            name: "Punch",
            power: 2
        },
        {
            key: 1,
            name: "Kick",
            power: 2
        }
    ],
    attack: function(input, enemy) {
        if (getRandomInt(0, 10) > 3) {
            user.hp -= this.moves[input].power;
            return `${this.name} used ${this.moves[input].name}! It hit for ${this.moves[input].power} damage.`;
        } else {
            return `${this.name} tried to use ${this.moves[input].name} but missed!`
        }
    }
}

var youngPunk = {
    name: "Young Punk",
    hp: 10,
    moves: {
        fannyPackSwing: 2,
        punch: 1,
        kick: 2
    },
    attack: function(move, enemy) {
        if (getRandomInt(0, 10) > 3) {
            enemy.hp -= this.moves[move];
            return enemy.hp;
        } else {
            return "You missed!"
        }

    }
}

var target = {
    randomTaste: function() {
        if (getRandomInt(0, 10) > 5) {
            return this.preference = "classy";
        } else {
            return this.preference = "casual"
        }
    },
    preference: ""
}

var scenarios = {
    1: {
        text: `You are a hitman. Your mission for today is to assassinate the direct descendant of our city's criminal mastermind. We’re sending you to an event we know they’ll be at today. You'll need to look your best, so please pick an outfit.`,
        choices: [`(Ignore the outfits. I look hot enough with my t-shirt, shorts and flip flops.)`, `Take the classic button down & jeans.`, `Take the pullover and jeans.`]
    },
    2: {
        text: `To warm up, let's get you to spar with one of the other trainees. If you fail here, you won't be able to proceed.`,
        choices: [`Start battle!`]
    },
    3: {
        text: `You have been defeated. I'm sorry, but we won't be able to let you proceed with the mission today. Enter anything to start again.`,
    },
    4: {
        text: `Congrats on winning. Here is the poison. Proceed with the mission.`,
        choices: [`Proceed.`]
    },
    5: {
        text: `You arrive at the address provided. There's a notice board outside which reads "Speed Dating Event for Singles 21-35!" An eager youth comes up to you, eyeing your flipflops. "Hey! I'm sorry, but your outfit is inappropriate. Please go back and change.`,
        choices: [`My outfit is what? (Beat him up)`, `Go back to headquarters and change.`]
    },
    6: {
        text: `You're back at headquarters. Which outfit do you choose?`,
        choices: [`Take the classic button down & jeans.`, `Take the pullover and jeans.`]
    },
    7: {
        text: "A few people restrain you, and someone calls the police. They find the poison in your pocket, and you get arrested and sent to jail. You failed to even enter the event! Enter anything to start again.",
    },
    8: {
        text: `You arrive at the address provided. There's a notice board outside which reads "Speed Dating Event for Singles 21-35!" An eager youth comes up to you with a clipboard. "Hey! Welcome to our speed dating event of the year! Can I get your name?"`,
    },
    9: {
        text: `"Alright... ${user.name}. There we go, here's a nametag. Please take a seat inside, you're assigned to table 5!" ${p} You take a seat at table 5. Shortly after, a beautiful woman approaches your table. You see her nametag--she’s your target! ${p} The eager youth slams an hourglass on your table. "You guys get 3 minutes!" ${p} “Hey there..." she squints at your nametag. "${user.name}. How’s it going?” she asks.`,
        choices: [`Great, nice to meet you!`, `Is your name Google? Because you have everything I’ve been searching for.`]
    },
    10: {
        text: `"Hahahaha! You're a funny one. What do you do for a living?"`,
        choices: [`I’m a thief, and I’m here to steal your heart.`, `I'm a software engineer.`, `I'm an assassin hired to kill you.`]
    },
    11: {
        text: `"Nice to meet you too! What do you do for a living?"`,
        choices: [`I’m a thief, and I’m here to steal your heart.`, `I'm a software engineer.`, `I'm an assassin hired to kill you.`]
    },
    12: {
        text: `She looks distraught by your joke. "Sorry, please excuse me for a moment.", she smiles. She leaves and never comes back. You have failed your mission! Enter anything to start again.`,
    },
    13: {
        text: `She shifts uncomfortably in her seat, looking slightly wary. She pauses for a moment, looking down. She seems to be reading something off her palm.  ${p} "..hm.. is there anything you would like to know about me?" she gives an nervous smile. ${p}You should be asking questions. What do you say?`,
        choices: [`Are you religious? Because you’re the answer to all my prayers.`, `What was the best year of your life so far?`,]
    },
    14: {
        text: `"Oh that's interesting!" she pauses for a moment, looking down. She seems to be reading something off her palm. ${p} "..hm.. is there anything you would like to know about me?" she gives an nervous smile. ${p}You should be asking questions. What do you say?`,
        choices: [`Are you religious? Because you’re the answer to all my prayers.`, `What was the best year of your life so far?`,]
    },
    15: {
        text: `"Hahaha! Well, I wasn't religious until my dad became a pastor.. We used to be dirt poor, and he built the church from nothing. It took a while, but God's really blessed us, and we've been doing extremely well! We even had enough money for my mum to chase her lifelong dream of becoming a Mandopop singer."`,
        choices: [`By any chance, is your dad named Kong Hee?`, `Oh that's a great story. :)`]
    },
    16: {
        text: `"Well, I would say the year my dad became a pastor.. We used to be dirt poor, and he built the church from nothing. It took a while, but God's really blessed us, and we've been doing extremely well! We even had enough money for my mum to chase her lifelong dream of becoming a Mandopop singer.`,
        choices: [`By any chance, is your dad named Kong Hee?`, `Oh that's a great story. :)`]
    },
    17: {
        text: `A bell interrupts her before she replies. "You have one minute left!!!!" someone shouts from the center of the room. ${p} You're running out of time. You need to get the poison into her wine glass. What do you do?`,
        choices: [`Create a distraction.`, `Use your charm.`]
    },
    18: {
        text: `You get out from your chair and whip out Spotify on your iPad Pro 12", shoving it in her face. ${p} "Oh my god, I'm such a BIG fan of Mandopop. Show me your mom's albums please!", you exclaim. ${p} "Oh, of course! Ho... Ho Yeow..." she is focused on the search.  While she's distracted, you manage to drop the pill in her drink, which dissolves instantly without a trace. ${p} "Hey! What are you doing to my drink?" she yells. She reports you to the event staff, and you get sent to jail. ${p} You failed! Enter anything to restart.`,
    },
    19: {
        text: `You get out from your chair and whip out Spotify on your iPad Pro 12", shoving it in her face. ${p} "Oh my god, I'm such a BIG fan of Mandopop. Show me your mom's albums please!", you exclaim. ${p} "Oh, of course! Ho... Ho Yeow..." she is focused on the search.  While she's distracted, you manage to drop the pill in her drink, which dissolves instantly without a trace. ${p} "Huh, looks like it's not on Spotify. Sorry about that!" she smiles.`,
        choices: [`Did the sun come out or did you just smile at me?`, `It's a crime that she isn't on Spotify!`]
    },
    20: {
        text: `You take her hands and gaze into her eyes. Leaning over the table, you peck her on the cheek and slyly let loose the pill that was in your hand. It falls into her drink and dissolves within a second, leaving no trace behind. ${p} "Uh, what did you just do to my drink?" She reports you to the event staff, and you get sent to jail. ${p} You failed! Enter anything to restart.`,
    },
    21: {
        text: `You take her hands and gaze into her eyes. Leaning over the table, you peck her on the cheek and slyly let loose the pill that was in your hand. It falls into her drink and dissolves within a second, leaving no trace behind. ${p} "Uh, what was that?" she blushes.`,
        choices: [`I’d say God Bless you, but it looks like he already did.`, `I'm sorry, I couldn't help myself.`]
    },
    22: {
        text: `The final bell rings. You are immediately hustled away by an event staff, but you look over your shoulder before you leave.`,
        choices: [`Proceed.`]
    },
    23: {
        text: `Your target smiles to herself, apparently charmed. She swirls her glass, about to take a sip. What do you do?`,
        choices: [`Stop her from drinking it.`, `Let her drink the poison.`]
    },
    24: {
        text: `You smack her glass away, explaining how you were sent to poison her but couldn't carry through. She is grateful. You guys fall in love. ${p} A few years down the road, her parents get arrested for misuse of church funds. You get sent in for questioning. Your past as a hitman is revealed after some investigation, and you are sentenced to life in prison. ${p} You failed! Enter anything to restart.`,
    },
    25: {
        text: `You let her drink the poison. You make an excuse to leave the event and head home. ${p} That night, it was reported that the daughter of a megachurch's pastor had died from a heart attack. ${p} The next day, the pastor confesses to embezzlement of church funds, and turns himself in. You receive a fat check for a successful hit. ${p} Congratulations! Enter anything to restart.`,
    },
    26: {
        text: `Your target looks disappointed. She swirls her glass, but doesn't take a sip. She gets up and leaves, dumping the contents of the glass in a bin. ${p} You failed! Enter anything to restart.`,
    },
    display: function(number) {
        var output;
        var text = this[number].text;
        var choicesArray = [];
        for (var i=0; i < (this[number].choices).length; i++) {
            choicesArray.push(`(${i}) ${this[number].choices[i]} \n\n`);
        }
        return choicesArray.join('');
    }
}
