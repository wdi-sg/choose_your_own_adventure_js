var goodGuys = {
	'harry': {
		'hp': 500,
		'luckStat': 0.9,
		'attacks': {
			'lightingBolt': {
				'specs': 'DADA',
				'strength': 55
			},
			'coolGlare': {
				'specs': 'flying',
				'strength': 78
			}
		},
		'specs': ['DADA', 'flying']
	},

	'Hermoine': {
		'hp': 400,
		'luckStat': 0.7,
		'attacks': {

		},
		'specs': ['null']
	},

	'ron': {

	}

}



var badGuys = {
	'voldemort': {
		'hp': 1000,
		'luckStat': 0.9,
		'attacks': {
			'death': {
				'specs': 'DA',
				'strength': 100
			}
		},
		'specs': ['DA', 'flying']
	},

	'bellatrix': {

	},

	'umbridge': {
		
	}
}


var specialities = {

	//key --> attacker
	//value --> attackee
	'DADA': {
		'DADA': 0.5,
		'DA': 0.95,
		'flying': 0.8,
		'herbo': 0.6,
		'potions': 0.5,
		'trans': 0.4,
		'charms': 0.2,
		'null': 0.55
	},

	'DA': {
		'DADA': 0.2,
		'DA': 0.5,
		'flying': 0.95,
		'herbo': 0.8,
		'potions': 0.6,
		'trans': 0.5,
		'charms': 0.4,
		'null': 0.55
	},

	'flying': {
		'DADA': 0.4,
		'DA': 0.2,
		'flying': 0.5,
		'herbo': 0.95,
		'potions': 0.8,
		'trans': 0.6,
		'charms': 0.5,
		'null': 0.55
	},

	'herbo': {
		'DADA': 0.5,
		'DA': 0.4,
		'flying': 0.2,
		'herbo': 0.5,
		'potions': 0.95,
		'trans': 0.8,
		'charms': 0.6,
		'null': 0.55
	},

	'potions': {
		'DADA': 0.6,
		'DA': 0.5,
		'flying': 0.4,
		'herbo': 0.2,
		'potions': 0.5,
		'trans': 0.95,
		'charms': 0.8,
		'null': 0.55
	},

	'trans': {
		'DADA': 0.8,
		'DA': 0.6,
		'flying': 0.5,
		'herbo': 0.4,
		'potions': 0.2,
		'trans': 0.5,
		'charms': 0.95,
		'null': 0.55
	},

	'charms': {
		'DADA': 0.95,
		'DA': 0.8,
		'flying': 0.6,
		'herbo': 0.5,
		'potions': 0.4,
		'trans': 0.2,
		'charms': 0.5,
		'null': 0.55
	},

	'null': {
		'DADA': 0.55,
		'DA': 0.55,
		'flying': 0.55,
		'herbo': 0.55,
		'potions': 0.55,
		'trans': 0.55,
		'charms': 0.55,
		'null': 0.5
	}
}