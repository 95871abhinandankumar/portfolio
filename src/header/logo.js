import logo from "../assets/images/Logo.png";
import "./header.css";
import { useTranslation } from "react-i18next";
export default function Logo() {
    const { t } = useTranslation();
  return (
    <span className="logo">
        <img src={logo} alt="logo" />
        &nbsp;{t('name')}
      </span>
  );
}