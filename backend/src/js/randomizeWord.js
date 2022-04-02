//sorting out a random word from an array.
export default function randomizeWord(
  wordArr,
  wordLength = 0,
  multiChars = true
) {
  let filteredArray = [];

  if (wordLength <= 0) {
    filteredArray = wordArr;
  }
  
  //same length on each word sort
  wordArr.forEach((word) => {
    if (word.length !== wordLength) return;
    filteredArray.push(word);
  });

  if (!!!multiChars) {
    filteredArray = countChars(filteredArray);
  }

  return filteredArray[Math.floor(Math.random() * filteredArray.length)];
}

//to sort out the words that only have one repeated letter.
function countChars(arrayOfWords) {
  const singleWordArr = [];
  
  arrayOfWords.forEach((word) => {
    let isSingle = true;
    //check every char in the word if it reapeats
    for (let i = 0; i < word.length; i++) {
      let totalChar = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[i] === word[j]) totalChar++;
      }
      if (totalChar > 1) isSingle = false;
    }
    if (isSingle) singleWordArr.push(word);
  });

  //only leting words with char counted once.
  return singleWordArr;
}

