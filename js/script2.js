let stories = {
    zeroL: { /////////------------ LAYER 0 --------------///////////
        oneS: { // -------SCENARIO----------
            A () { // ------INPUT -----
                display(`Hi ${userName}! It's dinner time! \n What should we eat for dinner? \n A. 🍣 \n B. 🍕`);
                nextLayer(1);
            }
        }
    },
    oneL: { /////////------------ LAYER 1 --------------///////////
        oneS: { // ----SCENARIO ----
            A () { // ------INPUT -----
                display(`Great choice! Where should we eat our sushi?\n \n A. Sushi express \n B. Genki sushi \n C. Go back`);
                userBar += 1;
                nextLayer(1);
            },
            B () {
                display('pepperoni, hawaiian, or screw pizza!');
                nextLayer(2);
            }
        }
    },
    twoL: { /////////------------ LAYER 2 --------------///////////
        oneS: {
            A () {
                display('10 plates or 20 plates?');
                nextLayer(1);
            },
            B () {
                display('lobster ramen it is!');
                nextLayer();
            },
            C () {
                goBack();
                stories.zeroL.oneS.A();
            }
        },
        twoS: {
            A () {
                display('pepperoni with or without mushroom?');
                nextLayer(2);
            },
            B () {
                display('hawaiian out of stock, sorry!');
                nextLayer();
            },
            C () {
                display('you have decided to have dessert instead. bubble tea or waffles?');
                nextLayer(3);
            }
        }
    },
    threeL: { /////////------------ LAYER 3 --------------///////////
        oneS: {
            A () {
                display('total for 10 plates is $91,000. Thanks for eating!');
                nextLayer();
            },
            B () {
                display ("It's your lucky day! Sushi's on the house!");
                nextLayer();
            }
        },
        twoS: {
            A () {
                display('pepperoni with mushroom. yum!');
                nextLayer();
            },
            B () {
                display('pepperoni without mushroom... no vege is bad!!');
                nextLayer();
            }
        },
        threeS: {
            A () {
                display('all the bubble tea shops are closed!');
                nextLayer();
            },
            B () {
                display('waffles are cheap! only $1.70!');
                nextLayer();
            }
        }
    }
}