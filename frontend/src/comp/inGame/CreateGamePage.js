export default function CreateGame({
  setGamePhases,
  setWordLength,
  setMultiChar,
}) {
  return (
    <div className="game-settings">
      <h2> Create Game</h2>
      <div className="select-word-length">
        <label> length of word</label>
        <select onChange={(e) => setWordLength(e.target.value)} id="wordLength">
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="select-word-chars">
        <label>include multiple characters</label>
        <input
          type="checkbox"
          onChange={(e) => setMultiChar(e.target.checked)}
        />
      </div>
      <button
        onClick={() =>
          setGamePhases({ start: true, end: false, sendScore: false })
        }
      >
        Start Game
      </button>
    </div>
  );
}
