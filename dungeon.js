var dungeon = {
  room0: {
    dispName: "entrance",
    blurb: "It's a small and slightly depressing room, full " +
      "of the hopes of adventurers past. And not much else. " +
      "There are two doors, one a solid-looking stained wood, " +
      "the other a round, red door.",
    choices: {
      1: {
        str: "Take the stained wood door",
        dest: "room_1_1",
        score: 1
      },
      2: {
        str: "Take the round, red door",
        dest: "room_1_2",
        score: 1
      }
    }
  },
  room_1_1: {
    dispName: "armoury",
    blurb: "This room contains racks upon racks of rusty weapons. " +
      "A door on your left has an ominous feel about it, while " +
      "a door on the right is heavily barred.",
    choices: {
      1: {
        str: "Take the ominous door",
        dest: "room_2_1",
        score: 1
      },
      2: {
        str: "Force your way through the barred door",
        dest: "room_2_2",
        score: 3
      }
    }
  },
  room_1_2: {
    dispName: "tavern",
    blurb: "Say, this was not a bad idea! A pretty excellent party is under " +
      "way and doesn't look like it'll be ending any time soon. Over the " +
      "next few hours, you receive an invitation to run away with a caravan " +
      "and join a mercenary crew.",
    choices: {
      1: {
        str: "",
        dest: "",
        score: 1
      },
      2: {
        str: "",
        dest: "",
        score: 1
      }
    }
  },
  room_2_1: {
    dispName: "cell corridor",
    blurb: "You should maybe listen to your ominous feelings next time. " +
      "You're in a narrow corridor, dimly lit by smoky torches on the wall, " +
      "and in front of you are 3 cells.",
    choices: {
      1: {
        str: "",
        dest: "",
        score: 1
      },
      2: {
        str: "",
        dest: "",
        score: 1
      },
      3: {
        str: "",
        dest: "",
        score: 1
      }
    }
  },
  room_2_2: {
    dispName: "strongroom",
    blurb: "" +
      "",
    choices: {
            1: {
        str: "",
        dest: "",
        score: 1
      },
      2: {
        str: "",
        dest: "",
        score: 1
      }
    }
  }
};
