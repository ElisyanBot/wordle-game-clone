import Tile from "./letterTile.js";
import React, { useState, useEffect } from "react";

export default function UserInput({ wordArray }) {
  const [chars, setChars] = useState([" ", " ", " ", " ", " ", ""]);
  let [presses, setPresses] = useState(0);

  function keyboardControl(e) {
    if (e.which >= 65 && e.which <= 90) {
      if (presses < chars.length) {
        chars[presses] = e.key;
        setChars([...chars]);
        setPresses(presses++);
      }
    }

    if (e.key === "Backspace") {
      if (presses < 1) return;
      setPresses(presses--);
      chars[presses] = "";
      setChars([...chars]);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyboardControl);
  }, []);

  return (
    <ul id="user-input">
      {chars.map((char, index) => {
        return <Tile key={index} letter={char} />;
      })}
    </ul>
  );
}
