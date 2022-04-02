export default function filterHighscore(scoreList, wordLength = 0) {
  if (wordLength !== 0) {
    return scoreList.filter((index) => {
      if (index.wordleWord != undefined)
        return index.wordleWord.length == wordLength;
    });
  }
  return scoreList;
}
