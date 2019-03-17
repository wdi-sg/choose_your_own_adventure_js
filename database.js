var main = {
  data: {
    rooms: {
      1: {
        1: {
          desciption: "This is room 1,1",
          positionX: 1,
          positionY: 1,
          npc: {
            name: "emptyRoom",
            completed: false
          },
          item: ["medicine"]
        },
        2: {
          desciption: "This is room 1,2",
          positionX: 1,
          positionY: 2,
          userPrompt: "",
          npc: {
            name: "none",
            completed: false
          },
          item: []
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
            item: []
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
            item: []
          }
        }
      }
    },
    player: {
      inventory: {
        space: 3,
        load: 0,
        items: {}
      },
      position:[0,0]
    },
    npcs: [
      {
        name: "Kim Jong Ill",
        description:
          "An ill dictator sits upon a chest, he gestures to you to speak",
        actionCommand: ["speak"],
        actionDescription:
          'Type "speak" to speak with him, "nothing" to do nothing.',
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
          "Type \"eat\" to fill your empty stomach, \"nothing\" to do nothing.",
        function: ["eatSashimi", "nothingSashimi"],
        item: {
          name: "",
          response: "",
          rewardItem: ""
        }
      },
      {
          name: "emptyRoom",
          description: "You find yourself in an empty room",
          actionCommand: [""],
          actionDescription: "",
          function: [""],
          item: {
              name: "",
              response: "",
              rewardItem: ""
          }
      }
    ],
    items: {
      name: "medicine",
      description: "Perhaps someone sick needs this"
    }
  }
};
