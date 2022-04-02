import filterHighscore from "../js/filterHighscore.js";

let mockScores;

describe("", () => {
  test("list only contains scores with right word length", () => {
    const newList = filterHighscore(mockScores, 5);
    expect(newList[0].wordleWord.length).toBe(5);
  });

  test("checks that filter returns an array with more then 0 obj", () => {
    const newList = filterHighscore(mockScores);
    expect(newList.length).toBeGreaterThan(0);

    const newList2 = filterHighscore(mockScores, 5);
    expect(newList2.length).toBeGreaterThan(0);
  });
});

mockScores = [
  { userName: "marcus", wordleWord: "fish" },
  { userName: "marcus", wordleWord: "tonic" }, //5
  { userName: "andreas", wordleWord: "raspe" }, //5
  { userName: "marcus", wordleWord: "abcde" }, //5
  { userName: "joel", wordleWord: "huggas" },
  { userName: "marcus", wordleWord: "bill" },
  { userName: "marcus", wordleWord: "båt" },
  { userName: "marcus", wordleWord: "en" },
  { userName: "sofia", wordleWord: "frukt" }, //5
  { userName: "andreas", wordleWord: "framtid" },
  { userName: "sofia", wordleWord: "smak" },
];
