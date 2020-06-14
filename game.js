const player = new Character({
    name: 'Player 1',
    spriteOptions: {
        asset: 'assets/hero.png'
    }
});

const teleportDialog = (text, options) => {
    return new Dialog([
        new DialogContent({
            text,
            options,
            then: async selected => {
                game.playDialog(new Dialog([
                    new DialogContent({
                        text: `Teleporting you to ${selected.name}!`
                    })
                ])).then(() => game.transitionTo(selected.destination));
            }
        })
    ])
};

const pegasus = new Destination({
    name: 'Pegasus Space Region',
    background: 'assets/space1bg.png',
    dialog: new Dialog([
        new DialogContent({
            text: `Welcome to the Pegasus Space Region!`
        })
    ]),
    characters: [
        new Character({
            name: 'Pegasus Ruler',
            x: -80,
            y: -80,
            spriteOptions: {
                asset: 'assets/goblin.gif',
                height: 32,
                width: 32
            },
            dialog: new Dialog([
                new DialogContent({
                    text: () => `I am ruler of this region, in order to pass you must defeat me in combat!`,
                    options: ['Start Battle!'],
                    then: async (selected, {
                        gameTarget
                    }) => {
                        game.startBattle(gameTarget).then(async success => {
                            await game.playDialog(success ? `You defeated ${gameTarget.name}` : `${gameTarget.name} defated you!`);
                            // give teleport option
                            if (success) {
                                await game.playDialog('You found a telportation stone, use this to travel to your next destination.');
                                await game.playDialog(teleportDialog(`Where would you like to go?`, [{
                                        name: zolo.name,
                                        destination: zolo
                                    },
                                    {
                                        name: xerxes.name,
                                        destination: xerxes
                                    },
                                    {
                                        name: evilEmperorsRegion.name,
                                        destination: evilEmperorsRegion
                                    },
                                ]))
                            } else {
                                await game.playDialog('Game Over!');
                                game.transitionTo(earth);
                            }
                        });
                    }
                })
            ])
        })
    ]
});

const zolo = new Destination({
    name: 'Zolo Space Region',
    background: 'assets/space2bg.png',
    dialog: new Dialog([
        new DialogContent({
            text: `Welcome to the Zolo Space Region!`
        })
    ])
});

const xerxes = new Destination({
    name: 'Xerxes Space Region',
    background: 'assets/space3bg.png',
    dialog: new Dialog([
        new DialogContent({
            text: `Welcome to the Xerxes Space Region!`
        })
    ])
});

const evilEmperorsRegion = new Destination({
    name: 'Evil Emperor Space Region',
    background: 'assets/space4bg.png',
    dialog: new Dialog([
        new DialogContent({
            text: `Welcome to the Evil Emperor Space Region! You must rescue the princess.`
        })
    ])
});

const earth = new Destination({
    name: 'Earth',
    background: 'assets/oceanbg.png',
    characters: [
        new Character({
            name: 'Goblin',
            x: 80,
            y: 80,
            spriteOptions: {
                asset: 'assets/goblin.gif',
                height: 32,
                width: 32
            },
            dialog: teleportDialog(() => `Welcome ${game.player.get('name')}, the Earth princess has been captured and only you can rescue her. I can only assist with my teleportation spell. Where would you like to go?`, [{
                    name: pegasus.name,
                    destination: pegasus
                },
                {
                    name: zolo.name,
                    destination: zolo
                },
                {
                    name: xerxes.name,
                    destination: xerxes
                },
            ])
        })
    ],
    dialog: new Dialog([
        new DialogContent({
            text: 'Welcome adventurer, what is your name?',
            takesInput: true,
            then: input => {
                game.player.set('name', input);
                game.renderStats();
            }
        }),
        new DialogContent({
            text: () => `Welcome to ${game.name}, ${game.player.get('name')}! Use the arrow keys to move around. Talk to to the Goblin by pressing Enter to get started.`
        })
    ])
});

const game = new Game({
    name: 'Space Adventure',
    player,
    destination: earth
});

game.run();