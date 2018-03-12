// Tasks left:
// 1. Get character name from player
// 2. (DONE, somewhat. Forces a reload, but it'll do for now.) Add ability to restart the game (you will need to be able to randomize enemies somewhat in the rooms)
// 3. (Doesn't seem like it'll fit. But hey! Loot! Combat system! Hitpoints! Damage!) Keep score for things? Maybe?
// 4. Randomize rooms?
// 5. (DONE) Re-organize data structures. Use classes for enemies, loot, character.
// 6. (DONE, somewhat.) Good to have as a stepping stone: a game timer system.
// 6. Moonshot: implement spell system (I REQUIRE MORE COFFEE) and an active time battle system (DONE :D).
// 7. Moonshot: implement NPC eventing system? (I REQUIRE MORE COFFEE)
// 8. Moonshot: convert the thing to a PWA with the JS game engine downloaded and the data to be pulled from the backend via a service worker.
// 9. Moonshot: once the game data (loot, room, character, spell) has been converted to external JSON files, write a game editor and turn it into an Electron app.

const START_HP = 20;
const START_MAXHP = 30;
const START_MINDMG = 1;
const START_MAXDMG = 2;
const FPS = 60;

const ENEMY_PANEL = document.getElementById('enemies');
const INVENTORY_PANEL = document.getElementById('inventory-list');
const CHAR_PANEL = document.getElementById('character-panel');

let COOLDOWN_ARRAY = [];
let SYS_TIMER;

let currentRoom = 0;
let canMove = true;
let acceptInput = true;
let canMoveMsg = '';
let characters = [];
let characterSelected = 0;
let gameOver = false;

var characterData = {
	playerOne: {
		name: 'Fizban',
		hp: 20,
		maxhp: 30,
		mindmg: 1,
		maxdmg: 2,
		cooldown: 1500,
		inventory: [],
	}
};

let CHAR_COUNT = 0;
let ENEMY_COUNT = 0;

class character {
	constructor (characterShortName) {
		let char = characterData[characterShortName];
		this.name = char.name;
		this.type = 'PC';
		this.hp = char.hp;
		this.maxhp = char.maxhp;
		this.mindmg = char.mindmg;
		this.maxdmg = char.maxdmg;
		this.defaultcooldown = char.cooldown;
		this.cooldown = char.cooldown;
		this.inventory = char.inventory;
		this.canMove = true;
		this.canAttack = true;
		this.cooldownCount = char.cooldown;

		this.UIIndex = CHAR_COUNT;
		CHAR_COUNT++;

		this.UIElement = document.createElement('div');
		this.UIElement.setAttribute('class', 'character');
		this.UIElement.setAttribute('id','c-'+this.name);

		let charName = document.createElement('p');
		charName.setAttribute('class', 'character-info');
		charName.setAttribute('id', 'character-name-' + this.name);
		charName.innerHTML = this.name;

		let charHP = document.createElement('p');
		charHP.setAttribute('class', 'character-info');
		charHP.setAttribute('id', 'character-hp-' + this.name);
		charHP.innerHTML = 'HP: ' + this.hp + ' / ' + this.maxhp;

		let charDMG = document.createElement('p');
		charDMG.setAttribute('class', 'character-info');
		charDMG.setAttribute('id', 'character-dmg-' + this.name);
		charDMG.innerHTML = 'Damage: ' + this.mindmg + ' - ' + this.maxdmg;

		let charCooldown = document.createElement('progress');
		charCooldown.setAttribute('class', 'character-info cooldown');
		charCooldown.setAttribute('id', 'character-cooldown-' + this.name);
		charCooldown.setAttribute('value', '100');
		charCooldown.setAttribute('max', '100');

		this.UIElement.appendChild(charName);
		this.UIElement.appendChild(charHP);
		this.UIElement.appendChild(charDMG);
		this.UIElement.appendChild(charCooldown);

		this.cooldownIndicator = charCooldown;

		CHAR_PANEL.appendChild(this.UIElement);
	}

	adjusthp(delta) {
		this.hp += delta;
		if (this.hp < 0) {
			this.hp = 0;
		}
		if (this.hp > this.maxhp) {
			this.hp = this.maxhp;
		}
		document.getElementById('character-hp-' + this.name).innerHTML = 'HP: ' + this.hp + ' / ' + this.maxhp;
	}

	adjustmaxhp(delta) {
		this.maxhp += delta;
		if (this.maxhp < 0) {
			this.maxhp = 0;
		}
		if (this.maxhp < this.hp) {
			this.hp = this.maxhp;
		}
		document.getElementById('character-hp-' + this.name).innerHTML = 'HP: ' + this.hp + ' / ' + this.maxhp;
	}

	adjustmindmg(delta) {
		this.mindmg += delta;
		if (this.mindmg < 0) {
			this.mindmg = 0;
		}
		if (this.mindmg >= this.maxdmg) {
			this.mindmg = this.maxdmg - 1;
		}
		document.getElementById('character-dmg-' + this.name).innerHTML = 'Damage: ' + this.mindmg + ' - ' + this.maxdmg;
	}
    
	adjustmaxdmg(delta) {
		this.maxdmg += delta;
		if (this.maxdmg < 0) {
			this.maxdmg = 1;
		}
		if (this.maxdmg <= this.mindmg) {
			this.maxdmg = this.mindmg + 1;
		}
		document.getElementById('character-dmg-' + this.name).innerHTML = 'Damage: ' + this.mindmg + ' - ' + this.maxdmg;
	}

	attack(enemy) {
		let dmg = this.mindmg + Math.floor(Math.random() * (this.maxdmg - this.mindmg + 1));
		enemy.receiveHit(this, dmg);
		gameMessage(this.name + ' hits ' + enemy.name + ' for ' + dmg + ' damage!');
		this.canAttack = false;
		this.cooldownCount = 0;
		this.cooldownIndicator.setAttribute('value', this.cooldownCount / this.cooldown);
		COOLDOWN_ARRAY.push(this);
		if (!SYS_TIMER) {
			SYS_TIMER = setInterval(timerduties, 167);
		}
	}

	receiveHit(enemy, dmg) {
		this.adjusthp(-dmg);
		if (this.hp <= 0) {
			this.kill();
		}
	}

	kill() {
		this.adjusthp(-this.hp);
		gameMessage('You died', 'red');
		document.getElementById('input').style.display = 'none'; document.removeEventListener('keypress', go);
		gameOver = true;
		setTimeout(toggleModal, 3000);
	}
}

class enemy {
	constructor (enemyShortName) {
		let enemy = enemyData[enemyShortName];
		this.name = enemy.name;
		this.type = 'enemy';
		this.hp = enemy.hp;
		this.maxhp = enemy.maxhp;
		this.mindmg = enemy.mindmg;
		this.maxdmg = enemy.maxdmg;
		this.cooldown = enemy.cooldown;
		this.canFlee = enemy.canFlee;
		this.loot = enemy.loot;
		this.canAttack = true;
		this.cooldownCount = enemy.cooldown;
		this.inSameRoomAsPlayer = true;

		this.UIIndex = ENEMY_COUNT;
		ENEMY_COUNT++;

		this.UIElement = document.createElement('li');
		this.UIElement.setAttribute('class', 'enemy');
		this.UIElement.setAttribute('id','e-' + this.UIIndex);

		this.UIElement.innerHTML = this.name + ': <span id="e-hp-' + this.UIIndex + '">' + this.hp + '</span> / <span id="e-maxhp-' + this.UIIndex + '">' + this.maxhp + '</span>';

		this.cooldownIndicator = document.createElement('progress');
		this.cooldownIndicator.setAttribute('class', 'cooldown');
		this.cooldownIndicator.setAttribute('id','e-cooldown-' + this.UIIndex);
		this.cooldownIndicator.setAttribute('value','100');
		this.cooldownIndicator.setAttribute('max','100');

		this.UIElement.appendChild(this.cooldownIndicator);

		ENEMY_PANEL.appendChild(this.UIElement);
	}

	hide() {
		this.UIElement.style.display = 'none';
	}

	show() {
		this.UIElement.style.display = 'block';
	}

	adjusthp(delta) {
		this.hp += delta;
		if (this.hp < 0) {
			this.hp = 0;
		}
		if (this.hp > this.maxhp) {
			this.hp = this.maxhp;
		}
		// document.getElementById('e-' + this.UIIndex).innerHTML = this.name + ': ' + this.hp + ' / ' + this.maxhp;
		document.getElementById('e-hp-' + this.UIIndex).innerHTML = this.hp;
        
	}

	adjustmaxhp(delta) {
		this.maxhp += delta;
		if (this.maxhp < 0) {
			this.maxhp = 0;
		}
		if (this.maxhp < this.hp) {
			this.hp = this.maxhp;
		}
		// document.getElementById('e-' + this.UIIndex).innerHTML = this.name + ': ' + this.hp + ' / ' + this.maxhp;
		document.getElementById('e-maxhp-' + this.UIIndex).innerHTML = this.maxhp;
	}

	adjustmindmg(delta) {
		this.mindmg += delta;
		if (this.mindmg < 0) {
			this.mindmg = 0;
		}
		if (this.mindmg >= this.maxdmg) {
			this.mindmg = this.maxdmg - 1;
		}
	}
    
	adjustmaxdmg(delta) {
		this.maxdmg += delta;
		if (this.maxdmg < 0) {
			this.maxdmg = 1;
		}
		if (this.maxdmg <= this.mindmg) {
			this.maxdmg = this.mindmg + 1;
		}
	}

	attack(char) {
		let dmg = this.mindmg + Math.floor(Math.random() * (this.maxdmg - this.mindmg + 1));
		char.receiveHit(this, dmg);
		gameMessage(this.name + ' hits ' + char.name + ' for ' + dmg + ' damage!', 'red');
		this.canAttack = false;
		this.cooldownCount = 0;
		this.cooldownIndicator.setAttribute('value', this.cooldownCount / this.cooldown);
		COOLDOWN_ARRAY.push(this);
		if (!SYS_TIMER) {
			SYS_TIMER = setInterval(timerduties, 167);
		}
	}

	receiveHit(enemy, dmg) {
		this.adjusthp(-dmg);
		if (this.hp <= 0) {
			this.kill();
		}
	}

	kill() {
		this.UIElement.parentNode.removeChild(this.UIElement);
		gameMessage(characters[characterSelected].name + ' killed ' + this.name + '!');
		roomData[currentRoom].currentEnemies.splice(roomData[currentRoom].currentEnemies.indexOf(this), 1);
		if (roomData[currentRoom].currentEnemies.length == 0) {
			canMove = true;
			roomData[currentRoom].clear = true;
		}
	}
}


// Timer coalescing for performance (rather than spamming timers for every single character, we run a single timer that fires every 1/60 seconds for 60fps)
function timerduties () {
	// Handle Cooldowns
	for (let i = 0; i < COOLDOWN_ARRAY.length; i++) {
		// First check that the character / enemy is actually still alive.
		if (COOLDOWN_ARRAY[i].hp <= 0) {
			COOLDOWN_ARRAY.splice(i, 1);
		} else {
			COOLDOWN_ARRAY[i].cooldownCount += 167;
			COOLDOWN_ARRAY[i].cooldownIndicator.setAttribute('value', (COOLDOWN_ARRAY[i].cooldownCount / COOLDOWN_ARRAY[i].cooldown) * 100);
			if (COOLDOWN_ARRAY[i].cooldownCount >= COOLDOWN_ARRAY[i].cooldown) {
				COOLDOWN_ARRAY[i].cooldownIndicator.setAttribute('value', 100);
				COOLDOWN_ARRAY[i].cooldownCount = COOLDOWN_ARRAY[i].cooldown;
				COOLDOWN_ARRAY[i].canAttack = true;
				if (COOLDOWN_ARRAY[i].type == 'enemy') {
					COOLDOWN_ARRAY[i].attack(characters[characterSelected]);
				}
				COOLDOWN_ARRAY.splice(i, 1);
			}
		}
	}
	if (COOLDOWN_ARRAY.length == 0 || gameOver) {
		clearInterval(SYS_TIMER);
		SYS_TIMER = null;
	}
}

function print(message) {
	// Utility function to show the status of the game on the page
	document.getElementById('game-text').innerHTML = message;
}

function getNavString(index) {
	let result = '<br><br> Go ... ';
	let tmp = true;
	for (let key in roomData[index].navChoices) {
		tmp = false;
		switch (key) {
		case 'n':
			result += '<br>(<span class=\'hotkey\'>N</span>)orth';
			break;
		case 's':
			result += '<br>(<span class=\'hotkey\'>S</span>)outh';
			break;
		case 'e':
			result += '<br>(<span class=\'hotkey\'>E</span>)ast';
			break;
		case 'w':
			result += '<br>(<span class=\'hotkey\'>W</span>)est';
			break;
		default:
			console.error('Undefined nav option');
			break;
		}
	}
	if (tmp) {
		return '';
	} else {
		return result;
	}
}

function roomHasItem(index, itemName) {
	let result = -1;
	for (let key in roomData[index].currentloot) {
		if (roomData[index].currentloot[key].name.toLowerCase() == itemName.toLowerCase()) {
			result = key;
			break;
		}
	}
	return result;
}

function characterHasItem(char, itemName) {
	let result = -1;
	for (let key in char.inventory) {
		if (char.inventory[key].name.toLowerCase() == itemName.toLowerCase()) {
			result = key;
			break;
		}
	}
	return result;
}

function gotoRoom(index) {
	currentRoom = index;
	print(roomData[index].roomInfo + getNavString(index));
	gameMessage('');
	if (roomData[index].hasOwnProperty('onEnter')) {
		roomData[index].onEnter();
	}
	if (!roomData[index].visited) {
		roomData[index].visited = true;
		if (roomData[index].loot.length > 0) {
			roomData[index].loot.forEach(e => {
				roomData[index].currentloot.push(new inventoryItem(lootData[e]));
			});
		}
	}
	document.getElementById('playermove').focus();
}

function throwError(index, error) {
	print(roomData[index].roomInfo + getNavString(index) + '<br><br><p class=\'navError\'>' + error + '</p>');
}

function actionResponse(index, response) {
	print(roomData[index].roomInfo + getNavString(index) + '<br><br><p class=\'actionResponse\'>'+ response + '</p>');
}

function gameMessage(msg, color = 'white') {
	document.getElementById('game-message').innerHTML = msg;
	document.getElementById('game-message').style.color = color;
}

function go(e) {
	// Check for the enter key to be pressed. If it is, and the game is accepting input, then evaluate the input and remove whatever's in the input box. We first check if the room has the nav choice corresponding to the input. If so, and the player can move, then run any onExit function in the room.
	// If the player 
	if (e.keyCode == 13 && acceptInput) {
		let input = document.getElementById('playermove').value.toLowerCase();
		document.getElementById('playermove').value = '';
		document.getElementById('playermove').focus();
		let response = '';
		if (roomData[currentRoom].navChoices.hasOwnProperty(input)) {
			if (!canMove) {
				throwError(currentRoom, 'Something\'s stopping you from moving on.');
				return;
			} else {
				if (roomData[currentRoom].hasOwnProperty('onExit')) {
					roomData[currentRoom].onExit();
				}
				gotoRoom(roomData[currentRoom].navChoices[input]);
			}
		} else {
			// Get items
			if (input.slice(0,3) == 'get') {
				let item = input.slice(4);
				let tmp = roomHasItem(currentRoom, item);
				// if (roomData[currentRoom].loot.indexOf(item) > -1) {
				//     new inventoryItem(characters[characterSelected], lootData[item]);
				//     roomData[currentRoom].loot.splice(roomData[currentRoom].loot.indexOf(item), 1);
				//     return;
				// };
				if (tmp > -1) {
					roomData[currentRoom].currentloot[tmp].give(characters[characterSelected]);
					roomData[currentRoom].currentloot.splice(tmp, 1);
				} else {
					throwError(currentRoom, 'Get what yo?');
				}
				return;
			}

			// Drop items
			if (input.slice(0,4) == 'drop') {
				let item = input.slice(5);
				inventoryItem.drop(characters[characterSelected], item);
				return;
			}

			// Consume items
			if (input.slice(0,7) == 'consume') {
				let item = input.slice(8);
				inventoryItem.consume(characters[characterSelected], item);
				return;
			}

			// Attack
			if (input.slice(0,6) == 'attack') {
				if (!characters[characterSelected].canAttack) {
					throwError(currentRoom, 'Wait!');
					return;
				}
				let enemy = input.slice(7).toLowerCase();
				let tmp = -1;
				for (let e in roomData[currentRoom].currentEnemies) {
					if (roomData[currentRoom].currentEnemies[e].name.toLowerCase() == enemy) {
						tmp = e;
						break;
					}
				}
				if (tmp > -1) {
					characters[characterSelected].attack(roomData[currentRoom].currentEnemies[tmp]);
				} else {
					throwError(currentRoom, 'You\'re hitting what now?');
				}
				return;
			}

			// Special actions in the room
			for (let key in roomData[currentRoom].actionResponses) {
				if (input == key) {
					response = roomData[currentRoom].actionResponses[key]['text'];
					actionResponse(currentRoom, response);
					if (roomData[currentRoom].actionResponses[key]['func']) {
						roomData[currentRoom].actionResponses[key]['func']();
					}
					return;
				}
			}
			throwError(currentRoom, 'You\'re walking into walls mate.');
		}
	}
}

class inventoryItem {
	constructor (item) {
		this.name = item.name;
		this.owner;
		this.class = item.class;

		switch (item.class) {
		case 'weapon':
			this.mindmg = item.mindmg;
			this.maxdmg = item.maxdmg;
			this.cooldown = item.cooldown;
			break;
		case 'armour':
			this.hpbonus = item.hpbonus;
			break;
		case 'consumable':
			this.onConsume = item.onConsume;
			break;
		default:
			break;
		}

		return this;
	}

	give (player) {
		this.owner = player;

		switch (this.class) {
		case 'weapon':
			// Always adjust the max first then the min, because the adjustment functions prevent the min from exceeding or equaling the max
			this.owner.adjustmaxdmg(this.maxdmg);
			this.owner.adjustmindmg(this.mindmg);
			this.owner.cooldown = this.cooldown;
			break;
		case 'armour':
			this.owner.adjustmaxhp(this.hpbonus);
			break;
		case 'consumable':
			break;
		default:
			break;
		}

		this.UIElement = document.createElement('li');
		this.UIElement.innerHTML = this.name;

		INVENTORY_PANEL.appendChild(this.UIElement);
		this.owner.inventory.push(this);
	}

	remove () {
		this.UIElement.parentNode.removeChild(this.UIElement);

		switch (this.class) {
		case 'weapon':
			this.owner.adjustmindmg(-this.mindmg);
			this.owner.adjustmaxdmg(-this.maxdmg);
			this.owner.cooldown = this.owner.defaultcooldown;
			roomData[currentRoom].loot.push(this.shortname);
			break;
		case 'armour':
			this.owner.adjustmaxhp(-this.hpbonus);
			roomData[currentRoom].loot.push(this.shortname);
			break;
		default:
			break;
		}

		this.owner.inventory.splice(this.owner.inventory.indexOf(this),1);
		roomData[currentRoom].currentloot.push(this);
	}

	static drop(owner, thing) {
		let check = false;
		let tmp;
		for (let item in owner.inventory) {
			if (owner.inventory[item].name.toLowerCase() == thing.toLowerCase()) {
				check = true;
				tmp = owner.inventory[item];
				break;
			}
		}
		if (check) {
			tmp.remove();
		} else {
			gameMessage('You don\'t have that item!');
		}
	}

	static consume(owner, thing) {
		let check = false;
		let tmp;
		for (let item in owner.inventory) {
			if (owner.inventory[item].name.toLowerCase() == thing) {
				check = true;
				tmp = owner.inventory[item];
				break;
			}
		}
		if (check) {
			if (tmp.class == 'consumable') {
				tmp.onConsume(owner);
				tmp.remove();
			}
		} else {
			gameMessage('You don\'t seem to have that...');
		}
	}
}

function focusOnInput() {
	document.getElementById('playermove').focus();
}

function restart() {
	location.reload();
}

function toggleModal() {
	let tmp = document.getElementById('modal');
	if (tmp.style.display == 'block') {
		tmp.style.display = 'none';
	} else {
		tmp.style.display = 'block';
	}
}

document.getElementById('modal').addEventListener('click', toggleModal);
document.getElementById('restart-button').addEventListener('click', restart);
document.addEventListener('keypress', go);
document.addEventListener('DOMContentLoaded', focusOnInput);

characters[characterSelected] = new character('playerOne');
gotoRoom(0);