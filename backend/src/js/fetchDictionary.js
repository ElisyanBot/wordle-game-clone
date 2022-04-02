import fetch from "node-fetch";

export default async function fetchDictionary() {
  const res = await fetch(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
  );
  const wordsObj = await res.json();
  return Object.keys(wordsObj);
}