import express from "express";
import fetch from "node-fetch";

const route = express.Router().use(express.json());

route.get("/", async (req, res) => {
  const obj = await getHighscores(req.query.page);

  const newData = obj.data.map((item) => ({
    userName: item.userName,
    wordleWord: item.wordleWord,
    attempts: item.attempts,
    completeTime: item.completeTime,
  }));

  res.render("highscore", { scores: newData, pages: createPages(obj.meta.totalPages)});
});

export default route;

async function getHighscores(pageNr = 1, wordLength = 0, pageSize = 5) {
  const res = await fetch(
    `http://localhost:5080/api/highscores?wordLength=${wordLength}&pageSize=${pageSize}&pageNr=${pageNr}`
  );
  const data = res.json();
  return data;
}

function createPages(totalPages) {
  const array = [];
  for (let i = 0; i < totalPages; i++) {
    array.push(i + 1);
  }
  return array;
}
