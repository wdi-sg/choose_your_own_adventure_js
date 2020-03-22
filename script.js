var userName = [];
var classArray = [];
var subClassArray =[];
var tokenToTake =[];

var inputHappened = function(currentInput){
    if (userName.length === 0){
    userName.push(currentInput);
    console.log(userName);
    var output = "Good Evening " + userName[0] + ". We come to your class advancement. Please choose to advance into one of the below classes : \r Warrior, \r Magician.";
    return output;
    }
        if (userName.length === 1 && classArray.length === 0){
            classArray.push(currentInput);
            var output = "Ahhhh, you have chosen the path of a Mighty " + classArray[0] + ". To aid in your quest of Great Strength, please choose one of the below, which, do you feel the closest to: \r Light, \r Flame, \r Earth, \r Death.";
            return output;
        }
            if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Light"){
                subClassArray.push(currentInput);
                var output = "Welcome! Our Great Paladin! Please Choose one of the below token and proceed to the hall of light and begin your Journey: \r Sword, \r Mace.";
                return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Light" && currentInput === "Sword"){
                    var output = "Welcome! Our Great Paladin! From the Hall of Light, please slay the demons off the roads and protect the peace of the land.";
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Light" && currentInput === "Mace"){
                    var output = "Welcome! Our Great Paladin! From the Hall of Light, please protect the people and ward off the evil.";
                    return output;
                }
            else if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Flame"){
                    subClassArray.push(currentInput);
                    var output = "Welcome! The Destroyer! Please choose one of the below token and proceed to the hall of destruction and begin your Journey: \r Lantern. \r Oil."
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Flame" && currentInput === "Lantern"){
                    var output = "Welcome! Our Great Destroyer! Please Burn off the demons off the roads and protect the peace of the land.";
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Flame" && currentInput === "Oil"){
                    var output = "Welcome! Our Great Destroyer! Please raze the evil off the land.";
                    return output;
            }
            else if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Earth"){
                    subClassArray.push(currentInput);
                    var output = "Welcome! Our Mighty Tank! Please choose one of the below token and proceed to the hall of Shields and begin your Journey: \r Shield, \r Plate Armor."
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Earth" && currentInput === "Shield"){
                    var output = "Welcome! Our Great Tank! Please Shield the demons off the roads and protect the peace of the land.";
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Earth" && currentInput === "Plate Armor"){
                    var output = "Welcome! Our Great Tank! Please protect the sanity of the land.";
                    return output;
            }
            else if (userName.length === 1 && classArray[0] === "Warrior" && currentInput === "Death"){
                    subClassArray.push(currentInput);
                    var output = "Welcome! The commander of darkness! Please choose one of the below token and proceed to the graveyard and begin your Journey: \r Tombstone, \r Shovel."
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Death" && currentInput === "Tombstone"){
                    var output = "Welcome! Our Death Knight! Please smash the demons off the roads and protect the peace of the land.";
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Warrior" && subClassArray[0] === "Death" && currentInput === "Shovel"){
                    var output = "Welcome! Our Death Knight! Please rise the troops and protect our lands.";
                    return output;
            }
            else if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Light"){
                    subClassArray.push(currentInput);
                    var output = "Welcome! The giver of life, Cleric! Please choose one of the below token and proceed to the Church and begin your Journey: \r Staff, \r Holy Water."
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Light" && currentInput === "Staff"){
                    var output = "Welcome! Our Great Cleric! Please shine the light and protect the peace of the land.";
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Light" && currentInput === "Shovel"){
                    var output = "Welcome! Our Great Cleric! Purify and protect our lands.";
                    return output;
            }
            else if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Flame"){
                    subClassArray.push(currentInput);
                    var output = "Welcome! The yielder of the Flame of Purgatory! Please choose one of the below token and proceed to the Fire Place and begin your Journey: \r Spell Book, \r Cloak."
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Flame" && currentInput === "Spell Book"){
                    var output = "Welcome! Our Flame Mage! Please raze the evil to nothingness and protect the peace of the land.";
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Flame" && currentInput === "Cloak"){
                    var output = "Welcome! Our Flame Mage! Raise the fire of protection and deter the evils.";
                    return output;
            }
            else if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Earth"){
                    subClassArray.push(currentInput);
                    var output = "Welcome! The sweet-talker of Nature, Durid! Please choose one of the below token and proceed to the Forest and begin your Journey: \r Tree Branch, \r Animal Skull."
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Earth" && currentInput === "Tree Branch"){
                    var output = "Welcome! Our Durid! Please protect the land with the forces of nature.";
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Earth" && currentInput === "Animal Skull"){
                    var output = "Welcome! Our Durid! Raise the pack and deter the evils.";
                    return output;
            }
            else if (userName.length === 1 && classArray[0] === "Magician" && currentInput === "Death"){
                    subClassArray.push(currentInput);
                    var output = "Welcome! Commander of the dead, Necromancer! Please choose one of the below token and proceed to the Forest and begin your Journey: \r Casket, \r Bandage."
                    return output;
            }
                if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Death" && currentInput === "Casket"){
                    var output = "Welcome! Necromancer! Please protect the land with the army of skeletons.";
                    return output;
                } else if (userName.length === 1 && classArray[0] === "Magician" && subClassArray[0] === "Death" && currentInput === "Bandage"){
                    var output = "Welcome! Necromancer! Please protect the land with the army of Mummies.";
                    return output;
            }
};