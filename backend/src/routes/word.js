import express from "express";
import fetchDictionary from "../js/fetchDictionary.js";
import randomizeWord from "../js/randomizeWord.js";
const router = express.Router();

export default router
  .get("/", async (req, res) => {
    const wordList = await fetchDictionary();
    // return res.send(randomizeWord(wordList))

    const { wordLength, multiChar } = req.query;
    res
      .status(200)
      .send(randomizeWord(wordList, parseInt(wordLength), multiChar == "true"));
  })
  .post("/", async (req, res) => {});
