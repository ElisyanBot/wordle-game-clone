import mongoose from "mongoose";

export const Highscore = mongoose.model("Highscore", {
  userName: String,
  wordleWord: String,
  completeTime: String,
});

export default async function createHighscoreInstant(docObj) {
  const highscore = new Highscore(docObj);
  return await highscore.save();
}
