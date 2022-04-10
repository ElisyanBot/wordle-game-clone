import { useState } from "react";
import ExitBtn from "../exitBtn.js";

export default function SumbitHighscore({ gameObj, setSentScore, setEndGame }) {
  const [userInput, setUserInput] = useState("");

  function sendScore(e) {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userInput,
        wordleWord: gameObj.word,
        completeTime: gameObj.totalTime,
      }),
    };

    fetch("http://localhost:5080/api/highscores", req)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    setEndGame(false);
    setSentScore(true);
  }

  return (
    <div className="submit-score-form">
      <h2> send score </h2> 
      <div className="text-container">
        <p>
          <b>Word:</b> {gameObj.word}
        </p>
        <p>
          <b>Time:</b> {gameObj.totalTime}
        </p>
        <p>
          <b>attempts: </b> {gameObj.attempts}
        </p>
        <p>
          <b>Word length:</b> {gameObj.word.length}
        </p>
        <p>
          <b>mulitple chars:</b> {gameObj.multiChar}
        </p>
      </div>

      <input
        placeholder="Enter name"
        required
        type="text"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></input>
      <div className="buttons">
        <ExitBtn />
        <button
          type="submit"
          onClick={() => {
            sendScore();
          }}
        >
          send score
        </button>
      </div>
    </div>
  );
}
