import express from "express";
import fetch from "node-fetch";

const route = express.Router().use(express.json());

route.get("/", async (req, res) => {
  res.render("highscore", { scores: await getHighscores() });
});

export default route;

async function getHighscores() {
  const res = await fetch("http://localhost:5080/api/highscores");
  const data = res.json();
  return data;
}
