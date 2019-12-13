'https://danielstern.github.io/cyo/'

<story>
  <h2>A Game</h2>
  <page intro>
      <p>You're in a spooky forest.</p>
      <p>"You'll never get out of here alive," says Smeemog, the grumpy dwarf.</p>
      <p>"I'll show you who won't get out of here alive," you say, but deep down, you're worried he's right.</p>
      <button choice stay-put>Wait to get rescued</button>
      <button choice look-around>We must explore this magic forest</button>
  </page>
  <page stay-put>
      <p>"We should wait here until we get rescued."</p>
      <p>"Thought it might be snakes, or maybe a pit, but I never thought I'd be <i>bored</i> to death."</p>
      <p>In the clearing of the forest, there are three rocks, a tree, and, in another tree, a preposterous-looking owl.</p>
      <button choice investigate-rocks>I ought to investigate these rocks</button>
      <button choice check-tree-out>I want to check out this tree</button>
      <button choice talk-to-owl>"Hey you! Owl! I'm talking to you."</button>
  </page>
  <page talk-to-owl>
      <p>For a while you talk to the owl. It seems to ignore you. Suddenly, it cocks its head towards a hollow in an old tree.</p>
      <p>You reach inside, and pull out a mysterious wooden flute.</p>
      <event got-flute></event>
      <p>"Hmm, now I've seen everything".</p>
      <button choice taunt-owl>I ought to taunt that preposterous owl.</button>
      <button choice look-around>Let's get moving.</button>
  </page>
  <page taunt-owl>
      <p>One thing about yourself that you know for sure - you hate owls/</p>
      <p>"Hey! Owl! You're stupid-looking!"</p>
      <p>The owl cocks its head at you bemusedly.</p>
      <p>What a stupid owl, you laugh.</p>
      <p>Suddenly, the owl swoops down and carries you off. It is a big owl indeed.</p>
      <p><i>You are never seen again.</i>
      </p>
      <button restart>Play again?</button>
  </page>
  <page investigate-rocks>
      <p>You walk up to the pile of rocks.</p>
      <p>It's just a pile of rocks, you think.</p>
      <button choice look-around>Let's get out of here.</button>
  </page>
  <page check-tree-out>
      <p>You walk up to the tree. You reckon it to be mighty old. Maybe a bazillion years or more. You notice a strange carving on the tree.</p>
      <p>The carving depicts a great monster, twenty feet tall or more.</p>
      <p>"Pshh. A huge monster, have you ever heard anything so ridiculous, Smeemog? ... Smee?"</p>
      <p>You turn around, but in fact Smeemog has been eaten by a giant monster.</p>
      <p>The monster devours you as you beg for mercy.</p>
      <button restart>Play again?</button>
  </page>
  <page look-around>
      <p>"Let's get out of here," you say to the dwarf.</p>
      <p>"Fool!" He shouts. "Fool!" But he follows anyways.</p>
      <p>After a short time, you see a bridge and, on the other side, the exit of the woods.</p>
      <p>As you are crossing, a fearsome troll climbs out from under the bridge.</p>
      <p>"Who dare to cross me bridge?" he bellows.</p>
      <button choice introduce>Introduce yourself.</button>
      <condition got-flute>
          <button choice play-flute>Play the flute.</button>
      </condition>
  </page>
  <page play-flute>
      <p>You play the flute, and the troll disappears in a cloud of smoke.</p>
      <p>"I'll get you, Owl!" he curses.</p>
      <p>You and Smeemog escape the forest safely.</p>
      <p><i>You win!</i>
      </p>
      <button restart>Play again?</button>
  </page>
  <page introduce>
      <p>"It is we," you say.</p>
      <p>"I care not who ye are! I demand yer bones as payment for trespassin'."</p>
      <p><i>You're boned!</i>
      </p>
      <button restart>Play again?</button>
  </page>
</story>