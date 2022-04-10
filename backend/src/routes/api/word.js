//npm
import express from "express";
import { v4 as uuidv4 } from "uuid";
//functions
import fetchDictionary from "../../js/fetchDictionary.js";
import renderInputTiles from "../../js/renderInputTile.js";
import randomizeWord from "../../js/randomizeWord.js";
import spellcheck from "../../js/spellCheck.js";
import calcTimeDiff from "../../js/calcTimeDiff.js";
//gameOBJ
import game from "../../js/gameObj.js";

const router = express
  .Router()
  .use(express.json());

//GET
router.get("/word", async (req, res) => {
  const { wordLength, multiChar } = req.query;
  const wordList = await fetchDictionary();

  game.id = uuidv4();
  game.word = randomizeWord(
    wordList,
    parseInt(wordLength),
    multiChar == "true"
  );

  game.startTime = new Date();

  res.status(200).send({ arr: renderInputTiles(game.word), id: game.id });
});

//POST
router.post("/word", (req, res) => {
  if (req.body.id !== game.id) return;

  const userInp = req.body.userInput.join("");
  const checkedWord = spellcheck(game.word, userInp);

  let countCorr = 0;
  checkedWord.forEach((letter) => {
    if (letter.result === "correct") countCorr++;
  });

  if (countCorr === game.word.length) {
    game.endTime = new Date();
    game.totalTime = calcTimeDiff(game.startTime, game.endTime);
    res.status(200).json({ checkedWord, game, win: true });
  } else {
    res.status(200).json({ checkedWord, win: false });
  }
});

export default router;
