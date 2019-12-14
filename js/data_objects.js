let beastsDB = [];
let spellsDB = [];
let mapArray = [];
let roomsDescriptionArray = [];
function loadDataBase() {
    setupBeastsDB();
    /* for (let i = 0; i < beastsDB.length; i++) {
        let msg = "";
        for (let key in beastsDB[i]) {
            msg += `${key}: ${beastsDB[i][key]}\n`;
        }
        display(msg);
        console.log(msg);
    } */

    setupSpellsDB();
    /* for (let i = 0; i < spellsDB.length; i++) {
        let msg = "";
        for (let key in spellsDB[i]) {
            msg += `${key}: ${spellsDB[i][key]}\n`;
        }
        display(msg);
        console.log(msg);
    }
    display(`<pre>${spellsDB[3]["spellIcon"]}`); */

    setupMap();
    // console.log(mapArray);
}

/////////////////////
// Beasts DataBase //
/////////////////////
function Beasts(name, beastType, classification, attack, beastDescription) {
    this["Name"] = name;
    this["Beast Type"] = beastType;
    this["Classification"] = classification;
    this["Attack"] = attack;
    this["Beast Description"] = beastDescription;
}

function setupBeastsDB() {
    let beastName = "";
    let beastType = "";
    let classification = "";
    let attack = "";
    let beastDescription = "";

    //creature 1
    beastName = "Acromantula";
    beastType = "Acromantulas";
    classification = "XXXXX";
    attack = ["bite", "pincer grasp", "charge", "flying body press"];
    beastDescription = "Acromantulas sport eight, black eyes and are typically covered in thick black hair, with a leg span of fifteen feet.";
    let acromantula = new Beasts(beastName, beastType, classification, attack, beastDescription);
    beastsDB.push(acromantula);

    //creature 2
    beastName = "Basilisk";
    beastType = "Serpentes";
    classification = "XXXXX";
    attack = ["bite", "tail swipe", "death gaze"];
    beastDescription = "The Basilisk (A.K.A king of serpent) is a brilliant green serpent that may reach up to fifty feet in length.";
    let basilisk = new Beasts(beastName, beastType, classification, attack, beastDescription);
    beastsDB.push(basilisk);

         //creature 3
    beastName = "Nundu";
    beastType = "beast";
    classification = "XXXXX";
    attack = ["bite","toxic breath", "charge", "flying body press"];
    beastDescription = "The Nundu is extremely hard to subdue. It has never been defeated by less than around one hundred wizards working together.";
    let nundu = new Beasts(beastName, beastType, classification, attack, beastDescription);
    beastsDB.push(nundu);

    /*  //creature 4
      beastName = "acromantula";
      beastType = "acromantulas";
      classification = "XXXXX";
      attack = ["bite","pincer grasp", "charge", "flying body press"];
      beastDescription = "Acromantulas sport eight, black eyes and are typically covered in thick black hair, with a leg span of fifteen feet.";
      let acromantula = new Beasts(beastName, beastType, classification, attack, beastDescription);
      beastsDB.push(acromantula);

      //creature 5
      beastName = "acromantula";
      beastType = "acromantulas";
      classification = "XXXXX";
      attack = ["bite","pincer grasp", "charge", "flying body press"];
      beastDescription = "Acromantulas sport eight, black eyes and are typically covered in thick black hair, with a leg span of fifteen feet.";
      let acromantula = new Beasts(beastName, beastType, classification, attack, beastDescription);
      beastsDB.push(acromantula); */

}

function printBeastsDB(currentInput) {
    let msg = "<h2>Beasts Database</h2>";
    //console.log("PRINTING BEASTS DATABASE....")
    for (let i = 0; i < beastsDB.length; i++) {
        for (let key in beastsDB[i]) {
            msg += `<p style="margin:0.2em;">${key}: ${beastsDB[i][key]}\n</p>`;
        }
        msg += "<br />";
    }
    display(msg);
    //console.log(msg);
}


/////////////////////
// Spells DataBase //
/////////////////////
function Spells(spellName, spellType, spellIcon, spellDescription) {
    this["Spell Name"] = spellName;
    this["Spell Type"] = spellType;
    this["Spell Icon"] = spellIcon;
    this["Spell Description"] = spellDescription;
}

function setupSpellsDB() {
    let spellName = "";
    let spellType = "";
    let spellIcon = "";
    let spellDescription = "";

    // spell 1
    spellName = "Alarte Ascendare";
    spellType = "Charm";
    spellIcon = "";
    spellDescription = "Shoots the target high into the air";
    let alarte_ascendare = new Spells(spellName, spellType, spellIcon, spellDescription);
    spellsDB.push(alarte_ascendare);

    // spell 2
    spellName = "Aqua Eructo";
    spellType = "Charm";
    spellIcon = "";
    spellDescription = "This spell is used to create, and control, a jet of clear water from the tip of the wand";
    let aqua_eructo = new Spells(spellName, spellType, spellIcon, spellDescription);
    spellsDB.push(aqua_eructo);

    // spell 3
    spellName = "Arania Exumai";
    spellType = "Spell";
    spellIcon = "";
    spellDescription = "Drives away spiders";
    let arania_exumai = new Spells(spellName, spellType, spellIcon, spellDescription);
    spellsDB.push(arania_exumai);

    // spell 4
    spellName = "Arresto Momentum";
    spellType = "Charm";
    spellIcon = "      #     #\n     ##    ## \n    # #   # # \n   #  #  #  # \n  #   # #   # \n #    ##    # \n#     #     #";
    spellDescription = "Decreases the velocity of a moving target. Can be used on multiple targets, as well as on the caster themselves.";
    let arrestto_momentum = new Spells(spellName, spellType, spellIcon, spellDescription);
    spellsDB.push(arrestto_momentum);
}

function printSpellsDB(currentInput) {
    let msg = "<h2>Spells Database</h2>";
    //console.log("PRINTING SPELLS DATABASE....")
    for (let i = 0; i < spellsDB.length; i++) {
        for (let key in spellsDB[i]) {
            if (key !== "Spell Icon") {
                msg += `<p style="margin:0.2em;">${key}: ${spellsDB[i][key]}\n</p>`;
            }

        }
        msg += "<br />";
    }
    display(msg);
    //console.log(msg);
}


//////////////////////////////////////
// Setup Map for Gaming Environment //
//////////////////////////////////////
function setupMap() {
    mapArray = [
        [0, 0, 2, 0],
        [0, 5, 3, 1],
        [0, 6, 0, 2],
        [0, 7, 5, 0],
        [2, 8, 0, 4],
        [3, 9, 0, 0],
        [4, 0, 0, 0],
        [5, 0, 9, 0],
        [6, 0, 0, 8],
        [9, 0, 0, 0]
    ];
    roomsDescriptionArray[0] = 'The collapsed wall is blocking most part of this room.';
    roomsDescriptionArray[1] = 'There are some huge paintings hanging on the north wall of this room. In your opinion, this room might have been a lounge or something';
    roomsDescriptionArray[2] = 'This hall seems like a great dining hall.';
    roomsDescriptionArray[3] = 'There is a shimmering light beyond the end of this room.';
    roomsDescriptionArray[4] = 'There are several entrances to this part of the room. The chandelier on the floor has been looted of its previous gems long ago.';
    roomsDescriptionArray[5] = 'You have entered the dark corridor. The air is stale here. There is only one visible way';
    roomsDescriptionArray[6] = 'You have reached the treasure room!';
    roomsDescriptionArray[7] = 'There is a collapsed wall blocking the way to the west. There is a window on the south walls and you could see where you came in from.';
    roomsDescriptionArray[8] = "As you walked in, the room is lit by the faint light from the distance stars through the torn roof. Suddenly the entrance you came in collapsed. You can't back out now.";
    roomsDescriptionArray[9] = 'Upon receiving the tip off, you hurried to the ruins which is located north of the Selima Oasis. You are standing infront the ruins. There is only one visible entrance.</h2>';
}

function describeRoom (currentPos) {
    return `<p>${roomsDescriptionArray[currentPos]}</p>`;
}

////////////////////////////
// Return Screen Graphics //
////////////////////////////

// return different page for various stages of the game: mainpage, encyclopediapage, gameintropage, navigatepage,
function screenGraphics(page) {
    let screenMsg = "";
    switch (true) {
        case (page === "mainpage"):
            let menuMessage = '<p style="font-size:1em;">Enter "game" to start playing or "enc" to read the encyclopedia.</p>';
            let msg = dragonASCII() + menuMessage;
            screenMsg = `<h1 style='display:inline-block; margin: 0 auto;'>FANTASTIC BEASTS </h1>&nbsp&nbsp<h2 style='margin: 0 auto; display:inline-block;'>AND STAY ALIVE WHILE FINDING THEM!</h2><p>${msg}</p>`;
            return screenMsg;
            break;
        case (page === "encyclopediapage"):
            screenMsg = '<h1>Encyclopedia Mode</h1><p>Read about all the beasts and spells here!</p>';
            return screenMsg;
            break;
        case (page === "gameintropage"):
            screenMsg = '<h2 style="margin-top:0.5em;">The year is 1925, You are our protagonist, Newt Scamander, travelling across the five continents researching for his book (Fantastic Beasts and Where to Find Them). Our adventure begins at an ancient ruins in Sudan...</h2><p>Press "s" to start your adventure or "x" to exit to the main screen!</p>';
            return screenMsg;
            break;
        default:
            break;
    }
}

function dragonASCII() {
    let msg = "<pre style='margin: 0;font-size:16px;'>                                                               .          .\n                                                             ,7         .4'\n                                                           ,CD        .OY\n                                                         ,CD*       .OY*\n                                                      ,CDD*      ,OHY*\n                                                   .CDDD*     .OHY*\n                                                 ,CDDD*    ,OHHY*\n                                              .CDDDD*  ,OHHHY*\n                                            ,CDDDDD*,OHHHY*\n                                          .CDDDD;HHHHHHY*\n        .d                               ,CDDD;HHHHHHHY\n       CDH                            .cCDDDDHHHHHHHHY\n      |DDH,                      ,HHHHHHddddddddddddddH\.\n      HDDDH                .,/HHHoooooooo___oooooooooooooHHb,\n      DDDDDD.      ,HHHHHHHooooooooo       /oooooooooooooooooHb.\n    ,HDDDDDDDDHHHHHHoHHHHHHoooooooo       oooooooooooooooooooooHb;.\n  /HHdddddddddooooooooHHHHHHooooooooooooooooooooooooooo**oooooHHHHH;.\n.Hoo(   )oooooooo****  *HHHH ooooooooooooooooooo*       .  *oHHHHHoHH.\nHooooooooooooo**     .   *HHH.   **********   .      .    ,;HHHHHoooooH.\nHoooooooooo*    .          *HH.    .                     HHHHH* ooooooHHH.\nH. *****                    \n**.          .     .      HHHHH*.   *ooHHHHHH..\n*H.            .        .          .  _...           HHHH*       ,HHHHHHooHH.\n *HH.     .         _........._   ...; VVV        ,HHHH    .    HHHHH*oooooHH;.\n   *HHH............;     VVVV  ..;      V      ,HHH*          HHHH*   *oooHHHH;.\n      *HHHHHb   VVV       VV             oooooooo.    .    HHHH*       ,HHHHooHH\n           **HHHhVV       V         .dHHHHHHHHHHoooo    ,HHH*      .  HHHHoooooH\n                VdHHHHHHHHHHHHHHHHHH**          *OOOOo      .      HHHH* *ooooo\n                                                   *OOOOOo       ,HHH*    .*oooo\n                                                    *OOOOOOo    .      .    *ooo\n</pre>";
    return msg;
}
