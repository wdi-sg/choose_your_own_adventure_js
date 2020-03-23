/* LORD OF THE RING adventure story.

7 outcomes
1. Throws the ring into Mount Doom
2. Frodo dies
3. Frodo runs away, middle earth dies
4. Boromir steals the ring away from Frodo
5. Sam and Frodo are no longer friends
6. Golumn lost his way and they never find mordor
7. Gandalf lets Balrog past...

*/
var init = function(){
    document.getElementById('input').value = "";
}

var name = "";
var companion = "";

var sam = {
    carryRing: "",
    situation: ""
}

var boromir = {
    carryRing: ""
}

var gandalf = {
    health: 5,
    path: "",
    fight: "",
    orc: "",
    balrog: "",
    reDirect: false,

    init: function(){
        this.path = "";
        this.fight = "";
        this.orc = "";
        this.balrog = "";
    }
}

var golumn = {
    guide: "",
    scold: ""
}

var enemy = [
    {
        type: "orc",
        health: 5,

        surviveRate: function(){
            return Math.floor(Math.random() * 10);
        },

        attack: function(){
            var chance = this.surviveRate()

            if(chance > 5){
                this.health--;
                if(this.health === 0){
                    gandalf.init();
                    gandalf.path = "y";
                    gandalf.fight = "escape";
                    gandalf.reDirect = true;
                    return `${name} won the battle. \n ${name} now faces the Balrog who is blocking his escape. Should ${name} escape first or, because of his Asian values, let Gandalf escape first? (you / gandalf) `
                }

                else if(this.health > 0){
                    return `number roll: ${chance} \n You successfully attacked the enemy. He has ${this.health} health left.`;
                }
            }else if (this.surviveRate() < 6) {
                gandalf.health--;
                if(gandalf.health === 0){
                    return `${name} died. GAME OVER`;
                }
                else if (gandalf.health > 0){
                    return `number roll: ${chance} \n You got attacked by the enemy. you have ${gandalf.health} health left.`
                }
            }
        }
    },

]


console.log("Hi, what is your name?")



var inputHappened = function(currentInput){
  //Ask name
  if(name === ""){
    name = currentInput;
    init();
    // console.log ("Who would you like to choose as your companion. Sam, Boromir, Gandalf or Golumn? (S / B / Ga / Go)");
    return `Your name is ${name}. \n Who would you like to choose as your companion. Sam, Boromir, Gandalf or Golumn? (S / B / Ga / Go)`;
  }

  //Ask Companion
  if(name && companion === ""){
    companion = currentInput;
    init();
    if(currentInput === "S"){
        // console.log(`Sam has been eyeing your ring of power over the past few days. Would ${name} let Sam carry his ring when he feels tired? (y / n)`);
        return `${name} chose Sam \n\n Sam has been eyeing your ring of power over the past few days. Would ${name} let Sam carry his ring when he feels tired? (y / n)`;
    }
    else if(currentInput === "B"){
        return `${name} chose Boromir \n\n Boromir tells ${name} that one does not simply take the ring to mordor. He offers to help carry ${name}'s ring. (y / n)`;
    }
    else if(currentInput === "Ga"){
        // console.log("Gandalf suggests that they take route of the dwarves because the current path is too treacherous (y / n)");
        return `${name} chose Gandalf \n\n Gandalf suggests that they take route of the dwarves because the current path is too treacherous (y / n)`;
    }

    else if(currentInput === "Go"){
        // console.log(`Golumn says he will be loyal to the precious and offers to lead ${name} to mordor. (y / n)`);
        return `${name} chose Golumn \n\n Golumn says he will be loyal to the precious and offers to lead ${name} to mordor. (y / n)`;
    }
  }

  /////////////////////Sam's story
  if (companion === 'S' && sam.carryRing === "") {
    sam.carryRing = currentInput;
    if(sam.carryRing === "y"){
        // console.log(`${name} let Sam carry his ring. Sam now hesitates when ${name} ask for it back. It seems as if Sam wants to keep it for himself. \n\n Ignore the situation and continue. \n\n Take it back from him and ask him to go back to the Shire. (ignore / shire)`);
        init()
        return `${name} let Sam carry his ring. Sam now hesitates when ${name} ask for it back. It seems as if Sam wants to keep it for himself. \n\n Ignore the situation and continue. \n\n Take it back from him and ask him to go back to the Shire. (ignore / shire)`;
    }
    else{
        // OUTCOME 5
        return `${name} denies him from helping. He hates that ${name} is suspicious of him, and they are no longer friends. He has abandoned ${name}. GAME OVER`
    }
  }

  // Whether to let Sam carry ring
  if (sam.carryRing === "y" && sam.situation === "") {
    sam.situation = currentInput;
    init();
  }

  //If Sam carry ring, ignore or go back shire
  if (sam.carryRing === "y" && sam.situation === "ignore") {
      //Outcome 1
      init();
      return `Congratulations for trusting Sam, ${name} successfully threw the ring into Mount Doom`
  }
  else if(sam.carryRing === "y" && sam.situation === "shire"){
      //Outcome 5
      init();
      return `${name}You deny him from helping. He hates that ${name} is suspicious of him, and they are no longer friends. He has abandoned ${name}. GAME OVER`
  }


  //////////////////////Boromir's story
  if (companion === "B" && boromir.carryRing === "") {
    boromir.carryRing = currentInput;
  }

  //Whether to let Boromir carry ring
  if (companion === "B" && boromir.carryRing === "y") {
    // Outcome 4
    return `${name} lets Boromir carry his ring. Poor decision. He stole the ring and ran away. That's such a Boromir thing to do. GAME OVER`;
  }else if (companion === "B" && boromir.carryRing === "n") {
    // Outcome 1
    return `Well done, ${name} didn't trust the snake. ${name} threw the ring into Mount Doom.`;
  }


  ////////////////////// Gandalf's story
  if (companion === "Ga" && gandalf.path === "") {
    gandalf.path = currentInput
    init()

    if (gandalf.path === "y") {
      // console.log(`The path is compromised. The orcs have taken over. ${name} is now deciding whether to escape, fight or go back to the previous treacherous path. (escape / fight / back)`);
      return (`${name} chose the route of the dwarves \n\n The path is compromised. The orcs have taken over. ${name} is now deciding whether to escape, fight or go back to the previous treacherous path. (escape / fight / back)`);
    }
    else if (gandalf.path === "n"){
        //Outcome 2
      return `the path is too treacherous, ${name} dies.`;
    }
  };

  // Fight orcs or Balrog
  if(gandalf.path === "y" && gandalf.fight === ""){
    gandalf.fight = currentInput
    init();
    if(gandalf.fight === "fight"){
        // console.log(`${name} now faces an army of ${enemy[0].type}. ${name} can run back to the treacherous path or roll a 10 face dice and fight. \n If the number is greater than 5, the enemy receives damage. If not, ${name} receives damage(run / fight)`);
        return `${name} now faces an army of ${enemy[0].type}. ${name} can run back to the treacherous path or roll a 10 face dice and fight. \n If the number is greater than 5, the enemy receives damage. If not, ${name} receives damage(run / fight)`;
    }
  };

  if (gandalf.fight === "fight") {
        gandalf.orc = currentInput;
        init();

        if(gandalf.orc === "fight"){
            gandalf.orc = "";
            console.log(gandalf);
            return `${enemy[0].attack()} \n Attack again or run? (fight / run)`;
            // return `${name} chose to fight the orcs. His survival rate is ${enemy[0].surviveRate}, he ${enemy[0].deadOrAlive()}`;
        }

        else if(gandalf.orc === "run"){
            gandalf.init();
            gandalf.path = "y"
            // console.log(`${name} is now deciding whether to escape, fight or go back to the previous treacherous path. (escape / fight / back)`);
            return `${name} chose to run from the fight. \n\n ${name} is now deciding whether to escape, fight or go back to the previous treacherous path. (escape / fight / back)`
        }
  };

  //fight balrog
  if (gandalf.fight === "escape" && gandalf.reDirect === false){
      // console.log(`${name} successfully escapes, ${name} now faces the Balrog who is blocking his escape. Should ${name} escape first or, because of his Asian values, let Gandalf jump first? (you / gandalf)`)
      gandalf.reDirect = true;
      return `${name} chose to escape. \n\n ${name} successfully escapes, ${name} now faces the Balrog who is blocking his escape. Should ${name} escape first or, because of his Asian values, let Gandalf jump first? (you / gandalf)`
  };

  // go back treacherous path
  if (gandalf.fight === "back"){
      gandalf.init();
      // console.log("Gandalf suggests that they take route of the dwarves because the current path is too treacherous (y / n)");
      return `${name} went back to the treacherous path \n\n Gandalf suggests that they take route of the dwarves because the current path is too treacherous (y / n)`;
  };


  // Outcome
  if(gandalf.fight === "escape"){
    gandalf.balrog = currentInput;
    init();

    if(gandalf.balrog === "gandalf"){
        // Outcome 7
        return `Gandalf praises ${name}'s Asian values. But he wasn't there to stop Balrog from passing. GAME OVER`
    }
    else if(gandalf.balrog === "you"){
        return `Gandalf tells the Balrog 'YOU SHALL NOT PASS'. ${name} successfully reach Mount Doom and throw the ring.`
    }
  };


  ////////////////////////// Golumn's Story

  if(companion === "Go" && golumn.guide === ""){
    golumn.guide = currentInput;
    init();

    if(golumn.guide === "y"){
        // console.log(`${name} sees Golumn trying to steal his ring. Does ${name} tell him off, or does ${name} hit Golumn on the head and threaten him? (scold / hit)`)
        return `${name} lets Golumn be his guide \n\n ${name} sees Golumn trying to steal his ring. Does ${name} tell him off, or does ${name} hit Golumn on the head and threaten him? (scold / hit)`;
    }
    else if(golumn.guide === "n"){
        //Outcome 3
        return `${name} is lost without a guide and he runs away forever. Middle Earth Dies. GAME OVER`
    }
  }

  if(golumn.guide === "y"){
    golumn.scold = currentInput;
    init();

    if(golumn.scold === "scold"){
        return `golumn says sorry and says he will never do it again. He successfully leads ${name} to mordor and ${name} throws the ring into Mount Doom`;
    }
    else if(golumn.scold === "hit"){
        return "Golumn suffers from a seizure and mild memory lost. He forgets how to go to Mordor and loses his way. Both of them die. GAME OVER."
    }
  }

};