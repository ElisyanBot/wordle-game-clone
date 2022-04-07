
import Tile from "../letterTile";

export default function AttemptDisplay({ rows }) {
  return (
    <div className="attempt-window">
      {rows
        .map((row) => {
          return (
            <ul className="attempt-row">
              {row.map((element) => {
                return <Tile classNme={element.result} letter={element.letter} />;
              })}
            </ul>
          );
        })
        .reverse()}
    </div>
  );
}
