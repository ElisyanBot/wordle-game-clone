import { useEffect, useState } from "react";
import AttemptDisplay from "./AttemptDisplay.js";
import UserInput from "./UserInput.js";

export default function GameBoard({ wordLength = 5, multiChar = true }) {
  const [rows, setRows] = useState([]);
  const [chars, setChars] = useState([]);
  let [presses, setPresses] = useState(0);

  useEffect(() => {
    fetch(
      `http://localhost:5080/word?wordLength=${wordLength}&&multiChar=${multiChar}`
    )
      .then((res) => res.json())
      .then((data) => setChars(data));
  }, [wordLength, multiChar]);

  function handleKeyPress(e) {
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
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ test: chars }),
      };

      fetch("http://localhost:5080/game", req)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          rows.push(data);
          setRows([...rows]);
        });
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
