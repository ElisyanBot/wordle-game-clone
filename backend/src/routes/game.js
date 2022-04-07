//npm
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
//functions
import fetchDictionary from "../js/fetchDictionary.js";
import renderInputTiles from "../js/renderInputTile.js";
import randomizeWord from "../js/randomizeWord.js";
import spellcheck from "../js/spellCheck.js";
import calcTimeDiff from "../js/calcTimeDiff.js";

const router = express
  .Router()
  .use(
    cors({
      origin: "http://localhost:3000",
    })
  )
  .use(express.json());

const game = {
  word: "",
  id: "",
  startTime: "",
  endTime: "",
};

//GET
router.get("/", async (req, res) => {
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
router.post("/", (req, res) => {
  if (req.body.id !== game.id) return;

  const userInp = req.body.userInput.join("");
  const checkedWord = spellcheck(game.word, userInp);

  let countCorr = 0;
  checkedWord.forEach((Letter) => {
    if (Letter.result === "correct") countCorr++;
  });

  if (countCorr === checkedWord.length) {
    game.endTime = new Date();
    game.totalTome = calcTimeDiff(game.startTime, game.endTime);
    res.json({ checkedWord, game });
  } else {
    res.json({ checkedWord });
    console.log(game.word);
  }
});

export default router;