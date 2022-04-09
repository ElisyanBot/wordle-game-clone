export default function HeaderNav({time, attempts}) {
  return (
    <nav className="header-nav">
      <ul>
        <li>
         TIME: {time}
        </li>
        <li class="woordle-logo"></li>
        <li>
          attempts: {attempts}
        </li>
      </ul>
    </nav>
  );
}
