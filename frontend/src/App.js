import "./App.css";
import { useState } from "react";

//game pages comps
import CreateGame from "./comp/inGame/CreateGamePage.js";
import GameBoard from "./comp/inGame/GameBoard.js";
import SumbitHighscore from "./comp/inGame/submitHighscore.js";
import ThxForPlaying from "./comp/inGame/ThxForPlaying.js";
import HeaderNav from "./comp/inGame/HeaderNav.js";

function App() {
  //overall storage of user-data
  const [gameObj, setGameObj] = useState();
  //game states
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [sentScore, setSentScore] = useState(false);
  //get word
  const [wordLength, setWordLength] = useState(2);
  const [multiChar, setMultiChar] = useState(false);
  //attempt rows
  const [rows, setRows] = useState([]);

  const PageDisplay = () => {
    if (startGame) {
      return (
        <GameBoard
          wordLength={wordLength}
          multiChar={multiChar}
          rows={rows}
          setRows={setRows}
          setObj={setGameObj}
          setEndGame={setEndGame}
          setStartGame={setStartGame}

        />
      );
    }

    if (endGame) {
      return (
        <SumbitHighscore
          gameObj={gameObj}
          setSentScore={setSentScore}
          setEndGame={setEndGame}
        />
      );
    }

    if (sentScore) {
      return <ThxForPlaying />;
    }

    return (
      <CreateGame
        setCreateGame={setStartGame}
        setMultiChar={setMultiChar}
        setWordLength={setWordLength}
      />
    );
  };

  return <div className="App">
    <HeaderNav attempts={rows.length}/>
    {PageDisplay()}
    </div>;
}

export default App;
