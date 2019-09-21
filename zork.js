// const zork = [
//   {
//     introduction: [
//       "ZORK I: The Great Underground Empire",
//       "Copyright (c) 1981, 1982, 1983 Infocom, Inc. All rights reserved.",
//       "ZORK is a registered trademark of Infocom, Inc.",
//       "Revision 88 / Serial number 840726",
//     ],
//     choice: null,
//   },
//   {
//     start: [
//       "West of House",
//       "You are standing in an open field west of a white house, with a boarded front door.",
//       "There is a small mailbox here.",
//       "1) open mailbox?",
//     ],
//     choice: {
//       1: ["Opening the small mailbox reveals a leaflet."]
//     }
//   },
//   {
//     action: ["1) read leaflet?"],
//     choice: {
//       1: [
//         "(Taken)",
//         "WELCOME TO ZORK!",
//         " ",
//         "ZORK is a game of adventure, danger, and low cunning.",
//         "In it you will explore some of the most amazing territory ever seen by mortals.",
//         "No computer should be without one!""
//       ]
//     }
//   },
//   {
//     action: ["1) drop leaflet?"]
//     choice: {
//       1: ["Dropped."]
//     }
//   },
//   {
//     action: [
//       "1) go south",
//       "2) go east",
//       "3) open window",
//       "4) enter house",
//       "5) go west",
//       "6) take lamp",
//       "7) move rug",
//       "8) open trap door",
//       "9) turn on lamp",
//     ]
//   }
// ];

// const map = {
//   0: "introduction",
// };

// let sectionArr;
// for (let i=0; i<zork.length; i++) {
//   sectionArr = zork[i][map[i]];
//   for (let j=0; j<sectionArr.length; j++) {
//     console.log(sectionArr[j]);
//   }
// }
