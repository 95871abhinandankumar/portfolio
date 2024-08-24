
import "./header.css";
import Logo from "./logo";
export default function Header() {
  return (
    <header className="header">
      <Logo />
      <ul className="nav">
        <li>
          <a href="/"><span>#</span>home</a>
        </li>
        <li>
          <a href="/works"><span>#</span>works</a>
        </li>
        <li>
          <a href="/#"><span>#</span>about-me</a>
        </li>
        <li>
          <a href="/#"><span>#</span>contacts</a>
        </li>
        <li>
          <select>
            <option value="en">EN</option>
          </select>
        </li>
      </ul>
    </header>
  );
}
