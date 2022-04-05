export default function Tile({ letter, classNme }) {
  let classes = `letter-tile ` + classNme;
  return <li className={classes}>{letter}</li>;
}
