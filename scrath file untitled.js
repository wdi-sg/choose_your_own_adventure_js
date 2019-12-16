   for (var i = 0; i < doctorChoice.length; i++) {
                doctorChoice = true
var planetChoice  = prompt("The Doctor welcomed you with fish fingers and custard. He asked: pick a planet - Earth, Skaros, or Tyop? ")
            if (planetChoice === "Earth") {
                 output = "Great Choice!";
                var monsterChoice = prompt("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === "Slimy") {
                        output = "Eeew! We need some tools!";
                        var toolChoice = prompt("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?")
                        if (toolChoice === "Sonic Screwdriver") {
                          output = "Yes! You saved the day!"
                        }//closes doctorChoice1 to planet1 to monster1 to Tool1
                        else if (toolChoice === "Lifeforce") {
                          output = "Interesting Choice but it's not strong enough!"
                        }//closes doctorChoice1 to planet1 to monster1 to Tool2
                        else {// tool choice is gun
                           output = "You know I will never touch a gun! Get off my TARDIS!"
                        }//closes doctorChoice1 to planet1 to monster1 to Tool3
                    }//closes doctorChoice1 to planet1 to monster 1
                    else if (monsterChoice === "Fat") {
                        output = "Eeew! We need some tools!"
                        var toolChoice = prompt("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?")
                        if (toolChoice === "Sonic Screwdriver") {
                            output = "Yes! You saved the day!"
                        }//closes doctorChoice1 to planet1 to monster2 to Tool1
                        else if (toolChoice === "Lifeforce") {
                           output = "Interesting Choice but it's not strong enough!"
                        }//closes doctorChoice1 to planet1 to monster2 to Tool2
                        else {// tool choice is gun
                            output = "You know I will never touch a gun! Get off my TARDIS!"
                        }//closes doctorChoice1 to planet1 to monster2 to Tool3
                    }// closes doctorChoice 1 to planet1 to monster 2
                    else {// Monster Choice = The Master
                       output = "Eeew! We need some tools!";
                            var toolChoice = prompt("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?")
                            if (toolChoice === "Sonic Screwdriver") {
                                output = "Yes! You saved the day!"
                            }//closes doctorChoice1 to planet1 to monster3 to Tool1
                            else if (toolChoice === "Lifeforce") {
                              output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice1 to planet1 to monster3 to Tool2
                            else {// tool choice is gun
                               output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice1 to planet1 to monster3 to Tool3
                        }//closes doctorChoice 1 to planet1 to monster3
            } //closes doctorChoice 1 to planet1
            else if (planetChoice === "Skaros") {
                 output = "Really?! But it's your choice!"
                var monsterChoice = alert("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === "Slimy") {
                       output = "Eeew! We need some tools!"
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?")
                            if (toolChoice === "Sonic Screwdriver") {
                             output = "Yes! You saved the day!";
                            }//closes doctorChoice 1 to planet2 to monster1 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice 1 to planet2 to monster1 to Tool2
                            else {
                               output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice 1 to planet2 to monster1 to Tool3
                    }//closes doctorChoice 1 to planet2 to monster1
                    else if (monsterChoice === "Fat") {
                       output = "Eeew! We need some tools!"
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?")
                        if (toolChoice === "Sonic Screwdriver") {
                           output = "Yes! You saved the day!"
                        }//closes toolChoice === "Lifeforce") {
                            output = "Interesting Choice but it's not strong enough!"
                        }//closes doctorChoice 1 to planet2 to monster2 to Tool2
                        else {
                            output = "You know I will never touch a gun! Get off my TARDIS!"
                        }//closes doctorChoice 1 to planet2 to monster2 to Tool3
                    //closes doctorChoice 1 to planet 2 to monster2
                    }else {// monster choice The Master
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?")
                            if (toolChoice === "Sonic Screwdriver") {
                                  output = "Yes! You saved the day!"
                            }//closes doctorChoice 1 to planet2 to monster3 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                  output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice 1 to planet2 to monster3 to Tool2
                            else {
                                  output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice 1 to planet2 to monster3 to Tool3
                        }//closes doctorChoice 1 to planet2 to monster3
            }//closes doctorChoice 1 to planet2
            else {// planet choice = Tyop
                  output = "Really?! But it's your choice!";
                var monsterChoice = alert("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === "Slimy") {
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                 output = "Yes! You saved the day!";
                            }//closes doctorChoice 1 to planet3 to monster1 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                 output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice 1 to planet3 to monster1 to Tool2
                            else {
                                 output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice 1 to planet3 to monster1 to Tool3
                    }//closes doctorChoice 1 to planet3 to monster1
                    else if (monsterChoice === "Fat") {
                          output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice === "Sonic Screwdriver") {
                              output = "Yes! You saved the day!";
                        }//closes doctorChoice 1 to planet3 to monster2 to Tool1
                        else if (toolChoice === "Lifeforce") {
                              output = "Interesting Choice but it's not strong enough!";
                        }//closes doctorChoice 1 to planet3 to monster2 to Tool2
                        else {
                              output = "You know I will never touch a gun! Get off my TARDIS!";
                        }//closes doctorChoice 1 to planet3 to monster2 to Tool3
                    }//closes doctorChoice 1 to planet3 to monster2
                    else {//monsterChoice = The Master
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                  output = "Yes! You saved the day!";
                            }//closes doctorChoice 1 to planet3 to monster3 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                 output = "Interesting Choice but it's not strong enough!";
                                }//closes doctorChoice 1 to planet3 to monster3 to Tool2
                            else {
                                  output = "You know I will never touch a gun! Get off my TARDIS!";
                                }//closes doctorChoice 1 to planet3 to monster3 to Tool3
                            } //closes doctorChoice1 to planet 3 to monster 3
                            }//closes doctorChoice1 to planet 3


                             if (planetChoice === Earth) {
                  output = "Great Choice!";
                var monsterChoice = alert("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === Slimy) {
                          output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice === "Sonic Screwdriver") {
                             output = "Yes! You saved the day!";
                        }//closes doctorChoice2 to planet1 to monster 1 to Tool1
                        else if (toolChoice === "Lifeforce") {
                            output = "Interesting Choice but it's not strong enough!"
                        }//closes doctorChoice2 to planet1 to monster1 to Tool2
                        else {// tool choice is gun
                             output = "You know I will never touch a gun! Get off my TARDIS!"
                        }//closes doctorChoice2 to planet1 to monster1 to Tool3
                    }//closes doctorChoice2 to planet1 to monster 1
                    else if (monsterChoice === Fat) {
                         output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice === "Sonic Screwdriver") {
                             output = "Yes! You saved the day!";
                        }//closes doctorChoice2 to planet1 to monster2 to Tool1
                        else if (toolChoice === "Lifeforce") {
                            output = "Interesting Choice but it's not strong enough!"
                        }//closes doctorChoice2 to planet1 to monster2 to Tool2
                        else {// tool choice is gun
                             output = "You know I will never touch a gun! Get off my TARDIS!"
                        }//closes doctorChoice2 to planet1 to monster2 to Tool3
                    }// closes doctorChoice 2 to planet1 to monster 2
                    else {// Monster Choice = The Master
                         output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                 output = "Yes! You saved the day!";
                            }//closes doctorChoice2 to planet1 to monster3 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice2 to planet1 to monster3 to Tool2
                            else {// tool choice is gun
                                 output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice2 to planet1 to monster3 to Tool3
                        }//closes doctorChoice 2 to planet1 to monster3
            } //closes doctorChoice 2 to planet1
            else if (planetChoice === Skaros) {
                  output = "Really?! But it's your choice!";
                var monsterChoice = alert("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === Slimy) {
                         output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                output = "Yes! You saved the day!";
                            }//closes doctorChoice 2 to planet2 to monster1 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                 output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice 2 to planet2 to monster1 to Tool2
                            else {
                                 output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice 2 to planet2 to monster1 to Tool3

                    }//closes doctorChoice 2 to planet2 to monster1
                    else if (monsterChoice ==== Fat) {
                         output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice === "Sonic Screwdriver") {
                            output = "Yes! You saved the day!";
                        }//closes doctorChoice 2 to planet2 to monster2 to Tool1
                        else if (toolChoice === "Lifeforce") {
                             output = "Interesting Choice but it's not strong enough!";
                        }//closes doctorChoice 2 to planet2 to monster2 to Tool2
                        else {
                            output = "You know I will never touch a gun! Get off my TARDIS!";
                        }//closes doctorChoice 2 to planet2 to monster2 to Tool3
                    }else {// monster choice The Master
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                  output = "Yes! You saved the day!";
                            }//closes doctorChoice 2 to planet2 to monster3 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                  output = "Interesting Choice but it's not strong enough!";
                            }//closes doctorChoice 1 to planet2 to monster3 to Tool2
                            else {
                                  output = "You know I will never touch a gun! Get off my TARDIS!";
                            }//closes doctorChoice 2 to planet2 to monster3 to Tool3
                        }//closes doctorChoice 2 to planet2 to monster3
            }//closes doctorChoice 2 to planet2
            else{// planet choice = Tyop
                  output = "Really?! But it's your choice!";
                var monsterChoice = alert("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === Slimy) {
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                 output = "Yes! You saved the day!";
                            }//closes doctorChoice 2 to planet3 to monster1 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                 output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice 2 to planet3 to monster1 to Tool2
                            else {
                                 output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice 2 to planet3 to monster1 to Tool3

                    }//closes doctorChoice 2 to planet3 to monster1
                    else if (monsterChoice === Fat) {
                          output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice === "Sonic Screwdriver") {
                              output = "Yes! You saved the day!";
                        }//closes doctorChoice 2 to planet3 to monster2 to Tool1
                        else if (toolChoice === "Lifeforce") {
                              output = "Interesting Choice but it's not strong enough!";
                        }//closes doctorChoice 2 to planet3 to monster2 to Tool2
                        else {
                              output = "You know I will never touch a gun! Get off my TARDIS!";
                        }//closes doctorChoice 2 to planet3 to monster2 to Tool3
                    }//closes doctorChoice 2 to planet3 to monster2
                    else {//monsterChoice = The Master
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                  output = "Yes! You saved the day!";
                            }//closes doctorChoice 2 to planet3 to monster3 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                 output = "Interesting Choice but it's not strong enough!";
                                }//closes doctorChoice 2 to planet3 to monster3 to Tool2
                            else {
                                  output = "You know I will never touch a gun! Get off my TARDIS!";
                                }//closes doctorChoice 2 to planet3 to monster3 to Tool3
                            }//closes doctorChoice 2 to planet 3 to monster3
                     } //closes doctorChoice2 to planet 3

                      if (planetChoice === Earth) {
                  output = "Great Choice!";
                var monsterChoice = alert("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === Slimy) {
                          output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice === "Sonic Screwdriver") {
                             output = "Yes! You saved the day!";
                        }//closes doctorChoice3 to planet1 to monster 1 to Tool1
                        else if (toolChoice === "Lifeforce") {
                            output = "Interesting Choice but it's not strong enough!"
                        }//closes doctorChoice3 to planet1 to monster1 to Tool2
                        else {// tool choice is gun
                             output = "You know I will never touch a gun! Get off my TARDIS!"
                        }//closes doctorChoice3 to planet1 to monster1 to Tool3
                    }//closes doctorChoice3 to planet1 to monster 1
                    else if (monsterChoice === Fat) {
                         output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice === "Sonic Screwdriver") {
                             output = "Yes! You saved the day!";
                        }//closes doctorChoice3 to planet1 to monster2 to Tool1
                        else if (toolChoice === "Lifeforce") {
                            output = "Interesting Choice but it's not strong enough!"
                        }//closes doctorChoice3 to planet1 to monster2 to Tool2
                        else {// tool choice is gun
                             output = "You know I will never touch a gun! Get off my TARDIS!"
                        }//closes doctorChoice3 to planet1 to monster2 to Tool3
                    }// closes doctorChoice 3 to planet1 to monster 2
                    else {// Monster Choice = The Master
                         output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                 output = "Yes! You saved the day!";
                            }//closes doctorChoice3 to planet1 to monster3 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice3 to planet1 to monster3 to Tool2
                            else {// tool choice is gun
                                 output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice3 to planet1 to monster3 to Tool3
                        }//closes doctorChoice 3 to planet1 to monster3
            } //closes doctorChoice 3 to planet1
            else if (planetChoice === Skaros) {
                  output = "Really?! But it's your choice!";
                var monsterChoice = alert("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === Slimy) {
                         output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                output = "Yes! You saved the day!";
                            }//closes doctorChoice 3 to planet2 to monster1 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                 output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice 3 to planet2 to monster1 to Tool2
                            else {
                                 output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice 3 to planet2 to monster1 to Tool3

                    }//closes doctorChoice 3 to planet2 to monster1
                    else if (monsterChoice === Fat) {
                         output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice === "Sonic Screwdriver") {
                            output = "Yes! You saved the day!";
                        }//closes doctorChoice 3 to planet2 to monster2 to Tool1
                        else if (toolChoice === "Lifeforce") {
                             output = "Interesting Choice but it's not strong enough!";
                        }//closes doctorChoice 3 to planet2 to monster2 to Tool2
                        else {
                            output = "You know I will never touch a gun! Get off my TARDIS!";
                        }//closes doctorChoice 3 to planet2 to monster2 to Tool3
                    }else {// monster choice The Master
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice === "Sonic Screwdriver") {
                                  output = "Yes! You saved the day!";
                            }//closes doctorChoice 3 to planet2 to monster3 to Tool1
                            else if (toolChoice === "Lifeforce") {
                                  output = "Interesting Choice but it's not strong enough!";
                            }//closes doctorChoice 3 to planet2 to monster3 to Tool2
                            else {
                                  output = "You know I will never touch a gun! Get off my TARDIS!";
                            }//closes doctorChoice 3 to planet2 to monster3 to Tool3
                        }//closes doctorChoice 3 to planet2 to monster3
            }//closes doctorChoice 3 to planet2
            else{// planet choice = Tyop
                  output = "Really?! But it's your choice!";
                var monsterChoice = alert("We need to fight some Monsters. There are so many, you get to pick. Slimy, Fat, or The Master?");
                    if (monsterChoice === Slimy) {
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (ToolChoice === "Sonic Screwdriver") {
                                 output = "Yes! You saved the day!";
                            }//closes doctorChoice 3 to planet3 to monster1 to Tool1
                            else if (toolChoice ==== "Lifeforce") {
                                 output = "Interesting Choice but it's not strong enough!"
                            }//closes doctorChoice 3 to planet3 to monster1 to Tool2
                            else {
                                 output = "You know I will never touch a gun! Get off my TARDIS!"
                            }//closes doctorChoice 3 to planet3 to monster1 to Tool3

                    }//closes doctorChoice 3 to planet3 to monster1
                    else if (monsterChoice ==== "Fat") {
                          output = "Eeew! We need some tools!";
                        var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                        if (toolChoice ==== "Sonic Screwdriver") {
                              output = "Yes! You saved the day!";
                        }//closes doctorChoice 3 to planet3 to monster2 to Tool1
                        else if (toolChoice ==== "Lifeforce") {
                              output = "Interesting Choice but it's not strong enough!";
                        }//closes doctorChoice 3 to planet3 to monster2 to Tool2
                        else {
                              output = "You know I will never touch a gun! Get off my TARDIS!";
                        }//closes doctorChoice 3 to planet3 to monster2 to Tool3
                    }//closes doctorChoice 3 to planet3 to monster2
                    else {//monsterChoice = The Master
                          output = "Eeew! We need some tools!";
                            var toolChoice = alert("Pick a Tool: Sonic Screwdriver, Gun or Lifeforce?");
                            if (toolChoice ==== "Sonic Screwdriver") {
                                  output = "Yes! You saved the day!";
                            }//closes doctorChoice 3 to planet3 to monster3 to Tool1
                            else if (toolChoice ==== "Lifeforce") {
                                 output = "Interesting Choice but it's not strong enough!";
                                }//closes doctorChoice 3 to planet3 to monster3 to Tool2
                            else {
                                  output = "You know I will never touch a gun! Get off my TARDIS!";
                                }//closes doctorChoice 3 to planet3 to monster3 to Tool3
                            }//closes doctorChoice 3 to planet 3 to monster3
                     } //closes doctorChoice3 to planet 3