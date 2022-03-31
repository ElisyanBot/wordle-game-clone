import { useEffect, useState } from "react";
import Tile from "./letterTile";
// import Tile from "./letterTile";

export default function AttemptDisplay({ arrayRow }) {
  const [rows, setRows] = useState([]);
  // let [count, setCout] = useState(0);

  function handleKeyPress (e) {
    if (e.key === "Enter") {
      rows.push(arrayRow)
      setRows([...rows]);
    }
  }

  // useEffect(() => {
  //   window.addEventListener("keydown", test);
  // }, [test]); //ingore warning of line 16 for now -- need to be calld on mount with out chrashing

  return (
    <div tabIndex={0} className="attempt-window" onKeyDown={(e) => handleKeyPress(e)}>
      {rows
        .map((row) => {
          return (
            <ul className="attempt-row">
              {row.map((element) => {
                return <Tile letter={element} />;
              })}
            </ul>
          );
        })
        .reverse()}
    </div>
  );
}
