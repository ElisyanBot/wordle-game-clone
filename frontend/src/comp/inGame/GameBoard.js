import { useEffect, useState } from "react";
import AttemptDisplay from "./AttemptDisplay.js";
import UserInput from "../UserInput.js";

export default function GameBoard({
  wordLength,
  multiChar,
  rows,
  setRows,
  setObj,
  setGamePhases,
}) {
  const [gameId, setGameId] = useState("");
  const [chars, setChars] = useState([]);
  const [presses, setPresses] = useState(0);

  useEffect(() => {
    fetch(
      `http://localhost:5080/api/word?wordLength=${wordLength}&&multiChar=${multiChar}`
    )
      .then((res) => res.json())
      .then((data) => {
        setChars(data.arr);
        setGameId(data.id);
      });
  }, [wordLength, multiChar]);

  async function handleKeyPress(e) {
    if (e.which >= 65 && e.which <= 90) {
      if (presses < chars.length) {
        chars[presses] = e.key;
        setChars([...chars]);
        setPresses(presses + 1);
      }
    }

    if (e.key === "Backspace") {
      if (presses < 1) return;
      chars[presses - 1] = "";
      setPresses(presses - 1);
      setChars([...chars]);
    }

    if (e.key === "Enter") {
      const res = await fetch("http://localhost:5080/api/word", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: chars, id: gameId }),
      });

      const data = await res.json();
      rows.push(data.checkedWord);
      setRows([...rows]);

      if (data.win === true) {
        data.game.attempts = rows.length;
        data.game.multiChar = multiChar.toString();
        setObj(data.game);
        setGamePhases({ start: false, end: true, sendScore: false });
      }
    }
  }

  return (
    <div
      tabIndex={0}
      className="game-board"
      onKeyDown={(e) => {
        handleKeyPress(e);
      }}
    >
      <AttemptDisplay rows={rows} />
      <UserInput wordArray={chars} />
    </div>
  );
}
