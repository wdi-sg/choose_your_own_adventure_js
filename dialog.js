var getDialog = function() {

//Stage 1 - Leaving the bed
gameDialog[1] = `[ ${name}!! Wake up!! ]<br>As you open your eyes, you see your mom standing next to you. <br><br> [ If you don't get out of bed, you'll be late to get your first Pokémon from Professor Oak! ] <br><br>That's right, today's the big day. You were so excited, you could barely sleep! Actually, you feel kinda tired.. <br><br>Type <span style ="color: #4682B4">zzz</span> to continue sleeping, or <span style ="color: #4682B4">leave</span> to get out of bed.`;

gameDialog[2] = "You decide to go back to bed. Sleep is more important than being the very best,like no one ever was.<br><br>GAME OVER.";

//Stage 2 - Choose your Pokemon
gameDialog[3] = `You rush out of your house and to the Pokémon lab. Your rival is already there along with Professor Oak, who greets you when you come in.<br><br>[ Ah, just on time ${name}! ${rival} was about to choose their Pokémon. But I'll let you go first, hehe. Who will you choose as your starter? ]<br><br><img src= 'images/download.png' height = '300px'><br><br>Type <span style ="color: #4682B4">C</span> for Charmander, <span style ="color: #4682B4">B</span> for Bulbasaur, or <span style ="color: #4682B4">S</span> for Squirtle.`;

gameDialog[4] = `<img src= 'images/charmander.png' height = '300px'><br><br>Congratulations! You got the fire Pokémon, CHARMANDER!<br><br>Type <span style ="color: #4682B4">enter</span> to continue.`

gameDialog[5] = `<img src= 'images/bulbasaur.png' height = '300px'><br><br>Congratulations! You got the grass Pokémon, BULBASAUR!<br><br>Type <span style ="color: #4682B4">enter</span> to continue.`

gameDialog[6] = `<img src= 'images/squirtle.png' height = '300px'><br><br>Congratulations! You got the water Pokémon, SQUIRTLE!<br><br>Type <span style ="color: #4682B4">enter</span> to continue.`

//Stage 3 - Rival Battle
gameDialog[7] = `${rival} grabs the Pokéball holding ${rivalStarter.name}. <br><br> [ Hey, ${name}! Let's test out our new Pokémon right now. I challenge you to a Pokémon battle! ]<br><br><img src= 'images/rival.png' height = '300px'><br><br> Type <span style ="color: #4682B4">fight</span> to accept the battle, or <span style ="color: #4682B4">flee</span> to decline.`

gameDialog[8] = "you: want to be a Pokémon trainer<br>other trainer: challenges you to a Pokémon battle<br>you:<br><img src='images/shooketh.png' height = '300px'><br><br>GAME OVER."

gameDialog[9] = `You are challenged to a battle by ${rival}!<br>${rival} sends out ${rivalStarter.name}!<br><br>What should ${starter.name} do?<br><br>Type <span style ="color: #4682B4">attack</span> or <span style ="color: #4682B4">defend</span>.`
};