import Tile from "./letterTile.js";
import React, { useState, useEffect } from "react";

export default function UserInput() {
  //få tag på alla tangenter
  //få varje tryck att spara en tangent
  //få funktionen att sluta lägga till tryck efter längd på ordet
  //65 - 90

  const [char, setChar] = useState([" ", " ", " ", " "]);
  let [presses, setPresses] = useState(0);

  function tests(e) {
    if (e.which >= 65 && e.which <= 90) {
      if (presses < char.length) {
        char[presses] = e.key;
        setChar([...char]);
        setPresses(presses++);
      }

      console.log(char, presses);
    }

    if (e.key === "Backspace") {
      if (presses < 0) return;
      setPresses(presses--);
      char[presses] = "";
      setChar([...char]);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", tests);
  }, []);

  return (
    <div id="user-input">
      {char.map((index) => {
        return <Tile letter={index} />;
      })}
    </div>
  );
}
