export default function SumbitHighscore({ word, time }) {
  function sendScore() {}

  return (
    <div className="Submit-score-form">
      <p>{word}</p>
      <p>{time}</p>

      <input placeholder="Enter name" type="text"></input>
      <button
        onClick={() => {
          sendScore();
        }}
      >
        send score
      </button>
    </div>
  );
}
