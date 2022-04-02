import express from "express";
import fetchDictionary from "../js/fetchDictionary.js";
import randomizeWord from "../js/randomizeWord.js";
const router = express.Router();

export default router
  .get("/", async (req, res) => {
    const { wordLength, multiChar } = req.query;

    const wordList = await fetchDictionary();
    // return res.send(randomizeWord(wordList))
    
    const word = randomizeWord(
      wordList,
      parseInt(wordLength),
      multiChar == "true"
    );

    const arr = tilePlaceholders(word);
    res.set("Access-Control-Allow-Origin","*")
    res.status(200).send(arr);
  })


//bryt ut denna och skapa test på den!!!
function tilePlaceholders(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push([""]);
  }
  return arr;
}
