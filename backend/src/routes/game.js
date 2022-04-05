import express from "express";
import cors from "cors";
import spellcheck from "../js/spellCheck.js";

const router = express.Router();
//flytta denna till en passande rout för spelet.
router
  .use(
    cors({
      origin: "http://localhost:3000",
    })
  )
  .use(express.json());

router.post("/", (req, res) => {
  const userInp = req.body.test.join("");
  const checkedWord = spellcheck("tests", userInp);
  res.json(checkedWord);
});

export default router;
