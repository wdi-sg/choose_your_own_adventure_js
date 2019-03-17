var main = {
  data: {
    rooms: {
      1: {
        1: {
          desciption: "This is room 1,1",
          positionX: 1,
          positionY: 1,
          npc: {
            name: "Empty Room",
            completed: false
          },
          items: ["medicine"]
        },
        2: {
          desciption: "This is room 1,2",
          positionX: 1,
          positionY: 2,
          userPrompt: "",
          npc: {
            name: "Empty room",
            completed: false
          },
          items: []
        },
        3: {
          desciption: "This is room 1,2",
          positionX: 1,
          positionY: 2,
          userPrompt: "",
          npc: {
            name: "Empty room",
            completed: false
          },
          items: []
        }
      },
      2: {
        1: {
          desciption: "This is room 2,1",
          positionX: 2,
          positionY: 1,
          userPrompt: "",
          npc: {
            name: "sashimi",
            completed: false
          },
          items: []
        },
        2: {
          desciption: "This is room 2,2",
          positionX: 2,
          positionY: 2,
          userPrompt: "",
          npc: {
            name: "Kim Jong Ill",
            completed: false
          },
          items: []
        },
        3: {
          desciption: "This is room 2,3",
          positionX: 1,
          positionY: 2,
          userPrompt: "",
          npc: {
            name: "Empty room",
            completed: false
          },
          items: []
        }
      },
      3: {
        1: {
          desciption: "This is room 2,1",
          positionX: 2,
          positionY: 1,
          userPrompt: "",
          npc: {
            name: "sashimi",
            completed: false
          },
          items: []
        },
        2: {
          desciption: "This is room 2,2",
          positionX: 2,
          positionY: 2,
          userPrompt: "",
          npc: {
            name: "Kim Jong Ill",
            completed: false
          },
          items: []
        },
        3: {
          desciption: "This is room 2,3",
          positionX: 1,
          positionY: 2,
          userPrompt: "",
          npc: {
            name: "Empty room",
            completed: false
          },
          items: []
        }
      }
    },
    player: {
      inventory: {
        space: 3,
        load: 0,
        items: {}
      },
      position: [0, 0]
    },
    npcs: [
      {
        name: "Empty Room",
        description: "You find yourself in an empty room",
        actionCommand: [""],
        actionDescription: "",
        function: [""],
        item: {
          name: "",
          response: "",
          rewardItem: ""
        }
      },
      {
        name: "Kim Jong Ill",
        description:
          "an ill dictator sits upon a chest, he gestures to you to speak",
        actionCommand: ["speak"],
        actionDescription:
          'Type "1" to speak with him.\n',
        function: ["kimJongIll"],
        item: {
          name: "medicine",
          response:
            "You've cured Kim of his ill dictation, he gets off the chest. The boy who no longer has a dictator sitting on his chest thanks you and hands you an item.",
          rewardItem: "brick"
        }
      },
      {
        name: "sashimi",
        description: "A delicious bowl of sashimi sits alone in a room",
        actionCommand: ["eat", "nothing"],
        actionDescription:
          "Type \"1\" to eat the sashimi to fill your empty stomach\n",
        function: ["eatSashimi", "nothingSashimi"],
        item: {
          name: "",
          response: "",
          rewardItem: ""
        }
      },
      {
        name: "Lord Meow Meow",
        description: "A great fluffy house cat the size of a house stands between you and the EXIT, it demands that you provide it with an offering or submit your soul to be its eternal scratchboard.",
        actionCommand: [],
        actionDescription:
          "Type \"1\" to submit your soul",
        function: ["eatSashimi", "nothingSashimi"],
        item: {
          name: "Yellowtail",
          response: "Lord Meow Meow is satisfied with your offering, you may pass.",
          rewardItem: "exit"
      }
    }
    ],
    items: [
      {
        name: "medicine",
        description: "Perhaps someone sick needs this"
      },
      {
        name: "Yellowtail",
        description: "A large tasty fish that will never grow stale thanks to the power of existing only in code"
      }
    ]
  }
};
