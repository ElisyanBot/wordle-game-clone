import express from "express";
import fetch from "node-fetch";

const route = express.Router().use(express.json());

route.get("/", async (req, res) => {
  res.render("highscore", { scores: await getHighscores() });
});

export default route;

async function getHighscores(wordLength = 0, pageSize = 10, pageNr = 1) {
  const res = await fetch(
    `http://localhost:5080/api/highscores?wordLength=${wordLength}&pageSize=${pageSize}&pageNr=${pageNr}`
  );
  const data = res.json();
  return data;
}
