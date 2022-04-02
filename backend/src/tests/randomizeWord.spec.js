import randomizeWord from "../js/randomizeWord.js";
let testArray;


describe("testing the returned value of randomizeWord()", () => {
  //Ser till att jag fått den längden på ordet som jag frågade efter
  test("length of returned word", () => {
    let word = randomizeWord(testArray, 4, true);
    expect(word.length).toBe(4);
  });

  //kollar att efter testet har körts enbart körs med ord som innehåller enskilda bokstäver.
  test("only containing 1 repeated char i mulitChar = false", () => {
    let word = randomizeWord(testArray, 3, false);
    
    for (let i = 0; i < word.length; i++) {
      let totalChar = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[i] === word[j]) totalChar++;
      }
      expect(totalChar).toEqual(1);
    }
  });
});

testArray = [
  "the",
  "be",
  "to",
  "of",
  "and",
  "in",
  "that",
  "have",
  "it",
  "for",
  "not",
  "on",
  "with",
  "he",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "an",
  "will",
  "my",
  "one",
  "all",
  "would",
  "there",
  "their",
  "what",
  "so",
  "up",
  "out",
  "if",
  "about",
  "who",
  "get",
  "which",
  "go",
  "me",
  "when",
  "make",
  "can",
  "like",
  "time",
  "no",
  "just",
  "him",
  "know",
  "take",
  "person",
  "into",
  "year",
  "your",
  "good",
  "some",
  "could",
  "them",
  "see",
  "other",
  "than",
  "then",
  "now",
  "look",
  "only",
  "come",
  "its",
  "over",
  "think",
  "also",
  "back",
  "after",
  "use",
  "two",
  "how",
  "our",
  "work",
  "first",
  "well",
  "way",
  "even",
  "new",
  "want",
  "because",
  "any",
  "these",
  "give",
  "day",
  "most",
  "us",
];
