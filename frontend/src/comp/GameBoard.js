import AttemptDisplay from "./AttemptDisplay.js";
import UserInput from "./UserInput.js";

export default function GameBoard() {
  return (
    <div className="game-board">
      <AttemptDisplay />
      <UserInput />
    </div>
  );
}
