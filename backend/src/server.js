//node
import path from "path";
//express
import express from "express";
import { engine } from "express-handlebars";
//routes
import aboutRoute from "./routes/game/about.js";
import gameRoute from "./routes/game/gameRoute.js";
import highscoreRoute from "./routes/game/highscores.js";
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
  .use("/static", express.static(path.resolve("./public"))); //server

//routes
app
  .use("/", aboutRoute)
  .use("/game", gameRoute)
  .use("/highscores", highscoreRoute)
  .use("/api", apiWordRoute);

app.listen(5080, () => {
  console.log(`Example app listening on port 5080`);
});
