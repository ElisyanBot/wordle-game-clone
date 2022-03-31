import Tile from "./letterTile.js";

export default function UserInput({ wordArray }) {
  return (
    <ul id="user-input">
      {wordArray.map((char, index) => {
        return <Tile key={index} letter={char} />;
      })}
    </ul>
  );
}
