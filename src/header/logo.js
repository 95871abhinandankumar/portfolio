import logo from "../assets/images/Logo.png";
import "./header.css";
export default function Logo() {
  return (
    <span className="logo">
        <img src={logo} alt="logo" />
        &nbsp; Abhinandan
      </span>
  );
}