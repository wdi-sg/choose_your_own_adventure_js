var userName = [];
var classArray = [];
var subClassArray =[];
var tokenToTake =[];
var score = 0;


var inputHappened = function(currentInput){
    var compareUndo = (currentInput.toUpperCase() === "UNDO");
    console.log(compareUndo);
    if (userName.length === 0){
    userName.push(currentInput);
    document.getElementById('input').value = "";
    document.getElementById('input').placeholder = "Please choose your class";
    console.log(userName);
    var output = "Good Evening " + userName[0] + ". We come to your class advancement. Please choose to advance into one of the below classes : \r Warrior, \r Magician.";
    return output;
    }
        if (userName.length === 1 && classArray.length === 0 && (currentInput === "Warrior" || currentInput === "Magician")){
            classArray.push(currentInput);
            document.getElementById('input').value = "";
            document.getElementById('input').placeholder = "Please choose your Element.";
            score = score + 1;
            var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
            return output;
        }
            if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Light"){
                subClassArray.push(currentInput);
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                score = score + 2;
                var output = "Welcome! Our Great Paladin! Please Choose one of the below token and proceed to the hall of light and begin your Journey: \r Sword, \r Mace, \r Undo (Choose your element again)." + "\n Points of destruction: " + score;
                return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Light" && currentInput === "Sword"){
                    document.getElementById('input').value = "";
                    score = score + 5;
                    var output = "Welcome! Our Great Paladin! From the Hall of Light, please slay the demons off the roads and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Light" && currentInput === "Mace"){
                    document.getElementById('input').value = "";
                    score = score + 3;
                    var output = "Welcome! Our Great Paladin! From the Hall of Light, please protect the people and ward off the evil." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Light" && (currentInput.toUpperCase() === "UNDO")){
                    document.getElementById('input').value = "";
                    score = score - 2;
                    subClassArray.pop();
                    var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Light"){
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                var output = "You haven Not Selected the correct response. Please enter only the below: \r Sword, \r Mace, \r Undo (Choose your element again).";
                return output;
                }
            if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Flame"){
                    subClassArray.push(currentInput);
                    document.getElementById('input').value = "";
                    document.getElementById('input').placeholder = "Please choose your Token.";
                    score = score + 5;
                    var output = "Welcome! The Destroyer! Please choose one of the below token and proceed to the hall of destruction and begin your Journey: \r Lantern. \r Oil, \r Undo (Choose your element again)." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Flame" && currentInput === "Lantern"){
                    document.getElementById('input').value = "";
                    score = score + 2;
                    var output = "Welcome! Our Great Destroyer! Please Burn off the demons off the roads and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Flame" && currentInput === "Oil"){
                    document.getElementById('input').value = "";
                    score = score + 7;
                    var output = "Welcome! Our Great Destroyer! Please raze the evil off the land." + "\n Points of destruction: " + score;
                    return output;
               }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Flame" && (currentInput.toUpperCase() === "UNDO")){
                    document.getElementById('input').value = "";
                    score = score - 5;
                    subClassArray.pop();
                    var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Flame"){
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                var output = "You haven Not Selected the correct response. Please enter only the below: \r Flame, \r Oil, \r Undo (Choose your element again).";
                return output;
                }
            if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Earth"){
                    subClassArray.push(currentInput);
                    document.getElementById('input').value = "";
                    document.getElementById('input').placeholder = "Please choose your Token.";
                    score = score + 1;
                    var output = "Welcome! Our Mighty Tank! Please choose one of the below token and proceed to the hall of Shields and begin your Journey: \r Shield, \r Plate Armor, \r Undo (Choose your element again)." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Earth" && currentInput === "Shield"){
                    document.getElementById('input').value = "";
                    score = score + 0;
                    var output = "Welcome! Our Great Tank! Please Shield the demons off the roads and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Earth" && currentInput === "Plate Armor"){
                    document.getElementById('input').value = "";
                    score = score + 0;
                    var output = "Welcome! Our Great Tank! Please protect the sanity of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Earth" && (currentInput.toUpperCase() === "UNDO")){
                    document.getElementById('input').value = "";
                    score = score - 1;
                    subClassArray.pop();
                    var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Earth"){
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                var output = "You haven Not Selected the correct response. Please enter only the below: \r Shield, \r Plate Armor, \r Undo (Choose your element again).";
                return output;
                }
            if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Death"){
                    subClassArray.push(currentInput);
                    document.getElementById('input').value = "";
                    document.getElementById('input').placeholder = "Please choose your Token.";
                    score = score + 3;
                    var output = "Welcome! The commander of darkness! Please choose one of the below token and proceed to the graveyard and begin your Journey: \r Tombstone, \r Shovel, \r Undo (Choose your element again)." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Death" && currentInput === "Tombstone"){
                    document.getElementById('input').value = "";
                    score = score + 4;
                    var output = "Welcome! Our Death Knight! Please smash the demons off the roads and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Death" && currentInput === "Shovel"){
                    document.getElementById('input').value = "";
                    score = score + 3;
                    var output = "Welcome! Our Death Knight! Please rise the troops and protect our lands." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Death" && (currentInput.toUpperCase() === "UNDO")){
                    document.getElementById('input').value = "";
                    score = score - 3;
                    subClassArray.pop();
                    var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Death"){
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                var output = "You haven Not Selected the correct response. Please enter only the below: \r Tombstone, \r Shovel, \r Undo (Choose your element again).";
                return output;
                }
            if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Light"){
                    subClassArray.push(currentInput);
                    document.getElementById('input').value = "";
                    document.getElementById('input').placeholder = "Please choose your Token.";
                    score = score + 2;
                    var output = "Welcome! The giver of life, Cleric! Please choose one of the below token and proceed to the Church and begin your Journey: \r Staff, \r Holy Water, \r Undo (Choose your element again)." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Light" && currentInput === "Staff"){
                    document.getElementById('input').value = "";
                    score = score + 3;
                    var output = "Welcome! Our Great Cleric! Please shine the light and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Light" && currentInput === "Holy Water"){
                    document.getElementById('input').value = "";
                    score = score + 0;
                    var output = "Welcome! Our Great Cleric! Purify and protect our lands." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Light" && (currentInput.toUpperCase() === "UNDO")){
                    document.getElementById('input').value = "";
                    score = score - 2;
                    subClassArray.pop();
                    var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Light"){
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                var output = "You haven Not Selected the correct response. Please enter only the below: \r Staff, \r Holy Water, \r Undo (Choose your element again).";
                return output;
                }
            if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Flame"){
                    subClassArray.push(currentInput);
                    document.getElementById('input').value = "";
                    document.getElementById('input').placeholder = "Please choose your Token.";
                    score = score + 10;
                    var output = "Welcome! The yielder of the Flame of Purgatory! Please choose one of the below token and proceed to the Fire Place and begin your Journey: \r Spell Book, \r Cloak, \r Undo (Choose your element again)." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Flame" && currentInput === "Spell Book"){
                    document.getElementById('input').value = "";
                    score = score + 50;
                    var output = "Welcome! Our Flame Mage! Please raze the evil to nothingness and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Flame" && currentInput === "Cloak"){
                    document.getElementById('input').value = "";
                    score = score + 0;
                    var output = "Welcome! Our Flame Mage! Raise the fire of protection and deter the evils." + "\n Points of destruction: " + score;
                    return output;
               }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Flame" && (currentInput.toUpperCase() === "UNDO")){
                    document.getElementById('input').value = "";
                    score = score - 10;
                    subClassArray.pop();
                    var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Flame"){
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                var output = "You haven Not Selected the correct response. Please enter only the below: \r Spell Book, \r Cloak, \r Undo (Choose your element again).";
                return output;
                }
            if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Earth"){
                    subClassArray.push(currentInput);
                    document.getElementById('input').value = "";
                    document.getElementById('input').placeholder = "Please choose your Token.";
                    score = score + 1;
                    var output = "Welcome! The sweet-talker of Nature, Durid! Please choose one of the below token and proceed to the Forest and begin your Journey: \r Tree Branch, \r Animal Skull, \r Undo (Choose your element again)."  + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Earth" && currentInput === "Tree Branch"){
                    document.getElementById('input').value = "";
                    score = score + 4;
                    var output = "Welcome! Our Durid! Please protect the land with the forces of nature." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Earth" && currentInput === "Animal Skull"){
                    document.getElementById('input').value = "";
                    score = score + 10;
                    var output = "Welcome! Our Durid! Raise the pack and deter the evils." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Earth" && (currentInput.toUpperCase() === "UNDO")){
                    document.getElementById('input').value = "";
                    score = (score - 1);
                    subClassArray.pop();
                    var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Earth"){
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                var output = "You haven Not Selected the correct response. Please enter only the below: \r Tree Branch, \r Animal Skull, \r Undo (Choose your element again).";
                return output;
                }
            if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Death"){
                    subClassArray.push(currentInput);
                    document.getElementById('input').value = "";
                    document.getElementById('input').placeholder = "Please choose your Token.";
                    score = score + 3;
                    var output = "Welcome! Commander of the dead, Necromancer! Please choose one of the below token and proceed to the Forest and begin your Journey: \r Casket, \r Bandage, \r Undo (Choose your element again)." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Death" && currentInput === "Casket"){
                    document.getElementById('input').value = "";
                    score = score + 15;
                    var output = "Welcome! Necromancer! Please protect the land with the army of skeletons." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Death" && currentInput === "Bandage"){
                    document.getElementById('input').value = "";
                    score = score + 20;
                    var output = "Welcome! Necromancer! Please protect the land with the army of Mummies." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Death" && (currentInput.toUpperCase() === "UNDO")){
                    document.getElementById('input').value = "";
                    score = score - 3;
                    subClassArray.pop();
                    var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again.)" + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Death"){
                document.getElementById('input').value = "";
                document.getElementById('input').placeholder = "Please choose your Token.";
                var output = "You haven Not Selected the correct response. Please enter only the below: \r Casket, \r Bandage, \r Undo (Choose your element again).";
                return output;
                }
        else if (userName.length === 1 && classArray.length === 1 && (currentInput.toUpperCase() === "UNDO")){
            document.getElementById('input').value = "";
            document.getElementById('input').placeholder = "Please choose your Class.";
            classArray.pop();
            score = score - 1;
            var output = "Good Evening " + userName[0] + ". We come to your class advancement. Please choose to advance into one of the below classes : \r Warrior, \r Magician";
            return output;
        }
        else if (userName.length === 1 && classArray.length === 1){
            document.getElementById('input').value = "";
            document.getElementById('input').placeholder = "Please choose your Element.";
            var output = "You haven Not Selected the correct response. Please enter only the below: \r Light, \r Flame, \r Earth, \r Death, \r Undo (Choose your class again).";
            return output;
        }
    else if (userName.length === 1 && classArray.length === 0){
          document.getElementById('input').value = "";
          document.getElementById('input').placeholder = "Please choose your class.";
          var output = "You have entered a wrong response. Please restart and enter: \r Warrior, \r Magician";
          return output;
    }
};