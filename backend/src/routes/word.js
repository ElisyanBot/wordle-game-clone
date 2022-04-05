import express from "express";
import cors from "cors";
import fetchDictionary from "../js/fetchDictionary.js";
import tilePlaceholders from "../js/renderInputTile.js";
import randomizeWord from "../js/randomizeWord.js";

const router = express.Router();
router.use(
  cors({
    origin: "*",
  })
);

router.get("/", async (req, res) => {
  const { wordLength, multiChar } = req.query;
  const wordList = await fetchDictionary();
  // return res.send(randomizeWord(wordList))

  const word = randomizeWord(
    wordList,
    parseInt(wordLength),
    multiChar == "true"
  );

  const arr = tilePlaceholders(word);
  res.status(200).send(arr);
});

export default router;
