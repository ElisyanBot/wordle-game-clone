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
  const [gamePhases, setGamePhases] = useState({
    start: false,
    end: false,
    sendScore: false,
  });
  //get word
  const [wordLength, setWordLength] = useState(2);
  const [multiChar, setMultiChar] = useState(false);
  //attempt rows
  const [rows, setRows] = useState([]);

  const PageDisplay = () => {
    if (gamePhases.start) {
      return (
        <GameBoard
          wordLength={wordLength}
          multiChar={multiChar}
          rows={rows}
          setRows={setRows}
          setObj={setGameObj}
          setGamePhases={setGamePhases}
        />
      );
    }

    if (gamePhases.end) {
      return (
        <SumbitHighscore gameObj={gameObj} setGamePhases={setGamePhases} />
      );
    }

    if (gamePhases.sendScore) {
      return <ThxForPlaying />;
    }

    return (
      <CreateGame
        setGamePhases={setGamePhases}
        setMultiChar={setMultiChar}
        setWordLength={setWordLength}
      />
    );
  };

  return (
    <div className="App">
      <HeaderNav attempts={rows.length} />
      {PageDisplay()}
    </div>
  );
}

export default App;
