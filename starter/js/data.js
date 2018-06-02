var goodGuys = {
	'harry': {
		'hp': 500,
		'luckStat': 0.9,
		'attacks': {
			'lightningBolt': {
				'specs': 'DADA',
				'strength': 100
			},
			'dragonFlyPast': {
				'specs': 'flying',
				'strength': 150
			},
			'roundSpecsGlare': {
				'specs': 'DADA',
				'strength': 110
			}
		},
		'specs': ['DADA', 'flying']
	},

	'her': {
		'hp': 400,
		'luckStat': 0.7,
		'attacks': {
			'hairFlip': {
				'specs': "null",
				'strength': 120
			},
			'leviOsar': {
				'specs': 'flying',
				'strength': 130
			},
			'dracoPunch': {
				'specs': 'DADA',
				'strength': 130
			}
		},
		'specs': ['null']
	},

	'ron': {
		'hp': 600,
		'luckStat': 0.7,
		'attacks': {
			'eatSlugs': {
				'specs': 'flying',
				'strength': 140
			},
			'goalDefence': {
				'specs': 'flying',
				'strength': 150
			},
			'chessMaster': {
				'specs': 'null',
				'strength': 130
			}
		},
		'specs': ['flying']
	},

	'neville': {
		'hp': 600,
		'luckStat': 0.6,
		'attacks': {
			'crucio': {
				'specs': 'DA',
				'strength': 150
			},
			'petrify': {
				'specs': 'DADA',
				'strength': 140
			},
			'screamingPlants': {
				'specs': 'herbo',
				'strength': 160
			}
		},
		'specs': ['herbo', 'DADA']
	},

	'draco': {
		'hp': 400,
		'luckStat': 0.7,
		'attacks': {
			'godlySneer': {
				'specs': 'DA',
				'strength': 140
			},
			'snitchGrab': {
				'specs': 'flying',
				'strength': 140
			},
			'dadPetronus': {
				'specs': 'null',
				'strength': 130
			}
		},
		'specs': ['flying', 'DA']
	},

	'snape': {
		'hp': 600,
		'luckStat': 0.7,
		'attacks': {
			'sectumsempra': {
				'specs': 'DA',
				'strength': 180
			},
			'Legilimens': {
				'specs': 'DA',
				'strength': 160
			},
			'felixFelicis': {
				'specs': 'potions',
				'strength': 180
			}
		},
		'specs': ['potions', 'DA']
	},

	'dumbledore': {
		'hp': 700,
		'luckStat': 0.8,
		'attacks': {
			'loveHarrylove': {
				'specs': 'DA',
				'strength': 180
			},
			'flickWand': {
				'specs': 'null',
				'strength': 190
			},
			'invisibility': {
				'specs': 'charms',
				'strength': 170
			}
		},
		'specs': ['null']
	},

	'mcGonagall': {
		'hp': 600,
		'luckStat': 0.7,
		'attacks': {
			'catClaw': {
				'specs': 'trans',
				'strength': 160
			},
			'piertotumLocomotor': {
				'specs': 'charms',
				'strength': 230
			},
			'haveABiscuit': {
				'specs': 'null',
				'strength': 170
			}
		},
		'specs': ['trans', 'DADA']
	},

	'hagrid': {
		'hp': 800,
		'luckStat': 0.6,
		'attacks': {
			'dragonFlame': {
				'specs': 'null',
				'strength': 160
			},
			'spiderWeb': {
				'specs': 'null',
				'strength': 170
			},
			'umbrellaPigTail': {
				'specs': 'trans',
				'strength': 160
			}
		},
		'specs': ['DADA']
	},

};



var badGuys = {
	'voldemort': {
		'hp': 1000,
		'luckStat': 0.9,
		'attacks': {
			'deathSpell': {
				'specs': 'DA',
				'strength': 140
			},
			'naginiBite': {
				'specs': 'null',
				'strength': 140
			},
			'icyGlare': {
				'specs': 'DA',
				'strength': 150
			}
		},
		'specs': ['DA']
	},

	'bellatrix': {
		'hp': 800,
		'luckStat': 0.9,
		'attacks': {
			'avadaKedavra': {
				'specs': 'DA',
				'strength': 160
			},
			'crucio': {
				'specs': 'DA',
				'strength': 180
			},
			'Legilimens': {
				'specs': 'DA',
				'strength': 190
			}
		},
		'specs': ['DA', 'flying']
	},

	'umbridge': {
		'hp': 700,
		'luckStat': 0.8,
		'attacks': {
			'quillScratch': {
				'specs': 'DA',
				'strength': 180
			},
			'incarcerous': {
				'specs': 'charms',
				'strength': 190
			},
			'pinkOverload': {
				'specs': 'trans',
				'strength': 200
			}
		},
		'specs': ['charms']
	},

	'peter': {
		'hp': 500,
		'luckStat': 0.9,
		'attacks': {
			'mouseBite': {
				'specs': 'trans',
				'strength': 120
			},
			'treachery': {
				'specs': 'DA',
				'strength': 110
			},
			'flattery': {
				'specs': 'null',
				'strength': 110
			}
		},
		'specs': ['trans']
	},

	'bartyCrouchJr': {
		'hp': 600,
		'luckStat': 0.8,
		'attacks': {
			'madEyeKick': {
				'specs': 'DADA',
				'strength': 120
			},
			'humanFerret': {
				'specs': 'trans',
				'strength': 160
			},
			'polyJuice': {
				'specs': 'potions',
				'strength': 120
			}
		},
		'specs': ['DADA', 'DA']
	},

	'lucius': {
		'hp': 900,
		'luckStat': 0.7,
		'attacks': {
			'bookHorcrux': {
				'specs': 'DA',
				'strength': 150
			},
			'hairWhip': {
				'specs': 'null',
				'strength': 130
			},
			'dobbyKick': {
				'specs': 'flying',
				'strength': 130
			}
		},
		'specs': ['DA']
	},

	'fenrir': {
		'hp': 800,
		'luckStat': 0.7,
		'attacks': {
			'howl': {
				'specs': 'DA',
				'strength': 170
			},
			'wolfClaw': {
				'specs': 'trans',
				'strength': 160
			},
			'wolfBite': {
				'specs': 'trans',
				'strength': 150
			}
		},
		'specs': ['trans', 'DA']
	},

	'alectoCarrow': {
		'hp': 600,
		'luckStat': 0.8,
		'attacks': {
			'twinPower': {
				'specs': 'DA',
				'strength': 130
			},
			'summonTheLord': {
				'specs': 'charms',
				'strength': 150
			},
			'tortureStudents': {
				'specs': 'potions',
				'strength': 130
			}
		},
		'specs': ['potions', 'DA']
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



var user = {
}