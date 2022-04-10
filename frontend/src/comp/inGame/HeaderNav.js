import { useEffect, useState } from "react";
import ExitBtn from "../exitBtn";

export default function HeaderNav({ gamePhases, attempts }) {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let interval;

    if (gamePhases.start) {
      interval = setInterval(() => {
        setSec((sec) => sec + 1);
      }, 1000);
    } else{
      clearInterval(interval)
    }

    return () => clearInterval(interval);
  }, [gamePhases]);

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            TIME: {Math.floor(0 +((sec / 60) % 60))} m {sec % 60} s
          </li>
          <li className="woordle-logo"></li>
          <li>attempts: {attempts}</li>

          <ExitBtn innerText={"EXIT"} />
        </ul>
      </nav>
    </header>
  );
}
