//node
import path from "path";

//express
import express from "express";
import { engine } from "express-handlebars";
//routes
import highscoreRoute from "./routes/highscores.js";
import apiRoute from "./routes/api.js";

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
app.get("/", (req, res) => {
  res.sendFile(path.resolve("../frontend/build/index.html"), "utf-8");
 
});

app.get("/test", (req, res) => {
  res.send("hello world")
 //react || informationssidan?
});

console.log(path.resolve("../frontend/build/static"));

app.use("/highscores", highscoreRoute);
app.use("/api", apiRoute);

app.listen(5080, () => {
  console.log(`Example app listening on port 5080`);
});
