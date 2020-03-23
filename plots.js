const genRandomNum = (min, max) => (min-1) + Math.ceil(Math.random() * (max-min + 1));

class Plots {

  constructor(plots) {
    this.plots = plots;
    this.init();
  }

  init() {
    this.shufflePlots();
    this.setChoices();
  }

  // for each plot, randomly push 2 other plots as choices
  setChoices() {
    this.plots.forEach(plot => {
      for (let i = 0; i < 2; i++) {
        let randomId = genRandomNum(0, this.plots.length-1);
        plot.addChoice(randomId);
      }
    })
  }

  getRandomPlot() {
    let randomNum = genRandomNum(0, this.plots.length-1);
    return this.getPlotById(randomNum);
  }

  getPlotById (id) {
    return this.plots.find(plot => plot.id === id);
  }

  // randomly shuffle plots order
  shufflePlots() {
    for (let i = this.plots.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.plots[i];
      this.plots[i] = this.plots[j];
      this.plots[j] = temp;
    }
  }
}

class Plot {
  constructor(id, choice, story, type) {
    this.id = id;
    this.choice = choice; // the choice to be displayed to user
    this.story = story; // the story to show
    this.type = type; // there are be move, suicide (terminate game)
    this.choices = new Map();
    this.fixedChoice = null;
    this.numChoices = 0;
  }

  addChoice (plotId) {
    this.choices.set(this.numChoices++, plotId);
  }

  addFixedChoice(choice) {
    this.fixedChoice = new Map(choice);
    this.numChoices++;
  }

  // return all choices in array
  getAllChoices() {
    return [this.fixedChoice, ...this.choices];
  }

}

let plot1 = new Plot(0, "Teleport to Miller's Lake.", "You are now at Miller's Lake. </br>" +
  "Miller's Lake is a small lake in Redania, far north of Oxenfurt and around Brunwich village." +
  "<br>" +
  "Along its shore is Brunwich to the north, the Old Chapel and Upper Mill to the east, and an abandoned site to the west. <br>" +
  "There's also 2 small islands in the middle of the lake, with one of them having an ancient altar on it. <br>" +
  "Interestingly, in the waters on the north side one can find ruins of a building. <br>" +
  "It's unclear how it collapsed though. <br>" +
  "Curiously, there seem to be a set of used outfit laying on a rock by the lake.","move");
plot1.addFixedChoice([["choice" , 'Take the outfit and wear it immediately.'],
  ["response", "You have been infected with the cov19 virus. " +
  "<br> Tips: Avoid touching belongings of other people unless you have to and always wash your hands for at least" +
  "20 seconds."],["type","suicide"]]);

let plot2 = new Plot(1,  "Visit the Old Chapel", "You are now at the Old Chapel. <br> It was once a place that worshiped the Eternal Fire until a mother, " +
  "suffering from postpartum depression, drowned all her daughters here before taking her own life. " +
  "Her spirit, the Cursed Mother, haunts the crypt, thus making the church unusable. <br> There is a piece of ancient parchment on the altar inside the chapel. ","move");
plot2.addFixedChoice([["choice", "Investigate the parchment."], ["response", "Upon examining the parchment, you learnt that there might be a dragon ball located near an abandoned site near Brunwich."], ["type", "view"]]);

let plot3 = new Plot(2, "Visit Brunwich.", "You woke up in Brunwich. <br>This picturesque little village's beauty makes it a frequent subject of works by bards and poets. The best-known piece whose action is set in Brunwich is \"The Betrothing,\" a farce penned by Stanislas Islas." +
  " The reputation thus gained has made it a popular destination for bohemians from Oxenfurt, " +
  "who escape here during the hottest months to pass the time with contests for the most beautiful feathered cap and hunts for a golden horn held at night in the nearby woods.","move");
plot3.addFixedChoice([["choice", "Move to Abandoned site"], ["Response", "This unnamed abandoned site is located in the Brunwich region, on the western shore of Miller's Lake. "],["type", "move"]] );

let plot4 = new Plot(3, "Teleport to Gaunter's world", "You are now at Gaunter's world. <br>Gaunter's world is a twisted reality world created by Gaunter O'Dimm.<br>" +
  "<br>" +
  "The world includes several cemeteries, a cave filled with treasure, a rock with a sword protruding from it, and a house on a hill. It also has various points of interest, though these are meant to stall anyone who challenges O'Dimm.",'move');
plot4.addFixedChoice([["choice", "Try to take out the sword."], ["response", "You tried your hardest but the sword would not move."],["type", "view"]]);

let plot5 = new Plot(4, "Pay a visit at Borsody Auction House", "You are now looking at Borsody Auction House. <br> The auction house was originally started in 1203 and used to be just a shack located outside Novigrad's walls and where they traded in horses and sheep." +
  " 42 years later in 1245, the business had grown in fame and size to the point they were able to move not just into Novigrad, but right off the city's main road in the nicest district, occupying an impressive 3-story building.<br>" +
  "<br>" +
  "Long past their days of trading cattle, they now dealt exclusively in jewels, artwork, antiques, and collector items. However, these auctions were only held every 3 months and always on a Friday, making people show up in droves.<br>" +
  "It looks like an auction is going on.");
plot5.addFixedChoice([["choice", "Join the auction"], ["response", "To your utter astonishment, the item being actioned is one of the Dragon Balls! <br> You bought the dragon ball without hesitation."],["type", "reward"] ]);


allPlots = [plot1, plot2, plot3, plot4, plot5];




