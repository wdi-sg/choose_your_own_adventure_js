var lootData = {
    'short sword': {
        name: "Short Sword",
        shortname: "short sword",
        class: "weapon",
        mindmg: 2,
        maxdmg: 3,
        cooldown: 1000
    },
    'dagger': {
        name: "Dagger",
        shortname: "dagger",
        class: "weapon",
        mindmg: 3,
        maxdmg: 3,
        cooldown: 500
    },
    'shirt': {
        name: "Cotton Shirt",
        shortname: "shirt",
        class: "armour",
        hpbonus: 3
    },
    'soda': {
        name: "Soda",
        shortname: "soda",
        class: "consumable",
        hprestore: 10,
        onConsume: (owner) => {owner.adjusthp(10)}
    }
};
