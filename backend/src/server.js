//node
import path from "path";
//express
import express from "express";
import { engine } from "express-handlebars";
//routes pages
import aboutRoute from "./routes/game/about.js";
import gameRoute from "./routes/game/gameRoute.js";
import highscoreRoute from "./routes/game/highscore.js";
//routes api
import apiHighscoreRoute from "./routes/api/highscores.js";
import apiWordRoute from "./routes/api/word.js";

//mongoDb server
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/test");

const app = express();

//handlebars
app
  .engine(
    "hbs",
    engine({
      extname: "hbs",
      defaultLayout: "index",
    })
  )
  .set("view engine", "hbs")
  .set("views", "./src/views");

//static
app
  .use("/static", express.static(path.resolve("../frontend/build/static"))) //react
  .use("/public", express.static(path.resolve("../backend/public"))); //server

//routes
app
  .use("/", aboutRoute)
  .use("/game", gameRoute)
  .use("/highscore", highscoreRoute)
  .use("/api", apiHighscoreRoute)
  .use("/api", apiWordRoute);

app.listen(5080, () => {
  console.log(`Example app listening on port 5080`);
});
