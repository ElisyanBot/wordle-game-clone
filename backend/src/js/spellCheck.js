export default function spellCheck(fixedWord, inputWord) {
  let { fix: fixedArr, inp: inputArr } = lettersAtCorrIndex(
    fixedWord,
    inputWord
  );
  /* order of "incorrect" and "misplaced" is !Importent, if it only finds on char that match and
     it is accurate by index it will make the letter "incorrect" but if it finds another one it will
     create result: "misplaced" */
  inputArr.forEach((input) => {
    if (input.result === "correct") return; //make the loop skip allready correct letters
    fixedArr.forEach((fixed) => {
      if (input.letter === fixed.letter && fixed.accurate == true) {
        input.result = "incorrect";
      } else if (
        input.letter === fixed.letter &&
        inputArr.indexOf(input) !== fixedArr.indexOf(fixed)
      ) {
        input.result = "misplaced";
      }
    });
  });

  return inputArr;
}

// this function checks if characters is the some index-wise from word to word
// it also creates arrays with objects
// the accurate key in the fixed arrayObj is so that the spellCheck() "knows" is correct by index.
function lettersAtCorrIndex(fixed, input) {
  let inp = [];
  let fix = [];

  for (let i = 0; i < input.length; i++) {
    if (fixed[i] === input[i]) {
      inp.push({ letter: input[i], result: "correct" });
      fix.push({ letter: fixed[i], accurate: true });
    } else {
      inp.push({ letter: input[i], result: "incorrect" });
      fix.push({ letter: fixed[i], accurate: false });
    }
  }

  return { fix, inp };
}