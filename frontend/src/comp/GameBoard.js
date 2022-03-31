import { useState } from "react";
import AttemptDisplay from "./AttemptDisplay.js";
import UserInput from "./UserInput.js";

export default function GameBoard() {
  const [inputValue, setInputvalue] = useState([]);
  return (
    <div className="game-board">
      <AttemptDisplay  arrayRow={inputValue} />
      <UserInput returnInput={setInputvalue} />
    </div>
  );
}
