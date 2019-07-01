//default states
var question = '';
var flag_start_game = 0;
var score = 0;

//replace inputHappened func here, with custom func below
storyStart();

function storyStart(answer) {
// clear question var before story start
question = "";

//start story from beginning
if (flag_start_game === 0)
{
    answer = 'start-here';
    flag_start_game = 1;
}

switch(answer)
{
case "start-here":
      question = "You're in a spooky forest.\nYou'll never get out of here alive, says Smeemog, the grumpy dwarf.\nI'll show you who won't get out of here alive, you say, but deep down, you're worried he's right.\nstay-put:Wait to get rescued:\nlook-around:We must explore this magic forest:\n";
  break;
  case "stay-put":
      question = "We should wait here until we get rescued.\nThought it might be snakes, or maybe a pit, but I never thought I'd be <i:bored</i: to death.\nIn the clearing of the forest, there are three rocks, a tree, and, in another tree, a preposterous-looking owl.\ninvestigate-rocks:I ought to investigate these rocks:\ncheck-tree-out:I want to check out this tree:\ntalk-to-owl:Hey you! Owl! I'm talking to you.:\n"; score++;
  break;
  case "talk-to-owl":
      question = "For a while you talk to the owl. It seems to ignore you. Suddenly, it cocks its head towards a hollow in an old tree.\nYou reach inside, and pull out a mysterious wooden flute.\nHmm, now I've seen everything.:\ntaunt-owl:I ought to taunt that preposterous owl.:\nlook-around:Let's get moving.:\n";score++;
  break;
  case "taunt-owl":
      question = "One thing about yourself that you know for sure - you hate owls/\nHey! Owl! You're stupid-looking!\nThe owl cocks its head at you bemusedly.\nWhat a stupid owl, you laugh.\nSuddenly, the owl swoops down and carries you off. It is a big owl indeed.\nYou are never seen again.\nrestart:Play again?:\n";score++;
  break;
  case "investigate-rocks":
      question = "You walk up to the pile of rocks.\nIt's just a pile of rocks, you think.\nlook-around:Let's get out of here.:\n";score++;
  break;
  case "check-tree-out":
      question = "You walk up to the tree. You reckon it to be mighty old. Maybe a bazillion years or more. You notice a strange carving on the tree.\nThe carving depicts a great monster, twenty feet tall or more.\nPshh. A huge monster, have you ever heard anything so ridiculous, Smeemog? ... Smee?\nYou turn around, but in fact Smeemog has been eaten by a giant monster.\nThe monster devours you as you beg for mercy.\n\nYour score is " + (++score) + "\n\nrestart:Play again?:\n";
  break;
  case "look-around":
      question = "Let's get out of here, you say to the dwarf.\nFool! He shouts. Fool! But he follows anyways.\nAfter a short time, you see a bridge and, on the other side, the exit of the woods.\nAs you are crossing, a fearsome troll climbs out from under the bridge.\nWho dare to cross me bridge? he bellows.\nintroduce:Introduce yourself.:\nplay-flute:Play the flute.:\n";score++;
  break;
  case "play-flute":
      question = "You play the flute, and the troll disappears in a cloud of smoke.\nI'll get you, Owl! he curses.\nYou and Smeemog escape the forest safely.\nYou win!\n\nYour score is " + (++score) + "\n\nrestart:Play again?:\n";
  break;
  case "introduce":
      question = "It is we, you say.\nI care not who ye are! I demand yer bones as payment for trespassin'.\nYou're boned!\n\nYour score is " + (++score) + "\n\nrestart:Play again?:\n";
  break;
  case "restart":
              flag_start_game = 0;
              storyStart();
              score = 0;
              break;
}
if (question != "")
{
        display(question);
        // clear cache in input field
        document.querySelector('#input').value = "";
}
}

