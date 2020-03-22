var userName = [];
var classArray = [];
var subClassArray =[];
var tokenToTake =[];
var score = 0;

var inputHappened = function(currentInput){
    if (userName.length === 0){
    userName.push(currentInput);
    console.log(userName);
    var output = "Good Evening " + userName[0] + ". We come to your class advancement. Please choose to advance into one of the below classes : \r Warrior, \r Magician.";
    return output;
    }
        if (userName.length === 1 && classArray.length === 0){
            classArray.push(currentInput);
            score = score + 1;
            var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death." + "\n Points of destruction: " + score;
            return output;
        }
            if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Light"){
                subClassArray.push(currentInput);
                score = score + 2;
                var output = "Welcome! Our Great Paladin! Please Choose one of the below token and proceed to the hall of light and begin your Journey: \r Sword, \r Mace." + "\n Points of destruction: " + score;
                return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Light" && currentInput === "Sword"){
                    score = score + 5;
                    var output = "Welcome! Our Great Paladin! From the Hall of Light, please slay the demons off the roads and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Light" && currentInput === "Mace"){
                    score = score + 3;
                    var output = "Welcome! Our Great Paladin! From the Hall of Light, please protect the people and ward off the evil." + "\n Points of destruction: " + score;
                    return output;
                }
            else if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Flame"){
                    subClassArray.push(currentInput);
                    score = score + 5;
                    var output = "Welcome! The Destroyer! Please choose one of the below token and proceed to the hall of destruction and begin your Journey: \r Lantern. \r Oil." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Flame" && currentInput === "Lantern"){
                    score = score + 2;
                    var output = "Welcome! Our Great Destroyer! Please Burn off the demons off the roads and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Flame" && currentInput === "Oil"){
                    score = score + 7;
                    var output = "Welcome! Our Great Destroyer! Please raze the evil off the land." + "\n Points of destruction: " + score;
                    return output;
               }
            else if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Earth"){
                    subClassArray.push(currentInput);
                    score = score + 1;
                    var output = "Welcome! Our Mighty Tank! Please choose one of the below token and proceed to the hall of Shields and begin your Journey: \r Shield, \r Plate Armor." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Earth" && currentInput === "Shield"){
                    score = score + 0;
                    var output = "Welcome! Our Great Tank! Please Shield the demons off the roads and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Earth" && currentInput === "Plate Armor"){
                    score = score + 0;
                    var output = "Welcome! Our Great Tank! Please protect the sanity of the land." + "\n Points of destruction: " + score;
                    return output;
                }
            else if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Death"){
                    subClassArray.push(currentInput);
                    score = score + 3;
                    var output = "Welcome! The commander of darkness! Please choose one of the below token and proceed to the graveyard and begin your Journey: \r Tombstone, \r Shovel." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Death" && currentInput === "Tombstone"){
                    score = score + 4;
                    var output = "Welcome! Our Death Knight! Please smash the demons off the roads and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Death" && currentInput === "Shovel"){
                    score = score + 3;
                    var output = "Welcome! Our Death Knight! Please rise the troops and protect our lands." + "\n Points of destruction: " + score;
                    return output;
                }
            else if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Light"){
                    subClassArray.push(currentInput);
                    score = score + 2;
                    var output = "Welcome! The giver of life, Cleric! Please choose one of the below token and proceed to the Church and begin your Journey: \r Staff, \r Holy Water." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Light" && currentInput === "Staff"){
                    score = score + 3;
                    var output = "Welcome! Our Great Cleric! Please shine the light and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Light" && currentInput === "Holy Water"){
                    score = score + 0;
                    var output = "Welcome! Our Great Cleric! Purify and protect our lands." + "\n Points of destruction: " + score;
                    return output;
                }
            else if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Flame"){
                    subClassArray.push(currentInput);
                    score = score + 10;
                    var output = "Welcome! The yielder of the Flame of Purgatory! Please choose one of the below token and proceed to the Fire Place and begin your Journey: \r Spell Book, \r Cloak." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Flame" && currentInput === "Spell Book"){
                    score = score + 50;
                    var output = "Welcome! Our Flame Mage! Please raze the evil to nothingness and protect the peace of the land." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Flame" && currentInput === "Cloak"){
                    score = score + 0;
                    var output = "Welcome! Our Flame Mage! Raise the fire of protection and deter the evils." + "\n Points of destruction: " + score;
                    return output;
               }
            else if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Earth"){
                    subClassArray.push(currentInput);
                    score = score + 1;
                    var output = "Welcome! The sweet-talker of Nature, Durid! Please choose one of the below token and proceed to the Forest and begin your Journey: \r Tree Branch, \r Animal Skull."  + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Earth" && currentInput === "Tree Branch"){
                    score = score + 4;
                    var output = "Welcome! Our Durid! Please protect the land with the forces of nature." + "\n Points of destruction: " + score;
                    return output;
                }
                else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Earth" && currentInput === "Animal Skull"){
                    score = score + 10;
                    var output = "Welcome! Our Durid! Raise the pack and deter the evils." + "\n Points of destruction: " + score;
                    return output;
                }
            else if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Death"){
                    subClassArray.push(currentInput);
                    score = score + 3;
                    var output = "Welcome! Commander of the dead, Necromancer! Please choose one of the below token and proceed to the Forest and begin your Journey: \r Casket, \r Bandage." + "\n Points of destruction: " + score;
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Death" && currentInput === "Casket"){
                    score = score + 15;
                    var output = "Welcome! Necromancer! Please protect the land with the army of skeletons." + "\n Points of destruction: " + score;
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Death" && currentInput === "Bandage"){
                    score = score + 20;
                    var output = "Welcome! Necromancer! Please protect the land with the army of Mummies." + "\n Points of destruction: " + score;
                    return output;
            }
};