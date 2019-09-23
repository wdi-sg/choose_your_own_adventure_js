"use strict"
var welcomeMessage = "----------The Matrix-----------\n" +
    "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \
                          \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
    "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \
                          \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
    "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \
                          \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
    "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \
                          \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
    "|\xa0\xa0\xa0\xa0\xa0\xa0\xa0login:\xa0[your name]\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\n" +
    "-----------------------------------";

display(welcomeMessage);

var game = {
    prevOutput: null,
    stage: -1,
    started: false
};

var player = {
    name: null
};

var stages = [{
        messages: {
            intro: ["---", "playerName", "\'S ", "APARTMENT---\n\n", "Wake up, ", "playerName", "...\n\n\n\n"],
            questions: [],
            choices: [],
            hints: ["<Enter c to [c]ontinue>\n"],
        },
        paths: { c: 1 },
        response: null,
    },
    {
        messages: {
            intro: ["The Matrix has you...\n\n\n\nFollow the white rabbit.\n\n"],
            questions: [],
            choices: [],
            hints: ["[f]ollow\n"],
        },
        paths: { f: 2 },
        response: null,
    },
    {
        messages: {
            intro: ["---HOTEL LAFAYETTE---\n",
                "Welcome ", "playerName", ".\n\n",
                "As you no doubt have guessed, I am MORPHEUS.\n\n",
                "This is your last chance. After this, there is no going back.\n\n",
                "You take the *blue* pill and the story ends.\n",
                "You wake in your bed and you believe whatever you want to believe.\n\n",
                "You take the *red* pill and you stay in Wonderland\n",
                "and I show you how deep the rabbit-hole goes.\n\n"
            ],
            questions: ["Which pill would you take?\n\n"],
            choices: ["[b]lue   |   [r]ed\n"],
            hints: [],
        },
        paths: { b: 3, r: 4 },
        response: null,
    },
    {
        messages: {
            intro: ["\n\n\nWelcome back to the Matrix.\n\n\n",
                "< TRY AGAIN? >\n\n"
            ],
            questions: [],
            choices: ["[r]estart"],
            hints: [],
        },
        paths: { r: 0 },
        response: null,
    },
    {
        messages: {
            intro: ["MORPHEUS:\n",
                "Have you ever had a dream, ", "playerName", ", that you were so sure was real?\n\n",
                "What if you were unable to wake from that dream?\n\n",
                "How would you know the difference between the dream world and the real world?\n\n",
                "You've been living in a dream world, ", "playerName", ".\n\n\n"
            ],
            questions: [],
            choices: [],
            hints: ["[c]ontinue"],
        },
        paths: { c: 5 },
        response: null,
    },
    {
        messages: {
            intro: ["---MAIN DECK---\n\n",
                "You're plugged in, hanging in one of the suspension chairs.\n\n\n",
                "TANK:\n",
                "\We're supposed to load all these operations programs first,\n",
                "but this is some major boring shit.\n",
                "Why don't we start something a little fun?\n",
                "How about some combat training?\n\n",
                "A tall carousel is loaded with micro discs.\n\n"
            ],
            questions: ["Choose a disc:\n\n"],
            choices: ["[K]enpo   |   [T]ae Kwan Do   |   [D]runken boxing"],
            hints: [],
        },
        paths: { k: 6, t: 7, d: 8 },
        response: null,
    },
    {
        messages: {
            intro: ["playerName", ":\n", "I know Kenpo.\n\n\n\n"],
            questions: ["Load more combat training?\n\n"],
            choices: ["[y]es   |   [n]o"],
            hints: [],
        },
        paths: { y: 5, n: 9 },
        response: null,
    },
    {
        messages: {
            intro: ["playerName", ":\n", "I know Tae Kwan Do.\n\n\n\n"],
            questions: ["Load more combat training?\n\n"],
            choices: ["[y]es   |   [n]o"],
            hints: [],
        },
        paths: { y: 5, n: 9 },
        response: null,
    },
    {
        messages: {
            intro: ["playerName", ":\n", "I know Drunken Boxing.\n\n\n\n"],
            questions: ["Load more combat training?\n\n"],
            choices: ["[y]es   |   [n]o"],
            hints: [],
        },
        paths: { y: 5, n: 9 },
        response: null,
    },
    {
        messages: {
            intro: ["---NEBUCHADNEZZAR---\n\n",
                "MORPHEUS:\n",
                "How's he doing?\n\n",
                "TANK:\n",
                "We just finished the operation programs and he's showing great retention.\n\n",
                "MORPHEUS:\n",
                "Good. I want everyone alerted to 12-hour stand-by. We're going in.\n",
                "playerName", ", it's time for you to know why you're here.\n\n",
                "playerName", ":\n",
                "What's he talking about?\n\n",
                "TANK:\n",
                "He's taking you into the Matrix to see someone.\n\n",
                "playerName", ":\n",
                "See who?\n\n"
            ],
            questions: [],
            choices: [],
            hints: ["[h]int\n\n"],
        },
        paths: { "the oracle": 10, h: 16 },
        response: null,
    },
    {
        messages: {
            intro: ["---ORACLE'S CHAMBER---\n\n",
                "THE ORACLE:\n",
                "You know why MORPHEUS brought you to see me?\n\n\n\n\n",
            ],
            questions: [],
            choices: ["I [t]hink so   |   I [d]on't know"],
            hints: [],
        },
        paths: { t: 12, d: 13 },
        response: null,
    },
    {
        messages: {
            intro: ["---TV SCREENS---\n", "THE ARCHITECT:\n",
                "I am the Architect.\n",
                "I created the Matrix.\n",
                "I've been waiting for you.\n\n",
                "You have many questions, and though the process has altered your consciousness, you remain irrevocably human.\n\n",
                "Ergo some of my answers you will understand, and some of them you will not.\n\n",
                "Concordantly, while your first question may be the most pertinent, you may or may not realize it is also the most irrelevant.\n\n",
            ],
            questions: ["What's your first question?\n\n"],
            choices: [],
            hints: ["[h]int"],
        },
        paths: { "why am i here?": 18, h: 17 },
        response: null,
    },
    {
        messages: {
            intro: ["THE ORACLE:\n",
                "So? What do you think?  You think you're THE ONE?\n\n\n\n"
            ],
            questions: [],
            choices: ["[y]es   |   [n]o"],
            hints: [],
        },
        paths: { y: 14, n: 15 },
        response: null,
    },
    {
        messages: {
            intro: ["playerName", ":\n",
                "I'm not THE ONE.\n\n\n\n",
                "THE ORACLE:\n",
                "Sorry kiddo. You got the gift, but it looks like you're waiting for something.\n\n",
                "playerName", ":\n",
                "What?\n\n",
                "THE ORACLE:\n",
                "Your next life maybe, who knows? That's the way these things go.\n\n",
                "< TRY AGAIN? >\n\n"
            ],
            questions: [],
            choices: ["[r]estart"],
            hints: [],
        },
        paths: { r: 0 },
        response: null,
    },
    {
        messages: {
            intro: ["THE ORACLE:\n",
                "We can never see past the choices we don't understand.\n\n",
                "playerName", ":\n",
                "Are you saying I have to choose whether TRINITY lives or dies?\n\n",
                "THE ORACLE:\n",
                "No. You've already made the choice, now you have to understand it.\n\n",
                "playerName", ":\n",
                "No, I can't do that. I won't.\n\n",
                "THE ORACLE:\n",
                "You have to.\n\n",
                "playerName", ":\n",
                "Why?\n\n",
                "THE ORACLE:\n",
                "Because you're THE ONE.\n\n\n",
            ],
            questions: [],
            choices: ["[c]ontinue"],
            hints: [],
        },
        paths: { c: 11 },
        response: null,
    },
    {
        messages: {
            intro: ["The Oracle gestures to a wooden plaque,\n",
                "the kind every grandma has,\n",
                "except that the words are in Latin.\n\n",
                "THE ORACLE:\n",
                "You know what that means?\n",
                "It's Latin. Means 'Know thyself'.\n",
                "I'm going to let you in on a little secret.\n",
                "Being THE ONE is just like being in love.\n",
                "No one can tell you you're in love, *you just know it.*\n\n\n",
                "< TRY AGAIN? >\n\n"
            ],
            questions: [],
            choices: ["[r]estart"],
            hints: [],
        },
        paths: { r: 0 },
        response: null,
    },
    {
        messages: {
            intro: ["MORPHEUS:\n",
                "When the Matrix was first built there was a man born inside that had the ability to change what he wanted, to remake the Matrix as he saw fit.  It was this man that freed the first of us and taught us the secret of the war; control the Matrix and you control the future.\n\n",
                "When he died, *The Oracle* at the temple of *Zion* prophesied his return and envisioned an end to the war and freedom for our people.  That is why there are those of us that have spent our entire lives searching the Matrix, looking for him.\n\n"
            ],
            questions: [],
            choices: ["[r]eturn"],
            hints: [],
        },
        paths: { r: 9 },
        response: null,
    },
    {
        messages: {
            intro: ["\n\n\nThe question of \"Why am I here?\" is pertinent for you to understand exactly why you have gone to so much trouble to get there.\n\n\n"],
            questions: [],
            choices: [],
            hints: ["[r]eturn"],
        },
        paths: { r: 11 },
        response: null,
    },
    {
        messages: {
            intro: ["THE ARCHITECT:\n",
                "Your life is the sum of a remainder of an unbalanced equation inherent to the programming of the Matrix.\n\n",
                "You are the eventuality of an anomaly, which, despite my sincerest efforts, I have been unable to eliminate from what is otherwise a harmony of mathematical precision.\n\n",
                "While it remains a burden assiduously avoided, it is not unexpected, and thus not beyond a measure of control. Which has led you, inexorably... here.\n\n",
            ],
            questions: ["Has The Architect answered your question?\n\n"],
            choices: ["[y]es   |   [n]o"],
            hints: [],
        },
        paths: { y: 19, n: 20 },
        response: null,
    },
    {
        messages: {
            intro: ["THE ARCHITECT:\n",
                "The Matrix is older than you know. I prefer counting from the emergence of one integral anomaly to the emergence of the next, in which case this is the sixth version.\n\n",
                "The first Matrix I designed was quite naturally perfect, it was a work of art - flawless, sublime. A triumph equalled only by its monumental failure. The inevitability of its doom is apparent to me now as a consequence of the imperfection inherent in every human being.\n\n",
                "I have since come to understand that the answer eluded me because it required a lesser mind, or perhaps a mind less bound by the parameters of perfection. Thus the answer was stumbled upon by another - an intuitive program, initially created to investigate certain aspects of the human psyche. *If I am the father of the Matrix, she would undoubtedly be its mother.*\n\n\n",
                "You are here because Zion is about to be destroyed - its every living inhabitant terminated, its entire existence eradicated.\n\n",
                "The function of THE ONE is now to return to THE SOURCE, allowing a temporary dissemination of the code you carry, reinserting the prime program.\n\n",
                "Which brings us at last to the moment of truth, wherein the fundamental flaw is ultimately expressed, and the anomaly revealed as both beginning and end. There are *two doors*. The door to your *right* leads to THE SOURCE, and the salvation of Zion. The door to your *left* leads back to the Matrix, to *her* and to the end of your species. As you adequately put, the problem is choice.\n\n"
            ],
            questions: ["Which door would you choose?\n\n"],
            choices: ["[l]eft   |   [r]ight\n\n"],
            hints: ["<bonus: *If I am the father of the Matrix, she would undoubtedly be its mother.*>\n\n",
                "Who is she?\n\n"
            ],
        },
        paths: { l: 21, r: 22, "the oracle": 23 },
        response: null,
    },
    {
        messages: {
            intro: ["\n\nLearn more about what The Architect has said at\n",
                "www.matrixresolutions.com\n\n\n",
                "< TRY AGAIN? >\n\n"
            ],
            questions: [],
            choices: ["[r]estart"],
            hints: [],
        },
        paths: { r: 0 },
        response: null,
    },
    {
        messages: {
            intro: ["---THE MATRIX---\n\n\n",
                "playerName", ":\n",
                "TRINITY. I know you can hear me. I'm never letting go. I can't. I just love you too damn much.\n\n\n\n",
                "< TRY AGAIN? >\n\n"
            ],
            questions: [],
            choices: ["[r]estart"],
            hints: [],
        },
        paths: { r: 0 },
        response: null,
    },
    {
        messages: {
            intro: ["---THE SOURCE---\n",
                "playerName", ":\n",
                "I only ask to say what I’ve come to say, after that, do what you want and I won’t try to stop you.\n\n",
                "DEUS EX MACHINA:\n",
                "Speak.\n\n",
                "playerName", ":\n",
                "The program 'Smith' has grown beyond your control. Soon he will spread through this city as he spread through the Matrix. You cannot stop him, but I can.\n\n",
                "DEUS EX MACHINA:\n",
                "We don’t need you. We need nothing.\n\n",
                "playerName", ":\n",
                "If that’s true, then I’ve made a mistake and you should kill me now.\n\n",
                "DEUS EX MACHINA:\n",
                "What do you want?\n\n",
                "playerName", ":\n",
                "Peace.\n\n\n\n\n",
                "<THE END>\n\n"
            ],
            questions: [],
            choices: ["re[p]lay   |   [c]redits"],
            hints: [],
        },
        paths: { p: 0, c: 24 },
        response: null,
    },
    {
        messages: {
            intro: ["THE ORACLE:\n",
                "So. Let's get the obvious stuff out of the way.\n\n",
                "playerName", ":\n",
                "You're not human, are you?\n\n",
                "THE ORACLEO:\n",
                "Well it's tough to get any more obvious than that.\n\n",
                "playerName", ":\n",
                "If I had to guess, I'd say you're a program from the machine world. So is he.\n\n",
                "THE ORACLE:\n",
                "So far, so good.\n\n",
                "We're all here to do what we're all here to do. I'm interested in one thing, ", "playerName", ",the future.\n",
                "And believe me, I know - the only way to get there is together.\n\n",
                "playerName", ":\n",
                "Are there other programs like you?\n\n",
                "THE ORACLE:\n",
                "Oh, well, not like me. But... Look, see those birds? At some point a program was written to govern them. A program was written to watch over the trees, and the wind, the sunrise, and sunset. There are programs running all over the place. The ones doing their job, doing what they were meant to do, are invisible. You'd never even know they were here. But the other ones, well, we hear about them all the time.\n\n",
                "playerName", ":\n",
                "I've never heard of them.\n\n",
                "THE ORACLE:\n",
                "Of course you have. Every time you've heard someone say they saw a ghost, or an angel. Every story you've ever heard about vampires, werewolves, or aliens is the system assimilating some program that's doing something they're not supposed to be doing.\n\n",
                "playerName", ":\n",
                "Programs hacking programs. Why?\n\n",
                "THE ORACLE:\n",
                "They have their reasons, but usually a program chooses exile when it faces deletion.\n\n",
                "playerName", ":\n",
                "And why would a program be deleted?\n\n",
                "THE ORACLE:\n",
                "Maybe it breaks down. Maybe a better program is created to replace it - happens all the time, and when it does, a program can either choose to hide here, or return to THE SOURCE.\n\n",
                "playerName", ":\n",
                "The machine mainframe?\n\n",
                "THE ORACLE:\n",
                "Yes. Where you *must go*. Where the path of THE ONE ends. You've seen it, in your dreams, haven't you? The door made of light?\n\n",
                "playerName", ":\n",
                "[nods]\n\n\n\n\n",
                "<THE END>\n\n"
            ],
            questions: [],
            choices: ["[g]o to THE SOURCE"],
            hints: [],
        },
        paths: { g: 22 },
        response: null,
    },
    {
        messages: {
            intro: ["Movie info:\n",
                "www.imsdb.com\n",
                "www.matrixresolutions.com\n",
                "www.matrixfans.net\n\n\n"
            ],
            questions: [],
            choices: ["[r]eplay   |   [b]ack to previous"],
            hints: [],
        },
        paths: {r: 0, b: 22},
        response: null,
    },
]