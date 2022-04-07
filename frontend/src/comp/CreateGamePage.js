export default function CreateGame({
  setCreateGame,
  setWordLength,
  setMultiChar,
}) {
   
  return (
    <div className="game-settings">
      <label> lenght of word</label>
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
      <label> include multiple characters </label>
      <input type="checkbox" onChange={(e) => setMultiChar(e.target.checked)} />
      <button onClick={() => setCreateGame(true)}>Start Game</button>
    </div>
  );
}
