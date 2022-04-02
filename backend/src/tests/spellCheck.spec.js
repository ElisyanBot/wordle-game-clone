import spellCheck from "../js/spellCheck.js";

/*alla dessa testen testar om rusultatet blir rätt under olika input. 
tänker att det är det viktiagste att testa i denna funktion. */
describe('checks that indicator of letter are "true"', () => {
  test('test that result: "correc" && "incorrect" && "misplaced" works', () => {
    const checkedWord = spellCheck("abborre", "abibrer");
    expect(checkedWord[1].result).toBe("correct");
    expect(checkedWord[2].result).toBe("incorrect");
    expect(checkedWord[3].result).toBe("misplaced");
    expect(checkedWord[4].result).not.toBe("misplaced");
  });

  test('test to see if multi letters gets "incorrect" if not "needed"', () => {
    const checkedWord = spellCheck("baabab", "bbbbbb");
    expect(checkedWord[2].result).toBe("incorrect");
    expect(checkedWord[4].result).toBe("incorrect");
  });
});


describe("testing return value from spellCheck()", () => {
  /*kollar att längden som kommer tillbaka är rätt*/
  test("testing the length of returned value", () => {
    const checkedkWord = spellCheck("cykla", "hallå");
    expect(checkedkWord.length).toEqual(5);
  });

  /* kollar att rätt typ av värden kommer tillbaka ifrån array:en med objekt, men också att
  ifall det skulle bli något del med "resultatet" så säger den ifrån. 
  (just nu borde inte en bokstav med resultatet: "correct" kunna bli något annat då
  det ända stället som "correct" ges ut är om samma index på strängarna dela samma vädrde) */
  test("test that spellCheck() returns array with objects", () => {
    const checkedWord = spellCheck("txt", "txt");
    expect([
      { letter: "t", result: "correct" },
      { letter: "x", result: "correct" },
      { letter: "t", result: "correct" },
    ]).toEqual(expect.arrayContaining(checkedWord));
  });
});
