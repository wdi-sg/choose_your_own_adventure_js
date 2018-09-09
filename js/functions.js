console.log ("functions.js running");

function checkGold (inv) {

    if (inv.gold > 0) {
        return alert (`You currently have ${inv.gold} Gold in your coin pouch.`)
    } else if (inv.gold === 0) {
        return alert (`Your coin pouch is empty!`)
    }
};

function checkBackpack (inv) {

    if (inv.bag.length > 0) {
        return alert (`You currently have ${inv.bag.toString()} in your backpack.`)
    } else if (inv.bag.length === 0) {
        return alert (`Your backpack is empty!`)
    }
};