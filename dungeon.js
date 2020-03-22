var dungeon = {
  room0: {
    dispName: "the entrance",
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
    },
    isEnd: false
  },
  room_1_1: {
    dispName: "the armoury",
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
    },
    isEnd: false
  },
  room_1_2: {
    dispName: "the tavern",
    blurb: "Say, this was not a bad idea! A pretty excellent party is under " +
      "way and doesn't look like it'll be ending any time soon. Over the " +
      "next few hours, you receive invitations to run away with a caravan, " +
      "or join a mercenary crew.",
    choices: {
      1: {
        str: "Pack your bags",
        dest: "room_2_3",
        score: 1
      },
      2: {
        str: "Find a weapon",
        dest: "room_2_4",
        score: 1
      }
    },
    isEnd: false
  },
  room_2_1: {
    dispName: "a cell corridor",
    blurb: "You should maybe listen to your ominous feelings next time. " +
      "You're in a narrow corridor, dimly lit by smoky torches on the wall, " +
      "and in front of you are 3 cells.",
    choices: {
      1: {
        str: "Open the left cell",
        dest: "room_3_1",
        score: 1
      },
      2: {
        str: "Open the middle cell",
        dest: "room_3_2",
        score: 1
      },
      3: {
        str: "Open the right cell",
        dest: "room_3_3",
        score: 1
      }
    },
    isEnd: false
  },
  room_2_2: {
    dispName: "the strongroom",
    blurb: "This is interesting. Along one wall is a bank of lockers, one of " +
      "which is glowing. At the back of the room, a wooden door lies ajar.",
    choices: {
      1: {
        str: "Open the glowing locker",
        dest: "room_3_4",
        score: 1
      },
      2: {
        str: "Go through the wooden door",
        dest: "room_3_5",
        score: 1
      }
    },
    isEnd: false
  },
  room_2_3: {
    dispName: "a back room of the tavern",
    blurb: "You leave the party and are packing your bags, when a familiar " +
      "face shows up. '" + name + ", don't go,' they say, before launching " +
      "into a terribly sad story.",
    choices: {
      1: {
        str: "Stay",
        dest: "room_3_6",
        score: 1
      },
      2: {
        str: "Leave in the morning",
        dest: "room_3_7",
        score: 1
      }
    },
    isEnd: false
  },
  room_2_4: {
    dispName: "the mercenary crew's hideout",
    blurb: "You spend a few days hanging around while the mercenary crew  " +
      "find work to do. Eventually, a job comes along, but it looks like " +
      "it will involve destroying your hometown.",
    choices: {
      1: {
        str: "Join them on the job",
        dest: "room_3_8",
        score: 1
      },
      2: {
        str: "Walk away",
        dest: "room_3_9",
        score: 1
      }
    },
    isEnd: false
  },
  room_3_1: {
    dispName: "the left cell",
    blurb: "As you enter, you feel a hard shove from behind and the door " +
      "slams shut behind you. It doesn't look like you'll be getting out " +
      "anytime soon.",
    choices: {
    },
    isEnd: true
  },
  room_3_2: {
    dispName: "the middle cell",
    blurb: "You find in this cell a small, huddled figure, too obviously " +
      "dead. While staring at the horrifying sight, you feel a sharp pain " +
      "in your side, and collapse, bleeding out.",
    choices: {
    },
    isEnd: true
  },
  room_3_3: {
    dispName: "the right cell",
    blurb: "It's completely empty. Before you can think too much about it, " +
      "you hear a terrifying scream from one of the other cells, and flee, " +
      "escaping into the bright sunlight. Perhaps you should just go home.",
    choices: {
    },
    isEnd: true
  },
  room_3_4: {
    dispName: "an unknown dimension",
    blurb: "As you touch the glowing locker door, you feel a distinctly " +
      "unsettling sensation in your gut, and find yourself floating in an " +
      "absolute void.",
    choices: {
    },
    isEnd: true
  },
  room_3_5: {
    dispName: "a clerk's room",
    blurb: "A clerk looks up surprised as you enter, and hurriedly shoves a " +
      "stack of papers in your arms. They drag you out of the room, looking " +
      "fearfully behind as you two move through the corridors and back out. " +
      "Once outside, they exchange the stack of papers for a large bag of " +
      "gold, and you never see them again. Time to go home!",
    choices: {
    },
    isEnd: true
  },
  room_3_6: {
    dispName: "a quiet village",
    blurb: "Having listened to your old friend, you accompany them to a small " +
      "village at the edge of the next forest, and spend the next three years " +
      "helping them rebuild their destroyed home. It's no adventure, but it " +
      "isn't bad.",
    choices: {
    },
    isEnd: true
  },
  room_3_7: {
    dispName: "a forest trail",
    blurb: "You heard your friend out, but couldn't find anything to do " +
      "to help them. That was four years ago, and you sometimes wonder " +
      "what eventually happened to them. Not often, though, not while " +
      "the caravan, which is now yours to run, keeps you so busy.",
    choices: {
    },
    isEnd: true
  },
  room_3_8: {
    dispName: "your hometown",
    blurb: "Your hometown was never that great a place anyway, you reflect, " +
      "as you quite calmly set fire to the mayor's house.",
    choices: {
    },
    isEnd: true
  },
  room_3_9: {
    dispName: "your hometown",
    blurb: "'Traitor!' screams the leader of the crew, as they fall from the " +
      "parapet you've just pushed them over. You barely made it home in time " +
      "to warn them of the attack, and set defences up.",
    choices: {
    },
    isEnd: true
  }
};
