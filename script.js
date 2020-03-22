// Initialisation

var player = {
  name: "Guest",
  location: "Start Menu"
};

document.querySelector("#input").placeholder = "Y / N";
document.querySelector("#output").innerText =
`House of the Dead: an HTML adventure

Start? (Y/ N)`;



// Function

var inputHappened = function(currentInput){
  document.querySelector("#input").value = "";

  switch (player.location) {

    case "Start Menu":
    if (currentInput.toLowerCase() === "y") {
      document.querySelector("#input").placeholder = "Name";
      player.location = "Input Name";

      return `Please enter your name.`;
    } else {
      alert("Please try again");

      return `House of the Dead: an HTML adventure

      Start? (Y/ N)
      `;
    }

    case "Input Name":
    document.querySelector('#input').placeholder = "F / E";
    player.name = currentInput;
    player.location = "B5 - Classified Documents Room";

    return `Welcome to your doom, Special Agent ${player.name}.
    --------------------------------------------------------------------------

    It has been three days since you and your partner Kate have been trapped in the Classified Documents Room of the agency's European branch office, located in the fifth basement floor. With your backup never arriving, you begin to suspect a terrorist attack. The ground starts to shakes and your PDA goes off. You view the security cameras and discover that hordes of humanoid creatures have overrun the building.

    Kate gathers some weapons from the gun locker and the two of you decide to fight your way out. Just as soon as you do, the creatures destroy the door to the room and attack.
    --------------------------------------------------------------------------

    The two of you succeed in killing those creatures, but now a difficult decision lies ahead of you. Do you make the climb using the (F)IRE ESCAPE, or reach the lifts in the (E)LEVATOR HALL?
    `;

    case "B5 - Classified Documents Room":
    if (currentInput.toLowerCase() === "f") {
      document.querySelector("#input").placeholder = "Y / N";
      player.location = "Dead";

      return `FIRE ESCAPE
      --------------------------------------------------------------------------

      You decide to make a run for the fire escape. The two of you managed to avoid a couple of those creatures blocking the path to the elevator hall and move into the fire escape. As the two of you ascend, creatures start attacking from both directiions. There are too many of them. The narrow width of the staircase allowed them to easily overwhelm the two of you.

      YOU DIED
      --------------------------------------------------------------------------

      Restart? (Y / N)
      `;
    } else if (currentInput.toLowerCase() === "e") {
      document.querySelector('#input').placeholder = "F / U / D";
      player.location = "B5 - Elevator Hall";

      return `ELEVATOR HALL
      --------------------------------------------------------------------------

      You decide to run straight for the main elevator hall. There are creatures blocking the way but nothing you guys can't handle. You make it to the main elevator hall but the bridge leading to the lift on your floor is blocked by a swarm of those creatures.
      --------------------------------------------------------------------------

      It appears that you can either take the stairs up or down to avoid fighting them. Do you (F)IGHT your way through, or avoid them by going (U)PSTAIRS or (D)OWNSTAIRS?`
    } else {
      alert("Please try again");

      return `Welcome to your doom, Special Agent ${player.name}.
      --------------------------------------------------------------------------

      It has been three days since you and your partner Kate have been trapped in the Classified Documents Room of the agency's European branch office, located in the fifth basement floor. With your backup never arriving, you begin to suspect a terrorist attack. The ground starts to shakes and your PDA goes off. You view the security cameras and discover that hordes of humanoid creatures have overrun the building.

      Kate gathers some weapons from the gun locker and the two of you decide to fight your way out. Just as soon as you do, the creatures destroy the door to the room and attack.
      --------------------------------------------------------------------------

      The two of you succeed in killing those creatures, but now a difficult decision lies ahead of you. Do you make the climb using the (F)IRE ESCAPE, or reach the lifts in the (E)LEVATOR HALL?
      `;
    }

    case "B5 - Elevator Hall":
    if (currentInput.toLowerCase() === "f") {
      document.querySelector("#input").placeholder = "Y / N";
      player.location = "End";

      return `FIGHT
      --------------------------------------------------------------------------

      You decide that if you were going to die, might as well put down as many of these creatures as you can. Both of you take out a dozen or so creatures each and make it across the bridge. Just one corridor left to reach the lift. Passing through the door to the last corridor you see that the floor is cracked and about to collapse.

      As you inch forward with caution two creatures crawl out from the ceiling and attack. Thanks to Kate's deadeye and quick reflexes you are safe. Both of you made it to the lift only to find it damaged. You hear rumbling and the wall to your left crumbles. A huge hand appears and grabs both of you.

      The creature known as JUSTICE has you now...

      END OF CHAPTER ONE
      --------------------------------------------------------------------------

      Restart? (Y/ N)
      `;
    } else if (currentInput.toLowerCase() === "u") {
      document.querySelector("#input").placeholder = "F / R";
      player.location = "B4 - Elevator Hall";

      return `UPSTAIRS
      --------------------------------------------------------------------------

      You took a quick glance and saw more creatures waiting for you guys downstairs so you decided to go up instead. You walk up the staircase to your left. After reaching a new floor, a group of creatures are waiting for you. More creatures drop down from the floor above.
      --------------------------------------------------------------------------

      There seems to be more creatures than you can handle. Do you (F)IGHT the creatures before moving forward, or (R)UN across the bridge attempting to dodge them?
      `;
    } else if (currentInput.toLowerCase() === "d") {
      document.querySelector("#input").placeholder = "Y / N";
      player.location = "Dead";

      return `DOWNSTAIRS
      --------------------------------------------------------------------------

      You notice that the bridge on the upper floor have cracks underneath and decided not to risk it. You walk down the staircase to your right towards the large open lobby in the bottom floor. There were much more creatures than the two of you expected and the path back up is slowly filling with more of these creatures. There is no way the two of you can handle all of them by yourselves. You make a run towards the door leading towards the lift.

      The corridor has damaged floor so you have no choice but to inch forward. Two creatures crawl out from the ceiling and attack. Kate is busy fending off the swarm and couldn't react in time.

      YOU DIED.
      --------------------------------------------------------------------------

      Restart? (Y / N)
      `;
    } else {
      alert("Please try again");

      return `ELEVATOR HALL
      --------------------------------------------------------------------------

      You decide to run straight for the main elevator hall. There are creatures blocking the way but nothing you guys can't handle. You make it to the main elevator hall but the bridge leading to the lift on your floor is blocked by a swarm of those creatures. It appears that you can either take the stairs up or down to avoid fighting them.
      --------------------------------------------------------------------------

      Do you (F)IGHT your way through, or avoid them by going (U)PSTAIRS or (D)OWNSTAIRS?
      `;
    }

    case "B4 - Elevator Hall":
    if (currentInput.toLowerCase() === "f") {
      document.querySelector("#input").placeholder = "Y / N";
      player.location = "End";

      return `FIGHT
      --------------------------------------------------------------------------

      You and Kate kill a few creatures each before dasing forward, dodging the rest. The bridge across was damaged and begins to crumble. you fall to the floor below. You quickly recover and pick off a few more before turning tail and heading towards the door leading to the lift. Passing through the door to the last corridor you see that the floor is cracked and about to collapse.

      As you inch forward with caution two creatures crawl out from the ceiling and attack. Thanks to Kate's deadeye and quick reflexes you are safe. Both of you made it to the lift only to find it damaged. You hear rumbling and the wall to your left crumbles. A huge hand appears and grabs both of you.

      The creature known as JUSTICE has you now...

      END OF CHAPTER ONE
      --------------------------------------------------------------------------

      Restart? (Y/ N)
      `;
    } else if (currentInput.toLowerCase() === "r") {
      document.querySelector("#input").placeholder = "Y / N";
      player.location = "Dead";

      return `RUN
      --------------------------------------------------------------------------

      The two of you decide that there are too many for you to handle so you make for the stairs to go up one more floor. The door leading to the lift is locked. The stairs to the upper floors have already collapsed. You and Kate make a last stand against the swarm that is forming. Unfortunately, it was not enough.

      YOU DIED
      --------------------------------------------------------------------------

      Restart? (Y / N)
      `;
    } else {
      alert("Please try again");

      return `UPSTAIRS
      --------------------------------------------------------------------------

      You took a quick glance and saw more creatures waiting for you guys downstairs so you decided to go up instead. You walk up the staircase to your left. After reaching a new floor, a group of creatures are waiting for you. More creatures drop down from the floor above.
      --------------------------------------------------------------------------

      There seems to be more creatures than you can handle. Do you (F)IGHT the creatures before moving forward, or (R)UN across the bridge attempting to dodge them?
      `;
    }

    default:
    if (currentInput.toLowerCase() === "y") {
      document.querySelector('#input').placeholder = "F / E";
      player.location = "B5 - Classified Documents Room";

      return `Welcome to your doom, Special Agent ${player.name}.
      --------------------------------------------------------------------------

      It has been three days since you and your partner Kate have been trapped in the Classified Documents Room of the agency's European branch office, located in the fifth basement floor. With your backup never arriving, you begin to suspect a terrorist attack. The ground starts to shakes and your PDA goes off. You view the security cameras and discover that hordes of humanoid creatures have overrun the building.

      Kate gathers some weapons from the gun locker and the two of you decide to fight your way out. Just as soon as you do, the creatures destroy the door to the room and attack.
      --------------------------------------------------------------------------

      The two of you succeed in killing those creatures, but now a difficult decision lies ahead of you. Do you make the climb using the (F)IRE ESCAPE, or reach the lifts in the (E)LEVATOR HALL?
      `;
    } else {
      player.name = "Guest";
      player.location = "Start Menu";

      return `House of the Dead: an HTML adventure

      Start? (Y/ N)
      `;
    }

  }
};