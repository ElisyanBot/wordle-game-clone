import express from "express";
import cors from "cors";
import createHighscoreInstant, {
  Highscore,
} from "../mongoDB/highscoreModel.js";
import filter from "../js/filterHighscore.js";

const route = express
  .Router()
  .use(
    cors({
      origin: "http://localhost:3000",
    })
  )
  .use(express.json());

route
  .get("/", async (req, res) => {
    res.render("highscore", { scores: await Highscore.find().lean() });
  })
  .post("/", async (req, res) => {
    res.json(await createHighscoreInstant(req.body));
    console.log("added highscore");
  });

route.get("/filter", async (req, res) => {
  res.render("highscore", {
    scores: filter(await Highscore.find().lean(), req.query.wordLength),
  });
});

export default route;
