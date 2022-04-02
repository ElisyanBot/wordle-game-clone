import express from "express";
import { engine } from "express-handlebars";
import highscoreRoute from "./routes/highscores.js";
import wordsRoute from "./routes/word.js";

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
  .set("views", "./server/views");

//routes
app.get("/", (req, res) => {
  res.send("Hello World!");
  //react || informationssidan?
});

app.use("/highscores", highscoreRoute);
app.use("/word", wordsRoute);

app.listen(5080, () => {
  console.log(`Example app listening on port 5080`);
});
