import mongoose from "mongoose";

export const Highscores = mongoose.model("Highscores", {
  userName: String,
  wordleWord: String,
  attempts: Number,
  completeTime: String,
  wordLength: String,
  multiChar: String
});

export default async function createHighscoreInstant(obj) {
  const highscore = new Highscores(obj);
  return await highscore.save();
}
