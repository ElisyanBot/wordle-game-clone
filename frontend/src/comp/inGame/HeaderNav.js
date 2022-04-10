import ExitBtn from "../exitBtn";

export default function HeaderNav({ time, attempts }) {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>TIME: {time}</li>
          <li className="woordle-logo"></li>
          <li>attempts: {attempts}</li>

          <ExitBtn innerText={"EXIT"} />
        </ul>
      </nav>
    </header>
  );
}
