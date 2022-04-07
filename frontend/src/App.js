import "./App.css";
import { useState } from "react";

import CreateGame from "./comp/CreateGamePage.js";
import GameBoard from "./comp/inGame/GameBoard.js";
import SumbitHighscore from "./comp/submitHighscore.js";

function App() {
  const [gameObj, setGameObj] = useState();
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [wordLength, setWordLength] = useState(2);
  const [multiChar, setMultiChar] = useState(false);

  const PageDisplay = () => {
    if (startGame) {
      return (
        <GameBoard
          wordLength={wordLength}
          multiChar={multiChar}
          setObj={setGameObj}
          obj={gameObj}
        />
      );
    }

    if (endGame) {
      return <SumbitHighscore />;
    }

    return (
      <CreateGame
        setCreateGame={setStartGame}
        setMultiChar={setMultiChar}
        setWordLength={setWordLength}
      />
    );
  };

  return <div className="App">{PageDisplay()}</div>;
}

export default App;
