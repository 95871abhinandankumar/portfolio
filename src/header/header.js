
import "./header.css";
import Logo from "./logo";
import { useTranslation } from "react-i18next";
export default function Header({onProjectClick, onContactClick, onAboutClick}) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    function scrollToTop(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  return (
    <header className="header">
      <Logo />
      <ul className="nav">
        <li>
          <a href="/" onClick={scrollToTop}><span>#</span>{t('buttons.home')}</a>
        </li>
        <li>
          <a href="/works" onClick={(e) => { e.preventDefault(); onProjectClick(); }}><span>#</span>{t('buttons.works')}</a>
        </li>
        <li>
          <a href="/#" onClick={(e) => { e.preventDefault(); onAboutClick(); }}><span>#</span>{t('buttons.about')}</a>
        </li>
        <li>
          <a href="/#" onClick={(e) => { e.preventDefault(); onContactClick(); }}><span>#</span>{t('buttons.contacts')}</a>
        </li>
        <li>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="hi">HI</option>
          </select>
        </li>
      </ul>
    </header>
  );
}
