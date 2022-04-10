import express from "express";
//mongoDB/mongoose
import createHighscoreInstant, {
  Highscores,
} from "../../mongoDB/highscoreModel.js";
//funcitons
import filter from "../../js/filterHighscore.js";
import pagination from "../../js/highscorePagination.js";

const route = express.Router().use(express.json());

//get
route.get("/highscores", async (req, res) => {
  let data;
  if (req.query.wordLength > 0) {
    data = filter(await Highscores.find().lean(), req.query.wordLength);
  } else {
    data = await Highscores.find().lean();
  }

  //pagnation
  if (req.query.pageSize > 0) {
    return res.send(
      pagination(await data, req.query.pageSize, req.query.pageNr)
    );
  }
  res.send({ data });
});

//post
route.post("/highscores", async (req, res) => {
  res.json(await createHighscoreInstant(req.body));
  console.log("added highscore");
});

export default route;
