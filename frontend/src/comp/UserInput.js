import Tile from "./letterTile.js";
import React, { useState, useEffect } from "react";

export default function UserInput({ wordArray, returnInput }) {
  const [chars, setChars] = useState([" ", " ", " ", " "]);
  let [presses, setPresses] = useState(0);

  function handleKeyPress(e) {
    if (e.which >= 65 && e.which <= 90) {
      console.log(e.which, e.key, presses);
      if (presses < chars.length) {
        chars[presses] = e.key;
        setChars([...chars]);
        setPresses(presses + 1);
      }
    }

    if (e.key === "Backspace") {
      if (presses < 1) return;
      console.log(presses)
      chars[presses - 1] = "";
      setPresses(presses - 1);
      setChars([...chars]);
    }

    if (e.key === "Enter") {
      returnInput([...chars]);
    }
  }
  return (
    <ul tabIndex="-1"
      id="user-input"
      onKeyDown={(e) => handleKeyPress(e)}
    >
      {chars.map((char, index) => {
        return <Tile key={index} letter={char} />;
      })}
    </ul>
  );
}
